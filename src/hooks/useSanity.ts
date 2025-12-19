import { useQuery } from '@tanstack/react-query';
import {
  getHeroContent,
  getStats,
  getTestimonials,
  getBlogPosts,
  getFeaturedBlogPosts,
  getAllBlogPosts,
  getBlogPostBySlug,
  getMethods,
  getNavigation,
  getFooter,
  getContactInfo,
  getPartnerLogos,
  getColorSettings,
  getAnnouncementBanner,
  getSectionColors,
  getSectionSettings,
  getTestimonialsSectionSettings,
  getFeaturesSectionSettings,
  getGuideSectionSettings,
  getStatsSectionSettings,
  getPageUnivers,
  getPageMethode,
  getPageAme,
  getPageReseau,
  getSiteSettings,
  getSeasonalSettings,
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
  type SanityTestimonialsSectionSettings,
  type SanityFeaturesSectionSettings,
  type SanityGuideSectionSettings,
  type SanityStatsSectionSettings,
  type SanityPageUnivers,
  type SanityPageMethode,
  type SanityPageAme,
  type SanityPageReseau,
  type SanitySiteSettings,
  type SanitySeasonalSettings,
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

// Hook pour récupérer les articles mis en avant (homepage)
export function useFeaturedBlogPosts() {
  return useQuery<SanityBlogPost[]>({
    queryKey: ['featuredBlogPosts'],
    queryFn: getFeaturedBlogPosts,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer tous les articles (page blog)
export function useAllBlogPosts() {
  return useQuery<SanityBlogPost[]>({
    queryKey: ['allBlogPosts'],
    queryFn: getAllBlogPosts,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer un article par son slug
export function useBlogPost(slug: string) {
  return useQuery<SanityBlogPost | null>({
    queryKey: ['blogPost', slug],
    queryFn: () => getBlogPostBySlug(slug),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
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
  const sectionColor = sectionColors?.find(s => s.sectionName === sectionName);
  return sectionColor;
}

// Hook pour récupérer les paramètres d'affichage des sections
export function useSectionSettings() {
  return useQuery<SanitySectionSettings | null>({
    queryKey: ['sectionSettings'],
    queryFn: getSectionSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres de la section Témoignages
export function useTestimonialsSectionSettings() {
  return useQuery<SanityTestimonialsSectionSettings | null>({
    queryKey: ['testimonialsSectionSettings'],
    queryFn: getTestimonialsSectionSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres de la section Blog/Features
export function useFeaturesSectionSettings() {
  return useQuery<SanityFeaturesSectionSettings | null>({
    queryKey: ['featuresSectionSettings'],
    queryFn: getFeaturesSectionSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres de la section Méthodes
export function useGuideSectionSettings() {
  return useQuery<SanityGuideSectionSettings | null>({
    queryKey: ['guideSectionSettings'],
    queryFn: getGuideSectionSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres de la section Stats
export function useStatsSectionSettings() {
  return useQuery<SanityStatsSectionSettings | null>({
    queryKey: ['statsSectionSettings'],
    queryFn: getStatsSectionSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// === HOOKS POUR LES PAGES ===

// Hook pour récupérer la page Univers
export function usePageUnivers() {
  return useQuery<SanityPageUnivers | null>({
    queryKey: ['pageUnivers'],
    queryFn: getPageUnivers,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer la page Méthode
export function usePageMethode() {
  return useQuery<SanityPageMethode | null>({
    queryKey: ['pageMethode'],
    queryFn: getPageMethode,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer la page Âme
export function usePageAme() {
  return useQuery<SanityPageAme | null>({
    queryKey: ['pageAme'],
    queryFn: getPageAme,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer la page Réseau
export function usePageReseau() {
  return useQuery<SanityPageReseau | null>({
    queryKey: ['pageReseau'],
    queryFn: getPageReseau,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres du site (logos)
export function useSiteSettings() {
  return useQuery<SanitySiteSettings | null>({
    queryKey: ['siteSettings'],
    queryFn: getSiteSettings,
    staleTime: 1000 * 60 * 5,
  });
}

// Hook pour récupérer les paramètres saisonniers (Noël, neige, etc.)
export function useSeasonalSettings() {
  return useQuery<SanitySeasonalSettings | null>({
    queryKey: ['seasonalSettings'],
    queryFn: getSeasonalSettings,
    staleTime: 1000 * 60 * 5,
  });
}
