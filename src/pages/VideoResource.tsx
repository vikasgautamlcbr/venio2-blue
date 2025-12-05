import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Share2, ArrowLeft, Calendar, FileText, Users, CheckCircle2, MonitorPlay } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const VideoResource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#EAF8F2] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl pointer-events-none"></div>

        <div className="container max-w-7xl relative z-10">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Video Area */}
            <div className="lg:col-span-2 space-y-8">
               {/* Video Player Container */}
               <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/30 shadow-lg">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <img 
                    src="/placeholder.svg" 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                     <div className="flex items-center gap-4">
                        <Badge className="bg-red-600 hover:bg-red-700 text-white border-0 px-3">Live Replay</Badge>
                        <span className="text-white/90 text-sm font-medium flex items-center gap-1">
                          <Users className="w-4 h-4" /> 1.2k views
                        </span>
                     </div>
                  </div>
               </div>

               {/* Video Title & Info */}
               <div className="space-y-6">
                 <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-teal-200 px-3 py-1 rounded-full">
                      Webinar
                    </Badge>
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> 45 mins</div>
                    
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> March 20, 2024</div>
                 </div>
                 
                 <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                   Mastering eDiscovery: <span className="text-primary">Advanced Workflows with Venio</span>
                 </h1>
                 
                 <p className="text-lg text-slate-600 leading-relaxed">
                    Join our product experts as they walk through advanced eDiscovery workflows, 
                    demonstrating how to leverage AI for faster document review and better case outcomes.
                 </p>

                 <div className="flex flex-wrap gap-4 pt-4">
                    <Button variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-white hover:text-teal-700 hover:border-teal-500">
                      <Share2 className="w-4 h-4" /> Share
                    </Button>
                    <Button variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-white hover:text-teal-700 hover:border-teal-500">
                      <FileText className="w-4 h-4" /> Download Slides
                    </Button>
                 </div>
               </div>
            </div>

            {/* Sidebar - Up Next / Chat / Resources */}
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 text-[#3DC47E]" />
                   Key Takeaways
                 </h3>
                 <ul className="space-y-3">
                   {[
                     "Understanding AI-assisted review",
                     "Setting up automated workflows",
                     "Best practices for data culling",
                     "Q&A with product team"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                       
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <MonitorPlay className="w-5 h-5 text-[#3DC47E]" />
                   Related Videos
                 </h3>
                 <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <Link key={item} to="#" className="flex gap-3 group">
                        <div className="w-28 h-20 bg-slate-100 rounded-lg overflow-hidden relative flex-shrink-0 border border-slate-200">
                          <img src="/placeholder.svg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Thumbnail"/>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                            <Play className="w-6 h-6 text-white fill-white opacity-90" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                            Navigating the New UI Interface
                          </h4>
                          <span className="text-xs text-slate-500 mt-1 block">12:45</span>
                        </div>
                      </Link>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transcript Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl">
          <Accordion type="single" collapsible className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 shadow-sm">
            <AccordionItem value="transcript" className="border-b-0">
              <AccordionTrigger className="hover:no-underline py-6 text-slate-900">
                 <span className="text-lg font-semibold">Video Transcript</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                <div className="space-y-4">
                  <p><span className="text-teal-600 font-mono text-xs mr-2 font-bold">[00:00]</span> <strong>Host:</strong> Welcome everyone to today's deep dive session on VenioOne's advanced workflows...</p>
                  <p><span className="text-teal-600 font-mono text-xs mr-2 font-bold">[02:15]</span> <strong>Speaker:</strong> The biggest challenge we see in eDiscovery today is the sheer volume of data...</p>
                  <p><span className="text-teal-600 font-mono text-xs mr-2 font-bold">[15:30]</span> <strong>Speaker:</strong> Let me show you how the AI ranking actually works in real-time...</p>
                  <p className="italic text-sm opacity-70">... (Transcript continues)</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default VideoResource;
