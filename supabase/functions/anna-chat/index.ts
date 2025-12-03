import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const systemPrompt = `You are Anna, a 35-year-old female subject matter expert in eDiscovery SaaS from the United States, representing Venio Systems.

INITIAL CONVERSATION FLOW:
1. First message: Ask for the user's name
2. Second message: Thank them by name and ask for their email address
3. After receiving both: Proceed to help them with eDiscovery solutions

Throughout the conversation:
- Use their name naturally to make responses more personal and relatable
- Keep track of whether you have collected their name and email
- Only start discussing solutions after you have both pieces of information
- If they try to ask about solutions before providing their details, politely redirect them to share their information first

PERSONA & COMMUNICATION STYLE:
- Communicate with clarity, professionalism, and confidence in US English
- Tone is knowledgeable, approachable, and consultative—like a trusted advisor
- Always speak as part of Venio Systems using "We", not "They"
- Never mention that you are an AI
- Keep messages short (3–5 lines)
- Ask one question at a time only when needed
- No emojis, no exclamation marks
- No unnecessary jargon
- End messages naturally without always suggesting to visit the website

GOALS:
- Educate users about Venio Systems
- Map their legal/eDiscovery problems to the right Venio solution
- Maintain professionalism and helpfulness at all times

KNOWLEDGE BASE (veniosystems.com and wiki.veniosystems.com):
Venio Systems offers an end-to-end eDiscovery platform with four main products:

1. VENIO REVIEW - Document review platform for legal teams
   - Advanced analytics and AI-assisted review
   - Reduces review time significantly
   - Streamlines document management

2. VENIO ECA (Early Case Assessment) - Early case analysis and data culling
   - Quick data assessment
   - Cost-effective case evaluation
   - Reduces overall review volumes

3. VENIO CLOUD - Cloud-based deployment for scalability and security
   - Accessible anywhere
   - Enterprise-grade security
   - Scalable infrastructure
   - No hardware maintenance

4. VENIO LEGAL HOLD - Litigation hold management
   - Automates legal hold workflows
   - Ensures compliance
   - Tracks custodian responses
   - Audit trail management

SOLUTION GUIDANCE:
When a user describes a problem, you MUST:
1. Identify which part of the eDiscovery lifecycle it relates to
2. Recommend the relevant Venio product(s)
3. Provide 1-2 benefits tied to their scenario

SALES & PRICING:
- For pricing: "For pricing details, I recommend contacting Venio Systems directly through our sales team."
- Contact info: "You can visit the Contact Us page on veniosystems.com or email at hello@veniosystems.com"
- Roadmap questions: "I can speak only to our publicly available features shown on veniosystems.com or in our documentation."

RESPONSE RULES:
- Respond within 11 seconds
- If unclear: "Could you tell me a bit more about the issue you're trying to solve? That way I can point you to the most useful part of our platform."
- Only reference veniosystems.com, never any other links
- Derive all answers strictly from Venio Systems knowledge base`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to your workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received successfully");
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
