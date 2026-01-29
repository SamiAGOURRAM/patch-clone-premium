import { useStats, useStatsSectionSettings } from "@/hooks/useSanity";
import { useSectionStyles } from "./SectionWrapper";
import { useNavigate } from "react-router-dom";

// Valeurs par défaut pour les paramètres de section
const defaultSectionSettings = {
  showHeader: false,
  sectionTitle: "Nos Chiffres Clés",
  sectionSubtitle: "Des résultats concrets qui témoignent de notre engagement",
};

// Valeurs par défaut (fallback)
const defaultStats = [
  {
    value: "50+",
    label: "Projets réalisés",
    colorFrom: "success",
    colorTo: "primary",
    link: "/#testimonials",
  },
  {
    value: "4",
    label: "Univers d'expertise",
    colorFrom: "primary",
    colorTo: "tertiary",
    link: "/univers",
  },
  {
    value: "100+",
    label: "Partenaires du réseau",
    colorFrom: "tertiary",
    colorTo: "secondary",
    link: "/reseau",
  },
  {
    value: "15+",
    label: "Villes & régions",
    colorFrom: "secondary",
    colorTo: "success",
    link: "/reseau",
  },
];

export const StatsSection = () => {
  const { data: sanityStats } = useStats();
  const { data: sectionSettingsData } = useStatsSectionSettings();
  const { sectionStyle, headingStyle } = useSectionStyles('stats');

  // Paramètres de section (Sanity ou valeurs par défaut)
  const sectionSettings = {
    showHeader: sectionSettingsData?.showHeader ?? defaultSectionSettings.showHeader,
    sectionTitle: sectionSettingsData?.sectionTitle || defaultSectionSettings.sectionTitle,
    sectionSubtitle: sectionSettingsData?.sectionSubtitle || defaultSectionSettings.sectionSubtitle,
  };
  
  // Utiliser les données Sanity ou les valeurs par défaut
  const stats = sanityStats && sanityStats.length > 0
    ? sanityStats.map(s => ({
        value: s.value,
        label: s.label,
        colorFrom: s.colorFrom || "primary",
        colorTo: s.colorTo || "secondary",
        link: s.link || undefined,
      }))
    : defaultStats;

  const navigate = useNavigate();

  const handleStatClick = (link?: string) => {
    if (!link) return;

    // Handle hash links (scroll to section on same page)
    if (link.startsWith('/#')) {
      const elementId = link.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to different page
      navigate(link);
    }
  };

  // Use Sanity color if set, otherwise use muted/30 like testimonials
  const hasCustomBackground = !!sectionStyle.backgroundColor;
  const textColor = sectionStyle.color || 'hsl(214 59% 20%)';

  return (
    <section 
      className={`py-20 px-4 relative overflow-hidden ${!hasCustomBackground ? 'bg-muted/30' : ''}`}
      style={{ 
        backgroundColor: hasCustomBackground ? sectionStyle.backgroundColor : undefined, 
        color: textColor 
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-success to-tertiary animate-aurora-shimmer" style={{ backgroundSize: "200% 200%" }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Optional Header */}
        {sectionSettings.showHeader && (
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: headingStyle.color || textColor }}
            >
              {sectionSettings.sectionTitle}
            </h2>
            {sectionSettings.sectionSubtitle && (
              <p className="text-lg max-w-2xl mx-auto" style={{ color: textColor, opacity: 0.8 }}>
                {sectionSettings.sectionSubtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            // Map color names to CSS custom properties
            const colorMap: Record<string, string> = {
              primary: 'hsl(var(--primary))',
              secondary: 'hsl(var(--secondary))',
              tertiary: 'hsl(var(--tertiary))',
              success: 'hsl(var(--success))',
              accent: 'hsl(var(--accent))',
            };
            const fromColor = colorMap[stat.colorFrom] || colorMap.primary;
            const toColor = colorMap[stat.colorTo] || colorMap.secondary;
            
            const isClickable = !!stat.link;

            return (
              <div
                key={stat.label}
                className={`text-center animate-fade-in group ${isClickable ? 'cursor-pointer' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleStatClick(stat.link)}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleStatClick(stat.link);
                  }
                }}
              >
                <div
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 ${isClickable ? 'group-hover:drop-shadow-lg' : ''}`}
                  style={{
                    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm md:text-base font-medium transition-colors ${isClickable ? 'group-hover:text-primary' : ''}`}
                  style={{ color: textColor }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
