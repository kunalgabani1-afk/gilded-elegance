import { createFileRoute } from "@tanstack/react-router";
import { Reviews } from "@/components/Reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Maison d'or" },
      { name: "description", content: "What our patrons say about Maison d'or fine jewellery." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-6 pt-12 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">Patron Stories</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1]">Loved, worn, remembered.</h1>
      </div>
      <Reviews />
    </div>
  ),
});
