import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Workflow, Anchor, CircleDollarSign, Search, Shield, Database } from "lucide-react";

type IndustryId = "law-firm" | "legal-service-provider" | "corporate" | "government";
type ProblemId = "data-overload" | "hard-to-process-data" | "poor-early-case-insight" | "inconsistent-legal-holds" | "slow-review" | "manual-workflows" | "tool-fragmentation" | "high-costs" | "security-risks";

interface Resource {
  title: string;
  description: string;
  linkText: string;
  url: string;
}

interface Problem {
  id: ProblemId;
  label: string;
  solution: string;
  resources: Resource[];
}

type ProblemContent = Partial<Pick<Problem, "solution" | "resources">>;

const problems: Problem[] = [
  {
    id: "data-overload",
    label: "Data Overload",
    solution:
      "Venio handles massive datasets with powerful processing capabilities that eliminate duplicates, remove system files, and structure data before review begins. This ensures legal teams are not overwhelmed by volume and can quickly focus on meaningful information, improving both efficiency and accuracy in high-stakes litigation environments.",
    resources: [
      { 
        title: "Data Reduction Guide", 
        description: "Learn how AI-powered culling can reduce your data volume by up to 70%",
        linkText: "Download Guide",
        url: "#" 
      },
      { 
        title: "AI Culling Best Practices", 
        description: "Industry-proven strategies for efficient data management",
        linkText: "Learn More",
        url: "#" 
      },
    ],
  },
  {
    id: "hard-to-process-data",
    label: "Hard-to-Process Data Types",
    solution:
      "Venio supports a wide range of modern data sources, including emails, chat platforms, mobile data, and multilingual content. Its ability to process complex and diverse data types natively ensures that no critical evidence is overlooked, enabling legal teams to confidently manage evolving data landscapes.",
    resources: [
      { 
        title: "Modern Data Challenges in eDiscovery", 
        description: "Understanding today's complex data landscape",
        linkText: "Read Blog",
        url: "#" 
      },
      { 
        title: "Ingestion Challenges", 
        description: "Expert insights on processing diverse data formats",
        linkText: "Read Article",
        url: "#" 
      },
    ],
  },
  {
    id: "poor-early-case-insight",
    label: "Poor Early Case Insight",
    solution:
      "Venio provides early visibility into case data through advanced analytics and Early Case Assessment, helping teams identify key facts, risks, and patterns before full review begins. This allows legal teams to make informed strategic decisions earlier, reducing unnecessary work and strengthening case positioning from the outset.",
    resources: [
      { 
        title: "Why ECA Matters in 2025", 
        description: "Latest trends and strategies for early case assessment",
        linkText: "Read Blog",
        url: "#" 
      },
      { 
        title: "Early Data Reduction Case Study", 
        description: "Real results from teams that reduced review costs by 60%",
        linkText: "View Case Study",
        url: "#" 
      },
    ],
  },
  {
    id: "inconsistent-legal-holds",
    label: "Inconsistent Legal Holds",
    solution:
      "Venio standardizes legal hold processes by automating notifications, tracking custodian acknowledgments, and maintaining detailed audit logs. This ensures that preservation efforts are consistent, defensible, and fully documented, allowing legal teams to demonstrate compliance and withstand scrutiny when challenged.",
    resources: [
      { 
        title: "Legal Hold Product Page", 
        description: "Explore Venio's automated legal hold capabilities",
        linkText: "View Product",
        url: "#" 
      },
      { 
        title: "Legal Hold Best Practices", 
        description: "Industry-proven strategies for defensible preservation",
        linkText: "Download PDF",
        url: "#" 
      },
    ],
  },
  {
    id: "slow-review",
    label: "Slow Review",
    solution:
      "Venio transforms document review by combining AI-driven prioritization with intuitive workflows, allowing legal teams to focus only on what matters. By reducing review volumes and surfacing relevant documents faster, teams can meet deadlines confidently while maintaining consistency and defensibility across even the most complex matters.",
    resources: [
      { 
        title: "Review Acceleration Whitepaper", 
        description: "See how teams achieve 3x faster review speeds with smart batching",
        linkText: "Read Whitepaper",
        url: "#" 
      },
      { 
        title: "AI-Powered Review Demo", 
        description: "Watch continuous active learning in action",
        linkText: "View Demo",
        url: "#" 
      },
    ],
  },
  {
    id: "manual-workflows",
    label: "Manual Workflows",
    solution:
      "Venio replaces repetitive, manual processes with intelligent automation across review, tagging, and production workflows. By reducing reliance on manual effort, legal teams minimize human error, improve consistency, and significantly accelerate timelines, allowing attorneys to focus on higher-value legal analysis instead of administrative tasks.",
    resources: [
      { 
        title: "Automation Features", 
        description: "Discover 20+ workflow automations built into Venio",
        linkText: "Explore Features",
        url: "#" 
      },
      { 
        title: "Workflow Templates", 
        description: "Pre-built templates for common eDiscovery workflows",
        linkText: "Browse Templates",
        url: "#" 
      },
    ],
  },
  {
    id: "tool-fragmentation",
    label: "Tool Fragmentation",
    solution:
      "Venio unifies the entire eDiscovery lifecycle within a single platform, eliminating the need to switch between multiple tools. This ensures seamless data flow, preserves metadata integrity, and reduces operational complexity, enabling legal teams to work more efficiently while maintaining complete control and visibility across every stage of discovery.",
    resources: [
      { 
        title: "Platform Overview", 
        description: "Explore Venio's unified approach to the entire EDRM lifecycle",
        linkText: "View Overview",
        url: "#" 
      },
      { 
        title: "Integration Guide", 
        description: "Learn how to migrate from fragmented tools seamlessly",
        linkText: "Download Guide",
        url: "#" 
      },
    ],
  },
  {
    id: "high-costs",
    label: "High Costs",
    solution:
      "Venio reduces overall eDiscovery costs by minimizing review hours, eliminating redundant processes, and reducing dependency on external vendors. By optimizing workflows and leveraging automation, legal teams can handle more matters with fewer resources, achieving significant cost savings without compromising on quality or defensibility.",
    resources: [
      { 
        title: "Cost Reduction Calculator", 
        description: "Calculate your potential savings with Venio's automation",
        linkText: "Try Calculator",
        url: "#" 
      },
      { 
        title: "ROI Case Studies", 
        description: "Real results from firms that cut eDiscovery costs by 60%",
        linkText: "View Case Studies",
        url: "#" 
      },
    ],
  },
  {
    id: "security-risks",
    label: "Security Risks",
    solution:
      "Venio ensures enterprise-grade data security with strict access controls, encryption, and comprehensive audit trails. Every action is logged and traceable, providing full visibility into how data is handled. This allows legal teams to confidently manage sensitive information while meeting compliance and regulatory requirements.",
    resources: [
      { 
        title: "Security Whitepaper", 
        description: "Deep dive into Venio's enterprise-grade security architecture",
        linkText: "Read Whitepaper",
        url: "#" 
      },
      { 
        title: "Compliance Certifications", 
        description: "View our SOC 2, ISO 27001, and other security certifications",
        linkText: "View Certifications",
        url: "#" 
      },
    ],
  },
];

const industries = [
  { id: "law-firm" as IndustryId, label: "Law Firm" },
  { id: "legal-service-provider" as IndustryId, label: "Legal Service Provider" },
  { id: "corporate" as IndustryId, label: "Corporate" },
  { id: "government" as IndustryId, label: "Government" },
];

const defaultResources = [
  {
    title: "Blog",
    description: "Explore insights, trends, and best practices in eDiscovery",
    linkText: "Visit Blog",
    url: "https://www.veniosystems.com/blog/",
  },
  {
    title: "Case Studies",
    description: "See how leading organizations achieve success with Venio",
    linkText: "View Case Studies",
    url: "https://www.veniosystems.com/",
  },
];

const problemsByIndustry: Record<IndustryId, ProblemId[]> = {
  "law-firm": [
    "slow-review",
    "data-overload",
    "poor-early-case-insight",
    "manual-workflows",
    "tool-fragmentation",
    "high-costs",
    "security-risks",
    "hard-to-process-data",
    "inconsistent-legal-holds",
  ],
  "legal-service-provider": [
    "data-overload",
    "hard-to-process-data",
    "manual-workflows",
    "slow-review",
    "tool-fragmentation",
    "high-costs",
    "security-risks",
    "poor-early-case-insight",
    "inconsistent-legal-holds",
  ],
  corporate: [
    "inconsistent-legal-holds",
    "security-risks",
    "high-costs",
    "poor-early-case-insight",
    "data-overload",
    "tool-fragmentation",
    "manual-workflows",
    "hard-to-process-data",
    "slow-review",
  ],
  government: [
    "security-risks",
    "inconsistent-legal-holds",
    "hard-to-process-data",
    "data-overload",
    "manual-workflows",
    "poor-early-case-insight",
    "tool-fragmentation",
    "high-costs",
    "slow-review",
  ],
};

const industryProblemContent: Partial<Record<IndustryId, Partial<Record<ProblemId, ProblemContent>>>> = {
  "legal-service-provider": {
    "slow-review": {
      solution:
        "Venio enables LSPs to scale document review efficiently using AI-driven prioritization and streamlined workflows. By reducing the number of documents requiring manual review and accelerating decision-making, service providers can meet tight client deadlines while maintaining accuracy, consistency, and high-quality deliverables across large-scale projects.",
    },
    "data-overload": {
      solution:
        "Venio processes high volumes of client data with speed and precision, reducing datasets through deduplication and intelligent filtering before review begins. This allows LSPs to manage complex matters efficiently while ensuring reviewers focus only on relevant data, improving turnaround times and client satisfaction.",
    },
    "poor-early-case-insight": {
      solution:
        "Venio equips LSPs with early data visibility through advanced analytics and case assessment tools, enabling them to provide strategic insights to clients sooner. This improves client trust, enhances decision-making, and allows service providers to position themselves as proactive partners rather than reactive vendors.",
    },
    "manual-workflows": {
      solution:
        "Venio automates repetitive workflows across processing, review, and production, allowing LSPs to reduce operational overhead and improve efficiency. This enables teams to handle more projects simultaneously while maintaining consistency and reducing errors, ultimately improving margins and service delivery quality.",
    },
    "tool-fragmentation": {
      solution:
        "Venio eliminates the complexity of managing multiple tools by offering a unified platform for the entire eDiscovery lifecycle. This reduces training requirements, minimizes integration issues, and ensures seamless workflows, allowing LSPs to operate more efficiently and deliver consistent results across all client engagements.",
    },
    "high-costs": {
      solution:
        "Venio helps LSPs optimize operational costs by reducing manual effort, infrastructure dependency, and processing inefficiencies. By leveraging automation and scalable workflows, service providers can improve profitability while maintaining competitive pricing and delivering high-quality outcomes to clients.",
    },
    "security-risks": {
      solution:
        "Venio provides secure, compliant environments for handling sensitive client data, with full audit trails and controlled access. This ensures that LSPs can meet client expectations and regulatory requirements while maintaining trust and protecting critical information throughout the eDiscovery process.",
    },
    "hard-to-process-data": {
      solution:
        "Venio supports a wide range of data formats, including chat, mobile, and foreign-language content, allowing LSPs to handle diverse client needs without additional tools. This flexibility ensures comprehensive data coverage and improves the quality of review and analysis across cases.",
    },
    "inconsistent-legal-holds": {
      solution:
        "Venio enables LSPs to deliver defensible legal hold services by automating notifications, tracking responses, and maintaining complete audit trails. This ensures clients can demonstrate compliance and maintain consistent preservation practices across matters.",
    },
  },
  government: {
    "slow-review": {
      solution:
        "Venio accelerates investigations by prioritizing relevant data through AI-driven workflows, allowing government teams to review critical information faster. This ensures timely decision-making while maintaining accuracy and accountability, even when handling large-scale or sensitive investigations.",
    },
    "data-overload": {
      solution:
        "Venio efficiently processes large volumes of public and investigative data, reducing noise through intelligent filtering and structuring. This enables government agencies to focus on relevant information quickly, improving operational efficiency and ensuring no critical evidence is overlooked.",
    },
    "poor-early-case-insight": {
      solution:
        "Venio provides early visibility into data through advanced analytics, helping agencies identify key patterns, risks, and insights at the start of an investigation. This supports faster, more informed decision-making and improves overall case outcomes.",
    },
    "manual-workflows": {
      solution:
        "Venio reduces administrative burden by automating workflows across the eDiscovery lifecycle. This allows government teams to operate more efficiently, reduce errors, and focus on mission-critical tasks rather than manual processes.",
    },
    "tool-fragmentation": {
      solution:
        "Venio consolidates multiple systems into a single unified platform, improving oversight and governance. This ensures consistent workflows, better data control, and reduced operational complexity across departments.",
    },
    "high-costs": {
      solution:
        "Venio helps government agencies manage budgets effectively by reducing manual effort, improving efficiency, and eliminating unnecessary tool dependencies, ensuring cost-effective operations without compromising capability.",
    },
    "security-risks": {
      solution:
        "Venio ensures compliance with strict security and regulatory standards, providing full audit trails and secure access controls. This enables agencies to handle sensitive data confidently while maintaining transparency and accountability.",
    },
    "hard-to-process-data": {
      solution:
        "Venio supports complex data types, including multimedia and multilingual content, ensuring agencies can process and analyze all forms of evidence effectively in modern investigations.",
    },
    "inconsistent-legal-holds": {
      solution:
        "Venio ensures consistent and defensible preservation practices through automated legal hold workflows, complete tracking, and auditability, enabling agencies to demonstrate compliance under scrutiny.",
    },
  },
  corporate: {
    "slow-review": {
      solution:
        "Venio accelerates internal document review by combining AI-driven prioritization with streamlined workflows, allowing corporate legal teams to focus only on high-value content. By reducing review volumes and surfacing relevant information faster, teams can respond quickly to legal matters while maintaining consistency, accuracy, and defensibility across cases.",
    },
    "data-overload": {
      solution:
        "Venio helps corporate teams manage overwhelming enterprise data by applying intelligent processing techniques like deduplication, DeNIST, and structured filtering. This significantly reduces data volume before review begins, ensuring legal teams can focus on relevant information while improving efficiency, reducing noise, and minimizing the risk of missing critical evidence.",
    },
    "poor-early-case-insight": {
      solution:
        "Venio provides early visibility into case data through advanced analytics and Early Case Assessment capabilities, enabling corporate legal teams to identify key risks, patterns, and relevant information before full review begins. This empowers teams to make faster, more informed decisions and align legal strategy early in the matter lifecycle.",
    },
    "manual-workflows": {
      solution:
        "Venio replaces repetitive manual tasks with intelligent automation across review, tagging, and production workflows. By reducing reliance on manual processes, corporate legal teams can minimize human error, improve consistency, and significantly accelerate timelines, allowing them to focus on strategic legal work instead of administrative overhead.",
    },
    "tool-fragmentation": {
      solution:
        "Venio eliminates the need for multiple disconnected tools by providing a unified platform that covers the entire eDiscovery lifecycle. This ensures seamless workflows, preserves data integrity, and reduces operational complexity, allowing corporate legal teams to work more efficiently with full visibility and control over their processes.",
    },
    "high-costs": {
      solution:
        "Venio helps reduce legal spend by minimizing review time, eliminating redundant processes, and reducing dependency on external vendors. Through automation and optimized workflows, corporate teams can handle more matters internally with fewer resources, achieving significant cost savings while maintaining high-quality, defensible outcomes.",
    },
    "security-risks": {
      solution:
        "Venio ensures enterprise-grade security with strict access controls, encryption, and complete audit trails that track every action taken on data. This allows corporate legal teams to confidently manage sensitive information, maintain compliance with regulatory requirements, and ensure transparency and accountability throughout the eDiscovery process.",
    },
    "hard-to-process-data": {
      solution:
        "Venio supports a wide range of enterprise data sources, including emails, chat platforms like Teams and Slack, mobile data, and multilingual content. Its ability to process diverse and complex data types ensures corporate teams can capture and analyze all relevant information without data loss or additional tools.",
    },
    "inconsistent-legal-holds": {
      solution:
        "Venio centralizes legal hold management by automating custodian notifications, tracking acknowledgments, and maintaining detailed audit logs. This ensures consistent and defensible preservation practices across the organization, allowing corporate legal teams to demonstrate compliance and confidently respond to scrutiny when legal holds are challenged.",
    },
  },
};

type CardItem = {
  icon: React.ElementType;
  title: string;
  realityLabel: string;
  reality: string;
  withLabel: string;
  withText: string;
};

const ProblemSolutionSection = ({
  variant = "interactive",
  title,
  subtitle,
  cards,
}: {
  variant?: "interactive" | "cards";
  title?: string;
  subtitle?: string;
  cards?: CardItem[];
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<ProblemId | null>(null);

  const baseProblem = selectedProblem ? problems.find((p) => p.id === selectedProblem) : null;
  const industryOverride =
    selectedIndustry && selectedProblem
      ? industryProblemContent[selectedIndustry]?.[selectedProblem]
      : undefined;

  const currentProblem = baseProblem
    ? {
        ...baseProblem,
        ...(industryOverride ?? {}),
      }
    : null;

  const handleIndustrySelect = (industryId: IndustryId) => {
    setSelectedIndustry(industryId);
    setSelectedProblem(null);
  };

  const handleBackToIndustries = () => {
    setSelectedIndustry(null);
    setSelectedProblem(null);
  };

  if (variant === "cards") {
    const cardsData: CardItem[] = cards ?? [
      {
        icon: Workflow,
        title: "Siloed workflows",
        realityLabel: "- THE REALITY",
        reality: "Processing, analytics, review, and production spread across disconnected systems, creating inefficiencies and risk.",
        withLabel: "- WITH VENIO",
        withText: "Discovery runs in one connected platform, eliminating handoffs & inconsistency.",
      },
      {
        icon: Anchor,
        title: "Unpredictable discovery costs",
        realityLabel: "- THE REALITY",
        reality: "Usage-based pricing and hidden fees make it hard to forecast spend and defend budgets.",
        withLabel: "- WITH VENIO",
        withText: "Predictable pricing and in-platform control make discovery spend predictable.",
      },
      {
        icon: CircleDollarSign,
        title: "Rigid, corporate-first platforms",
        realityLabel: "- THE REALITY",
        reality: "Tools built for narrow use cases fail to support complex organizational compliance and cross‑department needs.",
        withLabel: "- WITH VENIO",
        withText: "Flexible workflows and deployment adapt to complex compliance needs.",
      },
    ];
    return (
      <section id="problem" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">{title ?? "What Challenge Are You Facing?"}</h2>
            <p className="text-lg text-muted-foreground">{subtitle ?? "The reality and how Venio addresses it"}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsData.map((c, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white/95 border border-border/40 shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-border/30" />
                <div className="absolute top-0 left-0 w-full h-14 rounded-t-3xl bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 flex h-full flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 aspect-square rounded-xl bg-destructive/10 border border-destructive/20 grid place-items-center">
                      <c.icon className="h-6 w-6 text-destructive" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{c.title}</h3>
                  </div>
                  <div className="space-y-5 flex-1">
                    <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-destructive/10 text-[10px] font-semibold tracking-wide text-destructive uppercase">The Reality</span>
                      <p className="text-sm text-muted-foreground italic mt-2">“{c.reality}”</p>
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-full bg-accent/10 text-[10px] font-semibold tracking-wide text-accent uppercase">With Venio</span>
                      <p className="text-sm mt-2">{c.withText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="problem" className="relative py-24 px-4 overflow-hidden gradient-animated">
      {/* Animated Background Elements - Match Hero Section */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute top-24 right-24 w-32 h-32 bg-secondary/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-[55%] right-40 w-56 h-56 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
      </div>

      {/* Gradient Overlay - Match Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What Challenge Are You Facing?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Select a challenge to see how Venio solves it—with clear explanations and resources tailored to your needs.
          </p>
        </div>

        <div className={`grid gap-6 lg:gap-8 transition-all duration-700 ${
          selectedProblem 
            ? 'grid-cols-1 lg:grid-cols-3' 
            : 'grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto'
        }`}>
          {/* Column 1: Industry/Problem Selector */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl transition-all duration-700">
            {!selectedIndustry ? (
              <>
                <h2 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                  Select Your Industry
                </h2>
                <div className="flex flex-col gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => handleIndustrySelect(industry.id)}
                      className="px-6 py-4 rounded-md text-base font-medium transition-all duration-300 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:border-venioGreen/50 hover:scale-105 hover:bg-white/15 text-center"
                    >
                      {industry.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handleBackToIndustries}
                  className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors mb-4 text-sm w-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Industries
                </button>
                <h2 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                  What challenge are you facing?
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {problemsByIndustry[selectedIndustry].map((problemId) => {
                    const problem = problems.find((p) => p.id === problemId);
                    if (!problem) return null;
                    return (
                    <button
                      key={problem.id}
                      onClick={() => setSelectedProblem(problem.id)}
                      className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                        selectedProblem === problem.id
                          ? "bg-venioGreen text-venioGreen-foreground shadow-lg shadow-venioGreen/30 scale-105"
                          : "bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:border-venioGreen/50 hover:scale-105"
                      }`}
                    >
                      {problem.label}
                    </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Column 2: Dynamic Solution Text */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl transition-all duration-700 ease-in-out transform ${
            selectedProblem ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 scale-95 hidden lg:hidden'
          }`}>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              {currentProblem ? "How Venio Helps" : "About Venio"}
            </h2>
            <div className="min-h-[300px] flex items-center">
              <p
                key={selectedProblem || "default"}
                className="text-base text-white/90 leading-relaxed animate-fade-in"
              >
                {currentProblem 
                  ? currentProblem.solution 
                  : "The Only AI-Powered, Unified eDiscovery Platform Built for Modern Legal Teams. Venio bridges the gap between power and usability. Legal teams, investigators, and analysts adopt it faster, without long training cycles or heavy admin overhead."
                }
              </p>
            </div>
          </div>

          {/* Column 3: Recommended Resources */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl transition-all duration-700 ease-in-out transform ${
            selectedProblem ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 scale-95 hidden lg:hidden'
          }`}>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Helpful Resources
            </h2>
            <div className="space-y-4 mb-6">
              {(currentProblem ? currentProblem.resources : defaultResources).map((resource, index) => (
                <div
                  key={`${selectedProblem || "default"}-${index}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-fade-in group hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-white font-semibold text-sm mb-1.5">
                    {resource.title}
                  </h3>
                  <p className="text-white/70 text-xs mb-2.5 leading-relaxed">
                    {resource.description}
                  </p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-venioGreen hover:text-venioGreen/80 transition-colors text-xs font-medium"
                  >
                    <span>{resource.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="w-full"
              onClick={() => window.location.href = "#contact"}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
