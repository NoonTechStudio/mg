import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";
import GridBackground from "../components/GridBackground";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MeridianGrid's privacy policy — how we collect, use, and protect information from visitors and clients of our website and services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
          <GridBackground variant="lines" opacity={0.06} dark />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <SectionLabel text="Legal" />
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60 text-lg">Last updated: August 2026</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-10 text-mid-text leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Overview</h2>
              <p>
                MeridianGrid (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides technology
                consulting, custom software, and cloud services. This policy explains what information
                we collect through meridiangrid.in, how we use it, and the choices you have.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact details you submit through our contact form (name, email, phone, project details).</li>
                <li>Basic analytics data (pages visited, device/browser type, approximate location) collected via Google Analytics.</li>
                <li>Communications you send us via email or WhatsApp.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">How We Use Information</h2>
              <p>
                We use the information you provide to respond to enquiries, prepare quotes, deliver
                contracted services, and improve our website. We do not sell your personal information
                to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Analytics &amp; Cookies</h2>
              <p>
                We use Google Analytics to understand how visitors use our site. Google Analytics uses
                cookies and similar technologies to collect anonymized usage data. You can opt out of
                Google Analytics tracking using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-brand hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                , or by adjusting your browser&apos;s cookie settings.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Data Sharing</h2>
              <p>
                We may share information with trusted service providers (such as hosting, email, and
                analytics providers) strictly to operate our website and deliver our services, and only
                to the extent necessary for those purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information at
                any time by contacting us at{" "}
                <a href="mailto:hello@meridiangrid.in" className="text-teal-brand hover:underline">
                  hello@meridiangrid.in
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href="mailto:hello@meridiangrid.in" className="text-teal-brand hover:underline">
                  hello@meridiangrid.in
                </a>{" "}
                or via our{" "}
                <a href="/contact" className="text-teal-brand hover:underline">
                  contact page
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
