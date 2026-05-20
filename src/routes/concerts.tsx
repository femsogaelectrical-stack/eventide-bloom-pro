import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import concertImg from "@/assets/Social-Galas.jpg"; // Using your hero asset as placeholder

export const Route = createFileRoute("/concerts")({
  head: () => ({
    meta: [
      { title: "Concerts, Festivals & Brand Activations | ActiveXperience Events" },
      { name: "description", content: "High-capacity live events, concerts, festivals, and brand experiences handled with pristine sound reinforcement, staging, and lighting rigs in Lagos." },
    ],
  }),
  component: ConcertsAndFestivals,
});

function ConcertsAndFestivals() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:underline mb-8">
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="eyebrow">— High-Impact Production</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Concerts, Festivals & <em className="text-gold">Activations</em>
          </h1>
          <p className="mt-6 text-foreground/80 text-lg leading-relaxed">
            From heavy sound staging to complex experiential brand activations, we provide the technical muscle and creative production required to run flawless, high-capacity live experiences in Lagos.
          </p>
          
          <div className="mt-10 space-y-4">
            {[
              "Professional stage engineering, truss structures, and premium AV rigs",
              "Intelligent concert lighting setups and crisp sound reinforcement",
              "Crowd control planning, barricade setups, and permit logistics",
              "Experiential brand fabrication and corporate experiential booths",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-1 shrink-0" />
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 aspect-[4/5] overflow-hidden border border-border">
          <img src={concertImg} alt="Large scale concert production" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-16 p-8 border border-border bg-ink/50 text-center rounded-sm">
        <h3 className="font-serif text-2xl mb-4">Let's Build Something Massive</h3>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
          Connect with our experiential production leads to map out your upcoming festival, activation, or live showcase.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-gold">Launch Project Inquiry</Link>
          <a href="tel:+2348081433976" className="btn-ghost-gold"><Phone size={14} /> Technical Line</a>
        </div>
      </div>
    </div>
  );
}