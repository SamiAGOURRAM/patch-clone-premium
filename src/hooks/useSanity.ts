import { useQuery } from '@tanstack/react-query';
import {
  getHeroContent,
  getStats,
  getTestimonials,
  getBlogPosts,
  getMethods,
  getNavigation,
  getFooter,
  getContactInfo,
  getPartnerLogos,
  getColorSettings,
  getAnnouncementBanner,
  getSectionColors,
  getSectionSettings,
  type SanityHeroContent,
  type SanityStat,
  type SanityTestimonial,
  type SanityBlogPost,
  type SanityMethod,
  type SanityNavigation,
  type SanityFooter,
  type SanityContactInfo,
  type SanityPartnerLogos,
  type SanityColorSettings,
  type SanityAnnouncementBanner,
  type SanitySectionColors,
  type SanitySectionSettings,
} from '@/lib/sanity';

// Hook pour récupérer le contenu du Hero
export function useHeroContent() {
  return useQuery<SanityHeroContent | null>({
    queryKey: ['heroContent'],
    queryFn: getHeroContent,
    staleTime: 1000 * 60 * 5, // Cache pendant 5 minutes
  });
}

// Hook pour récupérer les statistiques
export function useStats() {
  return useQuery<SanityStat[]>({
    queryKey: ['stats'],
    queryFn: getStats,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les témoignages
export function useTestimonials() {
  return useQuery<SanityTestimonial[]>({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les articles de blog
export function useBlogPosts() {
  return useQuery<SanityBlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: getBlogPosts,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les méthodes Aurora
export function useMethods() {
  return useQuery<SanityMethod[]>({
    queryKey: ['methods'],
    queryFn: getMethods,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer la navigation
export function useNavigation() {
  return useQuery<SanityNavigation | null>({
    queryKey: ['navigation'],
    queryFn: getNavigation,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer le footer
export function useFooter() {
  return useQuery<SanityFooter | null>({
    queryKey: ['footer'],
    queryFn: getFooter,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les informations de contact
export function useContactInfo() {
  return useQuery<SanityContactInfo | null>({
    queryKey: ['contactInfo'],
    queryFn: getContactInfo,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les logos partenaires
export function usePartnerLogos() {
  return useQuery<SanityPartnerLogos | null>({
    queryKey: ['partnerLogos'],
    queryFn: getPartnerLogos,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres de couleurs
export function useColorSettings() {
  return useQuery<SanityColorSettings | null>({
    queryKey: ['colorSettings'],
    queryFn: getColorSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer la bannière d'annonce
export function useAnnouncementBanner() {
  return useQuery<SanityAnnouncementBanner | null>({
    queryKey: ['announcementBanner'],
    queryFn: getAnnouncementBanner,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les couleurs par section
export function useSectionColors() {
  return useQuery<SanitySectionColors[]>({
    queryKey: ['sectionColors'],
    queryFn: getSectionColors,
    staleTime: 1000 * 60 * 5,
  });
}

// Helper hook pour obtenir les couleurs d'une section spécifique
export function useSectionColor(sectionName: string) {
  const { data: sectionColors, isLoading } = useSectionColors();
  return {
    data: sectionColors?.find(s => s.sectionName === sectionName),
    isLoading,
  };
}

// Hook pour récupérer les paramètres d'affichage des sections
export function useSectionSettings() {
  return useQuery<SanitySectionSettings | null>({
    queryKey: ['sectionSettings'],
    queryFn: getSectionSettings,
    staleTime: 1000 * 60 * 5,
  });
}
