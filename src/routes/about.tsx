import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison d'or" },
      { name: "description", content: "Three generations of jewellery craftsmanship from Jaipur, India." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-4 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">Our Story</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1]">A house built on patience.</h1>
      </div>
      <About />
    </div>
  ),
});
