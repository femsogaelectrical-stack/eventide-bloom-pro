import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import launchImg from "@/assets/event-launch.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ActiveXperience Events Lagos" },
      { name: "description", content: "Wedding planning, corporate events, conferences, birthdays, theme parties, baby showers, religious & funeral planning. Full décor, catering, staffing and coordination in Lagos." },
      { property: "og:title", content: "Event Planning Services — ActiveXperience" },
      { property: "og:description", content: "Every occasion, planned and delivered by Lagos&rsquo; top event team." },
    ],
  }),
  component: ServicesPage,
});

const disciplines = [
  {
    img: weddingImg,
    tag: "I.",
    title: "Weddings & Engagements",
    copy: "From traditional ceremonies to lavish white weddings, vow renewals and engagement parties. We handle the venue, décor, catering coordination, MC, photography vendors and full on-the-day coordination.",
    bullets: ["Traditional weddings", "White weddings", "Engagement parties", "Bridal showers"],
  },
  {
    img: corporateImg,
    tag: "II.",
    title: "Corporate & Conferences",
    copy: "Conferences, AGMs, product launches, gala dinners, awards nights and team-building events. Professional staging, AV, branded décor and full event staffing.",
    bullets: ["Corporate galas", "Conferences", "Product launches", "Team building"],
  },
  {
    img: launchImg,
    tag: "III.",
    title: "Birthdays & Private Celebrations",
    copy: "Kids&rsquo; parties, baby showers, milestone birthdays, retirement parties and theme parties. Balloon décor, themed backdrops, entertainment and catering — all done for you.",
    bullets: ["Children's parties", "Baby showers", "Milestone birthdays", "Retirement parties"],
  },
];

const allServices = [
  "Wedding planning",
  "Engagement parties",
  "Corporate & conferences",
  "Gala & awards nights",
  "Product & brand launches",
  "Conference coordination",
  "Birthday party planning",
  "Children&rsquo;s parties",
  "Baby shower planning",
  "Anniversary parties",
  "Retirement parties",
  "Theme parties",
  "School events",
  "Religious events",
  "Funeral planning",
  "Outdoor event planning",
  "Event décor design",
  "Event décor rental",
  "Event staffing",
  "Catering coordination",
  "Team building events",
  "Private event planning",
];

const process = [
  { n: "01", t: "Free Consultation", c: "Tell us about your event — date, guests, vision and budget. We listen, advise and sketch the possibilities." },
  { n: "02", t: "Tailored Proposal", c: "Within 24 hours you receive a detailed proposal with concepts, vendor list and a fully transparent quote." },
  { n: "03", t: "Design & Production", c: "We book vendors, build the décor, manage logistics, coordinate catering and rehearse every detail." },
  { n: "04", t: "Event Day", c: "Our team runs the entire day end-to-end. You arrive a guest at your own celebration." },
];

export function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">— Services</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl max-w-4xl">
            Every event, planned <em className="text-gold">end to end.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-foreground/80 leading-relaxed">
            Whether you&rsquo;re hosting fifty or five thousand, ActiveXperience
            takes care of the entire journey — concept, design, vendors, décor,
            staffing and the day itself.
          </p>
        </div>
      </section>

      {disciplines.map((d, i) => (
        <section key={d.title} className="py-24 px-6 lg:px-10 border-b border-border">
          <div className={`mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden">
              <img src={d.img} alt={d.title} loading="lazy" width={1080} height={1350} className="w-full aspect-[4/5] object-cover" />
            </div>
            <div>
              <p className="eyebrow">— Chapter {d.tag}</p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">{d.title}</h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg" dangerouslySetInnerHTML={{ __html: d.copy }} />
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-px w-4 bg-gold flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-gold hover:underline">
                Get a Quote for {d.title} <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ALL SERVICES GRID */}
      <section className="py-28 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">— Full Service List</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">If it&rsquo;s an event, we <em className="text-gold">handle it.</em></h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
            {allServices.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-foreground/85 border-t border-border pt-4">
                <Check size={14} className="text-gold mt-1 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: s }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6 lg:px-10 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow">— How It Works</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">From first call to <em className="text-gold">final dance.</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {process.map((p) => (
              <div key={p.n} className="border-t border-gold pt-6">
                <p className="font-serif text-3xl text-gold">{p.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{p.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto">
          Have an event in mind?
        </h2>
        <p className="mt-4 text-foreground/75 max-w-md mx-auto">Free quote within 24 hours.</p>
        <Link to="/contact" className="mt-10 inline-flex btn-gold">Get a Free Quote <ArrowUpRight size={14} /></Link>
      </section>
    </>
  );
}
