import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleScroll = async (id: string) => {
    if (location.pathname !== "/") {
      await navigate({ to: "/" });

      setTimeout(() => {
        const el = document.querySelector(id);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const el = document.querySelector(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

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
          {/* Logo */}
          <button
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-2 group"
          >
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
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => handleScroll("#home")}
              className={`text-[13px] uppercase tracking-[0.22em] gold-underline transition-colors duration-500 ${
                scrolled || isCollectionsPage
                  ? "text-black/80 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Home
            </button>

            <Link
              to="/collections"
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
              Collections
            </Link>

            <button
              onClick={() => handleScroll("#about")}
              className={`text-[13px] uppercase tracking-[0.22em] gold-underline transition-colors duration-500 ${
                scrolled || isCollectionsPage
                  ? "text-black/80 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleScroll("#reviews")}
              className={`text-[13px] uppercase tracking-[0.22em] gold-underline transition-colors duration-500 ${
                scrolled || isCollectionsPage
                  ? "text-black/80 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Reviews
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className={`text-[13px] uppercase tracking-[0.22em] gold-underline transition-colors duration-500 ${
                scrolled || isCollectionsPage
                  ? "text-black/80 hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleScroll("#contact")}
            className="hidden lg:inline-flex relative items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-[11px] uppercase tracking-[0.25em] shine-sweep hover:shadow-glow transition-shadow"
          >
            Visit Store
          </button>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-3 bg-white/80 rounded-3xl p-6 animate-fade-up">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => handleScroll("#home")}
                className="text-sm uppercase tracking-[0.22em] py-2 text-black text-left"
              >
                Home
              </button>

              <Link
                to="/collections"
                className="text-sm uppercase tracking-[0.22em] py-2 text-black"
              >
                Collections
              </Link>

              <button
                onClick={() => handleScroll("#about")}
                className="text-sm uppercase tracking-[0.22em] py-2 text-black text-left"
              >
                About
              </button>

              <button
                onClick={() => handleScroll("#reviews")}
                className="text-sm uppercase tracking-[0.22em] py-2 text-black text-left"
              >
                Reviews
              </button>

              <button
                onClick={() => handleScroll("#contact")}
                className="text-sm uppercase tracking-[0.22em] py-2 text-black text-left"
              >
                Contact
              </button>

              <button
                onClick={() => handleScroll("#contact")}
                className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em]"
              >
                Visit Store
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
