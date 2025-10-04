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
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why choose Patch?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most trusted platform for businesses to take meaningful climate action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background p-8 rounded-2xl shadow-elegant hover:shadow-premium transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="group">
            Explore the platform
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
