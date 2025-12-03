/**
 * DataPointsSection Component
 * 
 * STYLE NAME: "Venio Glass Glow Cards" or "Gradient Glow Metrics"
 * 
 * This component showcases key metrics using the "Venio Glass Glow Cards" design pattern:
 * - Glassmorphic cards with backdrop blur (glass effect)
 * - Gradient backgrounds with radial overlays
 * - Hover effects with glowing borders and shadows
 * - Gradient text for values (from primary to accent)
 * - Icon badges with subtle borders
 * - Scale transform on hover
 * - Primary-to-accent color scheme throughout
 * 
 * To reuse this style on other pages:
 * 1. Copy the card structure with glass effects
 * 2. Use gradient text: bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent
 * 3. Add hover glow: hover:shadow-[0_0_40px_rgba(96,165,250,0.3)]
 * 4. Include backdrop blur: backdrop-blur-sm
 * 5. Use primary/accent gradient overlays
 */

import { TrendingUp, DollarSign, Clock, Shield } from "lucide-react";

const dataPoints = [
  {
    icon: TrendingUp,
    value: "10x",
    label: "Faster document review",
    description: "AI-powered review dramatically accelerates workflows"
  },
  {
    icon: DollarSign,
    value: "70%",
    label: "Cost savings achieved",
    description: "Reduced overhead and efficient resource allocation"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Cloud availability",
    description: "Access your data securely from anywhere, anytime"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime guarantee",
    description: "Enterprise-grade reliability and security"
  }
];

export const DataPointsSection = () => {
  return (
    <section id="data" className="py-24 relative overflow-hidden">
      {/* Venio branded gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Metrics for Law Firms
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world performance indicators that show how Venio accelerates law firm workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
            >
              {/* Venio glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                  {point.value}
                </h3>
                
                <p className="text-lg font-semibold mb-2 text-foreground">{point.label}</p>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
