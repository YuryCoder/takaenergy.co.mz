import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/580525159_1994837317976380_6690632907568599332_n.jpg";

const links = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(90,170,42,0.12)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logoImg} alt="Taka Energy logo" className="h-12 w-12 object-contain rounded-full" />
          <div className="flex flex-col leading-none">
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#5aaa2a", fontSize: "1.2rem", letterSpacing: "-0.02em" }}>TAKA</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#3aacdc", fontSize: "1.2rem", letterSpacing: "-0.02em" }}>ENERGY</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleNav(l.href)}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: scrolled ? "#1a2e1a" : "#1a2e1a", fontSize: "0.9rem" }}
                className="hover:text-[#5aaa2a] transition-colors duration-200 cursor-pointer bg-transparent border-none"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("#contacto")}
          className="hidden md:block px-5 py-2 rounded-full text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #5aaa2a, #3aacdc)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
        >
          Fale Connosco
        </button>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#1a2e1a" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)" }}
        >
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#1a2e1a", textAlign: "left" }}
              className="py-2 border-b border-[#5aaa2a]/10 hover:text-[#5aaa2a] transition-colors bg-transparent border-x-0 border-t-0"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="mt-2 px-5 py-3 rounded-full text-white text-center"
            style={{ background: "linear-gradient(135deg, #5aaa2a, #3aacdc)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
          >
            Fale Connosco
          </button>
        </div>
      )}
    </header>
  );
}
