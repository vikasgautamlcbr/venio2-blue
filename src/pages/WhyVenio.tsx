import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import SecuritySection from "@/components/SecuritySection";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle, 
  X, 
  Shield, 
  Zap, 
  Cloud, 
  DollarSign, 
  FileCheck, 
  Database,
  ArrowRight,
  Download,
  Sparkles,
  Play,
  Brain,
  Workflow,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";
import { useEffect, useState } from "react";
import { DownloadFormDialog } from "@/components/DemoGateDialog";
import { CalculatorDialog } from "@/components/CalculatorDialog";
import { StorylaneDemoDialog } from "@/components/StorylaneDemoDialog";
import BookDemoDialog from "@/components/BookDemoDialog";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "pillars", label: "Pillars" },
  { id: "comparison", label: "Comparison" },
  { id: "journey", label: "Journey" },
  { id: "security", label: "Security" },
  { id: "resources", label: "Resources" },
  { id: "faq", label: "FAQ" },
];

const WhyVenio = () => {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
  const [calculatorDialogOpen, setCalculatorDialogOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState("");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const title = "Why Venio - Venio Systems";
    const description = "Discover why leading organizations trust Venio for their eDiscovery needs.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", description);
      document.head.appendChild(meta);
    }
    const scriptId = "ld-json-whyvenio";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Why Venio",
      "url": window.location.origin + "/why-venio"
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/why-venio");
    return () => {
      const e = document.getElementById(scriptId);
      if (e) e.remove();
    };
  }, []);

  const handleDownloadClick = (resourceTitle: string) => {
    setSelectedResource(resourceTitle);
    setDownloadDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[75vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute top-24 right-24 w-32 h-32 bg-secondary/25 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-[55%] right-40 w-60 h-60 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="relative z-10 container mx-auto px-6 max-w-5xl flex-1 flex items-center">
            <div className="text-center animate-fade-in w-full">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                The Venio Advantage: Faster, Smarter, Defensible eDiscovery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                End-to-end eDiscovery in one platform — AI acceleration, flexible deployment, and enterprise-grade defensibility.
              </p>

              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group">
                <Link to="/book-a-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Client Logo Carousel - Full Width */}
          <div className="relative z-10 w-full mt-16">
            <p className="text-white/70 text-sm mb-6 font-body text-center"><span className="border-b-2 border-[#3DC47E] pb-1">Trusted by leading organizations</span></p>
            <div className="overflow-hidden py-6">
              <div className="flex gap-24 animate-scroll">
                {/* First set of logos */}
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
                {/* Duplicate set for seamless loop */}
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

        {/* Section 1 - The Problem */}
        <section id="problem" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why other eDiscovery approaches fail
              </h2>
              <p className="text-lg text-muted-foreground">
                Many teams stitch together point tools, legacy platforms, and manual processes. The result: slower timelines, high cost, fragmented workflows, and increased legal risk. Venio was built to remove those barriers—by unifying process, applying AI where it matters, and keeping control where it's needed.
              </p>
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
                    <Clock className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Slow Review Cycles</h3>
                  <p className="text-muted-foreground">Linear review that drags on.</p>
                </CardContent>
              </Card>

              <Card className="glass text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hidden Costs</h3>
                  <p className="text-muted-foreground">Hosting, per-GB fees, and vendor reliance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pillars" className="py-20 px-6 bg-muted/30">
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
                      <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/50 font-mono">unified-workflow.gif</div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold mb-4">Unified End-to-End</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        One platform handling Legal Hold → Ingestion → ECA → Review → Production — fewer transfers, less risk. Complete workflow integration eliminates data silos and reduces compliance vulnerabilities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <Brain className="h-16 w-16 text-accent/40 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">ai-acceleration.gif</div>
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
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <Cloud className="h-16 w-16 text-blue-500/40 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">flexible-deployment.gif</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Flexible Deployment</h3>
                    <p className="text-sm text-muted-foreground">Cloud, hybrid, or on-prem—choose what fits your security and governance model.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-green-500/15 to-accent/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <DollarSign className="h-16 w-16 text-green-500/40 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">cost-control.gif</div>
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
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <FileCheck className="h-16 w-16 text-purple-500/40 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">audit-trails.gif</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Defensible Process</h3>
                    <p className="text-sm text-muted-foreground">Full, immutable audit trails, custodial tracking, and production QC built in.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-orange-500/15 to-accent/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <Database className="h-16 w-16 text-orange-500/40 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">data-coverage.gif</div>
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

        {/* Comparison Table Section */}
        <section id="comparison" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Venio vs others — at a glance</h2>
              <p className="text-lg text-muted-foreground">
                See the differences that matter when evaluating platforms for enterprise discovery.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden glass rounded-2xl border border-border/50 table-rounded">
                  <table className="min-w-full divide-y divide-border/50">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="text-left p-6 font-semibold text-foreground">Capability</th>
                        <th className="text-center p-6 font-semibold bg-accent/10 text-accent border-x-2 border-accent/30">Venio</th>
                        <th className="text-center p-6 font-semibold text-foreground">Legacy Tools</th>
                        <th className="text-center p-6 font-semibold text-foreground">Point Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {[
                        { capability: "End-to-end platform", venio: true, legacy: false, point: false },
                        { capability: "AI/TAR/CAL built-in", venio: true, legacy: false, point: "partial" },
                        { capability: "Deployment flexibility", venio: "Cloud / Hybrid / On-prem", legacy: "Limited", point: "Cloud only" },
                        { capability: "Early Case Assessment (ECA)", venio: "Native", legacy: "Add-on", point: "Rare" },
                        { capability: "Data reduction before review", venio: "Up to 90%", legacy: "Low", point: "Variable" },
                        { capability: "Defensible audit trails", venio: "Full", legacy: "Partial", point: "Often missing" },
                        { capability: "Predictable cost", venio: "Designed for it", legacy: "Hard to predict", point: "Variable" },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-muted/20 transition-colors">
                          <td className="p-6 font-medium text-foreground">{row.capability}</td>
                          <td className="p-6 text-center bg-accent/5 border-x-2 border-accent/20">
                            {typeof row.venio === "boolean" ? (
                              row.venio ? (
                                <CheckCircle className="h-6 w-6 text-accent mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm font-semibold text-accent">{row.venio}</span>
                            )}
                          </td>
                          <td className="p-6 text-center">
                            {typeof row.legacy === "boolean" ? (
                              row.legacy ? (
                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-muted-foreground">{row.legacy}</span>
                            )}
                          </td>
                          <td className="p-6 text-center">
                            {typeof row.point === "boolean" ? (
                              row.point ? (
                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : row.point === "partial" ? (
                              <span className="text-sm text-yellow-600 font-medium">Partial</span>
                            ) : (
                              <span className="text-sm text-muted-foreground">{row.point}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => handleDownloadClick("Venio Comparison Sheet")}
              >
                Download the Venio Comparison Sheet
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>


        {/* Metrics Section - Using DataPointsSection Style */}
        <section className="py-24 relative overflow-hidden">
          {/* Venio branded gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Real results teams see with Venio</h2>
              <p className="text-lg text-muted-foreground">Measurable improvements you can expect</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "Up to 90%", label: "Data reduction before review", description: "AI-powered culling dramatically reduces review volume", icon: Database },
                { value: "70%", label: "Faster time to launch", description: "Accelerated holds and review workflows", icon: Clock },
                { value: "40%", label: "Higher compliance rates", description: "Improved custodian response and cooperation", icon: Users },
                { value: "64%", label: "Failures avoidable", description: "Common discovery mistakes prevented", icon: Shield }
              ].map((metric, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
                >
                  {/* Venio glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      <metric.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                      {metric.value}
                    </h3>
                    
                    <p className="text-lg font-semibold mb-2 text-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Platform Capabilities Section - Interactive Workflow Journey */}
        <section id="journey" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Your eDiscovery Journey with Venio</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow the complete workflow from legal hold to production—all in one unified platform
              </p>
            </div>

            {/* Vertical Workflow Timeline */}
            <div className="max-w-5xl mx-auto relative">
              {/* Vertical connecting line - stops before last card */}
              <div className="absolute left-8 top-20 h-[calc(100%-280px)] w-1 bg-gradient-to-b from-accent via-secondary to-primary rounded-full hidden md:block"></div>
              
              <div className="space-y-8">
                {/* Step 1: Data Collection */}
                <div className="relative group">
                  <div className="glass rounded-3xl p-8 md:p-10 border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      {/* Number Badge */}
                      <div className="md:col-span-1">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            1
                          </div>
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-7">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                          <Database className="h-7 w-7 text-accent" />
                          Secure Data Ingestion
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Collect from O365, Google Workspace, Slack, file shares, and forensic sources. Native format preservation with chain-of-custody maintained.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Multi-source</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Encrypted transfer</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Format preservation</span>
                        </div>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="md:col-span-4">
                        <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border-2 border-accent/20 flex items-center justify-center relative overflow-hidden group-hover:border-accent/40 transition-all">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <Database className="h-20 w-20 text-accent/40 relative z-10 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Early Case Assessment */}
                <div className="relative group">
                  <div className="glass rounded-3xl p-8 md:p-10 border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-1">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            2
                          </div>
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-7">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                          <Zap className="h-7 w-7 text-accent" />
                          Early Case Assessment
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Rapid sampling, culling, and analytics to reduce data volume by up to 90% before review. Understand your case early and make informed decisions.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Fast analytics</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">90% reduction</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Visual insights</span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border-2 border-accent/20 flex items-center justify-center relative overflow-hidden group-hover:border-accent/40 transition-all">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <Zap className="h-20 w-20 text-accent/40 relative z-10 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: AI-Powered Review */}
                <div className="relative group">
                  <div className="glass rounded-3xl p-8 md:p-10 border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-1">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            3
                          </div>
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-7">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                          <Brain className="h-7 w-7 text-accent" />
                          AI-Powered Review
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Continuous Active Learning (CAL), predictive coding, email threading, near-duplicate detection. Reduce manual review by 70% while improving accuracy.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">CAL/TAR</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Predictive coding</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">70% faster</span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border-2 border-accent/20 flex items-center justify-center relative overflow-hidden group-hover:border-accent/40 transition-all">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <Brain className="h-20 w-20 text-accent/40 relative z-10 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Production & Export */}
                <div className="relative group">
                  <div className="glass rounded-3xl p-8 md:p-10 border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-1">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            4
                          </div>
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-7">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                          <FileCheck className="h-7 w-7 text-accent" />
                          Production & Export
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Generate productions in multiple formats (TIFF, native, PDF). Full metadata, privilege logs, and audit reports. Court-ready deliverables.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Multi-format</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Privilege logs</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Court-ready</span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border-2 border-accent/20 flex items-center justify-center relative overflow-hidden group-hover:border-accent/40 transition-all">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <FileCheck className="h-20 w-20 text-accent/40 relative z-10 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5: Legal Hold Automation */}
                <div className="relative group">
                  <div className="glass rounded-3xl p-8 md:p-10 border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-1">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            5
                          </div>
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-7">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                          <Shield className="h-7 w-7 text-accent" />
                          Legal Hold Automation
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Trigger custodian notifications, track acknowledgments, and preserve data from day one—with full audit trails for defensibility.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Auto-notifications</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Audit logs</span>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Compliance tracking</span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-4">
                        <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border-2 border-accent/20 flex items-center justify-center relative overflow-hidden group-hover:border-accent/40 transition-all">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <Shield className="h-20 w-20 text-accent/40 relative z-10 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent to-secondary text-white hover:opacity-90 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                  onClick={() => setDemoDialogOpen(true)}
                >
                  See the Platform in Action
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
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

        {/* Security Section */}
        <div id="security">
          <SecuritySection />
        </div>

        

        {/* Resources Section - Bento Card Layout */}
        <section id="resources" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Resources & comparison kit</h2>
              <p className="text-lg text-muted-foreground">
                Explore whitepapers, product briefs, and comparison guides to evaluate Venio in detail.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Featured Large Card - Savings Calculator */}
              <div className="md:col-span-2 md:row-span-2">
                <Card className="glass hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group overflow-hidden border-2 border-accent/20">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-64 bg-gradient-to-br from-purple-500/20 via-accent/10 to-purple-500/20 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-2xl bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <DollarSign className="h-16 w-16 text-purple-600" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4 w-fit">
                        <Sparkles className="h-3 w-3 text-accent" />
                        <span className="text-xs font-medium text-accent">Featured Tool</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Venio Savings Calculator</h3>
                      <p className="text-muted-foreground mb-6 flex-1">
                        Discover exactly how much you can save with Venio's eDiscovery platform. Get instant calculations based on your case volume and data size. See your potential annual savings in real-time.
                      </p>
                      <Button 
                        className="w-full group"
                        onClick={() => setCalculatorDialogOpen(true)}
                      >
                        Launch Calculator
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Smaller Cards */}
              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Download className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Comparison Sheet</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">Feature matrix and pricing comparison guide</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleDownloadClick("Complete Comparison Sheet")}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Venio ECA Brief</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">Early Case Assessment features and benefits</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleDownloadClick("Venio ECA Brief")}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold mb-2">Venio Legal Hold Product Brief</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">Complete legal hold management capabilities</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleDownloadClick("Venio Legal Hold Product Brief")}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">Review Overview</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">AI-powered review capabilities and workflows</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleDownloadClick("Review Overview")}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Security Whitepaper</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">Compliance and security architecture details</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleDownloadClick("Security Whitepaper")}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section with Original Questions */}
        <section id="faq" className="py-12 bg-gradient-to-b from-white via-muted/50 to-white relative overflow-hidden">
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
                {[
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
                ].map((faq, index) => (
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

        {/* Final CTA */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 gradient-animated"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Experience the Venio Advantage Today
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Book a personalized demo and see how Venio saves time and cost while improving defensibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
                onClick={() => setIsDemoDialogOpen(true)}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent text-white border-2 border-white hover:bg-primary hover:border-transparent text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              >
                Request Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Dialogs */}
      <DownloadFormDialog
        open={downloadDialogOpen}
        onOpenChange={setDownloadDialogOpen}
        resourceTitle={selectedResource}
      />
      <CalculatorDialog
        open={calculatorDialogOpen}
        onOpenChange={setCalculatorDialogOpen}
      />
      <StorylaneDemoDialog
        open={demoDialogOpen}
        onOpenChange={setDemoDialogOpen}
      />
      <BookDemoDialog 
        open={isDemoDialogOpen} 
        onOpenChange={setIsDemoDialogOpen} 
      />
    </div>
  );
};

export default WhyVenio;
