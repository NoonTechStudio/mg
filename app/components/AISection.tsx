"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bot, Zap, Database, GitBranch } from "lucide-react";

const aiCards = [
  {
    icon: Bot,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "AI Agent",
    tagline: "Software that thinks, decides, and acts on your behalf.",
    description:
      "An AI Agent uses a large language model as its brain to understand goals, plan steps, use tools, and complete complex tasks — without a human clicking through each step.",
    capabilities: [
      "Handles multi-step tasks end-to-end autonomously",
      "Uses tools: web search, code execution, database queries",
      "Remembers context across long workflows",
      "Escalates to humans only when genuinely stuck",
    ],
    example:
      "A real-estate firm's AI Agent reads incoming lead emails, checks CRM for duplicates, schedules a viewing, sends WhatsApp confirmation, and logs everything — in under 30 seconds.",
  },
  {
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
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
      "A manufacturer receives 200 supplier invoices weekly. AI reads each PDF, extracts line items, flags anomalies, and pushes approved invoices to accounting — saving 20 hours weekly.",
  },
  {
    icon: Database,
    color: "text-teal-brand",
    bg: "bg-teal-brand/8",
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
      "A pharma company's RAG chatbot answers sales reps' questions in plain English with precise, regulation-compliant answers from the product catalogue.",
  },
  {
    icon: GitBranch,
    color: "text-blue-brand",
    bg: "bg-blue-brand/8",
    title: "Workflow Automation",
    tagline: "Connect every tool into one seamless flow.",
    description:
      "Links your CRM, email, messaging, ERP, and other tools so actions in one automatically trigger actions in others — with AI making intelligent decisions at each step.",
    capabilities: [
      "Lead captured → CRM updated → Email sent → Task assigned",
      "Order placed → Inventory checked → Invoice → Courier booked",
      "Support ticket → Auto-diagnosed → Routed to right team",
      "New hire → Accounts created → Onboarding tasks assigned",
    ],
    example:
      "A logistics company automates order-to-delivery: driver assignment, route optimisation, customer SMS, delivery confirmation — saving 4 FTEs of coordination.",
  },
];

export default function AISection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="ai-section" className="relative bg-surface overflow-hidden py-24">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines-bg pointer-events-none opacity-100" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Badge variant="outline" className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase">
            AI & Automation
          </Badge>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            What does AI actually do for your business?
          </h2>
          <p className="text-mid-text text-lg max-w-2xl mx-auto leading-relaxed">
            AI isn&apos;t a buzzword. For businesses of every size, it&apos;s the most powerful tool
            for saving time, reducing errors, and scaling operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aiCards.map(({ icon: Icon, color, bg, title, tagline, description, capabilities, example }, i) => (
            <Card
              key={title}
              className={cn(
                "border-slate-200 bg-white card-lift overflow-hidden transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-7">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", bg, color)}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-1">{title}</h3>
                <p className="text-teal-brand text-sm font-semibold mb-3">{tagline}</p>
                <p className="text-mid-text text-sm leading-relaxed mb-5">{description}</p>

                <ul className="space-y-2 mb-5">
                  {capabilities.map(cap => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-mid-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-brand flex-shrink-0 mt-1.5" />
                      {cap}
                    </li>
                  ))}
                </ul>

                <Separator className="mb-5 bg-slate-100" />

                {/* Example box */}
                <div className="rounded-xl border border-dashed border-teal-brand/25 bg-teal-brand/4 p-4">
                  <p className="text-[11px] font-bold text-teal-brand uppercase tracking-wider mb-1.5">Real Example</p>
                  <p className="text-mid-text text-sm leading-relaxed italic">{example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
