import { ShieldCheck, Award, Infinity as InfinityIcon, BadgeCheck } from "lucide-react";
import { Sparkles } from "./Sparkles";

const items = [
  { Icon: BadgeCheck, title: "BIS Hallmarked", body: "Every gram certified pure by the Bureau of Indian Standards." },
  { Icon: Award, title: "IGI Certified Diamonds", body: "Each diamond accompanied by an independent grading report." },
  { Icon: InfinityIcon, title: "Lifetime Service", body: "Complimentary cleaning, polishing, and re-rhodium for life." },
  { Icon: ShieldCheck, title: "Authenticity Guarantee", body: "Buy-back assured at the prevailing rate, always." },
];

export function Hallmark() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-cream to-ivory">
      <Sparkles count={26} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.5em] text-gold-deep">A Word of Honor</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Certified · Trusted · Timeless</h2>
          <div className="mt-4 gold-divider w-40 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="relative text-center p-10 vintage-frame bg-pearl/70 backdrop-blur-sm hover-lift group"
              style={{ animation: `fade-up 0.8s ${i * 0.1}s both` }}
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-luxe group-hover:scale-110 transition-transform">
                <it.Icon size={28} className="text-charcoal" />
              </div>
              <h3 className="mt-6 font-display text-xl tracking-wide">{it.title}</h3>
              <div className="mt-3 mb-3 gold-divider w-10 mx-auto" />
              <p className="font-serif text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
