import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Shield,
    title: "Verified carbon credits",
    description: "Access the highest quality carbon removal and avoidance projects, all thoroughly vetted and verified.",
  },
  {
    icon: Zap,
    title: "Seamless integration",
    description: "Simple APIs and tools to integrate carbon neutrality into your products and services.",
  },
  {
    icon: Globe,
    title: "Global impact",
    description: "Support projects around the world that are making a real difference in fighting climate change.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
            Why choose Patch?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The most trusted platform for businesses to take meaningful climate action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-xl hover:bg-white/10 transition-all duration-200 animate-scale-in border border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-orange-100/90 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <feature.icon className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#FF5722] text-white font-medium px-8 py-6 h-auto text-base group shadow-none border-none"
          >
            Explore the platform
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
