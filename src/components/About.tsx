import { useEffect, useRef, useState } from "react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1800;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image collage */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-luxe">
            <img src={about1} alt="Heritage showroom" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-12 -right-4 lg:-right-12 w-2/3 aspect-[4/5] rounded-sm overflow-hidden shadow-luxe border-8 border-ivory">
            <img src={about2} alt="Artisan at work" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
        </div>

        <div className="lg:col-span-6">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">Our Heritage</p>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.05]">
            Three generations of <em className="text-gold-gradient not-italic font-display">karigari</em>, kept alive at the bench.
          </h2>
          <div className="mt-8 gold-divider w-32" />
          <p className="mt-8 font-serif text-lg text-muted-foreground leading-relaxed">
            Maison d'or began in 1947 as a modest workshop in the lanes of Jaipur. Today, our seventy artisans still shape every clasp, every claw, every kundan setting by hand — the way it has always been done. We do not chase trends. We carry forward an inheritance.
          </p>
          <p className="mt-5 font-serif text-lg text-muted-foreground leading-relaxed">
            Step into our showroom and you'll find no rushing, no scripts — only time, gold, and a quiet conversation about the piece that's meant for you.
          </p>

          <div className="mt-14 grid grid-cols-3 gap-6">
            {[
              { n: 78, s: "", l: "Years of Craft" },
              { n: 12, s: "K+", l: "Happy Patrons" },
              { n: 240, s: "+", l: "Collections" },
            ].map((m) => (
              <div key={m.l} className="border-t border-gold/30 pt-5">
                <div className="font-display text-4xl lg:text-5xl text-gold-gradient">
                  <Counter to={m.n} suffix={m.s} />
                </div>
                <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
