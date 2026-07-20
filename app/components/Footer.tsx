"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Code2, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans">
      {/* Background Mesh Texture */}
      <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 glow-spot-purple opacity-15 blur-3xl pointer-events-none" />

      {/* MG Hologram Watermark */}
      <div className="absolute bottom-0 right-0 text-white/[0.03] font-heading font-black text-[22rem] lg:text-[28rem] leading-none select-none pointer-events-none">
        MG
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Centered Hero Logo Block ── */}
        <div className="flex flex-col items-center text-center pt-20 pb-12 border-b border-slate-800/80">
          <Link href="/" className="inline-block mb-6 group">
            <Image
              src="/logo-white.png"
              alt="MeridianGrid Studio"
              width={340}
              height={100}
              className="object-contain h-20 sm:h-24 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            Engineering modern digital products, enterprise cloud solutions, custom SaaS platforms, 
            and AI-driven automations. Your end-to-end technology partner, from Vadodara to Europe.
          </p>

          {/* Interactive Contact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-mono">
            <a
              href="mailto:hello@meridiangrid.in"
              className="flex items-center gap-2.5 glass-pill px-5 py-3 rounded-full text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all shadow-md group"
            >
              <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>hello@meridiangrid.in</span>
            </a>
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 glass-pill px-5 py-3 rounded-full text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-slate-900 transition-all shadow-md group"
            >
              <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>+91 80004 03090</span>
            </a>
            <div className="flex items-center gap-2.5 glass-pill px-5 py-3 rounded-full text-slate-400">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* ── 4-Column Creative Navigation Links ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-slate-800/80">
          
          {/* Column 1: Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 text-cyan-400">
              Core Engineering Pillars
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
              {[
                ["Web Design & Development", "/#services"],
                ["Custom Software & SaaS", "/#services"],
                ["Google Workspace Enterprise", "/#services"],
                ["AppSheet Applications", "/#services"],
                ["Cloud & AI Automations", "/#services"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3.5 h-0.5 bg-cyan-400 transition-all duration-200 overflow-hidden" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: In-House SaaS */}
          <div>
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 text-purple-400">
              In-House SaaS Products
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
              {[
                ["SkyWhale (Cloud Builder)", "https://www.skywhale.in"],
                ["FlowVida (Salon OS)", "https://flowvida.meridiangrid.in"],
                ["BrainMate (AI Lead Engine)", "https://brainmate.meridiangrid.in"],
                ["Chérie (Booking Engine)", "https://cherie.meridiangrid.in"],
              ].map(([name, href]) => (

                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors flex items-center justify-between group pr-4"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-0 group-hover:w-3.5 h-0.5 bg-purple-400 transition-all duration-200 overflow-hidden" />
                      <span>{name}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Global */}
          <div>
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 text-indigo-400">
              Company &amp; Delivery
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
              {[
                ["Portfolio Projects", "/portfolio"],
                ["Global Delivery Model", "/#global-reach"],
                ["Agile Process", "/#process"],
                ["Contact Engineering Team", "/contact"],
                ["GitHub Code Studio", "https://github.com/MeridianGrid"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3.5 h-0.5 bg-indigo-400 transition-all duration-200 overflow-hidden" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certifications & Compliance */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h4 className="text-white font-heading font-bold text-xs uppercase tracking-[0.2em] text-emerald-400">
                Google Solutions Partner
              </h4>
              <span className="text-[9px] font-mono font-bold text-emerald-400 border border-emerald-500/40 rounded px-1.5 py-0.5 tracking-widest bg-emerald-950/60">
                PARTNER
              </span>
            </div>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">Google Cloud Partner</div>
                  <div className="text-[10px] text-slate-500">Certified GCP &amp; Workspace</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-[11px] font-mono space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">GSTIN:</span>
                  <span className="text-slate-300 font-semibold">24DPLPS3319D1ZW</span>
                </div>
                <div className="flex justify-between border-t border-slate-800/60 pt-1">
                  <span className="text-slate-500">UDYAM:</span>
                  <span className="text-slate-300 font-semibold">GJ-24-0235549</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Registration Compliance Bar ── */}
        <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="text-slate-400 font-semibold">REGISTRATION:</span>
            <span className="text-slate-300">MeridianGrid Technology Solutions</span>
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>GSTIN: <strong className="text-slate-200">24DPLPS3319D1ZW</strong></span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>UDYAM: <strong className="text-slate-200">GJ-24-0235549</strong></span>
        </div>

        {/* ── Bottom Legal & Copyright Bar ── */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} MeridianGrid Technology Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with care in Vadodara, India</span>
            <span className="text-sm">🇮🇳</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <a href="/Terms & Conditions.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
