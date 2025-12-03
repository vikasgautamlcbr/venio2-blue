import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import annaAvatar from "@/assets/anna-avatar.gif";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING = "Hi, I'm Anna. Before we dive into how Venio can help you, I'd love to know who I'm speaking with. What's your name?";

const FADE_DISTANCE = 60; // pixels from top where fade starts

type CollectionMode = "name" | "email" | "chat";

export const AnnaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [collectionMode, setCollectionMode] = useState<CollectionMode>("name");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messageOpacities, setMessageOpacities] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  const calculateOpacities = () => {
    if (!scrollContainerRef.current) return;
    
    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const fadeThreshold = containerTop + FADE_DISTANCE;
    
    const newOpacities = messageRefs.current.map((ref, index) => {
      if (!ref) return 1;
      
      const messageRect = ref.getBoundingClientRect();
      const messageTop = messageRect.top;
      const messageBottom = messageRect.bottom;
      
      // Always keep first message at full opacity when visible
      if (index === 0 && messageTop >= containerTop) {
        return 1;
      }
      
      // Message is fully visible - no fade
      if (messageTop >= fadeThreshold) {
        return 1;
      }
      
      // Message is completely scrolled out
      if (messageBottom <= containerTop) {
        return 0;
      }
      
      // Message is in the fade zone at the top
      if (messageTop < fadeThreshold && messageTop >= containerTop) {
        const distanceIntoFadeZone = messageTop - containerTop;
        return Math.max(0, Math.min(1, distanceIntoFadeZone / FADE_DISTANCE));
      }
      
      // Message is partially scrolled out
      if (messageTop < containerTop && messageBottom > containerTop) {
        return 0.3; // Partial visibility
      }
      
      return 1;
    });
    
    setMessageOpacities(newOpacities);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    calculateOpacities();
    container.addEventListener('scroll', calculateOpacities);
    
    return () => container.removeEventListener('scroll', calculateOpacities);
  }, [messages]);

  useEffect(() => {
    // Focus input after loading completes
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Handle name collection
    if (collectionMode === "name") {
      const name = input.trim();
      setUserName(name);
      const userMessage: Message = { role: "user", content: name };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      
      const assistantMessage: Message = {
        role: "assistant",
        content: `Thank you, ${name}. Could you please share your email address with me?`,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setCollectionMode("email");
      return;
    }

    // Handle email collection
    if (collectionMode === "email") {
      const email = input.trim();
      setUserEmail(email);
      const userMessage: Message = { role: "user", content: email };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      // Send collected data to backend
      try {
        const { data, error } = await supabase.functions.invoke("anna-chat", {
          body: { 
            messages: [...messages, userMessage],
            userName,
            userEmail: email
          },
        });

        if (error) throw error;

        if (data?.choices?.[0]?.message?.content) {
          const assistantMessage: Message = {
            role: "assistant",
            content: data.choices[0].message.content,
          };
          setMessages((prev) => [...prev, assistantMessage]);
        }
        setCollectionMode("chat");
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // Normal chat mode
    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("anna-chat", {
        body: { 
          messages: [...messages, userMessage],
          userName,
          userEmail
        },
      });

      if (error) throw error;

      if (data?.choices?.[0]?.message?.content) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
        {/* Centered Avatar with Info */}
        <div className="flex flex-col items-center gap-3 mb-6 animate-fade-in">
          <Avatar className="h-20 w-20 border-4 border-white/30 shadow-2xl backdrop-blur-sm">
            <AvatarImage src={annaAvatar} alt="Anna" />
            <AvatarFallback className="bg-primary/10 text-xl">A</AvatarFallback>
          </Avatar>
          <div className="bg-[#0097FF]/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-white/20">
            <p className="text-sm text-white font-medium">Ask me anything about Venio's legal solutions</p>
          </div>
        </div>

      {/* Floating Messages Container with Fade Effect */}
      <div className="relative mb-6">
        {/* Scrollable Messages with Custom Scrollbar */}
        <div 
          ref={scrollContainerRef}
          className="space-y-6 max-h-[500px] overflow-y-auto px-4 pt-4 scroll-smooth custom-scrollbar pr-2"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              ref={(el) => (messageRefs.current[index] = el)}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } animate-fade-in transition-opacity duration-150`}
              style={{ opacity: messageOpacities[index] ?? 1 }}
            >
            <Card
              className={`max-w-[80%] p-4 backdrop-blur-lg border ${
                message.role === "user"
                  ? "bg-primary/80 text-primary-foreground shadow-lg border-white/20"
                  : "bg-white/20 backdrop-blur-md border-white/30 shadow-md text-white"
              }`}
            >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </Card>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-fade-in">
              <Card className="max-w-[80%] p-4 bg-white/20 backdrop-blur-md border-white/30 shadow-md text-white">
                <div className="flex gap-2 items-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Anna is typing...</span>
                </div>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Smart Input Transformation */}
      <div className="px-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="relative flex items-center bg-white/20 backdrop-blur-lg rounded-lg px-6 py-3 border border-white/30 shadow-lg transition-all duration-300">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              collectionMode === "name" 
                ? "Enter your name..." 
                : collectionMode === "email" 
                ? "Enter your email address..." 
                : "Type your message..."
            }
            type={collectionMode === "email" ? "email" : "text"}
            disabled={isLoading}
            className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 placeholder:text-white/60 text-white pr-12"
            autoFocus
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            size="icon"
            className="absolute right-2 shrink-0 h-10 w-10 bg-white hover:bg-white border border-white/30 text-[#0097FF] shadow-sm"
            variant="ghost"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-[#0097FF]" />
            ) : (
              <Send className="h-5 w-5 text-[#0097FF]" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
