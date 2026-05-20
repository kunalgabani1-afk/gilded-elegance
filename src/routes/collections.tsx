import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  products,
  categories,
  type Category,
  type Product,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Maison d'or Fine Jewellery" },
      {
        name: "description",
        content:
          "Browse heritage jewellery collections — necklaces, rings, earrings, bangles, diamonds and bridal sets.",
      },
    ],
  }),
  component: CollectionsPage,
});

const MAX_PRICE = 700000;

function CollectionsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | "All">("All");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const [sort, setSort] = useState<
    "featured" | "price-asc" | "price-desc" | "name"
  >("featured");

  const [open, setOpen] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        p.price <= maxPrice &&
        (query.trim() === "" ||
          p.name.toLowerCase().includes(query.toLowerCase()))
    );

    if (sort === "price-asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [query, cat, maxPrice, sort]);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center pt-8 pb-12">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            The Maison Archive
          </p>

          <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1]">
            The full collection.
          </h1>

          <p className="mt-6 max-w-xl mx-auto font-serif italic text-lg text-muted-foreground">
            Every piece below is on display at our Jaipur atelier. Step in to
            see them up close.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="glass rounded-full p-3 shadow-card-luxe flex flex-wrap items-center gap-3 mb-10 z-30">
          <div className="flex items-center gap-2 px-4 flex-1 min-w-[180px]">
            <Search size={16} className="text-gold-deep" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewellery..."
              className="bg-transparent outline-none w-full text-sm font-serif placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="hidden md:flex items-center gap-2 px-3 border-l border-gold/30">
            <SlidersHorizontal
              size={14}
              className="text-gold-deep"
            />

            <input
              type="range"
              min={50000}
              max={MAX_PRICE}
              step={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-[var(--gold-deep)] w-40"
            />

            <span className="text-xs font-serif w-24">
              ≤ ₹{(maxPrice / 100000).toFixed(1)}L
            </span>
          </div>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as typeof sort)
            }
            className="bg-transparent text-xs uppercase tracking-[0.2em] px-4 py-2 outline-none cursor-pointer border-l border-gold/30"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="name">A–Z</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c as Category | "All")}
              className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${
                cat === c
                  ? "bg-gradient-gold text-primary-foreground shadow-glow"
                  : "border border-gold/40 text-foreground hover:bg-gold/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center py-20 font-serif italic text-muted-foreground text-lg">
            No pieces match your search. Try widening it.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filtered.map((p) => (
              <div key={p.id} className="animate-fade-up">
                <ProductCard
                  product={p}
                  onOpen={setOpen}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <ProductDialog
        product={open}
        onClose={() => setOpen(null)}
      />
    </div>
  );
}
