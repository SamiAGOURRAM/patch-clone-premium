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
    <section className="py-16 px-4 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your guide to carbon credits from end to end
              </h2>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground transition-colors"
              >
                Learn how Patch works
              </Button>
            </div>

            <div className="space-y-4 mt-8">
              {guideItems.map((item, index) => (
                <div
                  key={item.title}
                  className="cursor-pointer group"
                  onClick={() => handleItemClick(index)}
                >
                  {/* Timer Bar */}
                  <div className="h-0.5 bg-white/20 mb-3 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-white transition-all duration-100 ease-linear"
                      style={{
                        width: activeIndex === index ? `${progress}%` : "0%",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3
                      className={`text-base font-medium transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-white/30"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-all duration-300 ${
                        activeIndex === index
                          ? "text-white/70 max-h-24 opacity-100"
                          : "text-white/20 max-h-0 opacity-0 overflow-hidden"
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
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-premium">
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
