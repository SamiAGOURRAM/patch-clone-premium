import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigation, useSiteSettings, useSeasonalSettings } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { useContact } from "./ContactModalProvider";
import { useMemo } from "react";

// Valeurs par défaut (fallback si Sanity n'est pas configuré)
const defaultNavigation = {
  logoText: "AURORA",
  menuItems: [
    {
      label: "Nos Univers",
      href: "/univers",
      subItems: [
        { label: "Espace", href: "/univers#espace" },
        { label: "Expérience", href: "/univers#experience" },
        { label: "Structure", href: "/univers#structure" },
        { label: "Image", href: "/univers#image" },
      ],
    },
    {
      label: "Méthode AURORA",
      href: "/methode",
      subItems: [
        { label: "Observer", href: "/methode#observer" },
        { label: "Orienter", href: "/methode#orienter" },
        { label: "Structurer", href: "/methode#structurer" },
        { label: "Accompagner", href: "/methode#accompagner" },
        { label: "Préserver", href: "/methode#preserver" },
      ],
    },
    {
      label: "Réseau",
      href: "/reseau",
    },
    {
      label: "L'Âme",
      href: "/ame",
      subItems: [
        { label: "Manifeste", href: "/ame#manifeste" },
        { label: "Origines", href: "/ame#origines" },
        { label: "Valeurs", href: "/ame#valeurs" },
      ],
    },
    {
      label: "Les Connexions Durables",
      href: "/blog",
    },
  ],
  ctaButtonText: "Nous contacter",
};

export const Navigation = () => {
  const { data: sanityNavigation } = useNavigation();
  const { data: siteSettings } = useSiteSettings();
  const { data: seasonalSettings } = useSeasonalSettings();
  const { openContactModal } = useContact();

  // Check if we're within the season dates and festive accents are enabled
  const isFestiveMode = useMemo(() => {
    if (!seasonalSettings?.christmasAccentEnabled) return false;
    
    const now = new Date();
    
    if (seasonalSettings.seasonStartDate) {
      const start = new Date(seasonalSettings.seasonStartDate);
      if (now < start) return false;
    }
    
    if (seasonalSettings.seasonEndDate) {
      const end = new Date(seasonalSettings.seasonEndDate);
      if (now > end) return false;
    }
    
    return true;
  }, [seasonalSettings]);

  // Utiliser les données Sanity ou les valeurs par défaut
  const navigation = {
    logoText: siteSettings?.siteName || sanityNavigation?.logoText || defaultNavigation.logoText,
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
          <Link to="/" className="flex items-center gap-3">
            {siteSettings?.headerLogo ? (
              <img
                src={urlFor(siteSettings.headerLogo).height(200).auto('format').fit('max').url()}
                alt={navigation.logoText}
                className="h-20 w-auto object-contain"
                style={{ imageRendering: 'auto' }}
              />
            ) : (
              <span
                className="text-2xl font-bold tracking-wide"
                style={{ color: 'hsl(var(--nav-text))' }}
              >
                {navigation.logoText}
              </span>
            )}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.menuItems.map((item, index) => {
              // Helper to determine if link is internal (starts with /)
              const isInternal = (href: string) => href?.startsWith('/');
              
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
                          {isInternal(subItem.href) ? (
                            <Link to={subItem.href}>{subItem.label}</Link>
                          ) : (
                            <a href={subItem.href}>{subItem.label}</a>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              // Sinon, afficher un lien simple
              const href = item.href || "#";
              if (isInternal(href)) {
                return (
                  <Link
                    key={index}
                    to={href}
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
                  </Link>
                );
              }
              return (
                <a
                  key={index}
                  href={href}
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
              className="font-medium relative"
              onClick={openContactModal}
              style={{
                backgroundColor: 'hsl(var(--nav-button))',
                color: 'hsl(var(--nav-button-text))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isFestiveMode && (
                <img
                  src="https://assets.codepen.io/4175254/santa-hat-test-9.png"
                  alt=""
                  className="absolute pointer-events-none z-10"
                  style={{
                    top: '-10px',
                    right: '-17px',
                    height: '44px',
                    transform: 'scaleX(-1) rotate(-15deg)',
                    filter: 'drop-shadow(0 2px 1px rgba(0, 0, 0, 0.25))',
                  }}
                />
              )}
              {navigation.ctaButtonText}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
