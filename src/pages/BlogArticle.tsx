import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { assetUrl } from "@/lib/asset";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle;
    }
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <>
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <Link to="/blog" className="inline-flex items-center gap-1 text-primary text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="max-w-3xl fade-up">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{article.category}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{article.title}</h1>
          </div>
        </div>
      </section>

            <article className="section-padding pt-0">
              <div className="container-narrow">
                <div className="max-w-3xl mx-auto">

                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary shadow-sm mb-8">
                  <img
                    src={assetUrl(article.image)}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            <div className="prose-lg">
            {article.content.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">{section.heading}</h2>
                )}
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-secondary rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">Need Professional Help?</h3>
            <p className="text-muted-foreground mb-5">Our experienced physiotherapists are here to help. Book an appointment today.</p>
            <Button asChild className="rounded-full px-8">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogArticle;
