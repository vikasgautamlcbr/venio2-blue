import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VenioLegalHold from "./pages/VenioLegalHold";
import VenioEDiscovery from "./pages/VenioEDiscovery";
import LawFirmSolutions from "./pages/LawFirmSolutions";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import WhyVenio from "./pages/WhyVenio";
import Search from "./pages/Search";
import BlogPost from "./pages/BlogPost";
import AssetDownload from "./pages/AssetDownload";
import CaseStudy from "./pages/CaseStudy";
import WhitePaper from "./pages/WhitePaper";
import ProductBrief from "./pages/ProductBrief";
import Ebook from "./pages/Ebook";
import VideoResource from "./pages/VideoResource";
import Brochure from "./pages/Brochure";
import PressRelease from "./pages/PressRelease";
import HowToGuide from "./pages/HowToGuide";
import InfographicResource from "./pages/InfographicResource";
import RequestDemo from "./pages/RequestDemo";
import ResourceTypeDemo from "./pages/ResourceTypeDemo";
import VenioVsCompetition from "./pages/VenioVsCompetition";
import DeploymentOverview from "./pages/DeploymentOverview";
import CompareVendor from "./pages/CompareVendor";
import DeploymentType from "./pages/DeploymentType";
import ChatbotWidget from "./components/ChatbotWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/venio-legal-hold" element={<VenioLegalHold />} />
          <Route path="/venio-ediscovery" element={<VenioEDiscovery />} />
          <Route path="/law-firm-solutions" element={<LawFirmSolutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/demo/:type" element={<ResourceTypeDemo />} />
          <Route path="/why-venio" element={<WhyVenio />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog/demo" element={<BlogPost />} />
          <Route path="/resources/demo-asset" element={<AssetDownload />} />
          <Route path="/venio-vs-competition" element={<VenioVsCompetition />} />
          <Route path="/compare/:vendor" element={<CompareVendor />} />
          <Route path="/deployment-options" element={<DeploymentOverview />} />
          <Route path="/deployment/:type" element={<DeploymentType />} />
          
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
        <ChatbotWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
