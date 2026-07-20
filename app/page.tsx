import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ServicePillars from "./components/ServicePillars";
import SaasProducts from "./components/SaasProducts";
import GlobalReach from "./components/GlobalReach";
import IndustriesSection from "./components/IndustriesSection";
import ProcessScroll from "./components/ProcessScroll";
import AISection from "./components/AISection";
import TestimonialMarquee from "./components/TestimonialMarquee";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <TrustBar />
        <ServicePillars />
        <SaasProducts />
        <GlobalReach />
        <IndustriesSection />
        <ProcessScroll />
        <AISection />
        <TestimonialMarquee />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
