import logo from '../../assets/mylogo.png';
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center group">
  <img src={logo} alt="ActiveXperience Logo" className="h-15 w-auto object-contain" />
</Link>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Lagos&rsquo; full-service event planning company. Weddings, corporate galas,
            birthdays, conferences, theme parties and more — designed, decorated and
            delivered without compromise.
          </p>
          <div className="mt-6 flex items-center gap-2 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
            <span className="text-xs uppercase tracking-[0.24em] text-foreground/70 ml-2">
              4.9 ·  276 Google reviews
            </span>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-gold" /> <a href="tel:+2348081433976" className="hover:text-gold">0808 143 3976</a></li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-gold flex-shrink-0" /> <a href="mailto:info.activexperienceevents@gmail.com" className="hover:text-gold break-all">info.activexperienceevents@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold" /> 65 Orile Rd, Orile Agege, Agege 102212, Lagos</li>
            <li className="text-xs text-muted-foreground pt-1">Open 24 hours · 7 days a week</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ActiveXperience Events. All rights reserved.</p>
          <p className="uppercase tracking-[0.24em]">Lagos · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
