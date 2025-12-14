import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Users, Building, Handshake, Star, Target } from "lucide-react";
import { useContact } from "@/components/ContactModalProvider";
import { usePageReseau } from "@/hooks/useSanity";

// Icon mapping for Sanity
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Handshake,
  MapPin,
  Users,
  Building,
  Star,
  Target,
};

// Default values (fallback)
const defaultContent = {
  heroTitle: "Notre Réseau",
  heroSubtitle: "Un écosystème de partenaires d'excellence pour répondre à tous vos enjeux de transformation.",
  networkStats: [
    { value: "100+", label: "Partenaires", icon: "Handshake" },
    { value: "15+", label: "Villes & régions", icon: "MapPin" },
    { value: "50+", label: "Experts", icon: "Users" },
    { value: "4", label: "Pôles d'expertise", icon: "Building" },
  ],
  partnerTypesTitle: "Nos partenaires",
  partnerTypesSubtitle: "Un réseau diversifié pour couvrir l'ensemble de vos besoins",
  partnerTypes: [
    { title: "Cabinets partenaires", description: "Des cabinets de conseil spécialisés qui partagent notre vision et nos standards de qualité.", count: "40+" },
    { title: "Experts indépendants", description: "Des consultants seniors avec une expertise pointue dans leur domaine.", count: "35+" },
    { title: "Partenaires technologiques", description: "Des éditeurs et intégrateurs de solutions pour accompagner vos transformations digitales.", count: "15+" },
    { title: "Partenaires académiques", description: "Des écoles et universités pour la recherche et la formation.", count: "10+" },
  ],
  regionsTitle: "Présence géographique",
  regionsSubtitle: "Un maillage territorial pour vous accompagner au plus près",
  regions: [
    "Paris & Île-de-France",
    "Lyon & Auvergne-Rhône-Alpes",
    "Marseille & PACA",
    "Bordeaux & Nouvelle-Aquitaine",
    "Nantes & Pays de la Loire",
    "Lille & Hauts-de-France",
    "Toulouse & Occitanie",
    "Strasbourg & Grand Est",
  ],
  joinCtaTitle: "Rejoignez notre réseau",
  joinCtaSubtitle: "Vous êtes consultant, cabinet ou expert ? Rejoignez un réseau d'excellence.",
  joinCtaButtonText: "Devenir partenaire",
  contactButtonText: "Nous contacter",
};

export default function Reseau() {
  const { openContactModal } = useContact();
  const { data: pageData } = usePageReseau();

  // Use Sanity data or defaults
  const heroTitle = pageData?.heroTitle || defaultContent.heroTitle;
  const heroSubtitle = pageData?.heroSubtitle || defaultContent.heroSubtitle;
  const networkStats = pageData?.networkStats || defaultContent.networkStats;
  const partnerTypesTitle = pageData?.partnerTypesTitle || defaultContent.partnerTypesTitle;
  const partnerTypesSubtitle = pageData?.partnerTypesSubtitle || defaultContent.partnerTypesSubtitle;
  const partnerTypes = pageData?.partnerTypes || defaultContent.partnerTypes;
  const regionsTitle = pageData?.regionsTitle || defaultContent.regionsTitle;
  const regionsSubtitle = pageData?.regionsSubtitle || defaultContent.regionsSubtitle;
  const regions = pageData?.regions || defaultContent.regions;
  const joinCtaTitle = pageData?.joinCtaTitle || defaultContent.joinCtaTitle;
  const joinCtaSubtitle = pageData?.joinCtaSubtitle || defaultContent.joinCtaSubtitle;
  const joinCtaButtonText = pageData?.joinCtaButtonText || defaultContent.joinCtaButtonText;
  const contactButtonText = pageData?.contactButtonText || defaultContent.contactButtonText;
  
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

      {/* Network Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {networkStats.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon] || Handshake;
              return (
                <div key={stat.label + idx} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {partnerTypesTitle}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {partnerTypesSubtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((type, idx) => (
              <div key={type.title + idx} className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{type.title}</h3>
                  <span className="text-3xl font-bold text-primary">{type.count}</span>
                </div>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {regionsTitle}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {regionsSubtitle}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, idx) => (
              <div key={region + idx} className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Network CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {joinCtaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {joinCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={openContactModal}
            >
              {joinCtaButtonText}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={openContactModal}
            >
              {contactButtonText}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
