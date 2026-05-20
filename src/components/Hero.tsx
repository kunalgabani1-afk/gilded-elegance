import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GoldParticles } from "./GoldParticles";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "The Heritage Edit · 2026",
    title: "Worn by\nQueens, Forever.",
    sub: "A polki and emerald choker, hand-set across forty days in our Jaipur atelier.",
  },
  {
    image: hero2,
    eyebrow: "Bridal Couture",
    title: "Stories of\nGolden Light.",
    sub: "Heirloom temple gold reimagined for the modern bride. Made to be passed on.",
  },
  {
    image: hero3,
    eyebrow: "Diamonds & Solitaires",
    title: "A Quiet Kind\nof Brilliance.",
    sub: "Hand-picked VVS diamonds in 22k yellow gold. Worn close. Loved always.",
  },
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      6500
    );

    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-charcoal">
      {slides.map((s, i) => {
        const isActive = i === idx;

        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity ease-[cubic-bezier(0.6,0,0.2,1)]"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: "2200ms",
              zIndex: isActive ? 2 : 1,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 ken-burns will-change-transform">
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/40" />
          </div>
        );
      })}

      <GoldParticles count={22} />

      {/* Floating Glow Effects */}
      <div className="pointer-events-none absolute top-[18%] right-[8%] hidden lg:block float-slow">
        <div className="w-32 h-32 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
      </div>

      <div
        className="pointer-events-none absolute bottom-[20%] left-[10%] hidden lg:block float-slow"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-44 h-44 rounded-full bg-champagne opacity-15 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 text-pearl">
            <p
              key={`eb-${idx}`}
              className="animate-fade-up text-[11px] tracking-[0.5em] uppercase text-gold mb-6"
            >
              {slides[idx].eyebrow}
            </p>

            <h1
              key={`t-${idx}`}
              className="animate-fade-up delay-100 font-serif font-light text-[clamp(2.3rem,5.5vw,5rem)] leading-[0.95] whitespace-pre-line"
            >
              {slides[idx].title}
            </h1>

            <p
              key={`s-${idx}`}
              className="animate-fade-up delay-200 mt-8 max-w-xl text-pearl/80 text-lg font-serif italic leading-relaxed"
            >
              {slides[idx].sub}
            </p>

            <div
              key={`b-${idx}`}
              className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] shine-sweep hover:shadow-glow transition-shadow"
              >
                Explore Collection
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/60 text-pearl text-xs uppercase tracking-[0.3em] hover:bg-gold/10 transition-colors"
              >
                Contact Store
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === idx
                ? "w-12 bg-gold"
                : "w-6 bg-pearl/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 text-pearl/60 text-[10px] tracking-[0.3em] uppercase z-20">
        <span>Scroll</span>

        <ArrowDown
          size={14}
          className="animate-bounce text-gold"
        />
      </div>
    </section>
  );
}
