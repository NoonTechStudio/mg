"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Map, Zap, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Deep-dive workshops to map your business goals, user journeys, and technical constraints. We produce a detailed brief, scope, and timeline before writing a single line of code — zero surprises.",
  },
  {
    number: "02",
    icon: Map,
    title: "Architecture",
    description:
      "System design, ER diagrams, API contracts, and wireframes. We align on tech stack, infrastructure, and security model before build. You see exactly what you're getting before we start.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Agile Build",
    description:
      "Two-week sprints with a working demo every Friday. Shared project board and Slack channel. Feedback actioned quickly — we never work in black boxes.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Train",
    description:
      "Zero-downtime deployment on your preferred cloud. Full documentation, recorded walkthroughs, and 30-day post-launch support. You own everything — code, infrastructure, knowledge.",
  },
];

export default function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="process" className="relative bg-white overflow-hidden py-24">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 grid-dots-bg pointer-events-none opacity-100" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Badge variant="outline" className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase">
            How We Work
          </Badge>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-4">
            No black boxes. Full transparency.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0">
            {visible && <div className="h-full bg-teal-brand/40 draw-line" />}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <Card
                key={number}
                className={cn(
                  "border-slate-200 bg-white card-lift transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <CardContent className="p-6 pt-7">
                  {/* Icon + number row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-surface border border-blue-brand/15 rounded-2xl flex items-center justify-center text-blue-brand">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-bold text-4xl text-navy/6 leading-none select-none">
                      {number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">{title}</h3>
                  <p className="text-mid-text text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
