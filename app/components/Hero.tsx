"use client";

import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";
import GridBackground from "./GridBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
    >
      {/* Grid texture */}
      <GridBackground variant="lines" opacity={0.05} dark />

      {/* Meridian arc decorations */}
      <div
        className="meridian-arc"
        style={{
          width: "900px",
          height: "900px",
          top: "50%",
          left: "50%",
          transform: "translate(-30%, -50%)",
          borderColor: "rgba(0,201,167,0.08)",
        }}
      />
      <div
        className="meridian-arc"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-20%, -50%)",
          borderColor: "rgba(0,201,167,0.06)",
        }}
      />

      {/* Floating dot grid — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #00C9A7 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Accepting projects badge */}
      <div className="absolute top-24 right-6 lg:right-12 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-teal-brand animate-pulse" />
        <span className="text-white/80 text-xs font-medium">Accepting new projects</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-teal-brand" />
            <span className="text-teal-brand text-xs font-semibold tracking-[0.2em] uppercase font-heading">
              Google Partner · Vadodara, India
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-bold text-white leading-[1.1] text-5xl lg:text-7xl mb-6">
            We Connect Business
            <br />
            <span className="text-teal-brand">to Technology.</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            MeridianGrid is a full-service technology solutions company. From custom software and
            Google Workspace to AI integrations and cloud infrastructure — we are your A to Z
            technology partner, from Vadodara to Europe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#portfolio"
              className="px-8 py-3.5 bg-navy border-2 border-teal-brand text-white font-semibold rounded-xl hover:bg-teal-brand/10 transition-all duration-200 font-heading text-center"
            >
              See Our Work
            </Link>
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/60 hover:bg-white/5 transition-all duration-200 font-heading text-center"
            >
              Book a Free Call
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 50, suffix: "+", label: "Happy Clients" },
            { value: 120, suffix: "+", label: "Projects Done" },
            { value: 5, suffix: "★", label: "Avg Rating" },
            { value: 24, suffix: "/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`${i < 3 ? "lg:border-r border-white/10 lg:pr-8" : ""}`}
            >
              <div className="font-heading font-bold text-3xl lg:text-4xl text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
