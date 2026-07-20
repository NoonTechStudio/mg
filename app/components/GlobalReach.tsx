"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Globe2, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Award, 
  Zap, 
  Server,
  Users
} from "lucide-react";

const timezones = [
  { region: "India (HQ Hub)", code: "IST (UTC+5:30)", status: "Active Engine", statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30" },
  { region: "Europe (Germany, UK, NL)", code: "CET / GMT", status: "Overlapping Hours", statusColor: "text-cyan-400 bg-cyan-950/60 border-cyan-500/30" },
  { region: "Americas & Global", code: "EST / PST", status: "24/7 Async Coverage", statusColor: "text-purple-400 bg-purple-950/60 border-purple-500/30" },
];

const badges = [
  { icon: ShieldCheck, title: "Google Cloud Partner", desc: "Certified GCP Infrastructure & Google Workspace Workspace Partner" },
  { icon: Lock, title: "Security & SOC2 Standards", desc: "Strict data privacy compliance, HTTPS/TLS 1.3 encryption, role-based controls" },
  { icon: Award, title: "99.9% Uptime Guarantee", desc: "High-availability multi-region cluster management with automated disaster recovery" },
  { icon: Zap, title: "Rapid Support SLA", desc: "Dedicated escalation channels and guaranteed < 2-hour response window for critical systems" },
];

export default function GlobalReach() {
  return (
    <section id="global-reach" className="relative bg-slate-950 py-24 border-t border-b border-slate-800/80 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 glow-spot-indigo opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dots-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
            Global Delivery Model
          </Badge>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-6">
            Global Engineering Standards. <br />
            <span className="text-gradient-cyan">Seamless Timezone Alignment.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We bridge geographical boundaries to deliver enterprise-grade digital products. 
            Enjoy direct communication, transparent agile sprints, and overlapping working hours across Europe and Asia.
          </p>
        </div>

        {/* Timezone Alignment Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {timezones.map((tz, idx) => (
            <motion.div
              key={tz.region}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl glass-card border border-slate-800 p-6 glass-card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>{tz.code}</span>
                </div>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${tz.statusColor}`}>
                  {tz.status}
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">{tz.region}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Dedicated sprint communication, daily async check-ins, and direct Slack/Teams integration with your engineering leadership.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Proof & Security Badges Grid */}
        <div className="rounded-3xl glass-card border border-slate-800/80 p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 50+ Clients Highlight */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>Proven International Track Record</span>
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Anchored by <span className="text-cyan-400">50+ Happy Clients</span> Worldwide.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                From high-growth startups in Vadodara to established enterprises in Europe, 
                our client partnerships are built on high engineering standards, zero compromise on quality, and long-term trust.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  100% On-Time Delivery
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Server className="w-4 h-4" />
                  Managed SLA
                </span>
              </div>
            </div>

            {/* Right: 4 Badges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {badges.map((b, i) => {
                const IconC = b.icon;
                return (
                  <div key={b.title} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
                      <IconC className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white mb-1">{b.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
