"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  UtensilsCrossed, ShoppingBag, Stethoscope, Factory, Sparkles,
  CalendarDays, Home, Briefcase, BookOpen, Truck, Package,
  Pill, HardHat, Rocket, Coffee, Scale,
} from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafés",       color: "text-orange-500",  bg: "bg-orange-50" },
  { icon: ShoppingBag,     label: "Retail & Fashion",           color: "text-pink-500",    bg: "bg-pink-50" },
  { icon: Stethoscope,     label: "Healthcare & Clinics",       color: "text-red-500",     bg: "bg-red-50" },
  { icon: Factory,         label: "Industrial & Manufacturing", color: "text-slate-600",   bg: "bg-slate-100" },
  { icon: Sparkles,        label: "Wellness & Spas",            color: "text-purple-500",  bg: "bg-purple-50" },
  { icon: CalendarDays,    label: "Events & Hospitality",       color: "text-yellow-600",  bg: "bg-yellow-50" },
  { icon: Home,            label: "Real Estate",                color: "text-teal-brand",  bg: "bg-teal-brand/8" },
  { icon: Briefcase,       label: "Agencies & Consultancies",   color: "text-blue-brand",  bg: "bg-blue-brand/8" },
  { icon: BookOpen,        label: "Education & EdTech",         color: "text-indigo-500",  bg: "bg-indigo-50" },
  { icon: Truck,           label: "Logistics & Transport",      color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Package,         label: "Packaging & Print",          color: "text-amber-600",   bg: "bg-amber-50" },
  { icon: Pill,            label: "Pharmacy & Medical",         color: "text-cyan-600",    bg: "bg-cyan-50" },
  { icon: HardHat,         label: "Engineering & Construction", color: "text-navy",        bg: "bg-navy/8" },
  { icon: Rocket,          label: "Tech Startups",              color: "text-violet-500",  bg: "bg-violet-50" },
  { icon: Coffee,          label: "Food & Beverage",            color: "text-brown-600",   bg: "bg-orange-50" },
  { icon: Scale,           label: "Legal & Finance",            color: "text-navy-light",  bg: "bg-surface" },
];

export default function IndustriesSection() {
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
    <section className="relative bg-surface overflow-hidden py-24">
      {/* Grid line texture */}
      <div className="absolute inset-0 grid-lines-bg pointer-events-none opacity-100" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Badge variant="outline" className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase">
            Industries We Serve
          </Badge>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            Built for every kind of business.
          </h2>
          <p className="text-mid-text text-lg max-w-2xl mx-auto leading-relaxed">
            From local restaurants to industrial manufacturers — if you have a business,
            MeridianGrid has a technology solution built for your industry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label, color, bg }, i) => (
            <Card
              key={label}
              className={cn(
                "border-slate-200/80 bg-white card-lift cursor-default transition-all duration-500",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <CardContent className="p-5 flex flex-col items-start gap-3">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", bg, color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-heading font-semibold text-navy text-sm leading-tight">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <p className={cn(
          "text-center mt-10 text-slate-text text-sm transition-all duration-700 delay-700",
          visible ? "opacity-100" : "opacity-0"
        )}>
          Don&apos;t see your industry?{" "}
          <a href="/contact" className="text-teal-brand font-semibold hover:underline">
            Let&apos;s talk — we build for all.
          </a>
        </p>
      </div>
    </section>
  );
}
