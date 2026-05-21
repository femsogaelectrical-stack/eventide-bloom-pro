import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Check } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroImg from "@/assets/hero-gala.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import launchImg from "@/assets/event-launch.jpg";
import socialGalasImg from "@/assets/Social-Galas.jpg";
import liveShowsImg from "@/assets/Live-Shows.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActiveXperience Events | Premium Event Production & Management" },
      { 
        name: "description", 
        content: "Premium event planning based in Agege, Lagos. Flawless timelines, elite creative design, weddings, corporate launches, and concert production." 
      },
      {
        name: "keywords",
        content: "event planners in lagos, activexperience, wedding planner lagos, activexperience events, event production agege, stage lighting rental lagos, corporate event managers nigeria, party decorators lagos, premium wedding coordination"
      },
      {
        name: "google-site-verification",
       content: "HPE4OXQt0PxPM2I3Zc7-Q1hlHryLzqmVq8fr3Mvioz8"
      }
    ],
  }),
  component: Index,
});

function Index() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Testimonial slider state
  const [activeReview, setActiveReview] = useState(0);

  const testimonials = [
    {
      quote: "“ActiveXperience handled our whole wedding — décor, catering coordination, even guest logistics. We didn’t lift a finger on the day. Absolutely worth every naira.”",
      author: "TOLU & EMEKA A.",
      sub: "Traditional & White Wedding · Victoria Island, Lagos"
    },
    {
      quote: "“The staging, line-array audio setup, and moving head fixtures for our corporate launch were flawless. Truly world-class technical production right here in Lagos.”",
      author: "CHIDI O. (MARKETING DIRECTOR)",
      sub: "Tech Summit & Brand Activation · Ikoyi"
    },
    {
      quote: "“They transformed our space into an absolute dream for my mom’s 60th birthday gala. The attention to detail in the VVIP seating and stage lighting was exceptional.”",
      author: "FUNMI O.",
      sub: "Milestone Birthday Gala · Ikeja GRA"
    },
    {
      quote: "“Flawless execution from setup to strike down. Managing a crowd of over 1,500 guests isn’t easy, but their crowd control planning and vendor coordination were spot on.”",
      author: "YEMI A. (EVENT DIRECTRESS)",
      sub: "End-of-Year Concert · Lekki Phase 1"
    }
  ];

  // Auto-advance reviews every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const services = [
    { 
      img: weddingImg, 
      num: "01", 
      title: "Weddings", 
      tag: "TRADITIONAL · WHITE · ENGAGEMENTS", 
      desc: "From intimate ceremonies to grand Nigerian weddings — décor, planning, catering and coordination, all under one roof.",
      to: "/services" 
    },
    { 
      img: corporateImg, 
      num: "02", 
      title: "Corporate & Conferences", 
      tag: "GALAS · SUMMITS · LAUNCHES", 
      desc: "Boardroom dinners, AGMs, conferences and brand activations produced end-to-end with professional staging and AV.",
      to: "/services" 
    },
    { 
      img: launchImg, 
      num: "03", 
      title: "Birthdays & Theme Parties", 
      tag: "KIDS · ADULTS · MILESTONES", 
      desc: "Themed setups, balloon décor, kids' parties, baby showers and milestone birthdays designed to wow.",
      to: "/services" 
    },
    { 
      img: socialGalasImg, 
      num: "04", 
      title: "Social Galas", 
      tag: "ANNIVERSARIES · JUBILEES", 
      desc: "High-end corporate galas, elegant black-tie banquets, milestone milestones, and premium social celebrations.",
      to: "/galas" 
    },
    { 
      img: liveShowsImg, 
      num: "05", 
      title: "Concerts & Festivals", 
      tag: "LIVE SHOWS · ACTIVATIONS", 
      desc: "Complete staging setups, pro audio reinforcement, moving head trusses, and seamless talent production.",
      to: "/concerts" 
    },
  ];

  const tripleServices = [...services, ...services, ...services];

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX - dragOffset);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const currentOffset = clientX - startX;
    setDragOffset(currentOffset);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img src={heroImg} alt="Hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-32 pt-40">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Lagos’ Premier Event Planners</p>
            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-8xl text-foreground">Unforgettable events, <em className="text-gold">flawlessly</em> delivered.</h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Get a Free Quote <ArrowUpRight size={14} /></Link>
              <a href="tel:+2348081433976" className="btn-ghost-gold"><Phone size={14} /> 0808 143 3976</a>
            </div>
          </div>
        </div>

        {/* LOOPING BOTTOM BAR UNDER HERO */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-ink/85 backdrop-blur overflow-hidden py-5">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}</style>
          
          <div className="flex whitespace-nowrap w-max animate-marquee gap-16 md:gap-24 text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground pr-16 md:pr-24">
            {["Weddings", "Corporate", "Birthdays", "Conferences", "Theme Parties", "Religious Events", "Social Galas", "Concerts & Festivals"].map((item, index) => (
              <span key={`g1-${index}`}>{item}</span>
            ))}
            {["Weddings", "Corporate", "Birthdays", "Conferences", "Theme Parties", "Religious Events", "Social Galas", "Concerts & Festivals"].map((item, index) => (
              <span key={`g2-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION WITH INTEGRATED COUNTERS */}
      <section className="pt-32 pb-20 px-6 lg:px-10 bg-black border-b border-border/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium">— WHY ACTIVEXPERIENCE</p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Lagos events, <br />done <em className="text-gold">right.</em>
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-10">
                <p className="text-lg sm:text-xl text-foreground/80 font-light leading-relaxed max-w-2xl">
                  You shouldn’t be answering vendor calls on your own event day. We take the planning, design, décor, catering coordination and on-the-day management entirely off your hands — and deliver an event your guests will talk about for years.
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {[
                    "End-to-end planning & coordination",
                    "In-house décor design & rental",
                    "Full event staffing crew",
                    "Catering, MC & entertainment booking",
                    "Transparent, all-inclusive quotes",
                    "Available 24/7 — we never sleep"
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-foreground/80 font-light">
                      <Check size={16} className="text-gold shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* COUNTERS WITH RESTORED RIGHT ALIGNMENT */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border/40 max-w-2xl">
                <div>
                  <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gold">89+</p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">Events Delivered</p>
                </div>
                <div>
                  <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gold flex items-center gap-1">
                    4.9<span className="text-gold text-2xl sm:text-3xl">★</span>
                  </p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">Google Rating</p>
                </div>
                <div>
                  <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gold">24/7</p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">Always Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS MOVING SLIDER */}
      <section className="py-24 border-b border-border bg-ink/20 overflow-hidden">
        <div className="px-6 lg:px-10 mb-12 max-w-7xl mx-auto flex justify-between items-end">
          <div>
            <p className="eyebrow">— What We Plan</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Signature <em className="text-gold">Disciplines</em></h2>
          </div>
          <Link to="/services" className="text-xs uppercase tracking-widest text-gold hover:underline">View All</Link>
        </div>

        <div 
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <style>{`
            @keyframes linearLoop {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(calc(-420px * 5 - 1.5rem * 5), 0, 0); }
            }
            .animate-infinite-glide {
              animation: linearLoop 40s linear infinite;
            }
          `}</style>

          <div 
            className="flex gap-6 w-max transition-transform duration-150 ease-out"
            style={{ transform: `translate3d(${dragOffset}px, 0, 0)` }}
          >
            <div className="flex gap-6 animate-infinite-glide">
              {tripleServices.map((s, idx) => (
                <div key={idx} className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0">
                  <Link 
                    to={s.to} 
                    className="block group/card"
                    onClick={(e) => {
                      if (Math.abs(dragOffset) > 10 && isDragging) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <article className="relative overflow-hidden bg-ink border border-border aspect-[4/5]">
                      <img 
                        src={s.img} 
                        alt={s.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                        draggable="false"
                      />
                      <div className="absolute top-5 left-5 text-xs font-serif tracking-[0.3em] text-gold/60">{s.num}</div>
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end min-h-[50%]">
                        <p className="text-[0.6rem] uppercase tracking-[0.18em] text-gold/80 font-medium">{s.tag}</p>
                        <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-white group-hover/card:text-gold transition-colors duration-300">{s.title}</h3>
                        <p className="mt-3 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed font-light line-clamp-3">
                          {s.desc}
                        </p>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SLIDER (DYNAMIC TRANSITION MOTION ANIMATION) */}
      <section className="py-28 px-6 lg:px-10 border-b border-border bg-ink/40 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center min-h-[280px] justify-center">
          <div className="flex gap-1 text-gold text-sm mb-8 tracking-widest justify-center">
            {"★★★★★".split("").map((star, idx) => (
              <span key={idx}>{star}</span>
            ))}
          </div>

          <div className="relative w-full overflow-hidden">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ease-in-out transform ${
                  idx === activeReview
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 absolute top-0 left-0 right-0 -translate-x-8 pointer-events-none"
                }`}
              >
                <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white leading-snug font-light italic">
                  {t.quote}
                </blockquote>
                <div className="mt-10 w-12 h-[1px] bg-gold/50 mx-auto" />
                <p className="mt-6 text-[0.7rem] uppercase tracking-[0.25em] text-gold font-medium">{t.author}</p>
                <p className="mt-1 text-xs text-muted-foreground font-light">{t.sub}</p>
              </div>
            ))}
          </div>

          {/* SLIDER DOTS NAVIGATION */}
          <div className="flex gap-2.5 mt-8 justify-center">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReview(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeReview ? "bg-gold w-4" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CONTEXT CALL-TO-ACTION (CTA) SECTION */}
      <section className="relative py-32 px-6 lg:px-10 text-center overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-no-repeat pointer-events-none" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold font-semibold">— READY WHEN YOU ARE</p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Let’s plan your next <br /><em className="text-gold font-serif italic font-normal">unforgettable</em> event.
          </h2>
          <p className="mt-6 text-sm text-muted-foreground/90 max-w-xl mx-auto leading-relaxed font-light">
            Tell us what you’re celebrating. We’ll send a tailored proposal and quote within 24 hours — completely free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold px-8 py-4 text-xs tracking-widest uppercase">
              Request a Free Quote <ArrowUpRight size={14} className="ml-1" />
            </Link>
            <a href="tel:+2348081433976" className="btn-ghost-gold border border-gold/40 px-8 py-4 text-xs tracking-widest uppercase flex items-center gap-2 text-gold">
              <Phone size={13} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/2348081433976?text=Hello%20ActiveXperience%20Events,%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gold text-black rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.373 0 12.022 0c3.218.001 6.243 1.253 8.516 3.526 2.273 2.273 3.523 5.299 3.522 8.52-.004 6.655-5.373 12.02-12.022 12.02-2.001-.001-3.97-.496-5.727-1.439L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.909 14.058.885 11.43.884 5.995.884 1.573 5.307 1.57 10.74c-.001 1.675.452 3.306 1.311 4.715L1.925 21.84l6.538-1.714zM17.91 14.64c-.326-.163-1.925-.95-2.221-1.058-.297-.11-.513-.163-.73.163-.216.325-.838 1.058-1.027 1.275-.19.217-.379.244-.705.082-.326-.163-1.375-.507-2.62-1.617-.968-.865-1.622-1.933-1.812-2.259-.19-.325-.02-.501.143-.663.146-.146.326-.38.489-.57.163-.19.217-.325.326-.541.11-.217.054-.407-.027-.57-.082-.163-.73-1.76-.999-2.413-.263-.637-.53-.55-.73-.56h-.623c-.216 0-.57.081-.867.407-.297.325-1.138 1.112-1.138 2.71 0 1.599 1.165 3.142 1.328 3.359.163.217 2.292 3.501 5.553 4.909.775.335 1.38.535 1.852.685.779.248 1.488.213 2.048.129.624-.094 1.925-.786 2.196-1.518.271-.732.271-1.356.19-1.488-.081-.13-.297-.212-.623-.375z" />
        </svg>
      </a>
    </>
  );
}