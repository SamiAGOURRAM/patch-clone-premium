import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Verified carbon credits",
    description: "Access the highest quality carbon removal and avoidance projects, all thoroughly vetted and verified.",
  },
  {
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Seamless integration",
    description: "Simple APIs and tools to integrate carbon neutrality into your products and services.",
  },
  {
    image: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Global impact",
    description: "Support projects around the world that are making a real difference in fighting climate change.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-black">
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
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
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
