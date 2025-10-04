import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const guideItems = [
  {
    title: "Strategy",
    description: "Whether you're new to carbon markets or evolving your programs, Patch can help you harmonize your company goals with your climate goals.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Source",
    description: "Patch gives you the widest, deepest access to high-integrity credits, letting you compare and narrow your list according to your climate goals.",
    image: "https://images.pexels.com/photos/1268975/pexels-photo-1268975.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Diligence",
    description: "Data-backed integrity reviews and diligence evaluations help you gain confidence in your portfolio.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Purchase",
    description: "A carbon credit transaction can be complex. Patch makes it simple by centralizing the process for your whole portfolio.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Manage",
    description: "Patch helps you monitor and report on your entire portfolio in one place, including tracking deliveries, documentation, and risk monitoring.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const TIMER_DURATION = 5000; // 5 seconds per item

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
      setActiveIndex((prev) => (prev + 1) % guideItems.length);
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
    <section className="py-24 px-4 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
                Your guide to carbon credits from end to end
              </h2>
              <Button
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-foreground transition-colors"
                size="lg"
              >
                Learn how Patch works
              </Button>
            </div>

            <div className="space-y-6 mt-12">
              {guideItems.map((item, index) => (
                <div
                  key={item.title}
                  className="cursor-pointer group"
                  onClick={() => handleItemClick(index)}
                >
                  {/* Timer Bar */}
                  <div className="h-0.5 bg-background/20 mb-4 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-primary transition-all duration-100 ease-linear"
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
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-premium">
            {guideItems.map((item, index) => (
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
