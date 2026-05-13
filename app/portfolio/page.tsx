import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-navy pt-32 pb-16 text-center px-6">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            15 real projects delivered across restaurants, retail, industrial, wellness, and beyond.
          </p>
        </div>
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
