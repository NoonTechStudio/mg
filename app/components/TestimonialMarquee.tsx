"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Owner, Bella Cucina", initials: "PS", rating: 5, text: "MeridianGrid completely transformed our digital presence. The custom Next.js web application increased our direct online bookings by 45% within 30 days." },
  { name: "Rajesh Patel", role: "Founder, Silk Traditions", initials: "RP", rating: 5, text: "They designed a stunning e-commerce platform for our handloom saree business. Our sales have doubled and customer compliments come in daily!" },
  { name: "James Wilson", role: "Founder, Urban Thread UK", initials: "JW", rating: 5, text: "The web design is world-class. Our international clients love the seamless checkout and performance scores." },
  { name: "Sarah Johnson", role: "Director, Serenity Spa Europe", initials: "SJ", rating: 5, text: "The AppSheet & web booking system works flawlessly and communicates the exact luxury aesthetic we required. Enquiries jumped 60%." },
  { name: "Meera Kapoor", role: "Owner, Chai & Beyond", initials: "MK", rating: 5, text: "The team listened to every single detail. The café platform feels warm, welcoming, fast, and modern." },
  { name: "Arjun Mehta", role: "CTO, LogiTrack India", initials: "AM", rating: 5, text: "Delivered our custom fleet management SaaS in 10 weeks — on spec, on budget. Code quality and GCP infrastructure setups are top tier." },
  { name: "Ravi Patel", role: "Founder, UrbanStyle Co.", initials: "RP", rating: 5, text: "Our platform converted at 3× the rate of our previous website. MeridianGrid is our long-term engineering partner." },
  { name: "Deepa Nair", role: "Marketing Director, BrandForge", initials: "DN", rating: 5, text: "They rebuilt our agency website and the results speak for themselves. Inquiries doubled in the first month." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 sm:w-96 rounded-2xl glass-card border border-slate-800 p-6 mx-3 glass-card-hover">
      <Stars count={t.rating} />
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4 mb-6 italic">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="font-heading font-bold text-white text-sm">{t.name}</p>
          <p className="text-slate-400 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  const row1 = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-slate-950 py-24 border-t border-slate-800/80 overflow-hidden">
      <div className="absolute inset-0 dots-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge variant="outline" className="mb-4 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
          Verified Client Reviews
        </Badge>
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-3">
          Trusted by <span className="text-gradient-cyan">Forward-Thinking Leaders.</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Stars count={5} />
          <span className="text-slate-300 text-xs font-mono">5.0 Star Rating across 50+ Global Clients</span>
        </div>
      </div>

      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex items-center w-max"
        >
          {row1.map((t, i) => (
            <TestCard key={`r1-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
