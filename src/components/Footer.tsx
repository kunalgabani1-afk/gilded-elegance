import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Sparkles } from "./Sparkles";

export function Footer() {
  return (
    <footer className="relative mt-32 texture-velvet text-pearl overflow-hidden">
      <Sparkles count={28} />
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.62_0.13_65/0.25),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.78_0.12_78/0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-4 gap-12 relative">

        <div className="lg:col-span-2">
          <div className="font-display text-3xl tracking-[0.3em] text-gold-gradient">MAISON d'or</div>
          <p className="mt-6 max-w-md text-pearl/70 leading-relaxed font-serif text-lg">
            A heritage atelier of fine jewellery — where every piece is a quiet conversation between tradition, craft, and the woman who wears it.
          </p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gradient-gold hover:border-transparent hover:shadow-[0_0_30px_oklch(0.78_0.12_78/0.8)] transition-all magnetic">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-pearl/70 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/reviews" className="hover:text-gold transition-colors">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Visit</h4>
          <ul className="space-y-3 text-pearl/70 text-sm">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0 text-gold" /> 14, Heritage Lane, Jaipur 302001</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +91 98290 11221</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> hello@maisondor.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-pearl/50 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Maison d'or Jewellers. Hand-crafted in India.</span>
          <span className="font-display tracking-[0.3em]">EST · MCMXLVII</span>
        </div>
      </div>
    </footer>
  );
}
