import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
      setShowOverlay(false);
      setIsEmailSubmitted(true);
    }
  };

  

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
      >
        <MessageCircle size={32} strokeWidth={2} />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg w-[95vw] max-w-[1200px] max-h-[90vh] flex gap-6 p-6 relative overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-2xl text-muted-foreground hover:text-foreground z-10"
            >
              <X size={24} />
            </button>

            {/* Left Side - AI Avatar */}
            <div className="w-1/4 flex flex-col max-md:w-full">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-muted relative">
                <iframe
                  src="https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9CbGFja19TdWl0X3B1YmxpYyIs%0D%0AInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2RhNWNiYTZi%0D%0AYzdiMzRjNWVhMTM5Zjc3ZGE5OGZkYzA0XzU1MzcwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVk%0D%0AUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiNDE0NWM1OGZiNmFhNGYx%0D%0AMGExYWYzMWRjZDgwZWY3NjYiLCJ1c2VybmFtZSI6ImJjOWVhNDZkNDQ0MDRlZWE4YjBiNzA5NjBk%0D%0AMjY0MTczIn0%3D&inIFrame=1"
                  allow="microphone"
                  title="AI Avatar"
                  className="w-full h-full border-none"
                />
                {showOverlay && (
                  <div className="absolute inset-0 bg-gray-900/30 pointer-events-auto cursor-not-allowed" />
                )}
              </div>

              <div className="text-center mb-2">
                <p className="text-muted-foreground text-sm mb-3">
                  Speak Live with Anna in real time.
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  Enter your email to start the conversation.
                </p>
              </div>

              {!isEmailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com*"
                    required
                    maxLength={255}
                    className="w-full px-3 py-2 border border-border rounded-md text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-full text-sm transition-colors"
                  >
                    Speak with Anna
                  </button>
                </form>
              ) : (
                <Link
                  to="/book-a-demo"
                  className="w-full px-4 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-full text-sm transition-colors text-center"
                >
                  Book a Demo
                </Link>
              )}
            </div>

            {/* Right Side - Product Demo */}
            <div className="w-3/4 rounded-lg overflow-hidden max-md:hidden flex items-center">
              <div className="w-full">
                <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
                <div className="relative pb-[calc(56.25%+25px)] w-full h-0">
                  <iframe
                    loading="lazy"
                    src="https://app.storylane.io/demo/pjaaebjnr9nb?embed=inline"
                    name="sl-embed"
                    allow="fullscreen"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border border-border/35 shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default ChatbotWidget;
