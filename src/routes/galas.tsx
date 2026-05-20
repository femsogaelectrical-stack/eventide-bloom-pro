import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import galaImg from "@/assets/Live-Shows.jpg"; // Using your corporate asset as placeholder

export const Route = createFileRoute("/galas")({
  head: () => ({
    meta: [
      { title: "Social Galas & Milestone Event Planning | ActiveXperience Events" },
      { name: "description", content: "Premium milestone celebrations, anniversaries, and high-profile social galas in Lagos custom-designed with elite hospitality." },
    ],
  }),
  component: SocialGalas,
});

function SocialGalas() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:underline mb-8">
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="eyebrow">— Elite Celebrations</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Social Galas & <em className="text-gold">Milestones</em>
          </h1>
          <p className="mt-6 text-foreground/80 text-lg leading-relaxed">
            In Lagos, milestone occasions deserve an absolute standard of luxury. Whether it is a landmark anniversary, a prestigious society gala, or a significant family jubilee, we design setups that match your legacy.
          </p>
          
          <div className="mt-10 space-y-4">
            {[
              "Complete conceptual theme & premium décor design",
              "VVIP guest management and custom seating logistics",
              "Premium catering, live band, and cultural entertainment booking",
              "On-site security, ushering, and executive hospitality staff",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-1 shrink-0" />
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 aspect-[4/5] overflow-hidden border border-border">
          <img src={galaImg} alt="Luxury social gala setup" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-16 p-8 border border-border bg-ink/50 text-center rounded-sm">
        <h3 className="font-serif text-2xl mb-4">Planning a Landmark Celebration?</h3>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
          Let our dedicated concierge team handle every detail from venue acquisition to flawless execution.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-gold">Request a Proposal</Link>
          <a href="tel:+2348081433976" className="btn-ghost-gold"><Phone size={14} /> Speak to a Planner</a>
        </div>
      </div>
    </div>
  );
}