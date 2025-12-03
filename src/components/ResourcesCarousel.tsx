import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, BookOpen, Video, FileCheck } from "lucide-react";

const resources = [
  {
    category: "Blog",
    icon: FileText,
    title: "5 Ways AI Transforms eDiscovery for Law Firms",
    description: "Discover how artificial intelligence is revolutionizing document review and legal workflows.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    category: "Guide",
    icon: BookOpen,
    title: "Complete Guide to Legal Hold Management",
    description: "Best practices for implementing and managing legal holds across your organization.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
  },
  {
    category: "Webinar",
    icon: Video,
    title: "Cloud-Based eDiscovery: Security & Compliance",
    description: "Learn how cloud deployment maintains enterprise-grade security and compliance.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    category: "Case Study",
    icon: FileCheck,
    title: "How Nixon Peabody Reduced Review Time by 70%",
    description: "Real-world results from implementing Venio's AI-powered review platform.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    category: "Blog",
    icon: FileText,
    title: "ECA Best Practices for Cost-Effective Discovery",
    description: "Strategies for early case assessment that reduce costs and improve outcomes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

const categoryColors = {
  Blog: "bg-white text-blue-500 border-blue-500/20",
  Guide: "bg-white text-green-500 border-green-500/20",
  Webinar: "bg-white text-purple-500 border-purple-500/20",
  "Case Study": "bg-white text-orange-500 border-orange-500/20"
};

export const ResourcesCarousel = () => {
  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background via-background/95 to-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Resources for Law Firms
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore blogs, guides, and industry insights tailored for eDiscovery and legal teams
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group h-full overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.2)] transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-accent/10" />
                        <Badge 
                          className={`absolute bottom-4 left-4 ${categoryColors[resource.category as keyof typeof categoryColors]}`}
                          variant="outline"
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {resource.category}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <button className="text-primary font-semibold hover:underline text-sm flex items-center gap-1">
                          Read More <ArrowRight className="h-4 w-4" />
                        </button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Enhanced Navigation Buttons - Outside */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300" />
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <CarouselNext className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
