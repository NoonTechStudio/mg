import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma",   role: "Owner, Bella Cucina",         initials: "PS", rating: 5, text: "MeridianGrid completely transformed our restaurant's digital presence. The website increased our takeaway orders by 45%." },
  { name: "Rajesh Patel",   role: "Founder, Silk Traditions",    initials: "RP", rating: 5, text: "They designed a stunning e-commerce platform for our handloom saree business. Sales have doubled since launch!" },
  { name: "James Wilson",   role: "Founder, Urban Thread",       initials: "JW", rating: 5, text: "The e-commerce site is absolutely stunning. Customers compliment the design regularly and conversion rate went up significantly." },
  { name: "Sarah Johnson",  role: "Director, Serenity Spa",      initials: "SJ", rating: 5, text: "Booking system works flawlessly and communicates the exact luxury feel we wanted. Enquiries up 60% in first two months." },
  { name: "Meera Kapoor",   role: "Owner, Chai & Beyond",        initials: "MK", rating: 5, text: "The team listened to every detail. The café website feels exactly like our brand — warm, welcoming, and modern." },
  { name: "Arjun Mehta",    role: "CTO, LogiTrack India",        initials: "AM", rating: 5, text: "Delivered our fleet management app in 10 weeks — on spec, on budget. Code quality is exceptional and communication was flawless." },
  { name: "Ravi Patel",     role: "Founder, UrbanStyle Co.",     initials: "RP", rating: 5, text: "Our new e-commerce site converted at 3× the rate of our old one. MeridianGrid is our go-to studio." },
  { name: "Deepa Nair",     role: "Marketing Director, BrandForge", initials: "DN", rating: 5, text: "They rebuilt our agency website and the results speak for themselves. Enquiries up 60% in the first month." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <Card className="flex-shrink-0 w-80 border-slate-200 bg-white mx-2.5 shadow-none hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <Stars count={t.rating} />
        <p className="text-mid-text text-sm leading-relaxed mt-3 mb-5 italic">&ldquo;{t.text}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {t.initials.replace(/\d/, "")}
          </div>
          <div>
            <p className="font-semibold text-navy text-sm">{t.name}</p>
            <p className="text-slate-text text-xs">{t.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialMarquee() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)];

  return (
    <section className="relative bg-white overflow-hidden py-24">
      <div className="absolute inset-0 grid-dots-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <Badge variant="outline" className="mb-4 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase">
          Client Voices
        </Badge>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-3">
          Don&apos;t take our word for it.
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <Stars count={5} />
          <span className="text-mid-text text-sm font-medium">5.0 from 50+ clients</span>
        </div>
      </div>

      <div className="overflow-hidden mb-3">
        <div className="flex marquee-track">
          {row1.map((t, i) => <TestCard key={`r1-${i}`} t={t} />)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex marquee-track-reverse">
          {row2.map((t, i) => <TestCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}
