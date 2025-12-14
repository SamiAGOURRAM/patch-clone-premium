import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useAllBlogPosts } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { data: posts, isLoading } = useAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Le Blog Aurora
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Découvrez nos dernières réflexions, guides et actualités sur la transformation durable des entreprises.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-muted rounded-2xl mb-4" />
                  <div className="h-4 bg-muted rounded w-24 mb-3" />
                  <div className="h-6 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter((post) => post.slug?.current).map((post) => (
                <Link
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="group cursor-pointer"
                >
                  <article>
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-2xl group-hover:rounded-3xl transition-all duration-500">
                      {post.image ? (
                        <img
                          src={urlFor(post.image).width(800).url()}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                          {post.title}
                        </h3>
                        {post.subtitle && (
                          <p className="text-white/80 text-sm mt-1">{post.subtitle}</p>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      {post.readingTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime} min</span>
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Aucun article pour le moment. Revenez bientôt !
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
