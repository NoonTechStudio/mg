"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, Send, MessageCircle } from "lucide-react";

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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main className="relative pt-36 sm:pt-44 pb-24 overflow-hidden">
        {/* Glow backdrop accents */}
        <div className="absolute top-1/4 left-10 w-96 h-96 glow-spot-cyan opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 glow-spot-purple opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />

        {/* Header Hero */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
            Contact &amp; Engineering Inquiry
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4 leading-tight">
            Let&apos;s Architect Something <span className="text-gradient-cyan">Exceptional.</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Tell us about your project vision, timeline, and technical needs. 
            Our engineering lead will evaluate your scope and respond within 4 hours.
          </p>
        </div>

        {/* Main Grid: Form + Info Sidebar */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Contact Form Card */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-3xl glass-card border border-emerald-500/30 p-10 sm:p-14 text-center shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl text-white mb-3">Inquiry Received!</h2>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Thank you for reaching out. A MeridianGrid engineering principal will review your proposal and respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-heading font-semibold hover:text-white hover:border-cyan-400 transition-all"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl glass-card border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6"
                >
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest pb-2 border-b border-slate-900 flex items-center justify-between">
                    <span>Project Scope Form</span>
                    <span className="text-slate-400">* Required Fields</span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 font-medium">
                        FULL NAME <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-slate-950/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 font-medium">
                        BUSINESS EMAIL <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-xl bg-slate-950/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 font-medium">
                      PHONE / WHATSAPP <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-slate-950/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  {/* Service & Budget Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 font-medium">
                        ENGINEERING PILLAR
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-950/90 border border-slate-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      >
                        <option value="" className="bg-slate-950 text-slate-400">Select a pillar...</option>
                        <option value="Digital Experiences" className="bg-slate-950 text-white">Digital Experiences &amp; Web Design</option>
                        <option value="Software Engineering" className="bg-slate-950 text-white">Custom Software &amp; SaaS</option>
                        <option value="Google Workspace" className="bg-slate-950 text-white">Google Workspace Enterprise</option>
                        <option value="AppSheet" className="bg-slate-950 text-white">AppSheet Applications</option>
                        <option value="Cloud & AI" className="bg-slate-950 text-white">Cloud &amp; AI Automations</option>
                        <option value="Other" className="bg-slate-950 text-white">Other Technical Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 font-medium">
                        ESTIMATED BUDGET
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-950/90 border border-slate-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      >
                        <option value="" className="bg-slate-950 text-slate-400">Select a budget range...</option>
                        <option value="Under ₹50k" className="bg-slate-950 text-white">Under ₹50,000</option>
                        <option value="₹50k - ₹1.5L" className="bg-slate-950 text-white">₹50,000 – ₹1,50,000</option>
                        <option value="₹1.5L - ₹4L" className="bg-slate-950 text-white">₹1,50,000 – ₹4,00,000</option>
                        <option value="₹4L+" className="bg-slate-950 text-white">₹4,00,000+ Enterprise</option>
                        <option value="Discuss" className="bg-slate-950 text-white">Flexible / Open for Discussion</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 font-medium">
                      PROJECT DESCRIPTION <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Detail your goals, required features, technical constraints, and target launch timeline..."
                      className="w-full rounded-xl bg-slate-950/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative group w-full py-4 rounded-xl font-heading font-semibold text-xs text-white overflow-hidden shadow-xl shadow-cyan-950/60 disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>{loading ? "Transmitting Proposal..." : "Submit Inquiry & Request Scope Call"}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">

              {/* Direct Channels Card */}
              <div className="rounded-3xl glass-card border border-slate-800 p-7 shadow-xl space-y-5">
                <div className="text-xs font-mono text-purple-400 uppercase tracking-widest pb-3 border-b border-slate-800">
                  Direct Engineering Channels
                </div>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918000403090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">WhatsApp Instant Line</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">+91 80004 03090</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:hello@meridiangrid.in"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">hello@meridiangrid.in</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Engineering HQ</div>
                      <div className="text-xs font-semibold text-slate-200">Vadodara, Gujarat, India 🇮🇳</div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Working Hours</div>
                      <div className="text-xs font-semibold text-slate-200">Mon–Sat, 9:00 AM – 7:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Pill Card */}
              <div className="rounded-2xl bg-emerald-950/40 border border-emerald-500/30 p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-emerald-300">Accepting Q3 Client Cohort</div>
                    <div className="text-[10px] text-slate-300">Average first response: &lt; 4 Hours</div>
                  </div>
                </div>
              </div>

              {/* Google Partner Badge Card */}
              <div className="rounded-2xl glass-card border border-slate-800 p-5 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 text-xs font-mono font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GOOGLE CLOUD PARTNER</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Certified reseller &amp; architect for Google Workspace Enterprise &amp; GCP
                </p>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
