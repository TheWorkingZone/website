import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen site-background flex flex-col font-body">
      <Navbar />
      <main className="flex-grow">
        {/* Dynamic Hero Section with Custom App Showcase */}
        <HeroSection />

        {/* Live Metrics Stats Bar */}
        <section className="py-12">
          <StatsBar />
        </section>

        {/* Google Play App Call to Action */}
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
