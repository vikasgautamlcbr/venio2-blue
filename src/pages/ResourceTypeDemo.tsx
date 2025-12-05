import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { FileText, BookOpen, Newspaper, FileCheck, Book, Video, FileDown, Megaphone, Wrench, BarChart3, ArrowRight } from "lucide-react";

const typeMap: Record<string, { label: string; icon: React.ComponentType<{ className?: string }>; color: string; description: string }> = {
  "case-studies": { label: "Case Studies", icon: FileCheck, color: "text-accent", description: "Real-world outcomes and measurable impact from Venio deployments." },
  "blogs": { label: "Blogs", icon: Newspaper, color: "text-primary", description: "Insights, product tips, and industry commentary." },
  "white-papers": { label: "White Papers", icon: FileText, color: "text-secondary", description: "Deep dives on eDiscovery strategy, governance, and AI adoption." },
  "product-briefs": { label: "Product Briefs", icon: FileDown, color: "text-accent", description: "Concise feature overviews designed for quick evaluation." },
  "ebooks": { label: "eBooks", icon: Book, color: "text-primary", description: "Comprehensive guides to modern eDiscovery workflows." },
  "videos": { label: "Videos", icon: Video, color: "text-secondary", description: "Short demos, explainers, and customer highlights." },
  "brochures": { label: "Brochures", icon: FileDown, color: "text-accent", description: "Visual product summaries for stakeholders and buyers." },
  "press-releases": { label: "Press Releases", icon: Megaphone, color: "text-primary", description: "Official announcements and company milestones." },
  "how-to-guides": { label: "How-to Guides", icon: Wrench, color: "text-secondary", description: "Step-by-step instructions to get tasks done faster." },
  "infographics": { label: "Infographics", icon: BarChart3, color: "text-accent", description: "Data-heavy visuals that communicate results at a glance." },
};

const sampleItems = (typeKey: string) => {
  const base = typeMap[typeKey]?.label || "Resource";
  return Array.from({ length: 6 }).map((_, i) => ({
    title: `${base} Example ${i + 1}`,
    desc: "Placeholder description showcasing consistent styling across resource types.",
    badge: typeMap[typeKey]?.label || "Resource",
  }));
};

export default function ResourceTypeDemo() {
  const params = useParams();
  const typeKey = (params.type || "").toLowerCase();
  const config = typeMap[typeKey] || typeMap["case-studies"];
  const Icon = config.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/70" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Icon className={`w-8 h-8 ${config.color}`} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{config.label}</h1>
            </div>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed">{config.description}</p>
            <div className="mt-8 flex gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                <Link to="/resources">
                  View All Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-4">Download Sample</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-b from-muted/30 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleItems(typeKey).map((item, idx) => (
                <Card key={idx} className="glass rounded-2xl border-2 border-muted-foreground/10 hover:border-accent/40 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <Badge variant="outline" className="ml-2">{item.badge}</Badge>
                    </div>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

