import { useEffect } from 'react';
import { useColorSettings } from '@/hooks/useSanity';

/**
 * Component that applies color settings from Sanity to CSS variables
 * This allows colors to be changed from Sanity CMS without code changes
 */
export const ColorThemeProvider = () => {
  const { data: colorSettings } = useColorSettings();

  useEffect(() => {
    if (!colorSettings) return;

    const root = document.documentElement;

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
  }, [colorSettings]);

  return null; // This component doesn't render anything
};

