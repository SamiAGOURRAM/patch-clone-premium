import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageCTASection } from "@/components/PageCTASection";
import { 
  ArrowLeft, 
  Building2, 
  Briefcase, 
  Users, 
  Image as ImageIcon, 
  Lightbulb, 
  Target, 
  Zap, 
  Star, 
  Palette, 
  Globe, 
  Layers, 
  Monitor, 
  Cpu, 
  Rocket, 
  Heart, 
  Shield, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  PenTool, 
  Layout, 
  Camera, 
  Video, 
  Settings, 
  Code, 
  Smartphone, 
  Users2, 
  Building, 
  Home, 
  Store, 
  Compass, 
  Send, 
  Share2, 
  Eye, 
  Lock, 
  User, 
  UserPlus, 
  FileCheck, 
  Bookmark, 
  Tag, 
  Bell, 
  Megaphone, 
  Sun, 
  Leaf, 
  Coffee, 
  Plane, 
  Car, 
  Gift, 
  Sparkles, 
  Gem, 
  Crown, 
  Trophy, 
  Medal, 
  Brain, 
  GraduationCap, 
  Laptop,
  Network,
  Handshake,
  PaintBucket,
  Presentation,
  FileImage,
} from "lucide-react";
import { usePageUnivers } from "@/hooks/useSanity";

// Icon mapping for Sanity - comprehensive list
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Briefcase,
  Users,
  Image: ImageIcon,
  Lightbulb,
  Target,
  Zap,
  Star,
  Palette,
  Globe,
  Layers,
  Monitor,
  Cpu,
  Rocket,
  Heart,
  Shield,
  Award,
  TrendingUp,
  MessageSquare,
  PenTool,
  Layout,
  Camera,
  Video,
  Settings,
  Code,
  Smartphone,
  Users2,
  Building,
  Home,
  Store,
  Compass,
  Send,
  Share2,
  Eye,
  Lock,
  User,
  UserPlus,
  FileCheck,
  Bookmark,
  Tag,
  Bell,
  Megaphone,
  Sun,
  Leaf,
  Coffee,
  Plane,
  Car,
  Gift,
  Sparkles,
  Gem,
  Crown,
  Trophy,
  Medal,
  Brain,
  GraduationCap,
  Laptop,
  Network,
  Handshake,
  PaintBucket,
  Presentation,
  FileImage,
  ArrowLeft,
};

// Default values (fallback)
const defaultUniverses = [
  {
    title: "Espace",
    subtitle: "Architecture & Aménagement",
    description: "Conception et aménagement d'espaces de travail innovants qui favorisent la collaboration, le bien-être et la productivité de vos équipes.",
    icon: "Building2",
    colorFrom: "primary",
    colorTo: "secondary",
    features: ["Design d'espaces collaboratifs", "Aménagement de bureaux", "Espaces de coworking", "Showrooms et espaces d'exposition"],
  },
  {
    title: "Expérience",
    subtitle: "Transformation Digitale",
    description: "Accompagnement dans votre transformation digitale pour créer des expériences client et collaborateur exceptionnelles.",
    icon: "Briefcase",
    colorFrom: "secondary",
    colorTo: "tertiary",
    features: ["Parcours client digital", "Outils collaboratifs", "Formation digitale", "Innovation technologique"],
  },
  {
    title: "Structure",
    subtitle: "Organisation & Stratégie",
    description: "Optimisation de votre structure organisationnelle pour une performance durable et une agilité accrue.",
    icon: "Users",
    colorFrom: "tertiary",
    colorTo: "success",
    features: ["Réorganisation d'équipes", "Processus et workflows", "Gouvernance d'entreprise", "Gestion du changement"],
  },
  {
    title: "Image",
    subtitle: "Branding & Communication",
    description: "Construction et valorisation de votre image de marque pour une communication impactante et cohérente.",
    icon: "Image",
    colorFrom: "success",
    colorTo: "primary",
    features: ["Identité visuelle", "Stratégie de marque", "Communication corporate", "Présence digitale"],
  },
];

const defaultContent = {
  heroTitle: "Nos Univers",
  heroSubtitle: "Quatre domaines d'expertise complémentaires pour accompagner votre transformation à 360°.",
  ctaTitle: "Prêt à transformer votre entreprise ?",
  ctaSubtitle: "Nos experts vous accompagnent dans tous vos projets de transformation.",
  ctaButtonText: "Nous contacter",
};

export default function Univers() {
  const { data: pageData } = usePageUnivers();

  // Use Sanity data or defaults
  const heroTitle = pageData?.heroTitle || defaultContent.heroTitle;
  const heroSubtitle = pageData?.heroSubtitle || defaultContent.heroSubtitle;
  const universes = pageData?.universes || defaultUniverses;
  const ctaTitle = pageData?.ctaTitle || defaultContent.ctaTitle;
  const ctaSubtitle = pageData?.ctaSubtitle || defaultContent.ctaSubtitle;
  const ctaButtonText = pageData?.ctaButtonText || defaultContent.ctaButtonText;
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-3xl">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Universes Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {universes.map((universe, idx) => {
              const IconComponent = iconMap[universe.icon] || Building2;
              // Use CSS variables for dynamic colors instead of Tailwind classes
              const gradientColors: Record<string, string> = {
                primary: 'hsl(var(--primary))',
                secondary: 'hsl(var(--secondary))',
                tertiary: 'hsl(var(--tertiary))',
                success: 'hsl(var(--success))',
                accent: 'hsl(var(--accent))',
              };
              const colorFrom = gradientColors[universe.colorFrom] || gradientColors.primary;
              const colorTo = gradientColors[universe.colorTo] || gradientColors.secondary;
              
              return (
                <div
                  key={universe.title + idx}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ background: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})` }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {universe.subtitle}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {universe.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {universe.description}
                  </p>
                  <ul className="space-y-2">
                    {universe.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTASection
        title={ctaTitle}
        subtitle={ctaSubtitle}
        buttonText={ctaButtonText}
      />

      <Footer />
    </div>
  );
}
