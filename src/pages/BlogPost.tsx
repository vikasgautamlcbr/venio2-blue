import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Clock, Bookmark, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#EAF8F2] overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[rgba(61,196,126,0.2)] blur-3xl pointer-events-none"></div>
        
        <div className="container max-w-4xl relative z-10 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#3DC47E] transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <div className="space-y-6">
            <Badge className="bg-[rgba(61,196,126,0.12)] text-[#3DC47E] hover:bg-[rgba(61,196,126,0.2)] border-[#3DC47E] px-3 py-1 text-sm font-medium rounded-full">
              Legal Tech Insights
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 tracking-tight">
              The Future of eDiscovery: <span className="text-primary relative whitespace-nowrap">
                AI-Powered Review
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 pt-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(61,196,126,0.2)] flex items-center justify-center text-[#3DC47E] font-bold">SM</div>
                <span>Sarah Mitchell</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 -mt-12 relative z-20">
        <div className="container max-w-5xl">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
            <img 
              src="/placeholder.svg" 
              alt="Blog featured image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 py-16">
        <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Social Sidebar (Left) */}
          <div className="hidden lg:block lg:col-span-2 sticky top-32 h-fit space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Share</p>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5] hover:bg-blue-50 transition-colors">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 text-slate-600 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-sky-50 transition-colors">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 text-slate-600 hover:text-[#4267B2] hover:border-[#4267B2] hover:bg-indigo-50 transition-colors">
              <Facebook className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 text-slate-400 hover:text-[#3DC47E] transition-colors">
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-[#3DC47E] hover:prose-a:text-[#3DC47E] prose-img:rounded-xl">
              <p className="text-xl text-slate-600 font-medium mb-8">
                Artificial intelligence is revolutionizing the legal industry, particularly in the realm of 
                eDiscovery. This transformation is not just about speed—it's about fundamentally changing 
                how legal teams approach document review and case preparation.
              </p>

              <h2>The Challenge of Traditional Document Review</h2>
              <p>
                Traditional document review processes have long been a bottleneck in litigation. Legal teams 
                often face millions of documents that need to be reviewed, categorized, and analyzed. This 
                manual process is not only time-consuming but also expensive and prone to human error.
              </p>

              <h2>How AI Changes the Game</h2>
              <p>
                Modern AI-powered platforms leverage advanced machine learning algorithms to dramatically 
                improve the efficiency and accuracy of document review. Here's how:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
                {[
                  { title: "Predictive Coding", desc: "Reduces review time by up to 70%" },
                  { title: "Concept Clustering", desc: "Groups similar documents automatically" },
                  { title: "Sentiment Analysis", desc: "Identifies emotional tone and intent" },
                  { title: "Advanced Search", desc: "NLP enables context-aware queries" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#3DC47E] transition-colors">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2>Real-World Impact</h2>
              <p>
                The benefits of AI-powered document review extend beyond just speed and cost savings. Legal 
                teams using these technologies report:
              </p>

              <div className="bg-[#EAF8F2] rounded-2xl p-8 my-8 not-prose border border-[#3DC47E]">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#3DC47E] mb-2">75%</div>
                    <p className="text-sm text-slate-600 font-medium">Reduction in review time</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#3DC47E] mb-2">60%</div>
                    <p className="text-sm text-slate-600 font-medium">Lower discovery costs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#3DC47E] mb-2">95%</div>
                    <p className="text-sm text-slate-600 font-medium">Accuracy rate</p>
                  </div>
                </div>
              </div>

              <h2>Looking Ahead</h2>
              <p>
                As AI technology continues to evolve, we can expect even more sophisticated capabilities. 
                Future developments may include enhanced cross-language support, deeper contextual understanding, 
                and integration with emerging legal technologies.
              </p>

              <p>
                The key to success in this new era is choosing a platform that not only provides powerful AI 
                capabilities but also maintains the flexibility and control that legal professionals require.
              </p>
            </article>

            {/* Subscribe Box */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary via-primary/95 to-primary rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-10 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Venio Insights</h3>
                <p className="text-white/80 mb-6">Get the latest eDiscovery trends delivered to your inbox.</p>
                <div className="max-w-xl mx-auto grid gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-accent w-full md:w-[60%] mx-auto"
                  />
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group rounded-xl mx-auto">Subscribe</Button>
                </div>
                <p className="text-white/70 text-xs mt-3">No spam • Unsubscribe anytime</p>
              </div>
            </div>
          </div>

          {/* Table of Contents (Right) */}
          <div className="hidden lg:block lg:col-span-2 sticky top-32 h-fit">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">On this page</p>
             <ul className="space-y-3 text-sm border-l border-slate-200">
             <li className="pl-4 border-l-2 border-[#3DC47E] text-[#3DC47E] font-medium cursor-pointer">The Challenge</li>
             <li className="pl-4 border-l-2 border-transparent text-slate-500 hover:text-[#3DC47E] hover:border-[#3DC47E] cursor-pointer transition-all">How AI Helps</li>
             <li className="pl-4 border-l-2 border-transparent text-slate-500 hover:text-[#3DC47E] hover:border-[#3DC47E] cursor-pointer transition-all">Real-World Impact</li>
             <li className="pl-4 border-l-2 border-transparent text-slate-500 hover:text-[#3DC47E] hover:border-[#3DC47E] cursor-pointer transition-all">Looking Ahead</li>
             </ul>
          </div>

        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-[#3DC47E] bg-white overflow-hidden rounded-2xl">
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Related article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">Case Study</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#3DC47E] transition-colors line-clamp-2">
                    How Fortune 500 Companies Are Transforming Legal Operations
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    Discover how leading enterprises are leveraging AI to streamline their legal workflows.
                  </p>
                  <Link to="#" className="inline-flex items-center text-[#3DC47E] font-semibold text-sm group-hover:underline">
                    Read Article <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default BlogPost;
