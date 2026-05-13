"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import GridBackground from "./GridBackground";

const aiCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
      </svg>
    ),
    title: "AI Agent",
    tagline: "Software that thinks, decides, and acts on your behalf.",
    description:
      "An AI Agent uses a large language model as its \"brain\" to understand goals, plan steps, use tools (browse the web, read files, call APIs), and complete complex tasks — without a human clicking through each step.",
    capabilities: [
      "Handles multi-step tasks end-to-end autonomously",
      "Uses tools: web search, code execution, database queries",
      "Remembers context across long workflows",
      "Escalates to humans only when genuinely stuck",
    ],
    example:
      "An AI Agent for a real-estate company reads incoming lead emails, checks CRM for duplicates, schedules a viewing, sends WhatsApp confirmation, and logs everything — in under 30 seconds.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI Automation",
    tagline: "Connect your tools. Eliminate repetitive work.",
    description:
      "Replace manual, rule-based workflows with intelligent pipelines that handle exceptions, understand natural language, and improve over time.",
    capabilities: [
      "Auto-classify and route customer support tickets",
      "Generate first-draft reports from raw data",
      "Extract structured data from PDFs and invoices",
      "Auto-respond to queries 24/7 in your brand's voice",
    ],
    example:
      "A manufacturer receives 200 supplier invoices weekly. AI reads each PDF, extracts line items, cross-checks inventory, flags anomalies, and pushes approved invoices to accounting — saving 20 hours weekly.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "RAG",
    tagline: "Give AI your knowledge. Get hyper-accurate answers.",
    description:
      "Combines a large language model with your own documents and databases. Instead of guessing, it searches your knowledge base first and generates accurate, cited answers.",
    capabilities: [
      "Customer support bot trained on your product docs",
      "Internal HR assistant that knows your exact policies",
      "Legal Q&A tool grounded in your contracts",
      "Zero hallucinations — every answer is traceable",
    ],
    example:
      "A pharma company deploys a RAG chatbot on their product catalogue. Sales reps ask questions in plain English and get precise, regulation-compliant answers.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: "Workflow Automation",
    tagline: "Connect every tool into one seamless flow.",
    description:
      "Links your CRM, email, messaging, ERP, and other tools so actions in one automatically trigger actions in others. With AI in the loop, the system makes intelligent decisions at each step.",
    capabilities: [
      "Lead captured → CRM updated → Email sent → Task assigned",
      "Order placed → Inventory checked → Invoice → Courier booked",
      "Support ticket → Auto-diagnosed → Routed to right team",
      "New hire → Accounts created → Onboarding tasks assigned",
    ],
    example:
      "A logistics company automates order-to-delivery — driver assignment, route optimisation, customer SMS, delivery confirmation — saving 4 FTEs of coordination.",
  },
];

export default function AISection() {
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
    <section id="ai-section" className="relative py-24 bg-navy overflow-hidden">
      <GridBackground variant="lines" opacity={0.07} dark />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionLabel text="AI & Automation" />
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            What does AI actually do for your business?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            AI isn&apos;t a buzzword. For businesses of every size, it&apos;s the most powerful tool for saving
            time, reducing errors, and scaling operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-[#0A1628] border border-white/10 rounded-2xl p-7 card-hover transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-teal-brand/15 rounded-xl flex items-center justify-center text-teal-brand mb-5">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">{card.title}</h3>
              <p className="text-teal-brand text-sm font-medium mb-3">{card.tagline}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{card.description}</p>

              {/* Capabilities */}
              <ul className="space-y-2 mb-6">
                {card.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-brand flex-shrink-0 mt-1.5" />
                    {cap}
                  </li>
                ))}
              </ul>

              {/* Example */}
              <div className="border border-dashed border-teal-brand/30 rounded-xl p-4 bg-teal-brand/5">
                <p className="text-xs font-semibold text-teal-brand uppercase tracking-wider mb-2">
                  Real Example
                </p>
                <p className="text-white/50 text-sm leading-relaxed italic">{card.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
