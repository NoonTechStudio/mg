import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionLabel from "../../components/SectionLabel";
import GridBackground from "../../components/GridBackground";
import Link from "next/link";

const services = [
  { icon: "🎨", title: "UI / UX Design", desc: "User-centred interfaces that convert visitors into customers." },
  { icon: "⚡", title: "Next.js / React Development", desc: "Fast, scalable web apps built on modern frameworks." },
  { icon: "🛍️", title: "E-commerce Platforms", desc: "Shopify and custom checkout experiences that drive sales." },
  { icon: "🎯", title: "Branding & Identity", desc: "Logos, colour palettes, and brand guidelines that stand out." },
  { icon: "📈", title: "Landing Pages & Funnels", desc: "High-converting pages built around your business goals." },
  { icon: "🔍", title: "SEO Optimisation", desc: "Technical and on-page SEO to rank higher and get found." },
];

const industries = [
  "Restaurants & Cafés", "Retail & Fashion", "Healthcare & Clinics",
  "Industrial & Manufacturing", "Wellness & Spas", "Events & Hospitality",
  "Real Estate", "Agencies & Consultancies",
];

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <GridBackground variant="lines" opacity={0.06} dark />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <SectionLabel text="Web Design & Development" />
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6">
              Websites that work
              <br />
              <span className="text-teal-brand">as hard as you do.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Beautiful, fast, and conversion-focused websites for every industry. From a
              restaurant menu to a full e-commerce platform — built on Next.js, delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#portfolio" className="px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity font-heading">
                See Our Work
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-teal-brand transition-colors font-heading">
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel text="What's Included" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy">Everything you need to launch and grow</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-blue-brand/10 hover:border-teal-brand/40 transition-colors group">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-2 group-hover:text-teal-brand transition-colors">{s.title}</h3>
                  <p className="text-mid-text text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-2xl text-navy mb-8">Industries we serve</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((ind) => (
                <span key={ind} className="px-5 py-2.5 border border-blue-brand/15 rounded-full text-mid-text text-sm font-medium hover:border-teal-brand hover:text-navy transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-center px-6">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready for a website that converts?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Tell us your goals and we&apos;ll design something that delivers results.</p>
          <Link href="/contact" className="inline-block px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity">
            Start a Project
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
