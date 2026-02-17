import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/data/team";
import { Award, GraduationCap, Heart, Target } from "lucide-react";

const certifications = [
  "Chartered Society of Physiotherapy (CSP)",
  "Health and Care Professions Council (HCPC)",
  "Sports Medicine Australia (SMA)",
  "International Federation of Orthopaedic Manipulative Physical Therapists (IFOMPT)",
];

const About = () => {
  useEffect(() => {
    document.title = "About Us | Reactive Physio Clinic";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <div className="max-w-3xl mx-auto fade-up">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Dedicated to Your <span className="text-primary">Recovery</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At ReActive Physio Rehab Clinic, we believe everyone deserves access to world-class physiotherapy care. Our mission is to help you move better, feel better, and return to the life you love.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Dr. Qendresa Ajvazi, Reactive Physio Rehab Clinic was born from a simple belief: physiotherapy should be personalized, evidence-based, and focused on long-term outcomes — not quick fixes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since opening our doors, we've helped hundred of patients overcome pain, recover from injuries, and return to active, fulfilling lives. Our approach combines clinical expertise with genuine compassion, creating a healing environment where every patient feels heard and supported.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, our specialist physiotherapists continues to push the boundaries of rehabilitation, integrating the latest research and techniques to deliver the best possible outcomes for our patients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-up-delay-1">
              {[
                { icon: Target, label: "Evidence-Based", value: "Treatment" },
                { icon: Heart, label: "Patient-Centered", value: "Approach" },
                { icon: GraduationCap, label: "Continuing", value: "Education" },
                { icon: Award, label: "Clinical", value: "Excellence" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-secondary rounded-2xl p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-xs">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Expert physiotherapists committed to your recovery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <Card key={i} className="border-0 shadow-sm overflow-hidden fade-up">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-serif font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary text-xs font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{member.specialization}</p>
                  <p className="text-muted-foreground text-xs mt-1">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 fade-up">Professional Affiliations</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto fade-up">
            Our team maintains the highest professional standards through continuous education and accreditation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 fade-up-delay-1">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-secondary rounded-full px-6 py-3 text-sm font-medium text-foreground">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
