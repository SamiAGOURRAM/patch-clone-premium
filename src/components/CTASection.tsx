import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useContactInfo } from "@/hooks/useSanity";
import { useSectionStyles } from "./SectionWrapper";
import { useContact } from "./ContactModalProvider";

// Valeurs par défaut (fallback)
const defaultContactInfo = {
  email: "contact@aurora-consulting.fr",
  phone: "+33 1 23 45 67 89",
  instagram: "aurora_consulting",
  twitter: "aurora_consult",
  linkedin: "https://linkedin.com/company/aurora-consulting",
  calComLink: "med-agourram-otzwlb",
  ctaTitle: "Prêt à transformer votre entreprise ?",
  ctaSubtitle: "Rejoignez les entreprises qui font confiance à Aurora",
  ctaButtonContact: "Nous contacter",
  ctaButtonMeeting: "Planifier un rendez-vous",
};

export const CTASection = () => {
  const { data: sanityContactInfo } = useContactInfo();
  const { sectionColors } = useSectionStyles('cta');
  const { openContactModal } = useContact();

  // Utiliser les données Sanity ou les valeurs par défaut
  const contactInfo = {
    email: sanityContactInfo?.email || defaultContactInfo.email,
    phone: sanityContactInfo?.phone || defaultContactInfo.phone,
    instagram: sanityContactInfo?.instagram || defaultContactInfo.instagram,
    twitter: sanityContactInfo?.twitter || defaultContactInfo.twitter,
    linkedin: sanityContactInfo?.linkedin || defaultContactInfo.linkedin,
    calComLink: sanityContactInfo?.calComLink || defaultContactInfo.calComLink,
    ctaTitle: sanityContactInfo?.ctaTitle || defaultContactInfo.ctaTitle,
    ctaSubtitle: sanityContactInfo?.ctaSubtitle || defaultContactInfo.ctaSubtitle,
  };

  // Default dark background (#0F1C2E) if no color set in Sanity
  const backgroundColor = sectionColors?.backgroundColor 
    ? `hsl(${sectionColors.backgroundColor})` 
    : '#0F1C2E';
  const textColor = sectionColors?.textColor 
    ? `hsl(${sectionColors.textColor})` 
    : '#FAF7F3';

  const handleBookMeeting = async () => {
    const cal = await getCalApi();
    cal("ui", {
      styles: { branding: { brandColor: "#000000" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
    cal("modal", { calLink: contactInfo.calComLink });
  };

  return (
    <>
      {/* Separator Line */}
      <div className="w-full border-t border-border"></div>
      
      <section 
        className="py-24 px-4 relative overflow-hidden"
        style={{
          backgroundColor,
          color: textColor,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#165C42]/20 via-transparent to-[#165C42]/20" />
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#165C42]/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#165C42]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in"
          style={{ color: sectionColors?.headingColor ? `hsl(${sectionColors.headingColor})` : textColor }}
        >
          {contactInfo.ctaTitle}
        </h2>
        <p 
          className="text-xl md:text-2xl mb-10 animate-scale-in" 
          style={{ animationDelay: "0.1s", color: textColor, opacity: 0.8 }}
        >
          {contactInfo.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="lg" 
            className="group"
            onClick={openContactModal}
            style={{
              backgroundColor: sectionColors?.buttonBackgroundColor 
                ? `hsl(${sectionColors.buttonBackgroundColor})` 
                : '#FAF7F3',
              color: sectionColors?.buttonTextColor 
                ? `hsl(${sectionColors.buttonTextColor})` 
                : 'hsl(214 59% 20%)',
            }}
          >
            Nous contacter
          </Button>
          <Button 
            size="lg" 
            className="group"
            onClick={handleBookMeeting}
            style={{
              backgroundColor: sectionColors?.buttonBackgroundColor 
                ? `hsl(${sectionColors.buttonBackgroundColor})` 
                : '#FAF7F3',
              color: sectionColors?.buttonTextColor 
                ? `hsl(${sectionColors.buttonTextColor})` 
                : 'hsl(214 59% 20%)',
            }}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Planifier un rendez-vous
          </Button>
        </div>
      </div>
      </section>
    </>
  );
};
