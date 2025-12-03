import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Zap, Brain, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [videoProgress, setVideoProgress] = useState<number[]>([0, 0, 0, 0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const tabs = [
    {
      icon: Shield,
      title: "End-to-End Platform",
      videoUrl: "/videos/venio-one.mp4"
    },
    {
      icon: Brain,
      title: "AI-Powered Review",
      videoUrl: "/videos/venio-ai-review.mp4"
    },
    {
      icon: Zap,
      title: "Hybrid Deployment",
      videoUrl: "/videos/venio-legal-hold.mp4"
    },
    {
      icon: Globe,
      title: "Cull Data Early",
      videoUrl: "/videos/venio-eca.mp4"
    }
  ];

  const handleVideoEnd = () => {
    // Mark current video as complete
    setVideoProgress(prev => {
      const updated = [...prev];
      updated[activeTab] = 100;
      return updated;
    });
    
    // Move to next tab
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log("Video autoplay prevented:", err));
    }
  }, [activeTab]);

  useEffect(() => {
    if (!videoRef.current) return;

    const updateProgress = () => {
      if (videoRef.current) {
        const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setVideoProgress(prev => {
          const updated = [...prev];
          updated[activeTab] = percent;
          return updated;
        });
      }
    };

    const video = videoRef.current;
    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [activeTab]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 pb-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-animated"></div>

      {/* Dynamic Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Glowing Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[80px]" style={{ background: 'hsla(202, 100%, 50%, 0.3)' }}>
          <div className="w-full h-full animate-float"></div>
        </div>
        <div className="absolute bottom-32 right-10 w-[500px] h-[500px] rounded-full blur-[80px]" style={{ background: 'hsla(145, 53%, 51%, 0.25)' }}>
          <div className="w-full h-full float-delayed"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px]" style={{ background: 'hsla(217, 72%, 15%, 0.2)' }}>
          <div className="w-full h-full animate-pulse"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-40 right-20 w-20 h-20 border-2 rounded-lg animate-spin-slow" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}></div>
        <div className="absolute bottom-40 left-32 w-16 h-16 border-2 rotate-45 animate-bounce-slow" style={{ borderColor: 'rgba(61, 196, 126, 0.3)' }}></div>
        <div className="absolute top-1/3 left-20 w-12 h-12 rounded-full animate-float" style={{ background: 'hsla(202, 100%, 50%, 0.2)' }}></div>
        <div className="absolute bottom-1/3 right-40 w-24 h-24 border-2 rounded-full animate-pulse" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}></div>
      </div>

      {/* Gradient Overlay - ends at middle of video placeholder */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-[85%] bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
      </div>

      {/* White background for bottom section */}
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-white pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Content */}
          <div className="animate-fade-in-scale">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-white/90 text-sm font-medium">AI-Powered eDiscovery Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                Effortless eDiscovery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto font-body leading-relaxed">
              The only AI-powered, cloud and on-premises eDiscovery software that's intuitive.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-10">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60 text-lg px-10 py-6 shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById('interactive-demos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Take a Product Tour
              </Button>
            </div>

            {/* Feature Pills as Tabs */}
            <div className="grid grid-cols-4 gap-2 mb-2 mx-auto" style={{ width: '90%', maxWidth: '1296px' }}>
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                const progress = videoProgress[index];
                return (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`px-5 py-3 backdrop-blur-md rounded-t-lg text-sm transition-all duration-300 relative overflow-hidden border border-white/20 ${
                      isActive
                        ? "bg-white/95 text-primary font-bold shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30 hover:text-white font-medium"
                    }`}
                  >
                    {/* Progress bar - shown only for active tab */}
                    {isActive && (
                      <div 
                        className="absolute bottom-0 left-0 h-1 transition-all duration-100"
                        style={{ width: `${progress}%`, backgroundColor: '#3DC47E' }}
                      />
                    )}
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Dashboard/Video Section */}
            <div className="relative max-w-6xl mx-auto px-4 pb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
                <div className="aspect-[16/10] bg-black">
                  <video
                    key={activeTab}
                    ref={videoRef}
                    src={tabs[activeTab].videoUrl}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnd}
                    playsInline
                    muted
                    autoPlay
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

export default HeroSection;
