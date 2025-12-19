import { X } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { useAnnouncementBanner, useSeasonalSettings } from "@/hooks/useSanity";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { data: banner } = useAnnouncementBanner();
  const { data: seasonalSettings } = useSeasonalSettings();

  // Check if we're within the season dates
  const isWithinSeason = useMemo(() => {
    if (!seasonalSettings) return false;
    
    const now = new Date();
    
    if (seasonalSettings.seasonStartDate) {
      const start = new Date(seasonalSettings.seasonStartDate);
      if (now < start) return false;
    }
    
    if (seasonalSettings.seasonEndDate) {
      const end = new Date(seasonalSettings.seasonEndDate);
      if (now > end) return false;
    }
    
    return true;
  }, [seasonalSettings]);

  // Priority: Seasonal banner if enabled and in season, otherwise regular banner
  const useSeasonalBanner = seasonalSettings?.christmasBannerEnabled && isWithinSeason;
  const showBanner = useSeasonalBanner || (banner?.enabled && !useSeasonalBanner);

  // Don't show if disabled or manually closed
  if (!isVisible || !showBanner) return null;

  // Seasonal banner styling (festive greenish Christmas colors)
  const isSeasonal = useSeasonalBanner && seasonalSettings?.christmasBannerText;
  const backgroundColor = isSeasonal 
    ? '142 52% 20%' // Rich forest green - traditional Christmas color
    : banner?.backgroundColor || 'var(--foreground)';
  const textColor = isSeasonal
    ? '0 0% 98%' // Off-white text for contrast
    : banner?.textColor || 'var(--background)';
  const badgeBg = isSeasonal
    ? '0 84% 60%' // Warm red accent
    : banner?.badgeBackgroundColor || 'var(--background)';
  const badgeText = isSeasonal
    ? '0 0% 100%' // White text on red
    : banner?.badgeTextColor || 'var(--foreground)';

  const message = isSeasonal 
    ? seasonalSettings.christmasBannerText 
    : banner?.message;

  return (
    <div 
      className="py-3 px-4 relative animate-fade-in"
      style={{
        backgroundColor: `hsl(${backgroundColor})`,
        color: `hsl(${textColor})`,
        borderBottom: isSeasonal ? '1px solid hsl(142 52% 25%)' : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {isSeasonal && (
            <span 
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `hsl(${badgeBg})`,
                color: `hsl(${badgeText})`,
              }}
            >
              Saison
            </span>
          )}
          {!isSeasonal && banner?.badgeText && (
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
            {message}
          </p>
          {!isSeasonal && banner?.linkText && banner?.linkUrl && (
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
