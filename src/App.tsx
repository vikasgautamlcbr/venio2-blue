import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const VenioLegalHold = lazy(() => import("./pages/VenioLegalHold"));
const VenioEDiscovery = lazy(() => import("./pages/VenioEDiscovery"));
const VenioReview = lazy(() => import("./pages/VenioReview"));
const VenioECA = lazy(() => import("./pages/VenioECA"));
const VenioProduction = lazy(() => import("./pages/VenioProduction"));
const UseCaseECA = lazy(() => import("./pages/UseCaseECA"));
const UseCaseInvestigations = lazy(() => import("./pages/UseCaseInvestigations"));
const UseCaseFOIA = lazy(() => import("./pages/UseCaseFOIA"));
const UseCaseLegalHold = lazy(() => import("./pages/UseCaseLegalHold"));
const LawFirmSolutions = lazy(() => import("./pages/LawFirmSolutions"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const WhyVenio = lazy(() => import("./pages/WhyVenio"));
const Search = lazy(() => import("./pages/Search"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AssetDownload = lazy(() => import("./pages/AssetDownload"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const WhitePaper = lazy(() => import("./pages/WhitePaper"));
const ProductBrief = lazy(() => import("./pages/ProductBrief"));
const Ebook = lazy(() => import("./pages/Ebook"));
const VideoResource = lazy(() => import("./pages/VideoResource"));
const Brochure = lazy(() => import("./pages/Brochure"));
const PressRelease = lazy(() => import("./pages/PressRelease"));
const HowToGuide = lazy(() => import("./pages/HowToGuide"));
const InfographicResource = lazy(() => import("./pages/InfographicResource"));
const RequestDemo = lazy(() => import("./pages/RequestDemo"));
const ResourceTypeDemo = lazy(() => import("./pages/ResourceTypeDemo"));
const VenioVsCompetition = lazy(() => import("./pages/VenioVsCompetition"));
const DeploymentOverview = lazy(() => import("./pages/DeploymentOverview"));
const CompareVendor = lazy(() => import("./pages/CompareVendor"));
const DeploymentType = lazy(() => import("./pages/DeploymentType"));
const ForCorporations = lazy(() => import("./pages/ForCorporations"));
const ForFinancialServices = lazy(() => import("./pages/ForFinancialServices"));
const ForServiceProviders = lazy(() => import("./pages/ForServiceProviders"));
const ForGovernment = lazy(() => import("./pages/ForGovernment"));
const ForLitigationSupport = lazy(() => import("./pages/ForLitigationSupport"));
const ForInvestigationsCompliance = lazy(() => import("./pages/ForInvestigationsCompliance"));
const RoleLegalCounsel = lazy(() => import("./pages/RoleLegalCounsel"));
const RoleEDiscoveryManager = lazy(() => import("./pages/RoleEDiscoveryManager"));
const RoleEDiscoveryAttorneys = lazy(() => import("./pages/RoleEDiscoveryAttorneys"));
const RoleVPEdiscoveryOps = lazy(() => import("./pages/RoleVPEdiscoveryOps"));
const RoleCTOEdiscoveryOps = lazy(() => import("./pages/RoleCTOEdiscoveryOps"));
const Icons = lazy(() => import("./pages/Icons"));
import ChatbotWidget from "./components/ChatbotWidget";

const queryClient = new QueryClient();

const App = () => {
  const [showNewDesignDialog, setShowNewDesignDialog] = useState(false);
  const newDesignKey = useMemo(() => "venio_new_design_notice_v1", []);

  useEffect(() => {
    try {
      const seen = window.localStorage.getItem(newDesignKey);
      if (!seen) setShowNewDesignDialog(true);
    } catch {
      setShowNewDesignDialog(true);
    }
  }, [newDesignKey]);

  useEffect(() => {
    if (!showNewDesignDialog) return;
    const t = window.setTimeout(() => {
      handleNewDesignOpenChange(false);
    }, 5000);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showNewDesignDialog]);

  const handleNewDesignOpenChange = (open: boolean) => {
    setShowNewDesignDialog(open);
    if (!open) {
      try {
        window.localStorage.setItem(newDesignKey, "1");
      } catch {
        void 0;
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Dialog open={showNewDesignDialog} onOpenChange={handleNewDesignOpenChange}>
            <DialogContent className="p-0 overflow-hidden w-[min(360px,calc(100vw-2rem))] aspect-[1/2] sm:w-[min(720px,calc(100vw-2rem))] sm:aspect-[3/2] max-h-[calc(100vh-2rem)] [&>button.absolute]:hidden">
              <div className="relative h-full overflow-hidden bg-gradient-to-br from-primary to-[#0b1c3f]">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute top-16 left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                <DialogClose asChild>
                  <button
                    type="button"
                    className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
                    aria-label="Close"
                    onClick={() => handleNewDesignOpenChange(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </DialogClose>

                <div className="relative h-full p-6 sm:p-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center w-full">
                    <div className="max-w-[34rem] mx-auto">
                      <DialogTitle className="text-white text-2xl sm:text-4xl leading-tight text-center">
                        Welcome to the new Venio experience
                      </DialogTitle>
                      <DialogDescription className="text-white/80 mt-3 text-base sm:text-lg leading-relaxed text-center">
                        We’ve refreshed the design and navigation to make it faster and easier to find what you need.
                      </DialogDescription>
                    </div>
                  </div>

                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Suspense fallback={<div />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/venio-legal-hold" element={<VenioLegalHold />} />
              <Route path="/venio-ediscovery" element={<VenioEDiscovery />} />
              <Route path="/venio-eca" element={<VenioECA />} />
              <Route path="/venio-production" element={<VenioProduction />} />
              <Route path="/venio-review" element={<VenioReview />} />
              <Route path="/solutions/use-cases/eca" element={<UseCaseECA />} />
              <Route path="/solutions/use-cases/investigations" element={<UseCaseInvestigations />} />
              <Route path="/solutions/use-cases/foia" element={<UseCaseFOIA />} />
              <Route path="/solutions/use-cases/legal-hold" element={<UseCaseLegalHold />} />
              <Route path="/law-firm-solutions" element={<LawFirmSolutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/resources/demo/:type" element={<ResourceTypeDemo />} />
              <Route path="/why-venio" element={<WhyVenio />} />
              <Route path="/search" element={<Search />} />
              <Route path="/blog/demo" element={<BlogPost />} />
              <Route path="/resources/demo-asset" element={<AssetDownload />} />
              <Route path="/venio-vs-competition" element={<VenioVsCompetition />} />
              <Route path="/compare/:vendor" element={<CompareVendor />} />
              <Route path="/deployment-options" element={<DeploymentOverview />} />
              <Route path="/deployment/:type" element={<DeploymentType />} />
              <Route path="/for-corporations" element={<ForCorporations />} />
              <Route path="/for-financial-services" element={<ForFinancialServices />} />
              <Route path="/for-service-providers" element={<ForServiceProviders />} />
              <Route path="/for-government" element={<ForGovernment />} />
              <Route path="/for-litigation-support" element={<ForLitigationSupport />} />
              <Route path="/for-investigations-compliance" element={<ForInvestigationsCompliance />} />
              <Route path="/role-legal-counsel" element={<RoleLegalCounsel />} />
              <Route path="/role-ediscovery-manager" element={<RoleEDiscoveryManager />} />
              <Route path="/role-ediscovery-attorneys" element={<RoleEDiscoveryAttorneys />} />
              <Route path="/role-vp-ediscovery-ops" element={<RoleVPEdiscoveryOps />} />
              <Route path="/role-cto-ediscovery-ops" element={<RoleCTOEdiscoveryOps />} />
              <Route path="/resources/case-studies/demo" element={<CaseStudy />} />
              <Route path="/resources/white-papers/demo" element={<WhitePaper />} />
              <Route path="/resources/product-briefs/demo" element={<ProductBrief />} />
              <Route path="/resources/ebooks/demo" element={<Ebook />} />
              <Route path="/resources/videos/demo" element={<VideoResource />} />
              <Route path="/resources/brochures/demo" element={<Brochure />} />
              <Route path="/resources/press-releases/demo" element={<PressRelease />} />
              <Route path="/resources/how-to-guides/demo" element={<HowToGuide />} />
              <Route path="/resources/infographics/demo" element={<InfographicResource />} />
              <Route path="/book-a-demo" element={<RequestDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ChatbotWidget />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
