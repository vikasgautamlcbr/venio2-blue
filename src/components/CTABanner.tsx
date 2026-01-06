import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <>
      <section className="py-12 bg-gradient-to-r from-primary via-primary/95 to-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to break free from the Integration Tax?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-body">
            Join the hundreds of law firms and corporate legal departments that have swapped complexity for clarity.
          </p>

          <div className="flex justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group">
              <Link to="/book-a-demo">
                Book a Comparison Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6 transform will-change-transform transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-xl hover:ring-1 ring-white/30"
            >
              <Link to="/pricing">Request Pricing</Link>
            </Button>
          </div>

          
        </div>
      </div>

    </section>
    </>
  );
};

export default CTABanner;
