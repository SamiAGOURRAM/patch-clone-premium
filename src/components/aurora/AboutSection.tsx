import { Award, Heart, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-premium">
                  <span className="text-6xl font-bold text-white">A</span>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">Aurélien TANNEUX</p>
                  <p className="text-muted-foreground">Fondateur d'AURORA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                À propos d'AURORA
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  AURORA est née d'une vision : créer un pont entre expertise technique, 
                  créativité et engagement humain. Fondée par Aurélien TANNEUX, cette 
                  structure hybride réunit conseil, gestion de projets, mise en relation 
                  et transmission.
                </p>
                <p>
                  Notre approche se distingue par sa dimension responsable et personnalisée. 
                  Chaque projet est une opportunité de co-construire des solutions durables, 
                  esthétiques et adaptées aux besoins réels de nos clients.
                </p>
              </div>
            </div>

            {/* Key points */}
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    Accompagner les organisations dans leur transformation avec des 
                    solutions innovantes et durables.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Philosophie</h3>
                  <p className="text-muted-foreground">
                    Placer l'humain au cœur de chaque projet, avec authenticité 
                    et engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Expertise</h3>
                  <p className="text-muted-foreground">
                    Plus de 10 ans d'expérience dans l'aménagement, le conseil et 
                    la gestion de projets complexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
