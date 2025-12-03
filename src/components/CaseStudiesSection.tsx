import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import amLawFirmBg from "@/assets/case-studies/am-law-firm.jpg";
import federalAgencyBg from "@/assets/case-studies/federal-agency.jpg";
import globalBankBg from "@/assets/case-studies/global-bank.jpg";
import { useState, useEffect } from "react";

const CaseStudiesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const caseStudies = [
    {
      icon: Briefcase,
      title: "AmLaw 50 Firm",
      category: "Law Firm",
      stat: "65%",
      statLabel: "Cost Reduction",
      description: "Discover how a leading AmLaw 50 firm reduced eDiscovery costs by 65% while improving review accuracy and speed.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgImage: amLawFirmBg
    },
    {
      icon: Landmark,
      title: "Federal Agency",
      category: "Government",
      stat: "10x",
      statLabel: "Faster Processing",
      description: "Learn how a federal agency achieved 10x faster document processing while maintaining strict compliance requirements.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      bgImage: federalAgencyBg
    },
    {
      icon: Building2,
      title: "Global Bank",
      category: "Corporation",
      stat: "99.9%",
      statLabel: "Accuracy Rate",
      description: "See how a global financial institution achieved 99.9% accuracy in document review with Venio's AI-powered platform.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgImage: globalBankBg
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            See how leading organizations are transforming their eDiscovery processes with Venio
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel 
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition-shadow duration-500 rounded-3xl">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index}>
                  <Card className="group relative overflow-hidden border-0 rounded-3xl transition-all duration-500">
                    <div className="grid md:grid-cols-2 aspect-[2/1]">
                      {/* Left Side - Image with Overlay */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={study.bgImage} 
                          alt={study.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85"></div>
                        
                        <div className="relative h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
                          <div className={`w-16 h-16 ${study.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                            <study.icon className={`w-8 h-8 ${study.color}`} />
                          </div>
                          
                          <div className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-3">
                            {study.category}
                          </div>
                          
                          <h3 className="text-white text-3xl md:text-4xl font-bold mb-8">
                            {study.title}
                          </h3>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
                            <div className="text-white text-5xl md:text-6xl font-bold mb-1">
                              {study.stat}
                            </div>
                            <div className="text-white/90 text-base font-medium">
                              {study.statLabel}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="relative bg-background p-8 md:p-12 flex flex-col justify-center">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                          {study.description}
                        </p>
                        
                        <Button 
                          size="lg" 
                          className="w-fit group/button"
                        >
                          Read Full Case Study
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/button:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Navigation Buttons - Outside */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Next case study"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </Carousel>

          {/* Enhanced Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-10 bg-primary shadow-lg shadow-primary/50" 
                    : "w-2.5 bg-primary/30 hover:bg-primary/50 hover:w-6"
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-secondary text-lg px-10 py-4">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
