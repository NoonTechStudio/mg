import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionLabel from "../../components/SectionLabel";
import GridBackground from "../../components/GridBackground";
import Link from "next/link";

const useCases = [
  { icon: "🏢", title: "Real Estate CRM", desc: "Track leads, properties, viewings, and deals — all from Google Sheets." },
  { icon: "🏥", title: "Clinic Management", desc: "Patient records, appointments, prescriptions, and billing in one app." },
  { icon: "🏗️", title: "Construction Tracker", desc: "Site progress, material tracking, labour attendance, and approvals." },
  { icon: "📦", title: "Inventory System", desc: "Stock levels, purchase orders, supplier management, and alerts." },
  { icon: "👥", title: "HR & Onboarding", desc: "Employee records, leave tracking, onboarding checklists, and payroll." },
  { icon: "🚚", title: "Delivery Tracking", desc: "Driver assignments, route logging, proof of delivery, and status updates." },
];

const steps = [
  {
    number: "01",
    title: "Map Your Data",
    desc: "We start with your Google Sheets or existing spreadsheet and design the data model that powers your app.",
  },
  {
    number: "02",
    title: "Build the App",
    desc: "Using AppSheet's no-code platform, we build views, forms, workflows, and automations — typically in 1–3 weeks.",
  },
  {
    number: "03",
    title: "Deploy & Train",
    desc: "Published to iOS, Android, and web. We train your team and provide documentation for ongoing use.",
  },
];

export default function AppSheetPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <GridBackground variant="lines" opacity={0.06} dark />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <SectionLabel text="AppSheet No-Code Apps" />
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6">
              Build Powerful Apps
              <br />
              <span className="text-teal-brand">Without Code</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Transform your Google Sheets into professional mobile and web applications. CRM,
              inventory, HR, field tracking — delivered in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity font-heading"
              >
                Build My App
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-teal-brand transition-colors font-heading"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border border-teal-brand/20 rounded-2xl p-8 lg:p-10">
              <span className="inline-block bg-teal-brand/10 text-teal-brand text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Featured Case Study
              </span>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">
                Real Estate CRM — from spreadsheet to mobile app in 2 weeks
              </h2>
              <p className="text-mid-text leading-relaxed mb-6">
                A Vadodara real estate firm was managing 200+ leads in a messy spreadsheet. We built
                them an AppSheet CRM with lead status tracking, property listings, viewing scheduler,
                automated WhatsApp reminders, and a dashboard for the sales team — all powered by
                their existing Google Sheet.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "2 weeks", label: "Delivery time" },
                  { value: "200+", label: "Leads managed" },
                  { value: "0", label: "Lines of code" },
                  { value: "40%", label: "Time saved" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading font-bold text-2xl text-teal-brand">{stat.value}</div>
                    <div className="text-mid-text text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel text="Use Cases" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy">
                What we build with AppSheet
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="border border-blue-brand/10 rounded-2xl p-6 hover:border-teal-brand/40 transition-colors group"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-2 group-hover:text-teal-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-mid-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel text="Our Process" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
                How AppSheet development works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="font-heading font-bold text-5xl text-teal-brand/20 mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface text-center px-6">
          <SectionLabel text="Ready to build?" />
          <h2 className="font-heading font-bold text-3xl text-navy mb-4">
            From Google Sheets to a real app — in weeks
          </h2>
          <p className="text-mid-text mb-8 max-w-lg mx-auto">
            Tell us what you&apos;re managing in spreadsheets today. We&apos;ll show you what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors"
          >
            Start a Conversation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
