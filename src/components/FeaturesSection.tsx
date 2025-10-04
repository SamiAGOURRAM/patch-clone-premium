import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "25,000+ projects",
    subtitle: "How Patch centralizes the voluntary carbon market",
    category: "COMPANY UPDATES",
    description: "The carbon market of the future: How Patch is creating clarity out of complexity",
  },
  {
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "SBTi Draft Corporate",
    subtitle: "Net-Zero Standard 2.0",
    category: "PATCH PERSPECTIVES",
    description: "SBTi Draft Corporate Net-Zero Standard 2.0: What's new and why it matters",
  },
  {
    image: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Trust and safety",
    subtitle: "Our philosophy on integrity",
    category: "COMPANY UPDATES",
    description: "The Patch approach to trust and safety",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground">
            The Patch blog
          </h2>
          <button className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors text-sm font-medium">
            See more articles
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container with Rounded Border Animation */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-[32px] group-hover:rounded-[48px] transition-all duration-500">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Text Overlay on Image */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-base">
                      {feature.subtitle}
                    </p>
                  </div>
                  
                  {/* Logo at bottom */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-white font-medium text-sm">Patch</span>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {feature.category}
                </span>
              </div>

              {/* Description */}
              <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.description}
              </h4>
              
              <p className="text-sm text-muted-foreground">
                Posted on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 h-auto text-base rounded-xl group shadow-none border-none transition-all"
          >
            Explore the platform
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
