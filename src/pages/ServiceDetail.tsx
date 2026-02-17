import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
    }
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <>
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-medium mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="max-w-3xl fade-up">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">{service.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.heroDescription}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">What It Treats</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whatItTreats.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <p className="text-muted-foreground leading-relaxed">{service.howItWorks}</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Who It's For</h2>
                <p className="text-muted-foreground leading-relaxed">{service.whoItsFor}</p>
              </div>
            </div>

            <aside>
              <div className="bg-secondary rounded-2xl p-6 sticky top-24">
                <h3 className="font-serif font-bold text-lg text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full mt-6">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
