"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Search, Map, Zap, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Scope",
    description:
      "Deep-dive technical workshops to map your business goals, user journeys, and infrastructure boundaries. We define clear SLAs, deliverables, and timelines before writing a single line of code.",
    badge: "Sprint 0"
  },
  {
    number: "02",
    icon: Map,
    title: "Architecture & Specs",
    description:
      "System design, database schemas, API contracts, and high-fidelity Framer Motion prototypes. We align on tech stack, security policies, and GCP Cloud architecture before sprint execution.",
    badge: "Design Phase"
  },
  {
    number: "03",
    icon: Zap,
    title: "Agile Development",
    description:
      "Two-week sprints with working software demos every Friday. Shared Slack/Teams channel, live staging environment, and transparent progress boards — zero black-box development.",
    badge: "Sprint Build"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment & Training",
    description:
      "Zero-downtime production deployment on your preferred cloud. Full documentation, recorded team walkthroughs, and 30-day post-launch engineering support.",
    badge: "Production Launch"
  },
];

export default function ProcessScroll() {
  return (
    <section id="process" className="relative bg-slate-950 py-24 border-t border-slate-800/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 glow-spot-purple opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
            Agile Engineering Methodology
          </Badge>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Zero Black Boxes. <span className="text-gradient-purple">Total Delivery Transparency.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our structured 4-step engineering process guarantees on-time delivery, predictable budgets, and high code quality.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ number, icon: Icon, title, description, badge }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-3xl glass-card border border-slate-800 p-6 sm:p-7 glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-black text-3xl text-slate-800 select-none">
                    {number}
                  </span>
                </div>

                <Badge variant="outline" className="mb-3 text-[10px] font-mono border-slate-800 text-purple-400">
                  {badge}
                </Badge>
                
                <h3 className="font-heading font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Phase {number}</span>
                <span className="text-emerald-400">Validated</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
