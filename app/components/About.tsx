"use client";

import Image from "next/image";
import { AnimateIn } from "./AnimateIn";

export default function About() {
  return (
    <section className="about-section grid-texture" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Photo */}
          <AnimateIn y={40} delay={0.1}>
            <div className="about-photo-wrap">
              <div className="about-photo">
                <Image
                  src="/images/img.jpeg"
                  alt="Usman Zaffar"
                  width={400}
                  height={400}
                  priority
                  className="about-image"
                />
              </div>

              <div className="about-badge">
                <p className="about-badge-num">2+</p>
                <p className="about-badge-label">YEARS</p>
              </div>
            </div>
          </AnimateIn>

          {/* Story */}
          <div className="about-content">
            <AnimateIn delay={0.2}>
              <p className="label">ABOUT ME</p>
              <h2 className="about-headline">
                I WAS EXACTLY WHERE{" "}
                <span className="headline-accent">YOU ARE RIGHT NOW</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="about-body">
                <p className="about-p">
                  A few years ago I was a freelancer with real skills but an
                  empty calendar. I had set up my LinkedIn and Upwork profiles,
                  sent dozens of proposals every week, and heard almost nothing
                  back. I was starting to think the platforms just didn&apos;t
                  work.
                </p>

                <p
                  className="about-p about-p-highlight"
                >
                  Then I stopped guessing and started studying what actually
                  made top earners different — and it had almost nothing to do
                  with their skills.
                </p>

                <p className="about-p">
                  It was their <strong>positioning, their messaging, and
                  their systems</strong>. Their profiles spoke directly to
                  client pain points. Their proposals were personalised and
                  value-driven. Their outreach was strategic, not random.
                  Once I applied the same principles, everything changed.
                </p>

                <p className="about-p">
                  Since then I&apos;ve helped 50+ professionals —
                  consultants, agencies, freelancers, and service providers —
                  build the same kind of client acquisition engine on LinkedIn
                  and Upwork. No paid ads. No cold calling. Just
                  <strong> smart positioning and proven outreach</strong>
                  that works.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="about-stats">
                {[
                  { num: "50+",  label: "CLIENTS HELPED" },
                  { num: "2+",   label: "YEARS EXPERIENCE" },
                  { num: "$1M+", label: "CLIENT REVENUE GENERATED" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="about-stat-num">{s.num}</p>
                    <p className="about-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}