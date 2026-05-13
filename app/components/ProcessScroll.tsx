"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import GridBackground from "./GridBackground";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Discovery",
    description:
      "Deep-dive workshops to map your business goals, user journeys, technical constraints, and success metrics. We produce a detailed brief, scope, and timeline before writing a single line of code — zero surprises.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Architecture",
    description:
      "System design documents, ER diagrams, API contracts, and UI wireframes. We align on tech stack, infrastructure, and security model before build. You see exactly what you're getting before we start.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agile Build",
    description:
      "Two-week sprints with a working demo every Friday. Shared project board and Slack channel. Feedback actioned quickly — we never work in black boxes.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Launch & Train",
    description:
      "Zero-downtime deployment on your preferred cloud. Full documentation, recorded walkthroughs, and 30-day post-launch support. You own everything — code, infrastructure, knowledge.",
  },
];

export default function ProcessScroll() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-24 bg-surface overflow-hidden">
      <GridBackground variant="dots" opacity={0.04} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionLabel text="How We Work" />
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            No black boxes. Full transparency.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-blue-brand/15 z-0">
            {visible && (
              <div className="h-full bg-teal-brand/30 draw-line" />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Number — large bg */}
                <div className="relative mb-4">
                  <span className="absolute -top-6 -left-2 font-heading font-bold text-7xl text-navy/5 select-none pointer-events-none leading-none">
                    {step.number}
                  </span>
                  <div className="relative w-14 h-14 bg-white border-2 border-blue-brand/20 rounded-2xl flex items-center justify-center text-blue-brand shadow-sm">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-3">{step.title}</h3>
                <p className="text-mid-text text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
