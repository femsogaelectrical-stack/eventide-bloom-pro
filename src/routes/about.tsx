import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";
import heroImg from "@/assets/hero-gala.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ActiveXperience Events Lagos" },
      { name: "description", content: "Meet Peter Emmanuel Ajuh, Founder & CEO of ActiveXperience Events — Lagos&rsquo; premium event planning company for luxury social and corporate events." },
      { property: "og:title", content: "About ActiveXperience Events — Peter Emmanuel Ajuh, CEO" },
      { property: "og:description", content: "Premium event planning in Lagos. Meet the visionary behind ActiveXperience Events." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Reliability", c: "We pick up the phone, we keep our word, we show up early. Every single time." },
  { t: "Creativity", c: "From traditional Nigerian weddings to modern corporate galas, our designs are tailored — never templated." },
  { t: "Transparency", c: "Honest quotes, no hidden charges. You always know what you&rsquo;re paying for." },
  { t: "Excellence", c: "A 4.9★ Google rating isn&rsquo;t luck. It&rsquo;s how seriously we take every detail." },
];

const reviews = [
  { name: "Adaeze O.", text: "The team made our daughter&rsquo;s 5th birthday magical. Décor was beyond expectation." },
  { name: "Babatunde A.", text: "We hosted our company AGM with them. Truly professional from setup to teardown." },
  { name: "Chiamaka E.", text: "Best event planners in Agege. Period. They handled our white wedding flawlessly." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-16 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl text-center">
          <p className="eyebrow">— About ActiveXperience</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Lagos&rsquo; trusted team for <em className="text-gold">extraordinary</em> events.
          </h1>
          <div className="mt-8 inline-flex items-center gap-3 text-gold">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            <span className="text-sm uppercase tracking-[0.24em] text-foreground/85">4.9 · 276 Google reviews</span>
          </div>
        </div>
      </section>

      {/* EXECUTIVE LAYOUT — Portrait left, copy right */}
      <section className="py-24 md:py-32 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* PORTRAIT */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-3 border border-gold/30 pointer-events-none" aria-hidden />
                <img
                  src={portrait}
                  alt="Peter Emmanuel Ajuh, Founder & CEO of ActiveXperience Events"
                  loading="lazy"
                  width={1080}
                  height={1500}
                  className="relative w-full aspect-[4/5] object-cover"
                />
              </div>
              <figcaption className="mt-8 text-center">
                <p className="font-serif text-2xl text-foreground">Peter Emmanuel Ajuh</p>
                <p className="mt-2 text-xs uppercase tracking-[0.32em] text-gold">Founder &amp; CEO</p>
              </figcaption>
            </div>
          </div>

          {/* COPY */}
          <div className="lg:col-span-7 space-y-16">
            {/* The ActiveXperience Difference */}
            <div>
              <p className="eyebrow">— Our Philosophy</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                The ActiveXperience <em className="text-gold">Difference.</em>
              </h2>
              <div className="mt-8 h-px w-16 bg-gold" />
              <p className="mt-8 text-foreground/85 leading-relaxed text-lg">
                At ActiveXperience Events, we are devoted to the flawless
                execution of luxury social and corporate occasions —
                custom-tailored, without exception, to the singular vision of
                every client we serve. From the first conversation to the final
                farewell, our work is defined by quiet precision, refined
                taste, and an unwavering standard of excellence.
              </p>
              <p className="mt-6 text-foreground/80 leading-relaxed">
                We do not produce templates. We produce experiences —
                considered down to the smallest detail, delivered with the
                discipline of a team that has earned a reputation across Lagos
                for getting it right, the first time, every time.
              </p>
            </div>

            {/* Meet the Founder */}
            <div className="pt-12 border-t border-border">
              <p className="eyebrow">— Leadership</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Meet the <em className="text-gold">Founder &amp; CEO.</em>
              </h2>
              <div className="mt-8 h-px w-16 bg-gold" />

              <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed text-[1.05rem]">
                <p>
                  <span className="text-gold font-serif">Peter Emmanuel Ajuh</span> is
                  the visionary force and CEO behind ActiveXperience Events, a
                  premium event planning company based in Agege, Lagos.
                  Originally from Benue State and raised in the vibrant energy
                  of Lagos, Peter brings a unique blend of analytical precision
                  and elite creativity to the world of luxury event production.
                </p>
                <p>
                  He holds a Higher National Diploma (HND) in Microbiology — a
                  scientific background that instills a rigorous,
                  detail-oriented approach to logistics and crowd management.
                  Elevating his deep passion for the industry, Peter is a
                  Certified Event Planner from the prestigious BusyBee Academy,
                  mastering the art of high-end social celebrations and
                  seamless corporate executions.
                </p>
                <p>
                  With a customer-centric philosophy, he leads a dedicated team
                  of professionals to ensure that every timeline is flawlessly
                  honored, budgets are respected, and expectations are
                  consistently surpassed. To work with Peter is to experience
                  thoughtful leadership, unmatched dedication, and a seamless
                  journey to your dream event.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="font-serif text-3xl text-gold">89+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-foreground/70">Events Delivered</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-gold">4.9★</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-foreground/70">Google Rated</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-gold">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-foreground/70">At Your Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl mb-16">
            <p className="eyebrow">— What We Stand For</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Four <em className="text-gold">non-negotiables.</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((v) => (
              <div key={v.t} className="border-t border-border pt-6">
                <h3 className="font-serif text-3xl text-gold">{v.t}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: v.c }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-28 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl mb-12">
            <p className="eyebrow">— Real Client Stories</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Why our clients <em className="text-gold">refer us.</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article key={r.name} className="border border-border bg-ink p-8">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-foreground/85 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-gold">— {r.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-32 px-6 lg:px-10 border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="eyebrow">— Our Promise</p>
          <p className="mt-8 font-serif text-2xl md:text-3xl leading-snug italic text-foreground/90">
            &ldquo;Your event matters. Whether it&rsquo;s a wedding for 800
            guests or an intimate dinner for 20 — we bring the same care,
            the same attention, the same fire.&rdquo;
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.24em] text-gold">— Peter Emmanuel A, CEO</p>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto">
          Let&rsquo;s plan something <em className="text-gold">extraordinary</em> together.
        </h2>
        <Link to="/contact" className="mt-10 inline-flex btn-gold">Request a Consultation</Link>
      </section>
    </>
  );
}
