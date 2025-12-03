import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl">
          <Link to="/resources" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <div className="space-y-6">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">
              Legal Tech Insights
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of eDiscovery: AI-Powered Document Review
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Sarah Mitchell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
              </div>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 pb-16">
        <div className="container max-w-4xl">
          <div className="aspect-video rounded-2xl overflow-hidden glass-dark">
            <img 
              src="/placeholder.svg" 
              alt="Blog featured image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="container max-w-3xl">
          <article className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
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

            <ul>
              <li>
                <strong>Predictive Coding:</strong> AI learns from attorney decisions to predict relevance 
                across massive document sets, reducing review time by up to 70%.
              </li>
              <li>
                <strong>Concept Clustering:</strong> Automatically groups similar documents together, making 
                it easier to identify patterns and key evidence.
              </li>
              <li>
                <strong>Sentiment Analysis:</strong> Identifies emotional tone and intent in communications, 
                helping attorneys understand context quickly.
              </li>
              <li>
                <strong>Advanced Search:</strong> Natural language processing enables intuitive searches that 
                understand context and meaning, not just keywords.
              </li>
            </ul>

            <h2>Real-World Impact</h2>
            <p>
              The benefits of AI-powered document review extend beyond just speed and cost savings. Legal 
              teams using these technologies report:
            </p>

            <Card className="glass-dark border-border/50 p-8 my-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">75%</div>
                  <p className="text-sm text-muted-foreground">Reduction in review time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">60%</div>
                  <p className="text-sm text-muted-foreground">Lower discovery costs</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Accuracy rate</p>
                </div>
              </div>
            </Card>

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

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Found this helpful?</h3>
                <p className="text-muted-foreground">Share this article with your network</p>
              </div>
              <Button variant="outline" size="lg" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-4 pb-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="glass-dark border-border/50 overflow-hidden group hover:border-secondary/50 transition-all">
                <div className="aspect-video bg-secondary/10 relative overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Related article"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                    Case Study
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                    How Fortune 500 Companies Are Transforming Legal Operations
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover how leading enterprises are leveraging AI to streamline their legal workflows.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-secondary">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
