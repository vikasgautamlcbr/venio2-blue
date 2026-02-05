import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, BarChart3, FileCheck, Shield, Gauge, Search, Workflow, ClipboardCheck, LayoutDashboard, Fingerprint, Lock, FileText, Cloud, TrendingUp, ShieldCheck, FileSearch, Download, Link as LinkIcon, Eye, Zap, Database, Users, Unlink, Anchor, BadgeDollarSign, Layers, GitFork, CircleDollarSign, Building2, ServerCog, FileWarning, TrendingDown, Timer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";

type IconItem = {
  name: string;
  desc: string;
  Icon: LucideIcon;
};

const requestedIcons: IconItem[] = [
  {
    name: "Matter-Scale Data Processing",
    desc: "Process large volumes of data quickly without disrupting active cases or timelines.",
    Icon: Database,
  },
  {
    name: "Early Case Analytics",
    desc: "Surface key documents, patterns, and risks early to guide strategy and reduce review scope.",
    Icon: BarChart3,
  },
  {
    name: "Defensible Court-Ready Production",
    desc: "Produce data accurately and consistently, with full audit trails and metadata integrity.",
    Icon: FileCheck,
  },
  {
    name: "Granular Role-Based Security",
    desc: "Restrict access by role, matter, or client to protect sensitive information.",
    Icon: Shield,
  },
  {
    name: "High-speed enterprise-scale processing",
    desc: "Handle multi-terabyte datasets with predictable performance.",
    Icon: Gauge,
  },
  {
    name: "Advanced analytics for early insight",
    desc: "Surface key data early to guide decisions and reduce review scope.",
    Icon: Search,
  },
  {
    name: "Intuitive review workflows for legal and compliance teams",
    desc: "Enable cross-functional contributors to work without extensive training.",
    Icon: Workflow,
  },
  {
    name: "Defensible, audit-ready productions",
    desc: "Maintain chain of custody, metadata fidelity, and reporting continuity.",
    Icon: ClipboardCheck,
  },
  {
    name: "Centralized Visibility",
    desc: "Dashboards give real-time insight into matter progress, bottlenecks, and risks.",
    Icon: Eye,
  },
  {
    name: "Scalable performance for heavy workloads",
    desc: "Rapid processing and high-volume support across concurrent matters and clients.",
    Icon: TrendingUp,
  },
  {
    name: "Defensible Productions",
    desc: "Maintain full audit trails, metadata integrity, and accurate, court-ready outputs.",
    Icon: FileCheck,
  },
  {
    name: "Role-Based Security",
    desc: "Granular permissions protect client data in multi-tenant environments.",
    Icon: Lock,
  },
  {
    name: "Defensible Audit Trails & Chain of Custody",
    desc: "Track every action and data change for investigations and court scrutiny.",
    Icon: LinkIcon,
  },
  {
    name: "Advanced Security & Role-Based Access",
    desc: "Encryption and granular permissions protect sensitive or classified information.",
    Icon: ShieldCheck,
  },
  {
    name: "FOIA & Public Records Readiness",
    desc: "Fast search and redaction workflows for defensible public information responses.",
    Icon: FileSearch,
  },
  {
    name: "Scalable Infrastructure for Surge Events",
    desc: "Handle sudden data spikes during investigations or audits without slowdowns.",
    Icon: Zap,
  },
];

const moreIcons: { name: string; Icon: LucideIcon }[] = [
  { name: "Cloud eDiscovery", Icon: Cloud },
  { name: "On-premises eDiscovery", Icon: Server },
  { name: "Hybrid eDiscovery", Icon: Layers },
  { name: "Fragmented eDiscovery Workflows", Icon: Unlink },
  { name: "Heavy Vendor Dependency", Icon: Anchor },
  { name: "Unpredictable Discovery Costs", Icon: BadgeDollarSign },
  { name: "Siloed workflows", Icon: GitFork },
  { name: "Unpredictable discovery costs", Icon: CircleDollarSign },
  { name: "Rigid, corporate-first platforms", Icon: Building2 },
  { name: "Difficulty scaling operations", Icon: ServerCog },
  { name: "Inconsistent deliverables", Icon: FileWarning },
  { name: "Cost and margin pressure", Icon: TrendingDown },
  { name: "Strict Compliance", Icon: ShieldCheck },
  { name: "Data Security", Icon: Lock },
  { name: "Tight Timelines", Icon: Timer },
];

const Icons = () => {
  const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const buildSvg = (IconComp: LucideIcon) => {
    let innerSvg = renderToStaticMarkup(
      <IconComp size={32} color="#ffffff" strokeWidth={2} />
    );
    innerSvg = innerSvg.replace(/stroke="currentColor"/, 'stroke="#ffffff"');
    const positionedSvg = innerSvg.replace("<svg", '<svg x="16" y="16"');
    const full =
      `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
      `<rect width="64" height="64" fill="#3DC47E" rx="12"/>` +
      `${positionedSvg}` +
      `</svg>`;
    return full;
  };

  const buildNavySvg = (IconComp: LucideIcon) => {
    const innerSvg = renderToStaticMarkup(
      <IconComp size={64} color="#0b1c3f" strokeWidth={2} />
    );
    return innerSvg;
  };

  const handleDownloadAll = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();

    requestedIcons.forEach((item) => {
      const svg = buildSvg(item.Icon);
      zip.file(`${slugify(item.name)}.svg`, svg);
    });

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-icons.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  const handleDownloadMore = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();

    moreIcons.forEach((item) => {
      const svg = buildNavySvg(item.Icon);
      zip.file(`${slugify(item.name)}.svg`, svg);
    });

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-more-icons.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-[35vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
        <div className="container mx-auto text-center relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Icons Library</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Browse and download the SVG icons. Previews include consistent variants to maintain design uniformity.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
              <Link to="/resources">
                Resources Library
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">All Icons</h2>
            <p className="text-muted-foreground">Requested capability icons with titles and short descriptions</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleDownloadAll} className="bg-[#3DC47E] hover:bg-[#33B471] text-white gap-2">
                <Download className="w-4 h-4" />
                Download All Icons
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {requestedIcons.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#3DC47E] flex items-center justify-center">
                      <item.Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">More Icons</h2>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleDownloadMore} variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download More Icons (ZIP)
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {moreIcons.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <item.Icon className="w-10 h-10 text-[#0b1c3f]" />
                    <div className="flex-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Icons;
