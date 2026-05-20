import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home", type: "scroll" },
  { label: "Collections", to: "/collections", type: "page" },
  { label: "About", href: "#about", type: "scroll" },
  { label: "Reviews", href: "#reviews", type: "scroll" },
  { label: "Contact", href: "#contact", type: "scroll" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isCollectionsPage = location.pathname === "/collections";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || isCollectionsPage
          ? "py-2"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled || isCollectionsPage
              ? "bg-white/80 shadow-card-luxe backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className={`font-display text-2xl tracking-[0.3em] transition-colors duration-500 ${
                scrolled || isCollectionsPage
                  ? "text-black"
                  : "text-white"
              }`}
            >
              MAISON
            </span>

            <span
              className={`hidden sm:inline font-serif italic text-sm transition-colors duration-500 ${
                scrolled || isCollectionsPage
                  ? "text-gray-600"
                  : "text-white/80"
              }`}
            >
              d'or
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item) =>
              item.type === "page" ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-[13px] uppercase tracking-[0.22em] gold-underline transition-colors duration-500 ${
                    scrolled || isCollectionsPage
                      ? "text-black/80 hover:text-black"
                      : "text-white/90 hover:text-white"
                  }`}
                  activeProps={{
                    className:
                      scrolled || isCollectionsPage
                        ? "text-black"
                        : "text-white",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[13px] uppercase tracking-[0.22em] gold-underline transition-colors duration-500 ${
                    scrolled || isCollectionsPage
                      ? "text-black/80 hover:text-black"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex relative items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-[11px] uppercase tracking-[0.25em] shine-sweep hover:shadow-glow transition-shadow"
          >
            Visit Store
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              scrolled || isCollectionsPage
                ? "text-black"
                : "text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-6 animate-fade-up">
            <nav className="flex flex-col gap-4">
              {NAV.map((item) =>
                item.type === "page" ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm uppercase tracking-[0.22em] py-2 text-black"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm uppercase tracking-[0.22em] py-2 text-black"
                  >
                    {item.label}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em]"
              >
                Visit Store
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
