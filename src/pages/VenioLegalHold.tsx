import { Card, CardContent } from "@/components/ui/card";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { ScrollFeatureAccordion } from "@/components/ScrollFeatureAccordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Shield,
  Clock,
  Users,
  CheckCircle,
  UserCheck,
  ClipboardList,
  Timer,
  LayoutDashboard,
  Download,
  Play,
  Sparkles,
  ArrowRight,
  BarChart3
} from "lucide-react";
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

const sections = [
  { id: "hero", label: "Overview" },
  { id: "data", label: "Metrics" },
  { id: "demo", label: "Demo" },
  { id: "features", label: "Features" },
  { id: "case-studies", label: "Case Studies" },
  { id: "download", label: "Product Brief" },
];

const VenioLegalHold = () => {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [isDemoUnlocked, setIsDemoUnlocked] = useState(false);
  const [isBookDemoDialogOpen, setIsBookDemoDialogOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const title = "Venio Legal Hold - Venio Systems";
    const description = "Replace spreadsheets and email chains with structured, auditable preservation built to withstand scrutiny.";
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
    const scriptId = "ld-json-legalhold";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Venio Legal Hold",
      "brand": { "@type": "Brand", "name": "Venio Systems" },
      "url": window.location.origin + "/venio-legal-hold"
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/venio-legal-hold");
    return () => {
      const e = document.getElementById(scriptId);
      if (e) e.remove();
    };
  }, []);

  const handleDemoAccess = () => {
    if (!isDemoUnlocked) {
      setIsDemoDialogOpen(true);
    } else {
      // Open demo or navigate to demo page
      window.open('https://demo.venio.com', '_blank');
    }
  };

  const handleDemoSuccess = () => {
    setIsDemoUnlocked(true);
    // Open demo after successful form submission
    window.open('https://demo.venio.com', '_blank');
  };
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const buildSvg = (IconComp: LucideIcon) => {
    const rawInner = renderToStaticMarkup(<IconComp size={32} color="#ffffff" strokeWidth={2} />);
    const sanitizedInner = rawInner.replace(/stroke="currentColor"/g, 'stroke="#ffffff"').replace('<svg ', '<svg x="16" y="16" ');
    const outer = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` + `<rect width="64" height="64" fill="#3DC47E" rx="12"/>` + `${sanitizedInner}` + `</svg>`;
    return outer;
  };
  const isValidSvg = (svg: string) => {
    try {
      const doc = new DOMParser().parseFromString(svg, "image/svg+xml");
      return !doc.querySelector("parsererror");
    } catch {
      return false;
    }
  };
  const legalHoldFeatureIcons: { name: string; Icon: LucideIcon }[] = [
    { name: "Automated Notifications & Escalations", Icon: Timer },
    { name: "Custodian Acknowledgment Tracking", Icon: UserCheck },
    { name: "Centralized Hold Management", Icon: LayoutDashboard },
    { name: "Notification & Questionnaire Templates", Icon: FileText },
  ];
  const handleDownloadLegalHoldIcons = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    legalHoldFeatureIcons.forEach(({ name, Icon }) => {
      const svg = buildSvg(Icon);
      const final = isValidSvg(svg) ? svg : renderToStaticMarkup(<Icon size={64} color="#ffffff" strokeWidth={2} />);
      zip.file(`${slugify(name)}.svg`, final);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-legal-hold-feature-icons.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[75vh] md:min-h-[70vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-16">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-16 right-24 w-32 h-32 bg-secondary/25 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 right-36 w-64 h-64 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full mb-2 pulse-glow animate-slide-up">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Legal Hold</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Legal Hold That Survives Court.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Replace spreadsheets and email chains with structured, auditable preservation built to withstand scrutiny.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDemoAccess} size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  See How it Works
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] glass-dark rounded-2xl p-8 flex items-center justify-center animate-fade-in-scale">
              <div className="text-white/70 text-center">
                <FileText className="h-24 w-24 mx-auto mb-4 text-secondary" />
                <p className="text-sm">Product Dashboard Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="icons-download" className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Download Page Icons</h2>
            <p className="text-muted-foreground">Get emerald‑green filled feature icons used on this page or browse the full library</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={handleDownloadLegalHoldIcons} size="lg" className="bg-[#3DC47E] hover:bg-[#33B471] text-white">
              Download Legal Hold Feature Icons (SVG)
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/icons">Browse Icons Library</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Turn Preservation Into a Position of Strength</h2>
            <p className="text-lg text-muted-foreground">When legal hold is structured, enforced, and documented, litigation risk drops. Venio gives you the control others leave to chance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Sanctions Risk, Reduced", desc: "Eliminate manual tracking and undocumented follow-ups that expose your organization to scrutiny." },
              { icon: FileText, title: "Defensible Audit Trails", desc: "Document every notice, reminder, and custodian action with full, court-ready records you can trust." },
              { icon: Users, title: "Scalable Cross-Department Workflows", desc: "Align legal, IT, and business teams with repeatable, enterprise-grade processes that scale with your caseloads." },
              { icon: BarChart3, title: "Reduced Over-Preservation & Cost", desc: "Target only the custodians and data that matter, reducing storage, review effort, and operational overhead." },
              { icon: FileText, title: "Centralized Legal Hold Coordination", desc: "Manage every legal hold from a single workspace, no scattered emails, no spreadsheets, complete accountability." },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section id="data" className="py-24 relative overflow-hidden">
        {/* Venio branded gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Numbers That Tell the Story</h2>
            <p className="text-lg text-muted-foreground">Track turnaround time, workload reduction, and accuracy improvements in one clear view.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "70%", label: "Shorter hold cycles", description: "Complete holds faster with automation", icon: Clock },
              { value: "40%", label: "Higher custodian response rate", description: "Improved engagement and tracking", icon: Users },
              { value: "100%", label: "Defensible audit tracking", description: "Complete chain of custody records", icon: Shield },
              { value: "64%", label: "Of discovery failures avoidable", description: "Prevent common mistakes proactively", icon: CheckCircle },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
              >
                {/* Venio glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  
                  <p className="text-lg font-semibold mb-2 text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Don’t Just Read About It. See It.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how Venio enforces, tracks, and documents every hold all in real time.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FileText, label: "Create & Launch", desc: "Set up holds in minutes" },
                { icon: Users, label: "Track Custodians", desc: "Real-time status monitoring" },
                { icon: Shield, label: "Audit & Release", desc: "Complete defensibility" },
              ].map((step, index) => (
                <Card key={index} className="glass text-center hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold">{step.label}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative aspect-video glass rounded-2xl p-8 flex items-center justify-center group hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={handleDemoAccess}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-muted-foreground text-lg font-medium">Interactive Product Demo</p>
                <p className="text-sm text-muted-foreground mt-2">Click to explore the full workflow</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <ScrollFeatureAccordion
        accentAlways
        title="Preservation, With Accountability Built In."
        subtitle="Core capabilities designed to eliminate preservation gaps and withstand judicial scrutiny."
        features={[
          {
            icon: Timer,
            title: "Automated Notifications & Escalations",
            description: "Send hold notices, schedule reminders, and escalate non-acknowledgments automatically.",
            details: [],
            imagePlaceholder: "Notifications & Escalations",
          },
          {
            icon: UserCheck,
            title: "Custodian Acknowledgment Tracking",
            description: "Real-time visibility into who has acknowledged, who hasn’t, and who is non-compliant.",
            details: [],
            imagePlaceholder: "Acknowledgments",
          },
          {
            icon: LayoutDashboard,
            title: "Centralized Hold Management",
            description: "Create, issue, modify, and release legal holds from a single dashboard across all matters.",
            details: [],
            imagePlaceholder: "Hold Management",
          },
          {
            icon: FileText,
            title: "Notification & Questionnaire Templates",
            description: "Standardized, customizable templates for hold notices and custodian responses.",
            details: [],
            imagePlaceholder: "Templates",
          },
        ]}
      />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Download Product Brief Section - Enhanced */}
      <section id="download" className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Glow effect wrapper */}
          <div className="relative group">
            {/* Animated glow border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
            
            {/* Main card */}
            <div className="relative glass-dark rounded-3xl overflow-hidden shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:scale-[1.02] border-0">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left side - PDF Preview with 3D effect */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                <div className="relative group">
                  {/* 3D Stack Effect */}
                  <div className="absolute -inset-4 bg-white/5 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="absolute -inset-2 bg-white/5 rounded-2xl -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                  
                  {/* Main PDF Card */}
                  <div className="relative w-56 h-72 bg-white rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FileText className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Venio Legal Hold</h3>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Product Brief</p>
                      <div className="mt-4 px-4 py-1.5 bg-accent/10 rounded-full">
                        <p className="text-xs font-medium text-accent">2024 Edition</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2 animate-float">
                    <Sparkles className="h-3 w-3 text-accent" />
                    <span className="text-xs font-semibold text-foreground">PDF • 2.4 MB</span>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:col-span-3 p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-2">
                    <Download className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Download</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                    Venio Legal Hold Product Brief
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A concise guide outlining how structured, automated preservation reduces litigation risk and strengthens defensibility across your organization.
                  </p>
                </div>

                {/* What's Inside */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: FileText, text: "Legal Hold Process Overview" },
                    { icon: CheckCircle, text: "Complete feature breakdown" },
                    { icon: Users, text: "Deployment options" },
                    { icon: BarChart3, text: "Cost & Risk Reduction Impact" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold h-14 px-8 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap text-lg flex-1 flex items-center">
                    <a href="/resources/Product_Brief-Venio_Legal_Hold.pdf" download>
                      Download Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-14 px-8 text-lg flex-1">
                    <Link to="/book-a-demo">Book a Demo</Link>
                  </Button>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don’t Wait for Preservation to Be Questioned.</h2>
          <p className="text-lg text-muted-foreground mb-8">Strengthen your legal hold process before it becomes a liability.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6">
              <Link to="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Demo Gate Dialog */}
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

export default VenioLegalHold;
