import { Leaf, Compass, Network, Presentation, Lightbulb } from "lucide-react";
import { useTheme, ActivityTheme } from "@/contexts/ThemeContext";

const activities = [
  {
    id: "amenagement" as ActivityTheme,
    icon: Leaf,
    title: "Aménagement & Végétalisation",
    description: "Conseil, design végétal, scénographie biophilique, pose de plantes, mobilier naturel",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-500/20",
  },
  {
    id: "conseil" as ActivityTheme,
    icon: Compass,
    title: "Conseil & Gestion de projet",
    description: "AMO, planification, coordination, pilotage de chantier, relation client et fournisseur",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-600/20",
  },
  {
    id: "relation" as ActivityTheme,
    icon: Network,
    title: "Mise en relation multisectorielle",
    description: "Mise en lien de partenaires qualifiés (juridique, tech, maintenance, finance, RH, etc.)",
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-600/20",
  },
  {
    id: "transmission" as ActivityTheme,
    icon: Presentation,
    title: "Transmission & Conférences",
    description: "Jury d'examen, conférencier en école, formation sur le commerce, l'entrepreneuriat",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-500/20",
  },
  {
    id: "solutions" as ActivityTheme,
    icon: Lightbulb,
    title: "Solutions sur-mesure",
    description: "Offres hybrides co-construites avec des partenaires, stratégie globale d'aménagement",
    color: "from-gray-600 to-gray-700",
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
    borderColor: "border-gray-600/20",
  },
];

export const ActivitiesSection = () => {
  const { activeTheme, setActiveTheme } = useTheme();

  return (
    <section id="activities" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nos Activités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cinq domaines d'expertise pour répondre à vos besoins. 
            Cliquez sur une activité pour découvrir son univers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <button
              key={activity.id}
              onClick={() => setActiveTheme(activity.id)}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 text-left animate-scale-in ${
                activeTheme === activity.id
                  ? `${activity.bgColor} ${activity.borderColor} shadow-premium scale-105`
                  : "bg-background border-border hover:shadow-elegant hover:scale-102"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${activity.color} transition-all duration-300 ${
                  activeTheme === activity.id ? "scale-110" : "group-hover:scale-105"
                }`}
              >
                <activity.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 transition-colors">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activity.description}
              </p>

              {/* Active indicator */}
              {activeTheme === activity.id && (
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${activity.color} animate-pulse`} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Reset button */}
        {activeTheme !== "default" && (
          <div className="text-center mt-8 animate-fade-in">
            <button
              onClick={() => setActiveTheme("default")}
              className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Réinitialiser les couleurs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
