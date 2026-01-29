import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useTestimonials, usePartnerLogos, useTestimonialsSectionSettings } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { useSectionStyles } from "./SectionWrapper";

// Valeurs par défaut pour les paramètres de section
const defaultSectionSettings = {
  badgeText: "Nos clients témoignent",
  sectionTitle: "Découvrez les entreprises qui font confiance à Aurora pour les accompagner dans leur transformation",
  buttonText: "Nous contacter",
  buttonLink: "",
};

// Valeurs par défaut (fallback)
const defaultTestimonials = [
  {
    company: "ENTREPRISE A",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop",
    quote: "Aurora nous a accompagnés dans notre transformation avec une expertise et une écoute remarquables. Un partenaire de confiance.",
    personName: "Marie Dupont",
    personTitle: "Directrice Générale",
    personImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
  },
  {
    company: "GROUPE B",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
    quote: "Grâce à Aurora, nous avons pu structurer notre démarche RSE et engager l'ensemble de nos équipes dans une vision durable.",
    personName: "Jean-Pierre Martin",
    personTitle: "Directeur RSE",
    personImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
  },
  {
    company: "SOCIÉTÉ C",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
    quote: "L'approche d'Aurora est unique : pragmatique, humaine et orientée résultats. Une collaboration exceptionnelle.",
    personName: "Sophie Bernard",
    personTitle: "Présidente",
    personImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
  }
];

const defaultPartnerLogos = [
  "MIRAKI",
  "STARLING BANK",
  "AVIVA",
  "IFS",
  "CHANGE CLIMATE",
  "AUTODESK",
  "IEQT",
  "BAIN & COMPANY"
];

export const TestimonialsSection = () => {
  const { data: sanityTestimonials } = useTestimonials();
  const { data: sanityPartnerLogos } = usePartnerLogos();
  const { data: sectionSettingsData } = useTestimonialsSectionSettings();
  const { sectionStyle } = useSectionStyles('testimonials');

  // Paramètres de section (Sanity ou valeurs par défaut)
  const sectionSettings = {
    badgeText: sectionSettingsData?.badgeText || defaultSectionSettings.badgeText,
    sectionTitle: sectionSettingsData?.sectionTitle || defaultSectionSettings.sectionTitle,
  };

  // Utiliser les données Sanity ou les valeurs par défaut
  const testimonials = sanityTestimonials && sanityTestimonials.length > 0 
    ? sanityTestimonials.map(t => ({
        company: t.company,
        logo: t.logo ? urlFor(t.logo).width(200).url() : undefined,
        quote: t.quote,
        personName: t.personName,
        personTitle: t.personTitle,
        personImage: t.personImage ? urlFor(t.personImage).width(400).url() : undefined,
      }))
    : defaultTestimonials;

  const partnerLogos = sanityPartnerLogos?.logos || defaultPartnerLogos;

  return (
    <section
      id="testimonials"
      className="py-16 px-4"
      style={sectionStyle}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <span className="text-sm">{sectionSettings.badgeText}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
              {sectionSettings.sectionTitle}
            </h2>
          </div>
        </div>

        {/* Carousel */}
        <Carousel className="w-full mb-12">
          <div className="flex justify-end gap-2 mb-4">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-[85%] lg:basis-[48%]">
                <div className="h-[320px] flex flex-col lg:flex-row gap-4 bg-muted/30 rounded-2xl overflow-hidden">
                  {/* Quote Section */}
                  <div className="flex-1 flex flex-col p-6 min-w-0">
                    <div className="mb-3">
                      <span className="text-sm font-semibold tracking-wider text-primary">{testimonial.company}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 mb-4 scrollbar-thin">
                      <p className="text-base leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-border/50">
                      <p className="font-semibold text-sm">{testimonial.personName}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.personTitle}</p>
                    </div>
                  </div>

                  {/* Image Section - Fixed size */}
                  <div className="hidden lg:block w-52 flex-shrink-0">
                    <img
                      src={testimonial.personImage}
                      alt={testimonial.personName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8 border-t border-border">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="text-lg md:text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
