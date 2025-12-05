import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, CheckCircle2, ArrowLeft, Eye, Star, Shield, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhitePaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    console.log("Download initiated");
  };

  const handlePreview = () => {
    console.log("Preview opened");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="relative pt-32 pb-20 bg-[#EAF8F2] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3DC47E]/20 blur-3xl pointer-events-none"></div>

        <div className="container max-w-6xl relative z-10">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-[rgba(61,196,126,0.12)] text-[#3DC47E] hover:bg-[rgba(61,196,126,0.2)] border-[#3DC47E] px-3 py-1 text-sm font-medium rounded-full">
                  White Paper
                </Badge>
                <span className="text-slate-500 text-sm font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> Latest Research
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 tracking-tight">
                The Future of Legal AI: <span className="text-primary relative whitespace-nowrap">
                  2025 Outlook
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                An in-depth analysis of how artificial intelligence is reshaping the legal landscape, 
                from generative AI models to automated workflow governance.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group rounded-xl"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-white hover:text-primary hover:border-primary/50 text-lg px-8 py-6 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300"
                  onClick={handlePreview}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500 pt-4 mt-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>PDF • 24 pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>5,120 downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Global Survey</span>
                </div>
              </div>
            </div>

            <div className="relative lg:h-auto flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[8.5/11] group">
                <div className="absolute -inset-2 bg-[#3DC47E]/25 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-2xl border border-slate-200 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/placeholder.svg" 
                    alt="White Paper preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <Button className="bg-white text-slate-900 hover:bg-slate-50 shadow-lg border border-slate-200 rounded-full px-6">
                      <Eye className="w-4 h-4 mr-2" />
                      Click to Preview
                    </Button>
                  </div>
                </div>
                <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Executive Summary</h2>
             <p className="text-slate-500 text-lg max-w-2xl mx-auto">
               This white paper explores the critical intersections of technology, law, and ethics.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Generative AI Impact", description: "Understanding how LLMs are being deployed in document review and drafting." },
              { title: "Regulatory Compliance", description: "Navigating the evolving landscape of AI regulations and data privacy." },
              { title: "Security Frameworks", description: "Best practices for securing sensitive legal data in an AI-driven world." },
              { title: "Workflow Automation", description: "Case studies of firms achieving hyper-efficiency through smart automation." },
              { title: "Talent Transformation", description: "How the role of legal professionals is changing and what skills are needed." },
              { title: "Strategic Roadmap", description: "A guide for legal leaders to implement AI strategies effectively." }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[rgba(61,196,126,0.3)] hover:shadow-lg hover:shadow-[rgba(61,196,126,0.25)] transition-all duration-300 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(61,196,126,0.12)] text-[#3DC47E] flex items-center justify-center group-hover:bg-[#3DC47E] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-[#3DC47E] transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default WhitePaper;
