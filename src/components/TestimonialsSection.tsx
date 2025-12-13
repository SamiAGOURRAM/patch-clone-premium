import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useTestimonials, usePartnerLogos } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { useSectionStyles } from "./SectionWrapper";

// Valeurs par défaut (fallback)
const defaultTestimonials = [
  {
    company: "BAIN & COMPANY",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop",
    quote: "It's important to find a partner with deep expertise, like Patch, who you can trust to source and diligence high-integrity projects.",
    personName: "Sam Israelit",
    personTitle: "Partner and Chief Sustainability Officer",
    personImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
  },
  {
    company: "IFS",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
    quote: "With Patch's support we chose a multi-year contract, providing certainty to the carbon project developers and to our business.",
    personName: "Sophie Graham",
    personTitle: "Chief Sustainability Officer",
    personImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
  },
  {
    company: "CHANGE CLIMATE",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
    quote: "Patch has been instrumental in helping us navigate the complex carbon markets and find the right projects for our sustainability goals.",
    personName: "Michael Chen",
    personTitle: "Director of Climate Strategy",
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
  const { sectionStyle, headingStyle } = useSectionStyles('testimonials');

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
      className="py-16 px-4"
      style={sectionStyle}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-foreground"></div>
            <span className="text-sm">Climate's rising stars</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
              Meet the climate leaders who trust Patch to help them navigate carbon markets
            </h2>
            <Button variant="outline" size="lg" className="self-start md:self-end">
              Meet our customers
            </Button>
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
                <div className="h-full flex flex-col">
                  <div className="flex-1 flex flex-col lg:flex-row gap-4">
                    {/* Quote Section */}
                    <div className="flex-1 flex flex-col justify-between bg-muted/30 p-6 rounded-2xl">
                      <div>
                        <div className="mb-4">
                          <span className="text-sm font-semibold tracking-wider">{testimonial.company}</span>
                        </div>
                        <p className="text-lg md:text-xl mb-6 leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.personName}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.personTitle}</p>
                      </div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="lg:w-64 h-56 lg:h-auto">
                      <img 
                        src={testimonial.personImage} 
                        alt={testimonial.personName}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
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
