import { motion } from "motion/react";
import { Check, Flame, Droplets, Leaf } from "lucide-react";

const products = [
  {
    icon: Flame,
    iconColor: "#e67e22",
    tag: "Mais Popular",
    tagBg: "#fef3e2",
    tagColor: "#e67e22",
    name: "Briquetes Ecológicos",
    subtitle: "Macala Green",
    desc: "Produzidos a partir de resíduos agrícolas recolhidos por mulheres e jovens da comunidade. Mais limpos, mais duradouros e mais económicos que o carvão vegetal.",
    features: [
      "Menos fumaça e cinzas que carvão comum",
      "Queimam por mais tempo e produzem mais calor",
      "100% resíduos agrícolas — zero desmatamento",
      "Entrega porta a porta em Chimoio",
    ],
    prices: [
      { label: "5 kg com embalagem", price: "250 MK" },
      { label: "5 kg sem embalagem", price: "120 MK" },
      { label: "Amostra gratuita 1 kg", price: "0 MK" },
    ],
    img: "https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?w=500&h=400&fit=crop&auto=format",
    gradient: "linear-gradient(135deg, #fff8f0, #fef3e2)",
    border: "rgba(230,126,34,0.2)",
  },
  {
    icon: Droplets,
    iconColor: "#3aacdc",
    tag: "Tecnologia Verde",
    tagBg: "#e8f5ff",
    tagColor: "#3aacdc",
    name: "Biodigestores",
    subtitle: "Biogás + Biofertilizante",
    desc: "Construídos com materiais locais, transformam resíduos orgânicos em biogás para cozinhar e biofertilizantes para agricultura sustentável — fechando o ciclo da economia circular.",
    features: [
      "Produção contínua de biogás para culinária",
      "Biofertilizante líquido para culturas agrícolas",
      "Construção com materiais acessíveis locais",
      "Manutenção e suporte técnico incluídos",
    ],
    prices: [
      { label: "Biodigestor 250 litros", price: "16.760 MK" },
      { label: "Biodigestor 1.000 litros", price: "26.000 MK" },
      { label: "Manutenção industrial", price: "Sob consulta" },
    ],
    img: "https://images.unsplash.com/photo-1646032802776-dd2806b53eb5?w=500&h=400&fit=crop&auto=format",
    gradient: "linear-gradient(135deg, #f0f9ff, #e8f5ff)",
    border: "rgba(58,172,220,0.2)",
  },
  {
    icon: Leaf,
    iconColor: "#5aaa2a",
    tag: "Reflorestação",
    tagBg: "#e8f5e0",
    tagColor: "#5aaa2a",
    name: "Viveiros & Mudas",
    subtitle: "Restauração Ambiental",
    desc: "Desenvolvemos viveiros de árvores e plantamos dentro das cidades. Vendemos mudas para organizações, escolas e famílias, contribuindo para a restauração ambiental e criação de espaços verdes.",
    features: [
      "Mudas nativas adaptadas ao clima local",
      "Plantação em espaços urbanos e periurbanos",
      "Programas para escolas e organizações",
      "Contribuição direta ao carbono sequestrado",
    ],
    prices: [
      { label: "Mudas para particulares", price: "Consultar" },
      { label: "Programas para escolas", price: "Consultar" },
      { label: "Projetos corporativos", price: "Consultar" },
    ],
    img: "https://images.unsplash.com/photo-1776507178418-b9b689a1ad73?w=500&h=400&fit=crop&auto=format",
    gradient: "linear-gradient(135deg, #f7fdf4, #e8f5e0)",
    border: "rgba(90,170,42,0.2)",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24" style={{ background: "#ffffff" }}>
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
              Os Nossos Produtos
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a2e1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Energia limpa para cada lar,{" "}
            <span style={{ color: "#5aaa2a" }}>hoje</span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Todos os nossos produtos têm uma margem de 30% e são concebidos para serem mais acessíveis e mais limpos que as alternativas tradicionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ background: p.gradient, border: `1px solid ${p.border}` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden" style={{ background: p.gradient }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 30%, ${p.gradient.split(",")[1].trim().replace(")", "").replace(")", "")} 100%)` }} />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full"
                  style={{ background: p.tagBg, color: p.tagColor, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700 }}
                >
                  {p.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${p.iconColor}18` }}>
                    <p.icon size={20} color={p.iconColor} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a2e1a", fontSize: "1.1rem" }}>{p.name}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: p.iconColor, fontSize: "0.8rem", fontWeight: 600 }}>{p.subtitle}</div>
                  </div>
                </div>

                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>

                <ul className="mt-5 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={16} color="#5aaa2a" className="mt-0.5 shrink-0" />
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.85rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 space-y-2" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  {p.prices.map((pr) => (
                    <div key={pr.label} className="flex justify-between items-center">
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.82rem" }}>{pr.label}</span>
                      <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: p.iconColor, fontSize: "0.95rem" }}>{pr.price}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-5 w-full py-3 rounded-2xl text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: p.iconColor, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                >
                  Encomendar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
