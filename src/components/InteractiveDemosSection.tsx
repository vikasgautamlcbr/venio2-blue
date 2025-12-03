import { useState, useEffect } from "react";
import { ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const demos = [
  {
    id: "legal-hold",
    title: "Venio Legal Hold",
    description: "Automate notices, reminders, and escalations to custodians with defensible tracking built in. Say goodbye to spreadsheets and hello to smart legal hold management with eDiscovery tools.",
    embedUrl: "https://app.storylane.io/demo/pjaaebjnr9nb?embed=inline"
  },
  {
    id: "eca",
    title: "Venio ECA",
    description: "Analyze large datasets upfront to filter noise, reduce review volumes, and lower litigation spend. Make fast, informed decisions before the full review begins using advanced eDiscovery software.",
    embedUrl: "https://app.storylane.io/demo/pjaaebjnr9nb?embed=inline"
  },
  {
    id: "review",
    title: "Venio Review",
    description: "Streamline document tagging, redaction, and annotation in an intuitive review workspace. Built for precision, speed, and collaboration across legal teams with powerful eDiscovery review tools.",
    embedUrl: "https://app.storylane.io/demo/pjaaebjnr9nb?embed=inline"
  },
  {
    id: "production",
    title: "Venio Production",
    description: "Boost your review speed with AI that prioritizes key documents, learns from reviewer behavior, and flags risks automatically. Smart review, powered by intelligence, in a robust eDiscovery platform.",
    embedUrl: "https://app.storylane.io/demo/pjaaebjnr9nb?embed=inline"
  }
];

const InteractiveDemosSection = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const personalEmailDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com',
    'gmx.com', 'live.com', 'me.com', 'msn.com'
  ];

  const isWorkEmail = (email: string): boolean => {
    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !personalEmailDomains.includes(domain);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    
    if (!email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!isWorkEmail(email)) {
      toast.error("Please use your work email address");
      return;
    }
    
    setIsUnlocked(true);
    toast.success("Access granted! Enjoy the demo.");
  };

  useEffect(() => {
    // Load Storylane script
    const script = document.createElement('script');
    script.src = 'https://js.storylane.io/js/v2/storylane.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const currentDemo = demos.find(demo => demo.id === activeDemo) || demos[0];

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
                  onClick={() => setActiveDemo(demo.id)}
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

            {/* Right: Demo Embed or Gate Form */}
            <div className="flex-1">
              {!isUnlocked ? (
                <div className="h-full min-h-full flex items-center justify-center rounded-xl border-2 border-primary/20 p-8 relative overflow-hidden gradient-animated">
                  {/* Animated Background - Same as Hero */}
                  <div className="absolute inset-0">
                    {/* Glowing Orbs */}
                    <div className="absolute top-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/25 rounded-full blur-3xl float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                    
                    {/* Floating Geometric Shapes */}
                    <div className="absolute top-20 right-10 w-12 h-12 border-2 border-white/20 rounded-lg animate-spin-slow"></div>
                    <div className="absolute bottom-20 left-16 w-10 h-10 border-2 border-accent/30 rotate-45 animate-bounce-slow"></div>
                    <div className="absolute top-1/3 left-10 w-8 h-8 bg-secondary/20 rounded-full animate-float"></div>
                  </div>

                  {/* Gradient Overlay with Transparency */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary/60 opacity-90"></div>

                  <div className="max-w-md w-full space-y-6 relative z-10">
                    <div className="text-center space-y-3">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-2">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Unlock Interactive Demo
                      </h3>
                      <p className="text-white/80">
                        Enter your details to experience {currentDemo.title}
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Full Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Work Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                        <p className="text-xs text-white/70">
                          Please use your work email address
                        </p>
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        Access Demo
                      </Button>
                    </form>
                  </div>
                </div>
              ) : (
                <div 
                  key={activeDemo}
                  className="sl-embed" 
                  style={{
                    position: 'relative',
                    paddingBottom: 'calc(49.65% + 25px)',
                    width: '100%',
                    height: 0,
                    transform: 'scale(1)'
                  }}
                >
                  <iframe
                    loading="lazy"
                    className="sl-demo"
                    src={currentDemo.embedUrl}
                    name="sl-embed"
                    allow="fullscreen"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: '1px solid rgba(63,95,172,0.35)',
                      boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
                      borderRadius: '10px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemosSection;
