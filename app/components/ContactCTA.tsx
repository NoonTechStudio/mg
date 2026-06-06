import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="relative bg-navy overflow-hidden py-24">
      <div className="absolute inset-0 grid-lines-dark pointer-events-none" />

      {/* Meridian arc */}
      <div
        className="meridian-arc"
        style={{ width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderColor: "rgba(0,201,167,0.07)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Badge variant="outline" className="mb-5 text-teal-brand border-teal-brand/30 bg-teal-brand/5 font-heading tracking-widest text-[11px] uppercase">
          Let&apos;s Build Together
        </Badge>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-5 leading-tight">
          Have a project in mind?
          <br />
          <span className="text-teal-brand">Let&apos;s make it real.</span>
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Drop your details and we&apos;ll reply within one business day with a no-pressure intro call.
          No spam. Just a real conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* WhatsApp */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors group">
            <CardContent className="p-7 text-left">
              <div className="w-11 h-11 rounded-xl bg-green-500/15 flex items-center justify-center mb-5">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">WhatsApp us directly</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Quick questions, project briefs, or just a hello — we respond within hours.
              </p>
              <a
                href="https://wa.me/918000403090"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "bg-green-500 text-white font-semibold text-sm",
                  "hover:bg-green-600 transition-colors"
                )}
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors group">
            <CardContent className="p-7 text-left">
              <div className="w-11 h-11 rounded-xl bg-blue-brand/15 flex items-center justify-center mb-5">
                <Mail className="w-5 h-5 text-blue-brand" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">Send a detailed brief</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Prefer email? Send us your project details and we&apos;ll come back with a thoughtful proposal.
              </p>
              <a
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "bg-blue-brand text-white font-semibold text-sm",
                  "hover:opacity-90 transition-opacity"
                )}
              >
                Open Contact Form <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>

        <p className="text-white/30 text-sm">
          or email directly:{" "}
          <a href="mailto:hello@meridiangrid.in" className="text-teal-brand font-semibold hover:underline">
            hello@meridiangrid.in
          </a>
        </p>
      </div>
    </section>
  );
}
