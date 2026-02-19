import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Users, Shield, FileText, BarChart3, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  imagePlaceholder: string;
}

const features: Feature[] = [
  {
    icon: Bell,
    title: "Automated Notifications & Reminders",
    description: "Eliminate manual follow-ups with intelligent, automated custodian notifications",
    details: [
      "Customizable email templates with brand consistency",
      "Smart escalation workflows for non-responses",
      "Multi-channel notifications (email, SMS, portal)",
      "Scheduled reminders with configurable intervals",
    ],
    imagePlaceholder: "Notification Dashboard",
  },
  {
    icon: Users,
    title: "Custodian Management Portal",
    description: "Empower custodians with a self-service portal for seamless interaction",
    details: [
      "One-click acknowledgment and confirmation",
      "Secure document upload and preservation",
      "Real-time status tracking and updates",
      "Interactive Q&A with legal team",
    ],
    imagePlaceholder: "Custodian Portal Interface",
  },
  {
    icon: Shield,
    title: "Complete Audit & Defensibility",
    description: "Build ironclad defensibility with comprehensive audit trails",
    details: [
      "Timestamped records of every action",
      "Immutable audit logs for legal review",
      "Exportable compliance reports",
      "Chain-of-custody documentation",
    ],
    imagePlaceholder: "Audit Trail View",
  },
  {
    icon: FileText,
    title: "Legal Hold Templates",
    description: "Standardize and accelerate hold deployment with reusable templates",
    details: [
      "Library of pre-approved hold notices",
      "Custom template builder with legal review",
      "Matter-specific template variations",
      "Version control and approval workflow",
    ],
    imagePlaceholder: "Template Library",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards & Analytics",
    description: "Gain instant visibility with comprehensive reporting and analytics",
    details: [
      "Live status dashboard for all active holds",
      "Custodian response rate tracking",
      "Matter-level and portfolio analytics",
      "Custom report builder with exports",
    ],
    imagePlaceholder: "Analytics Dashboard",
  },
  {
    icon: CheckCircle,
    title: "Release & Lifecycle Management",
    description: "Manage the complete hold lifecycle from issuance to release",
    details: [
      "Controlled release workflows with approvals",
      "Bulk operations for efficiency",
      "Release confirmation and documentation",
      "Post-release compliance tracking",
    ],
    imagePlaceholder: "Release Workflow",
  },
];

export const ScrollFeatureAccordion = ({
  title = "Complete Legal Hold Platform",
  subtitle = "Everything you need to manage legal holds efficiently and defensibly",
  features: override,
  accentAlways = false,
}: { title?: string; subtitle?: string; features?: Feature[]; accentAlways?: boolean }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Match heights
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current && imageContainerRef.current) {
        const leftHeight = containerRef.current.offsetHeight;
        imageContainerRef.current.style.height = `${leftHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Update after content renders
    const timeout = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <section id="features" className="relative py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Accordion Items */}
          <div className="space-y-3" ref={containerRef} id="features-list">
            {(override ?? features).map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "cursor-pointer transition-all duration-700",
                    "scroll-mt-32"
                  )}
                >
                  <Card
                    className={cn(
                      "transition-all duration-700 border-2 w-full",
                      isActive
                        ? "border-accent shadow-2xl shadow-accent/30 bg-accent/10 scale-105"
                        : "border-border/30 hover:border-accent/40 bg-card/30 scale-95 opacity-60"
                    )}
                  >
                    <CardContent className={cn(
                      "transition-all duration-500",
                      isActive ? "p-8" : "p-6"
                    )}>
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-700",
                            isActive
                              ? "w-16 h-16 bg-accent text-white scale-110 shadow-lg shadow-accent/50"
                              : accentAlways
                                ? "w-12 h-12 bg-accent text-white"
                                : "w-12 h-12 bg-secondary/10 text-secondary/70"
                          )}
                        >
                          <Icon className={cn(
                            "transition-all duration-500",
                            isActive ? "h-8 w-8" : "h-6 w-6"
                          )} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={cn(
                              "font-semibold transition-all duration-500",
                              isActive ? "text-2xl mb-3 text-foreground" : "text-xl mb-0 text-foreground/70"
                            )}
                          >
                            {feature.title}
                          </h3>
                          
                          {/* Description - only shown when active */}
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-500",
                              isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                            )}
                          >
                            <p className="text-base text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Right side - Image Placeholder (sticky) */}
          <div className="lg:sticky lg:top-32 hidden lg:block">
            <div ref={imageContainerRef} className="relative">
              {(override ?? features).map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <Card className="glass overflow-hidden border-2 border-accent/30 h-full">
                    <CardContent className="p-0 h-full">
                      <div className="h-full bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0">
                          <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center p-8">
                          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-accent/10 flex items-center justify-center backdrop-blur border-2 border-accent/30">
                            <feature.icon className="h-12 w-12 text-accent" />
                          </div>
                          <p className="text-2xl font-semibold text-foreground mb-3">
                            {feature.imagePlaceholder}
                          </p>
                          <p className="text-base text-muted-foreground">
                            Product Screenshot Placeholder
                          </p>
                        </div>

                        {/* Decorative grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
