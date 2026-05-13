import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionLabel from "../../components/SectionLabel";
import GridBackground from "../../components/GridBackground";
import Link from "next/link";

const services = [
  { icon: "☁️", title: "GCP Setup", desc: "Project configuration, IAM, networking, and billing setup on Google Cloud Platform." },
  { icon: "🔥", title: "Firebase Development", desc: "Realtime database, Authentication, Cloud Functions, and Hosting." },
  { icon: "🚀", title: "Deployment & CI/CD", desc: "Zero-downtime deployments with GitHub Actions and Cloud Run." },
  { icon: "🔄", title: "Migration", desc: "Move from AWS, shared hosting, or on-premise to Google Cloud." },
  { icon: "📊", title: "Monitoring", desc: "Cloud Monitoring, logging, alerting, and uptime dashboards." },
  { icon: "🛡️", title: "Security", desc: "IAM policies, secrets management, VPC configuration, and compliance." },
];

export default function CloudPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <GridBackground variant="lines" opacity={0.06} dark />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <SectionLabel text="Cloud & Firebase" />
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-6">
              Infrastructure you can
              <br />
              <span className="text-teal-brand">trust to scale.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Host, scale, and secure your applications on Google Cloud Platform and Firebase.
              Setup, migration, and monthly management — all included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity font-heading"
              >
                Talk to an Engineer
              </a>
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
              <SectionLabel text="Services" />
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy">What&apos;s included</h2>
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

        {/* Trust badges */}
        <section className="py-14 bg-white border-y border-blue-brand/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {["Google Cloud Partner", "Firebase Certified", "GCP Architecture", "99.9% Uptime SLA"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 border border-blue-brand/20 rounded-xl px-5 py-3">
                  <span className="w-2 h-2 rounded-full bg-teal-brand" />
                  <span className="text-mid-text text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy text-center px-6">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready to move to the cloud?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Whether you&apos;re starting fresh or migrating, we&apos;ll handle every step.</p>
          <Link href="/contact" className="inline-block px-8 py-3.5 bg-teal-brand text-navy font-bold rounded-xl hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
