import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, Phone, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";

interface Props {
  product: Product | null;
  onClose: () => void;
}

type Mode = "angle" | "worn";

export function ProductDialog({ product, onClose }: Props) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 50, y: 50 });
  const [mode, setMode] = useState<Mode>("angle");

  useEffect(() => {
    if (product) {
      setActive(0); setZoom(1); setMode("angle");
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  const currentImage = mode === "worn" ? product.worn : product.angles[active];

  return (
    <div className="fixed inset-0 z-[100] animate-fade-in" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-charcoal/85 backdrop-blur-md" onClick={onClose} />
      <div className="relative h-full w-full overflow-y-auto">
        <div className="min-h-full flex items-start lg:items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-6xl bg-ivory shadow-luxe rounded-sm overflow-hidden animate-fade-up">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:text-primary-foreground transition-all"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="relative bg-cream">
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="relative w-full h-full cursor-zoom-in"
                    onMouseMove={(e) => {
                      if (zoom === 1) return;
                      const r = e.currentTarget.getBoundingClientRect();
                      setPan({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
                    }}
                    onClick={() => setZoom((z) => (z === 1 ? 2 : 1))}
                  >
                    <img
                      src={currentImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: `${pan.x}% ${pan.y}%`,
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.86_0.06_82/0.25),transparent_60%)]" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  <button
                    onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center"
                    aria-label="Zoom out"
                  ><ZoomOut size={14} /></button>
                  <button
                    onClick={() => setZoom((z) => Math.min(3, z + 0.5))}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center"
                    aria-label="Zoom in"
                  ><ZoomIn size={14} /></button>
                </div>

                <div className="px-6 py-4 flex flex-wrap items-center gap-3 justify-center bg-pearl border-t border-border">
                  {product.angles.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => { setActive(i); setMode("angle"); setZoom(1); }}
                      className={`relative w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                        mode === "angle" && active === i ? "border-gold shadow-glow" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Angle ${i + 1}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <button
                    onClick={() => { setMode("worn"); setZoom(1); }}
                    className={`px-4 h-10 rounded-full text-[10px] tracking-[0.25em] uppercase border transition-all ${
                      mode === "worn" ? "bg-gradient-gold text-primary-foreground border-transparent shadow-glow" : "border-gold/50 text-foreground hover:bg-gold/10"
                    }`}
                  >
                    On Model
                  </button>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col">
                <p className="text-[10px] tracking-[0.35em] uppercase text-gold-deep">{product.category}</p>
                <h2 className="mt-3 font-serif text-4xl lg:text-5xl leading-[1.05]">{product.name}</h2>
                <div className="mt-5 gold-divider w-24" />
                <p className="mt-6 text-muted-foreground leading-relaxed font-serif text-lg">
                  {product.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["Metal", "22k Antique Gold"],
                    ["Setting", "Hand-set"],
                    ["Origin", "Jaipur, India"],
                    ["Hallmark", "BIS Certified"],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t border-border pt-3">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{k}</p>
                      <p className="mt-1 font-serif">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Showroom Price</p>
                    <p className="font-serif text-3xl text-gold-gradient font-semibold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="tel:+919829011221" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] shine-sweep hover:shadow-glow transition-shadow">
                    <Phone size={14} /> Enquire at Store
                  </a>
                  <a href="https://wa.me/919829011221" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/50 text-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold/10 transition-colors">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
