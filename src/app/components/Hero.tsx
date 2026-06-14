import { motion } from "motion/react";
import { ArrowDown, Leaf, Flame } from "lucide-react";

export function Hero() {
  const handleScroll = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 40%, #0e2a3a 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, #5aaa2a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3aacdc 0%, transparent 50%)`,
      }} />

      {/* Animated leaf particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <Leaf size={24 + i * 4} color="#5aaa2a" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(90,170,42,0.2)", border: "1px solid rgba(90,170,42,0.4)" }}
          >
            <Leaf size={14} color="#5aaa2a" />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#7dce4a", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Energia Limpa · Moçambique
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            Transformando{" "}
            <span style={{ color: "#5aaa2a" }}>Resíduos</span>{" "}
            em{" "}
            <span style={{ color: "#3aacdc" }}>Energia Limpa</span>
          </h1>

          <p
            className="mt-6 max-w-lg"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            A Taka Energy produz briquetes ecológicos e biogás a partir de resíduos agrícolas e orgânicos — protegendo florestas, melhorando a saúde das famílias e criando oportunidades económicas em Moçambique.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #5aaa2a, #3aacdc)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", boxShadow: "0 4px 24px rgba(90,170,42,0.4)" }}
            >
              Ver Produtos
            </button>
            <button
              onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#ffffff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "1rem", background: "transparent" }}
            >
              Conhecer a Missão
            </button>
          </div>

          {/* Mini stats */}
          <div className="flex gap-8 mt-12">
            {[
              { val: "35+", label: "Clientes regulares" },
              { val: "4.8T", label: "Briquetes vendidos" },
              { val: "7", label: "Biodigestores" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "#5aaa2a", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ aspectRatio: "4/5", background: "linear-gradient(180deg, rgba(90,170,42,0.15) 0%, rgba(58,172,220,0.15) 100%)", border: "1px solid rgba(90,170,42,0.3)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1779357807569-18d3df9df645?w=700&h=875&fit=crop&auto=format"
              alt="Mulheres da comunidade rural em Moçambique"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(13,31,13,0.8) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="rounded-2xl p-4 backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["#5aaa2a", "#3aacdc", "#f59e0b"].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center" style={{ background: c }}>
                        <Flame size={14} color="white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#ffffff", fontWeight: 700, fontSize: "0.85rem" }}>50+ Famílias Formadas</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>Gurué · Chimoio · Moçambique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 rounded-2xl px-4 py-3"
            style={{ background: "#5aaa2a", boxShadow: "0 8px 32px rgba(90,170,42,0.5)" }}
          >
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#fff", fontSize: "1.1rem", textAlign: "center" }}>🌿</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: "0.7rem", fontWeight: 700, textAlign: "center" }}>ECO</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: "0.75rem" }}>Explorar</span>
        <ArrowDown size={16} color="#fff" />
      </motion.button>
    </section>
  );
}
