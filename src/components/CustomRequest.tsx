import { useRef, useState } from "react";
import { Upload, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import workshop from "@/assets/workshop.jpg";

export function CustomRequest() {
  const [file, setFile] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f.name);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={workshop} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
        <div className="absolute inset-0" style={{ backdropFilter: "blur(2px)" }} />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="text-center text-pearl">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Bespoke Atelier</p>
          <h2 className="mt-5 font-display text-5xl md:text-6xl text-gold-gradient">Design Your Dream Jewellery</h2>
          <div className="mt-5 gold-divider w-48 mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto font-serif text-lg italic text-pearl/80">
            From sketch to heirloom — share your inspiration and our master craftsmen will bring your vision to life.
          </p>
        </div>

        <div className="mt-14 vintage-frame rounded-sm p-10 md:p-14 glass-dark relative">
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="grid md:grid-cols-2 gap-6"
          >
            <input className="bg-pearl/5 border border-gold/30 px-5 py-4 text-pearl placeholder:text-pearl/40 outline-none focus:border-gold transition-colors" placeholder="Your Name" />
            <input className="bg-pearl/5 border border-gold/30 px-5 py-4 text-pearl placeholder:text-pearl/40 outline-none focus:border-gold transition-colors" placeholder="Phone / WhatsApp" />
            <select className="bg-pearl/5 border border-gold/30 px-5 py-4 text-pearl outline-none focus:border-gold transition-colors md:col-span-2">
              <option className="bg-charcoal">Necklace</option>
              <option className="bg-charcoal">Ring</option>
              <option className="bg-charcoal">Earrings</option>
              <option className="bg-charcoal">Bangles</option>
              <option className="bg-charcoal">Bridal Set</option>
              <option className="bg-charcoal">Other</option>
            </select>
            <textarea rows={4} className="md:col-span-2 bg-pearl/5 border border-gold/30 px-5 py-4 text-pearl placeholder:text-pearl/40 outline-none focus:border-gold transition-colors resize-none" placeholder="Describe your dream piece — occasion, stones, sentiment..." />

            <label className="md:col-span-2 group flex items-center justify-between border border-dashed border-gold/40 px-5 py-5 cursor-pointer hover:bg-pearl/5 transition-colors">
              <div className="flex items-center gap-3 text-pearl/80">
                <Upload size={18} className="text-gold" />
                <span className="font-serif text-lg">{file ?? "Upload inspiration image"}</span>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Browse</span>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
            </label>

            <div className="md:col-span-2 mt-4 flex flex-wrap gap-4 justify-center">
              <Button type="submit" className="bg-gradient-gold text-charcoal hover:opacity-90 px-8 py-6 text-sm uppercase tracking-[0.3em] shine-sweep magnetic">
                <Send size={16} /> Send Inquiry
              </Button>
              <a
                href="https://wa.me/919829011221?text=Hello%20Maison%20d'or%2C%20I%20would%20like%20to%20commission%20a%20bespoke%20piece"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors px-8 py-4 text-sm uppercase tracking-[0.3em] shine-sweep magnetic"
              >
                <Phone size={16} /> WhatsApp Atelier
              </a>
            </div>
          </form>
          <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
