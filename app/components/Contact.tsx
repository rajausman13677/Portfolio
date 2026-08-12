"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AnimateIn } from "./AnimateIn";
import {
  PHONE_DISPLAY, EMAIL, LINKEDIN_URL, UPWORK_URL, WHATSAPP_LINK,
} from "../lib/constants";

/*
  ─── EmailJS Setup Instructions ───
  1. Go to https://www.emailjs.com and create a free account
  2. Add an Email Service (Gmail recommended) → copy SERVICE_ID
  3. Create an Email Template with variables:
       {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{message}}
     → copy TEMPLATE_ID
  4. Go to Account → API Keys → copy PUBLIC_KEY
  5. Replace the three placeholder strings below
*/
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const services = [
  "Starter — $165 (Profile Audit & Optimisation)",
  "Growth — $325 (Full Dual-Platform Setup)",
  "Done-For-You — Custom Retainer",
  "Not sure yet — need advice",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    if (!data.get("from_name"))    e.from_name  = "Name is required.";
    if (!data.get("from_email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("from_email"))))
                                   e.from_email = "Valid email is required.";
    if (!data.get("message"))      e.message    = "Please tell me a bit about your goals.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const errs = validate(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0a0a0a",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(198,255,61,0.06) 0%, transparent 70%)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <AnimateIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="label" style={{ textAlign: "center", marginBottom: 12 }}>
              GET IN TOUCH
            </p>
            <h2 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900, lineHeight: 1,
              letterSpacing: "-0.03em", textTransform: "uppercase", color: "#fff",
              marginBottom: 16,
            }}>
              LET&apos;S BUILD YOUR{" "}
              <span style={{ color: "#c6ff3d" }}>CLIENT PIPELINE</span>
            </h2>
            <p style={{ fontSize: 17, color: "#8a8a8a", maxWidth: 520, margin: "0 auto" }}>
              Fill in the form and I&apos;ll get back to you within 24 hours.
              Or reach me directly below.
            </p>
          </div>
        </AnimateIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          maxWidth: 960,
          margin: "0 auto",
        }}
          className="contact-grid"
        >

          {/* ── LEFT: Contact info ── */}
          <AnimateIn delay={0.1} y={24}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Info cards */}
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c6ff3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: "WhatsApp / Phone",
                  value: PHONE_DISPLAY,
                  href: WHATSAPP_LINK,
                  external: true,
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c6ff3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                  external: false,
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "linkedin.com/in/usman-zafar",
                  href: LINKEDIN_URL,
                  external: true,
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14a800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                  ),
                  label: "Upwork",
                  value: "View Upwork Profile",
                  href: UPWORK_URL,
                  external: true,
                },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    background: "#111", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16, padding: "18px 20px",
                    transition: "border-color 0.2s, transform 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(198,255,61,0.35)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "rgba(198,255,61,0.08)",
                    border: "1px solid rgba(198,255,61,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: 3 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Response time badge */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "rgba(198,255,61,0.08)",
                border: "1px solid rgba(198,255,61,0.2)",
                borderRadius: 12, padding: "14px 18px",
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#c6ff3d",
                  boxShadow: "0 0 8px rgba(198,255,61,0.8)",
                }} />
                <p style={{ fontSize: 13, color: "#c6ff3d", fontWeight: 600 }}>
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* ── RIGHT: Form ── */}
          <AnimateIn delay={0.2} y={24}>
            <div style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 28,
              padding: "40px 36px",
            }}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "40px 0" }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: "rgba(198,255,61,0.15)",
                    border: "2px solid #c6ff3d",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M6 16l8 8 12-14" stroke="#c6ff3d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 12 }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: 16, color: "#8a8a8a", lineHeight: 1.7 }}>
                    Thanks for reaching out. Usman will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: 24, background: "rgba(198,255,61,0.1)",
                      border: "1px solid rgba(198,255,61,0.3)",
                      borderRadius: 9999, padding: "10px 24px",
                      color: "#c6ff3d", fontSize: 13, fontWeight: 700,
                      cursor: "pointer", letterSpacing: "0.08em",
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                    {/* Name + Email row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input name="from_name" type="text" placeholder="Usman Zaffar"
                          style={inputStyle(!!errors.from_name)} />
                        {errors.from_name && <p style={errStyle}>{errors.from_name}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input name="from_email" type="email" placeholder="you@example.com"
                          style={inputStyle(!!errors.from_email)} />
                        {errors.from_email && <p style={errStyle}>{errors.from_email}</p>}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input name="phone" type="tel" placeholder="+92-300-0000000"
                        style={inputStyle(false)} />
                    </div>

                    {/* Service select */}
                    <div>
                      <label style={labelStyle}>Which service interests you?</label>
                      <select name="service" defaultValue="" style={{
                        ...inputStyle(false),
                        appearance: "none",
                        cursor: "pointer",
                      }}>
                        <option value="" disabled>Select a package...</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Tell me about your goals *</label>
                      <textarea name="message" rows={5}
                        placeholder="e.g. I'm a freelance developer struggling to get clients on Upwork. I want to set up a proper profile and outreach system..."
                        style={{ ...inputStyle(!!errors.message), resize: "vertical", minHeight: 120 }}
                      />
                      {errors.message && <p style={errStyle}>{errors.message}</p>}
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <div style={{
                        background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                        borderRadius: 10, padding: "12px 16px",
                        fontSize: 14, color: "#f87171",
                      }}>
                        Something went wrong. Please email directly at {EMAIL}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-lime"
                      style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "16px 24px", opacity: status === "sending" ? 0.7 : 1 }}
                    >
                      {status === "sending" ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                            style={{ animation: "spin 1s linear infinite" }}>
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p style={{ fontSize: 12, color: "#555", textAlign: "center" }}>
                      🔒 Your information is private and will never be shared.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </AnimateIn>

        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .contact-grid { grid-template-columns: 1fr 1.4fr; } }
        .form-row { grid-template-columns: 1fr; }
        @media (min-width: 480px) { .form-row { grid-template-columns: 1fr 1fr; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: #444; }
        select option { background: #111; color: #fff; }
      `}</style>
    </section>
  );
}

/* ── Shared style helpers ── */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#8a8a8a",
  marginBottom: 8,
};

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    background: "#0a0a0a",
    border: `1px solid ${hasError ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 12,
    padding: "13px 16px",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };
}

const errStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#f87171",
  marginTop: 5,
  paddingLeft: 4,
};
