import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Phone, Check } from "lucide-react";
import { useRef, useState } from "react";
import heroImg from "@/assets/hero-gala.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import launchImg from "@/assets/event-launch.jpg";
import socialGalasImg from "@/assets/Social-Galas.jpg";
import liveShowsImg from "@/assets/Live-Shows.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActiveXperience Events | Premium Event Production" },
      { name: "description", content: "Lagos’ premier event planners for weddings, corporate galas, and live concerts." },
    ],
  }),
  component: Index,
});

function Index() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const services = [
    { img: weddingImg, num: "01", title: "Weddings", tag: "Traditional · White", to: "/services" },
    { img: corporateImg, num: "02", title: "Corporate & Conferences", tag: "Galas · Summits", to: "/services" },
    { img: launchImg, num: "03", title: "Birthdays & Themes", tag: "Kids · Milestones", to: "/services" },
    { img: socialGalasImg, num: "04", title: "Social Galas", tag: "Anniversaries · Jubilees", to: "/galas" },
    { img: liveShowsImg, num: "05", title: "Concerts & Festivals", tag: "Live Shows · Activations", to: "/concerts" },
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

      {/* NON-STOP MOVING & DRAGGABLE SIGNATURE EVENTS */}
      <section className="py-24 border-t border-border bg-ink/20 overflow-hidden">
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
              100% { transform: translate3d(calc(-350px * 5 - 1.5rem * 5), 0, 0); }
            }
            .animate-infinite-glide {
              animation: linearLoop 35s linear infinite;
            }
          `}</style>

          <div 
            className="flex gap-6 w-max transition-transform duration-150 ease-out"
            style={{ transform: `translate3d(${dragOffset}px, 0, 0)` }}
          >
            <div className="flex gap-6 animate-infinite-glide">
              {tripleServices.map((s, idx) => (
                <div key={idx} className="w-[280px] sm:w-[350px] md:w-[400px] shrink-0">
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
                      <div className="absolute top-5 left-5 text-xs tracking-[0.3em] text-gold">{s.num}</div>
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                        <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground">{s.tag}</p>
                        <h3 className="mt-2 font-serif text-2xl group-hover/card:text-gold transition-colors">{s.title}</h3>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-32 px-6 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">— Why ActiveXperience</p>
            <h2 className="mt-6 font-serif text-4xl lg:text-5xl">Lagos events, done <em className="text-gold">right.</em></h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-foreground/80">
            <p className="text-lg">We take the planning, design, décor, catering coordination and on-the-day management entirely off your hands.</p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {["End-to-end coordination", "In-house décor design", "Full event staffing", "Catering & MC booking"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm"><Check size={16} className="text-gold mt-1" /> {b}</li>
              ))}
            </ul>
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