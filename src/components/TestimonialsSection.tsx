import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import amentumLogo from "@/assets/clients/amentum-new.webp";
import arrayLogo from "@/assets/clients/array-new.webp";
import cdsLogo from "@/assets/clients/cds-new.webp";
import consilioLogo from "@/assets/clients/consilio-new.webp";
import eparioLogo from "@/assets/clients/epario-new.webp";
import haugLogo from "@/assets/clients/haug-partners-new.webp";
import nixonLogo from "@/assets/clients/nixon-peabody-new.webp";
import proteusLogo from "@/assets/clients/proteus-new.webp";

interface TestimonialsSectionProps {
  showLogoTrail?: boolean;
}

const TestimonialsSection = ({ showLogoTrail = true }: TestimonialsSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [api2, setApi2] = useState<CarouselApi>();
  const [current2, setCurrent2] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const stats = [
    { value: "10x", label: "Faster document review" },
    { value: "70%", label: "Cost savings achieved" },
    { value: "99.9%", label: "Uptime guarantee" }
  ];

  const testimonials = [
    {
      text: "Venio transformed our eDiscovery process completely. The AI-powered automation reduced our review time from weeks to days, while maintaining accuracy. The on-premises deployment gave us total control over sensitive data, which was crucial for our compliance requirements.",
      author: "Sarah Mitchell",
      role: "Director of Legal Operations",
      company: "Nixon Peabody LLP",
      initials: "SM"
    },
    {
      text: "In my experience, law firms and their clients avoid some of the most damaging discovery mistakes by managing the legal hold process effectively. This is true for individual cases and across matters. Leveraging technology to automate a well-thought-through workflow helps bring consistency and discipline to the hold process in addition to gains in productivity. That is why I like Venio's focus on its new integrated Legal Hold module.",
      author: "John Anderson",
      role: "Chief Legal Officer",
      company: "Global Corp",
      initials: "JA"
    },
    {
      text: "The platform's intuitive interface and powerful features have revolutionized how we handle document review. We've seen incredible improvements in efficiency and cost savings across all our cases.",
      author: "Emily Chen",
      role: "Managing Partner",
      company: "Tech Legal Associates",
      initials: "EC"
    }
  ];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api2) return;
    setCurrent2(api2.selectedScrollSnap());
    api2.on("select", () => {
      setCurrent2(api2.selectedScrollSnap());
    });
  }, [api2]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!api2 || isHovering) return;
    
    autoplayRef.current = setInterval(() => {
      api2.scrollNext();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [api2, isHovering]);


  return (
    <>
      {/* Carousel Design */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Leading Legal Teams Worldwide
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="rounded-3xl glass-dark border border-white/15 shadow-[0_0_60px_rgba(34,197,94,0.18)] transition-all duration-500">
              <div className="p-0 relative">
            <div className="rounded-3xl overflow-hidden min-h-[450px]">
              <Carousel
                setApi={setApi}
                opts={{
                  loop: true,
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                {/* Slide 1: Video Testimonial */}
                <CarouselItem>
                  <div className="glass-dark rounded-2xl p-8 md:p-12 min-h-[450px] transition-all duration-300 shadow-none text-white">
                    <div className="grid md:grid-cols-5 gap-8 items-center h-full">
                      {/* Left side - Text testimonial (2 cols) */}
                      <div className="md:col-span-2 space-y-6">
                        <div className="text-5xl text-white/40 font-serif">"</div>
                        <p className="text-base text-white/80 font-body leading-relaxed -mt-4 italic">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamelit, sed do eiusmod tempor
                        </p>
                        <div>
                          <p className="font-bold text-white text-lg">{testimonials[0].author}</p>
                          <p className="text-white/80 font-body text-sm">{testimonials[0].role}</p>
                          <p className="text-white/80 font-body text-sm">{testimonials[0].company}</p>
                        </div>
                      </div>

                      {/* Right side - Video placeholder (3 cols) */}
                      <div className="md:col-span-3 relative aspect-video rounded-xl overflow-hidden glass-dark border border-white/15">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </button>
                        </div>
                        {/* Placeholder for actual video */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slides 2-4: Written Testimonials */}
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="glass-dark rounded-2xl p-8 md:p-12 min-h-[450px] transition-all duration-300 shadow-none text-white">
                      <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Stats - Left side (2 cols) */}
                        <div className="md:col-span-2 space-y-4">
                          {stats.map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary/90 to-accent/80 p-5 rounded-xl border border-white/20 backdrop-blur-sm">
                              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                              <p className="text-white/90 font-body text-xs">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Testimonial Text - Right side (3 cols) */}
                        <div className="md:col-span-3 space-y-6">
                          <div className="text-5xl text-white/40 font-serif">"</div>
                          <p className="text-base text-white/85 font-body leading-relaxed -mt-4 italic">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-[0_0_24px_rgba(34,197,94,0.5)]">
                              {testimonial.initials}
                            </div>
                            <div>
                              <p className="font-bold text-white text-base">{testimonial.author}</p>
                              <p className="text-white/80 font-body text-sm">{testimonial.role}</p>
                              <p className="text-white/80 font-body text-sm">{testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Navigation Buttons - middle left/right edges */}
            <button
              onClick={() => api?.scrollPrev()}
              className="group absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-0 z-20 border border-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="group absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-0 z-20 border border-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            </div>
          </div>
          {/* Dot indicators outside the placeholder */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-10 bg-accent shadow-lg shadow-accent/50" 
                    : "w-2.5 bg-accent/30 hover:bg-accent/50 hover:w-6"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>

        {/* Logo Ticker - Below scroll indicator */}
        {showLogoTrail && (
        <div className="mt-16 relative overflow-hidden py-8">
          <div className="logo-ticker-inner flex gap-16 animate-logo-scroll">
            {[
              { src: amentumLogo, alt: "Amentum" },
              { src: arrayLogo, alt: "Array" },
              { src: cdsLogo, alt: "CDS" },
              { src: consilioLogo, alt: "Consilio" },
              { src: eparioLogo, alt: "Epario" },
              { src: haugLogo, alt: "Haug Partners" },
              { src: nixonLogo, alt: "Nixon Peabody" },
              { src: proteusLogo, alt: "Proteus" },
              // Duplicate for seamless loop
              { src: amentumLogo, alt: "Amentum" },
              { src: arrayLogo, alt: "Array" },
              { src: cdsLogo, alt: "CDS" },
              { src: consilioLogo, alt: "Consilio" },
              { src: eparioLogo, alt: "Epario" },
              { src: haugLogo, alt: "Haug Partners" },
              { src: nixonLogo, alt: "Nixon Peabody" },
              { src: proteusLogo, alt: "Proteus" }
            ].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] transition-transform duration-200 hover:scale-110"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  style={{ height: '36px' }}
                  className="w-auto object-contain grayscale brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
        )}

      </section>
      <style>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logo-scroll {
          animation: logo-scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default TestimonialsSection;
