import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is eDiscovery Software?",
      answer: "eDiscovery (electronic discovery) software helps legal teams identify, collect, process, review, and produce electronically stored information (ESI) for litigation, investigations, or compliance. Venio's AI-powered platform automates this process, reducing time and costs."
    },
    {
      question: "How does AI Improve eDiscovery?",
      answer: "AI accelerates document review through predictive coding, email threading, and near-duplicate detection. Venio's AI reduces manual effort by 70% and improves accuracy in identifying relevant evidence."
    },
    {
      question: "Is Venio's Platform Secure for Sensitive Legal Data?",
      answer: "Yes. Venio is SOC 2 Type II certified, GDPR-compliant, and offers encryption at rest/in transit. Choose cloud, on-premises, or hybrid deployment to meet your security needs."
    },
    {
      question: "What's the Difference Between Cloud and On-premises eDiscovery?",
      answer: "Cloud: Fast deployment, scalable, and accessible anywhere.\nOn-Premises: Full data control for highly regulated industries.\nVenio offers both, plus hybrid options."
    },
    {
      question: "How Quickly Can I Start Using Venio?",
      answer: "Venio's platform can be set up in minutes. Either cloud, on-premises, or hybrid, our team will assist you with deployment. Schedule a demo today."
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-muted/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Everything you need to know about Venio's eDiscovery platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-2xl px-6 md:px-8 border-2 border-transparent hover:border-secondary/30 transition-all duration-300 group hover:shadow-lg overflow-hidden relative"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Accordion type="single" collapsible className="relative z-10">
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-primary/80 py-6 hover:no-underline">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-secondary to-accent text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="pr-4">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-6 pl-12 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
