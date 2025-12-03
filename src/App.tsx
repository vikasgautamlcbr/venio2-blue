import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VenioLegalHold from "./pages/VenioLegalHold";
import LawFirmSolutions from "./pages/LawFirmSolutions";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import WhyVenio from "./pages/WhyVenio";
import Search from "./pages/Search";
import BlogPost from "./pages/BlogPost";
import AssetDownload from "./pages/AssetDownload";
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
          <Route path="/law-firm-solutions" element={<LawFirmSolutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/why-venio" element={<WhyVenio />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog/demo" element={<BlogPost />} />
          <Route path="/resources/demo-asset" element={<AssetDownload />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatbotWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
