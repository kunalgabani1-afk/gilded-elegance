import { useState } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  onOpen: (p: Product) => void;
}

export function ProductCard({ product, onOpen }: Props) {
  const [liked, setLiked] = useState(false);
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  return (
    <div
      className="group relative cursor-pointer hover-lift"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setCoords({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      onClick={() => onOpen(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream shine-sweep">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        {/* Mouse-follow gold glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-soft-light"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}% ${coords.y}%, oklch(0.95 0.12 80 / 0.55), transparent 70%)`,
          }}
        />
        {/* Golden border on hover */}
        <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/70 transition-all duration-500 rounded-sm pointer-events-none" />

        <button
          onClick={(e) => { e.stopPropagation(); setLiked((v) => !v); }}
          aria-label="Like"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center transition-transform active:scale-90"
        >
          <Heart
            size={16}
            className={`transition-all duration-300 ${liked ? "fill-destructive stroke-destructive scale-110" : "stroke-charcoal"}`}
          />
        </button>

        <div className="absolute bottom-0 inset-x-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-block text-[10px] tracking-[0.3em] uppercase glass px-3 py-1.5 rounded-full">
            View Detail
          </span>
        </div>
      </div>

      <div className="pt-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 font-serif text-xl text-foreground">{product.name}</h3>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From</p>
          <p className="font-serif text-lg text-gold-gradient font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
}
