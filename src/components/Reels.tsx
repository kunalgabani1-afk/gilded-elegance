import { Play, Instagram } from "lucide-react";
import r1 from "@/assets/reel-1.jpg";
import r2 from "@/assets/reel-2.jpg";
import r3 from "@/assets/reel-3.jpg";
import r4 from "@/assets/reel-4.jpg";

const reels = [
  { img: r1, title: "The Bridal Twirl", tag: "Campaign · SS '25" },
  { img: r2, title: "Emerald Hands", tag: "Editorial" },
  { img: r3, title: "Diamond Whispers", tag: "Atelier" },
  { img: r4, title: "Golden Hour Jhumka", tag: "Sunset Series" },
];

export function Reels() {
  return (
    <section className="relative py-32 texture-velvet text-pearl overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-wrap items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gold">
              In Motion
            </p>

            <h2 className="mt-4 font-display text-5xl md:text-6xl text-gold-gradient">
              The Maison Reels
            </h2>

            <div className="mt-4 gold-divider w-40" />
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/50 bg-white/5 backdrop-blur-md text-gold text-[11px] uppercase tracking-[0.35em] transition-all duration-500 hover:bg-gold hover:text-white hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:-translate-y-1"          >
            <Instagram
              size={16}
className="transition-all duration-500 group-hover:rotate-12 group-hover:text-white"            />

            <span>Follow on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((r, i) => (
            <div
              key={r.title}
              className="group relative aspect-[9/16] overflow-hidden vintage-frame cursor-pointer"
              style={{ animation: `fade-up 0.9s ${i * 0.1}s both` }}
            >
              <img
                src={r.img}
                alt={r.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition">
                <div className="w-16 h-16 rounded-full bg-pearl/15 backdrop-blur border border-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-500">
                  <Play
                    size={20}
                    className="text-gold group-hover:text-[#3b2a1a] ml-1 transition-colors duration-500"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                  {r.tag}
                </div>

                <div className="mt-1 font-display text-xl">
                  {r.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
