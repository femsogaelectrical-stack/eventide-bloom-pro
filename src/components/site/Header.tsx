import logo from '../../assets/mylogo.png';
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

// Sub-services nested cleanly under the Services link item
const serviceDropdownLinks = [
  { to: "/services", label: "Overview & General" },
  { to: "/galas", label: "Social Galas & Milestones" },
  { to: "/concerts", label: "Concerts & Live Shows" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-6">
        
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="ActiveXperience Logo" className="h-15 w-auto object-contain" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold transition-colors"
            activeProps={{ className: "text-gold" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          {/* NESTED SERVICES DROPDOWN BLOCK */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              to="/services"
              className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold transition-colors flex items-center gap-1 py-2"
              activeProps={{ className: "text-gold" }}
            >
              Services <ChevronDown size={10} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {/* Floating Dropdown Frame */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-ink border border-border py-3 shadow-xl backdrop-blur-lg flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {serviceDropdownLinks.map((subItem) => (
                  <Link
                    key={subItem.to}
                    to={subItem.to}
                    onClick={() => setDropdownOpen(false)}
                    className="px-5 py-2.5 text-[0.65rem] uppercase tracking-widest text-foreground/75 hover:bg-white/5 hover:text-gold transition-all"
                    activeProps={{ className: "text-gold font-medium" }}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold transition-colors"
            activeProps={{ className: "text-gold" }}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold transition-colors"
            activeProps={{ className: "text-gold" }}
          >
            Contact
          </Link>
        </nav>

        {/* REVENUE ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+2348081433976" className="text-xs uppercase tracking-[0.24em] text-foreground/70 hover:text-gold flex items-center gap-2">
            <Phone size={12} /> 0808 143 3976
          </a>
          <Link to="/contact" className="btn-gold !py-3 !px-5 !text-[0.65rem]">
            Plan My Event
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="md:hidden bg-ink border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.24em] text-foreground/80">
              Home
            </Link>
            
            {/* Mobile Expanded Hierarchy for Services */}
            <div className="flex flex-col gap-3 border-l border-border/40 pl-4 my-1">
              <Link to="/services" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.24em] text-foreground/80 font-semibold text-gold">
                Services Overview
              </Link>
              {serviceDropdownLinks.slice(1).map((subItem) => (
                <Link
                  key={subItem.to}
                  to={subItem.to}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.24em] text-foreground/60 hover:text-gold"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>

            <Link to="/about" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.24em] text-foreground/80">
              About
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.24em] text-foreground/80">
              Contact
            </Link>
            
            <a href="tel:+2348081433976" className="text-sm uppercase tracking-[0.24em] text-gold flex items-center gap-2 pt-2">
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