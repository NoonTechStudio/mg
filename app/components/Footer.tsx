import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2E86DE 1px, transparent 1px), linear-gradient(to bottom, #2E86DE 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* MG hologram watermark */}
      <div className="absolute bottom-0 right-0 text-white/[0.03] font-heading font-bold text-[22rem] leading-none select-none pointer-events-none">
        MG
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Hero logo block ── */}
        <div className="flex flex-col items-center text-center pt-20 pb-12 border-b border-white/5">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo-white.png"
              alt="MeridianGrid"
              width={340}
              height={100}
              className="object-contain h-24 w-auto"
              priority
            />
          </Link>

          <p className="text-white/40 text-base leading-relaxed max-w-xl mb-8">
            A full-service technology solutions company — from custom software and Google Cloud
            to AI integrations. Your A to Z technology partner, from Vadodara to Europe.
          </p>

          {/* Contact pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="mailto:hello@meridiangrid.in"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-white/60 hover:text-white transition-all duration-200"
            >
              <span>✉️</span>
              hello@meridiangrid.in
            </a>
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-white/60 hover:text-white transition-all duration-200"
            >
              <span>📱</span>
              +91 80004 03090
            </a>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white/40">
              <span>📍</span>
              Vadodara, Gujarat, India
            </div>
          </div>
        </div>

        {/* ── Three-column links ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 border-b border-white/5">

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-6 font-heading uppercase tracking-[0.18em]">
              Services
            </h4>
            <ul className="space-y-3.5">
              {[
                ["Web Design & Development", "/services/web-design"],
                ["Custom Software & SaaS", "/services/software-development"],
                ["Google Workspace", "/services/google-workspace"],
                ["AppSheet Applications", "/services/appsheet"],
                ["Cloud & Firebase", "/services/cloud"],
                ["AI Integrations", "/services/software-development"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 hover:text-teal-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-teal-brand transition-all duration-200 overflow-hidden" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-6 font-heading uppercase tracking-[0.18em]">
              Company
            </h4>
            <ul className="space-y-3.5">
              {[
                ["Portfolio", "/portfolio"],
                ["Our Process", "#process"],
                ["Google Solutions", "#google-solutions"],
                ["Contact", "/contact"],
                ["Book a Call", "https://wa.me/918000403090"],
                ["GitHub", "https://github.com/MeridianGrid"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 hover:text-teal-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-teal-brand transition-all duration-200 overflow-hidden" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Solutions */}
          <div id="google-solutions">
            <div className="flex items-center gap-2 mb-6">
              <h4 className="text-white font-semibold text-xs font-heading uppercase tracking-[0.18em]">
                Google Solutions
              </h4>
              <span className="text-[10px] font-bold text-teal-brand border border-teal-brand/30 rounded px-1.5 py-0.5 tracking-wider">
                PARTNER
              </span>
            </div>
            <ul className="space-y-3.5">
              {[
                "Google Workspace Reseller",
                "Google Cloud Platform",
                "Firebase Development",
                "AppSheet No-Code Apps",
                "Google Ads Management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-brand/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <span>© 2025 MeridianGrid. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Crafted with care in Vadodara, India
            <span className="text-sm">🇮🇳</span>
          </span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
