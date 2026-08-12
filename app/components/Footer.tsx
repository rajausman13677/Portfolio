"use client";
import { useState } from "react";
import { AnimateIn, Stagger, StaggerItem } from "./AnimateIn";
import { EMAIL, PHONE_DISPLAY, LINKEDIN_URL, UPWORK_URL, WHATSAPP_LINK } from "../lib/constants";

const EMAILJS_SERVICE_ID  = "service_17h47ud";
const EMAILJS_TEMPLATE_ID = "template_gwpgm1l";
const EMAILJS_PUBLIC_KEY  = "AVe7YeABGWCJNufJv";

const footerLinks = {
  Work: [
    { label: "Case Studies",  href: "#work-grid",  external: false },
    { label: "All Projects",  href: "#",           external: false },
    { label: "Testimonials",  href: "#results",    external: false },
  ],
  Company: [
    { label: "About Me",  href: "#about",    external: false },
    { label: "Services",  href: "#services", external: false },
    { label: "Pricing",   href: "#services", external: false },
    { label: "Process",   href: "#",         external: false },
  ],
  Contact: [
    { label: "Book a Call",  href: WHATSAPP_LINK,         external: true },
    { label: PHONE_DISPLAY,  href: "tel:+923160987548",   external: false },
    { label: EMAIL,          href: `mailto:${EMAIL}`,     external: false },
    { label: "LinkedIn",     href: LINKEDIN_URL,          external: true },
    { label: "Upwork",       href: UPWORK_URL,            external: true },
  ],
};

export default function Footer() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [error,     setError]     = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSending(true);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            name:    "Newsletter Subscriber",
            email:   email,
            phone:   "N/A",
            service: "Newsletter Subscription",
            message: `New newsletter subscriber: ${email}`,
            time:    new Date().toLocaleString("en-PK", { dateStyle: "full", timeStyle: "short" }),
          },
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Newsletter EmailJS error:", res.status, errText);
        setError("Something went wrong. Please try again.");
        setSending(false);
        return;
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter network error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="footer-bright" id="footer">

      {/* ── Newsletter strip ── */}
      <div className="footer-bright-newsletter">
        <div className="container">
          <AnimateIn>
            <div className="footer-bright-nl-inner">
              <div>
                <p className="footer-bright-label">STAY IN THE LOOP</p>
                <h3 className="footer-bright-nl-headline">
                  LINKEDIN &amp; UPWORK{" "}
                  <span style={{
                    color: "#c6ff3d",
                    textDecoration: "underline",
                    textDecorationColor: "#c6ff3d",
                    textDecorationThickness: 3,
                    textUnderlineOffset: 6,
                  }}>
                    GROWTH TIPS
                  </span>
                </h3>
                <p className="footer-bright-nl-sub">
                  Weekly tactics for winning more clients. No fluff — just what&apos;s working right now.
                </p>
              </div>

              <div style={{ flexShrink: 0 }}>
                {submitted ? (
                  <div className="footer-bright-success">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    You&apos;re in! Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={subscribe} noValidate>
                    <div className="footer-bright-form-row">
                      <input
                        type="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setError(""); }}
                        placeholder="your@email.com"
                        aria-label="Email for newsletter"
                        className="footer-bright-input"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="btn btn-dark"
                        style={{ flexShrink: 0, opacity: sending ? 0.7 : 1 }}
                      >
                        {sending ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                              style={{ animation: "spin 1s linear infinite" }}>
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                            Sending...
                          </>
                        ) : "Subscribe"}
                      </button>
                    </div>
                    {error && <p style={{ color: "#e53e3e", fontSize: 12, marginTop: 6, paddingLeft: 4 }}>{error}</p>}
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="footer-bright-body">
        <div className="container">
          <Stagger className="footer-bright-grid" stagger={0.1}>

            {/* Brand column */}
            <StaggerItem>
              <div className="footer-bright-brand-logo">
                UZ<span className="footer-bright-brand-dot" />
              </div>
              <p className="footer-bright-brand-desc">
                Usman Zafar — LinkedIn &amp; Upwork strategist helping
                freelancers and consultants land consistent, high-value clients.
              </p>
              <div className="footer-bright-socials">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-bright-social">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" aria-label="Upwork" className="footer-bright-social">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
                  </svg>
                </a>
              </div>
            </StaggerItem>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <StaggerItem key={group}>
                <p className="footer-bright-col-title">{group}</p>
                <div className="footer-bright-col-links">
                  {links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="footer-bright-col-link"
                      style={{ wordBreak: "break-all" }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </StaggerItem>
            ))}

          </Stagger>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(10,10,10,0.1)", margin: "48px 0 28px" }} />

          {/* Bottom bar */}
          <AnimateIn delay={0.3}>
            <div className="footer-bright-bottom">
              <p className="footer-bright-copy">
                © {new Date().getFullYear()} Usman Zafar. All rights reserved.
              </p>
              <div className="footer-bright-bottom-links">
                <a href="#" className="footer-bright-bottom-link">Privacy Policy</a>
                <span style={{ color: "rgba(10,10,10,0.2)" }}>·</span>
                <a href="#" className="footer-bright-bottom-link">Terms of Service</a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

    </footer>
  );
}
