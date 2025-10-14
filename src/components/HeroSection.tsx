import { Play } from "lucide-react";
import { Button } from "./ui/button";
import planetImage from "@/assets/planet-hero.jpg";
import { useState, useEffect } from "react";

const values = [
  "Comprendre votre vision",
  "Relier les expertises",
  "Construire l'excellence",
  "Préserver la cohérence",
];

export const HeroSection = () => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % values.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-4 animate-fade-in">
            <span className="block mb-2 bg-gradient-to-r from-secondary via-primary to-tertiary bg-clip-text text-transparent">
              À l'aube
            </span>
            <div className="relative inline-block">
              {/* Aurora Glow Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 z-10">
                <div className="relative w-full h-full animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-success via-primary to-tertiary shadow-premium animate-aurora-shimmer" 
                       style={{ backgroundSize: "200% 200%" }} />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-background/30" />
                </div>
              </div>
              <span className="relative z-0 opacity-0">des connexions</span>
            </div>
            <span className="block mt-2">des connexions</span>
            <span className="block text-muted-foreground text-4xl md:text-5xl lg:text-6xl mt-2">durables</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif">
            AURORA vous accompagne pour
          </p>
          
          {/* Animated Rolling Values */}
          <div className="relative">
            <div className="border-2 border-primary rounded-full px-8 py-4 inline-flex items-center justify-center min-w-[320px] md:min-w-[400px] shadow-elegant hover:shadow-glow transition-all duration-500">
              <div className="relative h-8 overflow-hidden w-full">
                {values.map((value, index) => (
                  <div
                    key={value}
                    className={`absolute inset-0 flex items-center justify-center text-base md:text-lg font-medium whitespace-nowrap transition-all duration-700 ease-in-out ${
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
            className="mt-4 group font-medium"
            size="lg"
          >
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Découvrir AURORA en vidéo
          </Button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </section>
  );
};
