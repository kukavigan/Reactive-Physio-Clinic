import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { articles, categories } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/asset";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Health Blog | Reactive Physio Clinic";
  }, []);

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <div className="max-w-3xl mx-auto fade-up">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Health Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Expert <span className="text-primary">Health Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Evidence-based articles from our physiotherapy team to help you understand, prevent, and manage musculoskeletal conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link to={`/blog/${article.slug}`} key={article.slug}>
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/9] bg-secondary rounded-t-lg overflow-hidden">
                    <img
                      src={assetUrl(article.image)}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{article.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                    </div>
                    <h2 className="font-serif font-bold text-lg text-foreground mb-2 line-clamp-2">{article.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">{article.excerpt}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
