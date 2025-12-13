import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAnnouncementBanner } from "@/hooks/useSanity";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { data: banner } = useAnnouncementBanner();

  // Don't show if disabled in Sanity or manually closed
  if (!isVisible || !banner?.enabled) return null;

  const backgroundColor = banner.backgroundColor || 'var(--foreground)';
  const textColor = banner.textColor || 'var(--background)';
  const badgeBg = banner.badgeBackgroundColor || 'var(--background)';
  const badgeText = banner.badgeTextColor || 'var(--foreground)';

  return (
    <div 
      className="py-3 px-4 relative animate-fade-in"
      style={{
        backgroundColor: `hsl(${backgroundColor})`,
        color: `hsl(${textColor})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {banner.badgeText && (
            <span 
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `hsl(${badgeBg})`,
                color: `hsl(${badgeText})`,
              }}
            >
              {banner.badgeText}
            </span>
          )}
          <p className="text-sm md:text-base">
            {banner.message}
          </p>
          {banner.linkText && banner.linkUrl && (
            <Button 
              variant="link" 
              size="sm"
              className="font-semibold ml-auto hidden md:inline-flex"
              style={{
                color: `hsl(${textColor})`,
              }}
              onClick={() => window.open(banner.linkUrl, '_blank')}
            >
              {banner.linkText} →
            </Button>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="rounded-full p-1.5 transition-colors"
          style={{
            color: `hsl(${textColor})`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `hsl(${textColor} / 0.1)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
