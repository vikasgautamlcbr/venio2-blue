import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Zap, Clock, Users, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Automation & Consistency",
    description: "Eliminate manual spreadsheets and fragmented workflows. Venio automates notices, reminders, and escalations—ensuring every custodian stays aligned from day one.",
  },
  {
    icon: Shield,
    title: "Defensibility & Compliance",
    description: "Maintain complete, audit-ready records of every action. Track acknowledgments, preserve data properly, and reduce the risk of spoliation or sanctions with built-in compliance safeguards.",
  },
  {
    icon: Zap,
    title: "Speed & Visibility",
    description: "Launch holds in minutes, not hours. Monitor custodian responses in real time, get instant visibility into status updates, and keep your entire legal hold process moving without bottlenecks.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Get up and running quickly with intuitive setup. Integrate with existing systems and workflows without lengthy implementation timelines.",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Enable seamless coordination across legal teams, IT, and custodians with centralized communication and task management features.",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Reporting",
    description: "Generate detailed reports for stakeholders, auditors, and court proceedings with just a few clicks.",
  },
];

export const BenefitsSection = ({
  title = "Why Teams Choose Venio Legal Hold",
  subtitle = "Built for modern legal teams who need speed, accuracy, and defensibility",
}: { title?: string; subtitle?: string }) => {
  const FirstBenefitIcon = benefits[0].icon;
  
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Large Card - First benefit (2x2) */}
          <div className="md:col-span-2 md:row-span-2">
            <Card className="glass hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden rounded-2xl">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative h-80 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FirstBenefitIcon className="h-32 w-32 text-accent/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/50 font-mono">automation.gif</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold mb-4">{benefits[0].title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {benefits[0].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Small Cards */}
          {benefits.slice(1).map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <Card key={index} className="glass hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <BenefitIcon className="h-16 w-16 text-accent/40 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/50 font-mono">{benefit.title.toLowerCase().replace(/\s/g, '-')}.gif</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
