import { Leaf } from "lucide-react";
import logoImg from "../../imports/580525159_1994837317976380_6690632907568599332_n.jpg";

const navLinks = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0d1f0d", borderTop: "1px solid rgba(90,170,42,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Taka Energy" className="w-12 h-12 rounded-xl object-contain" />
              <div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#5aaa2a", fontSize: "1.2rem", lineHeight: 1 }}>TAKA</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#3aacdc", fontSize: "1.2rem", lineHeight: 1 }}>ENERGY</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              Transformando resíduos orgânicos em energia limpa, fertilizantes e oportunidades para comunidades moçambicanas.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Leaf size={14} color="#5aaa2a" />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5aaa2a", fontSize: "0.8rem", fontWeight: 600 }}>Chimoio · Gurué · Moçambique</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "0.95rem", marginBottom: 16 }}>Navegação</div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    className="hover:text-[#5aaa2a] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "0.95rem", marginBottom: 16 }}>Contacto Directo</div>
            <div className="space-y-3">
              <a href="mailto:info.takaenergy@gmail.com" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", display: "block" }} className="hover:text-[#5aaa2a] transition-colors">
                info.takaenergy@gmail.com
              </a>
              <a href="tel:+258848391428" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", display: "block" }} className="hover:text-[#5aaa2a] transition-colors">
                +258 848 391 428
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © 2025 Taka Energy · Todos os direitos reservados
          </span>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            Feito com 🌿 em Moçambique
          </span>
        </div>
      </div>
    </footer>
  );
}
