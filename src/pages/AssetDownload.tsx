import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, CheckCircle2, ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AssetDownload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // In production, this would trigger the actual download
    console.log("Download initiated");
  };

  const handlePreview = () => {
    // In production, this would open a preview modal or new tab
    console.log("Preview opened");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-6xl">
          <Link to="/resources" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                Case Study
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AmLaw 50 Firm Achieves 60% Cost Reduction
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how a leading law firm transformed their eDiscovery process, 
                reducing costs by 60% while improving review accuracy and speed.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="gap-2 bg-secondary hover:bg-secondary/90 text-white"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5" />
                  Download Case Study
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={handlePreview}
                >
                  <Eye className="w-5 h-5" />
                  Preview
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>PDF • 12 pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>2,847 downloads</span>
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="relative">
              <div className="glass-dark rounded-2xl p-8 border border-border/50">
                <div className="aspect-[8.5/11] rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-transparent border border-border/50">
                  <img 
                    src="/placeholder.svg" 
                    alt="Document preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="px-4 py-24 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">What You'll Learn</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            This comprehensive case study reveals the strategies and results from a successful eDiscovery transformation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cost Reduction Strategy",
                description: "How the firm achieved 60% reduction in eDiscovery costs through AI-powered automation"
              },
              {
                title: "Workflow Optimization",
                description: "Step-by-step breakdown of the new efficient workflow that cut review time in half"
              },
              {
                title: "Technology Implementation",
                description: "Detailed look at the technology stack and integration process"
              },
              {
                title: "Team Training",
                description: "How the legal team was onboarded and trained on the new platform"
              },
              {
                title: "Measurable Results",
                description: "Concrete metrics and ROI analysis from the first 6 months"
              },
              {
                title: "Best Practices",
                description: "Key learnings and recommendations for firms considering similar transformations"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-dark border-border/50 p-6 hover:border-secondary/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary/10 p-2 group-hover:bg-secondary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-24">
        <div className="container max-w-6xl">
          <Card className="glass-dark border-border/50 p-12">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-3">60%</div>
                <p className="text-muted-foreground">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-3">50%</div>
                <p className="text-muted-foreground">Faster Review</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-3">95%</div>
                <p className="text-muted-foreground">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-3">2M+</div>
                <p className="text-muted-foreground">Docs Processed</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your eDiscovery Process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Download this case study to learn how you can achieve similar results
          </p>
          <Button 
            size="lg" 
            className="gap-2 bg-secondary hover:bg-secondary/90 text-white"
            onClick={handleDownload}
          >
            <Download className="w-5 h-5" />
            Download Case Study
          </Button>
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-4 pb-24">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Product Brief", title: "Venio Review Platform Overview", badge: "PDF" },
              { type: "Case Study", title: "Federal Agency Workflow Success", badge: "PDF" },
              { type: "Guide", title: "10 Points Checklist for Doc Review", badge: "PDF" }
            ].map((item, index) => (
              <Card key={index} className="glass-dark border-border/50 overflow-hidden group hover:border-secondary/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-transparent relative flex items-center justify-center">
                  <FileText className="w-16 h-16 text-secondary/50" />
                </div>
                <div className="p-6">
                  <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                    {item.type}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <Button variant="link" className="p-0 h-auto text-secondary">
                    Download →
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

export default AssetDownload;
