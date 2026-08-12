"use client";

const entries = [
  { badge: "LIVE WINS",   name: "Hamza",    text: "closed $4,200/month in retainer clients from LinkedIn in 6 weeks" },
  { badge: null,          name: "Ahmad",    text: "went from 0 Upwork contracts to Top Rated in 90 days" },
  { badge: null,          name: "Farida",   text: "replaced her 9-5 salary using LinkedIn outreach alone" },
  { badge: null,          name: "Bilal",    text: "landed 3 high-ticket clients in his first week on Upwork" },
  { badge: null,          name: "Sara",     text: "fully booked calendar in 45 days with zero ad spend" },
  { badge: null,          name: "Zain",     text: "+$8,000/month added through optimized LinkedIn profile" },
  { badge: "AVAILABLE",   name: null,       text: "now booking new clients for Q3 2026" },
  { badge: null,          name: "Mehreen",  text: "first Upwork client landed within 48 hours of profile revamp" },
  { badge: null,          name: "Omar",     text: "scaled freelance income 3x using proven outreach systems" },
  { badge: null,          name: "Usman",    text: "5★ rated across 50+ LinkedIn & Upwork growth projects" },
];

export default function StatusTicker() {
  const repeated = [...entries, ...entries, ...entries, ...entries];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {repeated.map((entry, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot">•</span>
            {entry.badge && <span className="ticker-badge">{entry.badge}</span>}
            {entry.name  && <span className="ticker-name">{entry.name}</span>}
            <span className="ticker-text">{entry.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
