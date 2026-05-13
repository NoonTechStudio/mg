import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner, Bella Cucina",
    initials: "PS",
    rating: 5,
    text: "MeridianGrid completely transformed our restaurant's digital presence. The website increased our takeaway orders by 45%.",
  },
  {
    name: "Rajesh Patel",
    role: "Founder, Silk Traditions",
    initials: "RP",
    rating: 5,
    text: "They designed a stunning e-commerce platform for our handloom saree business. Sales have doubled since launch!",
  },
  {
    name: "James Wilson",
    role: "Founder, Urban Thread",
    initials: "JW",
    rating: 5,
    text: "The e-commerce site is absolutely stunning. Customers compliment the design regularly and conversion rate went up significantly.",
  },
  {
    name: "Sarah Johnson",
    role: "Director, Serenity Spa",
    initials: "SJ",
    rating: 5,
    text: "Booking system works flawlessly and communicates the exact luxury feel we wanted. Enquiries up 60% in first two months.",
  },
  {
    name: "Meera Kapoor",
    role: "Owner, Chai & Beyond",
    initials: "MK",
    rating: 5,
    text: "The team listened to every detail. The café website feels exactly like our brand — warm, welcoming, and modern.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO, LogiTrack India",
    initials: "AM",
    rating: 5,
    text: "Delivered our fleet management app in 10 weeks — on spec, on budget. Code quality is exceptional and communication was flawless.",
  },
  {
    name: "Ravi Patel",
    role: "Founder, UrbanStyle Co.",
    initials: "RP2",
    rating: 5,
    text: "Our new e-commerce site converted at 3× the rate of our old one. MeridianGrid is our go-to studio.",
  },
  {
    name: "Deepa Nair",
    role: "Marketing Director, BrandForge",
    initials: "DN",
    rating: 5,
    text: "They rebuilt our agency website and the results speak for themselves. Enquiries up 60% in the first month.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-blue-brand/10 rounded-2xl p-6 mx-3 shadow-sm">
      <StarRating count={t.rating} />
      <p className="text-mid-text text-sm leading-relaxed mt-3 mb-5 italic">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {t.initials.replace(/\d/g, "")}
        </div>
        <div>
          <div className="font-semibold text-navy text-sm">{t.name}</div>
          <div className="text-muted text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)];

  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <SectionLabel text="Client Voices" />
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-3">
          Don&apos;t take our word for it.
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <StarRating count={5} />
          <span className="text-mid-text text-sm font-medium">5.0 from 50+ clients</span>
        </div>
      </div>

      {/* Row 1 — left */}
      <div className="overflow-hidden mb-4">
        <div className="flex marquee-track">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="overflow-hidden">
        <div className="flex marquee-track-reverse">
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
