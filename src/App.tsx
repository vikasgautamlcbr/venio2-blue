import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const VenioLegalHold = lazy(() => import("./pages/VenioLegalHold"));
const VenioEDiscovery = lazy(() => import("./pages/VenioEDiscovery"));
const UseCaseECA = lazy(() => import("./pages/UseCaseECA"));
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div />}> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/venio-legal-hold" element={<VenioLegalHold />} />
          <Route path="/venio-ediscovery" element={<VenioEDiscovery />} />
          <Route path="/solutions/use-cases/eca" element={<UseCaseECA />} />
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
          <Route path="/for-service-providers" element={<ForServiceProviders />} />
          <Route path="/for-government" element={<ForGovernment />} />
          <Route path="/for-litigation-support" element={<ForLitigationSupport />} />
          <Route path="/for-investigations-compliance" element={<ForInvestigationsCompliance />} />
          <Route path="/role-legal-counsel" element={<RoleLegalCounsel />} />
          <Route path="/role-ediscovery-manager" element={<RoleEDiscoveryManager />} />
          <Route path="/role-ediscovery-attorneys" element={<RoleEDiscoveryAttorneys />} />
          <Route path="/role-vp-ediscovery-ops" element={<RoleVPEdiscoveryOps />} />
          <Route path="/role-cto-ediscovery-ops" element={<RoleCTOEdiscoveryOps />} />
          
          {/* Individual Resource Type Demo Routes */}
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <ChatbotWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
