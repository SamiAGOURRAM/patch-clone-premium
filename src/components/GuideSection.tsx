import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const methodesAurora = [
  {
    title: "Méthode Conseil",
    description: "Accompagnement stratégique pour définir et aligner vos objectifs avec une vision durable et cohérente.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "hsl(var(--primary))",
    bgColor: "bg-primary",
  },
  {
    title: "Méthode Formation",
    description: "Développement des compétences et transmission des savoirs pour renforcer l'expertise de vos équipes.",
    image: "https://images.pexels.com/photos/1268975/pexels-photo-1268975.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "hsl(var(--secondary))",
    bgColor: "bg-secondary",
  },
  {
    title: "Méthode Intégration",
    description: "Mise en œuvre harmonieuse de solutions adaptées à votre environnement et vos processus existants.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "hsl(var(--tertiary))",
    bgColor: "bg-tertiary",
  },
  {
    title: "Méthode Optimisation",
    description: "Amélioration continue de vos performances et processus pour maximiser votre efficacité opérationnelle.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "hsl(var(--success))",
    bgColor: "bg-success",
  },
  {
    title: "Méthode Accompagnement",
    description: "Suivi personnalisé et support continu pour garantir la pérennité de vos transformations.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    color: "hsl(var(--accent))",
    bgColor: "bg-accent",
  },
];

const TIMER_DURATION = 8000; // 8 seconds per item

export const GuideSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (TIMER_DURATION / 50));
      });
    }, 50);

    const itemInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % methodesAurora.length);
      setProgress(0);
    }, TIMER_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(itemInterval);
    };
  }, []);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="py-12 px-4 bg-[#0F1C2E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-background leading-tight">
                Les Méthodes AURORA
              </h2>
              <Button
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-foreground transition-colors"
              >
                Découvrir notre approche
              </Button>
            </div>

            <div className="space-y-4 mt-8">
              {methodesAurora.map((item, index) => (
                <div
                  key={item.title}
                  className="cursor-pointer group"
                  onClick={() => handleItemClick(index)}
                >
                  {/* Timer Bar */}
                  <div className="h-0.5 bg-background/20 mb-4 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-background/60 transition-all duration-100 ease-linear"
                      style={{
                        width: activeIndex === index ? `${progress}%` : "0%",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-background"
                          : "text-background/40"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-background"
                          : "text-background/40"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-premium">
            {methodesAurora.map((item, index) => (
              <div
                key={item.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { methodesAurora };
