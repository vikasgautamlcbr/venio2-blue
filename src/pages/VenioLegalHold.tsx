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

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden gradient-animated pt-32 pb-24">
        {/* hero content here (remove untouched for brevity) */}
      </section>

      <BenefitsSection />
      {/* Data Points Section here (unchanged for brevity) */}
      {/* Interactive Demo Section - FIXED */}
      <section id="demo" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          {/* Heading and subheading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Experience It Live</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Walk through the complete legal hold workflow from creation to release
            </p>
          </div>
          {/* 3 Feature Boxes BELOW Heading, ABOVE Demo */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
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
          {/* Demo Placeholder */}
          <div className="max-w-5xl mx-auto space-y-8">
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
            <div className="text-center">
              <button
                onClick={handleDemoAccess}
                className="btn btn-primary text-lg px-10 py-4 group"
              >
                Start Interactive Demo
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Continue unchanged sections below ... */}
      {/* Features Section - Scroll Interactive Accordion */}
      <ScrollFeatureAccordion />
      {/* Case Studies Section */}
      <CaseStudiesSection />
      {/* Download Product Brief Section - Enhanced */}
      {/* ...remaining code unchanged... */}
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