"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit then show success
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-24">
        {/* Header */}
        <div className="bg-navy py-16 text-center px-6">
          <div className="max-w-2xl mx-auto">
            <SectionLabel text="Get In Touch" />
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
              Let&apos;s start a conversation.
            </h1>
            <p className="text-white/50 text-lg">
              Tell us about your project and we&apos;ll respond within one business day.
            </p>
          </div>
        </div>

        {/* Form + Info */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white border border-teal-brand/30 rounded-2xl p-12 text-center shadow-sm">
                  <div className="w-16 h-16 bg-teal-brand/15 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-teal-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-navy mb-3">Message Sent!</h2>
                  <p className="text-mid-text">
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-blue-brand/10 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-blue-brand/20 rounded-xl px-4 py-3 text-navy placeholder-muted focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-blue-brand/20 rounded-xl px-4 py-3 text-navy placeholder-muted focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Phone <span className="text-muted text-xs">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-blue-brand/20 rounded-xl px-4 py-3 text-navy placeholder-muted focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Service</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-blue-brand/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-colors text-sm bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Web Design & Development</option>
                      <option>Custom Software / SaaS</option>
                      <option>Google Workspace Setup</option>
                      <option>AppSheet Application</option>
                      <option>Cloud & Firebase</option>
                      <option>AI Integration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Project Budget</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-blue-brand/20 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-colors text-sm bg-white"
                    >
                      <option value="">Select a range...</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹75,000</option>
                      <option>₹75,000 – ₹2,00,000</option>
                      <option>₹2,00,000+</option>
                      <option>Let&apos;s discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full border border-blue-brand/20 rounded-xl px-4 py-3 text-navy placeholder-muted focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors font-heading flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-blue-brand/10 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-navy mb-5">Contact Details</h3>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      icon: "📱",
                      label: "WhatsApp",
                      value: "+91 80004 03090",
                      href: "https://wa.me/918000403090",
                    },
                    {
                      icon: "✉️",
                      label: "Email",
                      value: "hello@meridiangrid.in",
                      href: "mailto:hello@meridiangrid.in",
                    },
                    {
                      icon: "📍",
                      label: "Location",
                      value: "Vadodara, Gujarat, India",
                      href: undefined,
                    },
                    {
                      icon: "🕐",
                      label: "Hours",
                      value: "Mon–Sat, 9am–7pm IST",
                      href: undefined,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-muted text-xs mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-navy font-medium hover:text-teal-brand transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-navy font-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-brand/10 border border-teal-brand/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-teal-brand animate-pulse" />
                  <span className="text-teal-brand font-semibold text-sm">Accepting new projects</span>
                </div>
                <p className="text-mid-text text-sm">
                  Typical response time: <strong className="text-navy">Under 4 hours</strong>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-blue-brand/10 text-center">
                <div className="inline-block bg-white border-2 border-blue-brand/20 rounded-xl px-6 py-3 mb-3">
                  <span className="font-heading font-bold text-navy text-sm tracking-wide">
                    GOOGLE PARTNER
                  </span>
                </div>
                <p className="text-muted text-xs">
                  Certified reseller for Google Workspace & GCP
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
