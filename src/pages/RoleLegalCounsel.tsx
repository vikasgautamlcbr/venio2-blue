import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CTABanner from "@/components/CTABanner";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Brain, Cloud, Server, Workflow, DollarSign, Database, ArrowRight, Users, FileCheck, Bell, FileText, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";

const RoleLegalCounsel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== "undefined") {
      document.title = "For Legal Counsel - Venio Systems";
      const desc = "Oversight, defensible process, and strategic insights across the eDiscovery lifecycle for Legal Counsel.";
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", desc);
        document.head.appendChild(meta);
      }
      const scriptId = "ld-json-role-legal-counsel";
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = scriptId;
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "For Legal Counsel",
        "url": window.location.origin + "/role-legal-counsel"
      });
      document.head.appendChild(ld);
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + "/role-legal-counsel");
    }
  }, []);

  type SectionKey = "end-to-end" | "automation" | "exports";
  const [activeSection, setActiveSection] = useState<SectionKey | undefined>("end-to-end");
  const previewLabel =
    activeSection === "end-to-end"
      ? "Oversight Preview"
      : activeSection === "automation"
      ? "Automation Preview"
      : activeSection === "exports"
      ? "Exports Preview"
      : "Platform Preview";
  const PreviewIcon = activeSection === "automation" ? Bell : activeSection === "exports" ? FileText : Database;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero" className="relative min-h-[75vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute top-24 right-28 w-32 h-32 bg-secondary/25 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-1/2 right-36 w-60 h-60 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          <div className="relative z-10 container mx-auto px-6 max-w-5xl flex-1 flex items-center">
            <div className="text-center animate-fade-in w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Tools for Legal Counsel
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Manage risk, ensure defensible process, and gain strategic visibility across matters with AI‑powered insights.
              </p>
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6">
                <Link to="/book-a-demo" className="flex items-center gap-2">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-6 max-w-6xl pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
              {[
                { src: amentum, name: "Amentum" },
                { src: array, name: "Array" },
                { src: cds, name: "CDS" },
                { src: consilio, name: "Consilio" },
                { src: epario, name: "Epario" },
                { src: haugPartners, name: "Haug Partners" },
                { src: nixonPeabody, name: "Nixon Peabody" },
                { src: proteus, name: "Proteus" }
              ].map((logo, index) => (
                <div 
                  key={index}
                  className="rounded-xl bg-white/10 p-3 border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white border-t border-border/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Benefits</h2>
              <p className="text-sm text-muted-foreground">Why legal counsel teams choose Venio</p>
            </div>
            <Card className="rounded-2xl bg-transparent overflow-hidden border-none shadow-none">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-14 items-start">
                  <div>
                    <Accordion
                      type="single"
                      collapsible
                      className="space-y-6"
                      value={activeSection}
                      onValueChange={(v: SectionKey | undefined) => setActiveSection(v)}
                    >
                      <AccordionItem value="end-to-end" className="border-b-0">
                        <AccordionTrigger className="group relative flex items-center justify-start gap-3 text-left text-2xl font-bold hover:no-underline rounded-2xl border border-transparent px-6 py-6 transition-all data-[state=open]:border-accent data-[state=open]:bg-accent/10 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-accent/30 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 [&>svg]:hidden">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-accent/30 text-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white group-data-[state=open]:border-transparent group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-accent/30">
                            <Database className="w-6 h-6" />
                          </div>
                          <span className="leading-tight">End-to-End Oversight</span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6">
                          <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                            Full visibility from legal hold through production with defensible controls.
                          </p>
                          <div className="grid gap-3">
                            {["Legal Hold governance","Analysis and review oversight","Compliance checks","Production validation"].map((t) => (
                              <div key={t} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="automation" className="border-b-0">
                        <AccordionTrigger className="group relative flex items-center justify-start gap-3 text-left text-2xl font-bold hover:no-underline rounded-2xl border border-transparent px-6 py-6 transition-all data-[state=open]:border-accent data-[state=open]:bg-accent/10 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-accent/30 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 [&>svg]:hidden">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-accent/30 text-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white group-data-[state=open]:border-transparent group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-accent/30">
                            <Bell className="w-6 h-6" />
                          </div>
                          <span className="leading-tight">Automation & Audit Trails</span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6">
                          <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                            Automated reminders and logs to ensure policy adherence and defensibility.
                          </p>
                          <div className="grid gap-3">
                            {["Policy integration","Automated follow‑ups","Acknowledgement tracking","Defensible logs"].map((t) => (
                              <div key={t} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="exports" className="border-b-0">
                        <AccordionTrigger className="group relative flex items-center justify-start gap-3 text-left text-2xl font-bold hover:no-underline rounded-2xl border border-transparent px-6 py-6 transition-all data-[state=open]:border-accent data-[state=open]:bg-accent/10 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-accent/30 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 [&>svg]:hidden">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-accent/30 text-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white group-data-[state=open]:border-transparent group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-accent/30">
                            <FileText className="w-6 h-6" />
                          </div>
                          <span className="leading-tight">Production & Exports</span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6">
                          <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                            Defensible productions aligned with case strategy and compliance requirements.
                          </p>
                          <div className="grid gap-3">
                            {["Load file options","Redaction automation","Production validation","Export flexibility"].map((t) => (
                              <div key={t} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <div className="rounded-2xl bg-transparent border border-accent/30 h-[529px] flex items-center justify-center">
                      <div className="text-center p-10">
                        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl border border-accent/30 text-accent flex items-center justify-center">
                          <PreviewIcon className="w-8 h-8" />
                        </div>
                        <p className="text-base font-semibold text-slate-900 mb-1">{previewLabel}</p>
                        <p className="text-sm text-muted-foreground">Product Screenshot Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Core capabilities for legal counsel</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FileCheck, label: "Create & Launch", desc: "Set up holds in minutes" },
                  { icon: Users, label: "Custodian Tracking", desc: "Real-time status monitoring" },
                  { icon: Shield, label: "Audit & Release", desc: "Complete defensibility" },
                ].map((step, index) => (
                  <Card key={index} className="glass text-center hover:shadow-xl transition-all duration-300 border-border/50">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold">{step.label}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CaseStudiesSection />
        <CTABanner />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default RoleLegalCounsel;

