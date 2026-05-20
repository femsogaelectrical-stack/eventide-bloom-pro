import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Phone, Check } from "lucide-react";
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
      { name: "description", content: "Lagos' premier event planners for weddings, corporate galas, and live concerts." },
    ],
  }),
  component: Index,
});

function Index() {
  // We define the data array so we can duplicate it for the infinite loop
  const services = [
    { img: weddingImg, num: "01", title: "Weddings", tag: "Traditional · White", to: "/services" },
    { img: corporateImg, num: "02", title: "Corporate & Conferences", tag: "Galas · Summits", to: "/services" },
    { img: launchImg, num: "03", title: "Birthdays & Themes", tag: "Kids · Milestones", to: "/services" },
    { img: socialGalasImg, num: "04", title: "Social Galas", tag: "Anniversaries · Jubilees", to: "/galas" },
    { img: liveShowsImg, num: "05", title: "Concerts & Festivals", tag: "Live Shows · Activations", to: "/concerts" },
  ];

  return (
    <>
      {/* HERO SECTION (Kept same as before) */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img src={heroImg} alt="Hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-24 pt-40">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Lagos’ Premier Event Planners</p>
            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-8xl text-foreground">Unforgettable events, <em className="text-gold">flawlessly</em> delivered.</h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Get a Free Quote <ArrowUpRight size={14} /></Link>
              <a href="tel:+2348081433976" className="btn-ghost-gold"><Phone size={14} /> 0808 143 3976</a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTO-MOVING SIGNATURE EVENTS SECTION */}
      <section className="py-24 border-t border-border bg-ink/20 overflow-hidden">
        <div className="px-6 lg:px-10 mb-12 max-w-7xl mx-auto flex justify-between items-end">
          <div>
            <p className="eyebrow">— What We Plan</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Signature <em className="text-gold">Disciplines</em></h2>
          </div>
          <Link to="/services" className="text-xs uppercase tracking-widest text-gold hover:underline">View All</Link>
        </div>

        {/* THE MOVING TRACK */}
        <div className="relative flex overflow-hidden group">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-350px * 5 - 1.5rem * 5)); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .group:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}</style>

          {/* We render the list twice to create the infinite loop illusion */}
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...services, ...services].map((s, idx) => (
              <div key={idx} className="w-[300px] md:w-[400px] shrink-0">
                <Link to={s.to} className="block group/card">
                  <article className="relative overflow-hidden bg-ink border border-border aspect-[4/5]">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
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
      </section>

      {/* WHY US SECTION (Kept same as before) */}
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
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-gold">{n}</p>
      <p className="mt-2 text-[0.7rem] uppercase tracking-widest text-muted-foreground">{l}</p>
    </div>
  );
}