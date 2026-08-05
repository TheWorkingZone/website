import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTABanner from "@/components/CTABanner";
import { Layers } from "lucide-react";

const HowItWorksPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen site-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Layers size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t("how_it_works.badge")}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-[#0A2540] mb-6">
                {t("how_it_works.title_part1")} <span className="text-secondary">{t("how_it_works.title_part2")}</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
                {t("how_it_works.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Main Component */}
        <HowItWorksSection />

        {/* CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
