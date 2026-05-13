"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Web Design & Development", href: "/services/web-design" },
  { name: "Custom Software & SaaS", href: "/services/software-development" },
  { name: "Google Workspace", href: "/services/google-workspace" },
  { name: "AppSheet Apps", href: "/services/appsheet" },
  { name: "Cloud & Firebase", href: "/services/cloud" },
];

const navLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Google Solutions", href: "#google-solutions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg border-b border-teal-brand/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="MeridianGrid"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-heading font-bold text-white text-lg tracking-tight">
            MeridianGrid
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-navy border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-navy-light border-b border-white/5 last:border-0 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/918000403090"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-navy border border-teal-brand text-white text-sm font-semibold rounded-lg hover:bg-teal-brand/10 transition-all duration-200 font-heading"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-white/80 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-2.5 bg-teal-brand text-navy text-sm font-bold rounded-lg text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
