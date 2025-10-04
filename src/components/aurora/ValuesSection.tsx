import { Recycle, Users, Sparkles, Anchor, Hammer, Palette } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Co-construction",
    description: "Nous construisons ensemble, en plaçant vos besoins au centre de notre démarche.",
  },
  {
    icon: Recycle,
    title: "Éco-conception",
    description: "Une approche durable qui respecte l'environnement à chaque étape du projet.",
  },
  {
    icon: Sparkles,
    title: "Transmission",
    description: "Partager nos connaissances et accompagner la montée en compétences.",
  },
  {
    icon: Palette,
    title: "Esthétique",
    description: "L'excellence visuelle et la qualité sont au cœur de nos réalisations.",
  },
  {
    icon: Anchor,
    title: "Ancrage local",
    description: "Valoriser les ressources et partenaires locaux pour un impact territorial.",
  },
  {
    icon: Hammer,
    title: "Adaptabilité",
    description: "Des solutions flexibles qui s'ajustent aux évolutions de vos besoins.",
  },
];

export const ValuesSection = () => {
  return (
    <section id="values" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nos Valeurs & Engagements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des principes qui guident chacune de nos actions et définissent notre identité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground/80 leading-relaxed">
            "Chaque projet est une opportunité de créer des connexions durables 
            et de contribuer à un avenir plus harmonieux."
          </blockquote>
          <p className="mt-6 text-muted-foreground font-medium">
            — Aurélien TANNEUX, Fondateur
          </p>
        </div>
      </div>
    </section>
  );
};
