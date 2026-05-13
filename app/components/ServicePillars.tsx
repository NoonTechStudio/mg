"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import GridBackground from "./GridBackground";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const webServices = [
  "UI / UX Design",
  "Next.js / React Development",
  "E-commerce Platforms (Shopify + Custom)",
  "Branding & Identity",
  "Landing Pages & Funnels",
  "SEO Optimisation",
];

const softwareServices = [
  "Custom SaaS Platforms",
  "AI Integrations & Agents",
  "ERP & Admin Panels",
  "REST & GraphQL APIs",
  "Mobile App Backends",
  "Database Architecture",
];

const additionalCards = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L4 14v6h40v-6L24 4z" fill="#4285F4" />
        <rect x="4" y="20" width="40" height="4" fill="#34A853" />
        <rect x="4" y="24" width="8" height="20" fill="#FBBC05" />
        <rect x="36" y="24" width="8" height="20" fill="#EA4335" />
        <rect x="12" y="24" width="24" height="20" fill="#4285F4" opacity="0.7" />
      </svg>
    ),
    title: "Google Workspace",
    description:
      "Professional email, Drive, Meet, Docs — complete Google Workspace setup, migration, and management. Become the most organised business in your industry.",
    tag: "Certified Reseller",
    href: "/services/google-workspace",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="4" width="32" height="40" rx="4" fill="#1A3461" />
        <rect x="12" y="10" width="24" height="3" rx="1.5" fill="#00C9A7" />
        <rect x="12" y="16" width="18" height="3" rx="1.5" fill="#2E86DE" />
        <rect x="12" y="22" width="24" height="3" rx="1.5" fill="#00C9A7" />
        <rect x="12" y="28" width="16" height="3" rx="1.5" fill="#2E86DE" />
        <rect x="12" y="34" width="20" height="3" rx="1.5" fill="#00C9A7" />
      </svg>
    ),
    title: "AppSheet No-Code Apps",
    description:
      "Build powerful mobile and web apps from your Google Sheets data — without traditional coding. CRM, inventory, field tracking, HR — delivered in weeks.",
    tag: "Google Technology",
    href: "/services/appsheet",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        <path d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8z" fill="#2E86DE" opacity="0.2" />
        <path d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8z" stroke="#2E86DE" strokeWidth="2" fill="none" />
        <path d="M14 24c0-5.52 4.48-10 10-10" stroke="#00C9A7" strokeWidth="3" strokeLinecap="round" />
        <path d="M34 24c0 5.52-4.48 10-10 10" stroke="#00C9A7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#00C9A7" />
      </svg>
    ),
    title: "Cloud & Firebase",
    description:
      "Host, scale, and power your applications on Google Cloud Platform and Firebase. Setup, migration, and monthly management included.",
    tag: "GCP Partner",
    href: "/services/cloud",
  },
];

export default function ServicePillars() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <GridBackground variant="dots" opacity={0.04} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionLabel text="What We Do" />
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            Five pillars. One partner.
          </h2>
          <p className="text-mid-text text-lg max-w-2xl mx-auto leading-relaxed">
            From your first business website to enterprise cloud infrastructure — MeridianGrid
            covers every layer of your technology needs.
          </p>
        </div>

        {/* Two main pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Pillar 1 — Web */}
          <div
            className={`border border-blue-brand/15 rounded-2xl p-8 bg-surface card-hover teal-glow transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-xs font-semibold tracking-widest text-mid-text uppercase mb-4">
              01 / Digital Experiences
            </div>
            <div className="w-12 h-12 bg-teal-brand/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-teal-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-3">
              Web Design & Development
            </h3>
            <p className="text-mid-text leading-relaxed mb-6">
              Beautiful, conversion-focused websites and brand identities. Restaurants, retail,
              clinics, agencies — we craft digital experiences that grow your business.
            </p>
            <ul className="space-y-2 mb-8">
              {webServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-mid-text">
                  <span className="text-teal-brand">✓</span>
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services/web-design"
              className="text-teal-brand font-semibold text-sm hover:gap-3 flex items-center gap-2 transition-all group"
            >
              Explore Web Design
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Pillar 2 — Software */}
          <div
            className={`border border-blue-brand/15 rounded-2xl p-8 bg-navy text-white card-hover teal-glow transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
              02 / Software Engineering
            </div>
            <div className="w-12 h-12 bg-blue-brand/20 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-3">
              Custom Software & SaaS
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Enterprise-grade platforms, AI integrations, and automation tools that replace
              expensive off-the-shelf software and give your business a real competitive edge.
            </p>
            <ul className="space-y-2 mb-8">
              {softwareServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="text-teal-brand">✓</span>
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/services/software-development"
              className="text-teal-brand font-semibold text-sm flex items-center gap-2 group"
            >
              Explore Software Solutions
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* 3 additional cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalCards.map((card, i) => (
            <div
              key={card.title}
              className={`border border-blue-brand/15 rounded-2xl p-6 bg-white card-hover teal-glow transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="mb-4">{card.icon}</div>
              <span className="inline-block text-xs font-semibold bg-teal-brand/10 text-teal-brand px-3 py-1 rounded-full mb-3">
                {card.tag}
              </span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">{card.title}</h3>
              <p className="text-mid-text text-sm leading-relaxed mb-5">{card.description}</p>
              <Link
                href={card.href}
                className="text-teal-brand font-semibold text-sm flex items-center gap-2 group"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
