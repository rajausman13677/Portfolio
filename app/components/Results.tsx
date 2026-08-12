"use client";
import { AnimateIn, Stagger, StaggerItem } from "./AnimateIn";

type ResultItem =
  | { type: "stat";        bg: string; dark: boolean; stat: string; label: string }
  | { type: "testimonial"; bg: string; dark: boolean; quote: string; author: string; role: string }
  | { type: "message";     bg: string; dark: boolean; message: string; sender: string };

const items: ResultItem[] = [
  {
    type: "stat", bg: "#C6FF3D", dark: true,
    stat: "$12K+", label: "In new monthly recurring revenue generated for a single client through LinkedIn outreach in 60 days.",
  },
  {
    type: "testimonial", bg: "#151515", dark: false,
    quote: "I had been on Upwork for a year with no traction. Usman rewrote my profile, coached me on proposals, and within 3 weeks I had my first $2,000 contract. He knows exactly what clients are looking for.",
    author: "Daniel Reeves", role: "UX Designer, London",
  },
  {
    type: "stat", bg: "#1A1A1A", dark: false,
    stat: "50+", label: "Professionals helped to land consistent clients on LinkedIn and Upwork across 10+ industries.",
  },
  {
    type: "message", bg: "#F4F4F0", dark: true,
    message: "Usman bhai just got my first Upwork response within 24 hours of sending the proposals you helped me write. Client wants to hop on a call tomorrow 🔥",
    sender: "Bilal A. — Upwork Client",
  },
  {
    type: "testimonial", bg: "#0F0F0F", dark: false,
    quote: "Usman built our entire LinkedIn lead generation system from scratch. We went from manually hunting for clients to having 8-12 qualified leads land in our inbox every single week.",
    author: "Priya Mehta", role: "Founder, Clarix Consulting",
  },
  {
    type: "stat", bg: "#C6FF3D", dark: true,
    stat: "4.9★", label: "Average rating across all completed LinkedIn & Upwork growth engagements.",
  },
  {
    type: "message", bg: "#151515", dark: false,
    message: "Just hit Top Rated on Upwork this morning! 6 months ago I had zero reviews. Your profile strategy + proposal templates made all the difference. Thank you Usman!",
    sender: "Sara M. — Upwork Client",
  },
  {
    type: "testimonial", bg: "#1C1C1C", dark: false,
    quote: "We hired Usman to optimise our company LinkedIn page and personal profiles for our sales team. Lead quality improved dramatically and our connection-to-meeting rate went from 4% to 19%.",
    author: "Marcus Holloway", role: "Head of Sales, Nexora B2B",
  },
];

export default function Results() {
  return (
    <section className="results-section" id="results">
      <div className="container">
        <AnimateIn className="results-header">
          <p className="label">SOCIAL PROOF</p>
          <h2 className="section-headline headline-white">
            RESULTS THAT <span className="headline-accent">SPEAK FOR THEMSELVES</span>
          </h2>
        </AnimateIn>

        <Stagger className="masonry" stagger={0.08}>
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div
                className="masonry-item"
                data-dark={String(!item.dark)}
                style={{ background: item.bg, boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
              >

                {item.type === "stat" && (
                  <>
                    <p className="result-stat-num" style={{ color: item.dark ? "#0a0a0a" : "#fff" }}>{item.stat}</p>
                    <p className="result-stat-label" style={{ color: item.dark ? "rgba(10,10,10,0.6)" : "#8a8a8a" }}>{item.label}</p>
                  </>
                )}

                {item.type === "testimonial" && (
                  <>
                    <div className="result-stars">
                      {[1,2,3,4,5].map(j => (
                        <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="#C6FF3D">
                          <path d="M10 0l2.939 6.338 6.912.632-5.128 4.67 1.464 6.86L10 15.28 3.813 18.5l1.464-6.86L.149 6.97l6.912-.632L10 0z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="result-quote" style={{ color: "#fff" }}>&quot;{item.quote}&quot;</p>
                    <div className="result-author-row">
                      <div className="result-avatar">{item.author.split(" ").map((n: string) => n[0]).join("")}</div>
                      <div>
                        <p className="result-name">{item.author}</p>
                        <p className="result-role">{item.role}</p>
                      </div>
                    </div>
                  </>
                )}

                {item.type === "message" && (
                  <>
                    <div className="msg-dot-row">
                      <span className="msg-dot" />
                      <span className="msg-label" style={{ color: item.dark ? "rgba(10,10,10,0.45)" : "#8a8a8a" }}>Client Message</span>
                    </div>
                    <p className="msg-text" style={{ color: item.dark ? "#0a0a0a" : "#fff" }}>{item.message}</p>
                    <p className="msg-sender" style={{ color: item.dark ? "rgba(10,10,10,0.5)" : "#8a8a8a" }}>— {item.sender}</p>
                  </>
                )}

              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
