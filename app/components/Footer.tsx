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

      {/* MG watermark */}
      <div className="absolute bottom-0 right-0 text-white/[0.03] font-heading font-bold text-[20rem] leading-none select-none pointer-events-none">
        MG
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="MeridianGrid" width={32} height={32} className="object-contain" />
              <span className="font-heading font-bold text-white text-base">MeridianGrid</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              MeridianGrid is a full-service technology solutions company. From custom software and
              Google Cloud to AI integrations — your A to Z technology partner, from Vadodara to
              Europe.
            </p>
            <div className="space-y-2 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@meridiangrid.in" className="hover:text-teal-brand transition-colors">
                  hello@meridiangrid.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+918000403090" className="hover:text-teal-brand transition-colors">
                  +91 80004 03090
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-heading uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-white/40">
              {[
                ["Web Design & Development", "/services/web-design"],
                ["Custom Software & SaaS", "/services/software-development"],
                ["Google Workspace", "/services/google-workspace"],
                ["AppSheet Applications", "/services/appsheet"],
                ["Cloud & Firebase", "/services/cloud"],
                ["AI Integrations", "/services/software-development"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="hover:text-teal-brand transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-heading uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-white/40">
              {[
                ["Portfolio", "#portfolio"],
                ["Our Process", "#process"],
                ["Google Solutions", "#google-solutions"],
                ["Contact", "/contact"],
                ["Book a Call", "https://wa.me/918000403090"],
                ["GitHub", "https://github.com/MeridianGrid"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="hover:text-teal-brand transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Solutions */}
          <div id="google-solutions">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                <span className="text-white/60 text-xs font-semibold tracking-wider">GOOGLE PARTNER</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-white/40">
              {[
                "Google Workspace Reseller",
                "Google Cloud Platform",
                "Firebase Development",
                "AppSheet No-Code Apps",
                "Google Ads Management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-brand/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <span>© 2025 MeridianGrid. All rights reserved.</span>
          <span>Crafted with care in Vadodara, India 🇮🇳</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
