"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Terminal, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  Server,
  Layers
} from "lucide-react";

const previewTabs = [
  {
    id: "cloud",
    label: "Cloud Engine",
    icon: Server,
    color: "from-cyan-500 to-blue-600",
    badge: "99.9% Uptime",
    code: `// MeridianGrid GCP Infrastructure Engine
import { GoogleCloudCluster } from "@meridiangrid/core";

export const deployment = new GoogleCloudCluster({
  region: "europe-west3", // Frankfurt & India nodes
  autoScale: { minNodes: 3, maxNodes: 64 },
  security: { soc2TypeII: true, iso27001: true },
  sla: "99.99% high availability",
});`,
    metrics: [
      { label: "Active Nodes", val: "32 Nodes", status: "Healthy" },
      { label: "Response Latency", val: "18ms avg", status: "Optimal" },
      { label: "Global Sync", val: "EU & India", status: "Live" }
    ]
  },
  {
    id: "ai",
    label: "AI Automations",
    icon: Sparkles,
    color: "from-purple-500 to-indigo-600",
    badge: "LLM Agents",
    code: `// Enterprise RAG & Autonomous Agent System
import { VectorPipeline, LLMAgent } from "@meridiangrid/ai";

const agent = new LLMAgent({
  knowledgeBase: "company-docs-vector-db",
  capabilities: ["process_invoices", "sync_workspace"],
  confidenceScore: 0.994,
});`,
    metrics: [
      { label: "Vector Search", val: "< 12ms", status: "Sub-second" },
      { label: "Daily Tasks", val: "140K+", status: "Automated" },
      { label: "Accuracy", val: "99.8%", status: "Verified" }
    ]
  },
  {
    id: "apps",
    label: "Digital Apps",
    icon: Layers,
    color: "from-emerald-500 to-cyan-600",
    badge: "AppSheet & Web",
    code: `// Next.js & AppSheet Enterprise Sync
import { AppSheetBridge } from "@meridiangrid/appsheet";

export default function SyncWorkflow() {
  return AppSheetBridge.sync({
    sheetsSource: "Google Workspace Enterprise",
    realtimeSync: true,
    rbacRole: "Enterprise Admin"
  });
}`,
    metrics: [
      { label: "Custom SaaS", val: "4 Live Tools", status: "In-House" },
      { label: "AppSheet Deploy", val: "Instant Sync", status: "Zero Code" },
      { label: "Clients Served", val: "50+ Brands", status: "Global" }
    ]
  }
];

export default function Hero() {
  const [activeTabId, setActiveTabId] = useState("cloud");
  const activeTabData = previewTabs.find(t => t.id === activeTabId) || previewTabs[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-40 pb-20 flex flex-col justify-center overflow-hidden bg-slate-950 bg-dark-mesh"
    >
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 glow-spot-cyan pointer-events-none opacity-40 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 glow-spot-purple pointer-events-none opacity-30 blur-3xl" />
      <div className="absolute inset-0 grid-pattern-dark opacity-60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-200">Google Cloud Partner Studio</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-medium">Q3 Client Cohort Open</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12] mb-6"
            >
              Engineering Modern <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Digital Products</span> &amp; <br />
              <span className="text-gradient-purple">Enterprise Cloud</span> Solutions.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              We craft high-converting web experiences, custom SaaS platforms, Google Workspace integrations, 
              and AI-driven automations. Built to international engineering standards from Vadodara to Europe.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Link
                href="#services"
                className="relative group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-heading font-semibold text-sm text-white overflow-hidden shadow-xl shadow-cyan-950/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore Engineering Pillars</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-slate-200 font-heading font-semibold text-sm hover:text-white hover:border-slate-600 hover:bg-slate-900/80 transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Book Free Consultation</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-white">
                    <AnimatedCounter target={50} suffix="+" /> Happy Clients
                  </div>
                  <div className="text-xs text-slate-400">Across India &amp; Europe</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-white flex items-center gap-1">
                    Google Partner
                  </div>
                  <div className="text-xs text-slate-400">Certified GCP &amp; Workspace</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-400 flex-shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-white">
                    99.9% Uptime
                  </div>
                  <div className="text-xs text-slate-400">Managed Infrastructure</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Studio Console Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-card border border-slate-700/80 p-5 shadow-2xl shadow-cyan-950/30 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    meridiangrid-console v2.4
                  </span>
                </div>
                <Badge variant="outline" className="border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-[10px]">
                  {activeTabData.badge}
                </Badge>
              </div>

              {/* Console Mode Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 my-4 p-1 rounded-xl bg-slate-950/80 border border-slate-800">
                {previewTabs.map((tab) => {
                  const IconC = tab.icon;
                  const isSelected = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg font-mono text-xs transition-all",
                        isSelected
                          ? "bg-slate-800 text-white shadow-md border border-slate-700 font-medium"
                          : "text-slate-400 hover:text-slate-200"
                      )}
                    >
                      <IconC className={cn("w-3.5 h-3.5", isSelected ? "text-cyan-400" : "text-slate-500")} />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Code Preview Box */}
              <div className="relative rounded-xl bg-slate-950 p-4 border border-slate-800/80 font-mono text-xs overflow-hidden mb-4 min-h-[160px]">
                <div className="text-[10px] text-slate-500 mb-2 flex items-center justify-between border-b border-slate-900 pb-1">
                  <span>DEPLOYMENT CONFIGURATION</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    ACTIVE PIPELINE
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTabId}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-300 leading-relaxed overflow-x-auto"
                  >
                    <code>{activeTabData.code}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Real-time Status Gauge Cards */}
              <div className="grid grid-cols-3 gap-2">
                {activeTabData.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 font-mono mb-0.5">{m.label}</div>
                    <div className="text-xs font-bold font-mono text-white mb-0.5">{m.val}</div>
                    <div className="text-[9px] font-mono text-cyan-400 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {m.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer status info */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Auto-healing active</span>
                </span>
                <span className="text-slate-300">
                  Status: <strong className="text-emerald-400">100% Operational</strong>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
