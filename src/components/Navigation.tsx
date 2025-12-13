import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigation } from "@/hooks/useSanity";

// Valeurs par défaut (fallback si Sanity n'est pas configuré)
const defaultNavigation = {
  logoText: "AURORA",
  menuItems: [
    {
      label: "Nos Univers",
      subItems: [
        { label: "Espace", href: "#espace" },
        { label: "Expérience", href: "#experience" },
        { label: "Structure", href: "#structure" },
        { label: "Image", href: "#image" },
      ],
    },
    {
      label: "Méthode AURORA",
      subItems: [
        { label: "Observer", href: "#observer" },
        { label: "Orienter", href: "#orienter" },
        { label: "Structurer", href: "#structurer" },
        { label: "Accompagner", href: "#accompagner" },
        { label: "Préserver", href: "#preserver" },
      ],
    },
    {
      label: "Réseau",
      href: "#network",
    },
    {
      label: "L'Âme",
      subItems: [
        { label: "Manifeste", href: "#manifeste" },
        { label: "Origines", href: "#origines" },
        { label: "Valeurs", href: "#valeurs" },
      ],
    },
    {
      label: "Les Connexions Durables",
      href: "#magazine",
    },
  ],
  ctaButtonText: "Nous contacter",
};

export const Navigation = () => {
  const { data: sanityNavigation } = useNavigation();

  // Utiliser les données Sanity ou les valeurs par défaut
  const navigation = {
    logoText: sanityNavigation?.logoText || defaultNavigation.logoText,
    menuItems: sanityNavigation?.menuItems || defaultNavigation.menuItems,
    ctaButtonText: sanityNavigation?.ctaButtonText || defaultNavigation.ctaButtonText,
  };

  return (
    <nav 
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-border"
      style={{
        backgroundColor: 'hsl(var(--nav-background) / 0.95)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span 
              className="text-2xl font-bold tracking-wide"
              style={{ color: 'hsl(var(--nav-text))' }}
            >
              {navigation.logoText}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.menuItems.map((item, index) => {
              // Si l'item a des sous-éléments, afficher un dropdown
              if (item.subItems && item.subItems.length > 0) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger 
                      className="flex items-center gap-1 transition-colors font-medium"
                      style={{ 
                        color: 'hsl(var(--nav-text))',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'hsl(var(--nav-text-hover))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'hsl(var(--nav-text))';
                      }}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-popover z-50">
                      {item.subItems.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <a href={subItem.href}>{subItem.label}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              // Sinon, afficher un lien simple
              return (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="transition-colors font-medium"
                  style={{ 
                    color: 'hsl(var(--nav-text))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--nav-text-hover))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--nav-text))';
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              size="lg" 
              className="font-medium"
              style={{
                backgroundColor: 'hsl(var(--nav-button))',
                color: 'hsl(var(--nav-button-text))',
              }}
              onMouseEnter={(e) => {
                const hoverColor = getComputedStyle(document.documentElement)
                  .getPropertyValue('--button-primary-hover').trim() || 
                  getComputedStyle(document.documentElement)
                  .getPropertyValue('--nav-button').trim();
                e.currentTarget.style.backgroundColor = hoverColor 
                  ? `hsl(${hoverColor} / 0.9)` 
                  : e.currentTarget.style.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--nav-button))';
              }}
            >
              {navigation.ctaButtonText}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
