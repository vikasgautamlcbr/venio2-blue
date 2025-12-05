import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, CheckSquare, Wrench, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HowToGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="relative pt-32 pb-24 bg-[#EAF8F2] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#3DC47E]/20 blur-3xl pointer-events-none"></div>
        
        <div className="container max-w-4xl relative z-10 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#3DC47E] transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <div className="space-y-6">
            <Badge className="bg-[rgba(61,196,126,0.12)] text-[#3DC47E] hover:bg-[rgba(61,196,126,0.2)] border-[#3DC47E] px-3 py-1 text-sm font-medium rounded-full">
              How-to Guide
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 tracking-tight">
              5 Steps to Streamline Your <span className="text-primary relative whitespace-nowrap">
                eDiscovery Workflow
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 pt-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Technical Team</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated: March 2024</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 -mt-12 relative z-20">
        <div className="container max-w-4xl">
          <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8 md:p-12">
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600">
              <p className="lead text-xl text-slate-600 font-medium mb-8">
                Efficient data processing is the backbone of any successful eDiscovery project. 
                Follow these five steps to reduce errors, speed up throughput, and lower costs.
              </p>

              <div className="space-y-8 my-12">
                {[
                  { 
                    num: "1", 
                    title: "Assess Your Data Sources", 
                    desc: "Before you begin ingestion, identify all data types (email, chat, mobile, slack). Use Venio's pre-assessment tool to flag potential exception files early."
                  },
                  { 
                    num: "2", 
                    title: "Configure Deduplication Settings", 
                    desc: "Choose between global or custodian-level deduplication. For most multi-custodian matters, global deduplication can reduce volume by up to 40%."
                  },
                  { 
                    num: "3", 
                    title: "Apply Keyword Filters", 
                    desc: "Run a preliminary keyword search during processing (culling) rather than waiting for review. This keeps non-relevant documents out of the review workspace."
                  },
                  {
                    num: "4",
                    title: "Automate Exception Handling",
                    desc: "Set up automated retry rules for password-protected files or corrupted archives. Venio allows you to script these actions to run overnight."
                  },
                  {
                    num: "5",
                    title: "Validate and Promote",
                    desc: "Always run a sampling validation before promoting to review. Check that text extraction and metadata mapping are accurate."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-xl bg-slate-50 hover:bg-[#EAF8F2] transition-colors border border-transparent hover:border-[#3DC47E]">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgba(61,196,126,0.12)] text-[#3DC47E] flex items-center justify-center text-xl font-bold shadow-sm">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 mt-1 text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#EAF8F2] border border-[#3DC47E] rounded-xl p-8 my-12">
                <h3 className="flex items-center gap-2 text-[#3DC47E] font-bold text-xl mb-4 mt-0">
                  <Wrench className="w-5 h-5" />
                  Pro Tip: Use Processing Templates
                </h3>
                <p className="mb-0 text-[#1f8b56]">
                  Save your processing settings (deduplication rules, time zone settings, OCR priority) as a template 
                  in VenioOne. This ensures consistency across all your cases and saves setup time for your project managers.
                </p>
              </div>

            </article>

            <div className="mt-16 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Found this helpful?</h3>
                  <p className="text-slate-500 text-sm">Check out our other technical guides.</p>
                </div>
                <Button variant="outline" size="lg" className="gap-2 border-slate-300 hover:border-[#3DC47E] hover:text-[#3DC47E]">
                  <Share2 className="w-4 h-4" />
                  Share Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default HowToGuide;
