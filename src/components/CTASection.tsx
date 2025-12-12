import { Mail, Calendar, Phone, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { getCalApi } from "@calcom/embed-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { useContactInfo } from "@/hooks/useSanity";

// Valeurs par défaut (fallback)
const defaultContactInfo = {
  email: "contact@aurora.com",
  phone: "+33 1 23 45 67 89",
  instagram: "aurora_official",
  twitter: "aurora_official",
  linkedin: "https://linkedin.com/company/aurora",
  calComLink: "med-agourram-otzwlb",
  ctaTitle: "Ready to make an impact?",
  ctaSubtitle: "Join hundreds of companies rebalancing the planet",
};

export const CTASection = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const { data: sanityContactInfo } = useContactInfo();

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
      
      <section className="py-24 px-4 bg-[#0F1C2E] text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#165C42]/20 via-transparent to-[#165C42]/20" />
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#165C42]/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#165C42]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {contactInfo.ctaTitle}
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-background/80 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          {contactInfo.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
              </DialogHeader>
              <Card className="border-0 shadow-none">
                <CardContent className="space-y-4 pt-6">
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium group-hover:text-primary">{contactInfo.email}</span>
                  </a>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium group-hover:text-primary">{contactInfo.phone}</span>
                  </a>
                  <a 
                    href={`https://instagram.com/${contactInfo.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium group-hover:text-primary">@{contactInfo.instagram}</span>
                  </a>
                  <a 
                    href={`https://x.com/${contactInfo.twitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-sm font-medium group-hover:text-primary">@{contactInfo.twitter}</span>
                  </a>
                  <a 
                    href={contactInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium group-hover:text-primary">LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90"
            onClick={handleBookMeeting}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Meeting
          </Button>
        </div>
      </div>
      </section>
    </>
  );
};
