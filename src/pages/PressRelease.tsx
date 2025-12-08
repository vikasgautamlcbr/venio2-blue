import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Share2, Megaphone, MapPin, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const PressRelease = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="relative pt-32 pb-24 bg-[#EAF8F2] overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#3DC47E]/20 blur-3xl pointer-events-none"></div>
        
        <div className="container max-w-4xl relative z-10 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#3DC47E] transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <div className="space-y-6">
            <Badge className="bg-[rgba(61,196,126,0.12)] text-[#3DC47E] hover:bg-[rgba(61,196,126,0.2)] border-[#3DC47E] px-3 py-1 text-sm font-medium rounded-full">
              Press Release
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 tracking-tight">
              Venio Systems Announces Major Platform Update with <span className="text-primary relative whitespace-nowrap">
                Generative AI Integration
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 pt-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Fairfax, VA</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>April 2, 2024</span>
              </div>
              
              <span className="font-bold text-[#3DC47E]">FOR IMMEDIATE RELEASE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 -mt-12 relative z-20">
        <div className="container max-w-5xl">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
            <img 
              src="/placeholder.svg" 
              alt="Press Release featured image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
               <div className="flex items-center gap-2">
                 <Megaphone className="w-5 h-5 text-[#3DC47E]" />
                 <span className="font-semibold">Official Announcement</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container max-w-3xl">
          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600">
            <p className="lead text-xl text-slate-600 font-medium mb-8">
              <strong className="text-slate-900">FAIRFAX, VA</strong> — Venio Systems, a leading provider of unified eDiscovery software, 
              today announced the release of VenioOne 2024, featuring groundbreaking integration with generative AI technologies.
            </p>

            <h2>Revolutionizing Document Review</h2>
            <p>
              The new update introduces "Venio AI Assistant," a tool designed to help legal teams summarize documents, 
              extract key entities, and draft case memos directly within the review platform.
            </p>

            <blockquote className="bg-slate-50 border-l-4 border-[#3DC47E] p-6 rounded-r-xl not-italic my-8">
              "This is a pivotal moment for the legal industry," said the CEO of Venio Systems. "By embedding 
              generative AI directly into our unified workflow, we are giving our clients the ability to work 
              smarter and faster than ever before."
            </blockquote>

            <h2>Key Features of the Update</h2>
            <ul className="space-y-2">
              <li><strong>Automated Summarization:</strong> Instantly generate summaries for long documents.</li>
              <li><strong>Natural Language Search:</strong> Query your dataset using conversational language.</li>
              <li><strong>Enhanced Security:</strong> Enterprise-grade security ensuring client data remains private.</li>
            </ul>

            <h2>About Venio Systems</h2>
            <p>
              Venio Systems is a team of innovators and legal professionals who are passionate about providing 
              the most comprehensive eDiscovery solution on the market.
            </p>
            
            
            
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">Media Contact</h3>
              <p className="mb-0 text-sm">
                <strong>Name:</strong> John Doe<br/>
                <strong>Email:</strong> press@veniosystems.com<br/>
                <strong>Phone:</strong> +1 (800) 555-0123
              </p>
            </div>

          </article>

          <div className="mt-16 pt-8 flex items-center justify-between">
            <Button variant="outline" className="gap-2 border-slate-300 hover:border-[#3DC47E] hover:text-[#3DC47E]">
              <Printer className="w-4 h-4" /> Print
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2 border-slate-300 hover:border-[#3DC47E] hover:text-[#3DC47E]">
                <Share2 className="w-4 h-4" /> Share Release
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 h-12 rounded-xl font-semibold shadow-lg hover:shadow-accent/50 transition-all duration-300">
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default PressRelease;
