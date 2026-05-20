import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { ProductDialog } from "./ProductDialog";

export function Featured() {
  const [open, setOpen] = useState<Product | null>(null);
  const featured = products.slice(0, 6);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">Featured Collection</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1] max-w-2xl">
              Pieces our patrons keep returning for.
            </h2>
          </div>
          <p className="font-serif italic text-muted-foreground max-w-sm text-lg">
            A small edit from the atelier — each one a quiet statement, none of them ordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setOpen} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] shine-sweep hover:shadow-glow transition-shadow"
          >
            View All Collections
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <ProductDialog product={open} onClose={() => setOpen(null)} />
    </section>
  );
}
