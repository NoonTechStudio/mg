"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";

const services = [
  { name: "Web Design & Development", href: "/services/web-design" },
  { name: "Custom Software & SaaS",   href: "/services/software-development" },
  { name: "Google Workspace",          href: "/services/google-workspace" },
  { name: "AppSheet Apps",             href: "/services/appsheet" },
  { name: "Cloud & Firebase",          href: "/services/cloud" },
];

const navLinks = [
  { name: "Process",          href: "/#process" },
  { name: "Google Solutions", href: "/#google-solutions" },
  { name: "Contact",          href: "/contact" },
];

export default function Navbar() {
  const pathname   = usePathname();
  const isHomePage = pathname === "/";

  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const check = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  // On non-home pages always show the white/light style
  const light = !isHomePage || scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top Info Bar ── */}
      <div className="bg-navy text-white/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">
          {/* Left — registration numbers */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-0.5">
            <span className="flex items-center gap-1.5">
              <span className="text-white/40 font-semibold uppercase tracking-widest text-[10px]">GSTIN</span>
              <span className="font-bold text-white tracking-wide">24DPLPS3319D1ZW</span>
            </span>
            <span className="hidden sm:block text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <span className="text-white/40 font-semibold uppercase tracking-widest text-[10px]">UDYAM</span>
              <span className="font-bold text-white tracking-wide">GJ-24-0235549</span>
            </span>
          </div>
          {/* Right — phone */}
          <a
            href="tel:+918000403090"
            className="flex items-center gap-1.5 hover:text-teal-brand transition-colors"
          >
            <Phone className="w-3 h-3 text-teal-brand" />
            <span className="font-bold text-white tracking-wide">+91 80004 03090</span>
          </a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className={cn(
        "transition-all duration-500 ease-in-out",
        light
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-3">

          {/* Logo */}
          <Link href="/" className="relative flex items-center flex-shrink-0 h-16">
            <Image
              src="/logo-white.png"
              alt="MeridianGrid"
              width={200} height={64}
              className={cn(
                "object-contain h-16 w-auto transition-opacity duration-500",
                light ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              priority
            />
            <Image
              src="/logo.png"
              alt="MeridianGrid"
              width={200} height={64}
              className={cn(
                "object-contain h-16 w-auto absolute inset-0 transition-opacity duration-500",
                light ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors duration-300",
                light ? "text-navy/65 hover:text-navy" : "text-white/80 hover:text-white"
              )}>
                Services
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )} />
              </button>

              <div className={cn(
                "absolute top-full left-0 mt-3 w-64 rounded-2xl shadow-xl overflow-hidden z-50",
                "bg-navy border border-white/10",
                "transition-all duration-200 origin-top",
                servicesOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              )}>
                {services.map((s, i) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm text-white/75 hover:text-white hover:bg-navy-light transition-colors",
                      i < services.length - 1 && "border-b border-white/5"
                    )}
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-brand flex-shrink-0" />
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  light ? "text-navy/65 hover:text-navy" : "text-white/80 hover:text-white",
                  pathname === link.href && "font-semibold",
                  pathname === link.href && light && "text-navy",
                  pathname === link.href && !light && "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold font-heading transition-all duration-300",
                light
                  ? "bg-navy text-white hover:bg-navy-light"
                  : "border border-teal-brand text-white hover:bg-teal-brand/10"
              )}
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              {[
                mobileOpen ? "rotate-45 translate-y-[7px]"   : "",
                mobileOpen ? "opacity-0 scale-x-0"           : "",
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : "",
              ].map((extra, i) => (
                <span
                  key={i}
                  className={cn(
                    "block h-0.5 rounded-full transition-all duration-300",
                    light ? "bg-navy" : "bg-white",
                    extra
                  )}
                />
              ))}
            </div>
          </button>
        </nav>

        {/* Mobile drawer */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className={cn(
            "border-t px-6 py-6 flex flex-col gap-5",
            light ? "bg-white border-slate-100" : "bg-navy border-white/10"
          )}>
            {/* Services */}
            <div>
              <p className={cn(
                "text-[10px] font-bold uppercase tracking-[0.15em] mb-3",
                light ? "text-slate-400" : "text-white/35"
              )}>Services</p>
              <div className="flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-2.5 px-3 rounded-lg text-sm transition-colors",
                      light
                        ? "text-navy/70 hover:text-navy hover:bg-slate-50"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div className={cn(
              "border-t flex flex-col gap-1 pt-5",
              light ? "border-slate-100" : "border-white/10"
            )}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                    light
                      ? "text-navy/70 hover:text-navy hover:bg-slate-50"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-teal-brand text-navy text-sm font-bold rounded-xl text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
