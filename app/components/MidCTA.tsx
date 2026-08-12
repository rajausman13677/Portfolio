import { AnimateIn } from "./AnimateIn";
import { WHATSAPP_LINK } from "../lib/constants";

export default function MidCTA() {
  return (
    <section className="midcta-section grid-texture">
      <div className="midcta-line" />
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <AnimateIn>
          <p className="label" style={{ textAlign: "center", marginBottom: 24 }}>READY TO GROW?</p>
          <h2 className="midcta-headline">
            STOP LEAVING MONEY ON THE TABLE WITH A{" "}
            <span className="headline-accent" style={{ textShadow: "0 0 30px rgba(198,255,61,0.35)" }}>
              WEAK PROFILE
            </span>
          </h2>
          <p className="midcta-sub">
            Every day your LinkedIn or Upwork profile isn&apos;t optimised is a day
            a qualified client picks your competitor instead of you.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lime btn-lg"
          >
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="midcta-note">No commitment. 30-minute call. Actionable advice you can use immediately.</p>
        </AnimateIn>
      </div>
    </section>
  );
}
