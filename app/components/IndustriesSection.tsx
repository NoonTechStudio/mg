"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Sparkles,
  CalendarDays, Home, Briefcase, BookOpen, Truck, Package,
  Pill, HardHat, Rocket, Coffee, Scale, ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Cafés",
    desc: "Online menus, instant reservations & ordering systems",
    gradient: "from-amber-500 to-rose-500",
  },
  {
    icon: ShoppingBag,
    label: "Retail & E-Commerce",
    desc: "Next.js online stores & multi-channel brand identity",
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    icon: Stethoscope,
    label: "Healthcare & Clinics",
    desc: "Patient portals, appointment scheduling & HIPAA records",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Factory,
    label: "Industrial & Manufacturing",
    desc: "B2B catalog portals, ERP sync & quote request engines",
    gradient: "from-slate-500 to-indigo-600",
  },
  {
    icon: Sparkles,
    label: "Wellness & Spas",
    desc: "Luxury booking systems & client treatment tracking",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: CalendarDays,
    label: "Events & Hospitality",
    desc: "Venue booking pages, event registration & packages",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Home,
    label: "Real Estate & Housing",
    desc: "Property listings, CRM integration & virtual tours",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Briefcase,
    label: "Agencies & Consultancies",
    desc: "High-converting portfolio sites & client portals",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    label: "Education & EdTech",
    desc: "Learning platforms, student portals & course hubs",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Truck,
    label: "Logistics & Fleet",
    desc: "Real-time fleet tracking, dispatching & driver portals",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    icon: Package,
    label: "Packaging & Printing",
    desc: "Product customization engines & quote calculators",
    gradient: "from-amber-400 to-yellow-600",
  },
  {
    icon: Pill,
    label: "Pharma & Medical",
    desc: "Digital medicine catalogs & WhatsApp order workflows",
    gradient: "from-cyan-400 to-sky-600",
  },
  {
    icon: HardHat,
    label: "Construction & Engineering",
    desc: "Project showcase portfolios & site inspection tools",
    gradient: "from-stone-500 to-slate-700",
  },
  {
    icon: Rocket,
    label: "Tech Startups & SaaS",
    desc: "Modern Next.js web platforms, SaaS MVPs & pitch decks",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Coffee,
    label: "Food & Beverage Brands",
    desc: "Digital menus, franchise portals & order systems",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Scale,
    label: "Legal & Professional",
    desc: "Enterprise consultation booking & secure document vaults",
    gradient: "from-blue-600 to-indigo-700",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative bg-slate-950 py-24 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 glow-spot-cyan opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dots-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3"
          >
            Industries We Empower
          </Badge>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Engineered for <span className="text-gradient-cyan">Every Sector &amp; Industry.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From local hospitality chains to international B2B manufacturers — MeridianGrid delivers 
            purpose-built technology tailored specifically to your industry&apos;s workflows.
          </p>
        </div>

        {/* 4x4 Grid of Dark Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(({ icon: Icon, label, desc, gradient }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 4) * 0.05 }}
              className="group relative rounded-2xl glass-card border border-slate-800 p-6 glass-card-hover overflow-hidden flex flex-col justify-between"
            >
              {/* Top gradient accent line on hover */}
              <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300", gradient)} />

              <div>
                {/* Icon square */}
                <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-105 transition-transform", gradient)}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-white text-base leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                  {label}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>Industry Solution</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-sm mb-4">
            Operating in a unique niche? We architect custom solutions for specialized domains.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white font-heading font-semibold text-xs border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900 transition-all shadow-lg"
          >
            <span>Consult With Our Domain Engineers</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
