import SectionLabel from "./SectionLabel";
import GridBackground from "./GridBackground";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="relative py-24 bg-navy overflow-hidden">
      <GridBackground variant="dots" opacity={0.05} dark />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <SectionLabel text="Let's Build Together" />
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-5">
          Have a project in mind?
          <br />
          <span className="text-teal-brand">Let&apos;s make it real.</span>
        </h2>
        <p className="text-white/50 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          Drop your details and we&apos;ll reply within one business day with a no-pressure intro call.
          No spam. Just a real conversation.
        </p>

        {/* Two contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {/* WhatsApp */}
          <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-8 text-left card-hover teal-glow">
            <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.523 5.845L.057 23.012a.5.5 0 00.632.598l5.374-1.542A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.03-1.387l-.36-.214-3.724 1.07 1.022-3.608-.235-.372A9.787 9.787 0 012.182 12C2.182 6.572 6.572 2.182 12 2.182S21.818 6.572 21.818 12 17.428 21.818 12 21.818z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">WhatsApp us directly</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Quick questions, project briefs, or just a hello — we respond within hours.
            </p>
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl text-sm hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-8 text-left card-hover teal-glow">
            <div className="w-12 h-12 bg-blue-brand/15 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-blue-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">Send a detailed brief</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Prefer email? Send us your project details and we&apos;ll come back with a thoughtful proposal.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-brand text-white font-semibold rounded-xl text-sm hover:bg-blue-700 transition-colors"
            >
              Open Full Contact Form
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-white/30 text-sm">or email directly:</span>
          <a
            href="mailto:hello@meridiangrid.in"
            className="text-teal-brand font-semibold text-lg hover:underline tracking-tight"
          >
            hello@meridiangrid.in
          </a>
        </div>
      </div>
    </section>
  );
}
