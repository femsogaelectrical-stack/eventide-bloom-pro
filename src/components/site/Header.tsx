import logo from '../../assets/mylogo.png';
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-6">
       {/* <Link to="/" className="flex items-center bg-white px-4 py-2 rounded-md shadow-md group">
  <img src={logo} alt="ActiveXperience Logo" className="h-10 w-auto object-contain" />
</Link> */}


<Link to="/" className="flex items-center group">
  <img src={logo} alt="ActiveXperience Logo" className="h-15 w-auto object-contain" />
</Link>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+2348081433976" className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold flex items-center gap-2">
            <Phone size={12} /> 0808 143 3976
          </a>
          <Link to="/contact" className="btn-gold !py-3 !px-5 !text-[0.65rem]">
            Plan My Event
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.24em] text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+2348081433976" className="text-sm uppercase tracking-[0.24em] text-gold flex items-center gap-2">
              <Phone size={14} /> 0808 143 3976
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2 self-start">
              Plan My Event
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
