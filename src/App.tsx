import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorThemeProvider } from "@/components/ColorThemeProvider";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import { ChristmasEffects } from "@/components/ChristmasEffects";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Univers from "./pages/Univers";
import Methode from "./pages/Methode";
import Ame from "./pages/Ame";
import Reseau from "./pages/Reseau";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ColorThemeProvider />
    <ChristmasEffects />
    <TooltipProvider>
      <ContactModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/univers" element={<Univers />} />
            <Route path="/methode" element={<Methode />} />
            <Route path="/ame" element={<Ame />} />
            <Route path="/reseau" element={<Reseau />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContactModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
