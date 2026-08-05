import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download, CheckCircle2, Sparkles, Smartphone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  const { t } = useTranslation();

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Theme Dynamic Ambient Lights */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[15%] w-96 h-96 rounded-full bg-emerald-400/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-96 h-96 rounded-full bg-blue-500/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[30%] w-80 h-80 rounded-full bg-orange-400/20 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xl p-6 sm:p-10 md:p-16 rounded-3xl sm:rounded-[40px] border border-gray-200/80 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Corner Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-extrabold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-orange-500" />
                <span>Empowering India's Workforce</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15] mb-6">
                {t("cta.title_part1", "One Platform.")} <br />
                <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent">
                  {t("cta.title_part2", "Endless Opportunities.")}
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {t("cta.description", "Join thousands of workers, contractors, and companies already growing with TheWorkingZone.")}
              </p>

              {/* Feature Micro Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-emerald-50/80 border border-emerald-100 p-2.5 rounded-xl">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-orange-50/80 border border-orange-100 p-2.5 rounded-xl">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-rose-50/80 border border-rose-100 p-2.5 rounded-xl">
                  <CheckCircle2 size={16} className="text-rose-700 shrink-0" />
                  <span>Built for India</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-blue-50/80 border border-blue-100 p-2.5 rounded-xl">
                  <CheckCircle2 size={16} className="text-blue-700 shrink-0" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Action Callout */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 text-white shadow-xl border border-rose-900/30">
              <Smartphone size={40} className="text-orange-400 mb-3" />
              <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-1">
                Official App
              </p>
              <h3 className="font-heading text-xl font-extrabold mb-4">
                Available on Google Play
              </h3>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 mb-4"
              >
                <Download size={18} />
                <span>Get on Google Play</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white font-bold transition-colors"
              >
                <span>Have questions? Contact Us</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
