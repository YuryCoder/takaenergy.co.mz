import { motion } from "motion/react";
import { Heart, TreePine, Users, Zap } from "lucide-react";

const values = [
  { icon: Heart, title: "Saúde", desc: "Reduzimos a exposição à fumaça tóxica que causa pneumonia, cancro do pulmão e morte prematura — especialmente em mulheres e crianças.", color: "#e74c3c" },
  { icon: TreePine, title: "Florestas", desc: "Cada briquete ecológico vendido significa menos árvores abatidas. Moçambique perde 267 mil hectares de floresta por ano — juntos, revertemos isso.", color: "#5aaa2a" },
  { icon: Users, title: "Comunidade", desc: "Formamos jovens e mulheres em tecnologia de biodigestores, gestão de resíduos e economia circular — criando empregos verdes locais.", color: "#3aacdc" },
  { icon: Zap, title: "Inovação", desc: "Transformamos resíduos agrícolas em recursos valiosos: briquetes limpos, biogás para culinária e biofertilizantes para agricultura sustentável.", color: "#f59e0b" },
];

export function About() {
  return (
    <section id="sobre" className="py-24" style={{ background: "#f7fdf4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4", background: "#e8f5e0" }}>
              <img
                src="https://images.unsplash.com/photo-1768052271115-3a01d2b042b9?w=600&h=800&fit=crop&auto=format"
                alt="Comunidade rural em Moçambique com acesso a energia limpa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(26,46,26,0.5) 100%)" }} />
            </div>

            {/* Quote overlay */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 8px 32px rgba(90,170,42,0.2)" }}
            >
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.6 }}>
                "Não é apenas um negócio… é uma luta pela vida das nossas florestas e das nossas famílias."
              </p>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: "#5aaa2a" }}>YF</div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontWeight: 700, fontSize: "0.85rem" }}>Yury Francisco</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.75rem" }}>Fundador, Taka Energy</div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl opacity-60"
              style={{ background: "linear-gradient(135deg, #5aaa2a, #3aacdc)" }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#e8f5e0", border: "1px solid rgba(90,170,42,0.3)" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5aaa2a", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                A Nossa Missão
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#1a2e1a",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Cada resíduo é um{" "}
              <span style={{ color: "#5aaa2a" }}>recurso</span>{" "}
              capaz de mudar vidas
            </h2>

            <p
              className="mt-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "1rem", lineHeight: 1.8 }}
            >
              Em Moçambique, cerca de 70% das famílias cozinham com lenha ou carvão. A fumaça tóxica mata. As florestas desaparecem. A Taka Energy surgiu para quebrar este ciclo — transformando resíduos agrícolas e orgânicos em energia limpa, fertilizantes e oportunidades.
            </p>

            <p
              className="mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "1rem", lineHeight: 1.8 }}
            >
              Trabalhamos diretamente com agricultores do distrito de Gurué, formamos mulheres e jovens em tecnologias verdes, e desenvolvemos viveiros de árvores para restaurar o que foi perdido.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: "#ffffff", border: "1px solid rgba(90,170,42,0.12)" }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${v.color}18` }}>
                    <v.icon size={18} color={v.color} />
                  </div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a2e1a", fontSize: "0.95rem" }}>{v.title}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.8rem", lineHeight: 1.5, marginTop: 4 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
