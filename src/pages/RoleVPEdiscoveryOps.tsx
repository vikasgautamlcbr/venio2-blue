import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ScrollFeatureAccordion } from "@/components/ScrollFeatureAccordion";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { Shield, Cloud, Server, Workflow, Database, ArrowRight, Users, Layers, FileText, CircleDollarSign, Brain, TrendingUp, BarChart3 } from "lucide-react";
import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { LucideIcon } from "lucide-react";
import amentumLogo from "@/assets/clients/amentum-new.webp";
import arrayLogo from "@/assets/clients/array-new.webp";
import cdsLogo from "@/assets/clients/cds-new.webp";
import consilioLogo from "@/assets/clients/consilio-new.webp";
import eparioLogo from "@/assets/clients/epario-new.webp";
import haugLogo from "@/assets/clients/haug-partners-new.webp";
import nixonLogo from "@/assets/clients/nixon-peabody-new.webp";
import proteusLogo from "@/assets/clients/proteus-new.webp";

const RoleVPEdiscoveryOps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== "undefined") {
      document.title = "For VP of eDiscovery Ops - Venio Systems";
      const desc = "KPIs, utilization, SLAs, and workflow standardization at scale. Operational intelligence for eDiscovery leaders.";
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", desc);
        document.head.appendChild(meta);
      }
      const scriptId = "ld-json-role-vp-ediscovery-ops";
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = scriptId;
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "For VP of eDiscovery Ops",
        "url": window.location.origin + "/role-vp-ediscovery-ops"
      });
      document.head.appendChild(ld);
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + "/role-vp-ediscovery-ops");
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
      `<rect x="2" y="2" width="60" height="60" rx="12" fill="${hex}"/>` +
      `<rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="${hex}" stroke-opacity="0.9" stroke-width="2"/>` +
      `<g transform="translate(16,16) scale(1.3333)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
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
    { name: "Ops Visual", Icon: BarChart3 },
    { name: "Portfolio Visibility", Icon: TrendingUp },
    { name: "Standardized Workflows", Icon: Workflow },
    { name: "Defensible by Design", Icon: Shield },
    { name: "Secure Collaboration", Icon: Users },
    { name: "Unified Platform", Icon: Layers },
    { name: "On-Premises eDiscovery", Icon: Server },
    { name: "Cloud eDiscovery", Icon: Cloud },
    { name: "Hybrid eDiscovery", Icon: Layers },
    { name: "Reduced Costs", Icon: CircleDollarSign },
    { name: "AI Driven", Icon: Brain },
  ];
  const handleDownloadPageIcons = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    pageIcons.forEach(({ name, Icon }) => {
      const hex = palette.accent;
      const svg = buildTintedSvg(Icon, hex);
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<Icon size={64} color="#ffffff" strokeWidth={2} />);
      zip.file(`${slugify(name)}.svg`, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vp-ops-page-icons.svg.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-40">
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
                  <span className="text-white/90 text-sm font-medium">ediscovery operations (S.V. 20)</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                  Designed for VPs of eDiscovery Who Own the Outcome
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  When timelines slip or audits happen, responsibility lands with you. Venio gives you the control to stay ahead of both.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                    <Link to="/book-a-demo">Book a Demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl hover:ring-1 ring-white/30">
                    <Link to="/book-a-demo">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Talk to an eDiscovery Expert
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] glass-dark rounded-2xl p-8 flex items-center justify-center animate-fade-in-scale">
                <div className="text-white/70 text-center">
                  <BarChart3 className="h-24 w-24 mx-auto mb-4 text-secondary" />
                  <p className="text-sm">Operations Control Visual</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="relative overflow-hidden py-12 md:py-14">
              <div className="text-center mb-8 md:mb-10">
                <p className="text-white/80 text-sm">
                  <span className="border-b-2 border-accent pb-1">Trusted by leading organizations</span>
                </p>
              </div>
              <div className="logo-ticker-inner flex gap-16 sm:gap-20 md:gap-24 animate-logo-scroll">
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
                  <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[160px] md:min-w-[180px] transition-transform duration-200 hover:scale-110">
                    <img src={logo.src} alt={logo.alt} style={{ height: '36px', filter: 'brightness(0) invert(1)' }} className="w-auto object-contain opacity-90" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProblemSolutionSection
          variant="cards"
          title="When Operations Complexity Becomes Risk"
          subtitle="As VP of eDiscovery Operations, you're accountable for timelines, budgets, defensibility, and performance across every active matter."
          cards={[
            {
              icon: TrendingUp,
              title: "Limited Operational Visibility",
              realityLabel: "- THE REALITY",
              reality: "Tracking volumes, reviewer activity, and deadlines across tools creates blind spots.",
              withLabel: "- WITH VENIO",
              withText: "Real-time dashboards provide portfolio-wide visibility into matters, workloads, and risks.",
            },
            {
              icon: Layers,
              title: "Fragmented Discovery Ecosystem",
              realityLabel: "- THE REALITY",
              reality: "Processing, review, production, and legal hold in separate systems cause delays and handoffs.",
              withLabel: "- WITH VENIO",
              withText: "A unified platform connects ECA, review, production, and legal hold in one environment.",
            },
            {
              icon: Server,
              title: "Scaling Without Breaking Process",
              realityLabel: "- THE REALITY",
              reality: "High-volume, concurrent matters strain teams and infrastructure.",
              withLabel: "- WITH VENIO",
              withText: "Scalable architecture supports simultaneous matters without disruption.",
            },
          ]}
        />

        <ScrollFeatureAccordion
          title="Venio: Built for eDiscovery Operations Leadership"
          subtitle="Strategic control, predictable performance, and clear oversight across every matter and team."
          features={[
            {
              icon: TrendingUp,
              title: "Portfolio-Level Visibility",
              description: "Monitor all active matters from a centralized view with live reporting on volumes, reviewer progress, costs, and deadlines.",
              details: [],
              imagePlaceholder: "Ops Visibility",
            },
            {
              icon: Workflow,
              title: "Standardized Workflows Across Teams",
              description: "Use templates, tagging structures, QC workflows, and production protocols to ensure firm-wide consistency.",
              details: [],
              imagePlaceholder: "Standardized Workflows",
            },
            {
              icon: Shield,
              title: "Defensible by Design",
              description: "Maintain documented workflows, complete audit trails, and reproducible processes to withstand scrutiny.",
              details: [],
              imagePlaceholder: "Defensible Processes",
            },
            {
              icon: Users,
              title: "Secure Multi-Team Collaboration",
              description: "Enable internal teams, contract reviewers, and external stakeholders to collaborate securely with role-based access.",
              details: [],
              imagePlaceholder: "Secure Collaboration",
            },
          ]}
        />

        <section id="usps" className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2">Venio is Built to Handle</h2>
              <p className="text-lg text-muted-foreground">Every advantage is designed to give legal teams clarity, control, and confidence.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Workflow, title: "Unified Platform", desc: "One platform for ECA, review, production, and legal hold with no silos, no handoffs, no gaps." },
                { icon: Brain, title: "AI‑Driven", desc: "Accelerate review with explainable, defensible AI and speed without sacrificing control." },
                { icon: Cloud, title: "Flexible Deployment", desc: "Cloud, on‑prem, or hybrid: deploy Venio your way, without compromise." },
                { icon: CircleDollarSign, title: "Reduced Costs", desc: "Transparent pricing that scales predictably without surprise fees and cost shocks." },
                { icon: Users, title: "Intuitive by Design", desc: "Built for legal teams for fast adoption, minimal training, and fewer errors." },
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

        <section id="deployment" className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2">Deployment Options That Fit How You Work</h2>
              <p className="text-lg text-muted-foreground">Whether prioritizing speed, control, or balance, flexible deployment lets each matter follow the right path.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Server, 
                  title: "On-Premises eDiscovery", 
                  desc: "Maximum control for matters with strict security, regulatory, or client-mandated requirements, keeping data fully within the firm’s infrastructure."
                },
                { 
                  icon: Cloud, 
                  title: "Cloud eDiscovery", 
                  desc: "Fast, scalable deployment for matters that require speed, flexibility, and seamless collaboration across teams and offices."
                },
                { 
                  icon: Layers, 
                  title: "Hybrid eDiscovery", 
                  desc: "A balanced approach that allows firms to keep sensitive data on-prem while leveraging the cloud for flexibility on a matter-by-matter basis."
                },
              ].map((item, idx) => (
                <Card key={idx} className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-10">
                    <div className="w-14 h-14 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                      <item.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-[28rem] mx-auto">{item.desc}</p>
                    <Button asChild size="sm" variant="outline" className="rounded-full px-5">
                      <Link to="/book-a-demo">
                        Explore {item.title.split(" ")[0]}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CaseStudiesSection />

        <TestimonialsSection showLogoTrail={false} title="Proven in Real eDiscovery Workflows" />

        <SecuritySection />

        <section id="cta-vp-ops" className="py-24 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep Every Matter Moving, Without Losing Control</h2>
            <p className="text-lg text-muted-foreground mb-8">See how Venio helps VPs of eDiscovery Operations manage scale & risk with better performance</p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6">
                <Link to="/book-a-demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <Link to="/book-a-demo">Talk to an eDiscovery Expert</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="icons-download" className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Download Page Icons</h2>
              <p className="text-muted-foreground">Get icons used on this page or browse the full library</p>
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

export default RoleVPEdiscoveryOps;
