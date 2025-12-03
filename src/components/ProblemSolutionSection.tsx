import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

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

const problems: Problem[] = [
  {
    id: "data-overload",
    label: "Data Overload",
    solution: "Venio helps you take control of exploding data volumes by reducing massive datasets early in the discovery process. Through AI-driven culling, deduplication, and advanced filtering, you quickly eliminate noise and focus only on what matters. The result is a dramatically smaller, more manageable review set.",
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
    solution: "Venio processes emails, chats, cloud apps, multimedia, and modern data formats at high speed. It normalizes complex, dynamic data so your reviewers don't struggle with inconsistent structures. Everything becomes searchable, analyzable, and defensible.",
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
    solution: "Venio ECA gives teams fast clarity with instant analytics, search, custodian insights, and data reduction. You can understand scope, risk, and cost before you commit to full review. This lets you make smarter strategic decisions earlier in the matter.",
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
    solution: "Venio eliminates manual, inconsistent legal hold processes with automated notices, reminders, acknowledgments, and defensible tracking. Custodians receive clear instructions, and every action is logged for audit and compliance. Your team gets full visibility and reduces risk of preservation failures.",
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
    solution: "Venio accelerates document review with AI-powered prioritization, smart batching, and continuous active learning that gets smarter as you work. Review teams see the most relevant documents first, reducing hours of manual effort. You get faster insights, higher accuracy, and significantly shorter review cycles.",
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
    solution: "Venio automates repetitive tasks like tagging, routing, batching, and searching so your team can focus on strategy—not busywork. AI and workflow automation remove human bottlenecks and reduce errors across every stage. You gain speed, accuracy, and more time for meaningful analysis.",
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
    solution: "Venio replaces disconnected tools with one unified platform for Legal Hold, ECA, Review, and Production. With all your workflows, data, and teams in one system, you eliminate handoffs, delays, and unnecessary complexity. Collaboration improves—and your entire process becomes faster and more consistent.",
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
    solution: "Venio reduces overall eDiscovery spend by shrinking your dataset early and automating time-consuming workflows across the lifecycle. With flexible cloud or on-prem deployments and efficient analytics, you avoid unnecessary hosting and review costs. Teams achieve predictable budgets without sacrificing quality or defensibility.",
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
    solution: "Venio protects sensitive data with secure uploads, role-based access controls, and a fully defensible audit trail. Whether deployed in the cloud or on-prem, your information stays governed and protected throughout the discovery process. You reduce risk while maintaining complete visibility and control.",
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

const ProblemSolutionSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<ProblemId | null>(null);

  const currentProblem = selectedProblem 
    ? problems.find((p) => p.id === selectedProblem) 
    : null;

  const handleIndustrySelect = (industryId: IndustryId) => {
    setSelectedIndustry(industryId);
    setSelectedProblem(null);
  };

  const handleBackToIndustries = () => {
    setSelectedIndustry(null);
    setSelectedProblem(null);
  };

  return (
    <section id="problem" className="relative py-24 px-4 overflow-hidden gradient-animated">
      {/* Animated Background Elements - Match Hero Section */}
      <div className="absolute inset-0">
        {/* Large Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
        <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
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
                  {problems.map((problem) => (
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
                  ))}
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
