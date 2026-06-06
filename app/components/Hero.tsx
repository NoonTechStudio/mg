"use client";

import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
    >
      {/* Grid line texture */}
      <div className="absolute inset-0 grid-lines-dark opacity-100 pointer-events-none" />

      {/* Meridian arc rings */}
      {[900, 620, 380].map((size, i) => (
        <div
          key={size}
          className="meridian-arc"
          style={{
            width: size, height: size,
            top: "50%", left: "55%",
            transform: "translate(-50%,-50%)",
            borderColor: `rgba(0,201,167,${0.06 - i * 0.015})`,
          }}
        />
      ))}

      {/* Dot glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #00C9A7 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Status badge */}
      <div className="absolute top-24 right-6 lg:right-12 z-20">
        <Badge
          variant="outline"
          className={cn(
            "gap-2 border-white/15 bg-white/5 text-white/80 backdrop-blur-sm",
            "px-4 py-1.5 text-xs font-medium rounded-full"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-brand animate-pulse" />
          Accepting new projects
        </Badge>
      </div>

      {/* Content */}
      {/* pt-36 accounts for TopBar (36px) + Navbar (80px) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-teal-brand" />
            <span className="text-teal-brand text-xs font-semibold tracking-[0.2em] uppercase font-heading">
              Google Partner · Vadodara, India
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-bold text-white leading-[1.08] text-5xl sm:text-6xl lg:text-7xl mb-6">
            We Connect Business
            <br />
            <span className="text-teal-brand">to Technology.</span>
          </h1>

          {/* Sub */}
          <p className="text-white/55 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            MeridianGrid is a full-service technology solutions company. From custom software
            and Google Workspace to AI integrations and cloud infrastructure — your A&nbsp;to&nbsp;Z
            technology partner, from Vadodara to Europe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Link
              href="#services"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl",
                "bg-teal-brand text-navy font-semibold font-heading text-sm",
                "hover:opacity-90 transition-opacity"
              )}
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl",
                "border border-white/25 text-white font-semibold font-heading text-sm",
                "hover:border-teal-brand hover:bg-white/5 transition-all duration-200"
              )}
            >
              <Zap className="w-4 h-4" /> Book a Free Call
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: 50,  suffix: "+", label: "Happy Clients" },
            { value: 120, suffix: "+", label: "Projects Done" },
            { value: 5,   suffix: "★", label: "Avg Rating" },
            { value: 24,  suffix: "/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className={cn(i < 3 && "lg:border-r border-white/10 lg:pr-6")}
            >
              <div className="font-heading font-bold text-3xl lg:text-4xl text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/45 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
