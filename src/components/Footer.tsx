import { useFooter } from "@/hooks/useSanity";

// Valeurs par défaut (fallback)
const defaultFooterLinks = {
  Product: ["Carbon credits", "Platform", "API", "Pricing"],
  Company: ["About", "Team", "Careers", "Contact"],
  Resources: ["Blog", "Documentation", "Reports", "Help center"],
  Legal: ["Privacy", "Terms", "Security", "Compliance"],
};

const defaultFooterData = {
  logoText: "Aurora",
  description: "Accelerating climate solutions for a sustainable future.",
  copyright: "© 2025 Aurora. All rights reserved.",
  socialLinks: [
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" },
  ],
};

export const Footer = () => {
  const { data: sanityFooter } = useFooter();

  // Utiliser les données Sanity ou les valeurs par défaut
  const footerData = {
    logoText: sanityFooter?.logoText || defaultFooterData.logoText,
    description: sanityFooter?.description || defaultFooterData.description,
    copyright: sanityFooter?.copyright || defaultFooterData.copyright,
    socialLinks: sanityFooter?.socialLinks || defaultFooterData.socialLinks,
  };

  // Transformer les catégories de liens de Sanity ou utiliser les valeurs par défaut
  const footerLinks = sanityFooter?.linkCategories 
    ? Object.fromEntries(
        sanityFooter.linkCategories.map(cat => [
          cat.title, 
          cat.links.map(l => l.label)
        ])
      )
    : defaultFooterLinks;

  const linkUrls = sanityFooter?.linkCategories 
    ? Object.fromEntries(
        sanityFooter.linkCategories.map(cat => [
          cat.title, 
          Object.fromEntries(cat.links.map(l => [l.label, l.href]))
        ])
      )
    : null;

  return (
    <footer className="bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <span className="text-xl font-bold">{footerData.logoText}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {footerData.description}
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a
                      href={linkUrls?.[category]?.[link] || "#"}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {footerData.copyright}
          </p>
          <div className="flex gap-6">
            {footerData.socialLinks.map((social) => (
              <a 
                key={social.platform}
                href={social.url || "#"} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
