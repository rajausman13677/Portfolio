"use client";
import { AnimateIn, Stagger, StaggerItem } from "./AnimateIn";

const painPoints = [
  {
    num: "01",
    title: "Your LinkedIn profile gets views but zero inquiries?",
    body: "You show up in searches but no one reaches out. Your profile looks incomplete, generic, or fails to communicate the value you actually deliver to clients.",
  },
  {
    num: "02",
    title: "Sending Upwork proposals into a black hole?",
    body: "You spend hours writing proposals and hear nothing back. Your profile isn't optimised, your bid isn't positioned right, and you're competing on price instead of value.",
  },
  {
    num: "03",
    title: "No consistent flow of inbound leads?",
    body: "Some months are great, others are dead silent. You have no repeatable system — just hoping someone reaches out. That's not a business, that's a gamble.",
  },
  {
    num: "04",
    title: "Struggling to stand out from thousands of freelancers?",
    body: "Every client you want is being approached by 50 other people. Without a clear positioning and a compelling offer, you're invisible — no matter how good you are.",
  },
  {
    num: "05",
    title: "Wasting time on low-quality leads who don't convert?",
    body: "You take every call but most prospects aren't serious. Your outreach isn't pre-qualifying the right people and you're burning hours on conversations that go nowhere.",
  },
  {
    num: "06",
    title: "Just starting on LinkedIn or Upwork with no traction?",
    body: "You've set up a profile but have no reviews, no connections, no strategy. You don't know where to start and every day without clients costs you real money.",
  },
];

export default function PainPoints() {
  return (
    <section className="pain-section" id="work">
      <div className="container">
        <AnimateIn className="pain-header">
          <p className="label">THE PROBLEM</p>
          <h2 className="pain-headline">
            DOES THIS SOUND <span className="pain-headline-mark">LIKE YOU?</span>
          </h2>
        </AnimateIn>

        <Stagger className="pain-grid">
          {painPoints.map(p => (
            <StaggerItem key={p.num}>
              <div className="pain-card">
                <span className="pain-card-ghost" aria-hidden="true">{p.num}</span>
                <p className="pain-card-num">{p.num}</p>
                <h3 className="pain-card-title">{p.title}</h3>
                <p className="pain-card-body">{p.body}</p>
                <div className="pain-card-cta">
                  I can fix this
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
