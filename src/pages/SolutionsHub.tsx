import React, { useEffect, useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/CTABanner";
import {
  Briefcase,
  Building,
  BarChart3,
  Users,
  Landmark,
  Shield,
  Search,
  FileText,
  Brain,
  Server,
  Sparkles,
  ArrowRight,
  Layers,
  Hammer,
  X,
  Target,
  ChevronDown
} from "lucide-react";

type SolutionItem = {
  category: "role" | "industry" | "use-case";
  label: string;
  link: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  chips: string[];
};

const solutions: SolutionItem[] = [
  // Use Cases
  {
    category: "use-case",
    label: "ECA (Early Case Assessment)",
    link: "/solutions/use-cases/eca",
    description: "Analyze data early to assess case viability, reduce volumes, and control costs before review begins.",
    icon: Brain,
    chips: ["Culling", "ECA", "Data Analysis"],
  },
  {
    category: "use-case",
    label: "Legal Hold Management",
    link: "/solutions/use-cases/legal-hold",
    description: "Automate notices, tracking, custodian acknowledgements, and escalations with defensible audit trails.",
    icon: Shield,
    chips: ["Hold", "Compliance", "Auditing"],
  },
  {
    category: "use-case",
    label: "Internal Investigations",
    link: "/solutions/use-cases/investigations",
    description: "Conduct rapid, secure internal data probes to uncover compliance issues, fraud, or HR incidents.",
    icon: Search,
    chips: ["Audit", "Search", "Internal Probes"],
  },
  {
    category: "use-case",
    label: "FOIA Requests",
    link: "/solutions/use-cases/foia",
    description: "Efficiently handle freedom of information and public records requests with secure redaction and tracking.",
    icon: FileText,
    chips: ["FOIA", "Government", "Redaction"],
  },

  // Industries
  {
    category: "industry",
    label: "For Law Firms",
    link: "/law-firm-solutions",
    description: "Deliver end-to-end, high-performance eDiscovery and review solutions tailored for modern legal practices.",
    icon: Briefcase,
    chips: ["Firm Practice", "Litigation", "Client Review"],
  },
  {
    category: "industry",
    label: "For Corporations",
    link: "/for-corporations",
    description: "Bring eDiscovery in-house to drastically cut litigation spend, secure data, and automate legal holds.",
    icon: Building,
    chips: ["In-house", "Corporate Spend", "Governance"],
  },
  {
    category: "industry",
    label: "For Financial Services",
    link: "/for-financial-services",
    description: "Regulatory-ready, highly secure discovery and analysis built to handle complex financial compliance.",
    icon: BarChart3,
    chips: ["FinTech", "Compliance", "Securities"],
  },
  {
    category: "industry",
    label: "For Service Providers",
    link: "/for-service-providers",
    description: "Scalable multi-tenant eDiscovery hosting platforms designed for service partners and litigation support experts.",
    icon: Users,
    chips: ["Multi-tenant", "SaaS", "Partner Hosting"],
  },
  {
    category: "industry",
    label: "For Government & Public Sector",
    link: "/for-government",
    description: "FedRAMP-oriented, secure eDiscovery and FOIA processing built for public sector agencies.",
    icon: Landmark,
    chips: ["FedRAMP", "Agencies", "Public Records"],
  },
  {
    category: "industry",
    label: "For Litigation Support Teams",
    link: "/for-litigation-support",
    description: "Technical toolsets and advanced processing engines to support massive litigation databases.",
    icon: Hammer,
    chips: ["Data Prep", "Ingestion", "Bates Stamping"],
  },
  {
    category: "industry",
    label: "For Investigations & Compliance",
    link: "/for-investigations-compliance",
    description: "Proactive compliance monitoring, internal auditing, and risk management systems.",
    icon: Shield,
    chips: ["Compliance", "Risk Management", "Monitoring"],
  },

  // Roles
  {
    category: "role",
    label: "Legal Counsel",
    link: "/role-legal-counsel",
    description: "Strategic oversight, metrics dashboards, and budgeting controls designed for chief legal officers.",
    icon: FileText,
    chips: ["CLO", "Strategy", "Oversight"],
  },
  {
    category: "role",
    label: "eDiscovery Manager",
    link: "/role-ediscovery-manager",
    description: "Seamless case management, upload wizards, automated workflows, and simple drag-and-drop operations.",
    icon: Users,
    chips: ["Case Mgmt", "Ingestion", "Workflows"],
  },
  {
    category: "role",
    label: "eDiscovery Attorneys",
    link: "/role-ediscovery-attorneys",
    description: "Blazing fast doc review screens, active learning assistance, and intuitive tagging panels.",
    icon: Sparkles,
    chips: ["Doc Review", "TAR", "CAL assisted"],
  },
  {
    category: "role",
    label: "VP of eDiscovery Ops",
    link: "/role-vp-ediscovery-ops",
    description: "Cross-case operational reports, throughput tracking, resource allocation, and billing insights.",
    icon: Layers,
    chips: ["Metrics", "Throughput", "Billing"],
  },
  {
    category: "role",
    label: "CTO of eDiscovery Ops",
    link: "/role-cto-ediscovery-ops",
    description: "Secure, scalable single-database infrastructures with cloud, hybrid, or on-premise configurations.",
    icon: Server,
    chips: ["Hosting", "Database", "Infra Security"],
  },
];

const SolutionsHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "role" | "industry" | "use-case">("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof document !== "undefined") {
      document.title = "Solutions Hub - Venio Systems";
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      const metaContent = "Discover Venio Systems eDiscovery solutions. Browse custom legal frameworks, playbooks, and systems categorized by industry, role, and use cases.";
      if (meta) {
        meta.setAttribute("content", metaContent);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", metaContent);
        document.head.appendChild(meta);
      }
      
      const scriptId = "ld-json-solutions-hub";
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = scriptId;
      ld.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Solutions Hub",
        "url": window.location.origin + "/solutions",
        "description": metaContent,
      });
      document.head.appendChild(ld);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", window.location.origin + "/solutions");
    }
  }, []);

  const filteredSolutions = useMemo(() => {
    return solutions.filter((sol) => {
      const matchesTab = activeTab === "all" || sol.category === activeTab;
      const matchesSearch =
        sol.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.chips.some((chip) => chip.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const getScrollingItems = (category: "role" | "industry" | "use-case") => {
    const list = solutions.filter((sol) => sol.category === category);
    if (list.length === 0) return [];
    // Repeat items to ensure smooth loop without snapping gaps on wide viewports
    const repeats = Math.ceil(16 / list.length);
    return Array(repeats).fill(list).flat();
  };

  const getTheme = (category: "role" | "industry" | "use-case") => {
    switch (category) {
      case "use-case":
        return {
          glow: "from-[#10b981]/20 to-[#10b981]/2",
          badge: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20",
          hoverBorder: "hover:border-[#10b981]/40",
          iconColor: "text-[#10b981]",
          iconBg: "bg-[#10b981]/5 border-[#10b981]/15",
          arrowColor: "text-[#10b981]",
          dotColor: "bg-[#10b981]",
          textColor: "group-hover:text-[#10b981]",
          btnBg: "bg-[#10b981] hover:bg-[#0da170]",
          expandedBorder: "border-[#10b981]/20",
          accentColor: "#10b981"
        };
      case "industry":
        return {
          glow: "from-[#00a2ff]/20 to-[#00a2ff]/2",
          badge: "bg-[#00a2ff]/10 text-[#00a2ff] border-[#00a2ff]/20",
          hoverBorder: "hover:border-[#00a2ff]/40",
          iconColor: "text-[#00a2ff]",
          iconBg: "bg-[#00a2ff]/5 border-[#00a2ff]/15",
          arrowColor: "text-[#00a2ff]",
          dotColor: "bg-[#00a2ff]",
          textColor: "group-hover:text-[#00a2ff]",
          btnBg: "bg-[#00a2ff] hover:bg-[#008ce0]",
          expandedBorder: "border-[#00a2ff]/20",
          accentColor: "#00a2ff"
        };
      case "role":
        return {
          glow: "from-[#8b5cf6]/20 to-[#8b5cf6]/2",
          badge: "bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/20",
          hoverBorder: "hover:border-[#8b5cf6]/40",
          iconColor: "text-[#8b5cf6]",
          iconBg: "bg-[#8b5cf6]/5 border-[#8b5cf6]/15",
          arrowColor: "text-[#8b5cf6]",
          dotColor: "bg-[#8b5cf6]",
          textColor: "group-hover:text-[#8b5cf6]",
          btnBg: "bg-[#8b5cf6] hover:bg-[#7c4df2]",
          expandedBorder: "border-[#8b5cf6]/20",
          accentColor: "#8b5cf6"
        };
    }
  };

  // SolutionCard helper sub-component
  const SolutionCard = ({ sol, theme }: { sol: SolutionItem; theme: any }) => {
    const Icon = sol.icon;
    return (
      <Link
        to={sol.link}
        className={`group relative bg-gradient-to-br from-[#0c2149]/40 to-white/5 rounded-2xl p-6 overflow-hidden hover:scale-[1.02] ${theme.hoverBorder} border border-white/5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md flex flex-col justify-between w-[280px] md:w-[320px] h-[300px] shrink-0 mx-3`}
      >
        {/* Dynamic Ambient Blur Glow behind card */}
        <div
          className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${theme.glow} blur-3xl opacity-40 group-hover:opacity-85 transition-all duration-300 pointer-events-none`}
        />

        <div className="relative z-10">
          {/* Top Icon & Category Row */}
          <div className="flex items-center justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${theme.iconBg} shadow-md`}>
              <Icon className={`w-5 h-5 ${theme.iconColor}`} />
            </div>
            <span className={`text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${theme.badge}`}>
              {sol.category === "use-case" ? "Use Case" : `By ${sol.category}`}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 tracking-wide group-hover:text-accent transition-colors line-clamp-1">
            {sol.label}
          </h3>
          <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed mb-4 line-clamp-3">
            {sol.description}
          </p>
        </div>

        {/* Footer tags & CTA */}
        <div className="pt-4 border-t border-white/5 relative z-10 mt-auto">
          <div className="flex flex-wrap gap-1 mb-3 overflow-hidden h-[18px]">
            {sol.chips.slice(0, 3).map((chip) => (
              <span
                key={chip}
                className="text-[8px] font-medium tracking-wider uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40"
              >
                {chip}
              </span>
            ))}
          </div>
          <span className={`inline-flex items-center gap-1 text-xs font-semibold ${theme.arrowColor} group-hover:gap-2 transition-all`}>
            Explore Solution
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    );
  };

  // LaneTrack helper sub-component for horizontal auto-scrolling
  const LaneTrack = ({
    category,
    title,
    icon: SectionIcon,
    direction = "left",
    speed = "40s"
  }: {
    category: "role" | "industry" | "use-case";
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    direction?: "left" | "right";
    speed?: string;
  }) => {
    const trackItems = getScrollingItems(category);
    if (trackItems.length === 0) return null;

    const marqueeClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
      <div className="space-y-4 lane-container overflow-hidden py-4">
        {/* Track Title Panel */}
        <div className="flex items-center justify-between px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <SectionIcon className="w-5 h-5 text-accent" />
            <h2 className="font-display text-xl font-bold text-white tracking-wide">
              {title}
            </h2>
            <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
              {solutions.filter(s => s.category === category).length} Frameworks
            </span>
          </div>
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/30 hidden sm:inline-block animate-pulse">
            Hover to Pause & Explore
          </span>
        </div>

        {/* Scrolling Lane Wrapper */}
        <div className="relative w-full flex items-center overflow-x-hidden py-6 select-none">
          {/* Subtle fade overlay on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030b1c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030b1c] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track container */}
          <div
            className={marqueeClass}
            style={{ "--speed": speed } as React.CSSProperties}
          >
            {trackItems.map((sol, index) => {
              const theme = getTheme(sol.category);
              return <SolutionCard key={`${sol.link}-${index}`} sol={sol} theme={theme} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030b1c] via-[#09172f] to-[#0c1f40] relative overflow-hidden pb-16">
      <Navbar />

      {/* Decorative Aurora background blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <main className="relative z-10 pt-32 xl:pt-40">
        {/* Header Hero Section */}
        <section className="container mx-auto px-6 max-w-6xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/80">Tailored eDiscovery Frameworks</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Explore eDiscovery Solutions For Every Scenario
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Find the right tools, workflows, and deployment setups optimized for your industry, organizational role, or specific case demands.
          </p>
        </section>

        {/* Filters Panel */}
        <section className="container mx-auto px-6 max-w-4xl mb-16 space-y-6">
          {/* Glassmorphic Search Bar */}
          <div className="relative shadow-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/45" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search eDiscovery solutions"
              placeholder="Search solutions by keyword, chip, or tag..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder:text-white/45 outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all backdrop-blur-md shadow-inner text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap items-center bg-white/5 border border-white/10 text-white/80 backdrop-blur-md shadow-lg p-1.5 rounded-xl gap-1">
              {[
                { id: "all", label: "All Solutions" },
                { id: "role", label: "By Role" },
                { id: "industry", label: "By Industry" },
                { id: "use-case", label: "Use Cases" }
              ].map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-accent text-white shadow-md"
                        : "hover:bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Self-contained CSS Marquee Animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            animation: marquee-left var(--speed, 40s) linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: marquee-right var(--speed, 40s) linear infinite;
          }
          .lane-container:hover .animate-marquee-left,
          .lane-container:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        `}} />

        {/* Dynamic Solutions Section */}
        <section className="mb-24">
          {searchQuery.trim().length > 0 ? (
            /* Search Mode: Render a clean static grid of filtered results */
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex items-center gap-2 mb-8">
                <Target className="w-5 h-5 text-accent" />
                <h2 className="font-display text-xl font-bold text-white tracking-wide">
                  Search Results
                </h2>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                  {filteredSolutions.length} Found
                </span>
              </div>

              {filteredSolutions.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {filteredSolutions.map((sol) => {
                    const theme = getTheme(sol.category);
                    return <SolutionCard key={sol.link} sol={sol} theme={theme} />;
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
                  <Target className="w-12 h-12 text-white/35 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">No Solutions Found</h3>
                  <p className="text-sm text-white/50 font-light mb-6">
                    No solutions matched your search queries. Please try another query or clear search.
                  </p>
                  <Button
                    onClick={() => setSearchQuery("")}
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          ) : (
            /* Standard Mode: Render Horizontal Infinite Marquee lanes */
            <div className="space-y-12 animate-fade-in">
              {(activeTab === "all" || activeTab === "use-case") && (
                <LaneTrack
                  category="use-case"
                  title="Use Cases"
                  icon={Brain}
                  direction="left"
                  speed="35s"
                />
              )}
              {(activeTab === "all" || activeTab === "industry") && (
                <LaneTrack
                  category="industry"
                  title="By Industry"
                  icon={Building}
                  direction="right"
                  speed="45s"
                />
              )}
              {(activeTab === "all" || activeTab === "role") && (
                <LaneTrack
                  category="role"
                  title="By Role"
                  icon={Users}
                  direction="left"
                  speed="40s"
                />
              )}
            </div>
          )}
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsHub;
