import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollProgressIndicator } from "@/components/ScrollProgressIndicator";

const sections = [
  { id: "hero", label: "Search" },
  { id: "results", label: "Results" },
];

// Import resource images
import fortuneBankImg from "@/assets/resources/fortune-100-bank.jpg";
import amlawSuccessImg from "@/assets/resources/amlaw-50-success.jpg";
import federalAgencyImg from "@/assets/resources/federal-agency.jpg";
import venioReviewImg from "@/assets/resources/venio-review-platform.jpg";
import esiProtocolImg from "@/assets/resources/esi-protocol.jpg";
import ediscoveryPricingImg from "@/assets/resources/ediscovery-pricing.jpg";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  // All searchable content
  const allContent = [
    // Resources
    {
      id: "res-1",
      type: "resource",
      category: "Blog",
      title: "What Is FRCP Rule 33? A Reference Guide",
      description: "The U.S. federal court system is highly regulated and uniform across all states. Understanding FRCP Rule 33 for interrogatories in modern litigation.",
      date: "Monday, 18 November, 2024",
      link: "https://www.veniosystems.com/blog/what-is-frcp-rule-33-a-reference-guide/",
    },
    {
      id: "res-2",
      type: "resource",
      category: "Blog",
      title: "Why Premium eDiscovery Pricing Doesn't Guarantee Better Results",
      description: "Many legal teams still believe premium eDiscovery software pricing equals superior performance. Learn why that's not always the case.",
      date: "Thursday, 10 October, 2024",
      link: "https://www.veniosystems.com/blog/why-premium-ediscovery-software-pricing-doesnt-guarantee-better-results/",
      imageUrl: ediscoveryPricingImg,
    },
    {
      id: "res-3",
      type: "resource",
      category: "Blog",
      title: "Understanding ESI Protocol: The Definitive Checklist",
      description: "In modern litigation, the battle is won or lost before discovery even begins. Master ESI protocol formulation with this comprehensive guide.",
      date: "Wednesday, 09 October, 2024",
      link: "https://www.veniosystems.com/blog/understanding-formulating-esi-protocol-checklist/",
      imageUrl: esiProtocolImg,
    },
    {
      id: "res-4",
      type: "resource",
      category: "Blog",
      title: "What is ESI? The Ultimate Guide to ESI in Modern eDiscovery",
      description: "Electronically Stored Information (ESI) isn't just data; it's the digital battlefield of modern litigation. Learn everything about ESI.",
      date: "Tuesday, 08 October, 2024",
      link: "https://www.veniosystems.com/blog/what-is-esi-legal-hold-guide/",
    },
    {
      id: "res-5",
      type: "resource",
      category: "Case Study",
      title: "Petabyte-Scale eDiscovery: Fortune 100 Financial Services",
      description: "How a global bank processed 120+TB of data with full PII protection, achieving 72% data reduction and 2.1× review efficiency for a major regulatory investigation.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Case_Study-Fortune_100_Financial_Services.pdf",
      imageUrl: fortuneBankImg,
    },
    {
      id: "res-6",
      type: "resource",
      category: "Case Study",
      title: "Weekly Productions, Zero Rejections: AmLaw 50 Success",
      description: "Discover how an AmLaw 50 firm achieved flawless weekly production cycles with zero rejections using Venio's defensible workflows.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Case_Study-AmLaw_50_Success_Story.pdf",
      imageUrl: amlawSuccessImg,
    },
    {
      id: "res-7",
      type: "resource",
      category: "Blog",
      title: "Fortune 100 Bank Cuts eDiscovery Costs with Venio",
      description: "When eDiscovery scales into the hundreds of terabytes, every inefficiency carries a cost. See how this bank transformed their process.",
      date: "Friday, 04 October, 2024",
      link: "https://www.veniosystems.com/blog/fortune-100-bank-cuts-ediscovery-costs-with-venio/",
    },
    {
      id: "res-8",
      type: "resource",
      category: "Case Study",
      title: "Audit-Ready Federal Workflows: Agency Success Story",
      description: "How Venio created defensible pipelines for a federal agency, reducing operator hours by 35% and achieving 100% audit trail compliance.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Case_Study-Federal_Agency_Workflows.pdf",
      imageUrl: federalAgencyImg,
    },
    {
      id: "res-9",
      type: "resource",
      category: "Product Brief",
      title: "Venio Review Product Brief",
      description: "The Complete Review Platform for Modern Legal Teams. Discover how Venio Review delivers fast, intuitive, and reliable document review at scale.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Product_Brief-Venio_Review.pdf",
      imageUrl: venioReviewImg,
    },
    {
      id: "res-10",
      type: "resource",
      category: "Product Brief",
      title: "Venio ECA Product Brief",
      description: "Reduce risk and make your discovery 10x faster with Venio ECA. Cut data volume sent to external partners by up to 90%.",
      date: "Monday, 18 November, 2024",
      link: "/resources/Product_Brief-Venio_ECA.pdf",
    },
    // Pages
    {
      id: "page-1",
      type: "page",
      category: "Product",
      title: "Venio Legal Hold",
      description: "Modernizing Legal Hold for a Connected, Data-Driven World. Built for reliability and designed for defensibility.",
      link: "/venio-legal-hold",
    },
    {
      id: "page-2",
      type: "page",
      category: "Solutions",
      title: "Law Firm Solutions",
      description: "Comprehensive eDiscovery solutions tailored for law firms of all sizes.",
      link: "/law-firm-solutions",
    },
    {
      id: "page-3",
      type: "page",
      category: "Pricing",
      title: "Pricing & Plans",
      description: "Transparent pricing for enterprise-grade eDiscovery solutions.",
      link: "/pricing",
    },
    {
      id: "page-4",
      type: "page",
      category: "Resources",
      title: "Resource Hub",
      description: "Explore case studies, guides, white papers, and more to help you master eDiscovery.",
      link: "/resources",
    },
    {
      id: "page-5",
      type: "page",
      category: "About",
      title: "Why Venio",
      description: "Discover why leading organizations trust Venio for their eDiscovery needs.",
      link: "/why-venio",
    },
  ];

  const searchResults = allContent.filter((item) => {
    if (!searchQuery) return false;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Blog": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
      "Case Study": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      "Product Brief": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
      "Product": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
      "Solutions": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
      "Pricing": "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30",
      "Resources": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
      "About": "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30",
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/30";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollProgressIndicator sections={sections} />
      
      {/* Hero Section with Search */}
      <section id="hero" className="relative min-h-[55vh] md:min-h-[50vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-24 right-28 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-[60%] right-40 w-52 h-52 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
        
        <div className="container mx-auto text-center relative z-10 px-6">
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm">
              <SearchIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Search Everything
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Find resources, products, solutions, and more across our entire platform
          </p>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60 z-10" />
              <Input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 bg-white/10 border-white/20 text-white text-lg placeholder:text-white/50 backdrop-blur-md hover:bg-white/20 pl-14 pr-5"
              />
            </div>
          </form>

          {searchQuery && (
            <p className="text-white/80">
              Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}"
            </p>
          )}
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section id="results" className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            {searchResults.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex p-6 rounded-full bg-muted mb-6">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse our resources directly
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.map((result) => (
                  <a
                    key={result.id}
                    href={result.link}
                    target={result.link.startsWith('http') ? '_blank' : undefined}
                    rel={result.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/30">
                      <div className="flex gap-4 p-6">
                        {result.imageUrl && (
                          <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                            <img 
                              src={result.imageUrl} 
                              alt={result.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                              {result.title}
                            </CardTitle>
                            <span className={cn(
                              "text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0",
                              getCategoryColor(result.category)
                            )}>
                              {result.category}
                            </span>
                          </div>
                          <CardDescription className="line-clamp-2 mb-3">
                            {result.description}
                          </CardDescription>
                          {result.date && (
                            <p className="text-xs text-muted-foreground">
                              {result.date}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Search;
