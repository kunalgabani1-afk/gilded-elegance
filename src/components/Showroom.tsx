import showroom from "@/assets/showroom.jpg";
import { MapPin, Clock } from "lucide-react";

export function Showroom() {
  return (
    <section className="relative py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
            <figure className="relative vintage-frame overflow-hidden">
              <img
                src={showroom}
                alt="Maison d'or flagship showroom"
                className="w-full h-[680px] object-cover transition-transform duration-[2s] group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute bottom-6 left-6 text-pearl/90 text-xs uppercase tracking-[0.4em]">
                The Flagship · Jaipur
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gold-deep">An Invitation</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
              Step into our <span className="italic text-gold-gradient">shop.</span>
            </h2>
            <div className="mt-6 gold-divider w-32" />
            <p className="mt-8 font-serif text-xl text-muted-foreground leading-relaxed">
              A chandeliered chamber of velvet and marble, where each piece is brought to you on a silver tray with a cup of cardamom chai. By appointment, and by tradition.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-charcoal" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold">Address</div>
                  <div className="font-serif text-lg">14, Heritage Lane, Pink City, Jaipur 302001</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-charcoal" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold">Salon Hours</div>
                  <div className="font-serif text-lg">Tue – Sun · 11 am – 8 pm · By appointment</div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 bg-charcoal text-pearl px-8 py-4 text-sm uppercase tracking-[0.3em] shine-sweep magnetic hover:bg-gradient-gold hover:text-charcoal transition-colors"
            >
              Book a Private Viewing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
