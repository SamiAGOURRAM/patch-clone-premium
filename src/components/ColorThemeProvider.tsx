import { useEffect, useMemo } from 'react';
import { useColorSettings, useSeasonalSettings } from '@/hooks/useSanity';

/**
 * Component that applies color settings from Sanity to CSS variables
 * This allows colors to be changed from Sanity CMS without code changes
 * Also applies festive accent colors when seasonal settings are enabled
 */
export const ColorThemeProvider = () => {
  const { data: colorSettings } = useColorSettings();
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

  const festiveModeEnabled = seasonalSettings?.christmasAccentEnabled && isWithinSeason;

  useEffect(() => {
    const root = document.documentElement;

    if (!colorSettings) return;

    // Global colors
    if (colorSettings.primary) {
      root.style.setProperty('--primary', colorSettings.primary);
    }
    if (colorSettings.primaryForeground) {
      root.style.setProperty('--primary-foreground', colorSettings.primaryForeground);
    }
    if (colorSettings.secondary) {
      root.style.setProperty('--secondary', colorSettings.secondary);
    }
    if (colorSettings.secondaryForeground) {
      root.style.setProperty('--secondary-foreground', colorSettings.secondaryForeground);
    }
    if (colorSettings.tertiary) {
      root.style.setProperty('--tertiary', colorSettings.tertiary);
    }
    if (colorSettings.tertiaryForeground) {
      root.style.setProperty('--tertiary-foreground', colorSettings.tertiaryForeground);
    }
    if (colorSettings.success) {
      root.style.setProperty('--success', colorSettings.success);
    }
    if (colorSettings.successForeground) {
      root.style.setProperty('--success-foreground', colorSettings.successForeground);
    }
    if (colorSettings.accent) {
      root.style.setProperty('--accent', colorSettings.accent);
    }
    if (colorSettings.accentForeground) {
      root.style.setProperty('--accent-foreground', colorSettings.accentForeground);
    }
    if (colorSettings.background) {
      root.style.setProperty('--background', colorSettings.background);
    }
    if (colorSettings.foreground) {
      root.style.setProperty('--foreground', colorSettings.foreground);
    }

    // Button colors
    if (colorSettings.buttonPrimary) {
      root.style.setProperty('--button-primary', colorSettings.buttonPrimary);
    }
    if (colorSettings.buttonPrimaryText) {
      root.style.setProperty('--button-primary-text', colorSettings.buttonPrimaryText);
    }
    if (colorSettings.buttonPrimaryHover) {
      root.style.setProperty('--button-primary-hover', colorSettings.buttonPrimaryHover);
    }
    if (colorSettings.buttonSecondary) {
      root.style.setProperty('--button-secondary', colorSettings.buttonSecondary);
    }
    if (colorSettings.buttonSecondaryText) {
      root.style.setProperty('--button-secondary-text', colorSettings.buttonSecondaryText);
    }
    if (colorSettings.buttonCTA) {
      root.style.setProperty('--button-cta', colorSettings.buttonCTA);
    }
    if (colorSettings.buttonCTAText) {
      root.style.setProperty('--button-cta-text', colorSettings.buttonCTAText);
    }

    // Navigation colors
    if (colorSettings.navBackground) {
      root.style.setProperty('--nav-background', colorSettings.navBackground);
    }
    if (colorSettings.navText) {
      root.style.setProperty('--nav-text', colorSettings.navText);
    }
    if (colorSettings.navTextHover) {
      root.style.setProperty('--nav-text-hover', colorSettings.navTextHover);
    }
    if (colorSettings.navButton) {
      root.style.setProperty('--nav-button', colorSettings.navButton);
    }
    if (colorSettings.navButtonText) {
      root.style.setProperty('--nav-button-text', colorSettings.navButtonText);
    }

    // Text colors
    if (colorSettings.textHeading) {
      root.style.setProperty('--text-heading', colorSettings.textHeading);
    }
    if (colorSettings.textBody) {
      root.style.setProperty('--text-body', colorSettings.textBody);
    }
    if (colorSettings.textMuted) {
      root.style.setProperty('--text-muted', colorSettings.textMuted);
    }

    // Link colors
    if (colorSettings.linkColor) {
      root.style.setProperty('--link-color', colorSettings.linkColor);
    }
    if (colorSettings.linkHover) {
      root.style.setProperty('--link-hover', colorSettings.linkHover);
    }

    // Apply festive accent colors when enabled
    if (festiveModeEnabled) {
      // Subtle festive accent colors (red/gold/green palette)
      root.style.setProperty('--festive-accent', '0 84% 60%'); // Warm red
      root.style.setProperty('--festive-accent-light', '0 84% 70%'); // Lighter red
      root.style.setProperty('--festive-gold', '45 100% 55%'); // Rich gold
      root.style.setProperty('--festive-gold-light', '45 100% 65%'); // Lighter gold
      root.style.setProperty('--festive-green', '142 52% 25%'); // Forest green for hover backgrounds
      root.style.setProperty('--festive-green-light', '142 52% 35%'); // Lighter green
      
      // Don't override button/nav colors - keep original styling
      // Only add festive variables for subtle accents via CSS
      
      // Add festive class to body for CSS targeting
      document.body.classList.add('festive-mode');
    } else {
      // Remove festive class when disabled
      document.body.classList.remove('festive-mode');
      // Clear festive variables
      root.style.removeProperty('--festive-accent');
      root.style.removeProperty('--festive-accent-light');
      root.style.removeProperty('--festive-gold');
      root.style.removeProperty('--festive-gold-light');
      root.style.removeProperty('--festive-green');
      root.style.removeProperty('--festive-green-light');
      
      // Colors remain as set by Sanity - no need to restore
    }
  }, [colorSettings, festiveModeEnabled]);

  return null; // This component doesn't render anything
};

