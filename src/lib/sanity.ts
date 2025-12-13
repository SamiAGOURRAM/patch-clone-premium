import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration du client Sanity
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'g5k024mq',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // `false` si vous voulez des données fraîches
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
  subtitle: string;
  category: string;
  description: string;
  image?: SanityImageSource;
  publishedAt: string;
  order: number;
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
  instagram: string;
  twitter: string;
  linkedin: string;
  calComLink: string;
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

// Queries GROQ pour récupérer le contenu
export const queries = {
  hero: `*[_type == "heroSection"][0]`,
  stats: `*[_type == "stat"] | order(order asc)`,
  testimonials: `*[_type == "testimonial"] | order(order asc)`,
  blogPosts: `*[_type == "blogPost"] | order(order asc)`,
  methods: `*[_type == "method"] | order(order asc)`,
  navigation: `*[_type == "navigation"][0]`,
  footer: `*[_type == "footer"][0]`,
  contactInfo: `*[_type == "contactInfo"][0]`,
  partnerLogos: `*[_type == "partnerLogos"][0]`,
  colorSettings: `*[_type == "colorSettings"][0]`,
  announcementBanner: `*[_type == "announcementBanner"][0]`,
  sectionColors: `*[_type == "sectionColors"]`,
  sectionSettings: `*[_type == "sectionSettings"][0]`,
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
