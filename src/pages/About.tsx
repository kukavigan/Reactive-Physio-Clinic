import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/data/team";
import { Award, GraduationCap, Heart, Target } from "lucide-react";
import { assetUrl } from "@/lib/asset";


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

  const [openBios, setOpenBios] = useState<Record<number, boolean>>({});

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
                Reactive was founded by Qendresa Ajvazi and Shkurta Ejupi after years of clinical experience in hospital and rehabilitation settings. Through daily work with complex cases and a commitment to continuous professional development, they recognized the need for a modern physiotherapy clinic built on precision, evidence-based practice, and measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Qendresa Ajvazi specializes in orthopedic rehabilitation, focusing on musculoskeletal injuries, post-operative recovery, and performance-based rehabilitation. Her work centers on restoring strength, movement quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shkurta Ejupi specializes in neurological rehabilitation, working with patients affected by neurological conditions and movement impairments, with an emphasis on functional independence and structured recovery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After years of professional growth, they decided to establish their own clinic to fully implement their standards of care and create a focused, patient-centered environment. Since opening in 2025, Reactive has experienced continuous patient trust and growth, reflecting the clinic’s commitment to professionalism, individualized treatment, and long-term outcomes.
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
                    src={assetUrl(member.image)}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary text-xs font-medium mt-1">{member.role}</p>
                  <p className="inline-block bg-primary/10 text-primary text-[11px] px-3 py-1 rounded-full mt-2">
                    {member.specialization}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">{member.experience} experience</p>

                  {/* Bio */}
                    <div className="mt-4 border-t pt-3 text-left">
                      <p className="text-[11px] uppercase tracking-wide text-primary font-semibold mb-1">
                        Bio
                      </p>
                      <p
                        className={`text-sm text-muted-foreground leading-relaxed whitespace-pre-line ${
                          openBios[i] ? "" : "line-clamp-4"
                        }`}
                      >
                        {member.bio}
                      </p>

                      <button
                        type="button"
                        className="mt-2 text-xs font-medium text-primary hover:underline"
                        onClick={() =>
                          setOpenBios((prev) => ({
                            ...prev,
                            [i]: !prev[i],
                          }))
                        }
                      >
                        {openBios[i] ? "Read less" : "Read more"}
                      </button>
                    </div>
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
