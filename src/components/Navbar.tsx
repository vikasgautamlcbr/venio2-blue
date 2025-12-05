import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Search, Brain, FileCheck, Server, Workflow, MonitorSmartphone, AudioLines, Scissors, Upload, Shield, FileText, Clock, BookOpen, Video, Newspaper, Users, Building, Briefcase, Landmark } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import venioLogo from "@/assets/venio-logo.svg";
import BookDemoDialog from "./BookDemoDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState("ediscovery");
  const [activeSolution, setActiveSolution] = useState("use-case");
  const location = useLocation();
  const prodListRef = useRef<HTMLDivElement | null>(null);
  const solListRef = useRef<HTMLDivElement | null>(null);
  const [prodHighlightTop, setProdHighlightTop] = useState(0);
  const [prodHighlightHeight, setProdHighlightHeight] = useState(0);
  const [solHighlightTop, setSolHighlightTop] = useState(0);
  const [solHighlightHeight, setSolHighlightHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = prodListRef.current?.querySelector(`[data-id="${activeProduct}"]`) as HTMLElement | null;
    if (el) {
      setProdHighlightTop(el.offsetTop);
      setProdHighlightHeight(el.offsetHeight);
    }
  }, [activeProduct]);

  useEffect(() => {
    const el = solListRef.current?.querySelector(`[data-id="${activeSolution}"]`) as HTMLElement | null;
    if (el) {
      setSolHighlightTop(el.offsetTop);
      setSolHighlightHeight(el.offsetHeight);
    }
  }, [activeSolution]);

  const navItems = [
    {
      label: "Products",
      hasDropdown: true,
      hasMegaMenu: true,
      items: ["Venio Review", "Venio One", "Venio ECA", "AI at the Core", "Venio Production"],
    },
    {
      label: "Solutions",
      hasDropdown: true,
      hasMegaMenu: true,
      categories: [],
    },
    {
      label: "Pricing",
      hasDropdown: false,
      link: "/pricing",
    },
    {
      label: "Resources",
      hasDropdown: true,
      items: ["Blogs", "eBooks / Guides", "Product Videos", "Case Studies"],
    },
    {
      label: "Partner",
      hasDropdown: false,
      link: "#",
    },
    {
      label: "Why Venio",
      hasDropdown: false,
      link: "/why-venio",
    },
  ];
  const resourceItems = [
    { label: "Blogs", link: "/resources", icon: Newspaper },
    { label: "eBooks / Guides", link: "/resources", icon: BookOpen },
    { label: "Product Videos", link: "/resources", icon: Video },
    { label: "Case Studies", link: "/resources", icon: FileText },
  ];

  const solutionTabs = [
    {
      id: "use-case",
      name: "By Use Case",
      items: [
        { label: "ECA (Early Case Assessment)", link: "#", icon: Brain, desc: "Analyze data early to assess case viability" },
        { label: "Document Review Workflows", link: "#", icon: Workflow, desc: "Streamline review with automated workflows" },
        { label: "Internal Investigations", link: "#", icon: Shield, desc: "Conduct rapid internal data probes" },
        { label: "FOIA Requests", link: "#", icon: FileText, desc: "Efficiently handle freedom of information requests" },
      ],
    },
    {
      id: "industry",
      name: "By Industry",
      items: [
        { label: "For Law Firms", link: "/law-firm-solutions", icon: Briefcase, desc: "End-to-end eDiscovery for legal practices" },
        { label: "For Corporations", link: "#", icon: Building, desc: "In-house legal hold and discovery management" },
        { label: "For Service Providers", link: "#", icon: Users, desc: "Scalable platform for hosting partners" },
        { label: "For Government & Public Sector", link: "#", icon: Landmark, desc: "Secure solutions for government agencies" },
        { label: "For Litigation Support Teams", link: "#", icon: Shield, desc: "Tools for complex litigation needs" },
        { label: "For Investigations & Compliance Teams", link: "#", icon: Search, desc: "Compliance and investigation management" },
      ],
    },
    {
      id: "role",
      name: "By Role",
      items: [
        { label: "Legal Counsel", link: "#", icon: FileText, desc: "Oversight and strategy tools" },
        { label: "eDiscovery Manager", link: "#", icon: Users, desc: "Day-to-day project management" },
        { label: "eDiscovery Attorneys", link: "#", icon: Briefcase, desc: "Review and analysis interface" },
        { label: "VP of eDiscovery Ops", link: "#", icon: Brain, desc: "Operational insights and reporting" },
        { label: "CTO of eDiscovery Ops", link: "#", icon: Server, desc: "Secure and scalable infrastructure" },
      ],
    },
  ];

  const productMenu = [
    {
      id: "ediscovery",
      name: "Venio eDiscovery",
      overviewTitle: "Venio eDiscovery Overview",
      overviewDesc: "The World's Fastest eDiscovery Engine",
      overviewLink: "/venio-ediscovery",
      modules: [
        { title: "Processing", desc: "Test and create web experiences that convert", icon: Server },
        { title: "Venio ECA", desc: "Delight mobile app users with optimized experiences", icon: Brain },
        { title: "Venio Review", desc: "Test complex features across any tech stack or device", icon: FileCheck },
      ],
      features: [
        { label: "Social Media & Mobile", icon: MonitorSmartphone },
        { label: "A/V Transcription", icon: AudioLines },
        { label: "Automated Redaction", icon: Scissors },
        { label: "Continuous Active Learning", icon: Brain },
        { label: "Self-Service Uploads", icon: Upload },
      ],
    },
    {
      id: "legal-hold",
      name: "Venio Legal Hold",
      overviewTitle: "Venio Legal Hold Overview",
      overviewDesc: "Set up defensible holds, automate reminders, track acknowledgements",
      overviewLink: "/venio-legal-hold",
      modules: [
        { title: "Create & Launch", desc: "Set up holds in minutes", icon: Workflow },
        { title: "Track Custodians", desc: "Real-time status monitoring", icon: FileCheck },
        { title: "Audit & Release", desc: "Complete defensibility", icon: Shield },
      ],
      features: [
        { label: "Acknowledgement Tracking", icon: FileCheck },
        { label: "Templates", icon: FileText },
        { label: "Policy Integration", icon: Shield },
        { label: "Automated Follow-ups", icon: Clock },
        { label: "Defensible Logs", icon: Shield },
      ],
    },
  ];

  const isActiveRoute = (link?: string) => {
    if (!link) return false;
    return location.pathname === link;
  };

  const isActiveDropdownItem = (itemLabel: string, subItem: string) => {
    // Check for specific page mappings
    if (itemLabel === "Products" && subItem === "Venio Review" && location.pathname === "/venio-legal-hold") {
      return true;
    }
    if (itemLabel === "Solutions" && subItem === "Law Firms" && location.pathname === "/law-firm-solutions") {
      return true;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "glass-navbar rounded-2xl shadow-2xl" 
          : "glass-navbar rounded-2xl shadow-xl"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 py-3">
            <img src={venioLogo} alt="VENIO" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.label} className={`group flex-shrink-0 ${item.hasMegaMenu ? 'static' : 'relative'} ${isScrolled ? 'py-3' : 'py-4'}`}>
                {item.link && !item.hasDropdown ? (
                  <Link 
                    to={item.link}
                    className={`relative transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap text-white hover:text-accent ${
                      isActiveRoute(item.link) 
                        ? 'after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:animate-in after:slide-in-from-left' 
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="text-white hover:text-accent transition-colors font-medium text-sm flex items-center gap-1 whitespace-nowrap">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} className="opacity-70" />}
                  </button>
                )}
                {item.hasDropdown && item.hasMegaMenu && item.label === "Products" && (
                  <div className="absolute top-full left-0 right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="rounded-2xl shadow-xl p-8 w-[1200px] max-w-[calc(100vw-4rem)] mx-auto bg-white backdrop-blur-sm border border-gray-100">
                      <div className="grid grid-cols-[320px_1fr_320px] gap-0">
                        <div ref={prodListRef} onMouseLeave={() => {
                          const el = prodListRef.current?.querySelector(`[data-id="${activeProduct}"]`) as HTMLElement | null;
                          if (el) { setProdHighlightTop(el.offsetTop); setProdHighlightHeight(el.offsetHeight); }
                        }} className="relative pr-6 border-r border-gray-200">
                          <div className="absolute left-2 right-2 rounded-lg bg-gradient-to-r from-[#3DC47E] to-[#2FA964] shadow-lg ring-1 ring-[rgba(61,196,126,0.25)] transition-all duration-300 pointer-events-none z-0" style={{ top: prodHighlightTop, height: prodHighlightHeight }} />
                          <div className="space-y-2 relative z-10">
                            {productMenu.map((p) => (
                              <button
                                key={p.id}
                                data-id={p.id}
                                className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-colors ${activeProduct === p.id ? 'text-white' : 'text-[#2E2E2E] hover:text-white'}`}
                                onClick={() => setActiveProduct(p.id)}
                                onMouseEnter={(e) => { 
                                  setActiveProduct(p.id);
                                  setProdHighlightTop(e.currentTarget.offsetTop); 
                                  setProdHighlightHeight(e.currentTarget.offsetHeight); 
                                }}
                              >
                                {p.name}
                              </button>
                            ))}
                          </div>
                        </div>
                        {productMenu.filter((p) => p.id === activeProduct).map((p) => (
                          <React.Fragment key={p.id}>
                            <div className="pl-8">
                              <div className="space-y-3">
                                <Link to={p.overviewLink} className="flex items-center gap-1 text-[#0b1c3f] font-heading font-bold">
                                  <span className="text-lg">{p.overviewTitle}</span>
                                  <ChevronRight size={16} className="text-[#0b1c3f]" />
                                </Link>
                                <p className="text-[#2E2E2E] text-sm mt-0.5 opacity-80">{p.overviewDesc}</p>
                                <div className="border-t border-gray-200"></div>
                                <div className="space-y-2">
                                  {p.modules.map((m, i) => (
                                    <Link key={i} to={p.overviewLink} className="group flex items-center gap-4 px-4 py-3.5 rounded-lg text-[#2E2E2E] hover:text-[#0b1c3f] hover:bg-gray-50 hover:shadow-sm hover:ring-1 ring-[rgba(11,28,63,0.12)] transition-transform duration-200 hover:translate-y-px">
                                      <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <m.icon className="h-5 w-5 text-[#0b1c3f]" />
                                      </div>
                                      <div>
                                        <div className="font-semibold text-[#2E2E2E] group-hover:text-[#0b1c3f]">{m.title}</div>
                                        <div className="text-xs text-[#2E2E2E] opacity-70">{m.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="pl-8">
                              <div className="space-y-4">
                                <Link to={p.overviewLink} className="block rounded-xl bg-gradient-to-r from-[#0b1c3f] to-[#1e3a8a] text-white p-4 shadow-lg">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="text-sm font-semibold">AI at the Core</div>
                                      <div className="text-xs opacity-80">Supercharge your optimization velocity</div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/20" />
                                  </div>
                                </Link>
                                <div className="space-y-2">
                                  <div className="text-[#2E2E2E] font-semibold">Features</div>
                                  <div className="grid grid-cols-1 gap-2">
                                    {p.features.map((f, i) => (
                                      <div key={i} className="flex items-center gap-2.5 px-2 py-1.5 rounded-md bg-gray-50 hover:bg-gray-100">
                                        <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center opacity-70">
                                          <f.icon className="h-3.5 w-3.5 text-[#0b1c3f]" />
                                        </div>
                                        <span className="text-sm text-[#2E2E2E] opacity-80">{f.label}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mega Menu for Solutions - Tabbed */}
                {item.hasDropdown && item.hasMegaMenu && item.label === "Solutions" && (
                  <div className="absolute top-full left-0 right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="rounded-2xl shadow-xl p-8 w-[1200px] max-w-[calc(100vw-4rem)] mx-auto bg-white backdrop-blur-sm border border-gray-100">
                      <div className="grid grid-cols-[320px_1fr] gap-0">
                        <div ref={solListRef} onMouseLeave={() => {
                          const el = solListRef.current?.querySelector(`[data-id="${activeSolution}"]`) as HTMLElement | null;
                          if (el) { setSolHighlightTop(el.offsetTop); setSolHighlightHeight(el.offsetHeight); }
                        }} className="relative pr-6 border-r border-gray-200">
                          <div className="absolute left-2 right-2 rounded-lg bg-gradient-to-r from-[#3DC47E] to-[#2FA964] shadow-lg ring-1 ring-[rgba(61,196,126,0.25)] transition-all duration-300 pointer-events-none z-0" style={{ top: solHighlightTop, height: solHighlightHeight }} />
                          <div className="space-y-2 relative z-10">
                            {solutionTabs.map((t) => (
                              <button
                                key={t.id}
                                data-id={t.id}
                                className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-colors ${activeSolution === t.id ? 'text-white' : 'text-[#2E2E2E] hover:text-white'}`}
                                onClick={() => setActiveSolution(t.id)}
                                onMouseEnter={(e) => { 
                                  setActiveSolution(t.id);
                                  setSolHighlightTop(e.currentTarget.offsetTop); 
                                  setSolHighlightHeight(e.currentTarget.offsetHeight); 
                                }}
                              >
                                {t.name}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="pl-6">
                          {solutionTabs.filter((t) => t.id === activeSolution).map((t) => (
                            <div key={t.id} className="space-y-6">
                              <div className={`grid ${activeSolution==='industry' ? 'grid-cols-2' : 'grid-cols-2'} gap-4`}>
                                {(() => {
                                  const cols = activeSolution === 'industry' ? 2 : 2;
                                  const rows = activeSolution === 'use-case' ? 2 : activeSolution === 'industry' ? 3 : 3;
                                  const desired = cols * rows;
                                  const items = t.items;
                                  return Array.from({ length: desired }).map((_, i) => {
                                    const s = items[i];
                                    if (s) {
                                      return s.link.startsWith('/') ? (
                                        <Link key={i} to={s.link} className="group flex items-center gap-4 px-4 py-3.5 rounded-lg hover:shadow-sm hover:bg-gray-50 hover:ring-1 ring-[rgba(11,28,63,0.12)] transition-transform duration-200 hover:translate-y-px">
                                          <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <s.icon className="h-5 w-5 text-[#0b1c3f]" />
                                          </div>
                                          <div>
                                            <div className="font-semibold text-[#2E2E2E] group-hover:text-[#0b1c3f]">{s.label}</div>
                                            <div className="text-xs text-[#2E2E2E] opacity-70">{s.desc}</div>
                                          </div>
                                        </Link>
                                      ) : (
                                        <a key={i} href={s.link} className="group flex items-center gap-4 px-4 py-3.5 rounded-lg hover:shadow-sm hover:bg-gray-50 hover:ring-1 ring-[rgba(11,28,63,0.12)] transition-transform duration-200 hover:translate-y-px">
                                          <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <s.icon className="h-5 w-5 text-[#0b1c3f]" />
                                          </div>
                                          <div>
                                            <div className="font-semibold text-[#2E2E2E] group-hover:text-[#0b1c3f]">{s.label}</div>
                                            <div className="text-xs text-[#2E2E2E] opacity-70">{s.desc}</div>
                                          </div>
                                        </a>
                                      );
                                    }
                                    return (
                                      <div key={i} className="p-3.5 rounded-lg opacity-0">
                                        <div className="w-8 h-8 rounded-md bg-gray-100"></div>
                                      </div>
                                    );
                                  });
                                })()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Regular Dropdown */}
                {item.hasDropdown && !item.hasMegaMenu && item.items && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className={`rounded-2xl p-6 min-w-[340px] ${item.label === 'Resources' ? 'bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl' : 'bg-[rgb(11,28,63)] border border-white/30 shadow-xl'}`}>
                      {item.label === 'Resources' ? (
                        <div className="grid grid-cols-1 gap-2">
                          {item.items.map((subItem, idx) => {
                            const resource = resourceItems[idx] || resourceItems[0];
                            return (
                              <Link
                                key={subItem}
                                to={resource.link}
                                className="group/item relative flex items-center gap-4 px-4 py-3.5 rounded-lg hover:shadow-sm hover:bg-gray-50 hover:ring-1 ring-[rgba(11,28,63,0.12)] transition-all duration-200 hover:translate-y-px"
                              >
                                <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                                  <resource.icon className="h-5 w-5" />
                                </div>
                                <div className="font-semibold text-foreground">{resource.label}</div>
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        item.items.map((subItem, idx) => {
                          const isActive = isActiveDropdownItem(item.label, subItem);
                          if (item.label === "Products" && subItem === "Venio Review") {
                            return (
                              <Link
                                key={subItem}
                                to="/venio-legal-hold"
                                className={`group/item relative flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${isActive ? 'text-white bg-white/15 font-medium' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover/item:bg-accent transition-colors"></div>
                                <span>Venio Legal Hold</span>
                              </Link>
                            );
                          }
                          return (
                            <a
                              key={subItem}
                              href="#"
                              className="group/item relative flex items-center gap-3 px-4 py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-accent transition-colors"></div>
                              <span>{subItem}</span>
                            </a>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`hidden lg:flex items-center gap-3 flex-shrink-0 ${isScrolled ? 'py-3' : 'py-4'}`}>
            <Link 
              to="/search"
              className="text-white hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Search"
            >
              <Search size={20} />
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <Link to="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-navbar rounded-xl p-4">
            {navItems.map((item) => (
              <div key={item.label} className="mb-4">
                {item.link && !item.hasDropdown ? (
                  <Link
                    to={item.link}
                    className={`relative mb-2 flex items-center gap-1 block font-semibold text-white ${
                      isActiveRoute(item.link)
                        ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent'
                        : ''
                    }`}
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
                
                {/* Mega Menu for Solutions in Mobile */}
                {item.hasDropdown && item.hasMegaMenu && item.categories && (
                  <div className="ml-2 mt-2 space-y-4">
                    {item.categories.map((category, idx) => (
                      <div key={category.title}>
                        {idx > 0 && <div className="border-t border-white/10 my-3"></div>}
                        <div className="text-accent text-xs font-semibold mb-2 uppercase tracking-wider px-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {category.title}
                        </div>
                        {category.items.map((subItem) => {
                          const isActive = isActiveDropdownItem(item.label, subItem);
                          if (subItem === "Law Firms") {
                            return (
                              <Link
                                key={subItem}
                                to="/law-firm-solutions"
                                className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-all ${
                                  isActive
                                    ? 'text-white bg-white/15 font-medium'
                                    : 'text-white/90 hover:text-accent hover:bg-white/10'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                                {subItem}
                              </Link>
                            );
                          }
                          return (
                            <a
                              key={subItem}
                              href="#"
                              className="flex items-center gap-3 px-4 py-3 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Regular Dropdown in Mobile */}
                {item.hasDropdown && !item.hasMegaMenu && item.items && item.items.map((subItem) => {
                  const isActive = isActiveDropdownItem(item.label, subItem);
                  // Handle special link for Venio Legal Hold in mobile menu
                  if (item.label === "Products" && subItem === "Venio Review") {
                    return (
                      <Link
                        key={subItem}
                        to="/venio-legal-hold"
                        className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-all ${
                          isActive
                            ? 'text-white bg-white/15 font-medium'
                            : 'text-white/90 hover:text-accent hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                        Venio Legal Hold
                      </Link>
                    );
                  }
                  // Handle Resources dropdown in mobile
                  if (item.label === "Resources") {
                    if (subItem === "All Resources") {
                      return (
                        <Link
                          key={subItem}
                          to="/resources"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                          {subItem}
                        </Link>
                      );
                    } else if (subItem === "Blog Demo") {
                      return (
                        <Link
                          key={subItem}
                          to="/blog/demo"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                          {subItem}
                        </Link>
                      );
                    } else if (subItem === "Case Study Demo") {
                      return (
                        <Link
                          key={subItem}
                          to="/resources/demo-asset"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                          {subItem}
                        </Link>
                      );
                    }
                  }
                  return (
                    <a
                      key={subItem}
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
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

      
    </nav>
  );
};

export default Navbar;
