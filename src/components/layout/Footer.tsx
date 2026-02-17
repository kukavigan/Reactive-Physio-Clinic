import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { assetUrl } from "@/lib/asset";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={assetUrl("/reactive-logo.png")}
                alt="Reactive Physio"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Professional physiotherapy care for rehabilitation, injury recovery, and pain relief. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Health Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/services/back-neck-pain" className="hover:opacity-100 transition-opacity">Back & Neck Pain</Link></li>
              <li><Link to="/services/sports-injury" className="hover:opacity-100 transition-opacity">Sports Injury</Link></li>
              <li><Link to="/services/post-surgery" className="hover:opacity-100 transition-opacity">Post-surgery Recovery</Link></li>
              <li><Link to="/services/posture-correction" className="hover:opacity-100 transition-opacity">Posture Correction</Link></li>
              <li><Link to="/services/manual-therapy" className="hover:opacity-100 transition-opacity">Manual Therapy</Link></li>
              <li><Link to="/services/dry-needling" className="hover:opacity-100 transition-opacity">Dry Needling</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+1234567890" className="hover:opacity-100">+383 45 274 352</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@reactivephysio.com" className="hover:opacity-100">info@reactivephysio.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Norbert Jokl, Prishtina 10000</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span>Mon–Fri: 10AM–6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          <p>© {new Date().getFullYear()} Reactive Physio Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
