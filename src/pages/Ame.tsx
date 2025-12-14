import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scroll, History, Heart } from "lucide-react";
import { useContact } from "@/components/ContactModalProvider";
import { usePageAme } from "@/hooks/useSanity";

// Default values (fallback)
const defaultContent = {
  heroTitle: "L'Âme Aurora",
  heroSubtitle: "Découvrez qui nous sommes, d'où nous venons et ce qui nous anime au quotidien.",
  manifeste: {
    title: "Notre Manifeste",
    subtitle: "Ce en quoi nous croyons",
    content: `Nous croyons que chaque entreprise porte en elle le potentiel d'une transformation profonde et durable.

Chez Aurora, nous ne sommes pas de simples consultants – nous sommes des partenaires de votre réussite, engagés à vos côtés à chaque étape de votre évolution.

Notre conviction : la transformation n'est pas une destination, mais un voyage continu vers l'excellence. Elle doit être humaine, progressive et respectueuse de l'ADN de chaque organisation.

Nous refusons les solutions toutes faites. Chaque projet est unique, chaque entreprise mérite une approche sur-mesure qui tient compte de son histoire, de sa culture et de ses ambitions.`,
    highlights: [
      "L'humain au cœur de chaque transformation",
      "L'excellence comme standard, pas comme exception",
      "L'innovation au service de la durabilité",
      "Le partenariat plutôt que la prestation",
    ],
  },
  origines: {
    title: "Nos Origines",
    subtitle: "D'où nous venons",
    content: `Aurora est née d'une conviction partagée par ses fondateurs : les entreprises méritent un accompagnement différent, plus humain et plus engagé.

Après des années passées dans de grands cabinets de conseil, nous avons voulu créer une structure à taille humaine, capable d'offrir l'excellence des grandes enseignes avec l'agilité et la proximité d'un partenaire de confiance.

Depuis notre création, nous avons accompagné plus de 50 entreprises dans leur transformation, des startups innovantes aux grands groupes industriels.

Notre croissance s'est construite sur une seule promesse : des résultats concrets et mesurables pour chacun de nos clients.`,
    milestones: [
      { year: "2018", event: "Création d'Aurora" },
      { year: "2019", event: "10ème projet de transformation" },
      { year: "2021", event: "Expansion nationale" },
      { year: "2023", event: "50+ entreprises accompagnées" },
      { year: "2024", event: "Lancement du réseau de partenaires" },
    ],
  },
  valeurs: {
    title: "Nos Valeurs",
    subtitle: "Ce qui nous guide",
    content: "Nos valeurs ne sont pas des mots sur un mur – elles guident chacune de nos décisions et chacune de nos interactions.",
    values: [
      { name: "Excellence", description: "Nous visons l'excellence dans tout ce que nous faisons, sans compromis sur la qualité." },
      { name: "Intégrité", description: "Nous agissons avec honnêteté et transparence, même quand c'est difficile." },
      { name: "Engagement", description: "Nous nous engageons pleinement aux côtés de nos clients, leur succès est notre succès." },
      { name: "Innovation", description: "Nous cherchons constamment de nouvelles approches pour mieux servir nos clients." },
      { name: "Humanité", description: "Nous plaçons l'humain au cœur de chaque transformation, car ce sont les hommes qui font les entreprises." },
    ],
  },
  ctaTitle: "Envie de nous rejoindre ?",
  ctaSubtitle: "Nous recherchons des talents qui partagent nos valeurs.",
  ctaButtonText: "Nous contacter",
};

export default function Ame() {
  const { openContactModal } = useContact();
  const { data: pageData } = usePageAme();

  // Use Sanity data or defaults
  const heroTitle = pageData?.heroTitle || defaultContent.heroTitle;
  const heroSubtitle = pageData?.heroSubtitle || defaultContent.heroSubtitle;
  const manifeste = pageData?.manifeste || defaultContent.manifeste;
  const origines = pageData?.origines || defaultContent.origines;
  const valeurs = pageData?.valeurs || defaultContent.valeurs;
  const ctaTitle = pageData?.ctaTitle || defaultContent.ctaTitle;
  const ctaSubtitle = pageData?.ctaSubtitle || defaultContent.ctaSubtitle;
  const ctaButtonText = pageData?.ctaButtonText || defaultContent.ctaButtonText;

  // Build sections array for rendering
  const aboutSections = [
    { ...manifeste, icon: Scroll },
    { ...origines, icon: History },
    { ...valeurs, icon: Heart },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-3xl">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-24">
          {aboutSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <div key={section.title + sectionIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <IconComponent className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {section.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  {section.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Highlights for Manifeste */}
                {'highlights' in section && section.highlights && (
                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {section.highlights.map((highlight, index) => (
                      <div key={index} className="bg-muted/30 rounded-xl p-4 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Timeline for Origines */}
                {'milestones' in section && section.milestones && (
                  <div className="mt-8 relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                    {section.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-6 mb-6 last:mb-0">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                          <span className="text-xs font-bold text-primary-foreground">
                            {milestone.year.slice(-2)}
                          </span>
                        </div>
                        <div className="bg-card rounded-xl p-4 border border-border flex-1">
                          <span className="text-sm font-medium text-muted-foreground">{milestone.year}</span>
                          <p className="text-foreground font-medium">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Values Grid */}
                {'values' in section && section.values && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {section.values.map((value, index) => (
                      <div key={index} className="bg-card rounded-xl p-6 border border-border">
                        <h3 className="text-lg font-bold text-foreground mb-2">{value.name}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {ctaSubtitle}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={openContactModal}
          >
            {ctaButtonText}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
