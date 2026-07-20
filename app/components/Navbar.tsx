"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone, ArrowUpRight, Sparkles, Code2, Cloud, Layers, ShieldCheck } from "lucide-react";

const serviceItems = [
  { 
    name: "Digital Experiences", 
    desc: "High-converting web design, Next.js & UI/UX motion", 
    href: "/#services", 
    icon: Sparkles,
    badge: "Modern Web" 
  },
  { 
    name: "Software Engineering", 
    desc: "Custom SaaS platforms, microservices & APIs", 
    href: "/#services", 
    icon: Code2,
    badge: "Enterprise" 
  },
  { 
    name: "Google Workspace", 
    desc: "Migration, setup & enterprise administration", 
    href: "/#services", 
    icon: ShieldCheck,
    badge: "Certified Partner" 
  },
  { 
    name: "AppSheet Automation", 
    desc: "No-code enterprise workflow & database apps", 
    href: "/#services", 
    icon: Layers,
    badge: "Rapid Build" 
  },
  { 
    name: "Cloud & AI Integrations", 
    desc: "Google Cloud Platform, Firebase & LLM Agents", 
    href: "/#services", 
    icon: Cloud,
    badge: "AI Powered" 
  },
];

const saasProducts = [
  { name: "SkyWhale", tag: "Cloud Ops", desc: "Automated Cloud Infrastructure Manager", href: "https://www.skywhale.in" },
  { name: "FlowVida", tag: "Workflows", desc: "Operations & Task Automation Engine", href: "https://flowvida.meridiangrid.in" },
  { name: "BrainMate", tag: "AI Assistant", desc: "Enterprise RAG & Knowledge Hub", href: "https://brainmate.meridiangrid.in" },
  { name: "Chérie", tag: "Hospitality", desc: "Smart Guest Experience Platform", href: "https://cherie.meridiangrid.in" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ── Top Micro Announcement Bar ── */}
      <div className="bg-slate-950/90 border-b border-slate-800/50 backdrop-blur-md text-slate-300 text-[11px] py-1.5 px-4 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300">Google Cloud Partner</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>GSTIN: <strong className="text-slate-200 font-semibold">24DPLPS3319D1ZW</strong></span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline">UDYAM: <strong className="text-slate-200 font-semibold">GJ-24-0235549</strong></span>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans">
            <a
              href="tel:+918000403090"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>+91 80004 03090</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-400 font-medium bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 text-[10px]">
              Vadodara · India & Europe
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Floating Frosted Navbar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className={cn(
          "relative rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3",
          "glass-card border border-slate-800/80 shadow-2xl backdrop-blur-xl",
          scrolled ? "bg-slate-950/85 border-slate-700/60 shadow-cyan-950/20" : "bg-slate-900/60"
        )}>
          <nav className="flex items-center justify-between">
            {/* Brand Logo - Original MeridianGrid Logo (Bigger) */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo-white.png"
                alt="MeridianGrid Studio"
                width={260}
                height={80}
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>



            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all",
                    activeMenu === "services" ? "text-cyan-400 bg-slate-800/50" : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  )}
                >
                  <span>Services & Pillars</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeMenu === "services" && "rotate-180 text-cyan-400")} />
                </button>

                <AnimatePresence>
                  {activeMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-[440px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-slate-700/90 p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] z-[100] ring-1 ring-cyan-500/20"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-3 py-2 mb-1 flex items-center justify-between border-b border-slate-800/90 bg-slate-900/60 rounded-xl">
                        <span>Core Engineering Pillars</span>
                        <span className="font-semibold text-cyan-300">5 Services</span>
                      </div>
                      <div className="space-y-1.5 mt-2">
                        {serviceItems.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group/item flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/40 transition-all"
                            >
                              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover/item:border-cyan-400 group-hover/item:bg-cyan-950 transition-all flex-shrink-0">
                                <IconComp className="w-4.5 h-4.5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-white group-hover/item:text-cyan-300 transition-colors">
                                    {item.name}
                                  </span>
                                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-cyan-500/20">
                                    {item.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-300 leading-snug truncate mt-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SaaS Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu("saas")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all",
                    activeMenu === "saas" ? "text-purple-400 bg-slate-800/50" : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  )}
                >
                  <span>In-House SaaS</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeMenu === "saas" && "rotate-180 text-purple-400")} />
                </button>

                <AnimatePresence>
                  {activeMenu === "saas" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-slate-700/90 p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] z-[100] ring-1 ring-purple-500/20"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-purple-400 px-3 py-2 mb-1 flex items-center justify-between border-b border-slate-800/90 bg-slate-900/60 rounded-xl">
                        <span>Proprietary Products</span>
                        <span className="font-semibold text-purple-300">Live Tools</span>
                      </div>
                      <div className="space-y-1.5 mt-2">
                        {saasProducts.map((p) => (
                          <a
                            key={p.name}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80 hover:border-purple-500/40 transition-all"
                          >
                            <div>
                              <div className="text-xs font-bold text-white group-hover/item:text-purple-300">
                                {p.name}
                              </div>
                              <div className="text-[10px] text-slate-300 mt-0.5">{p.desc}</div>
                            </div>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30 text-purple-300">
                              {p.tag}
                            </span>
                          </a>
                        ))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              {/* Direct Links */}
              <Link 
                href="/#global-reach" 
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 transition-all"
              >
                Global Engineering
              </Link>
              <Link 
                href="/portfolio" 
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 transition-all"
              >
                Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 transition-all"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button with Glow Effect */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-heading overflow-hidden transition-all duration-300"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 blur-md opacity-40 group-hover:opacity-80 transition-opacity" />
                
                {/* Content */}
                <span className="relative z-10 text-white font-medium flex items-center gap-1.5">
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={cn("block h-0.5 bg-slate-300 rounded transition-transform", mobileOpen && "rotate-45 translate-y-2")} />
                <span className={cn("block h-0.5 bg-slate-300 rounded transition-opacity", mobileOpen && "opacity-0")} />
                <span className={cn("block h-0.5 bg-slate-300 rounded transition-transform", mobileOpen && "-rotate-45 -translate-y-2")} />
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 rounded-2xl glass-card border border-slate-800 p-5 overflow-hidden"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2">Services</div>
                  <div className="grid grid-cols-1 gap-2">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-slate-300 hover:text-cyan-300 py-1.5 flex items-center justify-between"
                      >
                        <span>{s.name}</span>
                        <span className="text-[9px] font-mono text-slate-500">{s.badge}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-3">
                  <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-2">SaaS Products</div>
                  <div className="grid grid-cols-2 gap-2">
                    {saasProducts.map((p) => (
                      <Link
                        key={p.name}
                        href="/#saas"
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-slate-300 hover:text-purple-300 py-1"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-3 flex flex-col gap-2">
                  <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="text-xs text-slate-300 hover:text-white py-1">
                    Portfolio Projects
                  </Link>
                  <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-xs text-slate-300 hover:text-white py-1">
                    Contact Us
                  </Link>
                </div>

                <a
                  href="https://wa.me/918000403090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-950"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
