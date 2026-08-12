"use client";
import { AnimateIn, Stagger, StaggerItem } from "./AnimateIn";
import { WHATSAPP_LINK } from "../lib/constants";

const projects = [
  {
    number: "01",
    tags: ["LinkedIn", "Profile Optimisation", "B2B Outreach"],
    title: "SaaS Consultant — From Invisible to 12 Leads/Week",
    description: "Rewrote an enterprise SaaS consultant's LinkedIn profile, built a targeted outreach sequence, and established a weekly content rhythm. Within 45 days he went from zero inbound to 12 qualified leads per week — without a single paid ad.",
    results: ["12 leads/week", "45-day turnaround"],
  },
  {
    number: "02",
    tags: ["Upwork", "Profile SEO", "Proposal Strategy"],
    title: "UX Designer — Top Rated in 90 Days",
    description: "A UX designer with no Upwork history needed to break in fast. Rebuilt her profile from the ground up with keyword-optimised copy, a portfolio presentation strategy, and templated proposals. She landed her first contract in 11 days and hit Top Rated status in 90 days.",
    results: ["Top Rated in 90 days", "First contract in 11 days"],
  },
  {
    number: "03",
    tags: ["LinkedIn", "Upwork", "Done-For-You"],
    title: "Boutique Agency — Full Pipeline Rebuilt",
    description: "A 3-person digital agency had stagnant LinkedIn and no Upwork presence. We handled full dual-platform setup, outreach campaigns, and proposal management for 3 months. They added $8,400/month in new retainer contracts and are now fully booked.",
    results: ["+$8,400/month", "Fully booked in 3 months"],
  },
];

export default function LatestWork() {
  return (
    <section className="work-section" id="work-grid">
      <div className="container">
        <AnimateIn className="work-header">
          <div>
            <p className="label">CASE STUDIES</p>
            <h2 className="work-headline">
              LATEST <span className="headline-accent">WINS</span>
            </h2>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="work-view-all">
            Work With Me
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </AnimateIn>

        <Stagger className="work-grid" stagger={0.12}>
          {projects.map(p => (
            <StaggerItem key={p.number}>
              <div className="work-card">
                <div className="work-card-thumb">
                  <span className="work-card-thumb-num">{p.number}</span>
                  <div className="work-card-thumb-fade" />
                </div>
                <div className="work-card-body">
                  <div className="work-tags">
                    {p.tags.map(t => <span key={t} className="work-tag">{t}</span>)}
                  </div>
                  <h3 className="work-card-title">{p.title}</h3>
                  <p className="work-card-desc">{p.description}</p>
                  <div className="work-results">
                    {p.results.map(r => <span key={r} className="work-result-pill">{r}</span>)}
                  </div>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="work-read-more">
                    Get Similar Results
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
