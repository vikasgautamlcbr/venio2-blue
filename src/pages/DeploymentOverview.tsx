import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Server, Cloud, Workflow, CheckCircle2, ArrowRight, ShieldCheck, Database, Gauge, Globe, Wallet, Sparkles } from "lucide-react";
import BookDemoDialog from "@/components/BookDemoDialog";
import FAQSection from "@/components/FAQSection";
import SecuritySection from "@/components/SecuritySection";
import CTABanner from "@/components/CTABanner";
import amentumLogo from "@/assets/clients/amentum-new.webp";
import arrayLogo from "@/assets/clients/array-new.webp";
import cdsLogo from "@/assets/clients/cds-new.webp";
import consilioLogo from "@/assets/clients/consilio-new.webp";
import eparioLogo from "@/assets/clients/epario-new.webp";
import haugLogo from "@/assets/clients/haug-partners-new.webp";
import nixonLogo from "@/assets/clients/nixon-peabody-new.webp";
import proteusLogo from "@/assets/clients/proteus-new.webp";
import { useState } from "react";

const DeploymentOverview = () => {
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-40 md:pb-44">
          <div className="absolute inset-0">
            <div className="absolute bottom-28 right-10 w-[420px] h-[420px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-16 right-24 w-28 h-28 bg-accent/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute top-[60%] right-36 w-56 h-56 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center animate-fade-in">
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full pulse-glow animate-slide-up">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Deployment Options</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">Flexible eDiscovery Deployment Built for You</h1>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed mx-auto">
              Execute complex discovery projects on‑premises, in the cloud, or across a hybrid infrastructure. Choose the deployment that fits your data gravity, security posture, and budget, without sacrificing performance or defensibility.
            </p>
            <div className="mt-8 flex gap-3 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4" onClick={() => setBookDemoOpen(true)}>
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="px-6 py-4"
                onClick={() => {
                  const el = document.getElementById("deployment-paths");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Explore Deployment Options
              </Button>
            </div>
          </div>
          {/* Logo Ribbon */}
          <div className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
            <div className="relative overflow-hidden py-10 md:py-12">
              <div className="text-center mb-8 md:mb-10">
                <p className="text-white/80 text-sm">
                  <span className="border-b-2 border-accent pb-1">Trusted by leading organizations</span>
                </p>
              </div>
              <div className="logo-ticker-inner flex gap-12 sm:gap-16 md:gap-20 animate-logo-scroll">
                {[
                  { src: amentumLogo, alt: "Amentum" },
                  { src: arrayLogo, alt: "Array" },
                  { src: cdsLogo, alt: "CDS" },
                  { src: consilioLogo, alt: "Consilio" },
                  { src: eparioLogo, alt: "Epario" },
                  { src: haugLogo, alt: "Haug Partners" },
                  { src: nixonLogo, alt: "Nixon Peabody" },
                  { src: proteusLogo, alt: "Proteus" },
                  { src: amentumLogo, alt: "Amentum" },
                  { src: arrayLogo, alt: "Array" },
                  { src: cdsLogo, alt: "CDS" },
                  { src: consilioLogo, alt: "Consilio" },
                  { src: eparioLogo, alt: "Epario" },
                  { src: haugLogo, alt: "Haug Partners" },
                  { src: nixonLogo, alt: "Nixon Peabody" },
                  { src: proteusLogo, alt: "Proteus" },
                ].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[170px]">
                    <img src={logo.src} alt={logo.alt} style={{ height: '28px' }} className="w-auto object-contain opacity-90 invert" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden bg-background animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why It Matters</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Deployment Matters in eDiscovery.</h2>
              <p className="text-muted-foreground">Deployment isn’t just about where software lives; it dictates data velocity, compliance capabilities, and total cost of ownership. While other vendors force you into a cloud‑only box, Venio adapts to your enterprise reality.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Sovereignty & Residency</h3>
                  <p className="text-sm text-muted-foreground">Keep data within borders to satisfy GDPR, CCPA, and cross‑border litigation requirements. Move processing to where the data lives.</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Gauge className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Latency & Data Gravity</h3>
                  <p className="text-sm text-muted-foreground">Transfer terabytes without bottlenecks. Process near the source to reduce ingestion times from days to hours.</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Total Infrastructure Control</h3>
                  <p className="text-sm text-muted-foreground">For highly regulated industries, maintain air‑gapped control or dedicated private clouds with clear responsibility boundaries.</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cost Predictability</h3>
                  <p className="text-sm text-muted-foreground">Choose CapEx, OpEx, or blended models. Use on‑prem for steady workloads or cloud for elastic, project‑based scaling.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="deployment-paths" className="py-24 px-6 bg-muted/30 animate-fade-in scroll-mt-28 md:scroll-mt-32" style={{ animationDelay: "0.05s" }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Deployment Options</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Three Paths. One Engine.</h2>
              <p className="text-muted-foreground">The core hub of your discovery architecture.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">MAXIMUM CONTROL</div>
                  <h3 className="text-2xl font-semibold mb-2">On‑Premises</h3>
                  <p className="text-sm text-muted-foreground mb-4">Deploy Venio behind your firewall on your own hardware. Built for strict governance and existing infrastructure investments.</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">WHO IT’S FOR</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Government agencies</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Law Enforcement</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Financial Institutions</span></li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">TYPICAL USE CASE</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Highly sensitive IP or internal investigations where data cannot leave the network</span></li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-muted/40 p-4 mb-6">
                    <p className="text-sm italic">“Zero Feature Compromise. On‑Prem offers the exact same code base, AI, and power as our Cloud version.”</p>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/deployment/on-premises">Explore On‑Premises</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">ELASTIC SCALE</div>
                  <h3 className="text-2xl font-semibold mb-2">Venio Cloud</h3>
                  <p className="text-sm text-muted-foreground mb-4">Leverage Venio’s managed infrastructure to spin up instances instantly. Scale processing power based on case volume without managing hardware.</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">WHO IT’S FOR</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Corporate Legal Departments</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Service Providers needing rapid scalability</span></li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">TYPICAL USE CASE</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Multi‑jurisdictional litigation requiring immediate access for external counsel</span></li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-muted/40 p-4 mb-6">
                    <p className="text-sm italic">“Single‑Tenant Options. We offer dedicated cloud environments ensuring your data is never commingled.”</p>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/deployment/cloud">Explore Cloud</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">BEST OF BOTH WORLDS</div>
                  <h3 className="text-2xl font-semibold mb-2">Hybrid / On‑Demand</h3>
                  <p className="text-sm text-muted-foreground mb-4">Maintain a steady on‑prem footprint for daily operations and burst into the cloud when volumes spike. Manage it all from a single pane of glass.</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">WHO IT’S FOR</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Global Enterprises</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">LSPs with fluctuating workloads or mixed data sensitivity</span></li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground">TYPICAL USE CASE</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /><span className="text-sm text-muted-foreground">Internal investigations on‑prem while pushing large second requests to cloud review</span></li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-muted/40 p-4 mb-6">
                    <p className="text-sm italic">“Unified Workflow. Seamlessly move data between environments using Venio’s portable archive format.”</p>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/deployment/hybrid">Explore Hybrid</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comparison</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Which Deployment is Right for You?</h2>
              <p className="text-muted-foreground">Align your eDiscovery infrastructure with your business objectives</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/40 bg-white table-rounded animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">On‑Premises</th>
                    <th className="text-center p-4 font-semibold">Venio Cloud</th>
                    <th className="text-center p-4 font-semibold">Hybrid / On‑Demand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    { k: "Data Location", a: "100% Client‑Controlled", b: "Venio Secure Cloud", c: "Mixed / Client‑Defined" },
                    { k: "Infrastructure Management", a: "Internal IT / SecOps", b: "Managed by Venio", c: "Shared Model" },
                    { k: "Scalability", a: "Dependent on Hardware", b: "Instant / Infinite Elasticity", c: "Static Base + Burst Capable" },
                    { k: "Capital Model", a: "CapEx (Hardware Util)", b: "OpEx (Subscription)", c: "Blended CapEx & OpEx" },
                    { k: "Security Posture", a: "Highest (Air‑Gap Ready)", b: "High (SOC 2 / ISO)", c: "Flexible per Project" },
                    { k: "Best For…", a: "Gov, FinServ, Static Budgets", b: "Rapid Response, Distributed", c: "Variable Workloads, LSPs" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">{row.k}</td>
                      <td className="p-4 text-center">{row.a}</td>
                      <td className="p-4 text-center">{row.b}</td>
                      <td className="p-4 text-center">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 px-6 bg-primary text-white animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.18),transparent_60%)]" />
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold">Feature Parity Across Deployments</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Deployment Parity: The “One Platform” Promise</h2>
                <p className="text-white/80 leading-relaxed mb-6">Many vendors maintain separate code paths for cloud and on‑prem. Venio ships the same core platform regardless of where you run it.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Workflow className="h-5 w-5 text-accent" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">Unified Codebase</p>
                      <p className="text-white/80 text-sm leading-relaxed">Bare‑metal, AWS, or Azure—identical features, workflows, and APIs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Database className="h-5 w-5 text-accent" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">Modular Scalability</p>
                      <p className="text-white/80 text-sm leading-relaxed">Distributed Queue Manager adds workers dynamically on any infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">No “Cloud‑Only” Limits</p>
                      <p className="text-white/80 text-sm leading-relaxed">Analytics, AI, CAL, and security controls are available in every model.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_0deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05),rgba(255,255,255,0.25))] opacity-60 blur-sm" />
                  <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-10 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.6),transparent_70%)] blur-md" />
                      <div className="relative w-full h-full rounded-2xl bg-white/10 flex items-center justify-center">
                        <Database className="w-9 h-9 text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-white/80 tracking-wider">THE VENIO CORE</p>
                    <p className="text-xs text-white/60 mt-1">Same feature set across environments</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                      <Badge variant="outline" className="border-white/20 text-white/90">
                        <div className="flex items-center gap-2"><Server className="w-4 h-4" /><span>Bare Metal</span></div>
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-white/90">
                        <div className="flex items-center gap-2"><Cloud className="w-4 h-4" /><span>AWS / Azure</span></div>
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-white/90">
                        <div className="flex items-center gap-2"><Workflow className="w-4 h-4" /><span>Hybrid Burst</span></div>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SecuritySection />

        <CTABanner />
        <FAQSection />

        <style>{`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logo-scroll {
            animation: logo-scroll 30s linear infinite;
          }
        `}</style>
      </main>
      <BookDemoDialog open={bookDemoOpen} onOpenChange={setBookDemoOpen} />
      <Footer />
    </div>
  );
};

export default DeploymentOverview;
