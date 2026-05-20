import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Phone, Check } from "lucide-react";
import heroImg from "@/assets/hero-gala.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import launchImg from "@/assets/event-launch.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Premium Page Specific Meta Tags
      { title: "ActiveXperience Events | Premium Event Production & Management" },
      { 
        name: "description", 
        content: "Premium event planning based in Agege, Lagos. Flawless timelines, elite creative design, and execution for high-end luxury social celebrations and corporate executions." 
      },
      // Open Graph / Social Sharing Tags for Homepage
      { property: "og:title", content: "ActiveXperience Events | Luxury Social & Corporate Occasions" },
      { 
        property: "og:description", 
        content: "Considered down to the smallest detail, delivered with absolute precision. Meet the team defining luxury events in Lagos." 
      },
      { property: "og:site_name", content: "ActiveXperience Events" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ActiveXperience Events",
        image: "/mylogo.png",
        telephone: "+234 808 143 3976",
        url: "https://your-live-domain.vercel.app", // Switch to his active domain once fully deployed
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Orile Rd, Orile Agege",
          addressLocality: "Agege",
          postalCode: "102212",
          addressRegion: "Lagos",
          addressCountry: "NG",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "204" },
        openingHours: "Mo-Su 00:00-23:59",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Joyful Nigerian wedding celebration at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-24 pt-40">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3">
              <span className="gold-rule" /> Lagos&rsquo; Premier Event Planners
            </p>
            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-8xl text-foreground">
              Unforgettable events, <em className="text-gold">flawlessly</em> delivered.
            </h1>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-foreground/85 leading-relaxed">
              From weddings and corporate galas to birthdays, conferences and theme
              parties — ActiveXperience Events designs, decorates and runs the day
              so you can simply enjoy it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Get a Free Quote <ArrowUpRight size={14} />
              </Link>
              <a href="tel:+2348081433976" className="btn-ghost-gold">
                <Phone size={14} /> 0808 143 3976
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              <span className="text-xs uppercase tracking-[0.24em] text-foreground/85">4.9 · 204 Google reviews</span>
            </div>
            
          </div>
        </div>

        {/* LOOPING BOTTOM BAR */}
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
            {/* First Set */}
            {["Weddings", "Corporate", "Birthdays", "Conferences", "Theme Parties", "Religious"].map((item, index) => (
              <span key={`g1-${index}`}>{item}</span>
            ))}
            {/* Second Duplicate Set for smooth loop transition */}
            {["Weddings", "Corporate", "Birthdays", "Conferences", "Theme Parties", "Religious"].map((item, index) => (
              <span key={`g2-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">— Why ActiveXperience</p>
            <h2 className="mt-6 font-serif text-4xl lg:text-5xl">
              Lagos events, done <em className="text-gold">right.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              You shouldn&rsquo;t be answering vendor calls on your own wedding day.
              We take the planning, design, décor, catering coordination and on-the-day
              management entirely off your hands — and deliver an event your guests
              will talk about for years.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "End-to-end planning & coordination",
                "In-house décor design & rental",
                "Full event staffing crew",
                "Catering, MC & entertainment booking",
                "Transparent, all-inclusive quotes",
                "Available 24/7 — we never sleep",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-gold mt-1 flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <div className="pt-6 grid grid-cols-3 gap-8 border-t border-border">
              <Stat n="50+" l="Events Delivered" />
              <Stat n="4.9★" l="Google Rating" />
              <Stat n="24/7" l="Always Available" />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE EVENTS */}
      <section className="py-24 px-6 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">— What We Plan</p>
              <h2 className="mt-4 font-serif text-4xl lg:text-5xl max-w-xl">
                Every occasion. One <em className="text-gold">trusted</em> team.
              </h2>
            </div>
            <Link to="/services" className="text-xs uppercase tracking-[0.24em] text-gold hover:underline flex items-center gap-2">
              All Services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DisciplineCard img={weddingImg} num="01" title="Weddings" tag="Traditional · White · Engagements" copy="From intimate ceremonies to grand Nigerian weddings — décor, planning, catering and coordination, all under one roof." />
            <DisciplineCard img={corporateImg} num="02" title="Corporate & Conferences" tag="Galas · Summits · Launches" copy="Boardroom dinners, AGMs, conferences and brand activations produced end-to-end with professional staging and AV." />
            <DisciplineCard img={launchImg} num="03" title="Birthdays & Theme Parties" tag="Kids · Adults · Milestones" copy="Themed setups, balloon décor, kids&rsquo; parties, baby showers and milestone birthdays designed to wow." />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-6 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-1 text-gold mb-8">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight text-foreground">
            &ldquo;ActiveXperience handled our whole wedding — décor, catering coordination,
            even guest logistics. We didn&rsquo;t lift a finger on the day. Absolutely
            worth every naira.&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="gold-rule" />
            <p className="text-sm uppercase tracking-[0.24em] text-foreground/80">Tolu &amp; Emeka A.</p>
            <p className="text-xs text-muted-foreground">Traditional &amp; white wedding · Lagos</p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/2348081433976?text=Hello%20ActiveXperience%20Events,%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gold text-black rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 transition-colors duration-300"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.373 0 12.022 0c3.218.001 6.243 1.253 8.516 3.526 2.273 2.273 3.523 5.299 3.522 8.52-.004 6.655-5.373 12.02-12.022 12.02-2.001-.001-3.97-.496-5.727-1.439L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.909 14.058.885 11.43.884 5.995.884 1.573 5.307 1.57 10.74c-.001 1.675.452 3.306 1.311 4.715L1.925 21.84l6.538-1.714zM17.91 14.64c-.326-.163-1.925-.95-2.221-1.058-.297-.11-.513-.163-.73.163-.216.325-.838 1.058-1.027 1.275-.19.217-.379.244-.705.082-.326-.163-1.375-.507-2.62-1.617-.968-.865-1.622-1.933-1.812-2.259-.19-.325-.02-.501.143-.663.146-.146.326-.38.489-.57.163-.19.217-.325.326-.541.11-.217.054-.407-.027-.57-.082-.163-.73-1.76-.999-2.413-.263-.637-.53-.55-.73-.56h-.623c-.216 0-.57.081-.867.407-.297.325-1.138 1.112-1.138 2.71 0 1.599 1.165 3.142 1.328 3.359.163.217 2.292 3.501 5.553 4.909.775.335 1.38.535 1.852.685.779.248 1.488.213 2.048.129.624-.094 1.925-.786 2.196-1.518.271-.732.271-1.356.19-1.488-.081-.13-.297-.212-.623-.375z" />
        </svg>
      </a>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 lg:px-10 border-t border-border overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="eyebrow">— Ready When You Are</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl">
            Let&rsquo;s plan your next <em className="text-gold">unforgettable</em> event.
          </h2>
          <p className="mt-6 text-foreground/80 max-w-xl mx-auto">
            Tell us what you&rsquo;re celebrating. We&rsquo;ll send a tailored
            proposal and quote within 24 hours — completely free.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Request a Free Quote <ArrowUpRight size={14} /></Link>
            <a href="tel:+2348081433976" className="btn-ghost-gold"><Phone size={14} /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-serif text-3xl lg:text-4xl text-gold">{n}</p>
      <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
    </div>
  );
}

function DisciplineCard({ img, num, title, tag, copy }: { img: string; num: string; title: string; tag: string; copy: string }) {
  return (
    <article className="group relative overflow-hidden bg-ink border border-border">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={img} alt={title} loading="lazy" width={1080} height={1350} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
      </div>
      <div className="absolute top-5 left-5 text-xs uppercase tracking-[0.32em] text-gold">{num}</div>
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">{tag}</p>
        <h3 className="mt-2 font-serif text-3xl">{title}</h3>
        <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{copy}</p>
      </div>
    </article>
  );
}