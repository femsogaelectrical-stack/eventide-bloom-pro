import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import launchImg from "@/assets/event-launch.jpg";

// CORRECT PICTURE CORRELATION
import socialGalasImg from "@/assets/Social-Galas.jpg";
import liveShowsImg from "@/assets/Live-Shows.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesOverview,
});

const servicesList = [
  {
    num: "01",
    title: "Weddings",
    tag: "Traditional · White · Engagements",
    copy: "From intimate ceremonies to grand Nigerian weddings — décor, planning, catering and coordination, all under one roof.",
    img: weddingImg,
    to: "/services"
  },
  {
    num: "02",
    title: "Corporate & Conferences",
    tag: "Galas · Summits · Launches",
    copy: "Boardroom dinners, AGMs, conferences and brand activations produced end-to-end with professional staging and AV.",
    img: corporateImg,
    to: "/services"
  },
  {
    num: "03",
    title: "Birthdays & Theme Parties",
    tag: "Kids · Adults · Milestones",
    copy: "Themed setups, balloon décor, kids' parties, baby showers and milestone birthdays designed to wow.",
    img: launchImg,
    to: "/services"
  },
  {
    num: "04",
    title: "Social Galas & Milestones",
    tag: "Anniversaries · Jubilees · Celebrations",
    copy: "Premium milestone celebrations, anniversaries, and high-profile social galas custom-designed with elite hospitality.",
    img: socialGalasImg, // Correctly linked
    to: "/galas"
  },
  {
    num: "05",
    title: "Concerts, Festivals & Activations",
    tag: "Staging · Sound Reinforcement · Lighting Rigs",
    copy: "High-capacity live events, concerts, and experiential brand activations managed with technical production muscle.",
    img: liveShowsImg, // Correctly linked
    to: "/concerts"
  }
];

function ServicesOverview() {
  return (
    <div className="pt-40 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <p className="eyebrow">— Our Expertise</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-16">
        Signature <em className="text-gold">Disciplines</em>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service) => (
          <Link key={service.num} to={service.to} className="group block border border-border bg-ink overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 text-xs tracking-widest text-gold">{service.num}</span>
            </div>
            <div className="p-6">
              <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">{service.tag}</span>
              <h3 className="font-serif text-2xl mt-2 flex items-center justify-between group-hover:text-gold transition-colors">
                {service.title} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-foreground/75 mt-3 leading-relaxed">{service.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
