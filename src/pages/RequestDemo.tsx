import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf, Database, Zap, Brain, FileCheck, Shield, DollarSign, CheckCircle, X, Download } from "lucide-react";

// Client logos (for hero logo trail)
import amentum from "@/assets/clients/amentum.webp";
import consilio from "@/assets/clients/consilio.webp";
import array from "@/assets/clients/array.webp";
import haugPartners from "@/assets/clients/haug-partners.webp";
import nixonPeabody from "@/assets/clients/nixon-peabody.webp";
import proteus from "@/assets/clients/proteus.webp";
import cds from "@/assets/clients/cds.webp";
import epario from "@/assets/clients/epario.webp";
import gdpr from "@/assets/book-a-demo/GDPR.png";
import aicpaSoc from "@/assets/book-a-demo/AICPA SOC.png";
import capterraLogo from "@/assets/book-a-demo/Capterra.png";
import fedrampLogo from "@/assets/book-a-demo/FedRAMP.png";
import g2Logo from "@/assets/book-a-demo/G2.png";
import loyalaLogo from "@/assets/book-a-demo/Loyala.png";
import modusLogo from "@/assets/book-a-demo/Modus.png";
import nearZeroLogo from "@/assets/book-a-demo/NearZero.png";
import softwareAdviceLogo from "@/assets/book-a-demo/Software Advice.png";

const RequestDemo = () => {
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

  const [formSubmitting, setFormSubmitting] = useState(false);

  const RatingStars = ({ rating }: { rating: number }) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`f-${i}`} className="h-5 w-5 text-yellow-400" fill="currentColor" />
        ))}
        {half === 1 && <StarHalf className="h-5 w-5 text-yellow-400" fill="currentColor" />}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`e-${i}`} className="h-5 w-5 text-yellow-400/40" />
        ))}
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => setFormSubmitting(false), 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col justify-between overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
          <div className="absolute inset-0 bg-[#0B1B3A]/15 pointer-events-none z-0"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Heading & Subheading */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 border border-white/20">
                  <Shield className="w-4 h-4 text-white/80" />
                  <span className="text-xs tracking-wider">End-to-End eDiscovery Platform</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Book a Demo
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-body leading-relaxed max-w-xl">
                  Trusted by global law firms and Fortune 500 enterprises, Venio helps legal teams cut review costs, save time, and keep data secure — all in one simple platform.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Personalized walkthrough</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">No-pressure call</span>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center min-w-[120px]">
                      <img src={g2Logo} alt="G2" className="h-10 w-10 object-contain" />
                      <div className="mt-2"><RatingStars rating={5} /></div>
                      <div className="text-white/80 text-sm mt-1">5.0</div>
                    </div>
                    <Separator orientation="vertical" className="h-16 bg-white/20" />
                    <div className="flex flex-col items-center min-w-[120px]">
                      <img src={capterraLogo} alt="Capterra" className="h-10 w-10 object-contain" />
                      <div className="mt-2"><RatingStars rating={4.7} /></div>
                      <div className="text-white/80 text-sm mt-1">4.7</div>
                    </div>
                    <Separator orientation="vertical" className="h-16 bg-white/20" />
                    <div className="flex flex-col items-center min-w-[120px]">
                      <img src={softwareAdviceLogo} alt="Software Advice" className="h-10 w-10 object-contain" />
                      <div className="mt-2"><RatingStars rating={4.5} /></div>
                      <div className="text-white/80 text-sm mt-1">4.5</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form + Reviews */}
              <div>
                <Card className="glass-dark border-white/20 bg-white/10 backdrop-blur rounded-2xl">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white/90">Full Name</Label>
                          <Input id="name" placeholder="Jane Doe" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50" required />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white/90">Work Email</Label>
                          <Input id="email" type="email" placeholder="jane@firm.com" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company" className="text-white/90">Company</Label>
                          <Input id="company" placeholder="Your Organization" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-white/90">Phone</Label>
                          <Input id="phone" placeholder="(555) 000-1234" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-white/90">What would you like to see?</Label>
                        <Textarea id="message" placeholder="Tell us about your case, workflows, or deployment preferences" className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50" rows={4} />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={formSubmitting}>
                        {formSubmitting ? "Submitting..." : "Book a Demo"}
                      </Button>
                    </form>

                    {/* Ratings moved to left column */}
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>

          {/* Client Logo Carousel - Full Width (matches Pricing page) */}
          <div className="relative z-10 w-full mt-16">
            <p className="text-white/70 text-sm mb-6 font-body text-center"><span className="border-b-2 border-[#3DC47E] pb-1">Trusted by leading organizations</span></p>
            <div className="overflow-hidden py-6">
              <div className="flex gap-24 animate-scroll">
                {clientLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                ))}
                {clientLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0">
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

        {/* In under 30 minutes, you'll get to see */}
        <section className="py-20 px-6 bg-gradient-to-b from-white via-muted/30 to-white relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">In under 30 minutes, you'll get to see</h2>
              <p className="text-muted-foreground text-lg mt-2">See how Venio helps legal teams cut eDiscovery costs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-base md:text-lg font-semibold text-foreground">AI that speeds up review and saves costs.</p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-base md:text-lg font-semibold text-foreground">All-in-one eDiscovery management.</p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <FileCheck className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-base md:text-lg font-semibold text-foreground">Deploy your way: cloud, on-prem, or hybrid.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 rounded-lg">
                <Link to="/book-a-demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Venio Stands Out</h2>
              <p className="text-lg text-muted-foreground">
                Side-by-side view of capabilities that matter most.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden glass rounded-2xl border border-border/50">
                  <table className="min-w-full divide-y divide-border/50">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="text-left p-6 font-semibold text-foreground">Capability</th>
                        <th className="text-center p-6 font-semibold bg-accent/10 text-accent border-x-2 border-accent/30">Venio</th>
                        <th className="text-center p-6 font-semibold text-foreground">Legacy Tools</th>
                        <th className="text-center p-6 font-semibold text-foreground">Point Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {[
                        { capability: "End-to-end platform", venio: true, legacy: false, point: false },
                        { capability: "AI/TAR/CAL built-in", venio: true, legacy: false, point: "partial" },
                        { capability: "Deployment flexibility", venio: "Cloud / Hybrid / On-prem", legacy: "Limited", point: "Cloud only" },
                        { capability: "Early Case Assessment (ECA)", venio: "Native", legacy: "Add-on", point: "Rare" },
                        { capability: "Data reduction before review", venio: "Up to 90%", legacy: "Low", point: "Variable" },
                        { capability: "Defensible audit trails", venio: "Full", legacy: "Partial", point: "Often missing" },
                        { capability: "Predictable cost", venio: "Designed for it", legacy: "Hard to predict", point: "Variable" },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-muted/20 transition-colors">
                          <td className="p-6 font-medium text-foreground">{row.capability}</td>
                          <td className="p-6 text-center bg-accent/5 border-x-2 border-accent/20">
                            {typeof row.venio === "boolean" ? (
                              row.venio ? (
                                <CheckCircle className="h-6 w-6 text-accent mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm font-semibold text-accent">{row.venio}</span>
                            )}
                          </td>
                          <td className="p-6 text-center">
                            {typeof row.legacy === "boolean" ? (
                              row.legacy ? (
                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-muted-foreground">{row.legacy}</span>
                            )}
                          </td>
                          <td className="p-6 text-center">
                            {typeof row.point === "boolean" ? (
                              row.point ? (
                                <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-6 w-6 text-red-500 mx-auto" />
                              )
                            ) : row.point === "partial" ? (
                              <span className="text-sm text-yellow-600 font-medium">Partial</span>
                            ) : (
                              <span className="text-sm text-muted-foreground">{row.point}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Download the Venio Comparison Sheet
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">Proof You Can Rely On</h2>
              <p className="text-xl text-muted-foreground font-body mt-3">Evidence of security, client outcomes, and industry recognition.</p>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-10 items-start rounded-2xl border border-border/50 bg-muted/30 p-6 transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:bg-muted/40 hover:scale-[1.01]">
                <div className="grid grid-cols-3 gap-6">
                  {[{ name: "AICPA SOC", src: aicpaSoc }, { name: "GDPR", src: gdpr }, { name: "FedRAMP", src: fedrampLogo }].map(({ name, src }) => (
                    <div key={name} className="aspect-square rounded-xl bg-white/60 backdrop-blur-sm border border-border/40 flex items-center justify-center transition-transform hover:scale-[1.02] hover:border-accent/40">
                      <img src={src} alt={name} className="max-w-[85%] max-h-[85%] object-contain" />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Security & Compliance</h3>
                  <ul className="mt-6 space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3 text-base leading-7">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Venio is SOC 2 and FedRAMP-ready, ensuring enterprise-grade data protection.</span>
                    </li>
                    <li className="flex items-start gap-3 text-base leading-7">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Built-in audit trails make every action traceable and defensible.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start rounded-2xl border border-border/50 bg-muted/30 p-6 transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:bg-muted/40 hover:scale-[1.01]">
                <div className="grid grid-cols-3 gap-6">
                  {[{ name: "MODUS", src: modusLogo }, { name: "NearZero", src: nearZeroLogo }, { name: "Loyola", src: loyalaLogo }].map(({ name, src }) => (
                    <div key={name} className="aspect-square rounded-xl bg-white/60 backdrop-blur-sm border border-border/40 flex items-center justify-center transition-transform hover:scale-[1.02] hover:border-accent/40">
                      <img src={src} alt={name} className="max-w-[85%] max-h-[85%] object-contain" />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Client Impact</h3>
                  <ul className="mt-6 space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3 text-base leading-7">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Modus grew 400% in business volume with Venio.</span>
                    </li>
                    <li className="flex items-start gap-3 text-base leading-7">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>NearZero Discovery embraced VenioOne OnDemand for faster turnaround and lower costs.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start rounded-2xl border border-border/50 bg-muted/30 p-6 transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:bg-muted/40 hover:scale-[1.01]">
                <div className="grid grid-cols-3 gap-6">
                  {[{ name: "G2", src: g2Logo }, { name: "Capterra", src: capterraLogo }, { name: "Software Advice", src: softwareAdviceLogo }].map(({ name, src }) => (
                    <div key={name} className="aspect-square rounded-xl bg-white/60 backdrop-blur-sm border border-border/40 flex items-center justify-center transition-transform hover:scale-[1.02] hover:border-accent/40">
                      <img src={src} alt={name} className="max-w-[85%] max-h-[85%] object-contain" />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Industry Validation</h3>
                  <ul className="mt-6 space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3 text-base leading-7">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Recognized on G2 for usability and speed.</span>
                    </li>
                    <li className="flex items-start gap-3 text-base leading-7">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span>Trusted by global law firms and Fortune 500 enterprises for mission-critical matter.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA and Footer */}
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default RequestDemo;
