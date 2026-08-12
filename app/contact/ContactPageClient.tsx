"use client";
import StatusTicker from "../components/StatusTicker";
import Navbar       from "../components/Navbar";
import Contact      from "../components/Contact";
import Footer       from "../components/Footer";
import { WHATSAPP_LINK } from "../lib/constants";

export default function ContactPageClient() {
  return (
    <main>
      <StatusTicker />
      <Navbar />

      {/* ── Page hero strip ── */}
      <section
        style={{
          background: "#0a0a0a",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 72,
          paddingBottom: 72,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(198,255,61,0.07) 0%, transparent 70%)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 24, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#555",
          }}>
            <a href="/" style={{ color: "#555", transition: "color 0.2s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "#c6ff3d")}
               onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
              Home
            </a>
            <span>/</span>
            <span style={{ color: "#c6ff3d" }}>Contact</span>
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900, lineHeight: 1,
            letterSpacing: "-0.04em", textTransform: "uppercase",
            color: "#fff", marginBottom: 16,
          }}>
            LET&apos;S WORK{" "}
            <span style={{ color: "#c6ff3d", textShadow: "0 0 40px rgba(198,255,61,0.3)" }}>
              TOGETHER
            </span>
          </h1>

          <p style={{ fontSize: 18, color: "#8a8a8a", maxWidth: 500, margin: "0 auto" }}>
            Ready to build your client pipeline on LinkedIn and Upwork?
            Fill in the form below and I&apos;ll be in touch within 24 hours.
          </p>

          {/* Quick stats row */}
          <div style={{
            display: "flex", justifyContent: "center",
            flexWrap: "wrap", gap: 40, marginTop: 48,
            paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)",
          }}>
            {[
              { num: "50+",  label: "Clients Helped" },
              { num: "4.9★", label: "Average Rating" },
              { num: "24h",  label: "Response Time" },
              { num: "2+",   label: "Years Experience" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{
                  fontSize: 30, fontWeight: 900, color: "#c6ff3d",
                  letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 4,
                }}>{s.num}</p>
                <p style={{
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a8a",
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <Contact />

      {/* ── FAQ strip ── */}
      <section style={{
        background: "#0f0f0f", padding: "72px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div className="container">
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8a8a8a",
            marginBottom: 12, textAlign: "center",
          }}>
            FREQUENTLY ASKED
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, lineHeight: 1,
            letterSpacing: "-0.03em", textTransform: "uppercase",
            color: "#fff", textAlign: "center", marginBottom: 48,
          }}>
            QUICK ANSWERS
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24, maxWidth: 860, margin: "0 auto",
          }}>
            {[
              {
                q: "How fast will I see results?",
                a: "Most clients see meaningful profile improvements and first responses within 2–4 weeks. Full pipeline systems typically show results within 30–60 days.",
              },
              {
                q: "Do you offer a refund if it doesn't work?",
                a: "Yes — if you follow the strategy and don't see any improvement within 30 days, I'll work with you for free until you do. Your success is my reputation.",
              },
              {
                q: "Do I need an existing Upwork or LinkedIn account?",
                a: "No. I work with complete beginners starting from zero as well as established profiles that need a full refresh. Both are covered in my packages.",
              },
              {
                q: "How do we communicate during the project?",
                a: "Primarily via WhatsApp and email. For Growth and Done-For-You packages we also have scheduled video calls for strategy reviews.",
              },
            ].map(faq => (
              <div key={faq.q} style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "28px 24px",
              }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 10, lineHeight: 1.4 }}>
                  {faq.q}
                </p>
                <p style={{ fontSize: 14, color: "#8a8a8a", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
