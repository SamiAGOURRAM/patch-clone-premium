import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const AuroraHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main headline */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            À l'aube des
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
              connexions durables
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AURORA accompagne vos projets avec expertise, créativité et engagement. 
            Une approche sur-mesure pour des solutions qui font sens.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="group text-lg px-8 py-6"
          >
            Commencer un projet
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("activities");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg px-8 py-6"
          >
            Découvrir nos activités
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};
