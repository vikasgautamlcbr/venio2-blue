import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, BarChart3, FileCheck, Shield, Gauge, Search, Workflow, ClipboardCheck, ClipboardList, LayoutDashboard, Fingerprint, Lock, FileText, Cloud, TrendingUp, ShieldCheck, FileSearch, Download, Link as LinkIcon, Eye, Zap, Database, Users, Unlink, Anchor, BadgeDollarSign, Layers, GitFork, CircleDollarSign, Building, Building2, Landmark, ServerCog, FileWarning, TrendingDown, Timer, Puzzle, EyeOff, Briefcase, GitBranch, AlertTriangle, Clock, LightbulbOff, SearchX, UserCheck, Key, Award } from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { Link } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";

type IconItem = {
  name: string;
  desc: string;
  Icon: LucideIcon;
};

const ScalesIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="18" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="6" y1="8" x2="18" y2="8" />
    <line x1="8" y1="8" x2="8" y2="12" />
    <line x1="16" y1="8" x2="16" y2="12" />
    <path d="M6.5 12 Q8 14 9.5 12" />
    <path d="M14.5 12 Q16 14 17.5 12" />
  </svg>
)) as unknown as LucideIcon;

const ChoiceArrowsIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <line x1="12" y1="8" x2="12" y2="16" />
    <circle cx="12" cy="12" r="1" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <polyline points="8 9.5 5.5 12 8 14.5" />
    <polyline points="16 9.5 18.5 12 16 14.5" />
  </svg>
)) as unknown as LucideIcon;

const ChoiceArrowsDecisionIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <line x1="12" y1="8" x2="12" y2="16" />
    <circle cx="12" cy="12" r="1" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <polyline points="8 9.5 5.5 12 8 14.5" />
    <polyline points="16 9.5 18.5 12 16 14.5" />
    <line x1="4.8" y1="10.5" x2="6.4" y2="12.1" />
    <line x1="6.4" y1="10.5" x2="4.8" y2="12.1" />
    <polyline points="17 12 18.2 13.2 20.2 11.2" />
  </svg>
)) as unknown as LucideIcon;

const BranchChoiceIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <path d="M12 18 L12 10" />
    <path d="M12 12 Q10.2 10.8 8 8.5" />
    <path d="M12 12 Q13.8 10.8 16 8.5" />
    <polyline points="10 6 12 4 14 6" />
    <polyline points="7 6.5 8.6 8.2 9.2 6.2" />
    <polyline points="14.8 6.2 15.4 8.2 17 6.5" />
  </svg>
)) as unknown as LucideIcon;

const DocContextDecisionIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <rect x="4.5" y="4.5" width="9" height="14" rx="2" />
    <line x1="6.5" y1="8" x2="11" y2="8" />
    <line x1="6.5" y1="10.5" x2="9.5" y2="10.5" />
    <circle cx="6.5" cy="8" r="0.7" />
    <line x1="16.5" y1="6.5" x2="16.5" y2="17.5" />
    <line x1="14.5" y1="9.5" x2="18.5" y2="9.5" />
    <line x1="15.5" y1="9.5" x2="15.5" y2="12" />
    <line x1="17.5" y1="9.5" x2="17.5" y2="12" />
    <path d="M14.6 12 Q15.5 13.6 16.4 12" />
    <path d="M16.6 12 Q17.5 13.6 18.4 12" />
  </svg>
)) as unknown as LucideIcon;

const YesNoIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <rect x="5" y="4" width="10" height="14" rx="2" />
    <line x1="6" y1="7" x2="12" y2="7" />
    <line x1="6" y1="9" x2="10" y2="9" />
    <line x1="6" y1="12" x2="8" y2="14" />
    <line x1="8" y1="12" x2="6" y2="14" />
    <polyline points="11 13 12 14 14 12" />
  </svg>
)) as unknown as LucideIcon;

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
  {
    name: "Faster Strategic Decision-Making",
    desc: "Use early analytics to guide decisions and reduce uncertainty.",
    Icon: TrendingUp,
  },
  {
    name: "Direct Visibility Into Discovery Progress",
    desc: "Track workflow status and bottlenecks in real time.",
    Icon: LayoutDashboard,
  },
  {
    name: "Stronger Defensibility and Risk Control",
    desc: "Built-in safeguards and controls strengthen defensibility.",
    Icon: ShieldCheck,
  },
  {
    name: "Simplified Privilege Management",
    desc: "Streamline access and controls to protect sensitive data.",
    Icon: Lock,
  },
  {
    name: "Consistent Review Quality Across Teams",
    desc: "Standardized workflows help ensure consistent outputs.",
    Icon: Award,
  },
  {
    name: "Scalable Performance for Simultaneous Projects",
    desc: "Maintain throughput across multiple concurrent matters.",
    Icon: Gauge,
  },
  {
    name: "Clear Audit Trails for Defensibility",
    desc: "Capture actions and decisions for complete traceability.",
    Icon: ClipboardList,
  },
  {
    name: "Secure Collaboration Across Teams",
    desc: "Enable teamwork while protecting sensitive information.",
    Icon: Users,
  },
  {
    name: "Reduce Privilege Risk with Consistent Controls",
    desc: "Apply uniform controls to minimize privilege-related exposure.",
    Icon: Key,
  },
  {
    name: "Stay Defensible with Full Audit Trails",
    desc: "Maintain reliable, court-ready documentation of every step.",
    Icon: ClipboardList,
  },
  {
    name: "Gain Real-Time Visibility into Review Progress",
    desc: "See review activity and progress as it happens.",
    Icon: Eye,
  },
  {
    name: "Make Better Privilege Decisions with Context",
    desc: "Leverage document context and metadata to judge privilege.",
    Icon: FileCheck,
  },
];

const UpDownGraphIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <path d="M4 19H20" />
    <path d="M4 19V5" />
    <polyline points="5 15 8 10 11 13 14 8 19 12" />
  </svg>
)) as unknown as LucideIcon;

 

const MagnifyClockIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <circle cx="10" cy="10" r="5" />
    <line x1="10" y1="10" x2="10" y2="7" />
    <line x1="10" y1="10" x2="12.5" y2="10" />
    <line x1="14.5" y1="14.5" x2="20" y2="20" />
  </svg>
)) as unknown as LucideIcon;

const ClockOverdueIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <circle cx="10" cy="10" r="5" />
    <line x1="10" y1="10" x2="10" y2="7" />
    <line x1="10" y1="10" x2="12.5" y2="10" />
    <path d="M17 7 L20 7 L18.5 9.5 Z" />
  </svg>
)) as unknown as LucideIcon;

const HourglassMoreIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <line x1="6" y1="6" x2="18" y2="6" />
    <line x1="6" y1="18" x2="18" y2="18" />
    <path d="M6 6 C11 9 11 15 6 18" />
    <path d="M18 6 C13 9 13 15 18 18" />
    <line x1="8.5" y1="8" x2="15.5" y2="8" />
    <line x1="9.5" y1="9" x2="14.5" y2="9" />
    <circle cx="12" cy="12.6" r="0.4" />
    <path d="M11.2 16 Q12 15.6 12.8 16" />
  </svg>
)) as unknown as LucideIcon;

const ClockDelayIcon = (({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    color={color}
    className={className}
    {...props}
  >
    <circle cx="10" cy="10" r="5" />
    <line x1="10" y1="10" x2="10" y2="7" />
    <line x1="10" y1="10" x2="12.5" y2="10" />
    <line x1="14" y1="10" x2="20" y2="10" />
    <polyline points="18 8 20 10 18 12" />
  </svg>
)) as unknown as LucideIcon;

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
  { name: "Fragmented Tools and Manual Tracking", Icon: Unlink },
  { name: "Limited Early Case Insight", Icon: SearchX },
  { name: "Heavy Reliance on External Vendors", Icon: Briefcase },
  { name: "Limited Real-Time Visibility", Icon: EyeOff },
  { name: "Tool Fragmentation Across Stages", Icon: Unlink },
  { name: "Reviewer Coordination & Quality Gaps", Icon: AlertTriangle },
  { name: "Late Insight into Key Evidence", Icon: Timer },
  { name: "Inconsistent Data Review Quality", Icon: UpDownGraphIcon },
  { name: "Unpredictable Review Costs", Icon: BadgeDollarSign },
];

const ecaPageIcons: { name: string; Icon: LucideIcon; variant: "accent" | "destructive" }[] = [
  { name: "ECA Visual", Icon: FileText, variant: "accent" },
  { name: "Law Firms", Icon: Briefcase, variant: "accent" },
  { name: "Corporations", Icon: Building, variant: "accent" },
  { name: "Service Providers", Icon: Users, variant: "accent" },
  { name: "Government", Icon: Landmark, variant: "accent" },
  { name: "Cloud eDiscovery", Icon: Cloud, variant: "accent" },
  { name: "On-Premises eDiscovery", Icon: Server, variant: "accent" },
  { name: "Hybrid eDiscovery", Icon: Layers, variant: "accent" },
  { name: "Workflow", Icon: Workflow, variant: "destructive" },
  { name: "Analytics", Icon: BarChart3, variant: "accent" },
  { name: "Security", Icon: Shield, variant: "accent" },
  { name: "Unpredictable Discovery Costs", Icon: CircleDollarSign, variant: "destructive" },
  { name: "Heavy Vendor Dependency", Icon: Anchor, variant: "destructive" },
];

const ecaIndustryIcons: { name: string; Icon: LucideIcon }[] = [
  { name: "Law Firms", Icon: Briefcase },
  { name: "Corporations", Icon: Building },
  { name: "Service Providers", Icon: Users },
  { name: "Government", Icon: Landmark },
];

const Icons = () => {
  const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const palette = { accent: "#3DC47E", destructive: "#EF4444" };
  const buildTintedSvg = (IconComp: LucideIcon, hex: string) => {
    const innerSvg = renderToStaticMarkup(<IconComp size={32} color={hex} strokeWidth={2} />);
    const sanitizedInner = innerSvg
      .replace(/stroke="currentColor"/g, `stroke="${hex}"`)
      .replace('<svg ', '<svg x="16" y="16" ');
    const outer =
      `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
      `<rect x="0.5" y="0.5" width="63" height="63" rx="12" fill="${hex}" fill-opacity="0.12"/>` +
      `<rect x="1" y="1" width="62" height="62" rx="12" fill="none" stroke="${hex}" stroke-opacity="0.25" stroke-width="2"/>` +
      `${sanitizedInner}` +
      `</svg>`;
    return outer;
  };

  const buildIconOnlySvg = (IconComp: LucideIcon, hex: string) => {
    const innerSvg = renderToStaticMarkup(<IconComp size={64} color={hex} strokeWidth={2} />);
    return innerSvg.replace(/stroke="currentColor"/g, `stroke="${hex}"`);
  };

  const buildSvg = (IconComp: LucideIcon) => {
    const rawInner = renderToStaticMarkup(
      <IconComp size={32} color="#ffffff" strokeWidth={2} />
    );
    const sanitizedInner = rawInner
      .replace(/stroke="currentColor"/g, 'stroke="#ffffff"')
      .replace('<svg ', '<svg x="16" y="16" ');
    const outer =
      `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
      `<rect width="64" height="64" fill="#3DC47E" rx="12"/>` +
      `${sanitizedInner}` +
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

  const buildNavySvg = (IconComp: LucideIcon) => {
    const innerSvg = renderToStaticMarkup(
      <IconComp size={64} color="#0b1c3f" strokeWidth={2} />
    );
    return innerSvg;
  };

  // tinted pill SVG builder used for ECA page icons (accent or destructive)
  // see UseCaseECA page for the same palette

  const handleDownloadAll = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();

    requestedIcons.forEach((item) => {
      const svg = buildSvg(item.Icon);
      const name = `${slugify(item.name)}.svg`;
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<item.Icon size={64} color="#ffffff" strokeWidth={2} />);
      zip.file(name, finalSvg);
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
      const name = `${slugify(item.name)}.svg`;
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<item.Icon size={64} color="#0b1c3f" strokeWidth={2} />);
      zip.file(name, finalSvg);
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

  const handleDownloadEcaPage = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    ecaPageIcons.forEach((item) => {
      const hex = palette[item.variant];
      const svg = buildTintedSvg(item.Icon, hex);
      const name = `${slugify(item.name)}.svg`;
      const finalSvg = isValidSvg(svg) ? svg : renderToStaticMarkup(<item.Icon size={64} color={hex} strokeWidth={2} />);
      zip.file(name, finalSvg);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-eca-page-icons.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  const handleDownloadEcaIndustryNav = async () => {
    const { default: JSZip } = await import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm");
    const zip = new JSZip();
    const neutralHex = "#64748B";
    const accentHex = palette.accent;
    ecaIndustryIcons.forEach(({ name, Icon }) => {
      const neutralSvg = buildIconOnlySvg(Icon, neutralHex);
      const accentSvg = buildIconOnlySvg(Icon, accentHex);
      zip.file(`${slugify(name)}-neutral.svg`, isValidSvg(neutralSvg) ? neutralSvg : renderToStaticMarkup(<Icon size={64} color={neutralHex} strokeWidth={2} />));
      zip.file(`${slugify(name)}-accent.svg`, isValidSvg(accentSvg) ? accentSvg : renderToStaticMarkup(<Icon size={64} color={accentHex} strokeWidth={2} />));
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "venio-eca-industry-nav-icons.zip";
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

      <section id="eca-icons" className="py-14 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">ECA Page Icons</h2>
            <p className="text-muted-foreground">Icons used on the ECA page with tinted pill backgrounds (same as page)</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleDownloadEcaPage} className="bg-[#3DC47E] hover:bg-[#33B471] text-white gap-2">
                <Download className="w-4 h-4" />
                Download ECA Page Icons
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ecaPageIcons.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl ${item.variant === "destructive" ? "bg-destructive/10 border border-destructive/20" : "bg-accent/10 border border-accent/20"} flex items-center justify-center`}>
                      <item.Icon className={`w-10 h-10 ${item.variant === "destructive" ? "text-destructive" : "text-accent"}`} />
                    </div>
                    <div className="flex-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="eca-industry-icons" className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">ECA Industry Nav Icons</h2>
            <p className="text-muted-foreground">Icons used in the industry selector (neutral and accent states)</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleDownloadEcaIndustryNav} variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Industry Nav Icons
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-muted/50 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ecaIndustryIcons.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted/50">
                    <item.Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-foreground shadow-sm">
                    <item.Icon className="h-5 w-5 text-secondary" />
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
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
