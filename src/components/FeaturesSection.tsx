import { Link } from "react-router-dom";
import { useFeaturedBlogPosts, useBlogPosts, useFeaturesSectionSettings } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { useSectionStyles } from "./SectionWrapper";

// Valeurs par défaut pour les paramètres de section
const defaultSectionSettings = {
  sectionTitle: "Le Blog Aurora",
  viewMoreText: "Voir plus d'articles",
  viewMoreLink: "/blog",
  ctaButtonText: "Découvrir nos articles",
  ctaButtonLink: "/blog",
};

// Valeurs par défaut (fallback)
const defaultFeatures = [
  {
    _id: "1",
    slug: "transformation-durable",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Transformation Durable",
    subtitle: "Comment Aurora accompagne le changement",
    category: "INSIGHTS",
    description: "Découvrez comment nous aidons les entreprises à créer un impact positif et durable",
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    slug: "innovation-responsable",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Innovation Responsable",
    subtitle: "Les nouvelles pratiques durables",
    category: "MÉTHODES",
    description: "Les tendances et pratiques qui façonnent l'avenir des entreprises responsables",
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    slug: "engagement-client",
    image: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Engagement Client",
    subtitle: "Notre philosophie d'accompagnement",
    category: "ENTREPRISE",
    description: "L'approche Aurora pour un accompagnement sur mesure et de confiance",
    publishedAt: new Date().toISOString(),
  },
];

export const FeaturesSection = () => {
  // First try to get featured posts, fallback to regular blog posts
  const { data: featuredPosts } = useFeaturedBlogPosts();
  const { data: regularPosts } = useBlogPosts();
  const { data: sectionSettingsData } = useFeaturesSectionSettings();
  const { sectionStyle } = useSectionStyles('features');

  // Paramètres de section (Sanity ou valeurs par défaut)
  const sectionSettings = {
    sectionTitle: sectionSettingsData?.sectionTitle || defaultSectionSettings.sectionTitle,
    viewMoreText: sectionSettingsData?.viewMoreText || defaultSectionSettings.viewMoreText,
    viewMoreLink: sectionSettingsData?.viewMoreLink || defaultSectionSettings.viewMoreLink,
    ctaButtonText: sectionSettingsData?.ctaButtonText || defaultSectionSettings.ctaButtonText,
    ctaButtonLink: sectionSettingsData?.ctaButtonLink || defaultSectionSettings.ctaButtonLink,
  };

  // Use featured posts first, then regular posts, then defaults
  const sanityPosts = (featuredPosts && featuredPosts.length > 0) 
    ? featuredPosts 
    : (regularPosts && regularPosts.length > 0) 
      ? regularPosts.slice(0, 3) 
      : null;

  // Utiliser les données Sanity ou les valeurs par défaut
  const features = sanityPosts 
    ? sanityPosts.map(p => ({
        _id: p._id,
        slug: p.slug?.current,
        image: p.image ? urlFor(p.image).width(1200).url() : defaultFeatures[0].image,
        title: p.title,
        subtitle: p.subtitle || "",
        category: p.category,
        description: p.description,
        publishedAt: p.publishedAt,
      }))
    : defaultFeatures;

  return (
    <section 
      className="py-24 px-4"
      style={sectionStyle}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground">
            {sectionSettings.sectionTitle}
          </h2>
          <Link 
            to={sectionSettings.viewMoreLink || "/blog"}
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors text-sm font-medium"
          >
            {sectionSettings.viewMoreText}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const articleLink = feature.slug ? `/blog/${feature.slug}` : '/blog';
            
            return (
              <Link
                key={feature._id}
                to={articleLink}
                className="group cursor-pointer animate-scale-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article>
                  {/* Image Container with Rounded Border Animation */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-[32px] group-hover:rounded-[48px] transition-all duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Text Overlay on Image */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-white/90 text-base">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {feature.category}
                    </span>
                  </div>

                  {/* Description */}
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.description}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground">
                    Publié le {new Date(feature.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>


      </div>
    </section>
  );
};
