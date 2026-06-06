"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Paintbrush, Code2, Building2, Smartphone, Cloud,
  CheckCircle2, ArrowRight,
} from "lucide-react";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const webServices  = ["UI / UX Design","Next.js / React Development","E-commerce Platforms","Branding & Identity","Landing Pages & Funnels","SEO Optimisation"];
const softServices = ["Custom SaaS Platforms","AI Integrations & Agents","ERP & Admin Panels","REST & GraphQL APIs","Mobile App Backends","Database Architecture"];

const bottomCards = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Google Workspace",
    desc: "Professional email, Drive, Meet, and Docs — complete setup, migration, and management for your team.",
    tag: "Certified Reseller",
    href: "/services/google-workspace",
    color: "text-blue-brand",
    bg: "bg-blue-brand/8",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "AppSheet No-Code Apps",
    desc: "Build powerful mobile and web apps from your Google Sheets — no traditional coding required.",
    tag: "Google Technology",
    href: "/services/appsheet",
    color: "text-teal-brand",
    bg: "bg-teal-brand/8",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud & Firebase",
    desc: "Host, scale, and power your apps on Google Cloud Platform and Firebase with full ongoing support.",
    tag: "GCP Partner",
    href: "/services/cloud",
    color: "text-navy",
    bg: "bg-navy/8",
  },
];

export default function ServicePillars() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative bg-white overflow-hidden py-24">
      {/* Grid dot texture */}
      <div className="absolute inset-0 grid-dots-bg pointer-events-none opacity-100" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Badge variant="outline" className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase">
            What We Do
          </Badge>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            Five pillars. One partner.
          </h2>
          <p className="text-mid-text text-lg max-w-2xl mx-auto leading-relaxed">
            From your first business website to enterprise cloud infrastructure — MeridianGrid
            covers every layer of your technology needs.
          </p>
        </div>

        {/* Two hero pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* Pillar 1 — Web */}
          <Card className={cn(
            "border-slate-200 bg-surface card-lift overflow-hidden transition-all duration-700 delay-100",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <CardHeader className="p-8 pb-0">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-semibold tracking-widest text-slate-text uppercase">01 / Digital Experiences</span>
                <div className="w-10 h-10 bg-teal-brand/10 rounded-xl flex items-center justify-center text-teal-brand">
                  <Paintbrush className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy">Web Design & Development</h3>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <p className="text-mid-text text-sm leading-relaxed mb-6">
                Beautiful, conversion-focused websites and brand identities. Restaurants, retail, clinics,
                agencies — we craft digital experiences that grow your business.
              </p>
              <ul className="space-y-2 mb-8">
                {webServices.map(s => (
                  <li key={s} className="flex items-center gap-3 text-sm text-mid-text">
                    <CheckCircle2 className="w-4 h-4 text-teal-brand flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Separator className="mb-6 bg-slate-100" />
              <Link href="/services/web-design" className="inline-flex items-center gap-2 text-teal-brand font-semibold text-sm group">
                Explore Web Design
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>

          {/* Pillar 2 — Software */}
          <Card className={cn(
            "border-navy/20 bg-navy text-white card-lift overflow-hidden transition-all duration-700 delay-200",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <CardHeader className="p-8 pb-0">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase">02 / Software Engineering</span>
                <div className="w-10 h-10 bg-blue-brand/20 rounded-xl flex items-center justify-center text-blue-brand">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Custom Software & SaaS</h3>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Enterprise-grade platforms, AI integrations, and automation tools that replace expensive
                off-the-shelf software and give your business a real competitive edge.
              </p>
              <ul className="space-y-2 mb-8">
                {softServices.map(s => (
                  <li key={s} className="flex items-center gap-3 text-sm text-white/65">
                    <CheckCircle2 className="w-4 h-4 text-teal-brand flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Separator className="mb-6 bg-white/10" />
              <Link href="/services/software-development" className="inline-flex items-center gap-2 text-teal-brand font-semibold text-sm group">
                Explore Software Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Three bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bottomCards.map((card, i) => (
            <Card
              key={card.title}
              className={cn(
                "border-slate-200 bg-white card-lift overflow-hidden transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <CardContent className="p-6">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", card.bg, card.color)}>
                  {card.icon}
                </div>
                <Badge variant="secondary" className="mb-3 text-[10px] font-semibold tracking-wider uppercase">
                  {card.tag}
                </Badge>
                <h3 className="font-heading font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-mid-text text-sm leading-relaxed mb-5">{card.desc}</p>
                <Link href={card.href} className="inline-flex items-center gap-1.5 text-teal-brand font-semibold text-sm group">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
