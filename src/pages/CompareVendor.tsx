import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { BarChart3 } from "lucide-react";

const vendorMap: Record<string, string> = {
  relativity: "Relativity",
  buix: "Buix",
  everlaw: "Everlaw",
  logikcull: "Logikcull",
  nextpoint: "Nextpoint",
};

const CompareVendor = () => {
  const params = useParams();
  const key = (params.vendor || "").toLowerCase();
  const label = vendorMap[key] || params.vendor || "Vendor";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/70" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{`Venio vs ${label}`}</h1>
            </div>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
              Side-by-side comparison of Venio and {label}. Performance, AI, pricing, deployment, and workflows.
            </p>
            <div className="mt-8 flex gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                <Link to="/venio-vs-competition">Back to Overview</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompareVendor;
