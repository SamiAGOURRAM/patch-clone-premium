import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration du client Sanity
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'g5k024mq',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Désactivé pour avoir des données fraîches immédiatement
});

// Helper pour construire les URLs d'images
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types pour le contenu Sanity
export interface SanityHeroContent {
  _id: string;
  mainTitle: string;
  subTitle: string;
  accentText: string;
  accompanyText: string;
  rotatingValues: string[];
  ctaButtonText: string;
  heroImage?: SanityImageSource;
}

export interface SanityStat {
  _id: string;
  value: string;
  label: string;
  colorFrom: string;
  colorTo: string;
  order: number;
}

export interface SanityTestimonial {
  _id: string;
  company: string;
  logo?: SanityImageSource;
  quote: string;
  personName: string;
  personTitle: string;
  personImage?: SanityImageSource;
  order: number;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug?: { current: string };
  subtitle?: string;
  category: string;
  description: string;
  image?: SanityImageSource;
  content?: any[]; // Portable Text blocks
  author?: {
    name?: string;
    role?: string;
    image?: SanityImageSource;
  };
  tags?: string[];
  publishedAt: string;
  readingTime?: number;
  featured?: boolean;
  published?: boolean;
  order?: number;
}

export interface SanityMethod {
  _id: string;
  title: string;
  description: string;
  image?: SanityImageSource;
  color: string;
  bgColor: string;
  order: number;
}

export interface SanityNavigation {
  _id: string;
  logoText: string;
  menuItems: {
    label: string;
    href?: string;
    subItems?: { label: string; href: string }[];
  }[];
  ctaButtonText: string;
}

export interface SanityFooter {
  _id: string;
  logoText: string;
  description: string;
  linkCategories: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  copyright: string;
  socialLinks: { platform: string; url: string }[];
}

export interface SanityContactInfo {
  _id: string;
  email: string;
  phone: string;
  address?: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  calComLink: string;
  calendlyUrl?: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

export interface SanityPartnerLogos {
  _id: string;
  logos: string[];
}

export interface SanityColorSettings {
  _id: string;
  // Global colors
  primary?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  tertiary?: string;
  tertiaryForeground?: string;
  success?: string;
  successForeground?: string;
  accent?: string;
  accentForeground?: string;
  background?: string;
  foreground?: string;
  // Button colors
  buttonPrimary?: string;
  buttonPrimaryText?: string;
  buttonPrimaryHover?: string;
  buttonSecondary?: string;
  buttonSecondaryText?: string;
  buttonCTA?: string;
  buttonCTAText?: string;
  // Navigation colors
  navBackground?: string;
  navText?: string;
  navTextHover?: string;
  navButton?: string;
  navButtonText?: string;
  // Text colors
  textHeading?: string;
  textBody?: string;
  textMuted?: string;
  // Link colors
  linkColor?: string;
  linkHover?: string;
}

// Interfaces pour les paramètres de sections
export interface SanityTestimonialsSectionSettings {
  _id: string;
  badgeText?: string;
  sectionTitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface SanityFeaturesSectionSettings {
  _id: string;
  sectionTitle: string;
  viewMoreText?: string;
  viewMoreLink?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

export interface SanityGuideSectionSettings {
  _id: string;
  sectionTitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface SanityStatsSectionSettings {
  _id: string;
  showHeader?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

// Interfaces pour les pages
export interface SanityPageUnivers {
  _id: string;
  heroTitle: string;
  heroSubtitle: string;
  universes: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    colorFrom: string;
    colorTo: string;
    features: string[];
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
}

export interface SanityPageMethode {
  _id: string;
  heroTitle: string;
  heroSubtitle: string;
  methodSteps: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    details: string[];
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
}

export interface SanityPageAme {
  _id: string;
  heroTitle: string;
  heroSubtitle: string;
  manifeste: {
    title: string;
    subtitle: string;
    content: string;
    highlights: string[];
  };
  origines: {
    title: string;
    subtitle: string;
    content: string;
    milestones: { year: string; event: string }[];
  };
  valeurs: {
    title: string;
    subtitle: string;
    content: string;
    values: { name: string; description: string }[];
  };
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
}

export interface SanityPageReseau {
  _id: string;
  heroTitle: string;
  heroSubtitle: string;
  networkStats: {
    value: string;
    label: string;
    icon: string;
  }[];
  partnerTypesTitle: string;
  partnerTypesSubtitle: string;
  partnerTypes: {
    title: string;
    description: string;
    count: string;
  }[];
  regionsTitle: string;
  regionsSubtitle: string;
  regions: string[];
  joinCtaTitle: string;
  joinCtaSubtitle: string;
  joinCtaButtonText: string;
  contactButtonText: string;
}

// Interface pour les paramètres du site (logos)
export interface SanitySiteSettings {
  _id: string;
  siteName: string;
  headerLogo?: SanityImageSource;
  footerLogo?: SanityImageSource;
  footerTagline?: string;
  copyright?: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  contactEmail?: string;
  contactPhone?: string;
}

// Interface pour les paramètres saisonniers (Noël, etc.)
export interface SanitySeasonalSettings {
  _id: string;
  snowfallEnabled?: boolean;
  snowflakeCount?: number;
  snowflakeColor?: string;
  snowflakeSpeed?: 'slow' | 'normal' | 'fast';
  christmasBannerEnabled?: boolean;
  christmasBannerText?: string;
  christmasAccentEnabled?: boolean;
  seasonStartDate?: string;
  seasonEndDate?: string;
}

// Queries GROQ pour récupérer le contenu
export const queries = {
  hero: `*[_type == "heroSection"][0]`,
  stats: `*[_type == "stat"] | order(order asc)`,
  testimonials: `*[_type == "testimonial"] | order(order asc)`,
  blogPosts: `*[_type == "blogPost" && published != false] | order(order asc, publishedAt desc)`,
  featuredBlogPosts: `*[_type == "blogPost" && featured == true && published != false] | order(order asc, publishedAt desc)[0...3]`,
  allBlogPosts: `*[_type == "blogPost" && published != false] | order(publishedAt desc)`,
  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0]`,
  methods: `*[_type == "method"] | order(order asc)`,
  navigation: `*[_type == "navigation"][0]`,
  footer: `*[_type == "footer"][0]`,
  contactInfo: `*[_type == "contactInfo"][0]`,
  partnerLogos: `*[_type == "partnerLogos"][0]`,
  colorSettings: `*[_type == "colorSettings"][0]`,
  announcementBanner: `*[_id == "announcementBanner"][0]`,
  sectionColors: `*[_type == "sectionColors"]`,
  sectionSettings: `*[_type == "sectionSettings"][0]`,
  testimonialsSectionSettings: `*[_type == "testimonialsSectionSettings"][0]`,
  featuresSectionSettings: `*[_type == "featuresSectionSettings"][0]`,
  guideSectionSettings: `*[_type == "guideSectionSettings"][0]`,
  statsSectionSettings: `*[_type == "statsSectionSettings"][0]`,
  // Pages
  pageUnivers: `*[_id == "pageUnivers"][0]`,
  pageMethode: `*[_id == "pageMethode"][0]`,
  pageAme: `*[_id == "pageAme"][0]`,
  pageReseau: `*[_id == "pageReseau"][0]`,
  // Site Settings (Logos)
  siteSettings: `*[_id == "siteSettings"][0]`,
  // Seasonal Settings (Christmas, etc.)
  seasonalSettings: `*[_id == "seasonalSettings"][0]`,
};

// Fonctions pour récupérer le contenu
export async function getHeroContent(): Promise<SanityHeroContent | null> {
  return sanityClient.fetch(queries.hero);
}

export async function getStats(): Promise<SanityStat[]> {
  return sanityClient.fetch(queries.stats);
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return sanityClient.fetch(queries.testimonials);
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(queries.blogPosts);
}

export async function getFeaturedBlogPosts(): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(queries.featuredBlogPosts);
}

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(queries.allBlogPosts);
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return sanityClient.fetch(queries.blogPostBySlug, { slug });
}

export async function getMethods(): Promise<SanityMethod[]> {
  return sanityClient.fetch(queries.methods);
}

export async function getNavigation(): Promise<SanityNavigation | null> {
  return sanityClient.fetch(queries.navigation);
}

export async function getFooter(): Promise<SanityFooter | null> {
  return sanityClient.fetch(queries.footer);
}

export async function getContactInfo(): Promise<SanityContactInfo | null> {
  return sanityClient.fetch(queries.contactInfo);
}

export async function getPartnerLogos(): Promise<SanityPartnerLogos | null> {
  return sanityClient.fetch(queries.partnerLogos);
}

export async function getColorSettings(): Promise<SanityColorSettings | null> {
  return sanityClient.fetch(queries.colorSettings);
}

export interface SanityAnnouncementBanner {
  _id: string;
  enabled: boolean;
  badgeText?: string;
  message: string;
  linkText?: string;
  linkUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  badgeBackgroundColor?: string;
  badgeTextColor?: string;
}

export interface SanitySectionColors {
  _id: string;
  sectionName: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  linkColor?: string;
  accentColor?: string;
}

export async function getAnnouncementBanner(): Promise<SanityAnnouncementBanner | null> {
  return sanityClient.fetch(queries.announcementBanner);
}

export async function getSectionColors(): Promise<SanitySectionColors[]> {
  return sanityClient.fetch(queries.sectionColors);
}

export interface SanitySectionSettings {
  _id: string;
  heroEnabled?: boolean;
  statsEnabled?: boolean;
  testimonialsEnabled?: boolean;
  guideEnabled?: boolean;
  videoEnabled?: boolean;
  featuresEnabled?: boolean;
  ctaEnabled?: boolean;
}

export async function getSectionSettings(): Promise<SanitySectionSettings | null> {
  return sanityClient.fetch(queries.sectionSettings);
}

// Fonctions pour récupérer les paramètres de sections
export async function getTestimonialsSectionSettings(): Promise<SanityTestimonialsSectionSettings | null> {
  return sanityClient.fetch(queries.testimonialsSectionSettings);
}

export async function getFeaturesSectionSettings(): Promise<SanityFeaturesSectionSettings | null> {
  return sanityClient.fetch(queries.featuresSectionSettings);
}

export async function getGuideSectionSettings(): Promise<SanityGuideSectionSettings | null> {
  return sanityClient.fetch(queries.guideSectionSettings);
}

export async function getStatsSectionSettings(): Promise<SanityStatsSectionSettings | null> {
  return sanityClient.fetch(queries.statsSectionSettings);
}

// Fonctions pour récupérer les pages
export async function getPageUnivers(): Promise<SanityPageUnivers | null> {
  return sanityClient.fetch(queries.pageUnivers);
}

export async function getPageMethode(): Promise<SanityPageMethode | null> {
  return sanityClient.fetch(queries.pageMethode);
}

export async function getPageAme(): Promise<SanityPageAme | null> {
  return sanityClient.fetch(queries.pageAme);
}

export async function getPageReseau(): Promise<SanityPageReseau | null> {
  return sanityClient.fetch(queries.pageReseau);
}

// Fonction pour récupérer les paramètres du site (logos)
export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return sanityClient.fetch(queries.siteSettings);
}

// Fonction pour récupérer les paramètres saisonniers
export async function getSeasonalSettings(): Promise<SanitySeasonalSettings | null> {
  return sanityClient.fetch(queries.seasonalSettings);
}
