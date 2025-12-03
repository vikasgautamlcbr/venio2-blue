import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

interface ScrollProgressIndicatorProps {
  sections: Section[];
}

export const ScrollProgressIndicator = ({ sections }: ScrollProgressIndicatorProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="glass-dark rounded-full px-3 py-6 shadow-xl">
        <div className="flex flex-col items-center gap-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              aria-label={`Navigate to ${section.label}`}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSection === section.id
                    ? "bg-secondary w-2.5 h-2.5 shadow-lg shadow-secondary/50"
                    : "bg-white/30 group-hover:bg-white/50 group-hover:w-2.5 group-hover:h-2.5"
                )}
              />
              <span
                className={cn(
                  "absolute right-full mr-4 top-1/2 -translate-y-1/2 text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-lg transition-all duration-300",
                  "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                  activeSection === section.id
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-white/90 text-foreground shadow-md"
                )}
              >
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
