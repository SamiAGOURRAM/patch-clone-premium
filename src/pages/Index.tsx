import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GuideSection } from "@/components/GuideSection";
import { VideoSection } from "@/components/VideoSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useSectionSettings } from "@/hooks/useSanity";

const Index = () => {
  const { data: sectionSettings } = useSectionSettings();

  // Default to true if not set (backward compatibility)
  const isEnabled = (enabled?: boolean) => enabled !== false;

  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <main>
        {isEnabled(sectionSettings?.heroEnabled) && <HeroSection />}
        {isEnabled(sectionSettings?.statsEnabled) && <StatsSection />}
        {isEnabled(sectionSettings?.testimonialsEnabled) && <TestimonialsSection />}
        {isEnabled(sectionSettings?.guideEnabled) && <GuideSection />}
        {isEnabled(sectionSettings?.videoEnabled) && <VideoSection />}
        {isEnabled(sectionSettings?.featuresEnabled) && <FeaturesSection />}
        {isEnabled(sectionSettings?.ctaEnabled) && <CTASection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
