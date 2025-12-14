import { Play } from "lucide-react";
import { Button } from "./ui/button";
import auroraImage from "@/assets/aurora-hero-dark.jpg";
import { useState, useEffect } from "react";
import { useHeroContent } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { useSectionStyles } from "./SectionWrapper";
import { useContact } from "./ContactModalProvider";

// Valeurs par défaut (fallback si Sanity n'est pas configuré)
const defaultValues = [
  "Comprendre votre vision",
  "Relier les expertises",
  "Construire l'excellence",
  "Préserver la cohérence",
];

const defaultContent = {
  mainTitle: "À l'aube",
  subTitle: "des connexions",
  accentText: "durables",
  accompanyText: "AURORA vous accompagne pour",
  ctaButtonText: "Nous contacter",
};

export const HeroSection = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const { data: heroContent } = useHeroContent();
  const { headingStyle, buttonStyle } = useSectionStyles('hero');
  const { openContactModal } = useContact();

  // Utiliser les données Sanity ou les valeurs par défaut
  const values = heroContent?.rotatingValues || defaultValues;
  const content = {
    mainTitle: heroContent?.mainTitle || defaultContent.mainTitle,
    subTitle: heroContent?.subTitle || defaultContent.subTitle,
    accentText: heroContent?.accentText || defaultContent.accentText,
    accompanyText: heroContent?.accompanyText || defaultContent.accompanyText,
    ctaButtonText: heroContent?.ctaButtonText || defaultContent.ctaButtonText,
  };

  // Image de fond (Sanity ou locale)
  const backgroundImage = heroContent?.heroImage 
    ? urlFor(heroContent.heroImage).width(1920).url() 
    : auroraImage;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % values.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden min-h-[85vh] flex items-center">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Aurora Borealis" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in drop-shadow-2xl">
            <span className="block mb-3 text-white">
              {content.mainTitle}
            </span>
            <span className="block text-white">{content.subTitle}</span>
            <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl mt-3">{content.accentText}</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            {content.accompanyText}
          </p>
          
          {/* Animated Rolling Values */}
          <div className="relative">
            <div className="border-2 border-white/40 backdrop-blur-sm bg-white/10 rounded-full px-8 py-4 inline-flex items-center justify-center min-w-[320px] md:min-w-[400px] shadow-2xl hover:shadow-[0_0_40px_rgba(212,180,106,0.4)] transition-all duration-500">
              <div className="relative h-8 overflow-hidden w-full">
                {values.map((value, index) => (
                  <div
                    key={value}
                    className={`absolute inset-0 flex items-center justify-center text-base md:text-lg font-medium whitespace-nowrap transition-all duration-700 ease-in-out text-white drop-shadow-lg ${
                      index === currentValue
                        ? "translate-y-0 opacity-100"
                        : index === (currentValue - 1 + values.length) % values.length
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="ghost" 
            className="mt-4 group font-medium bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:text-white"
            size="lg"
            onClick={openContactModal}
          >
            {content.ctaButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
