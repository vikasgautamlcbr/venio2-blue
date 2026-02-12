import { Shield, Lock, FileCheck, Award } from "lucide-react";
import InteractiveBackground from "./InteractiveBackground";

const SecuritySection = () => {
  const badges = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Certified",
    },
    {
      icon: Lock,
      title: "GDPR",
      description: "Compliant",
    },
    {
      icon: FileCheck,
      title: "Encryption",
      description: "At Rest & In Transit",
    },
    {
      icon: Award,
      title: "Industry",
      description: "Certified",
    },
  ];

  return (
    <section id="security" className="py-12 bg-white relative overflow-hidden">
      <InteractiveBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Secure & Compliant by Design
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Built to support strict legal and regulatory standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/90 to-secondary/90 text-center p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-on-hover group shadow-lg"
              >
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <badge.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{badge.title}</h3>
                <p className="text-white/90 text-sm font-body">{badge.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 glass p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Your Data is Protected
                </h3>
                <p className="text-muted-foreground font-body">
                  Deploy cloud, on-premises, or hybrid to maintain total control over sensitive data
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
