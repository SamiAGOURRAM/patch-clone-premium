import { useStats } from "@/hooks/useSanity";
import { useSectionStyles } from "./SectionWrapper";

// Valeurs par défaut (fallback)
const defaultStats = [
  {
    value: "50+",
    label: "Projets réalisés",
    colorFrom: "success",
    colorTo: "primary",
  },
  {
    value: "4",
    label: "Univers d'expertise",
    colorFrom: "primary",
    colorTo: "tertiary",
  },
  {
    value: "100+",
    label: "Partenaires du réseau",
    colorFrom: "tertiary",
    colorTo: "secondary",
  },
  {
    value: "15+",
    label: "Villes & régions",
    colorFrom: "secondary",
    colorTo: "success",
  },
];

export const StatsSection = () => {
  const { data: sanityStats } = useStats();
  const { sectionStyle, headingStyle } = useSectionStyles('stats');
  
  // Utiliser les données Sanity ou les valeurs par défaut
  const stats = sanityStats && sanityStats.length > 0 
    ? sanityStats.map(s => ({
        value: s.value,
        label: s.label,
        colorFrom: s.colorFrom || "primary",
        colorTo: s.colorTo || "secondary",
      }))
    : defaultStats;

  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      style={sectionStyle}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-success to-tertiary animate-aurora-shimmer" style={{ backgroundSize: "200% 200%" }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-${stat.colorFrom} to-${stat.colorTo} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}>
                {stat.value}
              </div>
              <div 
                className="text-sm md:text-base font-medium"
                style={headingStyle}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
