import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionLabel from "../../components/SectionLabel";
import GridBackground from "../../components/GridBackground";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Workspace Enterprise Setup & Management",
  description:
    "Certified Google Workspace partner offering domain setup, zero-downtime migration, security policy enforcement, and ongoing admin support.",
  alternates: { canonical: "/services/google-workspace" },
};

const plans = [
  {
    name: "Business Starter",
    price: "₹136",
    period: "/user/month",
    features: [
      "Custom & secure business email",
      "100-participant video meetings",
      "30 GB pooled storage per user",
      "Security & management controls",
      "Standard support",
    ],
    highlight: false,
  },
  {
    name: "Business Standard",
    price: "₹736",
    period: "/user/month",
    features: [
      "Custom & secure business email",
      "150-participant video meetings + recording",
      "2 TB pooled storage per user",
      "eDiscovery, retention",
      "Enhanced support",
    ],
    highlight: true,
  },
  {
    name: "Business Plus",
    price: "₹1,380",
    period: "/user/month",
    features: [
      "Custom & secure business email + eDiscovery",
      "500-participant video meetings + recording",
      "5 TB pooled storage per user",
      "Enhanced security features",
      "Premium support",
    ],
    highlight: false,
  },
];

const apps = [
  { name: "Gmail", color: "#EA4335", icon: "✉️" },
  { name: "Drive", color: "#4285F4", icon: "📁" },
  { name: "Meet", color: "#00897B", icon: "📹" },
  { name: "Docs", color: "#4285F4", icon: "📄" },
  { name: "Sheets", color: "#0F9D58", icon: "📊" },
  { name: "Slides", color: "#F4B400", icon: "📑" },
  { name: "Calendar", color: "#4285F4", icon: "📅" },
  { name: "Chat", color: "#00BCD4", icon: "💬" },
];

export default function GoogleWorkspacePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <GridBackground variant="lines" opacity={0.06} dark />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <SectionLabel text="Google Workspace" />
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6">
              Google Workspace
              <br />
              <span className="text-teal-brand">for Your Business</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Professional email on your domain, seamless collaboration, and enterprise-grade
              security — complete setup, migration, and ongoing management by certified resellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity font-heading"
              >
                Get Started Today
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-teal-brand transition-colors font-heading"
              >
                Talk to Us First
              </Link>
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-heading font-bold text-2xl text-navy text-center mb-10">
              Everything your team needs, in one place
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {apps.map((app) => (
                <div key={app.name} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white border border-blue-brand/10 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                    {app.icon}
                  </div>
                  <span className="text-mid-text text-xs font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel text="What We Do" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy">
                Complete Workspace management
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "⚙️", title: "Setup", desc: "Full Workspace configuration with your domain, users, groups, and security policies." },
                { icon: "🔄", title: "Migration", desc: "Seamless migration from Microsoft 365, cPanel email, or any other email provider." },
                { icon: "🎓", title: "Training", desc: "Team onboarding sessions so everyone uses Workspace to its full potential." },
                { icon: "🛠️", title: "Management", desc: "Monthly admin support, user management, and troubleshooting included." },
              ].map((item) => (
                <div key={item.title} className="border border-blue-brand/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-mid-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel text="Pricing" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy">
                Google Workspace Plans
              </h2>
              <p className="text-mid-text mt-3">Prices as certified reseller. Setup fee applies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-7 border ${
                    plan.highlight
                      ? "border-teal-brand bg-navy text-white"
                      : "border-blue-brand/15 bg-white"
                  }`}
                >
                  {plan.highlight && (
                    <div className="text-xs font-bold text-teal-brand uppercase tracking-wider mb-3">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`font-heading font-bold text-lg mb-1 ${plan.highlight ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className={`font-heading font-bold text-3xl ${plan.highlight ? "text-teal-brand" : "text-navy"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-white/50" : "text-mid-text"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-7">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-white/70" : "text-mid-text"}`}>
                        <span className="text-teal-brand mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                      plan.highlight
                        ? "bg-teal-brand text-navy hover:opacity-90"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-center px-6">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to go Google?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Get professional email on your domain with the world&apos;s most trusted productivity suite.
          </p>
          <a
            href="https://wa.me/918000403090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
