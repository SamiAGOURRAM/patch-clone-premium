export const AuroraFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-background font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">AURORA</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              À l'aube des connexions durables. Conseil, gestion de projets et transmission 
              pour un avenir harmonieux.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#activities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Activités
                </a>
              </li>
              <li>
                <a href="#values" className="text-muted-foreground hover:text-foreground transition-colors">
                  Valeurs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AURORA. Tous droits réservés. Conçu avec passion.
          </p>
        </div>
      </div>
    </footer>
  );
};
