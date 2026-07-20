"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Database, GitBranch, CheckCircle2 } from "lucide-react";

const aiCards = [
  {
    icon: Bot,
    color: "text-purple-400",
    badgeBg: "bg-purple-950/80 text-purple-300 border-purple-500/30",
    title: "Autonomous AI Agents",
    tagline: "Software that understands goals, makes decisions, and executes workflows.",
    description:
      "AI Agents leverage large language models (LLMs) to parse goals, orchestrate tools, execute API requests, and complete multi-step tasks autonomously.",
    capabilities: [
      "End-to-end task execution without manual clicks",
      "Tool integrations: web search, DB queries, code execution",
      "Context memory across long enterprise workflows",
      "Human-in-the-loop escalation when confidence is low",
    ],
    example:
      "A real-estate firm's AI Agent parses inbound lead emails, queries CRM for duplicates, schedules viewings, sends WhatsApp alerts, and updates pipelines in under 15 seconds.",
  },
  {
    icon: Zap,
    color: "text-cyan-400",
    badgeBg: "bg-cyan-950/80 text-cyan-300 border-cyan-500/30",
    title: "AI Business Automations",
    tagline: "Connect your enterprise tools. Eliminate repetitive manual tasks.",
    description:
      "Replace rigid rule-based workflows with intelligent pipelines that process unstructured natural language, parse complex documents, and adapt dynamically.",
    capabilities: [
      "Auto-classify & route customer support tickets",
      "Extract structured data from PDF invoices & contracts",
      "Generate automated executive summaries & reports",
      "24/7 brand-aligned response bots across channels",
    ],
    example:
      "A manufacturer receives 200+ supplier invoices weekly. AI parses line items, flags price anomalies, and pushes approved invoices to accounting — saving 20+ hours weekly.",
  },
  {
    icon: Database,
    color: "text-emerald-400",
    badgeBg: "bg-emerald-950/80 text-emerald-300 border-emerald-500/30",
    title: "RAG & Vector Knowledge Hubs",
    tagline: "Ground AI in your proprietary company data with zero hallucinations.",
    description:
      "Retrieval-Augmented Generation (RAG) pairs LLMs with your private databases and document repositories. Gives hyper-accurate, cited answers grounded in your data.",
    capabilities: [
      "Customer support bot trained on product documentation",
      "Internal HR & legal Q&A assistant grounded in company policy",
      "Real-time technical search across engineering codebases",
      "Verifiable source citations for every generated response",
    ],
    example:
      "A pharmaceutical firm's RAG chatbot answers field sales reps' queries in plain English with precise, regulation-compliant answers pulled from product manuals.",
  },
  {
    icon: GitBranch,
    color: "text-indigo-400",
    badgeBg: "bg-indigo-950/80 text-indigo-300 border-indigo-500/30",
    title: "Enterprise Workflow Sync",
    tagline: "Connect CRM, Google Workspace, ERP, and messaging into one flow.",
    description:
      "Interlink your software ecosystem so actions in one tool automatically trigger cascading updates across all others — powered by AI validation.",
    capabilities: [
      "Lead capture → CRM update → Email sequence → Sales task",
      "Order placed → Inventory check → Invoice -> Shipping trigger",
      "Support ticket → AI diagnosis → Priority queue assignment",
      "Employee onboarding → Account creation → Access provisioning",
    ],
    example:
      "A logistics firm automates order-to-delivery: driver assignment, route optimization, customer SMS updates, and proof-of-delivery sync.",
  },
];

export default function AISection() {
  return (
    <section id="ai-section" className="relative bg-slate-950 py-24 border-t border-slate-800/80 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 glow-spot-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dots-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500/30 bg-purple-950/40 text-purple-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
            AI &amp; Automation Architecture
          </Badge>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            What AI Does for Your Business. <br />
            <span className="text-gradient-purple">Real Utility, Zero Hype.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            AI isn&apos;t a gimmick. Built correctly, it is the single most potent lever for reducing operational cost, 
            eliminating human error, and accelerating workflow speed.
          </p>
        </div>

        {/* 2x2 AI Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiCards.map(({ icon: Icon, color, badgeBg, title, tagline, description, capabilities, example }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-3xl glass-card border border-slate-800 p-7 sm:p-8 glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center ${color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className={`text-[10px] font-mono uppercase tracking-wider ${badgeBg}`}>
                    AI Component
                  </Badge>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">{title}</h3>
                <p className={`font-heading font-semibold text-sm mb-4 ${color}`}>{tagline}</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{description}</p>

                <div className="space-y-2 mb-6">
                  {capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Example Box */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs">
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Real Production Implementation
                </div>
                <p className="text-slate-400 text-xs leading-relaxed italic">{example}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
