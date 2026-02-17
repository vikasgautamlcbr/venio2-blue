import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Cloud, Server, Workflow, Shield, Database, Network, Cog, Lock, CheckCircle2, ArrowRight, FileText, TrendingDown, Zap, Bell, Sparkles, Scale, Building2, Landmark, ShieldCheck, Globe2, LockKeyhole, LifeBuoy, Users, Rocket, Brain, BarChart3, Monitor, Gauge } from "lucide-react";
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
      ? "Deploy enterprise‑grade cloud eDiscovery that scales on demand, protects sensitive data, and delivers defensible outcomes—without infrastructure overhead."
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
  const heroTitle = key === "cloud" ? "Secure. Scalable. Defensible Cloud eDiscovery." : title;

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{heroTitle}</h1>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed mx-auto">
              {description}
            </p>
            {key === "cloud" && (
              <p className="text-white/80 text-base max-w-3xl leading-relaxed mx-auto mt-4">
                Built for corporate legal teams, law firms, government agencies, and regulated organizations managing complex discovery workloads.
              </p>
            )}
            <div className="mt-8 flex gap-3 justify-center">
              {key === "cloud" ? (
                <>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Link to="/book-a-demo">Request Cloud Demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/20 px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Link to="/pricing">See Pricing</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                    <Link to="/pricing">Get Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/20 px-6 py-4">
                    <Link to="/pricing#calculator">Calculate On-Prem ROI</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>
        {(key === "on-premises" || key === "cloud" || key === "hybrid") && (
          key === "cloud" ? (
            <>
              <section className="py-20 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Who Venio Cloud Is Built For</h2>
                    <p className="text-muted-foreground">Venio Cloud is purpose‑built for organizations where discovery is high‑risk, high‑volume, and time‑sensitive.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { title: "Law Firms", desc: "Handling large, multi‑matter discovery across clients", Icon: Scale },
                      { title: "Corporate", desc: "Managing litigation, investigations, and regulatory response", Icon: Building2 },
                      { title: "Government", desc: "Responding to FOIA, investigations, and enforcement actions", Icon: Landmark },
                      { title: "Regulated Industries", desc: "Strict security, audit, and data residency requirements", Icon: ShieldCheck },
                    ].map(({ title, desc, Icon }, index) => (
                      <Card key={title} className="rounded-2xl bg-white border border-border/40 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-8">
                    If your discovery work cannot tolerate downtime, data exposure, or unpredictable costs, Venio Cloud is designed for you.
                  </p>
                </div>
              </section>

              <section className="py-20 px-6 bg-white border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Deploy Cloud eDiscovery with Venio</h2>
                    <p className="text-muted-foreground">Venio Cloud provides the full feature set of Venio eDiscovery in a managed, scalable SaaS model.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Enterprise‑Grade Security by Design", desc: "SOC 2 Type II certified infrastructure with encryption, audit trails, and access controls engineered for defensibility." },
                      { title: "Elastic Scale for Demanding Matters", desc: "Automatically scale processing and review capacity to meet peak matter demands without hardware limits." },
                      { title: "Predictable, Transparent Costs", desc: "Move from CapEx to controlled OpEx with flexible pricing models and clear usage visibility." },
                      { title: "Unified End‑to‑End Workflows", desc: "Eliminate tool sprawl with one platform covering ingestion, processing, review, analytics, and production." },
                    ].map((item, index) => (
                      <Card key={item.title} className="rounded-2xl bg-white border border-border/40 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6">
                          <div className="border-l-4 border-accent pl-4">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              <section className="py-20 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Designed for Distributed Legal Teams</h2>
                    <p className="text-muted-foreground">Whether you’re a global law firm or a corporate legal department, the cloud removes the barriers to evidence access.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Distributed/Remote Review", desc: "Invite contract reviewers and experts from any location with secure, zero‑footprint access.", Icon: Users },
                      { title: "Variable Case Loads", desc: "Scale up for a second request or down during quiet months. Pay for the resources you use.", Icon: Zap },
                      { title: "Rapid Project Kickoff", desc: "Ideal for boutique firms and corporate departments needing to respond in under 24 hours.", Icon: Rocket },
                    ].map(({ title, desc, Icon }, index) => (
                      <Card key={title} className="rounded-2xl bg-white border border-border/40 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6">
                          <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              <section className="py-20 px-6 bg-white border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-7xl">
                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Architecture of Isolation.</h2>
                      <p className="text-muted-foreground mb-6">
                        Unlike shared‑everything providers, Venio Cloud offers single‑tenant isolation. Your data sits in a dedicated instance, ensuring no commingling with other clients.
                      </p>
                      <div className="space-y-4">
                        {[
                          { title: "Regional Residency", desc: "Choose your hosting region (US, EU, Canada, Asia) to comply with localized data transfer laws.", Icon: Globe2 },
                          { title: "Encrypted by Default", desc: "FIPS‑compliant encryption for all data at rest and in transit.", Icon: LockKeyhole },
                          { title: "Disaster Recovery", desc: "Automatic multi‑zone backups ensure your work product is never lost during extreme infrastructure events.", Icon: LifeBuoy },
                        ].map(({ title, desc, Icon }) => (
                          <div key={title} className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                              <Icon className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <p className="font-semibold">{title}</p>
                              <p className="text-sm text-muted-foreground">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl bg-primary text-white p-8 border border-white/10 shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-white/70 mb-6">
                        <span>Behind‑the‑firewall architecture</span>
                        <span>Single‑tenant</span>
                      </div>
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                            <Database className="h-6 w-6 text-white" />
                          </div>
                          <div className="h-px flex-1 bg-white/30" />
                          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                            <Network className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {["Worker 1", "Worker 2", "Worker 3"].map((t) => (
                            <div key={t} className="rounded-xl bg-white/10 border border-white/10 text-center text-xs py-3">{t}</div>
                          ))}
                        </div>
                        <div className="mt-6 text-xs text-white/70 space-y-2">
                          <p>• Modular load balancing active</p>
                          <p>• Distributed queue manager status: ready</p>
                          <p>• Internal API access only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-20 px-6 bg-primary text-white border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover the Power of Venio Cloud.</h2>
                    <p className="text-white/80">Venio Cloud delivers the functionality you need to manage discovery processes in‑house.</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Fully Managed Cloud‑Scale Infrastructure", desc: "Venio maintains the infrastructure so your team can focus on discovery outcomes.", Icon: Server },
                      { title: "AI‑Powered TAR/CAL", desc: "Native, self‑learning review tools reduce reviews by up to 90%.", Icon: Brain },
                      { title: "Data Visualizations", desc: "Interactive analytics reduce costs and surface insights immediately.", Icon: BarChart3 },
                      { title: "Self‑Service Interface", desc: "Create cases, upload data, analyze, search, review, and produce with ease.", Icon: Monitor },
                      { title: "Unlimited Processing Throughput", desc: "Process at industry‑leading speeds and scale across thousands of users and cases.", Icon: Gauge },
                      { title: "Automation of Almost All Processes", desc: "Eliminate manual tasks with automation that accelerates productivity.", Icon: Cog },
                    ].map(({ title, desc, Icon }, index) => (
                      <Card key={title} className="rounded-2xl bg-white text-primary border border-white/10 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6">
                          <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden py-24 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(96,165,250,0.10),transparent_60%)]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                  <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-4">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">Deployment Options</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Flexible Deployment for Demanding eDiscovery Workflows</h2>
                    <p className="text-muted-foreground">Choose cloud, on‑premises, or hybrid based on your data gravity, security posture, and budget.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-accent/40 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      <CardContent className="p-10 flex flex-col h-full">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">MAXIMUM CONTROL</div>
                        <h3 className="text-2xl font-semibold mb-2">On‑Premises</h3>
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-secondary rounded-full mb-6" />
                        <p className="text-sm text-muted-foreground mb-4">Deploy Venio behind your firewall on your own hardware. Built for strict governance and existing infrastructure investments.</p>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-muted-foreground">WHO IT’S FOR</p>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Government agencies</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Law Enforcement</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Financial Institutions</span></li>
                          </ul>
                        </div>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-muted-foreground">TYPICAL USE CASE</p>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Highly sensitive IP or internal investigations where data cannot leave the network</span></li>
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-accent/10 border border-accent/20 p-4 mb-6">
                          <p className="text-sm italic">“Zero Feature Compromise. On‑Prem offers the exact same code base, AI, and power as our Cloud version.”</p>
                        </div>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white mt-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                          <Link to="/deployment/on-premises">Explore On‑Premises</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-accent/40 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                      <CardContent className="p-10 flex flex-col h-full">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">ELASTIC SCALE</div>
                        <h3 className="text-2xl font-semibold mb-2">Venio Cloud</h3>
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-secondary rounded-full mb-6" />
                        <p className="text-sm text-muted-foreground mb-4">Leverage Venio’s managed infrastructure to spin up instances instantly. Scale processing power based on case volume without managing hardware.</p>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-muted-foreground">WHO IT’S FOR</p>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Corporate Legal Departments</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Service Providers needing rapid scalability</span></li>
                          </ul>
                        </div>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-muted-foreground">TYPICAL USE CASE</p>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Multi‑jurisdictional litigation requiring immediate access for external counsel</span></li>
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-accent/10 border border-accent/20 p-4 mb-6">
                          <p className="text-sm italic">“Single‑Tenant Options. We offer dedicated cloud environments ensuring your data is never commingled.”</p>
                        </div>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white mt-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                          <Link to="/deployment/cloud">Explore Cloud</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-accent/40 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <CardContent className="p-10 flex flex-col h-full">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">BEST OF BOTH WORLDS</div>
                        <h3 className="text-2xl font-semibold mb-2">Hybrid / On‑Demand</h3>
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-secondary rounded-full mb-6" />
                        <p className="text-sm text-muted-foreground mb-4">Maintain a steady on‑prem footprint for daily operations and burst into the cloud when volumes spike. Manage it all from a single pane of glass.</p>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-muted-foreground">WHO IT’S FOR</p>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Global Enterprises</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">LSPs with fluctuating workloads or mixed data sensitivity</span></li>
                          </ul>
                        </div>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-muted-foreground">TYPICAL USE CASE</p>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} /><span className="text-sm text-muted-foreground">Internal investigations on‑prem while pushing large second requests to cloud review</span></li>
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-accent/10 border border-accent/20 p-4 mb-6">
                          <p className="text-sm italic">“Unified Workflow. Seamlessly move data between environments using Venio’s portable archive format.”</p>
                        </div>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white mt-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                          <Link to="/deployment/hybrid">Explore Hybrid</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <section className="py-20 px-6 bg-primary text-white border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-5xl text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover the Power of Venio Cloud</h2>
                  <p className="text-white/80 max-w-2xl mx-auto mb-6">
                    Ready for enterprise speed without the infrastructure overhead? Launch your Venio Cloud environment today.
                  </p>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Link to="/book-a-demo">Request Venio Cloud Demo</Link>
                  </Button>
                </div>
              </section>

              <section className="py-20 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-5xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">FAQ</h2>
                    <p className="text-muted-foreground">Answers to common questions about Venio Cloud.</p>
                  </div>
                  <Accordion type="single" collapsible className="space-y-4">
                    {[
                      {
                        question: "Is Venio Cloud single‑tenant?",
                        answer: "Yes. Each Venio Cloud environment is provisioned as a dedicated instance to prevent commingling of customer data."
                      },
                      {
                        question: "How fast can we get started?",
                        answer: "Venio Cloud can be provisioned quickly with guided onboarding so teams can start reviewing in days, not weeks."
                      },
                      {
                        question: "What security and compliance standards are supported?",
                        answer: "Venio Cloud supports encryption in transit and at rest, audit trails, and enterprise controls aligned with SOC 2 Type II expectations."
                      },
                      {
                        question: "Can we scale up for a high‑volume matter and scale down later?",
                        answer: "Yes. Cloud resources can be adjusted as matters ramp up or down, keeping costs aligned to active workload."
                      }
                    ].map((faq, index) => (
                      <AccordionItem key={faq.question} value={`cloud-faq-${index}`} className="border border-border/40 rounded-2xl bg-white px-6 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <AccordionTrigger className="text-left text-base font-semibold py-4 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            </>
          ) : (
            <>
            <section className="py-20 px-6 bg-white border-t border-border/50">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Benefits</h2>
                  <p className="text-muted-foreground">{benefitsSubtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {key === "cloud" ? (
                    <>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-secondary/10 border border-secondary/20 mb-4">
                              <Lock className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Single‑Tenant Isolation</h3>
                            <p className="text-muted-foreground">Dedicated instances ensure your data is never commingled. Isolate workloads and enforce strict access boundaries by design.</p>
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
                            <h3 className="text-xl font-bold mb-2">Elastic Scale on Demand</h3>
                            <p className="text-muted-foreground">Spin up capacity instantly for high‑risk, high‑volume matters. Scale processing up or down without managing hardware.</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                              <Shield className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enterprise Security & Compliance</h3>
                            <p className="text-muted-foreground">Encryption in transit and at rest, granular controls, and auditability aligned with enterprise and regulatory requirements.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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

            <section className="py-20 px-6 bg-muted/30">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
                  <p className="text-lg text-muted-foreground">
                    Connect with the tools and platforms your team already uses
                  </p>
                </div>
                <div className="flex items-center justify-center gap-12 flex-wrap px-8">
                  {[
                    { name: "Microsoft 365", icon: "M365" },
                    { name: "Google Workspace", icon: "GWS" },
                    { name: "Slack", icon: "SLACK" },
                    { name: "Microsoft Teams", icon: "TEAMS" },
                    { name: "AWS", icon: "AWS" },
                    { name: "Azure", icon: "AZURE" },
                    { name: "Box", icon: "BOX" },
                    { name: "Dropbox", icon: "DBXPX" },
                  ].map((integration, index) => (
                    <div
                      key={index}
                      className="group transition-all duration-300 hover:scale-110"
                      title={integration.name}
                    >
                      <div className="w-16 h-16 rounded-lg bg-white shadow-md flex items-center justify-center text-xs font-bold text-primary group-hover:shadow-xl transition-shadow">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <CTABanner />

            {/* Testimonials */}
            <TestimonialsSection />
          </>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentType;
