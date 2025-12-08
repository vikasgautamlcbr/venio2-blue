import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Cloud, Server, Workflow } from "lucide-react";

const typeMap: Record<string, { label: string; Icon: React.ComponentType<any> }> = {
  cloud: { label: "On Cloud", Icon: Cloud },
  "on-premises": { label: "On-premises", Icon: Server },
  hybrid: { label: "Hybrid Deployment", Icon: Workflow },
};

const DeploymentType = () => {
  const params = useParams();
  const key = (params.type || "").toLowerCase();
  const config = typeMap[key] || { label: params.type || "Deployment", Icon: Server };
  const Icon = config.Icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] flex items-center overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/70" />
          <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{config.label}</h1>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed mx-auto">
              Technical overview, requirements, and best practices for {config.label.toLowerCase()} with Venio.
            </p>
            <div className="mt-8 flex gap-3 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-6 py-4">
                <Link to="/deployment-options">Back to Overview</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentType;
