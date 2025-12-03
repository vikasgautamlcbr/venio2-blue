import { useEffect, useRef } from "react";
import amentumLogo from "@/assets/clients/amentum-new.webp";
import arrayLogo from "@/assets/clients/array-new.webp";
import cdsLogo from "@/assets/clients/cds-new.webp";
import consilioLogo from "@/assets/clients/consilio-new.webp";
import eparioLogo from "@/assets/clients/epario-new.webp";
import haugLogo from "@/assets/clients/haug-partners-new.webp";
import nixonLogo from "@/assets/clients/nixon-peabody-new.webp";
import proteusLogo from "@/assets/clients/proteus-new.webp";

const LogoTicker = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: amentumLogo, alt: "Amentum" },
    { src: arrayLogo, alt: "Array" },
    { src: cdsLogo, alt: "CDS" },
    { src: consilioLogo, alt: "Consilio" },
    { src: eparioLogo, alt: "Epario" },
    { src: haugLogo, alt: "Haug Partners" },
    { src: nixonLogo, alt: "Nixon Peabody" },
    { src: proteusLogo, alt: "Proteus" },
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate the content for seamless loop
    const scrollerInner = scroller.querySelector(".scroller-inner");
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="py-8 bg-background relative overflow-hidden -mt-6">
      <div className="container mx-auto px-4">        
        <div ref={scrollerRef} className="scroller relative overflow-hidden">
          <div className="scroller-inner flex gap-12 animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-auto object-contain"
                  style={{ height: '33px' }}
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .scroller:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoTicker;
