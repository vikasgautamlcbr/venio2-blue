import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTABanner from "@/components/CTABanner";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { ScrollFeatureAccordion } from "@/components/ScrollFeatureAccordion";
import { DataPointsSection } from "@/components/DataPointsSection";
import { FileText, Search, Landmark, ArrowRight, Cloud, Server, Layers, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

const UseCaseFOIA = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [industry, setIndustry] = useState<string>("Government");
  const palette = { accent: "#3DC47E", destructive: "#EF4444" };
  const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const buildTintedSvg = (IconComp: LucideIcon, hex: string) => {
    const raw = renderToStaticMarkup(<IconComp size={24} strokeWidth={2} />);
    const match = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    const innerContent = match ? match[1] : raw;
    const outer =
      `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
      `<rect x="2" y="2" width="60" height="60" rx="12" fill="${hex}" fill-opacity="0.12"/>` +
      `<rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="${hex}" stroke-opacity="0.25" stroke-width="2"/>` +
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
  const pageIcons: { name: string; Icon: LucideIcon; variant: "accent" | "destructive" }[] = [
    { name: "FOIA Visual", Icon: FileText, variant: "accent" },
    { name: "Government", Icon: Landmark, variant: "accent" },
    { name: "Law Firms", Icon: Briefcase, variant: "accent" },
    { name: "Service Providers", Icon: Users, variant: "accent" },
    { name: "Cloud eDiscovery", Icon: Cloud, variant: "accent" },
    { name: "On-Premises eDiscovery", Icon: Server, variant: "accent" },
    { name: "Hybrid eDiscovery", Icon: Layers, variant: "accent" },
    { name: "Compliance", Icon: Landmark, variant: "destructive" },
    { name: "Search", Icon: Search, variant: "destructive" },
  ];
  const handleDownloadPageIcons = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    pageIcons.forEach(({ name, Icon, variant }) => {
      const hex = palette[variant];
      const svg = buildTintedSvg(Icon, hex);
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<Icon size={64} color="#ffffff" strokeWidth={2} />);
      zip.file(`${slugify(name)}.svg`, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-foia-icons.svg.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };
  const handleDownloadVisibilityGapIcons = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    [
      { name: "Unstructured Records", Icon: FileText },
      { name: "Slow Search & Review", Icon: Search },
      { name: "Compliance & Redaction", Icon: Landmark },
    ].forEach(({ name, Icon }) => {
      const svg = buildTintedSvg(Icon, palette.destructive);
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<Icon size={64} color={palette.destructive} strokeWidth={2} />);
      zip.file(`${slugify(name)}.svg`, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-foia-gap-icons.svg.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };
  const industries = [
    { key: "Government", icon: Landmark, title: "Government", desc: "FOIA/Records teams responding to requests" },
    { key: "Law Firms", icon: Briefcase, title: "Law Firms", desc: "Counsel advising public agency clients" },
    { key: "Service Providers", icon: Users, title: "Service Providers", desc: "Managed services supporting FOIA response" },
    { key: "Corporations", icon: FileText, title: "Corporations", desc: "Public entities and regulated organizations" },
  ];
  const rolesByIndustry: Record<string, { role: string; care: string }[]> = {
    "Government": [
      { role: "FOIA / Records Officer", care: "Searchability, compliance, retention controls" },
      { role: "Investigator", care: "Speed to insight, evidence quality" },
      { role: "IT Security Lead", care: "Security posture, auditability, access control" },
    ],
    "Law Firms": [
      { role: "Managing Partner", care: "Client outcomes, profitability, predictable timelines" },
      { role: "Senior Associate", care: "Review speed, accuracy, case readiness" },
      { role: "Litigation Support Manager", care: "Workflow efficiency, tooling fit, QC" },
    ],
    "Service Providers": [
      { role: "Project Manager", care: "Turnaround times, quality consistency" },
      { role: "Operations Director", care: "Margin, throughput, resource utilization" },
      { role: "Sales Engineer", care: "Capability coverage, client trust" },
    ],
    "Corporations": [
      { role: "General Counsel", care: "Risk posture, defensibility, transparent decisions" },
      { role: "eDiscovery Manager", care: "Control, predictable spend, reduced data volumes" },
      { role: "IT / CIO", care: "Security, integration, governance alignment" },
    ],
  };
  const industryRoutes: Record<string, string> = {
    "Government": "/for-government",
    "Law Firms": "/law-firm-solutions",
    "Service Providers": "/for-service-providers",
    "Corporations": "/for-corporations",
  };
  const handleDownloadFoiaFeaturesIcons = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    const items: { name: string; Icon: LucideIcon }[] = [
      { name: "Centralized FOIA Intake & Tracking", Icon: FileText },
      { name: "Powerful Search Across All Data Sources", Icon: Search },
      { name: "Cross-Department Collaboration", Icon: Users },
      { name: "Scalable for High Volume", Icon: Layers },
    ];
    items.forEach(({ name, Icon }) => {
      const svg = buildTintedSvg(Icon, palette.accent);
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<Icon size={64} color={palette.accent} strokeWidth={2} />);
      zip.file(`${slugify(name)}.svg`, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-foia-features-icons-green.svg.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-40">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-24 right-24 w-32 h-32 bg-secondary/25 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-[55%] right-40 w-56 h-56 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full mb-2 pulse-glow animate-slide-up">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">FOIA Requests</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Faster FOIA responses.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Normalize records, accelerate search, and produce defensible responses on time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                  <Link to="/book-a-demo">Book a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl hover:ring-1 ring-white/30">
                  <a href="/resources/Product_Brief-Venio_ECA.pdf" download>
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Download Brief
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] glass-dark rounded-2xl p-8 flex items-center justify-center animate-fade-in-scale">
              <div className="text-white/70 text-center">
                <FileText className="h-24 w-24 mx-auto mb-4 text-secondary" />
                <p className="text-sm">FOIA Processing Visual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSolutionSection
        variant="cards"
        title="FOIA Challenges"
        subtitle="Reduce delays and improve accuracy with consistent workflows"
        cards={[
          {
            icon: FileText,
            title: "Unstructured Records",
            realityLabel: "- THE REALITY",
            reality: "Mixed formats and metadata make requests hard to fulfill.",
            withLabel: "- WITH VENIO",
            withText: "Bulk ingest and normalization streamline intake.",
          },
          {
            icon: Search,
            title: "Slow Search & Review",
            realityLabel: "- THE REALITY",
            reality: "Manual searching increases turnaround time.",
            withLabel: "- WITH VENIO",
            withText: "Advanced search and filters accelerate discovery.",
          },
          {
            icon: Landmark,
            title: "Compliance & Redaction",
            realityLabel: "- THE REALITY",
            reality: "Inconsistent redaction and tracking risk compliance issues.",
            withLabel: "- WITH VENIO",
            withText: "Defensible redaction and audit trails ensure compliance.",
          },
        ]}
      />

      <section className="absolute bottom-0 left-0 right-0 z-10">
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
            ].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[160px] md:min-w-[180px] transition-transform duration-200 hover:scale-110">
                <img src={logo.src} alt={logo.alt} style={{ height: '36px', filter: 'brightness(0) invert(1)' }} className="w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audience" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Who Is It For?</h2>
            <p className="text-lg text-muted-foreground">Choose an industry to see roles and priorities</p>
          </div>
          <Tabs value={industry} onValueChange={setIndustry} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 bg-muted/50 p-2 h-auto mb-10">
              {industries.map((item) => (
                <TabsTrigger key={item.key} value={item.key} className="text-sm md:text-base py-3 data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  <span className="inline-flex items-center gap-2">
                    <item.icon className={`h-5 w-5 ${industry === item.key ? "text-[#3DC47E]" : "text-muted-foreground"}`} />
                    {item.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((item) => (
              <TabsContent key={item.key} value={item.key} className="mt-0">
                <div className="grid lg:grid-cols-3 gap-6">
                  <Card className="rounded-2xl bg-white border border-border/40 shadow-sm lg:col-span-1">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#3DC47E]/10 border border-[#3DC47E]/20 flex items-center justify-center mb-6">
                        <item.icon className="h-7 w-7 text-[#3DC47E]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                      <div className="mt-4">
                        <Link to={industryRoutes[item.key]} className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium">
                          Visit {item.title} page
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="lg:col-span-2 rounded-2xl bg-white border border-border/40 shadow-sm">
                    <div className="p-6 border-b border-border/40 flex items-center justify-between rounded-t-2xl">
                      <div>
                        <h3 className="text-2xl font-semibold">Roles & Priorities</h3>
                        <p className="text-sm text-muted-foreground">Typical roles for {item.title} and their focus areas</p>
                      </div>
                      <div className="hidden md:block text-sm text-muted-foreground">Industry: {item.title}</div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground bg-muted/40 rounded-lg px-3 py-2">Role</div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground bg-muted/40 rounded-lg px-3 py-2">What They Focus On</div>
                        {rolesByIndustry[item.key].map((r, i) => (
                          <div key={i} className="contents">
                            <div className="py-3 border-b border-border/30 font-medium">{r.role}</div>
                            <div className="py-3 border-b border-border/30 text-muted-foreground">{r.care}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <ScrollFeatureAccordion
        title="Venio: The Tool That Keeps FOIA Moving"
        subtitle="Modern FOIA request software designed to speed review, track deadlines, and simplify public records management."
        accentAlways
        features={[
          {
            icon: FileText,
            title: "Centralized FOIA Intake & Tracking",
            description: "Manage every FOIA request, FOI request, and public records request in one secure platform.",
            details: [],
            imagePlaceholder: "Intake & Tracking",
          },
          {
            icon: Search,
            title: "Powerful Search Across All Data Sources",
            description: "Find responsive files faster with advanced indexing in our public records management software.",
            details: [],
            imagePlaceholder: "Search",
          },
          {
            icon: Users,
            title: "Cross-Department Collaboration",
            description: "Route tasks and assign ownership across workspaces for complex public records requests.",
            details: [],
            imagePlaceholder: "Collaboration",
          },
          {
            icon: Layers,
            title: "Scalable for High Volume",
            description: "Process more FOIA and public records requests with automation, no added staff.",
            details: [],
            imagePlaceholder: "Scale",
          },
        ]}
      />

      <DataPointsSection />

      <section id="deployment" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Deployment Options That Fit How You Work</h2>
            <p className="text-lg text-muted-foreground">Choose a model based on control, compliance, and data sovereignty</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cloud, title: "Cloud eDiscovery", desc: "Fast, scalable deployment for matters requiring speed and flexibility across teams." },
              { icon: Server, title: "On‑Premises eDiscovery", desc: "Maximum control for strict governance and regulatory requirements on your infrastructure." },
              { icon: Layers, title: "Hybrid eDiscovery", desc: "Balanced approach: keep sensitive data on‑prem while leveraging cloud agility per matter." },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-[28rem] mx-auto">{item.desc}</p>
                  <Button asChild size="sm" variant="outline" className="rounded-full px-5">
                    <Link to="/book-a-demo">Explore {item.title.split(" ")[0]}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      <TestimonialsSection showLogoTrail={false} />

      <SecuritySection />

      <CTABanner />
      <section id="icons-download" className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Download Icons</h2>
            <p className="text-muted-foreground">Get all icons used on this page as SVG with backgrounds</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={handleDownloadPageIcons} size="lg" className="bg-[#3DC47E] hover:bg-[#33B471] text-white">Download All Icons (SVG)</Button>
            <Button onClick={handleDownloadVisibilityGapIcons} size="lg" className="bg-[#EF4444] hover:bg-[#DC2626] text-white">Download FOIA Gap Icons (SVG)</Button>
            <Button onClick={handleDownloadFoiaFeaturesIcons} size="lg" className="bg-[#3DC47E] hover:bg-[#33B471] text-white">Download FOIA Features Icons (SVG)</Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/icons">Browse Icons Library</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default UseCaseFOIA;
