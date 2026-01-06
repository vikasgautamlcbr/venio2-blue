import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Sparkles, Layers, UserCog, Cloud, CheckCircle, Check, X, ClipboardCheck, Zap, Info, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ROICalculator from "@/components/ROICalculator";
import CTABanner from "@/components/CTABanner";

const vendorMap: Record<string, string> = {
  relativity: "Relativity",
  buix: "Buix",
  everlaw: "Everlaw",
  logikcull: "Logikcull",
  nextpoint: "Nextpoint",
};

const CompareVendor = () => {
  const params = useParams();
  const key = (params.vendor || "").toLowerCase();
  const label = vendorMap[key] || params.vendor || "Vendor";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero" className="relative min-h-[75vh] md:min-h-[70vh] flex flex-col justify-between overflow-hidden gradient-animated pt-24 xl:pt-28 2xl:pt-40 pb-20">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"></div>
            <div className="absolute top-20 right-24 w-28 h-28 bg-secondary/25 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-[60%] right-36 w-56 h-56 bg-accent/20 rounded-full blur-3xl float-delayed"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80"></div>
          <div className="relative z-10 container mx-auto px-6 max-w-7xl flex-1">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in w-full text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/20">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium">Stop Overpaying for Legacy</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  {`Enterprise Power without the "${label} Tax."`}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed mb-10">
                  {`Why settle for a fragmented, complex, and expensive legacy system? Venio Systems offers a unified eDiscovery platform that matches ${label} feature-for-feature while slashing your TCO by up to 50%.`}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 min-w-[240px] shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group">
                    <Link to="/venio-vs-competition">Compare Features</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6 min-w-[240px] shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <a href="#calculator">Calculate Your ROI</a>
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-lg mx-auto lg:ml-auto">
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl opacity-60" />
                  <div className="glass rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-lg font-bold text-white">Platform Health Snapshot</div>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 border border-emerald-400/40">
                        Optimized
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-white/20 border border-white/30 p-4">
                        <div className="text-xs text-white/70">Processing Speed</div>
                        <div className="mt-1 text-xl font-bold text-accent">10TB+ / Day</div>
                      </div>
                      <div className="rounded-xl bg-white/20 border border-white/30 p-4">
                        <div className="text-xs text-white/70">Deployment</div>
                        <div className="mt-1 text-xl font-bold text-secondary">Hybrid</div>
                      </div>
                      <div className="col-span-2 rounded-xl bg-accent/15 border border-accent/40 p-4 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-white/70">AI Analytics (CAL)</div>
                          <div className="mt-1 text-base font-semibold text-accent">Standard</div>
                        </div>
                        <Zap className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 shadow-xl border border-slate-200 ring-1 ring-accent/30">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="text-sm font-semibold">Save up to 50% annually</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section id="vendor-tax" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.12),transparent_55%)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{`What is the "${label} Tax?"`}</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {`It's the hidden cost of complexity. Most ${label} users pay multiple "taxes" every month that go beyond the software subscription.`}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">The Integration Tax</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`${label} requires multiple modules stitched together. Moving data from Processing to Review often requires manual exports, load files, and hours of tech-time.`}
                </p>
                <div className="mt-6 w-full flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-3 shadow-sm border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-semibold whitespace-nowrap" title="Unified Database. No Exports.">
                    Unified Database. No Exports.
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <UserCog className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">The Admin Tax</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You need a “Certified Relativity Administrator” (RCA) just to perform basic tasks. This adds significant headcount costs to your litigation support budget.
                </p>
                <div className="mt-6 w-full flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-3 shadow-sm border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-semibold whitespace-nowrap" title="Intuitive Self-Service UI.">
                    Intuitive Self-Service UI.
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">The Cloud Tax</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {`${label} is forcing users into ${label}One (Cloud). This removes your control over infrastructure and introduces unpredictable monthly per‑GB hosting bills.`}
                </p>
                <div className="mt-6 w-full flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-3 shadow-sm border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-semibold whitespace-nowrap" title="True Hybrid. Cloud or On‑Prem.">
                    True Hybrid. Cloud or On‑Prem.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="comparison" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Head‑to‑Head Comparison</h2>
            <p className="text-lg text-muted-foreground">
              Feature‑for‑feature, Venio is the modern choice.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden glass rounded-2xl border border-border/50">
                <table className="min-w-full divide-y divide-border/50">
                  <thead>
                    <tr className="bg-muted/30">
                      <th className="text-left p-6 font-semibold text-foreground">Capability</th>
                      <th className="text-center p-6 font-semibold">{label}</th>
                      <th className="text-center p-6 font-semibold bg-accent/10 text-accent border-l-2 border-accent/30">Venio Systems</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">Unified Workflow (One Database)</div>
                        <div className="text-sm text-muted-foreground">No data movement between Processing, Review, and Production.</div>
                      </td>
                      <td className="p-6 text-center"><X className="w-5 h-5 text-destructive inline-block" /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-primary inline-block" /></td>
                    </tr>
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">Self‑Service Administration</div>
                        <div className="text-sm text-muted-foreground">Simple UI allows paralegals to manage projects without IT help.</div>
                      </td>
                      <td className="p-6 text-center"><X className="w-5 h-5 text-destructive inline-block" /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-primary inline-block" /></td>
                    </tr>
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">On‑Premise & Air‑Gapped Options</div>
                        <div className="text-sm text-muted-foreground">Supports government and highly‑regulated data requirements.</div>
                      </td>
                      <td className="p-6 text-center"><X className="w-5 h-5 text-destructive inline-block" /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-primary inline-block" /></td>
                    </tr>
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">Advanced AI / CAL Included</div>
                        <div className="text-sm text-muted-foreground">Continuous Active Learning is built into our core license.</div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-sm text-muted-foreground">Pay‑Per‑GB Extra</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-sm font-semibold text-accent">Standard Feature</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">10TB+ Daily Throughput</div>
                        <div className="text-sm text-muted-foreground">Both handle enterprise‑scale volumes reliably.</div>
                      </td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-primary inline-block" /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-primary inline-block" /></td>
                    </tr>
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">Predictable Subscription Pricing</div>
                        <div className="text-sm text-muted-foreground">Stop getting surprise bills based on data growth.</div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-sm text-muted-foreground">Variable Monthly</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-sm font-semibold text-accent">Fixed Annual</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6">
                        <div className="font-semibold">Native Social Media / Teams Processing</div>
                        <div className="text-sm text-muted-foreground">Comprehensive support for modern discovery sources.</div>
                      </td>
                      <td className="p-6 text-center"><X className="w-5 h-5 text-destructive inline-block" /></td>
                      <td className="p-6 text-center"><Check className="w-5 h-5 text-primary inline-block" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="migration" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.12),transparent_55%)]" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl border border-border/50 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <ClipboardCheck className="h-6 w-6 text-accent" />
                </div>
                <div className="text-xl font-bold">Migration Compatibility Check</div>
              </div>
              <div className="divide-y divide-border/50">
                {[
                  { label: `${label} .DAT & .OPT Support`, badge: "Native Ingestion" },
                  { label: "Preservation of Coding & Tags", badge: "100% Retained" },
                  { label: "Redaction Mapping", badge: "Native Overlay" },
                  { label: "Production Load File Ingestion", badge: "Standard Feature" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-5">
                    <span className="font-medium">{row.label}</span>
                    <span className="inline-flex items-center rounded-full bg-accent/10 text-accent text-xs font-semibold px-3 py-1 border border-accent/30">
                      {row.badge}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-4 shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 ring-1 ring-primary/30">
                  <Zap className="h-5 w-5 text-white" />
                  <span className="font-semibold">Ready for Switch</span>
                </button>
              </div>
            </div>
            <div className="max-w-xl md:max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Migration Without the Migraine.</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Worried about your legacy data? Our Relativity Bridge ensures you don't lose a single work product.
                We ingest standard load files and preserve your entire history of tags, coding, and redactions.
              </p>
              <div className="space-y-4">
                {[
                  "Map Relativity fields to Venio metadata in seconds.",
                  "Keep your existing workspaces during the transition.",
                  "Zero per‑GB ingestion fees during migration.",
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Still Not Convinced?</h2>
            <p className="text-muted-foreground text-lg">Addressing the common myths of leaving {label}.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: `Is Venio as fast as ${label} for large scale processing?`,
                  a: "Actually, it's often faster. Venio handles 10TB+ daily processing on standard hardware because it doesn't have the overhead of multiple fragmented tools and database modules.",
                },
                {
                  q: "Will I lose my work product if I switch?",
                  a: "No. Venio natively supports Relativity load files (.DAT, .OPT). Your tags, folders, and work-product are imported and mapped directly into the Venio database.",
                },
                {
                  q: "Do I have to hire a new team to manage Venio?",
                  a: "Quite the opposite. Venio is designed for self‑service. Your existing litigation support team can manage the entire platform without needing expensive external certifications or dedicated IT specialists.",
                },
                {
                  q: "Can I run Venio on‑premise for government matters?",
                  a: "Yes. Unlike competitors who are forcing users into the cloud, Venio remains fully committed to on‑premise, air‑gapped, and hybrid deployment models.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="glass rounded-2xl px-6 md:px-8 border-2 border-transparent hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                  <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-primary/80 py-6 hover:no-underline">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-secondary/15 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                        <Info className="h-4 w-4 text-secondary" />
                      </div>
                      <span>{item.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-6 pl-12">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section id="calculator" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-muted-foreground text-lg">
              See how much you can save by choosing Venio over {label}
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default CompareVendor;
