import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export const AuroraNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setActiveTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveTheme("default");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-primary/60 flex items-center justify-center shadow-elegant group-hover:shadow-premium transition-all duration-300">
                <span className="text-background font-bold text-xl">A</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse opacity-20" />
            </div>
            <span className="text-2xl font-bold tracking-tight hidden sm:inline">AURORA</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Activités
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Valeurs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              Connectons-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Activités
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Valeurs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              size="lg" 
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Connectons-nous
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
