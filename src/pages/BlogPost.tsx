import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useBlogPost, useAllBlogPosts } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simple Portable Text renderer
const PortableText = ({ content }: { content: any[] }) => {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((block, index) => {
        if (block._type === 'block') {
          const style = block.style || 'normal';
          
          // Render text with marks (bold, italic, links, etc.)
          const renderChildren = () => {
            return block.children?.map((child: any, childIndex: number) => {
              let text = child.text;
              
              if (child.marks?.includes('strong')) {
                text = <strong key={childIndex}>{text}</strong>;
              }
              if (child.marks?.includes('em')) {
                text = <em key={childIndex}>{text}</em>;
              }
              if (child.marks?.includes('underline')) {
                text = <u key={childIndex}>{text}</u>;
              }
              if (child.marks?.includes('code')) {
                text = <code key={childIndex} className="bg-muted px-1.5 py-0.5 rounded text-sm">{text}</code>;
              }
              
              // Handle link annotations
              const linkMark = block.markDefs?.find((def: any) => 
                child.marks?.includes(def._key) && def._type === 'link'
              );
              if (linkMark) {
                text = (
                  <a 
                    key={childIndex}
                    href={linkMark.href} 
                    target={linkMark.blank ? '_blank' : '_self'}
                    rel={linkMark.blank ? 'noopener noreferrer' : undefined}
                    className="text-primary hover:underline"
                  >
                    {text}
                  </a>
                );
              }
              
              return <span key={childIndex}>{text}</span>;
            });
          };

          switch (style) {
            case 'h2':
              return <h2 key={index} className="text-3xl font-bold mt-10 mb-4 text-foreground">{renderChildren()}</h2>;
            case 'h3':
              return <h3 key={index} className="text-2xl font-bold mt-8 mb-3 text-foreground">{renderChildren()}</h3>;
            case 'h4':
              return <h4 key={index} className="text-xl font-bold mt-6 mb-2 text-foreground">{renderChildren()}</h4>;
            case 'blockquote':
              return (
                <blockquote key={index} className="border-l-4 border-primary pl-6 my-6 italic text-muted-foreground">
                  {renderChildren()}
                </blockquote>
              );
            default:
              return <p key={index} className="mb-4 text-foreground/90 leading-relaxed">{renderChildren()}</p>;
          }
        }

        if (block._type === 'image') {
          return (
            <figure key={index} className="my-8">
              <img
                src={urlFor(block).width(1200).url()}
                alt={block.alt || ''}
                className="w-full rounded-xl"
              />
              {block.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: allPosts } = useAllBlogPosts();

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts?.filter(p => 
    p.slug?.current !== slug && 
    p.category === post?.category
  ).slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-8 pb-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-32 mb-8" />
              <div className="h-12 bg-muted rounded w-3/4 mb-4" />
              <div className="h-6 bg-muted rounded w-1/2 mb-8" />
              <div className="aspect-[16/9] bg-muted rounded-2xl mb-8" />
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-8 pb-24">
          <div className="max-w-4xl mx-auto px-4 text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-8">
              Cet article n'existe pas ou a été supprimé.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8 pb-24">
        <article className="max-w-4xl mx-auto px-4">
          {/* Back button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-xl text-muted-foreground mb-6">
              {post.subtitle}
            </p>
          )}

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
            {post.author?.name && (
              <div className="flex items-center gap-2">
                {post.author.image ? (
                  <img 
                    src={urlFor(post.author.image).width(40).height(40).url()} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span>
                  {post.author.name}
                  {post.author.role && <span className="text-muted-foreground/60"> · {post.author.role}</span>}
                </span>
              </div>
            )}
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
                <span>{post.readingTime} min de lecture</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-10 -mx-4 md:mx-0">
              <img
                src={urlFor(post.image).width(1200).url()}
                alt={post.title}
                className="w-full rounded-none md:rounded-2xl object-cover aspect-[16/9]"
              />
            </div>
          )}

          {/* Description / Intro */}
          <p className="text-xl text-foreground/90 leading-relaxed mb-8 font-medium">
            {post.description}
          </p>

          {/* Content */}
          {post.content && <PortableText content={post.content} />}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Box */}
          {post.author?.name && (
            <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-start gap-4">
                {post.author.image ? (
                  <img 
                    src={urlFor(post.author.image).width(80).height(80).url()} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-lg">{post.author.name}</p>
                  {post.author.role && (
                    <p className="text-muted-foreground">{post.author.role}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  to={`/blog/${relatedPost.slug?.current || relatedPost._id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-xl group-hover:rounded-2xl transition-all duration-300">
                    {relatedPost.image ? (
                      <img
                        src={urlFor(relatedPost.image).width(400).url()}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
