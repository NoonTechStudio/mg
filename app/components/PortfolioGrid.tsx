"use client";

import { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";
import GridBackground from "./GridBackground";

const projects = [
  {
    title: "Cozy Corner",
    category: "Web Design",
    description: "Warm cafeteria website with online menu, photo gallery, and local SEO.",
    url: "https://cozy-cafe-khaki.vercel.app",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "Bella Cucina",
    category: "Web Design",
    description: "Full restaurant website with online ordering cart, gallery, and testimonials.",
    url: "/portfolio-sites/Bella Cucina/index.html",
    tags: ["React", "E-commerce"],
  },
  {
    title: "Bright Powder Coating",
    category: "Business",
    description: "Multi-page industrial website with capabilities, certifications, and inquiry form.",
    url: "https://www.brightcoating.in/",
    tags: ["Business", "B2B"],
  },
  {
    title: "Urban Thread",
    category: "E-commerce",
    description: "Premium fashion boutique with full e-commerce catalogue and brand identity.",
    url: "/portfolio-sites/Urban Thread/index.html",
    tags: ["Shopify", "Branding"],
  },
  {
    title: "Blissful Sanctuary",
    category: "Web Design",
    description: "Luxury spa website with online booking, treatment menu, and gallery.",
    url: "/portfolio-sites/Blissful Sanctuary/index.html",
    tags: ["Booking", "Wellness"],
  },
  {
    title: "Prime Surface Treatment",
    category: "Business",
    description: "Single-page website with WhatsApp contact integration.",
    url: "https://www.primesurfacetreatment.com/",
    tags: ["Business", "WhatsApp"],
  },
  {
    title: "Event Mantra",
    category: "Web Design",
    description: "Full event management website with packages, gallery, and inquiry form.",
    url: "/portfolio-sites/Event Mantra/index.html",
    tags: ["Events", "React"],
  },
  {
    title: "Pride Coat",
    category: "Business",
    description: "Brand website for powder coating manufacturer with B2B inquiry system.",
    url: "https://pridecoat.com",
    tags: ["Manufacturing", "B2B"],
  },
  {
    title: "Aum Pharmacy",
    category: "Web Design",
    description: "Pharmacy website with WhatsApp ordering integration for medicine catalogue.",
    url: "https://www.aumpharmacy.store",
    tags: ["Healthcare", "WhatsApp API"],
  },
  {
    title: "Winsun Packaging",
    category: "Business",
    description: "Professional B2B website for corrugated box manufacturer.",
    url: "https://www.winsunpackaging.in",
    tags: ["Manufacturing", "B2B"],
  },
  {
    title: "Rest and Relax",
    category: "Web Design",
    description: "Leisure destination with picnic packages, gallery, and online booking.",
    url: "https://www.restandrelax.in",
    tags: ["Leisure", "Booking"],
  },
  {
    title: "JK Metals",
    category: "Business",
    description: "Industrial steel company with product catalogue and B2B inquiry.",
    url: "https://www.jkmetal.in",
    tags: ["Industrial", "SEO"],
  },
  {
    title: "Serenity Spa",
    category: "Web Design",
    description: "Premium spa with appointment booking, treatment menu, and gift certificates.",
    url: "/portfolio-sites/Serenity Spa/index.html",
    tags: ["Booking", "Wellness"],
  },
  {
    title: "Bean Bliss Café",
    category: "Web Design",
    description: "Modern coffee shop with filterable digital menu and Instagram integration.",
    url: "/portfolio-sites/Morning Brew/index.html",
    tags: ["Food", "Digital Menu"],
  },
  {
    title: "Dhwani Packaging",
    category: "Business",
    description: "Clean B2B website for corrugated packaging with custom order flow.",
    url: "https://dhwanipackaging.com",
    tags: ["Manufacturing", "B2B"],
  },
];

const tabs = ["All", "Web Design", "E-commerce", "Branding", "Business"];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="relative py-24 bg-navy overflow-hidden">
      <GridBackground variant="lines" opacity={0.06} dark />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionLabel text="Our Work" />
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Projects that speak for themselves.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            15 real projects delivered across restaurants, retail, industrial, wellness, and beyond.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 justify-center mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-teal-brand text-navy"
                  : "border border-white/20 text-white/60 hover:text-white hover:border-white/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group bg-navy-dark border border-white/10 rounded-xl p-6 card-hover transition-all duration-500 cursor-pointer`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-teal-brand transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-white/10 text-white/40 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-brand text-sm font-semibold group-hover:gap-3 transition-all"
              >
                View Project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
