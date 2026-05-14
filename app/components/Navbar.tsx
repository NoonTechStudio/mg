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
    // Switch when user scrolls past ~90% of the hero (which is min-h-screen)
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo — two images crossfading via opacity */}
        <Link href="/" className="flex items-center flex-shrink-0 relative h-20 w-auto">
          {/* White logo — visible on hero */}
          <Image
            src="/logo-white.png"
            alt="MeridianGrid"
            width={220}
            height={80}
            className={`object-contain h-20 w-auto transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          {/* Colour logo — fades in after hero */}
          <Image
            src="/logo.png"
            alt="MeridianGrid"
            width={220}
            height={80}
            className={`object-contain h-20 w-auto absolute inset-0 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                scrolled
                  ? "text-navy/70 hover:text-navy"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-navy border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
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
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-navy/70 hover:text-navy"
                  : "text-white/80 hover:text-white"
              }`}
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
            className={`px-5 py-2 border text-sm font-semibold rounded-lg transition-all duration-300 font-heading ${
              scrolled
                ? "bg-navy border-navy text-white hover:bg-navy-light"
                : "bg-transparent border-teal-brand text-white hover:bg-teal-brand/10"
            }`}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 transition-all duration-300 ${
                scrolled ? "bg-navy" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 transition-all duration-300 ${
                scrolled ? "bg-navy" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 transition-all duration-300 ${
                scrolled ? "bg-navy" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`lg:hidden border-t px-6 py-6 flex flex-col gap-4 transition-colors duration-300 ${
            scrolled
              ? "bg-white border-gray-100"
              : "bg-navy border-white/10"
          }`}
        >
          <div className="flex flex-col gap-1">
            <p
              className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                scrolled ? "text-mid-text" : "text-muted"
              }`}
            >
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`py-2 text-sm transition-colors ${
                  scrolled
                    ? "text-navy/70 hover:text-navy"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div
            className={`border-t pt-4 flex flex-col gap-3 ${
              scrolled ? "border-gray-100" : "border-white/10"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-navy/70 hover:text-navy"
                    : "text-white/80 hover:text-white"
                }`}
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
