import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Cloud, Server, Workflow, Shield, Database, Network, Cog, Lock, CheckCircle2, ArrowRight, FileText, TrendingDown, Zap, Bell, Sparkles, Scale, Building2, Landmark, ShieldCheck, Globe2, LockKeyhole, LifeBuoy, Users, Rocket, Brain, BarChart3, Monitor, Gauge, DollarSign } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTABanner from "@/components/CTABanner";
import { useState } from "react";

const typeMap: Record<string, { label: string; Icon: React.ComponentType<{ className?: string }> }> = {
  cloud: { label: "On Cloud", Icon: Cloud },
  "on-premises": { label: "On-premises", Icon: Server },
  hybrid: { label: "Hybrid Deployment", Icon: Workflow },
};

type SectionKey = "end-to-end" | "automation" | "exports";

const DeploymentType = () => {
  const params = useParams();
  const key = (params.type || "").toLowerCase();
  const config = typeMap[key] || { label: params.type || "Deployment", Icon: Server };
  const Icon = config.Icon;
  const title = key === "on-premises" ? "On-premises Deployment" : key === "cloud" ? "Cloud Deployment" : key === "hybrid" ? "Hybrid Deployment" : config.label;
  const description =
    key === "on-premises"
      ? "Maintain infrastructure control, meet regulatory mandates, and operate without external dependency, all on Venio’s unified platform."
      : key === "cloud"
      ? "Launch cases instantly, scale processing on demand, and collaborate globally on Venio’s secure, fully managed cloud platform."
      : key === "hybrid"
      ? "Hybrid deployment model combining on-premises control with cloud scalability."
      : "Deployment options overview for Venio Systems.";
  const benefitsSubtitle =
    key === "on-premises"
      ? "Why teams choose on‑premises with Venio"
      : key === "cloud"
      ? "Why teams choose cloud deployment with Venio"
      : key === "hybrid"
      ? "Why teams choose hybrid deployment with Venio"
      : "Why teams choose Venio";
  const heroTitle =
    key === "cloud"
      ? "The Cloud Platform for Enterprise Discovery"
      : key === "on-premises"
      ? "Enterprise eDiscovery - Inside Your Firewall"
      : key === "hybrid"
      ? "Hybrid eDiscovery - Control and Scale in One Platform"
      : title;
  const heroDescription =
    key === "on-premises"
      ? "Run enterprise-grade eDiscovery entirely inside your environment, with dedicated performance and complete control over sensitive data."
      : key === "hybrid"
      ? "Run sensitive matters on‑prem while scaling high‑volume discovery to the cloud, all within Venio’s unified eDiscovery environment."
      : description;
  const isModernLayout = key === "cloud" || key === "on-premises" || key === "hybrid";

  if (typeof document !== "undefined") {
    document.title = `${title} - Venio Systems`;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", description);
      document.head.appendChild(meta);
    }
    const scriptId = "ld-json-deployment";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "url": `${window.location.origin}/deployment/${key || "on-premises"}`,
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/deployment/${key || "on-premises"}`);
  }

  const [activeSection, setActiveSection] = useState<SectionKey | undefined>("end-to-end");
  const previewLabel =
    activeSection === "end-to-end"
      ? "End‑to‑End Preview"
      : activeSection === "automation"
      ? "Automation Preview"
      : activeSection === "exports"
      ? "Exports Preview"
      : "On‑prem Platform Preview";
  const PreviewIcon = activeSection === "automation" ? Bell : activeSection === "exports" ? FileText : Database;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
          <div className="absolute inset-0">
            <div className="absolute bottom-28 right-10 w-[420px] h-[420px] bg-accent/20 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-16 right-24 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/70" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{heroTitle}</h1>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed mx-auto">
              {heroDescription}
            </p>
            {key === "cloud" ? (
              <p className="text-white/85 text-base max-w-3xl leading-relaxed mx-auto mt-4">
                <span className="border-b-2 border-white/50 pb-1">Explore Venio Cloud</span>
              </p>
            ) : key === "hybrid" ? (
              <p className="text-white/85 text-base max-w-3xl leading-relaxed mx-auto mt-4">
                <span className="border-b-2 border-white/50 pb-1">Explore Venio On‑Demand</span>
              </p>
            ) : null}
            <div className="mt-8 flex gap-3 justify-center">
              {isModernLayout ? (
                <>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Link to={key === "cloud" ? "/book-a-demo" : "#what-powers"}>
                      {key === "cloud" ? "Book a Cloud Demo" : key === "hybrid" ? "Explore Venio On‑Demand" : "Explore Venio On‑Prem"}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/20 px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Link to="#what-powers">See it in Action</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                    <Link to="/pricing">Get Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/20 px-6 py-4">
                    <Link to="/pricing#calculator">Calculate On-Prem ROI</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>
        {(key === "on-premises" || key === "cloud" || key === "hybrid") && (
          isModernLayout ? (
            <>
              <section className="py-20 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      {key === "cloud"
                        ? "Who Venio Cloud Is Built For"
                        : key === "hybrid"
                        ? "Who Hybrid Deployment Is Built For"
                        : "Who On‑Premises Is Built For"}
                    </h2>
                    <p className="text-muted-foreground">
                      {key === "cloud"
                        ? "When speed, scalability, and global collaboration matter more than managing infrastructure."
                        : key === "hybrid"
                        ? "Designed for teams managing matters with varying security, infrastructure, and scalability requirements."
                        : "When governance is mandatory and data sovereignty is non-negotiable, on‑prem isn’t optional — it’s required."}
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(key === "cloud"
                      ? [
                          { title: "Corporate Legal Departments", desc: "Rapidly scale discovery for litigation, investigations, and regulatory requests without internal IT constraints.", Icon: Building2 },
                          { title: "Law Firms", desc: "Support multiple matters and distributed review teams without worrying about infrastructure capacity.", Icon: Scale },
                          { title: "eDiscovery Service Providers", desc: "Spin up new environments instantly to support clients and high‑volume case demands.", Icon: Users },
                          { title: "Global Enterprises", desc: "Enable cross‑office collaboration and external counsel access without complex infrastructure setup.", Icon: Globe2 },
                        ]
                      : key === "hybrid"
                      ? [
                          { title: "Global Enterprises", desc: "Balance sensitive investigations with high‑volume litigation across different environments.", Icon: Globe2 },
                          { title: "Law Firms Managing Mixed Matters", desc: "Keep confidential cases on‑prem while leveraging cloud infrastructure for large reviews.", Icon: Scale },
                          { title: "eDiscovery Service Providers", desc: "Support clients with varying security requirements using flexible deployment options.", Icon: Users },
                          { title: "Organizations with Fluctuating Workloads", desc: "Maintain stable infrastructure while bursting to the cloud during data surges.", Icon: Zap },
                        ]
                      : [
                          { title: "Government & Public Sector", desc: "Classified and citizen‑sensitive data that cannot leave secure networks.", Icon: Landmark },
                          { title: "Law Enforcement", desc: "Active investigations and digital evidence requiring closed environments.", Icon: Shield },
                          { title: "Financial Institutions", desc: "Strict regulatory mandates and zero‑tolerance data exposure.", Icon: Building2 },
                          { title: "Highly Regulated Industries", desc: "Healthcare, energy, and defense sectors demanding full infrastructure control.", Icon: ShieldCheck },
                        ]
                    ).map(({ title, desc, Icon }, index) => (
                      <Card key={title} className="rounded-2xl bg-white border border-border/40 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-8">
                    If your discovery work cannot tolerate downtime, data exposure, or unpredictable costs, {key === "cloud" ? "Venio Cloud" : key === "hybrid" ? "Venio Hybrid" : "Venio On‑Premises"} is designed for you.
                  </p>
                </div>
              </section>

              <section className="py-20 px-6 bg-white border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      {key === "cloud" ? "Why Choose Venio Cloud" : "Why Choose Venio On‑Premises"}
                    </h2>
                    <p className="text-muted-foreground">
                      {key === "cloud"
                        ? "Built for organizations that need enterprise-grade discovery with instant scalability and zero infrastructure burden."
                        : "Built for organizations that demand total control without sacrificing capability, innovation, or scalability."}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(key === "cloud"
                      ? [
                          { title: "Instant Case Environments", desc: "Launch matters quickly without provisioning servers or configuring infrastructure." },
                          { title: "Elastic Processing Power", desc: "Scale compute and storage automatically as data volumes grow or review workloads increase." },
                          { title: "Managed Infrastructure", desc: "Venio handles infrastructure maintenance, updates, and system performance." },
                          { title: "Unified Platform Architecture", desc: "ECA, review, production, and legal hold operate in a single cloud environment without workflow fragmentation." },
                        ]
                      : key === "hybrid"
                      ? [
                          { title: "Environment Flexibility", desc: "Run sensitive matters on‑prem while scaling other projects to the cloud." },
                          { title: "Unified Platform Workflow", desc: "ECA, review, production, and legal hold remain within the same Venio ecosystem across environments." },
                          { title: "Workload Bursting", desc: "Move high‑volume processing or review tasks to the cloud when workloads spike." },
                          { title: "Operational Continuity", desc: "Manage all matters through one interface without switching between different platforms." },
                        ]
                      : [
                          { title: "Long‑Term Cost Predictability", desc: "Avoid escalating cloud consumption fees. Control infrastructure investment and scale on your terms." },
                          { title: "Unified Platform Architecture", desc: "ECA, review, production, and legal hold operate within one seamless environment." },
                          { title: "True Data Sovereignty", desc: "All data processing, storage, indexing, and review stay entirely within your infrastructure and not routed through external services." },
                          { title: "Zero Feature Downgrade", desc: "Venio On‑Prem runs the exact same codebase, AI models, and workflows as our cloud platform." },
                        ]
                    ).map((item, index) => (
                      <Card key={item.title} className="rounded-2xl bg-white border border-border/40 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6">
                          <div className="border-l-4 border-accent pl-4">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              <section className="py-20 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      {key === "cloud"
                        ? "Why Legal Teams Are Moving Discovery to the Cloud"
                        : key === "hybrid"
                        ? "Why Hybrid eDiscovery Is the Strategic Middle Ground"
                        : "Why On‑Prem Still Leads in High‑Stakes Environments"}
                    </h2>
                    <p className="text-muted-foreground">
                      {key === "cloud"
                        ? "Cloud deployment removes infrastructure barriers, allowing teams to focus on discovery workflows rather than system management."
                        : key === "hybrid"
                        ? "Hybrid deployment lets organizations balance security mandates with operational scalability."
                        : "For organizations operating under strict mandates, keeping eDiscovery behind the firewall isn’t legacy thinking — it’s strategic risk management."}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(key === "cloud"
                      ? [
                          { title: "Rapid Case Deployment", desc: "Launch matters immediately without waiting for hardware provisioning or infrastructure setup.", Icon: Rocket },
                          { title: "Elastic Scalability", desc: "Scale processing and review capacity instantly as case volumes increase.", Icon: Zap },
                          { title: "Global Collaboration", desc: "Enable secure access for internal teams, outside counsel, and reviewers from anywhere.", Icon: Globe2 },
                          { title: "Lower Infrastructure Burden", desc: "Eliminate the operational overhead of maintaining servers, storage, and upgrades.", Icon: Cog },
                        ]
                      : key === "hybrid"
                      ? [
                          { title: "Flexible Infrastructure Strategy", desc: "Choose the right environment for each matter without being locked into one deployment model.", Icon: Workflow },
                          { title: "Optimized Cost Efficiency", desc: "Keep steady workloads on‑prem while scaling cloud resources only when needed.", Icon: DollarSign },
                          { title: "Operational Resilience", desc: "Distribute workloads across environments to prevent infrastructure bottlenecks.", Icon: Network },
                          { title: "Future‑Ready Architecture", desc: "Adapt quickly as data volumes, regulatory requirements, or case demands evolve.", Icon: Gauge },
                        ]
                      : [
                          { title: "Absolute Data Control", desc: "Maintain full ownership of storage, processing, indexing, and review environments without relying on external infrastructure.", Icon: Shield },
                          { title: "Stronger Compliance Alignment", desc: "Align directly with regulatory frameworks, internal governance policies, and client‑mandated infrastructure requirements.", Icon: Scale },
                          { title: "Cost Predictability", desc: "Eliminate unpredictable cloud consumption spikes. Capital investments can be forecasted and controlled.", Icon: TrendingDown },
                        ]
                    ).map(({ title, desc, Icon }, index) => (
                      <Card key={title} className="rounded-2xl bg-white border border-border/40 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6">
                          <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>


              <section id="what-powers" className="py-20 px-6 bg-primary text-white border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-6xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      {key === "cloud" ? "What Powers Venio Cloud" : key === "hybrid" ? "What Powers Venio Hybrid Deployment" : "What Powers Venio On‑Premises"}
                    </h2>
                    <p className="text-white/80">
                      {key === "cloud"
                        ? "Enterprise-grade eDiscovery delivered through secure, scalable cloud infrastructure."
                        : key === "hybrid"
                        ? "One platform that operates seamlessly across cloud and on‑prem environments."
                        : "The same powerful eDiscovery platform, deployed inside your infrastructure."}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(key === "cloud"
                      ? [
                          { title: "Fully Managed Cloud Infrastructure", desc: "Venio manages the infrastructure so teams can focus on discovery workflows, not system maintenance.", Icon: Server },
                          { title: "AI‑Powered TAR / CAL", desc: "Self-learning review tools automatically prioritize relevant documents and reduce review volume.", Icon: Brain },
                          { title: "Interactive Data Visualizations", desc: "Built-in analytics reveal patterns, relationships, and insights across large datasets.", Icon: BarChart3 },
                          { title: "Self‑Service Discovery Portal", desc: "Create cases, upload data, analyze, review, and produce through an intuitive interface.", Icon: Monitor },
                          { title: "Unlimited Processing Throughput", desc: "Process large datasets across multiple cases simultaneously without performance slowdowns.", Icon: Gauge },
                          { title: "Workflow Automation", desc: "Automate repetitive discovery tasks to streamline processing, review, and production.", Icon: Cog },
                        ]
                      : key === "hybrid"
                      ? [
                          { title: "Instant Access", desc: "Access the platform immediately from anywhere while keeping sensitive matters in controlled on‑prem environments when required.", Icon: Monitor },
                          { title: "Scalability & Flexibility", desc: "Scale resources based on case size and workload, shifting processing or review between environments as needed.", Icon: Gauge },
                          { title: "Time‑Efficient Workflows", desc: "Automation streamlines repetitive tasks like indexing and document preparation to accelerate discovery workflows.", Icon: Cog },
                          { title: "Seamless Workflow Integration", desc: "Integrates with common enterprise tools such as email systems, document repositories, and collaboration platforms.", Icon: Network },
                          { title: "Self‑Service Web Interface", desc: "Upload data, analyze, review, and produce documents from a browser‑based platform.", Icon: Monitor },
                          { title: "Cross‑Environment Collaboration", desc: "Allow internal teams and external counsel to work securely regardless of deployment location.", Icon: Users },
                        ]
                      : [
                          { title: "Customer‑Hosted Infrastructure", desc: "Deploy Venio entirely within your own data center and hardware environment, fully managed by your internal IT team.", Icon: Server },
                          { title: "Air‑Gapped Deployment Support", desc: "Operate the platform within isolated or restricted networks where external internet connectivity is prohibited.", Icon: ShieldCheck },
                          { title: "Native Active Directory Integration", desc: "Authenticate users and manage permissions directly through existing enterprise identity systems like Active Directory.", Icon: LockKeyhole },
                          { title: "Direct SAN / NAS Storage Integration", desc: "Connect Venio to existing enterprise storage systems without requiring external or cloud storage layers.", Icon: Database },
                          { title: "Controlled Update & Patch Management", desc: "IT teams control when and how platform updates are deployed, aligning with internal change management policies.", Icon: Cog },
                          { title: "Infrastructure‑Level Security Controls", desc: "Leverage your organization’s existing firewalls, network monitoring, encryption standards, and security frameworks.", Icon: Shield },
                        ]
                    ).map(({ title, desc, Icon }, index) => (
                      <Card key={title} className="rounded-2xl bg-white text-primary border border-white/10 shadow-sm animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <CardContent className="p-6">
                          <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden py-24 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(96,165,250,0.10),transparent_60%)]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                  <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-accent/20 px-6 py-3 rounded-full mb-4">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">Deployment Options</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Deploy eDiscovery the Way Your Organization Requires</h2>
                    <p className="text-muted-foreground">Choose cloud, on‑premises, or hybrid based on security posture, governance requirements, and scale.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-accent/40 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      <CardContent className="p-10 flex flex-col h-full">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">VENIO ON‑PREM</div>
                        <h3 className="text-2xl font-semibold mb-2">Venio On‑Prem</h3>
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-secondary rounded-full mb-6" />
                        <p className="text-sm text-muted-foreground mb-6">Run Venio inside your own infrastructure for maximum control.</p>
                        <ul className="space-y-2 mb-8">
                          {["Total data sovereignty", "Air-gapped network support", "Predictable fixed costs"].map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} />
                              <span className="text-sm text-muted-foreground">{t}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white mt-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                          <Link to="/deployment/on-premises">Explore On‑Prem</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-accent/40 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                      <CardContent className="p-10 flex flex-col h-full">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">VENIO CLOUD</div>
                        <h3 className="text-2xl font-semibold mb-2">Venio Cloud</h3>
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-secondary rounded-full mb-6" />
                        <p className="text-sm text-muted-foreground mb-6">Fully managed SaaS for rapid deployment and elastic scale.</p>
                        <ul className="space-y-2 mb-8">
                          {["Instant case environments", "Elastic processing & storage", "No infrastructure management"].map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} />
                              <span className="text-sm text-muted-foreground">{t}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white mt-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                          <Link to="/deployment/cloud">Explore Cloud</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="relative rounded-3xl bg-white border border-border/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-accent/40 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <CardContent className="p-10 flex flex-col h-full">
                        <div className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">VENIO ON‑DEMAND</div>
                        <h3 className="text-2xl font-semibold mb-2">Venio On‑Demand</h3>
                        <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-accent to-secondary rounded-full mb-6" />
                        <p className="text-sm text-muted-foreground mb-6">Combine on‑prem control with cloud flexibility.</p>
                        <ul className="space-y-2 mb-8">
                          {["On-prem for sensitive investigations", "Cloud burst for large-scale matters", "Seamless data movement between environments"].map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" strokeWidth={2} />
                              <span className="text-sm text-muted-foreground">{t}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white mt-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                          <Link to="/deployment/hybrid">Explore On‑Demand</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary/95 to-primary text-white border-t border-border/50 animate-fade-in relative overflow-hidden" style={{ animationDelay: "0.05s" }}>
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>
                <div className="container mx-auto max-w-5xl text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {key === "cloud" ? "Start eDiscovery in Minutes, Not Weeks" : key === "hybrid" ? "One Platform. Two Environments. Unlimited Flexibility." : "Your Data. Your Infrastructure. Your Control."}
                  </h2>
                  <p className="text-white/90 max-w-2xl mx-auto mb-6">
                    {key === "cloud"
                      ? "Spin up secure environments instantly and scale discovery operations without managing infrastructure."
                      : key === "hybrid"
                      ? "See how Venio Hybrid adapts to your organization’s security requirements and workload demands."
                      : "Enterprise eDiscovery behind your firewall with full control over security, governance, and performance."}
                  </p>
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Link to="/book-a-demo">{key === "cloud" ? "Book a Cloud Demo" : key === "hybrid" ? "Request an On‑Demand Demo" : "Request an On-Prem Demo"}</Link>
                  </Button>
                </div>
              </section>

              <section className="py-20 px-6 bg-muted/30 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="container mx-auto max-w-5xl">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">FAQ</h2>
                    <p className="text-muted-foreground">
                      Answers to common questions about {key === "cloud" ? "Venio Cloud" : "Venio On‑Premises"}.
                    </p>
                  </div>
                  <Accordion type="single" collapsible className="space-y-4">
                    {(key === "cloud"
                      ? [
                          {
                            question: "Is Venio Cloud single‑tenant?",
                            answer: "Yes. Each Venio Cloud environment is provisioned as a dedicated instance to prevent commingling of customer data."
                          },
                          {
                            question: "How fast can we get started?",
                            answer: "Venio Cloud can be provisioned quickly with guided onboarding so teams can start reviewing in days, not weeks."
                          },
                          {
                            question: "What security and compliance standards are supported?",
                            answer: "Venio Cloud supports encryption in transit and at rest, audit trails, and enterprise controls aligned with SOC 2 Type II expectations."
                          },
                          {
                            question: "Can we scale up for a high‑volume matter and scale down later?",
                            answer: "Yes. Cloud resources can be adjusted as matters ramp up or down, keeping costs aligned to active workload."
                          }
                        ]
                      : [
                          {
                            question: "Can Venio On‑Premises run air‑gapped?",
                            answer: "Yes. Venio On‑Premises supports deployments in restricted environments, including fully disconnected (air‑gapped) networks."
                          },
                          {
                            question: "Do we get the same features as Cloud?",
                            answer: "Yes. Venio On‑Premises delivers the same core platform capabilities across legal hold, ingestion, review, analytics, and production."
                          },
                          {
                            question: "How is installation and onboarding handled?",
                            answer: "Venio provides guided deployment and onboarding to fit your security requirements and infrastructure standards."
                          },
                          {
                            question: "Can we integrate with existing identity and storage systems?",
                            answer: "Yes. Venio supports enterprise integrations for authentication and data sources based on your environment and governance needs."
                          }
                        ]
                    ).map((faq, index) => (
                      <AccordionItem key={faq.question} value={`${key}-faq-${index}`} className="border border-border/40 rounded-2xl bg-white px-6 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                        <AccordionTrigger className="text-left text-base font-semibold py-4 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            </>
          ) : (
            <>
            <section className="py-20 px-6 bg-white border-t border-border/50">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Benefits</h2>
                  <p className="text-muted-foreground">{benefitsSubtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {key === "cloud" ? (
                    <>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-secondary/10 border border-secondary/20 mb-4">
                              <Lock className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Single‑Tenant Isolation</h3>
                            <p className="text-muted-foreground">Dedicated instances ensure your data is never commingled. Isolate workloads and enforce strict access boundaries by design.</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-accent/10 border border-accent/20 mb-4">
                              <Zap className="h-8 w-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Elastic Scale on Demand</h3>
                            <p className="text-muted-foreground">Spin up capacity instantly for high‑risk, high‑volume matters. Scale processing up or down without managing hardware.</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                              <Shield className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enterprise Security & Compliance</h3>
                            <p className="text-muted-foreground">Encryption in transit and at rest, granular controls, and auditability aligned with enterprise and regulatory requirements.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-secondary/10 border border-secondary/20 mb-4">
                              <Shield className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Sovereignty</h3>
                            <p className="text-muted-foreground">Keep 100% of your sensitive data within your secure perimeter. Ideal for government agencies, financial institutions, and strict GDPR compliance requirements.</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                              <TrendingDown className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Predictable Economics</h3>
                            <p className="text-muted-foreground">Eliminate recurring per‑GB cloud hosting fees. Leverage your existing hardware investment for a significantly lower Total Cost of Ownership (TCO) on long‑running matters.</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="group relative bg-card/80 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 rounded-2xl overflow-hidden">
                        <CardContent className="p-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                          <div className="relative">
                            <div className="inline-flex p-4 rounded-xl bg-accent/10 border border-accent/20 mb-4">
                              <Zap className="h-8 w-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Unshared Performance</h3>
                            <p className="text-muted-foreground">No shared tenants. No throttling. Utilize 100% of your server&apos;s compute power to process up to 10TB of data per day with dedicated resources.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              </div>
            </section>

            <section className="py-16 px-6">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Capabilities</h2>
                  <p className="text-sm text-muted-foreground">Trusted by law firms, corporations, and government agencies</p>
                </div>
                <Card className="rounded-2xl bg-transparent overflow-hidden border-none shadow-none">
                  <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-14 items-start">
                        <div>
                          <Accordion
                            type="single"
                            collapsible
                            className="space-y-6"
                            value={activeSection}
                            onValueChange={(v: SectionKey | undefined) => setActiveSection(v)}
                          >
                            <AccordionItem value="end-to-end" className="border-b-0">
                              <AccordionTrigger className="group relative flex items-center justify-start gap-3 text-left text-2xl font-bold hover:no-underline rounded-2xl border border-transparent px-6 py-6 transition-all data-[state=open]:border-accent data-[state=open]:bg-accent/10 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-accent/30 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 [&>svg]:hidden">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-accent/30 text-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white group-data-[state=open]:border-transparent group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-accent/30">
                                  <Database className="w-6 h-6" />
                                </div>
                                <span className="leading-tight">End-to-End eDiscovery</span>
                              </AccordionTrigger>
                              <AccordionContent className="pl-6">
                                <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                                  Handle legal hold, ingestion, analysis, review, and production in one unified system.
                                </p>
                                <div className="grid gap-3">
                                  {["Legal Hold management","Ingestion and analysis","AI-powered review","Production workflows"].map((t) => (
                                    <div key={t} className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="h-4 w-4 text-primary" />
                                      <span>{t}</span>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="automation" className="border-b-0">
                              <AccordionTrigger className="group relative flex items-center justify-start gap-3 text-left text-2xl font-bold hover:no-underline rounded-2xl border border-transparent px-6 py-6 transition-all data-[state=open]:border-accent data-[state=open]:bg-accent/10 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-accent/30 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 [&>svg]:hidden">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-accent/30 text-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white group-data-[state=open]:border-transparent group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-accent/30">
                                  <Bell className="w-6 h-6" />
                                </div>
                                <span className="leading-tight">Automation & Audit Trails</span>
                              </AccordionTrigger>
                              <AccordionContent className="pl-6">
                                <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                                  Automated custodian notices, reminders, and audit trails managed from a single dashboard.
                                </p>
                                <div className="grid gap-3">
                                  {["Automated notices and reminders","Custodian management","Dashboard-driven control","Audit-ready workflows"].map((t) => (
                                    <div key={t} className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="h-4 w-4 text-primary" />
                                      <span>{t}</span>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="exports" className="border-b-0">
                              <AccordionTrigger className="group relative flex items-center justify-start gap-3 text-left text-2xl font-bold hover:no-underline rounded-2xl border border-transparent px-6 py-6 transition-all data-[state=open]:border-accent data-[state=open]:bg-accent/10 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-accent/30 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 [&>svg]:hidden">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-accent/30 text-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white group-data-[state=open]:border-transparent group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-accent/30">
                                  <FileText className="w-6 h-6" />
                                </div>
                                <span className="leading-tight">Production-Ready Exports</span>
                              </AccordionTrigger>
                              <AccordionContent className="pl-6">
                                <p className="text-muted-foreground mt-4 md:mt-6 mb-5 leading-relaxed">
                                  Generate exports in standard formats with built-in slipsheets and Bates stamping.
                                </p>
                                <div className="grid gap-3">
                                  {["Standard formats","Slipsheets","Bates stamping","Audit logs"].map((t) => (
                                    <div key={t} className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="h-4 w-4 text-primary" />
                                      <span>{t}</span>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                        <div>
                          <div className="rounded-2xl bg-transparent border border-accent/30 h-[529px] flex items-center justify-center">
                            <div className="text-center p-10">
                              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl border border-accent/30 text-accent flex items-center justify-center">
                                <PreviewIcon className="w-8 h-8" />
                              </div>
                              <p className="text-base font-semibold text-slate-900 mb-1">{previewLabel}</p>
                              <p className="text-sm text-muted-foreground">Product Screenshot Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                </Card>
              </div>
            </section>

            <section className="py-20 px-6 bg-muted/30">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
                  <p className="text-lg text-muted-foreground">
                    Connect with the tools and platforms your team already uses
                  </p>
                </div>
                <div className="flex items-center justify-center gap-12 flex-wrap px-8">
                  {[
                    { name: "Microsoft 365", icon: "M365" },
                    { name: "Google Workspace", icon: "GWS" },
                    { name: "Slack", icon: "SLACK" },
                    { name: "Microsoft Teams", icon: "TEAMS" },
                    { name: "AWS", icon: "AWS" },
                    { name: "Azure", icon: "AZURE" },
                    { name: "Box", icon: "BOX" },
                    { name: "Dropbox", icon: "DBXPX" },
                  ].map((integration, index) => (
                    <div
                      key={index}
                      className="group transition-all duration-300 hover:scale-110"
                      title={integration.name}
                    >
                      <div className="w-16 h-16 rounded-lg bg-white shadow-md flex items-center justify-center text-xs font-bold text-primary group-hover:shadow-xl transition-shadow">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <CTABanner />

            {/* Testimonials */}
            <TestimonialsSection />
          </>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentType;
