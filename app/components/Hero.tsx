"use client";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { WHATSAPP_LINK } from "../lib/constants";

const specialties = [
  "LinkedIn profile optimisation & personal branding",
  "Upwork profile setup, SEO & proposal writing",
  "B2B lead generation & outreach systems",
  "Client acquisition funnels that close deals",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="hero grid-texture" style={{ cursor: "default" }}>
      <div className="hero-glow" />
      <HeroBackground />
      <div className="container" style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
        <div className="hero-grid" style={{ pointerEvents: "auto" }}>

          {/* LEFT */}
          <div>

            {/* ── Pill label badge ── */}
            <motion.div
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(198,255,61,0.12)",
                border: "1px solid rgba(198,255,61,0.35)",
                borderRadius: "9999px",
                padding: "6px 16px 6px 8px",
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#c6ff3d",
                  boxShadow: "0 0 8px rgba(198,255,61,0.8)",
                  flexShrink: 0,
                  animation: "pulse 2s infinite",
                }} />
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#c6ff3d",
                }}>
                  Freelance Growth Strategist
                </span>
              </span>
            </motion.div>

            {/* ── Main headline ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <h1 style={{ marginBottom: 24, lineHeight: 1 }}>
                {/* Line 1 — big white */}
                <span style={{
                  display: "block",
                  fontSize: "clamp(52px, 7.5vw, 96px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  color: "var(--hero-text, #ffffff)",
                  lineHeight: 0.95,
                }}>
                  YOUR NEXT CLIENT
                </span>

                {/* Line 2 — lime accent same size */}
                <span style={{
                  display: "block",
                  fontSize: "clamp(52px, 7.5vw, 96px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  color: "#c6ff3d",
                  lineHeight: 0.95,
                  textShadow: "0 0 48px rgba(198,255,61,0.25)",
                }}>
                  IS ALREADY ONLINE.
                </span>

                {/* Line 3 — thin separator line */}
                <span style={{
                  display: "block",
                  width: 64,
                  height: 3,
                  background: "var(--hero-rule, rgba(255,255,255,0.15))",
                  borderRadius: 2,
                  margin: "20px 0 18px",
                }} />

                {/* Line 4 — subtitle, readable size */}
                <span style={{
                  display: "block",
                  fontSize: "clamp(18px, 2.2vw, 28px)",
                  fontWeight: 400,
                  letterSpacing: "0em",
                  textTransform: "none",
                  color: "var(--hero-sub-inline, #aaaaaa)",
                  lineHeight: 1.5,
                }}>
                  I&apos;ll make sure they choose{" "}
                  <span style={{
                    fontWeight: 800,
                    color: "var(--hero-text, #ffffff)",
                    background: "rgba(198,255,61,0.15)",
                    borderRadius: 4,
                    padding: "0 6px",
                  }}>you.</span>
                </span>
              </h1>
            </motion.div>

            {/* ── Platform badges ── */}
            <motion.div
              style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease }}
            >
              {[
                { label: "LinkedIn", color: "#0077b5", icon: "in" },
                { label: "Upwork",   color: "#14a800", icon: "up" },
              ].map(p => (
                <span key={p.label} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "var(--hero-badge-bg, rgba(255,255,255,0.06))",
                  border: "1px solid var(--hero-badge-border, rgba(255,255,255,0.12))",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--hero-text, #fff)",
                  letterSpacing: "0.02em",
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: 4,
                    background: p.color,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 900, color: "#fff",
                    flexShrink: 0,
                  }}>
                    {p.icon}
                  </span>
                  {p.label}
                </span>
              ))}
              <span style={{
                fontSize: 13, fontWeight: 500, color: "#8a8a8a",
                alignSelf: "center", paddingLeft: 4,
              }}>
                specialist
              </span>
            </motion.div>

            {/* ── Subtext ── */}
            <motion.p className="hero-sub"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease }}>
              No guesswork. No cold-calling strangers. Just proven systems that
              position you as the go-to expert and bring qualified clients directly
              to your inbox — consistently.
            </motion.p>

            {/* ── Checklist ── */}
            <motion.div className="hero-checklist"
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } } }}>
              {specialties.map(s => (
                <motion.div key={s} className="hero-check-item"
                  variants={{
                    hidden:  { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
                  }}>
                  <div className="hero-check-icon">
                    <svg width="10" height="8" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5l3.5 3.5L11 1" stroke="#C6FF3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="hero-check-label">{s}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div className="hero-ctas"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78, ease }}>
              <a href="#services" className="btn btn-lime btn-lg">See My Services</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Book a Free Call</a>
            </motion.div>

            {/* ── Stats ── */}
            <motion.div className="hero-stats"
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.92 } } }}>
              {[
                { num: "50+",  label: "CLIENTS HELPED" },
                { num: "4.9★", label: "AVERAGE RATING" },
                { num: "2+",   label: "YEARS EXPERIENCE" },
              ].map(s => (
                <motion.div key={s.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
                  <p className="hero-stat-num">{s.num}</p>
                  <p className="hero-stat-label">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Testimonial Card */}
          <motion.div style={{ display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, x: 48, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}>
            <div className="hero-card">
              <div className="hero-card-stars">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="17" height="17" viewBox="0 0 20 20" fill="#C6FF3D">
                    <path d="M10 0l2.939 6.338 6.912.632-5.128 4.67 1.464 6.86L10 15.28 3.813 18.5l1.464-6.86L.149 6.97l6.912-.632L10 0z" />
                  </svg>
                ))}
              </div>
              <p className="hero-card-quote">
                &quot;Usman revamped my LinkedIn profile and built an outreach system
                from scratch. Within 30 days I had 4 discovery calls booked and closed
                2 high-ticket clients. Absolute game changer.&quot;
              </p>
              <div className="hero-card-author">
                <div className="hero-card-avatar">JK</div>
                <div>
                  <p className="hero-card-name">James Kowalski</p>
                  <p className="hero-card-role">B2B Consultant, Warsaw</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Pulse keyframe injected inline */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
