import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "shadow-card-luxe" : ""
        }`}>
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-[0.3em] text-gold-gradient">MAISON</span>
            <span className="hidden sm:inline font-serif italic text-sm text-muted-foreground">d'or</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] uppercase tracking-[0.22em] text-foreground/80 hover:text-foreground gold-underline transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex relative items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-[11px] uppercase tracking-[0.25em] shine-sweep hover:shadow-glow transition-shadow"
          >
            Visit Store
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-6 animate-fade-up">
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm uppercase tracking-[0.22em] py-2"
                >
                  {item.label}
                </Link>
              ))}
              <a href="#contact" className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em]">
                Visit Store
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
