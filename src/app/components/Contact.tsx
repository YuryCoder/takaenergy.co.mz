import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/580525159_1994837317976380_6690632907568599332_n.jpg";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", interest: "briquetes" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "", interest: "briquetes" });
  };

  return (
    <section id="contacto" className="py-24" style={{ background: "#ffffff" }}>
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
              Contacto
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a2e1a", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Vamos trabalhar{" "}
            <span style={{ color: "#5aaa2a" }}>juntos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <img src={logoImg} alt="Taka Energy" className="w-16 h-16 rounded-2xl object-contain" />
              <div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a2e1a", fontSize: "1.5rem" }}>Taka Energy</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.9rem" }}>Transformando Resíduos em Energia Limpa</div>
              </div>
            </div>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "1rem", lineHeight: 1.8 }}>
              Seja para encomender briquetes, instalar um biodigestor, fazer uma parceria, ou simplesmente saber mais sobre o que fazemos — estamos aqui. Entre em contacto e fazemos chegar energia limpa até si.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { Icon: Mail, label: "Email", value: "info.takaenergy@gmail.com", href: "mailto:info.takaenergy@gmail.com" },
                { Icon: Phone, label: "Telefone / WhatsApp", value: "+258 848 391 428", href: "tel:+258848391428" },
                { Icon: MapPin, label: "Localização", value: "Chimoio · Gurué · Moçambique", href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#e8f5e0" }}>
                    <Icon size={18} color="#5aaa2a" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5a7a5a", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.95rem", fontWeight: 600 }} className="hover:text-[#5aaa2a] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.95rem", fontWeight: 600 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "#e8f5e0", color: "#5aaa2a" }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8"
              style={{ background: "#f7fdf4", border: "1px solid rgba(90,170,42,0.15)" }}
            >
              {sent && (
                <div
                  className="mb-6 rounded-2xl p-4 text-center"
                  style={{ background: "#e8f5e0", border: "1px solid #5aaa2a" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#5aaa2a", fontWeight: 700 }}>
                    ✓ Mensagem enviada! Entraremos em contacto em breve.
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.85rem", fontWeight: 600 }}>Nome *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome"
                      className="mt-1.5 w-full px-4 py-3 rounded-xl outline-none transition-all"
                      style={{ background: "#ffffff", border: "1px solid rgba(90,170,42,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#1a2e1a" }}
                      onFocus={e => (e.target.style.borderColor = "#5aaa2a")}
                      onBlur={e => (e.target.style.borderColor = "rgba(90,170,42,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.85rem", fontWeight: 600 }}>Telefone</label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+258 8X XXX XXXX"
                      className="mt-1.5 w-full px-4 py-3 rounded-xl outline-none transition-all"
                      style={{ background: "#ffffff", border: "1px solid rgba(90,170,42,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#1a2e1a" }}
                      onFocus={e => (e.target.style.borderColor = "#5aaa2a")}
                      onBlur={e => (e.target.style.borderColor = "rgba(90,170,42,0.2)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.85rem", fontWeight: 600 }}>Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{ background: "#ffffff", border: "1px solid rgba(90,170,42,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#1a2e1a" }}
                    onFocus={e => (e.target.style.borderColor = "#5aaa2a")}
                    onBlur={e => (e.target.style.borderColor = "rgba(90,170,42,0.2)")}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.85rem", fontWeight: 600 }}>Interesse</label>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="mt-1.5 w-full px-4 py-3 rounded-xl outline-none transition-all cursor-pointer"
                    style={{ background: "#ffffff", border: "1px solid rgba(90,170,42,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#1a2e1a" }}
                  >
                    <option value="briquetes">Briquetes Ecológicos</option>
                    <option value="biodigestor">Biodigestor</option>
                    <option value="mudas">Viveiros e Mudas</option>
                    <option value="parceria">Parceria / Investimento</option>
                    <option value="formacao">Formação Comunitária</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a2e1a", fontSize: "0.85rem", fontWeight: 600 }}>Mensagem *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                    style={{ background: "#ffffff", border: "1px solid rgba(90,170,42,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#1a2e1a" }}
                    onFocus={e => (e.target.style.borderColor = "#5aaa2a")}
                    onBlur={e => (e.target.style.borderColor = "rgba(90,170,42,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #5aaa2a, #3aacdc)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                >
                  <Send size={18} />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
