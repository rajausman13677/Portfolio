import { AnimateIn } from "./AnimateIn";
import { WHATSAPP_LINK } from "../lib/constants";

export default function ClosingCTA() {
  return (
    <section className="closing-section grid-texture">
      <div className="closing-glow" />
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <AnimateIn>
          <p className="label" style={{ textAlign: "center", marginBottom: 24 }}>LET&apos;S BUILD YOUR PIPELINE</p>
          <h2 className="closing-headline">
            READY TO WAKE UP TO{" "}
            <span className="headline-accent" style={{ textShadow: "0 0 40px rgba(198,255,61,0.35)" }}>
              CLIENT MESSAGES?
            </span>
          </h2>
          <p className="closing-sub">
            Whether you want to dominate LinkedIn, win on Upwork, or both —
            I&apos;ll build you the system that makes qualified clients come to you
            instead of you chasing them.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lime btn-lg"
            style={{ boxShadow: "0 0 40px rgba(198,255,61,0.3)" }}
          >
            Book Your Free Strategy Call
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="closing-note">30-minute call · Zero pressure · Walk away with a clear action plan</p>
        </AnimateIn>
      </div>
    </section>
  );
}
