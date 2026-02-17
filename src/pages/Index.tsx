import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Phone, Clock, MapPin, Star, ArrowRight, Shield, Users, Sparkles, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: Users, title: "Experienced Team", desc: "Certified physiotherapists with 7+ years of clinical experience." },
  { icon: Sparkles, title: "Modern Equipment", desc: "State-of-the-art facilities and evidence-based treatment methods." },
  { icon: HeartHandshake, title: "Personalized Care", desc: "Every treatment plan is tailored to your unique needs and goals." },
  { icon: Shield, title: "Proven Results", desc: "Thousands of patients successfully treated and returned to active life." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Reactive Physio Clinic | Expert Physiotherapy & Rehabilitation";
  }, []);

  return (
    <>

        {/* Hero */}
<section className="relative bg-secondary section-padding">
  <div className="container-narrow">
    <div className="grid md:grid-cols-2 items-center gap-12">

      {/* Left Content */}
      <div className="text-center md:text-left fade-up">
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
          Welcome to Reactive Physio
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Expert Physiotherapy for a <span className="text-primary">Pain-Free Life</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
          Professional rehabilitation, injury recovery, and pain relief treatments. Our experienced team helps you move better, feel better, and live better.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-sm md:max-w-md rounded-2xl shadow-xl object-cover">
        <img
          src="/hero/shkurta-fizio.jpg"
          alt="Physiotherapy treatment at Reactive Physio"
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
      
      {/* Intro */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="max-w-2xl mx-auto fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Your Recovery Starts Here</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Reactive Physio Clinic, we combine clinical expertise with compassionate care to help you overcome pain, recover from injury, and achieve your health goals. Every patient receives a personalized treatment plan designed for lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Comprehensive physiotherapy treatments tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.slug}`} key={service.slug}>
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm fade-up-delay-${Math.min(i, 3)}`}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">We're committed to providing the highest standard of physiotherapy care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="text-center fade-up">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
               What Our Patients Say
            </h2>

      {/* Google Rating Badge */}
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-border">
          <span className="text-primary font-semibold text-lg">5.0</span>
          <div className="flex text-yellow-500">
            <span>★★★★★</span>
          </div>
            <span className="text-muted-foreground text-sm">
               Based on 8 Google Reviews
            </span>
        </div>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <Card key={i} className="border-0 shadow-sm fade-up">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Reactive+Physio+Clinic+-+Fizioterapi/@42.6564143,21.1726804,17z/data=!4m8!3m7!1s0x13549f0e73004163:0xfba600b393b33435!8m2!3d42.6564104!4d21.1752553!9m1!1b1!16s%2Fg%2F11zjlx1w0t?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View All Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Recovery?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Book your appointment today and take the first step toward a pain-free, active life.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-base">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="font-serif font-semibold text-foreground">Call Us</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+383 45 274 352</a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-serif font-semibold text-foreground">Opening Hours</h3>
              <p className="text-muted-foreground text-sm">Monday–Friday: 10AM–6PM</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="font-serif font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground text-sm">Norbert Jokl, 10000 Prishtina, Kosovo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
