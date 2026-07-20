"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Brain, Scissors, Waves, CalendarCheck, CheckCircle2, Monitor, Sparkles } from "lucide-react";

const products = [
  {
    name: "SkyWhale",
    tagline: "Your Business Online — Zero Domain & Zero Hosting Friction",
    description:
      "Get your business live on the web instantly without domain acquisition or hosting overhead. Built for small-to-mid businesses in India and emerging markets seeking instant digital presence.",
    features: ["Zero Domain Setup", "Included Managed Hosting", "Instant Deployment", "Mobile Optimized"],
    badge: "SaaS Tool",
    status: "Live",
    href: "https://www.skywhale.in",
    accentGlow: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-950/80 text-cyan-300 border-cyan-500/30",
    icon: Waves,
    stat: { value: "Zero Cost", label: "Hosting Overhead" },
    mockData: {
      type: "Website Builder",
      activeSites: "1,240+ Live Sites",
      latency: "14ms Edge CDN"
    }
  },
  {
    name: "FlowVida",
    tagline: "Smarter Parlor & Salon Operations Platform",
    description:
      "Comprehensive cloud OS built exclusively for beauty parlors and salon chains. Seamlessly manage appointment schedules, client records, inventory, staff shifts, and daily revenue metrics.",
    features: ["Online Booking Engine", "Client CRM", "Staff Shift Scheduler", "Revenue Analytics"],
    badge: "SaaS Tool",
    status: "Live",
    href: "https://flowvida.meridiangrid.in",
    accentGlow: "from-rose-500 to-pink-600",
    badgeBg: "bg-rose-950/80 text-rose-300 border-rose-500/30",
    icon: Scissors,
    stat: { value: "500+", label: "Daily Bookings" },
    mockData: {
      type: "Salon Cloud OS",
      activeSites: "99.4% Slot Utilization",
      latency: "Real-time Sync"
    }
  },
  {
    name: "BrainMate",
    tagline: "AI-Powered Lead Tracking & Digital Brain",
    description:
      "Intelligent CRM & lead tracking platform that turns prospects into loyal clients. Automated follow-up notifications, pipeline velocity tracking, and offline sync support for sales teams.",
    features: ["Pipeline Management", "Automated Reminders", "Sales Analytics", "Offline PWA Sync"],
    badge: "AI-Powered",
    status: "Live",
    href: "https://brainmate.meridiangrid.in",
    accentGlow: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-950/80 text-purple-300 border-purple-500/30",
    icon: Brain,
    stat: { value: "98%", label: "Follow-up Rate" },
    mockData: {
      type: "AI Lead Engine",
      activeSites: "12,000+ Tracked Leads",
      latency: "Sub-second RAG"
    }
  },
  {
    name: "Chérie",
    tagline: "Elegant Booking Engine for Hospitality & Beauty Artists",
    description:
      "Next-generation online booking platform crafted for independent beauty artists, Mehendi creators, and boutique services. Provides seamless client slot selection and automated WhatsApp alerts.",
    features: ["24/7 Slot Booking", "Artist Portfolio", "WhatsApp Notifications", "Custom Schedules"],
    badge: "SaaS Tool",
    status: "Live",
    href: "https://cherie.meridiangrid.in",
    accentGlow: "from-amber-500 to-pink-600",
    badgeBg: "bg-amber-950/80 text-amber-300 border-amber-500/30",
    icon: CalendarCheck,
    stat: { value: "24/7", label: "Automated Bookings" },
    mockData: {
      type: "Booking Platform",
      activeSites: "Direct Link Booking",
      latency: "Instant Notification"
    }
  },
];


export default function SaasProducts() {
  return (
    <section id="saas" className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 glow-spot-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 glow-spot-cyan opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-dark opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500/30 bg-purple-950/40 text-purple-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
            In-House Products Showcase
          </Badge>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-6">
            Proprietary SaaS Solutions. <br className="hidden sm:inline" />
            <span className="text-gradient-purple">Engineered &amp; Scaled in House.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Beyond engineering custom software for our enterprise clients, MeridianGrid designs, deploys, 
            and operates proprietary SaaS tools that solve real operational bottlenecks for forward-thinking businesses.
          </p>
        </div>

        {/* 2x2 SaaS Product Mockup Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p, i) => {
            const IconC = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl glass-card border border-slate-800 p-6 sm:p-8 flex flex-col justify-between glass-card-hover overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", p.accentGlow)} />

                {/* Card Header & Badge row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg", p.accentGlow)}>
                        <IconC className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                            {p.name}
                          </h3>
                          <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {p.status}
                          </span>
                        </div>
                        <Badge variant="outline" className={cn("mt-1 text-[10px] font-mono uppercase tracking-wider", p.badgeBg)}>
                          {p.badge}
                        </Badge>
                      </div>
                    </div>

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Dashboard Mock Card Frame */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800/80 p-4 mb-6 relative overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-900 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                        {p.mockData.type} Frame
                      </span>
                      <span className="text-slate-400">{p.mockData.latency}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300 text-xs">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Live Output Metric</div>
                        <div className="font-bold text-white text-sm">{p.stat.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-500 uppercase">System Status</div>
                        <div className="text-cyan-400 font-semibold">{p.mockData.activeSites}</div>
                      </div>
                    </div>
                  </div>

                  <p className="font-heading font-semibold text-base text-slate-200 mb-3">
                    {p.tagline}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Built by <span className="text-white font-medium">MeridianGrid Lab</span>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Launch Product</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Have a breakthrough product idea or need custom SaaS architecture?{" "}
            <a href="/contact" className="text-cyan-400 font-semibold hover:underline underline-offset-4">
              Let&apos;s build and scale your SaaS platform together →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
