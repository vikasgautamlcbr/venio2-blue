import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Menu, X, ChevronDown, Send, Loader2,
  TrendingUp, DollarSign, Clock, Shield,
  Building2, Landmark, Briefcase, ChevronLeft, ChevronRight,
  Play, FileText, BookOpen, Video, FileCheck,
  Linkedin, Facebook, Twitter, Youtube
} from "lucide-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Slot } from "@radix-ui/react-slot";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/integrations/supabase/client";
import BookDemoDialog from "@/components/BookDemoDialog";

// Assets
import venioLogo from "@/assets/venio-logo.svg";
import annaAvatar from "@/assets/anna-avatar.gif";
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";
import amLawFirmBg from "@/assets/case-studies/am-law-firm.jpg";
import federalAgencyBg from "@/assets/case-studies/federal-agency.jpg";
import globalBankBg from "@/assets/case-studies/global-bank.jpg";
import amentumLogo from "@/assets/clients/amentum.webp";
import arrayLogo from "@/assets/clients/array.webp";
import cdsLogo from "@/assets/clients/cds.webp";
import consilioLogo from "@/assets/clients/consilio.webp";
import eparioLogo from "@/assets/clients/epario.webp";
import haugLogo from "@/assets/clients/haug-partners.webp";
import nixonLogo from "@/assets/clients/nixon-peabody.webp";
import proteusLogo from "@/assets/clients/proteus.webp";

// ===== UTILITY FUNCTIONS =====
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ===== UI COMPONENTS =====

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

// Input Component
const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
};

// Avatar Components
const Avatar = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
);

const AvatarImage = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image className={cn("aspect-square h-full w-full", className)} {...props} />
);

const AvatarFallback = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
);

// Card Components
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
);

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

// Badge Component
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

// Carousel Components
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

const CarouselContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
};

const CarouselItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { orientation } = useCarousel();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
      {...props}
    />
  );
};

const CarouselPrevious = ({ className, variant = "outline", size = "icon", ...props }: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};

const CarouselNext = ({ className, variant = "outline", size = "icon", ...props }: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};

// ===== CUSTOM COMPONENTS =====

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Products",
      hasDropdown: true,
      items: ["Venio Review", "Venio One", "Venio ECA", "AI at the Core", "Venio Production"],
    },
    {
      label: "Solutions",
      hasDropdown: true,
      items: ["Law Firms", "Legal Service Providers", "Corporations", "Government"],
    },
    {
      label: "Use Cases",
      hasDropdown: true,
      items: ["Document Review", "Contract Analysis", "Legal Research", "Compliance"],
    },
    {
      label: "Pricing",
      hasDropdown: false,
    },
    {
      label: "Resources",
      hasDropdown: false,
      link: "/resources",
    },
    {
      label: "Why Venio",
      hasDropdown: false,
    },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "glass-navbar rounded-2xl py-3 shadow-2xl" 
          : "glass-navbar rounded-2xl py-4 shadow-xl"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={venioLogo} alt="VENIO" className="h-8 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.label} className="group relative flex-shrink-0">
                {item.label === "Pricing" ? (
                  <Link 
                    to="/pricing"
                    className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : item.label === "Resources" ? (
                  <Link 
                    to="/resources"
                    className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} className="opacity-70" />}
                  </button>
                )}
                {item.hasDropdown && item.items && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="glass-navbar rounded-xl shadow-2xl p-4 min-w-[220px]">
                      {item.items.map((subItem) => {
                        if (item.label === "Products" && subItem === "Venio Review") {
                          return (
                            <Link
                              key={subItem}
                              to="/venio-legal-hold"
                              className="block px-4 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                            >
                              Venio Legal Hold
                            </Link>
                          );
                        }
                        if (item.label === "Solutions" && subItem === "Law Firms") {
                          return (
                            <Link
                              key={subItem}
                              to="/law-firm-solutions"
                              className="block px-4 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                            >
                              {subItem}
                            </Link>
                          );
                        }
                        return (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-white hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                          >
                            {subItem}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <Link to="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-navbar rounded-xl p-4">
            {navItems.map((item) => (
              <div key={item.label} className="mb-4">
                {item.label === "Pricing" ? (
                  <Link
                    to="/pricing"
                    className="font-semibold text-white mb-2 flex items-center gap-1 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : item.label === "Resources" ? (
                  <Link
                    to="/resources"
                    className="font-semibold text-white mb-2 flex items-center gap-1 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="font-semibold text-white mb-2 flex items-center gap-1">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </div>
                )}
                {item.hasDropdown && item.items && item.items.map((subItem) => {
                  if (item.label === "Products" && subItem === "Venio Review") {
                    return (
                      <Link
                        key={subItem}
                        to="/venio-legal-hold"
                        className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Venio Legal Hold
                      </Link>
                    );
                  }
                  if (item.label === "Solutions" && subItem === "Law Firms") {
                    return (
                      <Link
                        key={subItem}
                        to="/law-firm-solutions"
                        className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-md transition-colors"
                    >
                      {subItem}
                    </a>
                  );
                })}
              </div>
            ))}
            <div className="mt-4">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                <Link to="/book-a-demo" onClick={() => setIsMobileMenuOpen(false)}>Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <BookDemoDialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen} />
    </nav>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    Products: [
      "Venio Review",
      "Venio ECA",
      "AI at the Core",
      "Venio Production",
      "Venio AI Review",
      "Venio Legal Hold",
    ],
    Solutions: [
      "Law Firms",
      "Legal Service Providers",
      "Corporations",
      "Government",
      "Legal Counsel",
      "eDiscovery Attorneys",
      "eDiscovery Managers",
    ],
    Resources: [
      "Blog",
      "AmLaw 50 Firm – Case Study",
      "Federal Agency – Case Study",
      "Global Bank – Case Study",
      "Saving Calculator",
      "Partnership",
      "Webinars & Events",
    ],
    Company: [
      "Why Venio",
      "Request a Demo",
      "Pricing",
      "Contact Us",
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.Products.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.Solutions.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4 font-body">
              Subscribe to our SaaS Trends weekly newsletter
            </p>
            <div className="grid gap-3">
              <Input
                type="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                autoCapitalize="none"
                enterKeyHint="send"
                aria-label="Email address"
                className="w-full max-w-xl h-14 rounded-xl bg-white text-slate-900 placeholder:text-slate-500 border-white/80 focus:ring-4 focus:ring-accent/30 focus:border-accent px-5 mx-auto"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group rounded-xl mx-auto">Submit</Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold">
                V<span className="text-accent">E</span>NIO
              </div>
              <p className="text-white/60 text-sm font-body">
                ©2025 Venio Systems, Inc. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm font-body">
                Terms of Use
              </a>
              <div className="flex gap-4 ml-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// AnnaChat Component
interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_GREETING = "Hi, I'm Anna. Before we dive into how Venio can help you, I'd love to know who I'm speaking with. What's your name?";
const FADE_DISTANCE = 60;
type CollectionMode = "name" | "email" | "chat";

const AnnaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [collectionMode, setCollectionMode] = useState<CollectionMode>("name");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messageOpacities, setMessageOpacities] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  const calculateOpacities = () => {
    if (!scrollContainerRef.current) return;
    
    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const fadeThreshold = containerTop + FADE_DISTANCE;
    
    const newOpacities = messageRefs.current.map((ref, index) => {
      if (!ref) return 1;
      
      const messageRect = ref.getBoundingClientRect();
      const messageTop = messageRect.top;
      const messageBottom = messageRect.bottom;
      
      if (index === 0 && messageTop >= containerTop) {
        return 1;
      }
      
      if (messageTop >= fadeThreshold) {
        return 1;
      }
      
      if (messageBottom <= containerTop) {
        return 0;
      }
      
      if (messageTop < fadeThreshold && messageTop >= containerTop) {
        const distanceIntoFadeZone = messageTop - containerTop;
        return Math.max(0, Math.min(1, distanceIntoFadeZone / FADE_DISTANCE));
      }
      
      if (messageTop < containerTop && messageBottom > containerTop) {
        return 0.3;
      }
      
      return 1;
    });
    
    setMessageOpacities(newOpacities);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    calculateOpacities();
    container.addEventListener('scroll', calculateOpacities);
    
    return () => container.removeEventListener('scroll', calculateOpacities);
  }, [messages]);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    if (collectionMode === "name") {
      const name = input.trim();
      setUserName(name);
      const userMessage: Message = { role: "user", content: name };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      
      const assistantMessage: Message = {
        role: "assistant",
        content: `Thank you, ${name}. Could you please share your email address with me?`,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setCollectionMode("email");
      return;
    }

    if (collectionMode === "email") {
      const email = input.trim();
      setUserEmail(email);
      const userMessage: Message = { role: "user", content: email };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const { data, error } = await supabase.functions.invoke("anna-chat", {
          body: { 
            messages: [...messages, userMessage],
            userName,
            userEmail: email
          },
        });

        if (error) throw error;

        if (data?.choices?.[0]?.message?.content) {
          const assistantMessage: Message = {
            role: "assistant",
            content: data.choices[0].message.content,
          };
          setMessages((prev) => [...prev, assistantMessage]);
        }
        setCollectionMode("chat");
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("anna-chat", {
        body: { 
          messages: [...messages, userMessage],
          userName,
          userEmail
        },
      });

      if (error) throw error;

      if (data?.choices?.[0]?.message?.content) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
      <div className="flex flex-col items-center gap-3 mb-6 animate-fade-in">
        <Avatar className="h-20 w-20 border-4 border-white/30 shadow-2xl backdrop-blur-sm">
          <AvatarImage src={annaAvatar} alt="Anna" />
          <AvatarFallback className="bg-primary/10 text-xl">A</AvatarFallback>
        </Avatar>
        <div className="bg-[#0097FF]/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-white/20">
          <p className="text-sm text-white font-medium">Ask me anything about Venio's legal solutions</p>
        </div>
      </div>

      <div className="relative mb-6">
        <div 
          ref={scrollContainerRef}
          className="space-y-6 max-h-[500px] overflow-y-auto px-4 pt-4 scroll-smooth custom-scrollbar pr-2"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              ref={(el) => (messageRefs.current[index] = el)}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } animate-fade-in transition-opacity duration-150`}
              style={{ opacity: messageOpacities[index] ?? 1 }}
            >
              <Card
                className={`max-w-[80%] p-4 backdrop-blur-lg border ${
                  message.role === "user"
                    ? "bg-primary/80 text-primary-foreground shadow-lg border-white/20"
                    : "bg-white/20 backdrop-blur-md border-white/30 shadow-md text-white"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </Card>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-fade-in">
              <Card className="max-w-[80%] p-4 bg-white/20 backdrop-blur-md border-white/30 shadow-md text-white">
                <div className="flex gap-2 items-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Anna is typing...</span>
                </div>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="px-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="relative flex items-center bg-white/20 backdrop-blur-lg rounded-lg px-6 py-3 border border-white/30 shadow-lg transition-all duration-300">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              collectionMode === "name" 
                ? "Enter your name..." 
                : collectionMode === "email" 
                ? "Enter your email address..." 
                : "Type your message..."
            }
            type={collectionMode === "email" ? "email" : "text"}
            disabled={isLoading}
            className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 placeholder:text-white/60 text-white pr-12"
            autoFocus
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            size="icon"
            className="absolute right-2 shrink-0 h-10 w-10 bg-white hover:bg-white border border-white/30 text-[#0097FF] shadow-sm"
            variant="ghost"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-[#0097FF]" />
            ) : (
              <Send className="h-5 w-5 text-[#0097FF]" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

// DataPointsSection Component
const dataPoints = [
  {
    icon: TrendingUp,
    value: "10x",
    label: "Faster document review",
    description: "AI-powered review dramatically accelerates workflows"
  },
  {
    icon: DollarSign,
    value: "70%",
    label: "Cost savings achieved",
    description: "Reduced overhead and efficient resource allocation"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Cloud availability",
    description: "Access your data securely from anywhere, anytime"
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime guarantee",
    description: "Enterprise-grade reliability and security"
  }
];

const DataPointsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Metrics for Law Firms
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world performance indicators that show how Venio accelerates law firm workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                  {point.value}
                </h3>
                
                <p className="text-lg font-semibold mb-2 text-foreground">{point.label}</p>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CaseStudiesSection Component
const CaseStudiesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const caseStudies = [
    {
      icon: Briefcase,
      title: "AmLaw 50 Firm",
      category: "Law Firm",
      stat: "65%",
      statLabel: "Cost Reduction",
      description: "Discover how a leading AmLaw 50 firm reduced eDiscovery costs by 65% while improving review accuracy and speed.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgImage: amLawFirmBg
    },
    {
      icon: Landmark,
      title: "Federal Agency",
      category: "Government",
      stat: "10x",
      statLabel: "Faster Processing",
      description: "Learn how a federal agency achieved 10x faster document processing while maintaining strict compliance requirements.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      bgImage: federalAgencyBg
    },
    {
      icon: Building2,
      title: "Global Bank",
      category: "Corporation",
      stat: "99.9%",
      statLabel: "Accuracy Rate",
      description: "See how a global financial institution achieved 99.9% accuracy in document review with Venio's AI-powered platform.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      bgImage: globalBankBg
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            See how leading organizations are transforming their eDiscovery processes with Venio
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-[0_0_60px_rgba(61,196,126,0.22)] transition-all duration-500">
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
            <CarouselContent className="rounded-3xl transition-shadow duration-500">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index}>
                  <Card className="group relative overflow-hidden border-0 rounded-3xl transition-all duration-500 shadow-none">
                    <div className="grid md:grid-cols-2 h-[450px]">
                      <div className="relative overflow-hidden">
                        <img 
                          src={study.bgImage} 
                          alt={study.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85"></div>
                        
                        <div className="relative h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
                          <div className={`w-16 h-16 ${study.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                            <study.icon className={`w-8 h-8 ${study.color}`} />
                          </div>
                          
                          <div className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-3">
                            {study.category}
                          </div>
                          
                          <h3 className="text-white text-3xl md:text-4xl font-bold mb-8">
                            {study.title}
                          </h3>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
                            <div className="text-white text-5xl md:text-6xl font-bold mb-1">
                              {study.stat}
                            </div>
                            <div className="text-white/90 text-base font-medium">
                              {study.statLabel}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative bg-background p-8 md:p-12 flex flex-col justify-center">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                          {study.description}
                        </p>
                        
                        <Button 
                          size="lg" 
                          className="w-fit group/button"
                        >
                          Read Full Case Study
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/button:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
          </div>

          {/* Navigation Buttons - outside overflow wrapper to avoid clipping */}
          <button
            onClick={() => api?.scrollPrev()}
            className="group absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-0 z-40"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-6 w-6 text-primary group-hover:text-white" />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            className="group absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-0 z-40"
            aria-label="Next case study"
          >
            <ChevronRight className="h-6 w-6 text-primary group-hover:text-white" />
          </button>
            </div>
          </div>
        </div>

        {/* Dot indicators outside the placeholder */}
        <div className="flex justify-center gap-2 mt-4">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current 
                  ? "w-10 bg-primary shadow-lg shadow-primary/50" 
                  : "w-2.5 bg-primary/30 hover:bg-primary/50 hover:w-6"
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-secondary text-lg px-10 py-4">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

// TestimonialsSection Component
const TestimonialsSection = () => {
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
      <section className="py-20 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent mb-2">VERSION 1</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Leading Legal Teams
              <br />
              Worldwide
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-[0_0_60px_rgba(61,196,126,0.22)] transition-all duration-500">
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
                <CarouselItem>
                  <div className="glass rounded-2xl p-8 md:p-12 min-h-[450px] transition-all duration-300">
                    <div className="grid md:grid-cols-5 gap-8 items-center h-full">
                      <div className="md:col-span-2 space-y-6">
                        <div className="text-5xl text-accent/20 font-serif">"</div>
                        <p className="text-base text-muted-foreground font-body leading-relaxed -mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamelit, sed do eiusmod tempor
                        </p>
                        <div>
                          <p className="font-bold text-primary text-lg">{testimonials[0].author}</p>
                          <p className="text-muted-foreground font-body text-sm">{testimonials[0].role}</p>
                          <p className="text-muted-foreground font-body text-sm">{testimonials[0].company}</p>
                        </div>
                      </div>

                      <div className="md:col-span-3 relative aspect-video rounded-xl overflow-hidden glass-dark">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform glow-accent-hover">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="glass rounded-2xl p-8 md:p-12 min-h-[450px] transition-all duration-300 shadow-none">
                      <div className="grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-2 space-y-4">
                          {stats.map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary/90 to-accent/80 p-5 rounded-xl border border-white/20 backdrop-blur-sm">
                              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                              <p className="text-white/90 font-body text-xs">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="md:col-span-3 space-y-6">
                          <div className="text-5xl text-accent/20 font-serif">"</div>
                          <p className="text-base text-muted-foreground font-body leading-relaxed -mt-4 italic">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                              {testimonial.initials}
                            </div>
                            <div>
                              <p className="font-bold text-primary text-base">{testimonial.author}</p>
                              <p className="text-muted-foreground font-body text-sm">{testimonial.role}</p>
                              <p className="text-muted-foreground font-body text-sm">{testimonial.company}</p>
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

            <button
              onClick={() => api?.scrollPrev()}
              className="group absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-0 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-primary group-hover:text-white" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="group absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-accent flex items-center justify-center transition-all duration-0 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-primary group-hover:text-white" />
            </button>

            </div>
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
                    ? "w-10 bg-primary shadow-lg shadow-primary/50" 
                    : "w-2.5 bg-primary/30 hover:bg-primary/50 hover:w-6"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent mb-2">VERSION 2</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">Real feedback from legal professionals transforming their workflows</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 relative aspect-video rounded-xl overflow-hidden glass-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform glow-accent-hover">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl text-accent/20 font-serif leading-none">"</div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed -mt-2">
                  Venio transformed our eDiscovery process completely. The AI-powered automation is incredible.
                </p>
                <div className="pt-2">
                  <p className="font-bold text-primary">{testimonials[0].author}</p>
                  <p className="text-muted-foreground font-body text-sm">{testimonials[0].role}</p>
                  <p className="text-muted-foreground font-body text-sm">{testimonials[0].company}</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Carousel
              setApi={setApi2}
              opts={{
                loop: true,
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="glass rounded-xl p-8 shadow-none transition-shadow h-full">
                      <div className="flex flex-col h-full">
                        <div className="text-5xl text-accent/20 font-serif leading-none mb-4">"</div>
                        <p className="text-base text-muted-foreground font-body leading-relaxed mb-6 flex-grow">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {testimonial.initials}
                          </div>
                          <div>
                            <p className="font-bold text-primary text-base">{testimonial.author}</p>
                            <p className="text-muted-foreground font-body text-sm">{testimonial.role}</p>
                            <p className="text-muted-foreground font-body text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api2?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current2 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ResourcesCarousel Component
const resources = [
  {
    category: "Blog",
    icon: FileText,
    title: "5 Ways AI Transforms eDiscovery for Law Firms",
    description: "Discover how artificial intelligence is revolutionizing document review and legal workflows.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    category: "Guide",
    icon: BookOpen,
    title: "Complete Guide to Legal Hold Management",
    description: "Best practices for implementing and managing legal holds across your organization.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
  },
  {
    category: "Webinar",
    icon: Video,
    title: "Cloud-Based eDiscovery: Security & Compliance",
    description: "Learn how cloud deployment maintains enterprise-grade security and compliance.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    category: "Case Study",
    icon: FileCheck,
    title: "How Nixon Peabody Reduced Review Time by 70%",
    description: "Real-world results from implementing Venio's AI-powered review platform.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    category: "Blog",
    icon: FileText,
    title: "ECA Best Practices for Cost-Effective Discovery",
    description: "Strategies for early case assessment that reduce costs and improve outcomes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

const categoryColors = {
  Blog: "bg-white text-blue-500 border-blue-500/20",
  Guide: "bg-white text-green-500 border-green-500/20",
  Webinar: "bg-white text-purple-500 border-purple-500/20",
  "Case Study": "bg-white text-orange-500 border-orange-500/20"
};

const ResourcesCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Resources for Law Firms
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore blogs, guides, and industry insights tailored for eDiscovery and legal teams
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group h-full overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.2)] transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-accent/10" />
                        <Badge 
                          className={`absolute bottom-4 left-4 ${categoryColors[resource.category as keyof typeof categoryColors]}`}
                          variant="outline"
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {resource.category}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <button className="text-primary font-semibold hover:underline text-sm flex items-center gap-1">
                          Read More <ArrowRight className="h-4 w-4" />
                        </button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300" />
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <CarouselNext className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

// ProblemSolutionSection Component
const solutions = [
  {
    problem: "Manual Review",
    problemDetail: "Hours spent reviewing documents manually",
    solution: "AI-Powered Analysis",
    solutionDetail: "Instant document classification and review",
    impact: "85%",
    impactLabel: "Time Saved",
    gradient: "from-primary via-primary/80 to-accent",
    icon: Clock,
    stat: "200+",
    statLabel: "Hours saved monthly"
  },
  {
    problem: "Data Silos",
    problemDetail: "Information scattered across multiple systems",
    solution: "Unified Platform",
    solutionDetail: "Single source of truth for all case data",
    impact: "90%",
    impactLabel: "Faster Access",
    gradient: "from-accent via-accent/80 to-primary",
    icon: TrendingUp,
    stat: "3x",
    statLabel: "Faster retrieval"
  },
  {
    problem: "High Costs",
    problemDetail: "Expensive external review teams",
    solution: "Automated Workflows",
    solutionDetail: "In-house automation reduces external spend",
    impact: "60%",
    impactLabel: "Cost Reduction",
    gradient: "from-primary/90 via-accent/70 to-primary/90",
    icon: DollarSign,
    stat: "$500K+",
    statLabel: "Annual savings"
  },
  {
    problem: "Compliance Risk",
    problemDetail: "Manual processes prone to human error",
    solution: "Smart Validation",
    solutionDetail: "Automated compliance checks and alerts",
    impact: "95%",
    impactLabel: "Error Reduction",
    gradient: "from-accent via-primary/70 to-accent/80",
    icon: Shield,
    stat: "99.9%",
    statLabel: "Accuracy rate"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-background">
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Transform Your Workflow
          </h2>
          <p className="text-lg text-muted-foreground">
            See how leading law firms overcome their biggest challenges
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative px-16 md:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {solutions.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <CarouselItem key={index} className="pl-4">
                    <div className="py-6 px-2">
                      <div className="rounded-2xl border-2 border-border/50 bg-card shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:flex-[4] p-6 md:p-8 bg-muted/30 border-r-0 md:border-r border-b md:border-b-0 border-border/50">
                            <div className="space-y-3 h-full flex flex-col">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold uppercase tracking-wider w-fit">
                                <Icon className="h-3.5 w-3.5" />
                                Before
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground/80">
                                {item.problem}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-grow">
                                {item.problemDetail}
                              </p>
                            </div>
                          </div>

                          <div className="md:flex-[6] p-6 md:p-8 bg-gradient-to-br from-accent/5 via-accent/10 to-transparent">
                            <div className="space-y-3 h-full flex flex-col">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider w-fit">
                                <Icon className="h-3.5 w-3.5" />
                                After
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                {item.solution}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-grow">
                                {item.solutionDetail}
                              </p>
                              
                              <div className="flex gap-4 md:gap-6 pt-4 mt-auto border-t border-accent/20">
                                <div className="flex-1">
                                  <div className="text-2xl md:text-3xl font-bold text-accent">
                                    {item.impact}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">
                                    {item.impactLabel}
                                  </div>
                                </div>
                                {item.stat && (
                                  <div className="flex-1">
                                    <div className="text-2xl md:text-3xl font-bold text-accent">
                                      {item.stat}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">
                                      {item.statLabel}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12 md:-left-16" />
            <CarouselNext className="-right-12 md:-right-16" />
          </Carousel>
        </div>

        <div className="text-center mt-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" variant="secondary" className="group shadow-lg hover:shadow-xl transition-shadow">
            Talk to an Expert
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// ===== MAIN PAGE COMPONENT =====

const LawFirmSolutionsStandalone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clientLogos = [
    { name: "Amentum", src: amentum },
    { name: "Consilio", src: consilio },
    { name: "Array", src: array },
    { name: "Haug Partners", src: haugPartners },
    { name: "Nixon Peabody", src: nixonPeabody },
    { name: "Proteus", src: proteus },
    { name: "CDS", src: cds },
    { name: "Epario", src: epario },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden gradient-animated pt-32 pb-36">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          
          <div className="relative z-10 container mx-auto px-6 max-w-5xl flex-1 flex items-center">
            <div className="text-center animate-fade-in w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Transform Your Law Firm's eDiscovery Process
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Cut costs by 60%, accelerate review by 70%, and deliver exceptional results with Venio's AI-powered eDiscovery platform designed for modern law firms.
              </p>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 glow-accent-hover group"
              >
                Talk to an Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative z-10 w-full mt-16">
            <p className="text-white/70 text-sm mb-6 font-body text-center"><span className="border-b-2 border-[#3DC47E] pb-1">Trusted by leading organizations</span></p>
            <div className="overflow-hidden py-6">
              <div className="flex gap-24 animate-scroll">
                {[
                  { src: amentum, name: "Amentum" },
                  { src: array, name: "Array" },
                  { src: cds, name: "CDS" },
                  { src: consilio, name: "Consilio" },
                  { src: epario, name: "Epario" },
                  { src: haugPartners, name: "Haug Partners" },
                  { src: nixonPeabody, name: "Nixon Peabody" },
                  { src: proteus, name: "Proteus" }
                ].map((logo, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                ))}
                {[
                  { src: amentum, name: "Amentum" },
                  { src: array, name: "Array" },
                  { src: cds, name: "CDS" },
                  { src: consilio, name: "Consilio" },
                  { src: epario, name: "Epario" },
                  { src: haugPartners, name: "Haug Partners" },
                  { src: nixonPeabody, name: "Nixon Peabody" },
                  { src: proteus, name: "Proteus" }
                ].map((logo, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProblemSolutionSection />

        <section className="relative py-20 overflow-hidden gradient-animated">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ask Anna: Your eDiscovery Assistant
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Get instant answers about how Venio can solve your specific challenges. Anna is here to help.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AnnaChat />
            </div>
          </div>
        </section>

        <DataPointsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ResourcesCarousel />
      </main>

      <Footer />
    </div>
  );
};

export default LawFirmSolutionsStandalone;
