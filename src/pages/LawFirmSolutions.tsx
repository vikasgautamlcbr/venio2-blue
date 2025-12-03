import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnnaChat } from "@/components/AnnaChat";
import { DataPointsSection } from "@/components/DataPointsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ResourcesCarousel } from "@/components/ResourcesCarousel";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";
import { useEffect } from "react";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "clients", label: "Clients" },
  { id: "problem", label: "Problem" },
  { id: "data", label: "Data" },
  { id: "case-studies", label: "Case Studies" },
  { id: "testimonials", label: "Testimonials" },
  { id: "resources", label: "Resources" },
];

const LawFirmSolutions = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clientLogos = [
    { name: "Amentum", src: amentum },
    { name: "Consilio", src: consilio },
    { name: "Array", src: array },
    { name: "Haug Partners", src: haugPartners },
    { name: "Nixon Peabody", src: nixonPeabody },
    { name: "Proteus", src: proteus },
    { name: "CDS", src: cds },
    { name: "Epario", src: epario },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden gradient-animated pt-32 pb-36">
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="relative z-10 container mx-auto px-6 max-w-5xl flex-1 flex items-center">
            <div className="text-center animate-fade-in w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Transform Your Law Firm's eDiscovery Process
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Cut costs by 60%, accelerate review by 70%, and deliver exceptional results with Venio's AI-powered eDiscovery platform designed for modern law firms.
              </p>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 glow-accent-hover group"
              >
                Talk to an Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Client Logo Carousel - Full Width */}
          <div className="relative z-10 w-full mt-16">
            <p className="text-white/70 text-sm mb-6 font-body text-center">Trusted by leading organizations</p>
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

        {/* Problem and Solution Section */}
        <ProblemSolutionSection />

        {/* AI Chatbot Section */}
        <section id="clients" className="relative py-20 overflow-hidden gradient-animated">
          {/* Dynamic Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ask Anna: Your eDiscovery Assistant
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Get instant answers about how Venio can solve your specific challenges. Anna is here to help.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AnnaChat />
            </div>
          </div>
        </section>

        {/* Data Points Section */}
        <DataPointsSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Resources Section */}
        <ResourcesCarousel />
      </main>

      <Footer />
    </div>
  );
};

export default LawFirmSolutions;
