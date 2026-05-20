import workshop from "@/assets/workshop.jpg";

export function CraftFilm() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ animation: "slow-zoom 18s ease-in-out infinite alternate" }}
      >
        <img src={workshop} alt="Master goldsmith crafting jewellery" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(20,12,8,0.75)_85%)]" />

      <div className="relative h-full flex flex-col justify-end items-start max-w-7xl mx-auto px-6 pb-24">
        <p className="text-xs uppercase tracking-[0.6em] text-gold animate-fade-up">Behind the Bench</p>
        <h2 className="mt-6 font-display text-6xl md:text-8xl text-pearl animate-fade-up delay-100 leading-[0.95] max-w-4xl">
          Seventy-seven hours <br />
          <span className="italic text-gold-gradient">per heirloom.</span>
        </h2>
        <div className="mt-8 gold-divider w-40 animate-fade-up delay-200" />
        <p className="mt-6 max-w-2xl font-serif text-xl text-pearl/80 italic animate-fade-up delay-300">
          Every gram of gold passes through the hands of seven artisans — drawn, granulated, set, and polished by the same families who have served this atelier for four generations.
        </p>
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {["Drawn", "Granulated", "Set", "Polished"].map((s, i) => (
          <div key={s} className="flex items-center gap-3 text-pearl/80">
            <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-xs uppercase tracking-[0.3em]">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
