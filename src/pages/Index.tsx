import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InteractiveDemosSection from "@/components/InteractiveDemosSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SecuritySection from "@/components/SecuritySection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <InteractiveDemosSection />
        <CaseStudiesSection />
        <ProblemSolutionSection />
        <SecuritySection />
        <CTABanner />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
