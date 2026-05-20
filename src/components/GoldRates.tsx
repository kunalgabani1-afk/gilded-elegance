import { useEffect, useRef, useState } from "react";
import { Sparkles } from "./Sparkles";

function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function RateCard({ label, unit, price, tone, delta }: { label: string; unit: string; price: number; tone: string; delta: string }) {
  const { val, ref } = useCounter(price);
  return (
    <div ref={ref} className="relative group">
      <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700" />
      <div className="glass vintage-frame rounded-sm p-8 hover-lift overflow-hidden">
        <Sparkles count={6} />
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">{label}</span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">{unit}</span>
        </div>
        <div className="mt-6 price-number font-display text-5xl text-gold-gradient">
  ₹{val.toLocaleString("en-IN")}
</div>
        <div className="mt-4 gold-divider" />
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{tone}</span>
          <span className="text-emerald-700/80">{delta}</span>
        </div>
      </div>
    </div>
  );
}

export function GoldRates() {
  const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  return (
    <section className="relative py-32 texture-marble overflow-hidden">
      <Sparkles count={22} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.5em] text-gold-deep">Today's Bullion</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-charcoal">Live Precious Rates</h2>
          <div className="mt-4 gold-divider w-40 mx-auto" />
          <p className="mt-4 text-muted-foreground font-serif italic">Updated · {today}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <RateCard label="Gold 22K" unit="per 10 g" price={71820} tone="Hallmarked 916" delta="▲ 0.42%" />
          <RateCard label="Gold 24K" unit="per 10 g" price={78340} tone="Pure 999.9" delta="▲ 0.51%" />
          <RateCard label="Silver" unit="per kg" price={94250} tone="Fine 999" delta="▲ 0.18%" />
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Indicative · final invoiced at showroom rate
        </p>
      </div>
    </section>
  );
}
