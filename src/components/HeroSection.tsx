import { Play } from "lucide-react";
import { Button } from "./ui/button";
import auroraImage from "@/assets/aurora-hero-dark.jpg";
import { useState, useEffect } from "react";

const values = [
  {
    method: "Méthode Écoute",
    text: "Comprendre vos besoins et votre vision unique",
    color: "text-primary"
  },
  {
    method: "Méthode Connexion",
    text: "Relier les expertises et créer des synergies",
    color: "text-secondary"
  },
  {
    method: "Méthode Excellence",
    text: "Construire avec rigueur et qualité",
    color: "text-tertiary"
  },
  {
    method: "Méthode Cohérence",
    text: "Préserver l'harmonie de vos projets",
    color: "text-success"
  },
  {
    method: "Méthode Impact",
    text: "Maximiser la valeur et les résultats",
    color: "text-accent"
  }
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
    <section className="relative py-20 md:py-32 px-4 overflow-hidden min-h-[85vh] flex items-center">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={auroraImage} 
          alt="Aurora Borealis" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h1 className="font-bold mb-6 animate-fade-in drop-shadow-2xl">
            <span className="block text-5xl md:text-6xl lg:text-7xl text-white/95 mb-2 tracking-wide">
              À l'aube
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-3">
              des connexions
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90 font-light tracking-wider">
              durables
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            AURORA vous accompagne pour
          </p>
          
          {/* Animated Rolling Values */}
          <div className="relative">
            <div className="border-2 border-white/40 backdrop-blur-sm bg-white/10 rounded-full px-8 py-6 inline-flex items-center justify-center min-w-[320px] md:min-w-[500px] shadow-2xl hover:shadow-[0_0_40px_rgba(212,180,106,0.4)] transition-all duration-500">
              <div className="relative h-16 overflow-hidden w-full">
                {values.map((value, index) => (
                  <div
                    key={value.method}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                      index === currentValue
                        ? "translate-y-0 opacity-100"
                        : index === (currentValue - 1 + values.length) % values.length
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    <div className={`text-lg md:text-xl font-bold ${value.color} drop-shadow-lg mb-1`}>
                      {value.method}
                    </div>
                    <div className="text-sm md:text-base text-white/80 drop-shadow-lg">
                      {value.text}
                    </div>
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
          >
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Découvrir AURORA en vidéo
          </Button>
        </div>
      </div>
    </section>
  );
};
