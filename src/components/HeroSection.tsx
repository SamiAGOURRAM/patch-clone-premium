import { Play } from "lucide-react";
import { Button } from "./ui/button";
import planetImage from "@/assets/planet-hero.jpg";
import { useState, useEffect } from "react";

const goals = [
  "accelerate climate solutions",
  "achieve carbon neutrality",
  "support verified projects",
  "measure environmental impact",
  "build sustainable future",
];

export const HeroSection = () => {
  const [currentGoal, setCurrentGoal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoal((prev) => (prev + 1) % goals.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-in">
            <span className="block mb-2">Rebalance</span>
            <div className="relative inline-block">
              {/* Planet Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 z-10">
                <div className="relative w-full h-full animate-float">
                  <img
                    src={planetImage}
                    alt="Planet Earth"
                    className="w-full h-full object-cover rounded-full shadow-premium"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-background/20" />
                </div>
              </div>
              <span className="relative z-0 opacity-0">the planet</span>
            </div>
            <span className="block mt-2">the planet</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Patch helps you
          </p>
          
          {/* Animated Rolling Text */}
          <div className="relative h-16 overflow-hidden">
            <div className="border-2 border-foreground rounded-full px-8 py-4 inline-flex items-center justify-center min-w-[400px]">
              <div className="relative h-8 overflow-hidden">
                {goals.map((goal, index) => (
                  <div
                    key={goal}
                    className={`absolute inset-0 flex items-center justify-center text-lg md:text-xl font-medium transition-all duration-700 ease-in-out ${
                      index === currentGoal
                        ? "translate-y-0 opacity-100"
                        : index === (currentGoal - 1 + goals.length) % goals.length
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="ghost" 
            className="mt-4 group"
            size="lg"
          >
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch the Patch Platform video
          </Button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </section>
  );
};
