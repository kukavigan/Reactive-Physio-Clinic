import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Reactive Physio Clinic";
  }, []);

  return (
    <>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <div className="max-w-3xl mx-auto fade-up">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Our Services</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Comprehensive <span className="text-primary">Physiotherapy</span> Care
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From pain relief to peak performance — our range of specialized treatments is designed to help you achieve your health goals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-serif font-bold text-xl text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{service.shortDescription}</p>
                    <Button asChild variant="outline" className="rounded-full">
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us for a free consultation and we'll recommend the best treatment plan for you.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-base">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
