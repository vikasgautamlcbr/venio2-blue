import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, ArrowLeft, Eye, Maximize2, Code, ZoomIn, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const InfographicResource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#EAF8F2] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[rgba(61,196,126,0.2)] blur-3xl pointer-events-none"></div>
        
        <div className="container max-w-6xl relative z-10">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#3DC47E] transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Content & Context */}
            <div className="lg:col-span-5 space-y-8 sticky top-32">
              <div className="space-y-6">
                <Badge className="bg-[rgba(61,196,126,0.12)] text-[#3DC47E] hover:bg-[rgba(61,196,126,0.2)] border-[#3DC47E] px-3 py-1 rounded-full">
                  Infographic
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                  The State of eDiscovery <span className="text-primary">2024</span>
                </h1>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  Visualizing the key trends, challenges, and opportunities shaping the legal technology landscape this year.
                </p>

                <div className="flex flex-col gap-3 pt-4">
                  <Button size="lg" className="w-full gap-2 bg-[#3DC47E] hover:bg-[#3DC47E] text-white shadow-lg">
                    <Download className="w-4 h-4" />
                    Download High-Res PDF
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full gap-2 border-slate-300 text-slate-700 hover:bg-white hover:text-[#3DC47E] hover:border-[#3DC47E]">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button variant="outline" className="w-full gap-2 border-slate-300 text-slate-700 hover:bg-white hover:text-[#3DC47E] hover:border-[#3DC47E]">
                      <Code className="w-4 h-4" />
                      Embed
                    </Button>
                  </div>
                </div>
              </div>

              {/* Key Stats / Summary */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-[#3DC47E]" />
                  Key Takeaways
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#3DC47E] mt-1.5 flex-shrink-0" />
                    <span>Data volumes have grown <strong>300%</strong> since 2020</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#3DC47E] mt-1.5 flex-shrink-0" />
                    <span>AI adoption is now a priority for <strong>85%</strong> of firms</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#3DC47E] mt-1.5 flex-shrink-0" />
                    <span>Remote collection is the new standard</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - The Infographic */}
            <div className="lg:col-span-7">
              <div className="relative group">
                 {/* Shadow effect behind */}
                 <div className="absolute -inset-1 bg-[rgba(61,196,126,0.15)] rounded-2xl blur-xl opacity-70"></div>
                 
                 <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                    {/* Controls */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="rounded-full shadow-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200">
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full shadow-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200">
                        <Maximize2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Long vertical image placeholder */}
                    <div className="w-full bg-slate-50 flex flex-col items-center p-8 min-h-[1200px]">
                      {/* Header of Infographic */}
                      <div className="w-full h-40 bg-[#3DC47E] rounded-t-lg mb-8 flex items-center justify-center shadow-md">
                         <h2 className="text-white text-2xl font-bold tracking-wide">INFOGRAPHIC HEADER</h2>
                      </div>
                      
                      {/* Body Segments */}
                      <div className="w-full space-y-8">
                         <div className="h-64 bg-white shadow-sm border border-slate-200 rounded-lg p-4 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Chart Section 1</span>
                         </div>
                         <div className="h-64 bg-white shadow-sm border border-slate-200 rounded-lg p-4 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Data Visualization 2</span>
                         </div>
                         <div className="h-64 bg-white shadow-sm border border-slate-200 rounded-lg p-4 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Key Metrics 3</span>
                         </div>
                      </div>

                      {/* Footer of Infographic */}
                      <div className="mt-auto pt-12 text-center text-slate-400 text-sm">
                         <p>Source: Venio Systems 2024 Industry Report</p>
                         <div className="w-32 h-8 bg-slate-200 mx-auto mt-4 rounded"></div>
                      </div>
                    </div>
                 </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Click to expand • Scroll to view full infographic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Related Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container max-w-6xl">
          <h3 className="font-bold text-2xl mb-8 text-slate-900">More Infographics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Link key={item} to="#" className="block group">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:border-[#3DC47E] duration-300">
                   <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                      <img src="/placeholder.svg" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" alt="Thumbnail" />
                   </div>
                   <div className="p-5">
                     <h4 className="font-semibold text-slate-900 group-hover:text-[#3DC47E] transition-colors text-lg">Cloud vs. On-Prem Cost Comparison</h4>
                     <p className="text-sm text-slate-500 mt-2">Visualizing the ROI of cloud migration.</p>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfographicResource;
