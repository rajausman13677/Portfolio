"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK } from "../lib/constants";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Work",     href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">

        {/* ── LEFT: Logo ── */}
        <a href="/" className="nav-logo-block">
          <div className="nav-avatar" style={{ overflow: "hidden", padding: 0 }}>
            <Image
              src="/images/img.jpeg"
              alt="Usman Zafar"
              width={40}
              height={40}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">USMAN</span>
            <span className="nav-logo-name">Zafar</span>
            <span className="nav-logo-tagline">CLIENT ACQUISITION STRATEGIST</span>
          </div>
        </a>

        {/* ── CENTER: Links ── */}
        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* ── RIGHT: CTAs + Theme toggle ── */}
        <div className="nav-right nav-cta-group">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="theme-toggle"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lime btn-sm"
          >
            Let&apos;s Work Together →
          </a>
          <a href="/contact" className="nav-account-link">CONTACT</a>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : undefined }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : undefined }} />
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile open"
            initial={{ opacity: 0, y: -8, scaleY: 0.92 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.92 }}
            transition={{ duration: 0.2 }}
            style={{ transformOrigin: "top" }}
          >
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            {/* Mobile theme toggle */}
            <button
              onClick={toggle}
              className="theme-toggle-mobile"
            >
              {theme === "dark" ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime"
              onClick={() => setMenuOpen(false)}
              style={{ justifyContent: "center" }}
            >
              Let&apos;s Work Together →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
