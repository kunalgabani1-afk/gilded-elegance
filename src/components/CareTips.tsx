import { Sparkles as SparkleIcon, Droplets, Archive, Sun } from "lucide-react";

const tips = [
  { Icon: SparkleIcon, title: "Gold Care", body: "Wipe gently with a soft chamois after wear. Avoid perfume and chlorine which dull the luster of 22k." },
  { Icon: Droplets, title: "Diamond Cleaning", body: "Soak in warm water with a drop of mild soap, brush with a soft natural-bristle brush, and pat dry on linen." },
  { Icon: Archive, title: "Storage Guide", body: "Each piece in its own velvet pouch — never together. Cool, dark, and dry; away from sunlight and humidity." },
  { Icon: Sun, title: "Daily Ritual", body: "Last on, first off. Always remove before bath, sport, and sleep. Polished kept polished." },
];

export function CareTips() {
  return (
    <section className="relative py-32 texture-marble">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.5em] text-gold-deep">The Maison Ritual</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Caring for Your Heirlooms</h2>
          <div className="mt-4 gold-divider w-40 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((t, i) => (
            <div
              key={t.title}
              className="vintage-frame bg-pearl/80 backdrop-blur-sm p-8 hover-lift group relative overflow-hidden"
              style={{ animation: `fade-up 0.8s ${i * 0.1}s both` }}
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-gold opacity-10 group-hover:opacity-30 blur-xl transition" />
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <t.Icon size={22} className="text-charcoal" />
              </div>
              <h3 className="font-display text-2xl text-charcoal">{t.title}</h3>
              <div className="mt-3 mb-4 h-px w-12 bg-gold" />
              <p className="font-serif text-base text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
