import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { ScrollFeatureAccordion } from "@/components/ScrollFeatureAccordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SecuritySection from "@/components/SecuritySection";
import CTABanner from "@/components/CTABanner";
import { Play, FileText, Shield, Database, EyeOff, Hash, Settings, File, DollarSign, BarChart3, Gauge } from "lucide-react";
import { useEffect, useState } from "react";
import productionHeroImage from "@/assets/hero images/production.png";
import defensibleDataIntegrityVideo from "@/assets/videos/Production Benefits/Defensible Data Integrity.mp4";
import lowerOperationalOverheadVideo from "@/assets/videos/Production Benefits/Lower Operational Overhead.mp4";
import noLastMinuteFireDrillsVideo from "@/assets/videos/Production Benefits/No Last-Minute Fire Drills.mp4";
import reducesPrivilegeDisclosureRiskVideo from "@/assets/videos/Production Benefits/Reduces Privilege Disclosure Risk.mp4";
import strengthensCredibilityVideo from "@/assets/videos/Production Benefits/Strengthens Credibility with Opposing Counsel.mp4";
import productionFeatureVideo1 from "@/assets/features/Production/1.mp4";
import productionFeatureVideo3 from "@/assets/features/Production/3.mp4";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "metrics", label: "Metrics" },
  { id: "demo", label: "Demo" },
  { id: "compliance", label: "Compliance" },
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "CTA" },
];

const VenioProduction = () => {
  const [isDemoUnlocked, setIsDemoUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const title = "Venio Production - Venio Systems";
    const description = "Eliminate production risk before it leaves your control with structured, validated, defensible output.";
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
    const scriptId = "ld-json-production";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Venio Production",
      "brand": { "@type": "Brand", "name": "Venio Systems" },
      "url": window.location.origin + "/venio-production",
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/venio-production");
    return () => {
      const e = document.getElementById(scriptId);
      if (e) e.remove();
    };
  }, []);

  const handleDemoAccess = () => {
    if (!isDemoUnlocked) {
      setIsDemoUnlocked(true);
    }
    window.open("https://demo.venio.com/production", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />

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
                <span className="text-white/90 text-sm font-medium">Production</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Production Is Where Cases Get Exposed
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                One missed redaction. One broken load file. One numbering gap. Venio eliminates production risk before it leaves your control.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDemoAccess} size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  See How it Works
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl flex items-center justify-center animate-fade-in-scale overflow-hidden bg-transparent">
              <img src={productionHeroImage} alt="Production Hero" className="h-full w-full object-contain" draggable={false} />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Produce with Precision and Confidence</h2>
            <p className="text-lg text-muted-foreground">Manual production workflows create exposure. Venio replaces chaos with structured, validated, defensible output.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { title: "Strengthens Credibility with Opposing Counsel", desc: "Deliver clean, compliant productions that minimize disputes and demonstrate disciplined discovery practices.", videoSrc: strengthensCredibilityVideo },
              { title: "Defensible Data Integrity", desc: "Preserve document structure and metadata through every conversion, export, and delivery step.", videoSrc: defensibleDataIntegrityVideo },
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
              { title: "Reduces Privilege Disclosure Risk", desc: "Apply and validate redactions with structured controls that prevent accidental exposure.", videoSrc: reducesPrivilegeDisclosureRiskVideo },
              { title: "No Last-Minute Fire Drills", desc: "Automate production workflows to eliminate manual errors and deadline-driven chaos.", videoSrc: noLastMinuteFireDrillsVideo },
              { title: "Lower Operational Overhead", desc: "Reduce repetitive production tasks and rework to free teams for higher-value work.", videoSrc: lowerOperationalOverheadVideo },
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

      <section id="metrics" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Numbers That Tell the Story</h2>
            <p className="text-lg text-muted-foreground">Track turnaround time, workload reduction, and accuracy improvements in one clear view.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "40%", label: "Workload Reduction", icon: Gauge },
              { value: "2x", label: "Faster Turnaround", icon: BarChart3 },
              { value: "30%", label: "Lower Cost per Production", icon: DollarSign },
              { value: "99.9%", label: "Audit Trail Coverage", icon: Shield },
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
                  <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                    {item.value}
                  </h3>
                  <p className="text-lg font-semibold text-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">See the Final Mile in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how Venio automates stamping, format conversion, and load file generation, reducing risk before delivery.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div style={{ position: "relative", boxSizing: "content-box", maxHeight: "80svh", width: "100%", aspectRatio: "2.01", padding: "40px 0" }}>
              <iframe
                src="https://app.supademo.com/embed/cmmeiwzre2v4rnr99mb3xthjb?embed_v=2&utm_source=embed"
                loading="lazy"
                title="Advanced Document Production Software | Venio Systems"
                allow="clipboard-write"
                frameBorder={0}
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <SecuritySection id="compliance" />

      <ScrollFeatureAccordion
        title="Production Without Weak Links."
        subtitle="Core capabilities designed to eliminate production risk and ensure consistent, defensible delivery."
        features={[
          {
            icon: Hash,
            title: "Bates Stamping & Slipsheets",
            description: "Automatically apply sequential Bates numbers and generate slipsheets for native files with full tracking and consistency.",
            details: [],
            imagePlaceholder: "Bates & Slipsheets",
            videoSrc: productionFeatureVideo1,
          },
          {
            icon: File,
            title: "Format Conversion",
            description: "Convert documents into required production formats (PDF, TIFF, native) without compromising integrity or metadata.",
            details: [],
            imagePlaceholder: "Format Conversion",
            videoSrc: productionFeatureVideo3,
          },
          {
            icon: Database,
            title: "Load File Generation",
            description: "Create and validate industry-standard load files (OPT, DAT, CSV) for seamless import into review platforms or opposing counsel systems.",
            details: [],
            imagePlaceholder: "Load Files",
            videoSrc: productionFeatureVideo1,
          },
          {
            icon: EyeOff,
            title: "Redaction Management",
            description: "Apply, manage, and validate redactions with full audit visibility to prevent accidental disclosure.",
            details: [],
            imagePlaceholder: "Redactions",
            videoSrc: productionFeatureVideo3,
          },
        ]}
      />

      <section id="testimonials">
        <TestimonialsSection showLogoTrail title="Testimonials: Why Teams Are Unifying eDiscovery with Venio." />
      </section>

      <CTABanner />

      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

export default VenioProduction;
