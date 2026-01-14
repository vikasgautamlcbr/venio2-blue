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

const ForLitigationSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== "undefined") {
      document.title = "For Litigation Support Teams - Venio Systems";
      const desc = "Automate processing, streamline review, and ensure defensible productions for complex matters. Built for litigation support efficiency.";
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", desc);
        document.head.appendChild(meta);
      }
      const scriptId = "ld-json-for-litigation-support";
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = scriptId;
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "For Litigation Support Teams",
        "url": window.location.origin + "/for-litigation-support"
      });
      document.head.appendChild(ld);
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + "/for-litigation-support");
    }
  }, []);

  type SectionKey = "end-to-end" | "automation" | "exports";
  const [activeSection, setActiveSection] = useState<SectionKey | undefined>("end-to-end");
  const previewLabel =
    activeSection === "end-to-end"
      ? "End‑to‑End Preview"
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
                Equip Your Litigation Support Team
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Automate processing, accelerate review, and deliver defensible productions—built to support complex litigation workflows at scale.
              </p>
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6">
                <Link to="/book-a-demo" className="flex items-center gap-2">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative z-10 w-full mt-16">
            <p className="text-white/70 text-sm mb-6 font-body text-center"><span className="border-b-2 border-[#3DC47E] pb-1">Trusted by leading organizations</span></p>
            <div className="overflow-hidden py-6">
              <div className="flex gap-24 animate-scroll">
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
                    key={`first-${index}`} 
                    className="flex-shrink-0"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                ))}
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
                    key={`second-${index}`} 
                    className="flex-shrink-0"
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
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why other approaches fail</h2>
              <p className="text-lg text-muted-foreground">Point tools and manual workflows create risk and cost. Venio unifies process, applies AI where it matters, and keeps control where it’s needed.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Workflow className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fragmented Workflows</h3>
                  <p className="text-muted-foreground">Multiple tools, many handoffs.</p>
                </CardContent>
              </Card>
              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Operational Drag</h3>
                  <p className="text-muted-foreground">Slow cycles, manual effort.</p>
                </CardContent>
              </Card>
              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hidden Costs</h3>
                  <p className="text-muted-foreground">Hosting, per-GB fees, vendor reliance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The pillars of Venio Advantage</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 md:row-span-2">
                <Card className="glass hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden rounded-2xl">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-80 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Shield className="h-32 w-32 text-accent/30 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold mb-4">Unified End-to-End</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">Legal Hold → Ingestion → ECA → Review → Production in one platform. Fewer transfers, less risk, complete auditability.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <Brain className="h-16 w-16 text-accent/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">AI-Powered Acceleration</h3>
                    <p className="text-sm text-muted-foreground">CAL/TAR, prioritization, clustering, and auto-tagging reduce reviewer workload.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-500/15 to-accent/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <Cloud className="h-16 w-16 text-blue-500/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Flexible Deployment</h3>
                    <p className="text-sm text-muted-foreground">Cloud, hybrid, or on-prem—choose the model that fits governance.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-green-500/15 to-accent/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <DollarSign className="h-16 w-16 text-green-500/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Radical Cost Control</h3>
                    <p className="text-sm text-muted-foreground">Early culling and optimized hosting deliver predictable total cost of ownership.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-purple-500/15 to-accent/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <FileCheck className="h-16 w-16 text-purple-500/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Defensible Process</h3>
                    <p className="text-sm text-muted-foreground">Immutable audit trails, custodial tracking, and production QC built in.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-orange-500/15 to-accent/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <Database className="h-16 w-16 text-orange-500/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Modern Data Coverage</h3>
                    <p className="text-sm text-muted-foreground">Native ingestion for email, cloud apps, chats, multimedia, and mobile sources.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 bg-white border-t border-border/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Deployment Options</h2>
              <p className="text-muted-foreground">Choose the model that fits your security and governance strategy</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group relative bg-card/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-secondary/10 border border-secondary/20 mb-4">
                      <Cloud className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">On Cloud</h3>
                    <p className="text-muted-foreground mb-4">Secure, scalable cloud deployment with enterprise controls and rapid provisioning.</p>
                    <Button asChild variant="outline">
                      <Link to="/deployment/cloud">Explore Cloud</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(11,28,63,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                      <Server className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">On-premises</h3>
                    <p className="text-muted-foreground mb-4">Enterprise-grade on-premises deployment, single database architecture, complete control.</p>
                    <Button asChild variant="outline">
                      <Link to="/deployment/on-premises">Explore On‑prem</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="group relative bg-card/80 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(50,220,120,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-accent/10 border border-accent/20 mb-4">
                      <Workflow className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Hybrid</h3>
                    <p className="text-muted-foreground mb-4">Optimize deployments to match matter complexity and timelines.</p>
                    <Button asChild variant="outline">
                      <Link to="/deployment/hybrid">Explore Hybrid</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white border-t border-border/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Benefits</h2>
              <p className="text-sm text-muted-foreground">Why litigation support teams choose Venio</p>
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
                            Ingestion, analysis, review, and production under one roof for streamlined operations.
                          </p>
                          <div className="grid gap-3">
                            {["Complex data handling","AI‑assisted review","Batch operations","Production workflows"].map((t) => (
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
                            Automations reduce manual steps and create comprehensive audit trails.
                          </p>
                          <div className="grid gap-3">
                            {["Reusable templates","Automated follow‑ups","Acknowledgement tracking","Defensible logs"].map((t) => (
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
                            Defensible productions that reduce QC time and errors.
                          </p>
                          <div className="grid gap-3">
                            {["Relativity output","Load file options","Redaction automation","Production validation"].map((t) => (
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Core capabilities for litigation support teams</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FileCheck, label: "Create & Launch", desc: "Launch fast with templates" },
                  { icon: Users, label: "Team Coordination", desc: "Roles and workflows" },
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

export default ForLitigationSupport;
