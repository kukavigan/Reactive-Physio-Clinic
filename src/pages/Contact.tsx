import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/services";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact & Book Appointment | Reactive Physio Clinic";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`;
    const url = `https://wa.me/38345274352?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your booking request is being sent via WhatsApp.",
    });
  };

  return (
    <>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <div className="max-w-3xl mx-auto fade-up">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Contact Us</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to start your recovery? Fill out the form below or reach out directly — we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" required type="tel" placeholder="" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Service *</Label>
                    <Select required onValueChange={(v) => setFormData({ ...formData, service: v })}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea id="message" placeholder="Tell us about your condition or any preferences..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" className="rounded-full px-8 w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" /> Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <aside className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl p-6 space-y-6 sticky top-24">
                <h3 className="font-serif font-bold text-lg text-foreground">Get in Touch</h3>
                <div className="space-y-4 text-sm">
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" /> +383 45 274 352
                  </a>
                  <a href="mailto:info@reactivephysio.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" /> info@reactivephysio.com
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" /> Norbert Jokl, Prishtina 10000
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p>Mon–Fri: 10:00 AM – 6:00 PM</p>
                      <p>Saturday: Closed</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.2331558065034!2d21.172680376613958!3d42.65641431632654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f0e73004163%3A0xfba600b393b33435!2sReactive%20Physio%20Clinic%20-%20Fizioterapi!5e0!3m2!1sen!2s!4v1771332971635!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
