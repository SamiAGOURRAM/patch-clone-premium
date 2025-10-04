import { AuroraNavigation } from "@/components/aurora/AuroraNavigation";
import { AuroraHero } from "@/components/aurora/AuroraHero";
import { AboutSection } from "@/components/aurora/AboutSection";
import { ActivitiesSection } from "@/components/aurora/ActivitiesSection";
import { ValuesSection } from "@/components/aurora/ValuesSection";
import { ContactSection } from "@/components/aurora/ContactSection";
import { AuroraFooter } from "@/components/aurora/AuroraFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AuroraNavigation />
      <main>
        <AuroraHero />
        <AboutSection />
        <ActivitiesSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <AuroraFooter />
    </div>
  );
};

export default Index;
