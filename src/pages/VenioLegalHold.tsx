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
  Building2, 
  Briefcase, 
  Landmark, 
  Building,
  Download,
  Play,
  ChevronRight,
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

const sections = [
  { id: "hero", label: "Overview" },
  { id: "data", label: "Impact" },
  { id: "demo", label: "Demo" },
  { id: "features", label: "Features" },
  { id: "case-studies", label: "Case Studies" },
  { id: "download", label: "Resources" },
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
    const description = "Modernizing legal hold with automated workflows, defensible tracking, and enterprise-grade compliance.";
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
                <span className="text-white/90 text-sm font-medium">Automated Legal Hold Solution</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Automated, Defensible Legal Holds—
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent animate-shimmer">
                  Done Right
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Streamline notices, confirmations, and compliance with a modern automated legal hold solution built for speed and accuracy.
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
            <div className="relative h-[400px] glass-dark rounded-2xl p-8 flex items-center justify-center animate-fade-in-scale">
              <div className="text-white/70 text-center">
                <FileText className="h-24 w-24 mx-auto mb-4 text-secondary" />
                <p className="text-sm">Product Dashboard Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Data Points Section */}
      <section id="data" className="py-24 relative overflow-hidden">
        {/* Venio branded gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-lg text-muted-foreground">
              See how Venio Legal Hold transforms legal operations with proven results
            </p>
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
            <h2 className="text-4xl font-heading font-bold mb-4">Experience It Live</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Walk through the complete legal hold workflow from creation to release
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

      {/* Features Section - Scroll Interactive Accordion */}
      <ScrollFeatureAccordion />

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
                    Get the Complete
                    <span className="text-accent"> Product Brief</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Download our comprehensive 24-page guide with everything you need to evaluate Venio Legal Hold for your organization.
                  </p>
                </div>

                {/* What's Inside */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "Complete feature breakdown" },
                    { icon: Shield, text: "Security & compliance" },
                    { icon: Users, text: "Deployment options" },
                    { icon: BarChart3, text: "ROI analysis & pricing" },
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

                {/* CTA Buttons */}
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

      {/* Final CTA Section */}
      <CTABanner />

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
