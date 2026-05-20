import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import g1 from "@/assets/g-1.jpg";
import g3 from "@/assets/g-3.jpg";
import g4 from "@/assets/g-4.jpg";
import necklace from "@/assets/p-necklace.jpg";
import bridal from "@/assets/p-bridal.jpg";

const reviews = [
  {
    name: "Aanya Sharma",
    role: "Bride · Udaipur",
    rating: 5,
    text: "My grandmother's choker was reimagined here with such reverence — I cried when I opened the box. The Maison d'or family understands what jewellery really means.",
    avatar: g1,
    piece: necklace,
  },
  {
    name: "Riya Mehta",
    role: "Patron since 2019",
    rating: 5,
    text: "There are jewellers, and then there is Maison d'or. Every visit feels like being welcomed into a private library of treasures. The craftsmanship is on another plane.",
    avatar: g3,
    piece: bridal,
  },
  {
    name: "Ishita Kapoor",
    role: "Bride · Mumbai",
    rating: 5,
    text: "They made my entire bridal set in four months, every consultation over warm chai. The polki work has the soul of a true heirloom — built to be passed on.",
    avatar: g4,
    piece: necklace,
  },
];

export function Reviews() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % reviews.length),
      7000
    );

    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="reviews"
      className="relative py-24 bg-gradient-ivory overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            Spoken With Love
          </p>

          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">
            Words from our patrons.
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                idx === i
                  ? "opacity-100 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid md:grid-cols-5 gap-8 items-center bg-pearl rounded-sm shadow-luxe p-8 md:p-12 relative overflow-hidden min-h-[420px]">
                <div className="absolute -top-6 -left-2 text-gold/20">
                  <Quote size={120} strokeWidth={1} />
                </div>

                <div className="md:col-span-2 flex flex-col items-center text-center relative z-10">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-gold blur-md opacity-50" />

                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-pearl"
                    />
                  </div>

                  <h4 className="mt-5 font-serif text-2xl">
                    {r.name}
                  </h4>

                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">
                    {r.role}
                  </p>

                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-gold stroke-gold"
                      />
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 relative z-10">
                  <p className="font-serif italic text-[1.5rem] leading-relaxed text-foreground/90">
                    "{r.text}"
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={r.piece}
                      alt=""
                      loading="lazy"
                      className="w-16 h-16 rounded-sm object-cover"
                    />

                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                      Worn from the Heritage Edit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-[2px] transition-all duration-500 ${
                  idx === i
                    ? "w-12 bg-gold-deep"
                    : "w-6 bg-foreground/20"
                }`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
