"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, ArrowRight, Zap, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="relative bg-slate-950 py-24 overflow-hidden border-t border-slate-800/80">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-spot-indigo opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <Badge variant="outline" className="mb-5 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
          Let&apos;s Build Something Remarkable
        </Badge>
        
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
          Have a breakthrough project in mind? <br />
          <span className="text-gradient-cyan">Let&apos;s make it real together.</span>
        </h2>
        
        <p className="text-slate-300 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you need high-end web engineering, custom SaaS architecture, Google Cloud migration, 
          or AI LLM workflows — our team is ready to consult on your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          
          {/* WhatsApp Direct */}
          <div className="rounded-3xl glass-card border border-slate-800 p-8 glass-card-hover group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-3">WhatsApp Engineering Desk</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                Instant inquiry, project scope discussion, or quick tech consultation. Direct line to our studio leads.
              </p>
            </div>
            <a
              href="https://wa.me/918000403090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-heading font-bold text-xs hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-950/50"
            >
              <span>Chat on WhatsApp (+91 80004 03090)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Email / Detailed Proposal */}
          <div className="rounded-3xl glass-card border border-slate-800 p-8 glass-card-hover group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-3">Detailed Scope &amp; RFP</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">
                Prefer sending a detailed project brief or scope document? Submit your requirements for a comprehensive proposal.
              </p>
            </div>
            <a
              href="/contact"
              className="relative group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-xs text-white overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 opacity-90 group-hover/btn:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                <span>Submit Scope &amp; Book Call</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

        </div>

        <p className="text-slate-500 text-xs font-mono">
          Direct Email:{" "}
          <a href="mailto:hello@meridiangrid.in" className="text-cyan-400 font-semibold hover:underline underline-offset-4">
            hello@meridiangrid.in
          </a>
        </p>

      </div>
    </section>
  );
}
