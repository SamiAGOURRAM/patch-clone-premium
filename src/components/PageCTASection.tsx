import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useContactInfo } from "@/hooks/useSanity";
import { useContact } from "./ContactModalProvider";
import Aurora from "./Aurora";

interface PageCTASectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  showMeetingButton?: boolean;
}

export const PageCTASection = ({
  title,
  subtitle,
  buttonText = "Nous contacter",
  showMeetingButton = true
}: PageCTASectionProps) => {
  const { data: sanityContactInfo } = useContactInfo();
  const { openContactModal } = useContact();

  const calComLink = sanityContactInfo?.calComLink || "med-agourram-otzwlb";

  const handleBookMeeting = async () => {
    const cal = await getCalApi();
    cal("ui", {
      styles: { branding: { brandColor: "#000000" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
    cal("modal", { calLink: calComLink });
  };

  return (
    <>
      {/* Separator Line */}
      <div className="w-full border-t border-border"></div>

      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{
          backgroundColor: '#0F1C2E',
          color: '#FAF7F3',
        }}
      >
        {/* Aurora Effect Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Aurora
            colorStops={["#165C42", "#3A8F6E", "#165C42"]}
            blend={0.6}
            amplitude={1.2}
            speed={0.3}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in"
            style={{ color: '#FAF7F3' }}
          >
            {title}
          </h2>
          <p
            className="text-xl md:text-2xl mb-10 animate-scale-in"
            style={{ animationDelay: "0.1s", color: '#FAF7F3', opacity: 0.8 }}
          >
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="group"
              onClick={openContactModal}
              style={{
                backgroundColor: '#FAF7F3',
                color: 'hsl(214 59% 20%)',
              }}
            >
              {buttonText}
            </Button>
            {showMeetingButton && (
              <Button
                size="lg"
                className="group"
                onClick={handleBookMeeting}
                style={{
                  backgroundColor: '#FAF7F3',
                  color: 'hsl(214 59% 20%)',
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Planifier un rendez-vous
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
