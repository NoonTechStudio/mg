"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Code2, 
  Building2, 
  Smartphone, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Terminal,
  Zap,
  Shield,
  Layers,
  Cpu
} from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  accentColor: string;
  borderColor: string;
  badge: string;
  href: string;
  features: string[];
  codeSnippet: string;
  keyOutputs: string[];
}

const pillars: Pillar[] = [
  {
    id: "web",
    number: "01",
    title: "Digital Experiences & Web Design",
    tagline: "High-converting, ultra-fast web platforms",
    description: "We craft visually captivating, high-converting web experiences using Next.js, React, Tailwind CSS, and Framer Motion. From sleek SaaS landing pages to full enterprise platforms.",
    icon: Sparkles,
    accentColor: "from-cyan-500 to-blue-500",
    borderColor: "hover:border-cyan-500/50",
    badge: "Modern Web Stack",
    href: "/services/web-design",
    features: [
      "Custom Next.js 16 & React Architecture",
      "Tailwind CSS & Framer Motion UI/UX",
      "E-Commerce & Payment Gateways",
      "Lighthouse 95+ Performance Scoring",
      "SEO Strategy & Core Web Vitals Optimization",
      "Headless CMS Integration (Sanity, Strapi)"
    ],
    codeSnippet: `// High-Performance Next.js Page Architecture
export default async function Page() {
  const data = await getOptimizedContent();
  return <WebExperience content={data} animateScroll={true} />;
}`,
    keyOutputs: ["Fast LCP < 1.0s", "CLS < 0.05", "100% Mobile Responsive"]
  },
  {
    id: "software",
    number: "02",
    title: "Software Engineering & Custom SaaS",
    tagline: "Tailored enterprise software & cloud backends",
    description: "We engineer resilient custom software, multi-tenant SaaS applications, REST/GraphQL APIs, and complex admin dashboards that scale seamlessly as your business grows.",
    icon: Code2,
    accentColor: "from-purple-500 to-indigo-500",
    borderColor: "hover:border-purple-500/50",
    badge: "Custom Engineering",
    href: "/services/software-development",
    features: [
      "Multi-Tenant SaaS Architecture",
      "Node.js, Python & Go Backend Services",
      "PostgreSQL, Redis & MongoDB Systems",
      "RESTful & GraphQL API Infrastructure",
      "Microservices & Event-Driven Workers",
      "Enterprise Admin Control Panels"
    ],
    codeSnippet: `// Scalable Backend Service Endpoint
export async function POST(req: Request) {
  const session = fontAuth(req);
  return NextResponse.json({ status: "processed", tenantId: session.tenantId });
}`,
    keyOutputs: ["Zero Lock-in", "99.9% Uptime", "End-to-End Encryption"]
  },
  {
    id: "workspace",
    number: "03",
    title: "Google Workspace Enterprise",
    tagline: "Official Google Partner deployment & admin",
    description: "Complete setup, domain migration, security policy enforcement, and ongoing management for Google Workspace. Equip your workforce with secure Gmail, Docs, Drive & Meet.",
    icon: Building2,
    accentColor: "from-blue-500 to-cyan-500",
    borderColor: "hover:border-blue-500/50",
    badge: "Certified Partner",
    href: "/services/google-workspace",
    features: [
      "Enterprise Email Domain Setup & DNS Auth",
      "Zero-Downtime Data Migration from Legacy Systems",
      "2-Step Verification & Advanced DLP Rules",
      "Google Admin Console Security Audit",
      "Shared Drive Organization & Permissions",
      "Dedicated 24/7 Workspace Support SLA"
    ],
    codeSnippet: `// Google Admin SDK Directory Integration
const admin = google.admin({ version: "directory_v1", auth });
await admin.users.insert({ requestBody: newUserPayload });`,
    keyOutputs: ["SOC2 Compliance", "Zero Data Loss", "Certified Support"]
  },
  {
    id: "appsheet",
    number: "04",
    title: "AppSheet No-Code Applications",
    tagline: "Rapid custom mobile & web tools from Google Sheets",
    description: "Transform static spreadsheets and databases into functional native-feeling mobile and web applications with zero traditional maintenance overhead.",
    icon: Smartphone,
    accentColor: "from-emerald-500 to-teal-500",
    borderColor: "hover:border-emerald-500/50",
    badge: "Google Technology",
    href: "/services/appsheet",
    features: [
      "Google Sheets & SQL Database Connections",
      "Field Audit & Inspection Mobile Apps",
      "Inventory & Order Tracking Workflows",
      "Automated Email & Push Notification Triggers",
      "Offline Mode & GPS Location Tracking",
      "Custom Role-Based Security Controls"
    ],
    codeSnippet: `// AppSheet Automated Trigger Rule
LINKTOVIEW("Task Details") + "&Selected_ID=" + [_THISROW].[Task_ID]`,
    keyOutputs: ["10x Faster Build", "Mobile + Web Native", "Seamless Sheets Sync"]
  },
  {
    id: "cloud-ai",
    number: "05",
    title: "Cloud & AI Automations",
    tagline: "GCP infrastructure, Firebase & LLM agent pipelines",
    description: "Harness Google Cloud Platform, Firebase, and cutting-edge Artificial Intelligence to automate repetitive workflows, build AI agents, and power scalable cloud backends.",
    icon: Cloud,
    accentColor: "from-purple-500 to-cyan-500",
    borderColor: "hover:border-indigo-500/50",
    badge: "GCP & AI Stack",
    href: "/services/cloud",
    features: [
      "Google Cloud Platform (GCP) Architecture",
      "Firebase Realtime DB & Cloud Functions",
      "Custom RAG Vector Search & Knowledge Hubs",
      "LLM Agent Automations for Business Logic",
      "Serverless Container Deployments (Cloud Run)",
      "Automated Backup & Disaster Recovery"
    ],
    codeSnippet: `// Cloud Run Serverless Container Deploy
import { GoogleAIStudio } from "@google/generative-ai";
const response = await ai.generateContent({ prompt: "Analyze workflow..." });`,
    keyOutputs: ["Serverless Scale", "LLM Integration", "Auto Disaster Recovery"]
  }
];

export default function ServicePillars() {
  const [activePillarId, setActivePillarId] = useState<string>("web");
  const selectedPillar = pillars.find(p => p.id === activePillarId) || pillars[0];

  return (
    <section id="services" className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden">
      {/* Glow spot accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-spot-cyan opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 glow-spot-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dots-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono tracking-widest text-[11px] uppercase py-1 px-3">
            Core Engineering Capabilities
          </Badge>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-6">
            Five Pillars. <span className="text-gradient-cyan">One Strategic Partner.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From initial web design to enterprise Google Cloud infrastructure — MeridianGrid covers 
            every tier of modern technology so you never have to juggle multiple vendors.
          </p>
        </div>

        {/* Pillar Selection Pills (Desktop & Tablet) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {pillars.map((p) => {
            const IconComp = p.icon;
            const isSelected = activePillarId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillarId(p.id)}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-3 rounded-xl font-heading text-xs font-semibold transition-all duration-300",
                  isSelected
                    ? "bg-slate-800 text-white border border-cyan-500/40 shadow-lg shadow-cyan-950/40 scale-105"
                    : "glass-pill text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                )}
              >
                <IconComp className={cn("w-4 h-4", isSelected ? "text-cyan-400" : "text-slate-500")} />
                <span>{p.title.split(" & ")[0]}</span>
                <span className="font-mono text-[10px] opacity-60">[{p.number}]</span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Pillar Main Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mb-12 rounded-3xl glass-card border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Border Accent Glow */}
            <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", selectedPillar.accentColor)} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Side: Overview & Capabilities */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-cyan-400 font-bold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/20">
                    PILLAR {selectedPillar.number}
                  </span>
                  <Badge variant="outline" className="border-slate-700 text-slate-300 font-mono text-[10px]">
                    {selectedPillar.badge}
                  </Badge>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                  {selectedPillar.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {selectedPillar.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedPillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Key Outputs Pill Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80 mb-6">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Guaranteed Standards:</span>
                  {selectedPillar.keyOutputs.map((out, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                      ⚡ {out}
                    </span>
                  ))}
                </div>

                <Link
                  href={selectedPillar.href}
                  className="inline-flex items-center gap-2 text-cyan-400 font-heading font-semibold text-sm hover:text-cyan-300 transition-colors group"
                >
                  <span>Explore {selectedPillar.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Side: Interactive Code & Architecture Snippet */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs shadow-xl relative">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                      {selectedPillar.id}-architecture.ts
                    </span>
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Compiles Clean
                    </span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed overflow-x-auto my-2">
                    <code>{selectedPillar.codeSnippet}</code>
                  </pre>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Target: Node v20 / Edge Runtime</span>
                    <span className="text-cyan-400 font-semibold">Ready for Scale</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* 5 Cards Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => setActivePillarId(p.id)}
                className={cn(
                  "cursor-pointer rounded-2xl glass-card p-6 border border-slate-800/80 transition-all duration-300 glass-card-hover group relative",
                  activePillarId === p.id ? "border-cyan-500/50 bg-slate-900/80" : ""
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-semibold">{p.number}</span>
                </div>

                <Badge variant="outline" className="mb-2 text-[10px] font-mono border-slate-800 text-slate-400">
                  {p.badge}
                </Badge>
                
                <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {p.tagline}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Expand Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
