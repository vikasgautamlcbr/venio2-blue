import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { BarChart3, ArrowRight, Download } from "lucide-react";
import venioReviewImg from "@/assets/resources/venio-review-platform.jpg";
import ediscoveryPricingImg from "@/assets/resources/ediscovery-pricing.jpg";
import esiProtocolImg from "@/assets/resources/esi-protocol.jpg";
import amlawSuccessImg from "@/assets/resources/amlaw-50-success.jpg";
import federalAgencyImg from "@/assets/resources/federal-agency.jpg";

const VenioVsCompetition = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[45vh] md:min-h-[40vh] flex flex-col justify-center overflow-hidden gradient-animated pt-16 xl:pt-20 2xl:pt-24 pb-12">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          <div className="relative z-10 container mx-auto px-6 max-w-5xl flex items-center justify-center">
            <div className="text-center w-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Venio vs Competition</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                Side-by-side comparisons of Venio and leading platforms across performance, AI, cost, and deployment.
              </p>
              <div className="flex items-center justify-center gap-3 mx-auto w-fit">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-5 text-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                  <Link to="/pricing">Check Pricing</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-8 py-5 text-lg transform will-change-transform transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl hover:ring-1 ring-white/30">
                  <a href="/resources/Venio_vs_Others_comparison_sheet.pdf" download>
                    <Download className="mr-2" />
                    Download Comparison Sheet
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { key: "relativity", label: "Relativity", img: venioReviewImg },
                { key: "buix", label: "Buix", img: ediscoveryPricingImg },
                { key: "everlaw", label: "Everlaw", img: esiProtocolImg },
                { key: "logikcull", label: "Logikcull", img: amlawSuccessImg },
                { key: "nextpoint", label: "Nextpoint", img: federalAgencyImg },
              ].map(({ key, label, img }) => (
                <Card key={key} className="group rounded-2xl bg-white shadow-md border-0 overflow-hidden transform will-change-transform transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl hover:ring-1 ring-[rgba(11,28,63,0.12)]">
                  <AspectRatio ratio={3 / 2}>
                    <img src={img} alt={`${label} comparison`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#0b1c3f] text-lg">{`Venio vs ${label}`}</h3>
                      <p className="text-sm text-[#2E2E2E] opacity-80">See how Venio compares in capabilities, speed, cost, and deployment.</p>
                      <div className="flex items-center justify-end">
                        <Link to={`/compare/${key}`} className="inline-flex items-center gap-1.5 text-accent font-medium hover:underline">
                          View comparison
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
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
};

export default VenioVsCompetition;
