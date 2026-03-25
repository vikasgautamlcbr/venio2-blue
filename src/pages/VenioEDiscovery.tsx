import { Card, CardContent } from "@/components/ui/card";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Shield,
  Users,
  Download,
  Play,
  ChevronRight,
  Sparkles,
  ArrowRight,
  BarChart3,
  Zap,
  Brain,
  Database,
  Server,
  FileCheck,
  Upload,
  Bell
} from "lucide-react";
import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DemoGateDialog } from "@/components/DemoGateDialog";
import BookDemoDialog from "@/components/BookDemoDialog";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { LucideIcon } from "lucide-react";
import ediscoveryHeroImage from "@/assets/hero images/venio ediscovery.png";
import analysisHeroImage from "@/assets/hero images/Analysis.png";
import legalHoldHeroImage from "@/assets/hero images/legal hold.png";
import productionHeroImage from "@/assets/hero images/production.png";
import reviewHeroImage from "@/assets/hero images/review.png";
import aiPoweredPoster from "@/assets/why-venio-assets/AI-Powered.png";
import earlyCaseAssessmentImage from "@/assets/why-venio-assets/Early Case Assessment.png";
import legalHoldAutomationImage from "@/assets/why-venio-assets/Legal Hold Automation.png";
import productionExportImage from "@/assets/why-venio-assets/Production & Export.png";
import secureIngestionImage from "@/assets/why-venio-assets/Secure Ingestion.png";
import adoptionWithoutFrictionVideo from "@/assets/videos/Venio eDiscovery Overview Benefits/Adoption Without Friction.mp4";
import builtInDefensibilityVideo from "@/assets/videos/Venio eDiscovery Overview Benefits/Built-In Defensibility.mp4";
import costDisciplineAtScaleVideo from "@/assets/videos/Venio eDiscovery Overview Benefits/Cost Discipline at Scale.mp4";
import fasterFromStartToFinishVideo from "@/assets/videos/Venio eDiscovery Overview Benefits/Faster From Start to Finish.mp4";
import flexibleDeploymentVideo from "@/assets/videos/Venio eDiscovery Overview Benefits/Flexible Deployment.mp4";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "modules-split", label: "Modules" },
  { id: "data", label: "Impact" },
  { id: "demo", label: "Demo" },
  { id: "features", label: "Features" },
  { id: "case-studies", label: "Case Studies" },
  { id: "download", label: "Resources" },
];

const VenioEDiscovery = () => {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [isDemoUnlocked, setIsDemoUnlocked] = useState(false);
  const [isBookDemoDialogOpen, setIsBookDemoDialogOpen] = useState(false);
  const [activeModuleSplit, setActiveModuleSplit] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const title = "Venio eDiscovery - Venio Systems";
    const description = "The world's fastest eDiscovery engine with AI at the core, extreme performance, and secure deployment options.";
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
    const scriptId = "ld-json-ediscovery";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Venio eDiscovery",
      "brand": { "@type": "Brand", "name": "Venio Systems" },
      "url": window.location.origin + "/venio-ediscovery"
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/venio-ediscovery");
    return () => {
      const e = document.getElementById(scriptId);
      if (e) e.remove();
    };
  }, []);

  const handleDemoAccess = () => {
    if (!isDemoUnlocked) {
      setIsDemoDialogOpen(true);
    } else {
      window.open('https://demo.venio.com', '_blank');
    }
  };

  const handleDemoSuccess = () => {
    setIsDemoUnlocked(true);
    window.open('https://demo.venio.com', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[75vh] md:min-h-[70vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-16 right-24 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-[55%] right-40 w-56 h-56 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full mb-2 pulse-glow animate-slide-up">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Unified eDiscovery Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                The World's Fastest eDiscovery Engine.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Process 10 Terabytes per day behind your own firewall. The only unified platform built for air-gapped security, massive scale, and total control.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleDemoAccess}
                  className="btn btn-primary text-lg px-8 py-3 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Try Interactive Demo
                </button>
                <button className="btn btn-secondary text-lg px-8 py-3 group">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Product Brief
                </button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl flex items-center justify-center animate-fade-in-scale overflow-hidden bg-transparent">
              <img src={ediscoveryHeroImage} alt="Venio eDiscovery" className="h-full w-full object-contain" draggable={false} />
            </div>
          </div>
        </div>
      </section>

      <section id="modules-split" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          {(() => {
            const modules = [
              { title: "Venio Legal Hold", href: "/venio-legal-hold", Icon: Bell, tone: "primary" as const, desc: "Send notices, track acknowledgments, and maintain defensible audit trails.", bullets: ["Automated custodian notices", "Acknowledgment tracking", "Audit-ready reporting"], image: legalHoldHeroImage },
              { title: "Venio ECA", href: "/venio-eca", Icon: BarChart3, tone: "secondary" as const, desc: "Find signal early with search and analytics to reduce volume and cost.", bullets: ["Search & filtering", "Visual analytics", "Defensible reduction"], image: analysisHeroImage },
              { title: "Venio Review", href: "/venio-review", Icon: Brain, tone: "accent" as const, desc: "Accelerate review with AI assistance, tagging workflows, and quality control.", bullets: ["AI prioritization", "Smart tagging", "Integrated QC"], image: reviewHeroImage },
              { title: "Venio Production", href: "/venio-production", Icon: FileText, tone: "primary" as const, desc: "Produce with slipsheets, Bates, and standard load files — consistently and fast.", bullets: ["Bates & slipsheets", "Standard exports", "Load file generation"], image: productionHeroImage },
            ];
            const toneAccent = (t: "primary" | "secondary" | "accent") => (t === "primary" ? "text-primary" : t === "secondary" ? "text-secondary" : "text-accent");
            const toneTint = (t: "primary" | "secondary" | "accent") => (t === "primary" ? "bg-primary/10" : t === "secondary" ? "bg-secondary/10" : "bg-accent/10");
            const toneBorder = (t: "primary" | "secondary" | "accent") => (t === "primary" ? "border-primary/20" : t === "secondary" ? "border-secondary/20" : "border-accent/20");
            const active = modules[Math.min(activeModuleSplit, modules.length - 1)];
            return (
              <div className="relative">
                <motion.div
                  className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                />
                <div className="relative p-10 lg:p-12">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3">Integrated modules. Singular Control</h3>
                    <p className="text-muted-foreground max-w-3xl mx-auto">End-to-end eDiscovery from first notice to final production — without the platform juggling.</p>
                  </div>
                  <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-10 items-start">
                    <div>
                      <div className="flex flex-col gap-2" style={{ perspective: 1200 }}>
                        {modules.map((m, i) => (
                          (() => {
                            const isActive = activeModuleSplit === i;
                            const activeText = "text-[#3DC47E]";
                            const activeGlow = "shadow-[0_22px_60px_-35px_rgba(61,196,126,0.65)]";
                            const activeBg = "bg-white/70";
                            const idleBg = "bg-white/55";
                            return (
                          <motion.button
                            key={m.title}
                            type="button"
                            className={`group relative rounded-xl overflow-hidden text-left px-4 py-3 flex items-center gap-3 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow min-h-[76px] ${isActive ? `${activeBg} ${activeGlow}` : idleBg}`}
                            whileHover={{ scale: 1.02, x: 4, rotateY: -8 }}
                            transition={{ duration: 0.18 }}
                            style={{ transformStyle: "preserve-3d" }}
                            onMouseEnter={() => setActiveModuleSplit(i)}
                            onFocus={() => setActiveModuleSplit(i)}
                            onClick={() => setActiveModuleSplit(i)}
                          >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(61,196,126,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)] opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/18 via-white/0 to-white/18" />
                            <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "linear-gradient(135deg, rgba(61,196,126,0.16), rgba(59,130,246,0.10))", filter: "blur(18px)" }} />
                            <div className={`w-1.5 h-8 rounded-full bg-[#3DC47E] transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                            <div className="w-9 h-9 rounded-xl bg-white/55 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_40px_-30px_rgba(0,0,0,0.28)]">
                              <m.Icon className="w-4 h-4 text-[#3DC47E]" />
                            </div>
                            <div className={`text-sm font-semibold ${isActive ? activeText : ""}`}>{m.title}</div>
                          </motion.button>
                            );
                          })()
                        ))}
                      </div>
                    </div>
                    <div>
                      <motion.div
                        className="relative rounded-2xl bg-white/80 shadow-sm p-8 overflow-hidden"
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{ rotateX: -2, rotateY: 2, y: -2 }}
                        transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(61,196,126,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.14),transparent_55%)]" />
                        <motion.div
                          className="absolute -inset-1 rounded-2xl opacity-30"
                          key={active.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.3 }}
                          transition={{ duration: 0.3 }}
                          style={{ background: "linear-gradient(135deg, rgba(61,196,126,0.25), rgba(59,130,246,0.18))", filter: "blur(22px)" }}
                        />
                        <div className="relative z-10 grid md:grid-cols-[1fr_340px] gap-8 items-center">
                          <div>
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 rounded-xl ${toneTint(active.tone)} border ${toneBorder(active.tone)} flex items-center justify-center`}>
                                <active.Icon className={`w-6 h-6 ${toneAccent(active.tone)}`} />
                              </div>
                              <div className="flex-1">
                                <div className="text-xl font-heading font-bold">{active.title}</div>
                                <div className="text-sm text-muted-foreground mt-2">{active.desc}</div>
                              </div>
                            </div>
                            <div className="mt-4 grid gap-2">
                              {active.bullets.map((b, idx) => (
                                <motion.div
                                  key={b}
                                  className="inline-flex items-center rounded-full px-3 py-1.5 text-sm bg-white/55 backdrop-blur-sm border border-white/70 text-foreground shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] w-fit"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.25, delay: idx * 0.06 }}
                                >
                                  {b}
                                </motion.div>
                              ))}
                            </div>
                            <div className="mt-5">
                              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                                <Link to={active.href}>Learn more</Link>
                              </Button>
                            </div>
                          </div>

                          <div className="relative w-full h-[260px] flex items-center justify-center">
                            <img
                              src={active.image}
                              alt={`${active.title} screenshot`}
                              className="max-h-full max-w-full object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
                              draggable={false}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="grid lg:hidden gap-6 mt-10">
                    {modules.map((m, i) => {
                      const isActive = activeModuleSplit === i;
                      return (
                        <div key={m.title} className="rounded-2xl bg-white border border-border/40 shadow-sm overflow-hidden">
                          <button type="button" className="w-full text-left p-6 flex items-center gap-3" onClick={() => setActiveModuleSplit(i)}>
                            <div className={`w-11 h-11 rounded-2xl ${toneTint(m.tone)} border ${toneBorder(m.tone)} flex items-center justify-center`}>
                              <m.Icon className="w-5 h-5 text-[#3DC47E]" />
                            </div>
                            <div className="text-lg font-semibold">{m.title}</div>
                          </button>
                          <motion.div initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                            <div className="px-6 pb-6">
                              <div className="text-sm text-muted-foreground">{m.desc}</div>
                              <div className="mt-4 grid gap-2">
                                {m.bullets.map((b) => (
                                  <div key={b} className="flex items-center gap-2 text-sm">
                                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${m.tone === "primary" ? "bg-primary" : m.tone === "secondary" ? "bg-secondary" : "bg-accent"}`} />
                                    <span>{b}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-5">
                                <Button asChild variant="outline">
                                  <Link to={m.href}>Learn more</Link>
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <section id="benefits" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Move Faster with Total Control</h2>
            <p className="text-lg text-muted-foreground">End-to-end eDiscovery built for speed, defensibility, and predictable costs at scale.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { title: "Faster From Start to Finish", desc: "Process and review at enterprise scale with predictable performance from ingestion through production.", videoSrc: fasterFromStartToFinishVideo },
              { title: "Cost Discipline at Scale", desc: "Reduce spend with early insight, streamlined workflows, and fewer handoffs across the lifecycle.", videoSrc: costDisciplineAtScaleVideo },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-black/5">
                    <video
                      className="h-full w-full object-cover"
                      src={item.videoSrc}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Built-In Defensibility", desc: "Maintain audit-ready workflows with chain of custody, consistent processing, and validated outputs.", videoSrc: builtInDefensibilityVideo },
              { title: "Adoption Without Friction", desc: "Enable legal, IT, and service teams to move faster with intuitive workflows and shared visibility.", videoSrc: adoptionWithoutFrictionVideo },
              { title: "Flexible Deployment", desc: "Deploy on-premises, cloud, or hybrid while keeping security, compliance, and performance consistent.", videoSrc: flexibleDeploymentVideo },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-black/5">
                    <video
                      className="h-full w-full object-cover"
                      src={item.videoSrc}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section id="data" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-lg text-muted-foreground">Engineered for extreme performance, security, and control</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "10 TB/Day Processing", icon: Database },
              { label: "Air-Gapped Deployment", icon: Shield },
              { label: "Single Database (No SQL Exports)", icon: Server },
              { label: "Built-in AI (CAL/TAR 2.0)", icon: Brain },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience It Live */}
      <section id="demo" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Experience It Live</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the unified eDiscovery workflow across assessment, review, and production
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div style={{ position: "relative", boxSizing: "content-box", maxHeight: "80svh", width: "100%", aspectRatio: "2.01", padding: "40px 0" }}>
              <iframe
                src="https://app.supademo.com/embed/cmmelkd6v2zmwnr99x6s6tjpr?embed_v=2&utm_source=embed"
                loading="lazy"
                title="End-to-End eDiscovery Software | Complete Legal Data Solutions"
                allow="clipboard-write"
                frameBorder={0}
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Your eDiscovery Journey with Venio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow the complete workflow from legal hold to production—all in one unified platform
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-8 top-20 h-[calc(100%-280px)] w-1 bg-gradient-to-b from-accent via-secondary to-primary rounded-full hidden md:block"></div>
            <div className="space-y-8">
              <div className="relative group">
                <div className="glass rounded-3xl p-8 md:p-10 border-2 border-transparent hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                          1
                        </div>
                        <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      </div>
                    </div>
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
                    <div className="md:col-span-4">
                      <div className="aspect-video rounded-2xl relative overflow-hidden">
                        <img src={secureIngestionImage} alt="Secure Data Ingestion" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                      <div className="aspect-video rounded-2xl relative overflow-hidden">
                        <img src={earlyCaseAssessmentImage} alt="Early Case Assessment" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                      <div className="aspect-video rounded-2xl relative overflow-hidden">
                        <img src={aiPoweredPoster} alt="AI-Powered Review" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                      <div className="aspect-video rounded-2xl relative overflow-hidden">
                        <img src={productionExportImage} alt="Production & Export" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                      <div className="aspect-video rounded-2xl relative overflow-hidden">
                        <img src={legalHoldAutomationImage} alt="Legal Hold Automation" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-accent to-secondary text-white hover:opacity-90 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                <Link to="#demo">
                  See the Platform in Action
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Download Product Brief */}
      <section id="download" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
            <div className="relative glass-dark rounded-3xl overflow-hidden shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:scale-[1.02] border-0">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-12 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-white/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="absolute -inset-2 bg-white/5 rounded-2xl -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                    <div className="relative w-56 h-72 bg-white rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FileText className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Venio eDiscovery</h3>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Product Brief</p>
                        <div className="mt-4 px-4 py-1.5 bg-accent/10 rounded-full">
                          <p className="text-xs font-medium text-accent">2024 Edition</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2 animate-float">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span className="text-xs font-semibold text-foreground">PDF • 2.4 MB</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-2">
                      <Download className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">Download</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                      Get the Complete
                      <span className="text-accent"> Product Brief</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Download our comprehensive guide with everything you need to evaluate Venio eDiscovery for your organization.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: FileCheck, text: "Complete feature breakdown" },
                      { icon: Shield, text: "Security & compliance" },
                      { icon: Users, text: "Deployment options" },
                      { icon: BarChart3, text: "ROI analysis & pricing" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="btn h-14 px-8 text-lg group flex-1 inline-flex items-center justify-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Now
                    </button>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold h-14 px-8 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap text-lg flex-1 flex items-center">
                      <Link to="/book-a-demo">
                        Book a Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />

      <DemoGateDialog
        isOpen={isDemoDialogOpen}
        onClose={() => setIsDemoDialogOpen(false)}
        onSuccess={handleDemoSuccess}
      />
      <BookDemoDialog 
        open={isBookDemoDialogOpen} 
        onOpenChange={setIsBookDemoDialogOpen} 
      />
    </div>
  );
};

export default VenioEDiscovery;
