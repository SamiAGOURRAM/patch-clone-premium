import { Mail, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <>
      {/* Separator Line */}
      <div className="w-full border-t border-border"></div>
      
      <section className="py-24 px-4 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Ready to make an impact?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-background/80 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          Join hundreds of companies rebalancing the planet
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 group"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-foreground group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Meeting
          </Button>
        </div>
      </div>
      </section>
    </>
  );
};
