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
  useEffect(() => {
    const title = "Venio Systems - Effortless eDiscovery Platform";
    const description = "The only AI-powered, cloud and on-premises eDiscovery software that's intuitive, easy to adopt, and designed to reduce costs - all in one unified eDiscovery platform.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", description);
      document.head.appendChild(meta);
    }
    const scriptId = "ld-json-index";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = scriptId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Venio Systems",
      "url": window.location.origin + "/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": window.location.origin + "/search?q={query}",
        "query-input": "required name=query"
      }
    });
    document.head.appendChild(ld);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
    return () => {
      const e = document.getElementById(scriptId);
      if (e) e.remove();
    };
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
