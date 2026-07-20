"use client";

import { motion } from "framer-motion";

const techStack = [
  "GCP Cloud", 
  "Google Workspace", 
  "Next.js 16", 
  "React 19", 
  "TypeScript", 
  "Node.js", 
  "Python", 
  "AppSheet Apps", 
  "PostgreSQL", 
  "Firebase", 
  "Framer Motion", 
  "Tailwind CSS v4", 
  "LLM AI Agents", 
  "Vector Search DB", 
  "Docker Containers", 
  "REST & GraphQL"
];

export default function TrustBar() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="relative bg-slate-950 border-t border-b border-slate-800/80 py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
          ENTERPRISE TECH STACK &amp; FRAMEWORKS
        </span>
      </div>

      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-3.5 w-max"
        >
          {doubled.map((tech, idx) => (
            <div
              key={idx}
              className="whitespace-nowrap flex-shrink-0 h-9 inline-flex items-center gap-2.5 px-5 rounded-full glass-pill border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 animate-pulse" />
              <span className="leading-none whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
