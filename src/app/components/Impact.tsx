import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const stats = [
  { val: 35, suffix: "+", label: "Clientes Regulares", sub: "de briquetes ecológicos", color: "#5aaa2a" },
  { val: 4.8, suffix: "T", label: "Briquetes Vendidos", sub: "toneladas entregues", color: "#3aacdc" },
  { val: 7, suffix: "", label: "Biodigestores", sub: "instalados e funcionando", color: "#e67e22" },
  { val: 50, suffix: "+", label: "Pessoas Formadas", sub: "mulheres e jovens capacitados", color: "#9b59b6" },
  { val: 3.8, suffix: "M", label: "Vidas em Risco", sub: "mortes anuais globais por fumaça", color: "#e74c3c" },
  { val: 267, suffix: "K", label: "Hectares Perdidos", sub: "por ano em Moçambique", color: "#f39c12" },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ color, fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}>
      {count % 1 === 0 ? Math.round(count) : count}{suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section id="impacto" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 50%, #0e2a3a 100%)" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #5aaa2a 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(90,170,42,0.2)", border: "1px solid rgba(90,170,42,0.4)" }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#7dce4a", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Números que Importam
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            O impacto real da{" "}
            <span style={{ color: "#5aaa2a" }}>Taka Energy</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Cada venda é um passo em direção a um Moçambique mais saudável, mais verde e mais próspero.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
            >
              <Counter target={s.val} suffix={s.suffix} color={s.color} />
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "1rem", marginTop: 8 }}>{s.label}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: 4 }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Problem-solution strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-8 md:p-10"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(90,170,42,0.3)" }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { emoji: "🔥", val: "175M+", label: "Pessoas em Nigeria dependem de biomassa tradicional", color: "#e74c3c" },
              { emoji: "🌍", val: "93%", label: "Da população rural subsaariana sem acesso a energia limpa", color: "#e67e22" },
              { emoji: "💪", val: "32M", label: "Habitantes em Moçambique — o nosso mercado potencial", color: "#5aaa2a" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: "2rem" }}>{item.emoji}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: item.color, fontSize: "2rem", marginTop: 8 }}>{item.val}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6, marginTop: 6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
