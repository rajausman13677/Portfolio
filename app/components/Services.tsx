"use client";
import { AnimateIn, Stagger, StaggerItem } from "./AnimateIn";
import { WHATSAPP_LINK } from "../lib/constants";

const packages = [
  {
    name: "Starter", price: "$50", period: "one-time", popular: false, cta: "Get Started",
    description: "For freelancers and consultants who need a strong foundation on LinkedIn or Upwork to start attracting clients.",
    features: [
      "Full LinkedIn or Upwork profile audit",
      "Headline, summary & positioning rewrite",
      "Keyword optimisation for search visibility",
      "Profile photo & banner recommendations",
      "5 custom proposal templates",
      "1 revision round included",
    ],
  },
  {
    name: "Growth", price: "$100", period: "one-time", popular: true, cta: "Get Started",
    description: "For professionals serious about building a consistent pipeline of inbound leads and high-value contracts.",
    features: [
      "Everything in Starter",
      "LinkedIn + Upwork full dual-platform setup",
      "Custom outreach message sequences (cold DMs)",
      "Lead generation strategy & ICP targeting",
      "Connection & proposal campaign setup",
      "Content strategy for thought leadership",
      "30-day action plan with weekly milestones",
      "2 x 60-min coaching calls included",
    ],
  },
  {
    name: "Done-For-You", price: "Custom", period: "monthly retainer", popular: false, cta: "Book a Call",
    description: "We handle your entire LinkedIn and Upwork business development so you focus only on delivering client work.",
    features: [
      "Full profile management & ongoing optimisation",
      "Daily outreach & lead generation (done for you)",
      "Proposal writing for every Upwork job post",
      "Weekly performance reports & analytics",
      "CRM setup to track leads & follow-ups",
      "Priority support — response within 4 hours",
      "Dedicated account strategist",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <AnimateIn className="services-header">
          <p className="label">PACKAGES & PRICING</p>
          <h2 className="section-headline headline-dark">
            BUILT TO FIT YOUR <span className="pain-headline-mark">GOALS</span>
          </h2>
        </AnimateIn>

        <Stagger className="services-grid" stagger={0.12}>
          {packages.map(pkg => (
            <StaggerItem key={pkg.name}>
              <div className={`pkg-card${pkg.popular ? " popular" : ""}`}>
                {pkg.popular && <div className="pkg-badge">Most Popular</div>}
                <p className="pkg-name">{pkg.name}</p>
                <p className="pkg-price">{pkg.price}</p>
                <p className="pkg-period">{pkg.period}</p>
                <p className="pkg-desc">{pkg.description}</p>
                <ul className="pkg-features">
                  {pkg.features.map(f => (
                    <li key={f} className="pkg-feature">
                      <div className="pkg-check">
                        <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="#C6FF3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={pkg.cta === "Book a Call" ? WHATSAPP_LINK : WHATSAPP_LINK}
                   target="_blank" rel="noopener noreferrer"
                   className={`btn ${pkg.popular ? "btn-lime" : "btn-dark"}`}
                   style={{ width: "100%", justifyContent: "center" }}>
                  {pkg.cta}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <AnimateIn delay={0.3}>
          <p className="services-footer-note">
            Not sure which plan is right for you?{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Let&apos;s talk on WhatsApp</a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
