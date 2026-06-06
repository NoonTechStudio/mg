"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Sparkles,
  CalendarDays, Home, Briefcase, BookOpen, Truck, Package,
  Pill, HardHat, Rocket, Coffee, Scale,
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Cafés",
    desc: "Online menus, reservations & ordering",
    gradient: "from-orange-400 to-rose-400",
    glow: "group-hover:shadow-orange-200",
  },
  {
    icon: ShoppingBag,
    label: "Retail & Fashion",
    desc: "E-commerce stores & brand identity",
    gradient: "from-pink-400 to-fuchsia-500",
    glow: "group-hover:shadow-pink-200",
  },
  {
    icon: Stethoscope,
    label: "Healthcare & Clinics",
    desc: "Patient portals, appointments & records",
    gradient: "from-red-400 to-pink-500",
    glow: "group-hover:shadow-red-200",
  },
  {
    icon: Factory,
    label: "Industrial & Manufacturing",
    desc: "B2B websites & inquiry platforms",
    gradient: "from-slate-500 to-slate-700",
    glow: "group-hover:shadow-slate-200",
  },
  {
    icon: Sparkles,
    label: "Wellness & Spas",
    desc: "Booking systems & luxury experiences",
    gradient: "from-purple-400 to-violet-500",
    glow: "group-hover:shadow-purple-200",
  },
  {
    icon: CalendarDays,
    label: "Events & Hospitality",
    desc: "Event pages, packages & enquiry forms",
    gradient: "from-yellow-400 to-orange-400",
    glow: "group-hover:shadow-yellow-200",
  },
  {
    icon: Home,
    label: "Real Estate",
    desc: "Property listings, CRM & lead capture",
    gradient: "from-teal-400 to-emerald-500",
    glow: "group-hover:shadow-teal-200",
  },
  {
    icon: Briefcase,
    label: "Agencies & Consultancies",
    desc: "Portfolio sites, proposals & dashboards",
    gradient: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-blue-200",
  },
  {
    icon: BookOpen,
    label: "Education & EdTech",
    desc: "LMS platforms, enrolment & course sites",
    gradient: "from-indigo-400 to-blue-500",
    glow: "group-hover:shadow-indigo-200",
  },
  {
    icon: Truck,
    label: "Logistics & Transport",
    desc: "Fleet tracking, delivery & order systems",
    gradient: "from-emerald-400 to-teal-500",
    glow: "group-hover:shadow-emerald-200",
  },
  {
    icon: Package,
    label: "Packaging & Print",
    desc: "Product catalogues & B2B quote systems",
    gradient: "from-amber-400 to-yellow-500",
    glow: "group-hover:shadow-amber-200",
  },
  {
    icon: Pill,
    label: "Pharmacy & Medical",
    desc: "Medicine catalogues & WhatsApp ordering",
    gradient: "from-cyan-400 to-sky-500",
    glow: "group-hover:shadow-cyan-200",
  },
  {
    icon: HardHat,
    label: "Engineering & Construction",
    desc: "Project showcases & service portfolios",
    gradient: "from-stone-500 to-slate-600",
    glow: "group-hover:shadow-stone-200",
  },
  {
    icon: Rocket,
    label: "Tech Startups",
    desc: "Landing pages, SaaS & investor decks",
    gradient: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-200",
  },
  {
    icon: Coffee,
    label: "Food & Beverage",
    desc: "Digital menus, delivery & brand sites",
    gradient: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-200",
  },
  {
    icon: Scale,
    label: "Legal & Finance",
    desc: "Professional sites, client portals & CRM",
    gradient: "from-navy to-blue-brand",
    glow: "group-hover:shadow-blue-200",
  },
];

export default function IndustriesSection() {
  const ref     = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="relative bg-surface overflow-hidden py-24">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 grid-lines-bg pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Badge
            variant="outline"
            className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase"
          >
            Industries We Serve
          </Badge>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            Built for every kind of business.
          </h2>
          <p className="text-mid-text text-lg max-w-2xl mx-auto leading-relaxed">
            From local restaurants to industrial manufacturers — if you run a business,
            MeridianGrid has a solution built for your industry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label, desc, gradient, glow }, i) => (
            <div
              key={label}
              className={cn(
                "group relative bg-white rounded-2xl border border-slate-200/80 overflow-hidden",
                "transition-all duration-400 cursor-default",
                "hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent",
                glow,
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Top gradient bar */}
              <div className={cn(
                "h-1 w-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                gradient
              )} />

              <div className="p-5">
                {/* Icon circle with gradient */}
                <div className={cn(
                  "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 text-white shadow-sm",
                  "transition-transform duration-300 group-hover:scale-110",
                  gradient
                )}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-heading font-semibold text-navy text-sm leading-snug mb-1.5">
                  {label}
                </h3>
                <p className="text-slate-text text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="text-mid-text text-sm mb-4">
            Don&apos;t see your industry? We build for all.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-colors font-heading"
          >
            Let&apos;s Talk About Your Business →
          </a>
        </div>
      </div>
    </section>
  );
}
