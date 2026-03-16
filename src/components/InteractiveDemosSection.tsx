import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const demos = [
  {
    id: "legal-hold",
    title: "Venio Legal Hold",
    description: "Automate notices, reminders, and escalations to custodians with defensible tracking built in. Say goodbye to spreadsheets and hello to smart legal hold management with eDiscovery tools.",
    embedUrl: "https://app.supademo.com/embed/cmmelkd6v2zmwnr99x6s6tjpr?embed_v=2&utm_source=embed"
  },
  {
    id: "eca",
    title: "Venio ECA",
    description: "Analyze large datasets upfront to filter noise, reduce review volumes, and lower litigation spend. Make fast, informed decisions before the full review begins using advanced eDiscovery software.",
    embedUrl: "https://app.supademo.com/embed/cmmehii992ss6nr99pi748qcx?embed_v=2&utm_source=embed"
  },
  {
    id: "review",
    title: "Venio Review",
    description: "Streamline document tagging, redaction, and annotation in an intuitive review workspace. Built for precision, speed, and collaboration across legal teams with powerful eDiscovery review tools.",
    embedUrl: "https://app.supademo.com/embed/cmmd9geyz0mavnr99bsv4nyv3?embed_v=2&utm_source=embed"
  },
  {
    id: "production",
    title: "Venio Production",
    description: "Boost your review speed with AI that prioritizes key documents, learns from reviewer behavior, and flags risks automatically. Smart review, powered by intelligence, in a robust eDiscovery platform.",
    embedUrl: "https://app.supademo.com/embed/cmmeiwzre2v4rnr99mb3xthjb?embed_v=2&utm_source=embed"
  }
];

const InteractiveDemosSection = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const [displayedDemoId, setDisplayedDemoId] = useState(demos[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const swapTimeoutRef = useRef<number | null>(null);
  const fadeInTimeoutRef = useRef<number | null>(null);
  const transitionMs = 220;

  useEffect(() => {
    return () => {
      if (swapTimeoutRef.current) window.clearTimeout(swapTimeoutRef.current);
      if (fadeInTimeoutRef.current) window.clearTimeout(fadeInTimeoutRef.current);
    };
  }, []);

  const handleSelectDemo = (id: string) => {
    if (id === activeDemo) return;

    setActiveDemo(id);
    setIsTransitioning(true);

    if (swapTimeoutRef.current) window.clearTimeout(swapTimeoutRef.current);
    if (fadeInTimeoutRef.current) window.clearTimeout(fadeInTimeoutRef.current);

    swapTimeoutRef.current = window.setTimeout(() => {
      setDisplayedDemoId(id);
      fadeInTimeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
      }, 30);
    }, transitionMs);
  };

  const currentDemo = demos.find(demo => demo.id === displayedDemoId) || demos[0];

  return (
    <section id="interactive-demos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience Venio in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Explore interactive demos of our powerful eDiscovery solutions
          </p>
        </div>

        {/* Interactive Demo Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-stretch">
            {/* Left: Product List */}
            <div className="space-y-3">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => handleSelectDemo(demo.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-500 ease-out border-2 ${
                    activeDemo === demo.id
                      ? 'border-venioGreen shadow-xl shadow-venioGreen/20 bg-gradient-to-br from-venioGreen/10 to-venioGreen/5 scale-[1.02] opacity-100'
                      : 'border-border hover:border-venioGreen/50 bg-card opacity-50 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <h3 className={`text-lg font-bold ${
                        activeDemo === demo.id ? 'text-venioGreen mb-2' : 'text-foreground'
                      }`}>
                        {demo.title}
                      </h3>
                      {activeDemo === demo.id && (
                        <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in">
                          {demo.description}
                        </p>
                      )}
                    </div>
                    <ChevronRight 
                      className={`ml-3 h-5 w-5 transition-all duration-300 ${
                        activeDemo === demo.id 
                          ? 'text-venioGreen translate-x-1' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Demo Embed */}
            <div className="flex-1">
              <div className="w-full">
                <div
                  key={displayedDemoId}
                  className={`transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                  style={{
                    position: 'relative',
                    boxSizing: 'content-box',
                    maxHeight: '80svh',
                    width: '100%',
                    aspectRatio: '2.01',
                    padding: '40px 0'
                  }}
                >
                  <iframe
                    loading="lazy"
                    src={currentDemo.embedUrl}
                    title={`Interactive Demo - ${currentDemo.title}`}
                    allow="clipboard-write"
                    frameBorder={0}
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemosSection;
