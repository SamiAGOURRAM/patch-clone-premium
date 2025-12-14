import { useSiteSettings } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

// Icônes pour les réseaux sociaux
const socialIcons: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
};

export const Footer = () => {
  const { data: siteSettings } = useSiteSettings();

  const siteName = siteSettings?.siteName || "Aurora";
  const tagline = siteSettings?.footerTagline || "À l'aube des connexions durables";
  const copyright = siteSettings?.copyright || `© ${new Date().getFullYear()} ${siteName}. Tous droits réservés.`;
  const socialLinks = siteSettings?.socialLinks || [];

  return (
    <footer className="bg-background py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Single row layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              {siteSettings?.footerLogo ? (
                <img 
                  src={urlFor(siteSettings.footerLogo).height(40).url()} 
                  alt={siteName}
                  className="h-10 w-auto"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  <span className="text-xl font-bold">{siteName}</span>
                </div>
              )}
            </Link>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">{tagline}</span>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.platform?.toLowerCase()] || Linkedin;
                return (
                  <a 
                    key={social.platform}
                    href={social.url || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          )}

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
