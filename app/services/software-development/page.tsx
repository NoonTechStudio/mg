import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionLabel from "../../components/SectionLabel";
import GridBackground from "../../components/GridBackground";
import Link from "next/link";

const capabilities = [
  { icon: "🧩", title: "Custom SaaS Platforms", desc: "Multi-tenant SaaS with billing, user management, and admin dashboards." },
  { icon: "🤖", title: "AI Integrations & Agents", desc: "LLM-powered features, chatbots, RAG pipelines, and autonomous agents." },
  { icon: "📊", title: "ERP & Admin Panels", desc: "Internal tools that replace expensive off-the-shelf software." },
  { icon: "🔌", title: "REST & GraphQL APIs", desc: "Well-documented, versioned APIs your team and partners can rely on." },
  { icon: "📱", title: "Mobile App Backends", desc: "Scalable backends for iOS and Android apps with real-time features." },
  { icon: "🗄️", title: "Database Architecture", desc: "PostgreSQL, Supabase, Firebase — designed for scale and reliability." },
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL"] },
  { category: "Cloud", items: ["Google Cloud", "Firebase", "Supabase", "Vercel"] },
  { category: "AI / ML", items: ["OpenAI", "LangChain", "Pinecone", "Anthropic"] },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <GridBackground variant="lines" opacity={0.06} dark />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <SectionLabel text="Custom Software & SaaS" />
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6">
              Enterprise software.
              <br />
              <span className="text-teal-brand">Without the enterprise price.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Custom-built platforms, AI integrations, and automation tools that give your business
              a real competitive edge — built by engineers who care about quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity font-heading"
              >
                Discuss Your Project
              </a>
              <Link href="/contact" className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-teal-brand transition-colors font-heading">
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel text="Capabilities" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy">What we build</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl p-6 border border-blue-brand/10 hover:border-teal-brand/40 transition-colors group">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-2 group-hover:text-teal-brand transition-colors">{c.title}</h3>
                  <p className="text-mid-text text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-navy">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-heading font-bold text-2xl text-white text-center mb-10">Our technology stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((group) => (
                <div key={group.category}>
                  <p className="text-teal-brand text-xs font-bold uppercase tracking-wider mb-3">{group.category}</p>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-white/50 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-teal-brand/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface text-center px-6">
          <h2 className="font-heading font-bold text-3xl text-navy mb-4">Have a product idea?</h2>
          <p className="text-mid-text mb-8 max-w-lg mx-auto">Let&apos;s turn it into production-ready software. We work with startups and established businesses alike.</p>
          <Link href="/contact" className="inline-block px-8 py-3.5 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors">
            Start the Conversation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
