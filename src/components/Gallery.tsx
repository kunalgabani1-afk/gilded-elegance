import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/lib/products";

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Asymmetric heights for editorial feel
  const heights = ["h-72", "h-96", "h-80", "h-[28rem]", "h-80", "h-[26rem]", "h-72", "h-96"];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">The Atelier Journal</p>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">Worn moments, gilded memories.</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 [column-fill:_balance]">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(img)}
              className={`group relative mb-5 w-full ${heights[idx % heights.length]} overflow-hidden rounded-sm break-inside-avoid block shine-sweep`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] animate-fade-in" onClick={() => setOpen(null)}>
          <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-md" />
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass-dark text-pearl flex items-center justify-center hover:bg-gradient-gold transition-all"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="relative h-full flex items-center justify-center p-8 animate-fade-up">
            <img src={open} alt="" className="max-h-[88vh] max-w-[92vw] object-contain rounded-sm shadow-luxe" />
          </div>
        </div>
      )}
    </section>
  );
}
