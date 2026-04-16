import { useState, useEffect, useRef } from "react";
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
  title?: string;
}

const TestimonialsSection = ({ showLogoTrail = true, title }: TestimonialsSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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

  const videoTestimonial = testimonials[0];
  const writtenTestimonials = testimonials.slice(1);
  const slideCount = 1 + writtenTestimonials.length;

  const getCompanyLogo = (company?: string) => {
    if (!company) return undefined;
    const normalized = company.toLowerCase();
    if (normalized.includes("amentum")) return { src: amentumLogo, alt: "Amentum" };
    if (normalized.includes("array")) return { src: arrayLogo, alt: "Array" };
    if (normalized.includes("cds")) return { src: cdsLogo, alt: "CDS" };
    if (normalized.includes("consilio")) return { src: consilioLogo, alt: "Consilio" };
    if (normalized.includes("epario")) return { src: eparioLogo, alt: "Epario" };
    if (normalized.includes("haug")) return { src: haugLogo, alt: "Haug Partners" };
    if (normalized.includes("nixon")) return { src: nixonLogo, alt: "Nixon Peabody" };
    if (normalized.includes("proteus")) return { src: proteusLogo, alt: "Proteus" };
    return undefined;
  };

  const videoCompanyLogo = getCompanyLogo(videoTestimonial?.company);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!api || isHovering) return;
    
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [api, isHovering]);


  return (
    <>
      {/* Carousel Design */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title ?? "Trusted by Leading Legal Teams Worldwide"}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-[0_0_60px_rgba(61,196,126,0.22)] transition-all duration-500">
              <div className="p-0 relative">
            <div
              className="rounded-3xl overflow-hidden min-h-[450px]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
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
                  <div className="glass rounded-2xl p-8 md:p-12 min-h-[450px] transition-all duration-300 shadow-none">
                    <div className="grid md:grid-cols-5 gap-8 items-stretch h-full">
                      {/* Left side - Text testimonial (2 cols) */}
                      <div className="md:col-span-2 flex flex-col h-full">
                        <div className="text-5xl text-accent/20 font-serif leading-none mb-4">"</div>
                        <p className="text-sm md:text-base text-muted-foreground/90 font-body leading-relaxed italic flex-grow max-w-prose">
                          {videoTestimonial?.text ?? ""}
                        </p>
                        <div className="pt-6 flex items-center gap-4">
                          <div className="min-w-0">
                            <p className="font-bold text-primary text-lg">{videoTestimonial?.author ?? ""}</p>
                            <p className="text-muted-foreground font-body text-sm">{videoTestimonial?.role ?? ""}</p>
                            <p className="text-muted-foreground font-body text-sm">{videoTestimonial?.company ?? ""}</p>
                          </div>
                          <div className="ml-auto w-24 h-10 rounded-md bg-muted/50 flex items-center justify-center px-3 flex-shrink-0">
                            {videoCompanyLogo ? (
                              <img
                                src={videoCompanyLogo.src}
                                alt={videoCompanyLogo.alt}
                                className="h-6 w-auto max-w-full object-contain grayscale brightness-0 opacity-70"
                              />
                            ) : (
                              <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
                                Logo
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right side - Video placeholder (3 cols) */}
                      <div className="md:col-span-3 relative aspect-video rounded-xl overflow-hidden glass-dark">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform glow-accent-hover">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </button>
                        </div>
                        {/* Placeholder for actual video */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slides 2-4: Written Testimonials */}
                {writtenTestimonials.map((testimonial, idx) => {
                  const companyLogo = getCompanyLogo(testimonial.company);
                  return (
                  <CarouselItem key={idx}>
                    <div className="glass rounded-2xl p-8 md:p-12 min-h-[450px] transition-all duration-300 shadow-none">
                      <div className="grid md:grid-cols-5 gap-8 items-stretch h-full">
                        {/* Stats - Left side (2 cols) */}
                        <div className="md:col-span-2 space-y-4">
                          {stats.map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary/90 to-accent/80 p-5 rounded-xl border border-white/20 backdrop-blur-sm min-h-[110px] flex flex-col justify-center">
                              <div className="text-3xl md:text-4xl font-bold text-white mb-2 leading-none tracking-tight break-words">{stat.value}</div>
                              <p className="text-white/90 font-body text-sm leading-snug">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Testimonial Text - Right side (3 cols) */}
                        <div className="md:col-span-3 flex flex-col h-full">
                          <div className="text-5xl text-accent/20 font-serif leading-none mb-4">"</div>
                          <p className="text-base md:text-lg text-muted-foreground/90 font-body leading-relaxed italic flex-grow max-w-prose">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center gap-3 pt-6">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                              {testimonial.initials}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-primary text-base">{testimonial.author}</p>
                              <p className="text-muted-foreground font-body text-sm">{testimonial.role}</p>
                              <p className="text-muted-foreground font-body text-sm">{testimonial.company}</p>
                            </div>
                            <div className="ml-auto w-24 h-10 rounded-md bg-muted/50 flex items-center justify-center px-3 flex-shrink-0">
                              {companyLogo ? (
                                <img
                                  src={companyLogo.src}
                                  alt={companyLogo.alt}
                                  className="h-6 w-auto max-w-full object-contain grayscale brightness-0 opacity-70"
                                />
                              ) : (
                                <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
                                  Logo
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  );
                })}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Navigation Buttons - middle left/right edges */}
            <button
              onClick={() => api?.scrollPrev()}
              className="group absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-150 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-primary group-hover:text-white" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="group absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-150 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-primary group-hover:text-white" />
            </button>

            </div>
          </div>
          {/* Dot indicators outside the placeholder */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-10 bg-primary shadow-lg shadow-primary/50" 
                    : "w-2.5 bg-primary/30 hover:bg-primary/50 hover:w-6"
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
