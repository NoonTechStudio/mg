"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Brain, Scissors, Waves, BarChart3 } from "lucide-react";

const products = [
  {
    name: "SkyWhale",
    tagline: "Your Business Online — Without the Hassle",
    description:
      "Get your business live on the internet without buying a domain or paying for hosting. Just share your info and you're live. Built for small businesses in India who want a professional online presence — zero tech skills required.",
    features: ["No Domain Needed", "No Hosting Fees", "No Tech Skills", "Live in Minutes"],
    badge: "Website Builder",
    href: "https://skywhale.in",
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "group-hover:shadow-blue-200",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50",
    borderHover: "hover:border-blue-300",
    icon: Waves,
    stat: { value: "Zero Cost", label: "Domain & Hosting" },
  },
  {
    name: "FlowVida",
    tagline: "Run Your Parlor Smarter, Not Harder",
    description:
      "All-in-one management platform built exclusively for beauty parlors. Handle appointments, customers, staff, and revenue — all from one elegant dashboard. Say goodbye to paper notepads and WhatsApp lists.",
    features: ["Appointment Booking", "Customer Management", "Staff Scheduling", "Revenue Analytics"],
    badge: "Parlor Management",
    href: "https://flowvida.vercel.app",
    gradient: "from-rose-500 to-red-600",
    glowColor: "group-hover:shadow-rose-200",
    accentColor: "text-rose-600",
    accentBg: "bg-rose-50",
    borderHover: "hover:border-rose-300",
    icon: Scissors,
    stat: { value: "500+", label: "Daily Appointments" },
  },
  {
    name: "BrainMate",
    tagline: "Your Business's Digital Brain",
    description:
      "Never lose a lead again. BrainMate tracks all your prospects, sends follow-up reminders, and gives you real-time sales analytics — all in one place. Works completely offline so you're always in control.",
    features: ["Lead Tracking", "Follow-up Reminders", "Sales Analytics", "Works Offline"],
    badge: "CRM & Lead Tool",
    href: "https://brainmate-eight.vercel.app/login",
    gradient: "from-violet-500 to-purple-600",
    glowColor: "group-hover:shadow-violet-200",
    accentColor: "text-violet-600",
    accentBg: "bg-violet-50",
    borderHover: "hover:border-violet-300",
    icon: Brain,
    stat: { value: "98%", label: "Follow-up Rate" },
  },
  {
    name: "Chérie",
    tagline: "Appointments Made Beautiful",
    description:
      "Elegant booking platform crafted for beauty parlors and Mehndi/Heena artists. Let clients book their slot anytime, manage your schedule effortlessly, and deliver a polished, professional experience from the very first tap.",
    features: ["Online Booking", "Artist Profiles", "Slot Management", "Client Notifications"],
    badge: "Booking Platform",
    href: "https://cherie-teal.vercel.app/login",
    gradient: "from-pink-500 to-fuchsia-600",
    glowColor: "group-hover:shadow-pink-200",
    accentColor: "text-pink-600",
    accentBg: "bg-pink-50",
    borderHover: "hover:border-pink-300",
    icon: BarChart3,
    stat: { value: "24/7", label: "Online Bookings" },
  },
];

export default function SaasProducts() {
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
    <section className="relative bg-white overflow-hidden py-24">
      {/* Grid dot texture */}
      <div className="absolute inset-0 grid-dots-bg pointer-events-none opacity-100" />

      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-teal-brand/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Badge
            variant="outline"
            className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase"
          >
            Our SaaS Products
          </Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Tools we built.<br className="hidden sm:block" /> Ready for you to use today.
          </h2>
          <p className="text-mid-text text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond client projects, MeridianGrid builds its own products — purpose-built SaaS
            tools solving real problems for Indian businesses.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(({ name, tagline, description, features, badge, href, gradient, glowColor, accentColor, accentBg, borderHover, icon: Icon, stat }, i) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative bg-white rounded-2xl border border-slate-200 overflow-hidden",
                "transition-all duration-400",
                "hover:-translate-y-1.5 hover:shadow-2xl hover:border-transparent",
                glowColor,
                borderHover,
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {/* Top gradient bar */}
              <div className={cn("h-1 w-full bg-gradient-to-r", gradient)} />

              <div className="p-5 sm:p-7">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-sm",
                      "transition-transform duration-300 group-hover:scale-110",
                      gradient
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy text-xl leading-none mb-1">
                        {name}
                      </h3>
                      <Badge variant="secondary" className={cn("text-[10px] font-semibold tracking-wider uppercase", accentBg, accentColor, "border-0")}>
                        {badge}
                      </Badge>
                    </div>
                  </div>
                  <div className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                    "opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1",
                    accentBg, accentColor
                  )}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Tagline */}
                <p className={cn("font-heading font-semibold text-base mb-2", accentColor)}>
                  {tagline}
                </p>

                {/* Description */}
                <p className="text-mid-text text-sm leading-relaxed mb-5">
                  {description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {features.map((f) => (
                    <span
                      key={f}
                      className={cn(
                        "text-[11px] font-semibold px-3 py-1 rounded-full",
                        accentBg, accentColor
                      )}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Stat + CTA row */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div>
                    <p className={cn("font-heading font-bold text-2xl", accentColor)}>{stat.value}</p>
                    <p className="text-slate-text text-xs">{stat.label}</p>
                  </div>
                  <span className={cn(
                    "inline-flex items-center gap-1.5 text-sm font-semibold",
                    accentColor,
                    "group-hover:gap-2.5 transition-all duration-200"
                  )}>
                    Visit {name}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="text-slate-text text-sm">
            All products are built and maintained by the MeridianGrid team.{" "}
            <a href="/contact" className="text-teal-brand font-semibold hover:underline underline-offset-2">
              Need a custom SaaS? Let&apos;s build one together →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
