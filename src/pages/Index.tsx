import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GuideSection, methodesAurora } from "@/components/GuideSection";
import { VideoSection } from "@/components/VideoSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

const TIMER_DURATION = 8000; // 8 seconds per item

const Index = () => {
  const [activeMethodIndex, setActiveMethodIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMethodIndex((prev) => (prev + 1) % methodesAurora.length);
    }, TIMER_DURATION);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
        <GuideSection activeIndex={activeMethodIndex} setActiveIndex={setActiveMethodIndex} />
        <VideoSection bgColor={methodesAurora[activeMethodIndex].bgColor} />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
