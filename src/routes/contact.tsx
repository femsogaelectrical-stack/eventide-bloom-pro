import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Clock, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ActiveXperience Events | Lagos Event Planner" },
      { name: "description", content: "Call 0808 143 3976 or send an inquiry. Free quote within 24 hours. Open 24 hours, 7 days a week. 65 Orile Rd, Agege, Lagos." },
      { property: "og:title", content: "Contact ActiveXperience Events" },
      { property: "og:description", content: "Free quote within 24 hours. Open 24/7." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    // 🔴 REPLACE THESE STRINGS WITH YOUR ACTUAL COPIED EMAILJS CREDENTIALS
    const SERVICE_ID = "service_sktmy2p";
    const TEMPLATE_ID = "template_jev7rih";
    const PUBLIC_KEY = "Yz-ikMi7MvzjHAs01";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS sending error:", error);
          setIsSending(false);
          alert("Something went wrong with sending your message. Please try again or call us directly!");
        }
      );
  };

  return (
    <section className="pt-40 pb-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">— Get in Touch</p>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl">
            Tell us about your <em className="text-gold">event.</em>
          </h1>
          <p className="mt-6 text-foreground/80 leading-relaxed max-w-md">
            We respond to every inquiry within 24 hours with a free,
            tailored quote. Prefer to talk? Our line is open 24/7.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <Detail icon={<Phone size={16} />} label="Phone (24/7)" value="0808 143 3976" href="tel:+2348081433976" />
            <Detail icon={<Mail size={16} />} label="Email" value="hello@activexperience-events.com" href="mailto:hello@activexperience-events.com" />
            <Detail icon={<MapPin size={16} />} label="Office" value="65 Orile Rd, Orile Agege, Agege 102212, Lagos" />
            <Detail icon={<Clock size={16} />} label="Hours" value="Open 24 hours · 7 days a week" />
          </div>

          <div className="mt-12 border border-border bg-ink overflow-hidden">
            <iframe
              title="ActiveXperience Events location"
              src="https://maps.google.com/maps?q=65%20Orile%20Rd,%20Orile%20Agege&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 block"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="border border-gold p-12 text-center">
              <h2 className="font-serif text-3xl text-gold">Thank you!</h2>
              <p className="mt-4 text-foreground/80">
                Your inquiry has reached our team. We’ll get back to you
                with a tailored quote within 24 hours. For urgent requests,
                call us directly on 0808 143 3976.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSendEmail}
              className="grid gap-6 border border-border p-8 md:p-12 bg-ink"
            >
              <Field label="Your name" name="name" required />
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Phone" name="phone" type="tel" required placeholder="0808 000 0000" />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <label className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">Event Type</label>
                <select 
                  name="event_type" 
                  required 
                  className="bg-transparent border-b border-border py-3 text-foreground focus:border-gold outline-none"
                >
                  <option value="Wedding" className="bg-ink">Wedding</option>
                  <option value="Birthday / Anniversary" className="bg-ink">Birthday / Anniversary</option>
                  <option value="Baby shower" className="bg-ink">Baby shower</option>
                  <option value="Corporate / Conference" className="bg-ink">Corporate / Conference</option>
                  <option value="Theme party" className="bg-ink">Theme party</option>
                  <option value="Religious event" className="bg-ink">Religious event</option>
                  <option value="Funeral planning" className="bg-ink">Funeral planning</option>
                  <option value="School event" className="bg-ink">School event</option>
                  <option value="Other" className="bg-ink">Other</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Event date" name="date" placeholder="DD / MM / YYYY" />
                <Field label="Guest count" name="guests" placeholder="100" />
              </div>
              <Field label="Venue / location" name="venue" placeholder="Lagos" />
              <div className="grid gap-2">
                <label className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">Tell us more</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="Share your vision, budget range, or any details that matter to you." 
                  className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold outline-none resize-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSending} 
                className="btn-gold mt-4 self-start flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    Sending Inquiry <Loader2 size={14} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Inquiry <ArrowUpRight size={14} />
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground">
                Free quote within 24 hours. No obligation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold outline-none"
      />
    </div>
  );
}

function Detail({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div>
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-foreground/90">{value}</p>
    </div>
  );
  return (
    <div className="flex items-start gap-4">
      <span className="text-gold mt-1">{icon}</span>
      {href ? <a href={href} className="hover:text-gold transition-colors">{inner}</a> : inner}
    </div>
  );
}