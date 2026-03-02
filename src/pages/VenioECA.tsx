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
import { Play, FileText, Shield, Brain, Search, Filter, Layers, Database, DollarSign, BarChart3, Gauge, Users } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "metrics", label: "Metrics" },
  { id: "demo", label: "Demo" },
  { id: "compliance", label: "Compliance" },
  { id: "features", label: "Features" },
  { id: "brief", label: "Product Brief" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "CTA" },
];

const VenioECA = () => {
  const [isDemoUnlocked, setIsDemoUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const title = "Venio ECA - Venio Systems";
    const description = "Turn raw data into early leverage by identifying what matters, and eliminating what doesn’t.";
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
    const scriptId = "ld-json-venio-eca";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Venio ECA",
      "brand": { "@type": "Brand", "name": "Venio Systems" },
      "url": window.location.origin + "/venio-eca",
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/venio-eca");
    return () => {
      const e = document.getElementById(scriptId);
      if (e) e.remove();
    };
  }, []);

  const handleDemoAccess = () => {
    if (!isDemoUnlocked) {
      setIsDemoUnlocked(true);
    }
    window.open("https://demo.venio.com/eca", "_blank");
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
                <span className="text-white/90 text-sm font-medium">Early Case Assessment</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                ECA That Changes the Direction of the Case.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Turn raw data into early leverage by identifying what matters, and eliminating what doesn’t.
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
                <BarChart3 className="h-24 w-24 mx-auto mb-4 text-secondary" />
                <p className="text-sm">ECA Analytics Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Turn Data Volume Into Early Advantage</h2>
            <p className="text-lg text-muted-foreground">Early Case Assessment shouldn’t be guesswork. Venio gives you clarity, visibility, and strategic direction before costly review begins.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Interactive Data Visualization", desc: "Transform complex datasets into clear visual insights that reveal trends, custodians, and risk instantly." },
              { icon: Filter, title: "Reduced Review Volume", desc: "Eliminate irrelevant and duplicate data early to minimize downstream review time and cost." },
              { icon: Search, title: "Advanced Search & Pattern Insights", desc: "Uncover hidden connections and critical themes using layered search and intelligent clustering." },
              { icon: DollarSign, title: "Cost Efficient", desc: "Reduce processing, hosting, and review expenses by refining scope before full-scale review begins." },
              { icon: Shield, title: "Early Risk Identification", desc: "Surface high-risk documents and key custodians early to prevent costly surprises later." },
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
              { value: "50%", label: "Workload Reduction", icon: Gauge },
              { value: "3x", label: "Faster Insight", icon: BarChart3 },
              { value: "35%", label: "Lower Cost per Matter", icon: DollarSign },
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
            <h2 className="text-4xl font-heading font-bold mb-4">See the Data Come to Life.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how Venio processes, analyzes, and visualizes your data by turning complexity into actionable insight.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative aspect-video glass rounded-2xl p-8 flex items-center justify-center group hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={handleDemoAccess}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-muted-foreground text-lg font-medium">Interactive ECA Demo</p>
                <p className="text-sm text-muted-foreground mt-2">Click to explore the analytics workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="compliance" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Compliance Built Into the Core</h2>
            <p className="text-lg text-muted-foreground">End-to-end eDiscovery software designed with security, auditability, and regulatory defensibility at every layer.</p>
          </div>
        </div>
      </section>
      <SecuritySection />

      <ScrollFeatureAccordion
        title="Defensible Early Assessment Capabilities"
        subtitle="Purpose-built capabilities designed to surface insight fast and eliminate unnecessary spend."
        features={[
          {
            icon: Database,
            title: "Data Collection & Indexing",
            description: "Securely ingest and index large datasets quickly, making everything searchable from the start.",
            details: [],
            imagePlaceholder: "Collection & Indexing",
          },
          {
            icon: Filter,
            title: "Smart Pre-Processing",
            description: "Automatically de-duplicate, filter, and normalize data to eliminate noise before it becomes cost.",
            details: [],
            imagePlaceholder: "Pre-Processing",
          },
          {
            icon: Search,
            title: "Keyword & Metadata Search",
            description: "Run advanced Boolean queries and layered metadata filters to isolate high-risk documents instantly.",
            details: [],
            imagePlaceholder: "Search & Filters",
          },
          {
            icon: Layers,
            title: "Concept-Based Clustering",
            description: "Uncover hidden themes and related content automatically, beyond what keywords alone can detect.",
            details: [],
            imagePlaceholder: "Clustering",
          },
        ]}
      />

      <section id="brief" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass-dark rounded-3xl overflow-hidden shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] border-0">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="relative w-56 h-72 bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Venio ECA</h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Product Brief</p>
                    <div className="mt-4 px-4 py-1.5 bg-accent/10 rounded-full">
                      <p className="text-xs font-medium text-accent">2024 Edition</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-3 p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                    Venio ECA Product Brief
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A concise guide outlining how intelligent early case assessment reduces review costs, accelerates strategy, and strengthens litigation positioning.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Brain, text: "ECA Workflow Overview" },
                    { icon: FileText, text: "Complete Feature Breakdown" },
                    { icon: Users, text: "Deployment Options" },
                    { icon: DollarSign, text: "Cost & Volume Reduction Impact" },
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
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold h-14 px-8 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap text-lg flex-1 flex items-center">
                    <a href="/resources/Product_Brief-Venio_ECA.pdf" download>
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
      </section>

      <section id="testimonials">
        <TestimonialsSection showLogoTrail title="Testimonials: Why Teams Are Unifying eDiscovery with Venio" />
      </section>

      <section id="cta" className="py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Early Case Assessment Your Strategic Advantage</h2>
          <p className="text-lg text-muted-foreground mb-8">Gain measurable clarity into data, exposure, and cost before the case accelerates.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6">
              <Link to="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

export default VenioECA;
