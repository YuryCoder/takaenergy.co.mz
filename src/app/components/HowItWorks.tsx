import { motion } from "motion/react";
import { Recycle, Package, Home, Sprout } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Recycle,
    color: "#5aaa2a",
    bg: "#e8f5e0",
    title: "Recolha de Resíduos",
    desc: "Mulheres e jovens da comunidade recolhem resíduos agrícolas — palha, cascas, bagaços — e resíduos orgânicos de mercados, escolas e famílias. Zero desperdício, zero desmatamento.",
  },
  {
    n: "02",
    icon: Package,
    color: "#e67e22",
    bg: "#fef3e2",
    title: "Produção e Embalagem",
    desc: "Os resíduos são processados e transformados em briquetes ecológicos Macala Green ou encaminhados para biodigestores. Cada produto é embalado e etiquetado para venda direta.",
  },
  {
    n: "03",
    icon: Home,
    color: "#3aacdc",
    bg: "#e8f5ff",
    title: "Distribuição Porta a Porta",
    desc: "Distribuímos diretamente nas casas e negócios de Chimoio. Oferecemos 1 kg de amostra gratuita para que cada família sinta a diferença antes de comprar.",
  },
  {
    n: "04",
    icon: Sprout,
    color: "#9b59b6",
    bg: "#f5eeff",
    title: "Impacto Circular",
    desc: "Os biodigestores produzem biofertilizante que regressa à agricultura. Plantamos árvores para compensar emissões. O ciclo fecha-se — resíduos tornam-se recursos, para sempre.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24" style={{ background: "#f7fdf4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#e8f5e0", border: "1px solid rgba(90,170,42,0.3)" }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5aaa2a", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Como Funciona
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a2e1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Do resíduo ao{" "}
            <span style={{ color: "#5aaa2a" }}>lar limpo</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Um processo simples, circular e sustentável que transforma o que seria lixo em energia, fertilizante e futuro.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5"
            style={{ background: "linear-gradient(90deg, #5aaa2a, #e67e22, #3aacdc, #9b59b6)" }}
          />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                  style={{ background: s.bg, border: `2px solid ${s.color}30` }}
                >
                  <s.icon size={28} color={s.color} />
                </div>
                <div
                  className="text-xs font-mono mb-2"
                  style={{ color: s.color, fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  PASSO {s.n}
                </div>
                <h3
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a2e1a", fontSize: "1.05rem", lineHeight: 1.3 }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.875rem", lineHeight: 1.7 }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-8 md:p-12 text-center overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #5aaa2a, #3aacdc)" }}
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 50%, #fff 0%, transparent 50%)" }} />
          <div className="relative z-10">
            <h3
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#ffffff", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2 }}
            >
              Queremos impactar 5% dos 32 milhões de moçambicanos
            </h3>
            <p
              className="mt-3 max-w-xl mx-auto"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}
            >
              O mercado de carvão em Moçambique vale 250 milhões de dólares por ano. Nos próximos 5 anos, queremos captar 5 milhões desse mercado — com energia mais limpa, mais barata e mais justa.
            </p>
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
              style={{ background: "#ffffff", color: "#5aaa2a", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem" }}
            >
              Juntar-me à Missão
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
