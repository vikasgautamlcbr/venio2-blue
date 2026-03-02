import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CTABanner from "@/components/CTABanner";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ScrollFeatureAccordion } from "@/components/ScrollFeatureAccordion";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import { Shield, Cloud, Server, Workflow, Database, ArrowRight, Users, Layers, Gauge, Cpu, FileText, CircleDollarSign, Brain } from "lucide-react";
import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { LucideIcon } from "lucide-react";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";

const RoleCTOEdiscoveryOps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== "undefined") {
      document.title = "For CTO of eDiscovery Ops - Venio Systems";
      const desc = "Secure, scalable architecture for eDiscovery. High-performance processing, single‑DB design, and flexible deployment options.";
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", desc);
        document.head.appendChild(meta);
      }
      const scriptId = "ld-json-role-cto-ediscovery-ops";
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = scriptId;
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "For CTO of eDiscovery Ops",
        "url": window.location.origin + "/role-cto-ediscovery-ops"
      });
      document.head.appendChild(ld);
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + "/role-cto-ediscovery-ops");
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
    { name: "Integration Pipelines", Icon: Workflow },
    { name: "Deployment Flexibility", Icon: Layers },
    { name: "On-Premises", Icon: Server },
    { name: "Cloud", Icon: Cloud },
    { name: "Hybrid", Icon: Layers },
    { name: "Performance", Icon: Gauge },
    { name: "Compute", Icon: Cpu },
    { name: "Data Residency", Icon: Database },
    { name: "Operational Transparency", Icon: FileText },
    { name: "Regulatory Alignment", Icon: Shield },
    { name: "AI Driven", Icon: Brain },
    { name: "Reduced Costs", Icon: CircleDollarSign },
  ];
  const handleDownloadPageIcons = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    pageIcons.forEach(({ name, Icon }) => {
      const svg = buildTintedSvg(Icon, palette.accent);
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<Icon size={64} color="#ffffff" strokeWidth={2} />);
      zip.file(`${slugify(name)}.svg`, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cto-ediscovery-ops-icons.svg.zip";
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
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                  Built Around the Needs of eDiscovery CTOs
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Consolidate fragmented systems, scale infrastructure predictably, and maintain defensible performance across every matter and environment.
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
                  <Cpu className="h-24 w-24 mx-auto mb-4 text-secondary" />
                  <p className="text-sm">Architecture & Performance Visual</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-6 max-w-6xl pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
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
                  key={index}
                  className="rounded-xl bg-white/10 p-3 border border-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/15 transition-colors"
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
        </section>

        <ProblemSolutionSection
          variant="cards"
          title="When Infrastructure Becomes the Bottleneck"
          subtitle="As CTO of eDiscovery Operations, you’re responsible for performance, scalability, integration, and security. And here are a few things that get you stuck:"
          cards={[
            {
              icon: Workflow,
              title: "Integration & Data Flow Gaps",
              realityLabel: "- THE REALITY",
              reality: "Disconnected workflows create ingestion delays, data inconsistencies, and synchronization issues.",
              withLabel: "- WITH VENIO",
              withText: "Streamlined data pipelines unify ECA, review, production, and legal hold within one ecosystem.",
            },
            {
              icon: Layers,
              title: "Deployment Constraints & Security Demands",
              realityLabel: "- THE REALITY",
              reality: "Client, regulatory, and jurisdictional requirements demand flexible infrastructure control.",
              withLabel: "- WITH VENIO",
              withText: "Deploy cloud, on-prem, or hybrid environments aligned to security and compliance needs.",
            },
            {
              icon: Gauge,
              title: "Performance Under Volume Pressure",
              realityLabel: "- THE REALITY",
              reality: "Data surges and concurrent matters strain compute, storage, and indexing performance.",
              withLabel: "- WITH VENIO",
              withText: "Optimized architecture supports high-volume processing and simultaneous matters without degradation.",
            },
          ]}
        />

        <ScrollFeatureAccordion
          title="Venio: Built for eDiscovery Technology Leadership"
          subtitle="You can strengthen compliance posture while simplifying infrastructure complexity."
          features={[
            {
              icon: FileText,
              title: "Operational Transparency",
              description: "Comprehensive system logs and audit trails provide visibility into activity, performance, and compliance.",
              details: [],
              imagePlaceholder: "Operational Transparency",
            },
            {
              icon: Database,
              title: "Data Residency Control",
              description: "Meet jurisdictional data sovereignty requirements by controlling where data is stored, processed, and accessed.",
              details: [],
              imagePlaceholder: "Data Residency Control",
            },
            {
              icon: Layers,
              title: "Segmented Matter Environments",
              description: "Isolate sensitive or high-risk matters within dedicated environments to reduce cross-matter exposure.",
              details: [],
              imagePlaceholder: "Segmented Environments",
            },
            {
              icon: Shield,
              title: "Regulatory Alignment by Design",
              description: "Support GDPR, HIPAA, and industry-specific mandates through configurable access controls and retention policies.",
              details: [],
              imagePlaceholder: "Regulatory Alignment",
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

        <section id="cta-cto" className="py-24 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For CTOs of eDiscovery Operations Who Can’t Afford Downtime</h2>
            <p className="text-lg text-muted-foreground mb-8">Stress-test Venio’s performance across high-volume matters and strict security environments.</p>
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
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default RoleCTOEdiscoveryOps;
