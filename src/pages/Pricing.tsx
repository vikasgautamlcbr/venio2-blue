import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, TrendingDown, DollarSign, Users, Database, Clock } from "lucide-react";
import ROICalculator from "@/components/ROICalculator";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { useEffect } from "react";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "calculator", label: "Calculator" },
];

const Pricing = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Pay only for what you use with clear, upfront pricing."
    },
    {
      icon: TrendingDown,
      title: "Cost-Effective",
      description: "Save up to 80% compared to traditional eDiscovery platforms without compromising on features."
    },
    {
      icon: Users,
      title: "Unlimited Users",
      description: "Add as many team members as you need at no additional per-user cost."
    },
    {
      icon: Database,
      title: "Scalable Storage",
      description: "Grow your data volume seamlessly without worrying about storage limitations."
    },
    {
      icon: Clock,
      title: "No Long-Term Contracts",
      description: "Flexible monthly billing with no lock-in periods. Cancel or adjust anytime."
    },
    {
      icon: Check,
      title: "All Features Included",
      description: "Access our complete suite of tools including AI-powered search, analytics, and automation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[75vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-20 right-24 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-[60%] right-36 w-56 h-56 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl flex-1 flex items-center justify-center">
          <div className="text-center animate-fade-in w-full">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Quote in Seconds
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Transparent, flexible pricing that scales with your needs. No hidden fees, no surprises.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
              Request a Quote
            </Button>
          </div>
        </div>

        {/* Client Logo Carousel - Full Width */}
        <div className="relative z-10 w-full mt-16">
          <p className="text-white/70 text-sm mb-6 font-body text-center"><span className="border-b-2 border-[#3DC47E] pb-1">Trusted by leading organizations</span></p>
          <div className="overflow-hidden py-6">
            <div className="flex gap-24 animate-scroll">
              {/* First set of logos */}
              {[
                { src: amentum, name: "Amentum" },
                { src: array, name: "Array" },
                { src: cds, name: "CDS" },
                { src: consilio, name: "Consilio" },
                { src: epario, name: "Epario" },
                { src: haugPartners, name: "Haug Partners" },
                { src: nixonPeabody, name: "Nixon Peabody" },
                { src: proteus, name: "Proteus" }
              ].map((logo, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { src: amentum, name: "Amentum" },
                { src: array, name: "Array" },
                { src: cds, name: "CDS" },
                { src: consilio, name: "Consilio" },
                { src: epario, name: "Epario" },
                { src: haugPartners, name: "Haug Partners" },
                { src: nixonPeabody, name: "Nixon Peabody" },
                { src: proteus, name: "Proteus" }
              ].map((logo, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        {/* Venio branded gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Venio Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience cost-effective eDiscovery with transparent pricing and unlimited flexibility
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
              >
                {/* Venio glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-muted-foreground text-lg">
              See how much you can save by switching to Venio
            </p>
          </div>

          <ROICalculator />

          <div className="text-center mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Price Comparison</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Industry-standard pricing based on per-GB storage costs. All competitors charge additional fees for users, processing, and analytics.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-semibold">Platform</th>
                      <th className="text-center p-6 font-semibold">Price per GB/Month</th>
                      <th className="text-center p-6 font-semibold">User Fees</th>
                      <th className="text-center p-6 font-semibold">Processing Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border bg-primary/5">
                      <td className="p-6 font-semibold text-primary">Venio</td>
                      <td className="p-6 text-center font-bold text-primary">$0.50</td>
                      <td className="p-6 text-center text-green-600">Unlimited</td>
                      <td className="p-6 text-center text-green-600">Included</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6">Relativity</td>
                      <td className="p-6 text-center">$2.50</td>
                      <td className="p-6 text-center text-muted-foreground">$50-100/user</td>
                      <td className="p-6 text-center text-muted-foreground">$0.15/GB</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6">Everlaw</td>
                      <td className="p-6 text-center">$2.00</td>
                      <td className="p-6 text-center text-muted-foreground">$75/user</td>
                      <td className="p-6 text-center text-muted-foreground">$0.10/GB</td>
                    </tr>
                    <tr>
                      <td className="p-6">Nuix</td>
                      <td className="p-6 text-center">$2.25</td>
                      <td className="p-6 text-center text-muted-foreground">$60-90/user</td>
                      <td className="p-6 text-center text-muted-foreground">$0.12/GB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-3 text-lg">Pricing Methodology</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Pricing based on publicly available information and industry reports from 2024</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Competitor pricing includes base storage costs plus typical user licensing and processing fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Venio includes all features (unlimited users, processing, analytics) in the base price</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Actual competitor costs may vary based on contract terms and volume discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
