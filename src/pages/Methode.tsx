import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Compass, Layers, HeartHandshake, Shield, Target, Lightbulb, Zap } from "lucide-react";
import { useContact } from "@/components/ContactModalProvider";
import { usePageMethode } from "@/hooks/useSanity";

// Icon mapping for Sanity
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  Compass,
  Layers,
  HeartHandshake,
  Shield,
  Target,
  Lightbulb,
  Zap,
};

// Default values (fallback)
const defaultMethodSteps = [
  {
    number: "01",
    title: "Observer",
    subtitle: "Analyse & Diagnostic",
    description: "Nous commençons par une observation approfondie de votre environnement, vos processus et vos équipes pour comprendre les enjeux réels de votre transformation.",
    icon: "Eye",
    details: ["Audit organisationnel complet", "Analyse des processus existants", "Entretiens avec les parties prenantes", "Benchmark sectoriel"],
  },
  {
    number: "02",
    title: "Orienter",
    subtitle: "Vision & Stratégie",
    description: "Nous définissons ensemble une vision claire et une stratégie adaptée à vos objectifs, en tenant compte de vos contraintes et opportunités.",
    icon: "Compass",
    details: ["Définition de la vision cible", "Élaboration de la feuille de route", "Priorisation des chantiers", "Indicateurs de performance"],
  },
  {
    number: "03",
    title: "Structurer",
    subtitle: "Organisation & Planification",
    description: "Nous structurons votre projet de transformation avec une méthodologie éprouvée et des outils adaptés pour garantir son succès.",
    icon: "Layers",
    details: ["Architecture de projet", "Gouvernance et rôles", "Planning détaillé", "Gestion des risques"],
  },
  {
    number: "04",
    title: "Accompagner",
    subtitle: "Mise en œuvre & Support",
    description: "Nous vous accompagnons tout au long de la mise en œuvre, avec un support constant et une adaptation continue aux défis rencontrés.",
    icon: "HeartHandshake",
    details: ["Pilotage opérationnel", "Formation des équipes", "Conduite du changement", "Support et coaching"],
  },
  {
    number: "05",
    title: "Préserver",
    subtitle: "Pérennisation & Amélioration",
    description: "Nous veillons à ancrer les transformations dans la durée et à mettre en place les mécanismes d'amélioration continue.",
    icon: "Shield",
    details: ["Transfert de compétences", "Documentation des processus", "Suivi post-projet", "Amélioration continue"],
  },
];

const defaultContent = {
  heroTitle: "Méthode AURORA",
  heroSubtitle: "Une approche structurée en 5 étapes pour accompagner votre transformation avec excellence.",
  ctaTitle: "Découvrez notre méthode en action",
  ctaSubtitle: "Prenez rendez-vous pour une présentation personnalisée de notre approche.",
  ctaButtonText: "Planifier un échange",
};

export default function Methode() {
  const { openContactModal } = useContact();
  const { data: pageData } = usePageMethode();

  // Use Sanity data or defaults
  const heroTitle = pageData?.heroTitle || defaultContent.heroTitle;
  const heroSubtitle = pageData?.heroSubtitle || defaultContent.heroSubtitle;
  const methodSteps = pageData?.methodSteps || defaultMethodSteps;
  const ctaTitle = pageData?.ctaTitle || defaultContent.ctaTitle;
  const ctaSubtitle = pageData?.ctaSubtitle || defaultContent.ctaSubtitle;
  const ctaButtonText = pageData?.ctaButtonText || defaultContent.ctaButtonText;
  
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

      {/* Method Steps */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {methodSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Eye;
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.title + index}
                className={`flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Number & Icon */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-4">
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {step.number}
                  </span>
                  {index < methodSteps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-8 border border-border">
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    {step.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
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
