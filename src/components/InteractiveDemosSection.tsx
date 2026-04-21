import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const demos = [
  {
    id: "ediscovery",
    title: "Venio eDiscovery",
    description: "Manage the entire eDiscovery lifecycle in one secure, defensible, and fully unified platform.",
    href: "/venio-ediscovery",
    embedUrl: "https://app.supademo.com/embed/cmmelkd6v2zmwnr99x6s6tjpr?embed_v=2&utm_source=embed"
  },
  {
    id: "review",
    title: "Venio Review",
    description: "Drive faster, smarter document review while minimizing risk and maximizing control.",
    href: "/venio-review",
    embedUrl: "https://app.supademo.com/embed/cmmd9geyz0mavnr99bsv4nyv3?embed_v=2&utm_source=embed"
  },
  {
    id: "eca",
    title: "Venio ECA",
    description: "Surface critical insights early to reduce data volume, risk exposure, and downstream review costs.",
    href: "/venio-eca",
    embedUrl: "https://app.supademo.com/embed/cmmehii992ss6nr99pi748qcx?embed_v=2&utm_source=embed"
  },
  {
    id: "legal-hold",
    title: "Venio Legal Hold",
    description: "Automate and track defensible legal holds with centralized oversight and complete audit visibility.",
    href: "/venio-legal-hold",
    embedUrl: "https://app.supademo.com/embed/cmnmxampp47bgaburncntk4fy?embed_v=2&utm_source=embed"
  }
];

const InteractiveDemosSection = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const [activeFrame, setActiveFrame] = useState<"a" | "b">("a");
  const [frameADemoId, setFrameADemoId] = useState(demos[0].id);
  const [frameBDemoId, setFrameBDemoId] = useState(demos[0].id);
  const [crossfadeTo, setCrossfadeTo] = useState<"a" | "b" | null>(null);
  const [loadingFrame, setLoadingFrame] = useState<"a" | "b" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobilePortalNode, setMobilePortalNode] = useState<HTMLDivElement | null>(null);
  const crossfadeTimeoutRef = useRef<number | null>(null);
  const loadTokenRef = useRef({ a: 0, b: 0 });
  const mobileDemoSlotRef = useRef<Record<string, HTMLDivElement | null>>({});
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const demoContainerRef = useRef<HTMLDivElement | null>(null);
  const crossfadeMs = 220;
  const swapDelayMs = 320;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);
    handleChange();
    if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handleChange);
    else mediaQuery.addListener(handleChange);

    return () => {
      if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handleChange);
      else mediaQuery.removeListener(handleChange);
      if (crossfadeTimeoutRef.current) window.clearTimeout(crossfadeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setMobilePortalNode(null);
      return;
    }
    setMobilePortalNode(mobileDemoSlotRef.current[activeDemo] ?? null);
  }, [activeDemo, isDesktop]);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const demoContainer = demoContainerRef.current;
    if (!leftColumn) return;
    if (!isDesktop || !demoContainer) {
      leftColumn.style.height = "";
      return;
    }

    const updateHeight = () => {
      const { height } = demoContainer.getBoundingClientRect();
      leftColumn.style.height = height ? `${height}px` : "";
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(demoContainer);
    return () => observer.disconnect();
  }, [isDesktop, activeDemo]);

  const handleSelectDemo = (id: string) => {
    if (id === activeDemo) return;

    setActiveDemo(id);
    const nextFrame = activeFrame === "a" ? "b" : "a";
    if (crossfadeTimeoutRef.current) window.clearTimeout(crossfadeTimeoutRef.current);
    loadTokenRef.current[nextFrame] += 1;
    setCrossfadeTo(null);
    setLoadingFrame(nextFrame);

    if (nextFrame === "a") setFrameADemoId(id);
    else setFrameBDemoId(id);
  };

  const frameADemo = demos.find((demo) => demo.id === frameADemoId) || demos[0];
  const frameBDemo = demos.find((demo) => demo.id === frameBDemoId) || demos[0];
  const activeIndex = Math.max(0, demos.findIndex((demo) => demo.id === activeDemo));
  const tabRowTemplate = demos.map((_, i) => (i === activeIndex ? "2fr" : "0.85fr")).join(" ");
  const isCrossfading = crossfadeTo !== null;
  const opacityFor = (frame: "a" | "b") => {
    if (!isCrossfading) return frame === activeFrame ? 1 : 0;
    return frame === crossfadeTo ? 1 : 0;
  };

  const demoEmbed = (
    <div className="w-full">
      <div
        ref={demoContainerRef}
        className="relative overflow-hidden rounded-2xl bg-transparent"
        style={{
          position: "relative",
          maxHeight: "80svh",
          width: "100%",
          aspectRatio: "2.01",
        }}
      >
        <iframe
          loading="eager"
          src={frameADemo.embedUrl}
          title={`Interactive Demo - ${frameADemo.title}`}
          allow="clipboard-write"
          frameBorder={0}
          allowFullScreen
          onLoad={() => {
            if (loadingFrame !== "a") return;
            const expectedToken = loadTokenRef.current.a;
            window.setTimeout(() => {
              if (loadTokenRef.current.a !== expectedToken) return;
              window.setTimeout(() => {
                if (loadTokenRef.current.a !== expectedToken) return;
                setCrossfadeTo("a");
                crossfadeTimeoutRef.current = window.setTimeout(() => {
                  setActiveFrame("a");
                  setCrossfadeTo(null);
                  setLoadingFrame(null);
                }, crossfadeMs);
              }, swapDelayMs);
            }, 0);
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: opacityFor("a"),
            transition: `opacity ${crossfadeMs}ms ease`,
            pointerEvents: activeFrame === "a" ? "auto" : "none",
          }}
        />
        <iframe
          loading="eager"
          src={frameBDemo.embedUrl}
          title={`Interactive Demo - ${frameBDemo.title}`}
          allow="clipboard-write"
          frameBorder={0}
          allowFullScreen
          onLoad={() => {
            if (loadingFrame !== "b") return;
            const expectedToken = loadTokenRef.current.b;
            window.setTimeout(() => {
              if (loadTokenRef.current.b !== expectedToken) return;
              window.setTimeout(() => {
                if (loadTokenRef.current.b !== expectedToken) return;
                setCrossfadeTo("b");
                crossfadeTimeoutRef.current = window.setTimeout(() => {
                  setActiveFrame("b");
                  setCrossfadeTo(null);
                  setLoadingFrame(null);
                }, crossfadeMs);
              }, swapDelayMs);
            }, 0);
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: opacityFor("b"),
            transition: `opacity ${crossfadeMs}ms ease`,
            pointerEvents: activeFrame === "b" ? "auto" : "none",
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="interactive-demos" className="py-14 md:py-[72px] lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Connected Capabilities with Singular Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Integrated modules that power modern eDiscovery from first notice to final production.
          </p>
        </div>

        {/* Interactive Demo Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] gap-1 lg:gap-1 items-stretch">
            {/* Left: Product List */}
            <div
              ref={leftColumnRef}
              className="flex flex-col gap-3 lg:grid lg:gap-3 lg:h-full self-stretch"
              style={isDesktop ? { gridTemplateRows: tabRowTemplate } : undefined}
            >
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activeDemo === demo.id}
                  onClick={() => handleSelectDemo(demo.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectDemo(demo.id);
                    }
                  }}
                  className={`group relative w-full min-h-[92px] lg:min-h-0 lg:h-full text-left rounded-2xl px-5 py-4 md:px-6 md:py-5 flex items-center gap-4 backdrop-blur-sm overflow-hidden transition-[box-shadow,transform] duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-venioGreen/40 ${
                    activeDemo === demo.id
                      ? 'bg-white shadow-[0_0_50px_-16px_rgba(61,196,126,0.55),0_0_0_1px_rgba(61,196,126,0.30)] scale-[1.01] lg:scale-100'
                      : 'bg-white shadow-[0_0_26px_-12px_rgba(15,23,42,0.30)] hover:shadow-[0_0_34px_-12px_rgba(15,23,42,0.34)]'
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(61,196,126,0.06),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.04),transparent_60%)] opacity-70 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/18 via-white/0 to-white/18 pointer-events-none" />
                  <div className={`relative flex gap-4 w-full transition-all duration-300 ${activeDemo === demo.id ? 'items-start pt-2 lg:pt-3' : 'items-center'}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        {activeDemo === demo.id && (
                          <div className="w-1.5 h-6 rounded-full bg-[#3DC47E] transition-all duration-300" />
                        )}
                        <h3
                          className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                            activeDemo === demo.id ? 'text-[#10A250]' : 'text-slate-600'
                          }`}
                        >
                          {demo.title}
                        </h3>
                      </div>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ${
                          activeDemo === demo.id
                            ? 'mt-2 pl-[18px] pr-3 lg:pr-4 pb-2 max-h-44 lg:max-h-52 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 -translate-y-1'
                        }`}
                      >
                        <p className="text-sm text-slate-500 leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                          {demo.description}
                        </p>
                        <div className="mt-3">
                          <Link
                            to={demo.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#10A250] hover:text-[#0E8F46] transition-colors"
                          >
                            Learn more
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>

                      <div
                        className={`mt-4 lg:hidden ${activeDemo === demo.id ? "" : "hidden"}`}
                        ref={(el) => {
                          mobileDemoSlotRef.current[demo.id] = el;
                        }}
                      />
                    </div>
                    <ChevronRight
                      className={`ml-2 h-4 w-4 flex-shrink-0 transition-all duration-200 hidden lg:block ${
                        activeDemo === demo.id
                          ? 'mt-1 text-[#10A250] translate-x-0.5'
                          : 'text-slate-400 group-hover:text-slate-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Demo Embed */}
            {isDesktop && <div className="flex-1 self-stretch">{demoEmbed}</div>}
          </div>

          {!isDesktop && mobilePortalNode ? createPortal(demoEmbed, mobilePortalNode) : null}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemosSection;
