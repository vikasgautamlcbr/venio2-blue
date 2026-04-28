import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Cloud, Clock, Database, DollarSign, FileCheck, FileSearch, Layers, Server, ShieldCheck, UserCheck, Workflow, Zap } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";
import type { LucideIcon } from "lucide-react";

const ForFinancialServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== "undefined") {
      document.title = "For Financial Services - Venio Systems";
      const desc =
        "Respond to SEC, FINRA, and internal investigations with control. Venio delivers eDiscovery solutions for finance to manage complex data, deadlines, and concurrent matters on a single platform.";
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", desc);
        document.head.appendChild(meta);
      }

      const scriptId = "ld-json-for-financial-services";
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = scriptId;
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "For Financial Services",
        url: window.location.origin + "/for-financial-services",
      });
      document.head.appendChild(ld);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + "/for-financial-services");
    }
  }, []);

  const palette = { accent: "#3DC47E" };
  const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const buildTintedSvg = (IconComp: LucideIcon, hex: string) => {
    const raw = renderToStaticMarkup(<IconComp size={24} strokeWidth={2} />);
    const match = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    const innerContent = match ? match[1] : raw;
    const outer =
      `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
      `<rect x="2" y="2" width="60" height="60" rx="12" fill="${hex}" fill-opacity="0.10"/>` +
      `<g transform="translate(16,16) scale(1.3333)" fill="none" stroke="${hex}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
      `${innerContent}` +
      `</g>` +
      `</svg>`;
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
  const pageIcons: { name: string; Icon: LucideIcon }[] = [
    { name: "Regulatory Deadlines", Icon: Clock },
    { name: "Financial Data", Icon: Database },
    { name: "Audit Gaps", Icon: ShieldCheck },
    { name: "High-Speed Processing", Icon: Zap },
    { name: "Advanced Analytics", Icon: Brain },
    { name: "Audit-Ready Workflows", Icon: FileCheck },
    { name: "Unified Platform", Icon: Workflow },
    { name: "Flexible Deployment", Icon: Cloud },
    { name: "Reduced Costs", Icon: DollarSign },
    { name: "Intuitive by Design", Icon: UserCheck },
    { name: "On-Premises eDiscovery", Icon: Server },
    { name: "Cloud eDiscovery", Icon: Cloud },
    { name: "Hybrid eDiscovery", Icon: Layers },
    { name: "Insider Trading Investigations", Icon: FileSearch },
  ];
  const handleDownloadPageIcons = async () => {
    const importFromUrl = new Function("u", "return import(u)") as (u: string) => Promise<{ default: unknown }>;
    const { default: JSZip } = (await importFromUrl("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm")) as unknown as {
      default: new () => {
        file: (name: string, data: string) => void;
        generateAsync: (opts: { type: "blob" }) => Promise<Blob>;
      };
    };
    const zip = new JSZip();
    pageIcons.forEach(({ name, Icon }) => {
      const hex = palette.accent;
      const svg = buildTintedSvg(Icon, hex);
      const finalSvg = isValidSvg(svg) ? svg : buildTintedSvg(Icon, hex);
      zip.file(`${slugify(name)}.svg`, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "financial-services-page-icons.svg.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section
          id="hero"
          className="relative overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20"
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80" />

          <div className="relative z-10 container mx-auto px-6 max-w-5xl">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                eDiscovery Built for Financial Regulatory Pressure
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Respond to SEC, FINRA, and internal investigations with control. Venio delivers ediscovery
                solutions for finance to manage complex data, deadlines, and concurrent matters on a
                single platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6">
                  <Link to="/book-a-demo" className="flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/15">
                  <Link to="/book-a-demo">Talk to an eDiscovery Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="problem-solution" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Operational Gaps in Financial eDiscovery</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                In financial services, eDiscovery isn’t just complex - it’s continuous, high-risk, and
                regulator-driven. Yet most tools aren’t built for that reality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Regulatory Deadlines You Don’t Control</h3>
                  <p className="text-muted-foreground mb-4">
                    SEC, FINRA, and regulators impose strict timelines with no room for delays.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-primary mb-1">With Venio</div>
                    <div className="text-muted-foreground">
                      Accelerate response with unified workflows and faster turnaround across every stage.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Database className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Financial Data Isn’t Standard Data</h3>
                  <p className="text-muted-foreground mb-4">
                    Bloomberg chats, trading logs, and voice data don’t fit traditional workflows.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-primary mb-1">With Venio</div>
                    <div className="text-muted-foreground">
                      Ingest and process complex financial data seamlessly, without losing context.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Disconnected Systems Create Audit Gaps</h3>
                  <p className="text-muted-foreground mb-4">
                    Siloed tools break the chain of custody and weaken defensibility.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-primary mb-1">With Venio</div>
                    <div className="text-muted-foreground">
                      Run discovery in one platform with complete audit trails and end-to-end control.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">eDiscovery That Keeps Up With Finance</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                From regulatory requests to internal reviews, Venio gives you the speed, control, and
                auditability to handle every matter without compromise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">High-Speed Processing Large Financial Datasets</h3>
                  <p className="text-sm text-muted-foreground">
                    Process multi-terabyte emails, chats, and trading data with consistent performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Advanced Analytics for Early Insight</h3>
                  <p className="text-sm text-muted-foreground">
                    Surface key custodians and patterns early to reduce review time.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Database className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Financial Data Ingestion and Normalization</h3>
                  <p className="text-sm text-muted-foreground">
                    Ingest Bloomberg, chat, and structured data without losing context.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <FileCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Defensible, Audit-Ready Workflows</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain chain of custody, retention, and compliant reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="usps" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">5 Ways Venio Runs eDiscovery Better</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Every advantage is designed to give legal teams clarity, control, and confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Workflow className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Unified Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    One platform for ECA, review, production, and legal hold with no silos, no handoffs,
                    no gaps.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI-Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Accelerate review with explainable, defensible AI and speed without sacrificing control.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Cloud className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Flexible Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Cloud, on-prem, or hybrid: deploy Venio your way, without compromise.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Reduced Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing that scales predictably without surprise fees and cost shocks.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <UserCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Intuitive by Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Built for legal teams for fast adoption, minimal training, and fewer errors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="deployment" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Deployment Options That Fit How You Work</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Financial institutions choose deployment based on regulatory requirements, data sensitivity,
                and operational flexibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Server className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">On-Premises eDiscovery</h3>
                  <p className="text-muted-foreground">
                    Maximum control for matters with strict security, regulatory, or client-mandated
                    requirements, keeping data fully within the firm’s infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Cloud className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cloud eDiscovery</h3>
                  <p className="text-muted-foreground">
                    Fast, scalable deployment for matters that require speed, flexibility, and seamless
                    collaboration across teams and offices.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-muted/20 border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Layers className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hybrid eDiscovery</h3>
                  <p className="text-muted-foreground">
                    A balanced approach that allows firms to keep sensitive data on-prem while leveraging
                    the cloud for flexibility on a matter-by-matter basis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="use-cases" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">eDiscovery for Every Corner of Finance</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Support investigations, audits, and enforcement actions across trading desks, compliance
                teams, and legal functions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <FileSearch className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Insider Trading Investigations</h3>
                  <p className="text-muted-foreground">
                    Analyze trader communications, deal timelines, and market activity to detect potential
                    misuse of non-public information.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Regulatory Inquiries (SEC, FINRA, DOJ)</h3>
                  <p className="text-muted-foreground">
                    Respond quickly to subpoenas and information requests with defensible, audit-ready data
                    across multiple systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl bg-white border border-border/40 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <UserCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Whistleblower & Employee Misconduct Cases</h3>
                  <p className="text-muted-foreground">
                    Uncover internal issues by analyzing communications, documents, and behavioral patterns
                    across custodians.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white">
          <TestimonialsSection title="Why Financial Institutions Trust Venio" />
        </section>

        <section id="cta" className="py-24 px-6 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the Team Finance Relies On</h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Venio helps financial institutions manage regulatory pressure, complex data, and
              concurrent investigations
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 py-6">
              <Link to="/book-a-demo" className="flex items-center gap-2">
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="icons-download" className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Download Icons</h2>
              <p className="text-muted-foreground">Get all icons used on this page as SVG with backgrounds</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button onClick={handleDownloadPageIcons} size="lg" className="bg-[#3DC47E] hover:bg-[#33B471] text-white">
                Download All Icons (SVG)
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/icons">Browse Icons Library</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForFinancialServices;
