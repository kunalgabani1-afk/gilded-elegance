import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-ivory overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-gold opacity-10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">Visit the Atelier</p>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">Come, sit a while.</h2>
          <p className="mt-6 max-w-xl mx-auto font-serif italic text-lg text-muted-foreground">
            Our doors are open every day, by appointment or simply for tea. We would love to meet you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Map + info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-luxe border border-gold/30">
              <iframe
                title="Maison d'or location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.815%2C26.913%2C75.835%2C26.929&amp;layer=mapnik&amp;marker=26.9213%2C75.8250"
                className="absolute inset-0 w-full h-full grayscale-[40%] contrast-105 sepia-[15%]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,oklch(0.86_0.06_82/0.25))]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { Icon: MapPin, label: "Showroom", value: "14, Heritage Lane, Jaipur 302001" },
                { Icon: Clock, label: "Open", value: "Mon – Sat · 10 am to 8 pm" },
                { Icon: Phone, label: "Telephone", value: "+91 98290 11221" },
                { Icon: MessageCircle, label: "WhatsApp", value: "+91 98290 11221" },
              ].map((it) => (
                <div key={it.label} className="glass rounded-sm p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <it.Icon size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{it.label}</p>
                    <p className="mt-1 font-serif text-base">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2 glass rounded-sm p-8 shadow-luxe flex flex-col gap-5 self-start">
            <div>
              <h3 className="font-serif text-3xl">Request a Visit</h3>
              <p className="mt-2 text-sm text-muted-foreground font-serif italic">We'll have your tea ready.</p>
            </div>
            <Field label="Your Name" type="text" placeholder="Aanya Sharma" />
            <Field label="Phone" type="tel" placeholder="+91 ..." />
            <Field label="Email" type="email" placeholder="you@email.com" />
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us what you are looking for..."
                className="mt-2 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 font-serif text-base resize-none"
              />
            </div>
            <button className="mt-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] shine-sweep hover:shadow-glow transition-shadow">
              Send Request
            </button>
            <div className="flex gap-3 mt-1">
              <a href="tel:+919829011221" className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-gold/40 text-xs uppercase tracking-[0.25em] hover:bg-gold/10 transition-colors">
                <Phone size={14} /> Call
              </a>
              <a href="mailto:hello@maisondor.in" className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-gold/40 text-xs uppercase tracking-[0.25em] hover:bg-gold/10 transition-colors">
                <Mail size={14} /> Email
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 font-serif text-base"
      />
    </div>
  );
}
