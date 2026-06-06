import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ServicePillars from "./components/ServicePillars";
import IndustriesSection from "./components/IndustriesSection";
import ProcessScroll from "./components/ProcessScroll";
import AISection from "./components/AISection";
import TestimonialMarquee from "./components/TestimonialMarquee";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import GreetingToast from "./components/GreetingToast";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <GreetingToast />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicePillars />
        <IndustriesSection />
        <ProcessScroll />
        <AISection />
        <TestimonialMarquee />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
