const stats = [
  {
    value: "50+",
    label: "Projets réalisés",
    color: "from-success to-primary",
  },
  {
    value: "4",
    label: "Univers d'expertise",
    color: "from-primary to-tertiary",
  },
  {
    value: "100+",
    label: "Partenaires du réseau",
    color: "from-tertiary to-secondary",
  },
  {
    value: "15+",
    label: "Villes & régions",
    color: "from-secondary to-success",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
