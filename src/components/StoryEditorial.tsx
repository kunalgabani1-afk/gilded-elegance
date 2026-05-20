import s1 from "@/assets/story-1.jpg";
import s2 from "@/assets/story-2.jpg";
import s3 from "@/assets/story-3.jpg";

export function StoryEditorial() {
  return (
    <section className="relative py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.5em] text-gold-deep">A Family Chronicle</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Worn. Remembered. Inherited.</h2>
          <div className="mt-4 gold-divider w-40 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <figure className="lg:col-span-7 group overflow-hidden vintage-frame">
            <img src={s1} alt="A bride and her mother" className="w-full h-[640px] object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]" loading="lazy" />
          </figure>
          <div className="lg:col-span-5 lg:pt-16">
            <p className="font-display text-3xl italic text-gold-deep">"Wear me on the day that matters."</p>
            <div className="mt-6 gold-divider w-24" />
            <p className="mt-6 font-serif text-lg text-muted-foreground leading-relaxed">
              A mother's hand fastens the same kundan choker she wore four decades ago. Some jewels are not bought — they are passed on, carrying every prayer and promise with them.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-gold">Chapter I · The Heirloom</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start mt-24">
          <div className="lg:col-span-5 lg:pt-16 order-2 lg:order-1">
            <p className="font-display text-3xl italic text-gold-deep">"The box, then the bangle, then the blessing."</p>
            <div className="mt-6 gold-divider w-24" />
            <p className="mt-6 font-serif text-lg text-muted-foreground leading-relaxed">
              Opened only on the most tender occasions — the gold inside has watched three weddings, two cradles, and a hundred Diwali dawns.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-gold">Chapter II · The Vault</p>
          </div>
          <figure className="lg:col-span-7 group overflow-hidden vintage-frame order-1 lg:order-2">
            <img src={s2} alt="Antique gold jewellery box" className="w-full h-[520px] object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]" loading="lazy" />
          </figure>
        </div>

        <div className="mt-24">
          <figure className="group overflow-hidden vintage-frame">
            <img src={s3} alt="Three generations sharing heritage jewellery" className="w-full h-[640px] object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]" loading="lazy" />
          </figure>
          <div className="mt-8 text-center">
            <p className="font-display text-3xl italic text-gold-deep max-w-3xl mx-auto">"Three women. One necklace. Eighty-four years of evenings."</p>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gold">Chapter III · The Inheritance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
