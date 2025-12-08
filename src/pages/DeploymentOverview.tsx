import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server } from "lucide-react";

const DeploymentOverview = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-12">
          <div className="absolute inset-0">
            <div className="absolute bottom-28 right-10 w-[420px] h-[420px] bg-accent/20 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-16 right-24 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/70" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Deployment Options Overview</h1>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed mx-auto">
              Choose the deployment model that fits your organization. Venio supports secure cloud, on-premises, and hybrid deployments.
            </p>
            <div className="mt-8 flex gap-3 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                <Link to="/deployment/cloud">On Cloud</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/20 text-white hover:bg-white/30 px-6 py-4">
                <Link to="/deployment/on-premises">On-premises</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/20 text-white hover:bg-white/30 px-6 py-4">
                <Link to="/deployment/hybrid">Hybrid Deployment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentOverview;
