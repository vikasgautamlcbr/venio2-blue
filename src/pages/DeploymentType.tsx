import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Cloud, Server, Workflow, Shield, Database, Network, Cog, Lock, CheckCircle2, ArrowRight, FileText, TrendingDown, Zap, Bell } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTABanner from "@/components/CTABanner";
import { useState } from "react";

const typeMap: Record<string, { label: string; Icon: React.ComponentType<{ className?: string }> }> = {
  cloud: { label: "On Cloud", Icon: Cloud },
  "on-premises": { label: "On-premises", Icon: Server },
  hybrid: { label: "Hybrid Deployment", Icon: Workflow },
};

type SectionKey = "end-to-end" | "automation" | "exports";

const DeploymentType = () => {
  const params = useParams();
  const key = (params.type || "").toLowerCase();
  const config = typeMap[key] || { label: params.type || "Deployment", Icon: Server };
  const Icon = config.Icon;
  const title = key === "on-premises" ? "On-premises Deployment" : key === "cloud" ? "Cloud Deployment" : key === "hybrid" ? "Hybrid Deployment" : config.label;
  const description =
    key === "on-premises"
      ? "Enterprise-grade on-premises deployment with air-gapped options, single database architecture, and complete control."
      : key === "cloud"
      ? "Secure, scalable cloud deployment with enterprise controls and rapid provisioning."
      : key === "hybrid"
      ? "Hybrid deployment model combining on-premises control with cloud scalability."
      : "Deployment options overview for Venio Systems.";
  const benefitsSubtitle =
    key === "on-premises"
      ? "Why teams choose on‑premises with Venio"
      : key === "cloud"
      ? "Why teams choose cloud deployment with Venio"
      : key === "hybrid"
      ? "Why teams choose hybrid deployment with Venio"
      : "Why teams choose Venio";

  if (typeof document !== "undefined") {
    document.title = `${title} - Venio Systems`;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", description);
      document.head.appendChild(meta);
    }
    const scriptId = "ld-json-deployment";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "url": `${window.location.origin}/deployment/${key || "on-premises"}`,
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/deployment/${key || "on-premises"}`);
  }

  const [activeSection, setActiveSection] = useState<SectionKey | undefined>("end-to-end");
  const previewLabel =
    activeSection === "end-to-end"
      ? "End‑to‑End Preview"
      : activeSection === "automation"
      ? "Automation Preview"
      : activeSection === "exports"
      ? "Exports Preview"
      : "On‑prem Platform Preview";
  const PreviewIcon = activeSection === "automation" ? Bell : activeSection === "exports" ? FileText : Database;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
          <div className="absolute inset-0">
            <div className="absolute bottom-28 right-10 w-[420px] h-[420px] bg-accent/20 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-16 right-24 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/70" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed mx-auto">
              {description}
            </p>
            <div className="mt-8 flex gap-3 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                <Link to="/pricing">Get Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/20 px-6 py-4">
                <Link to="/pricing#calculator">Calculate On-Prem ROI</Link>
              </Button>
            </div>
          </div>
        </section>
        {(key === "on-premises" || key === "cloud" || key === "hybrid") && (
          <>
            <section className="py-20 px-6 bg-white border-t border-border/50">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Benefits</h2>
                  <p className="text-muted-foreground">{benefitsSubtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="group relative bg-card/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                      <div className="relative">
                        <div className="inline-flex p-4 rounded-xl bg-secondary/10 border border-secondary/20 mb-4">
                          <Shield className="h-8 w-8 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Data Sovereignty</h3>
                        <p className="text-muted-foreground">Keep 100% of your sensitive data within your secure perimeter. Ideal for government agencies, financial institutions, and strict GDPR compliance requirements.</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                      <div className="relative">
                        <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                          <TrendingDown className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Predictable Economics</h3>
                        <p className="text-muted-foreground">Eliminate recurring per‑GB cloud hosting fees. Leverage your existing hardware investment for a significantly lower Total Cost of Ownership (TCO) on long‑running matters.</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="group relative bg-card/80 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                      <div className="relative">
                        <div className="inline-flex p-4 rounded-xl bg-accent/10 border border-accent/20 mb-4">
                          <Zap className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Unshared Performance</h3>
                        <p className="text-muted-foreground">No shared tenants. No throttling. Utilize 100% of your server&apos;s compute power to process up to 10TB of data per day with dedicated resources.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-16 px-6">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Capabilities</h2>
                  <p className="text-sm text-muted-foreground">Trusted by law firms, corporations, and government agencies</p>
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
                                <span className="leading-tight">End-to-End eDiscovery</span>
                              </AccordionTrigger>
                              <AccordionContent className="pl-6">
                                <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                                  Handle legal hold, ingestion, analysis, review, and production in one unified system.
                                </p>
                                <div className="grid gap-3">
                                  {["Legal Hold management","Ingestion and analysis","AI-powered review","Production workflows"].map((t) => (
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
                                  Automated custodian notices, reminders, and audit trails managed from a single dashboard.
                                </p>
                                <div className="grid gap-3">
                                  {["Automated notices and reminders","Custodian management","Dashboard-driven control","Audit-ready workflows"].map((t) => (
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
                                <span className="leading-tight">Production-Ready Exports</span>
                              </AccordionTrigger>
                              <AccordionContent className="pl-6">
                                <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                                  Generate exports in standard formats with built-in slipsheets and Bates stamping.
                                </p>
                                <div className="grid gap-3">
                                  {["Standard formats","Slipsheets","Bates stamping","Audit logs"].map((t) => (
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

            <CTABanner />

            {/* Testimonials */}
            <TestimonialsSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentType;
