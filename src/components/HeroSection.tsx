import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles, ShieldCheck, Users, Zap, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroShowcase from "@/assets/hero-showcase.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  const rotatingWords = [
    { text: t("hero.words.workers"), color: "text-emerald-500" },
    { text: t("hero.words.contractors"), color: "text-orange-500" },
    { text: t("hero.words.contracts"), color: "text-blue-600" },
    { text: t("hero.words.skill_pools", "skill pools."), color: "text-rose-700" },
    { text: t("hero.words.teams"), color: "text-emerald-600" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <section className="relative min-h-[80vh] bg-transparent flex items-center overflow-hidden pt-28 lg:pt-32 pb-16">
      {/* Theme Dynamic Ambient Lights */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[550px] h-[550px] rounded-full bg-emerald-400/20 blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[35%] w-[450px] h-[450px] rounded-full bg-orange-400/20 blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[35%] w-[400px] h-[400px] rounded-full bg-rose-500/20 blur-[130px] pointer-events-none -z-10"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7">
            {/* Theme Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#0A2540] shadow-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles size={14} className="text-orange-500" />
              <span>Smarter Workforce Management</span>
              <span className="flex h-2 w-2 rounded-full bg-rose-600" />
            </motion.div>

            {/* Dynamic Rotating Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.08] text-[#0A2540] tracking-tight mb-6">
              Connect easily with <br />
              <span className="h-[1.15em] inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[index].text}
                    className={`inline-block ${rotatingWords[index].color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.3 }}
                  >
                    {rotatingWords[index].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#0A2540]/80 max-w-2xl font-medium leading-relaxed mb-8">
              TheWorkingZone bridges skilled workers, contractors, and site owners directly across India with 100% transparency and dignity.
            </p>

            {/* Micro Feature Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-xl">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Zero Middleman Exploitation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                <span>Instant Location Matching</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-rose-700 shrink-0" />
                <span>Transparent Daily Wage Logs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                <span>Verified Skilled Badges</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 text-center"
              >
                <Download size={20} />
                <span>Download on Google Play</span>
              </a>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-2xl bg-white/90 hover:bg-white text-[#0A2540] font-bold text-sm sm:text-base border border-gray-200 shadow-md transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>Explore Features</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: App Mockup & Floating Live Badges */}
          <div className="lg:col-span-5 relative flex justify-center mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              {/* App Image Showcase */}
              <div className="relative z-10 animate-float rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white p-2">
                <img
                  src={heroShowcase}
                  alt="TheWorkingZone Mobile App Showcase"
                  className="w-full h-auto rounded-[24px] object-cover"
                />
              </div>

              {/* Floating Badge 1: Verified Workers */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-2 sm:-top-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 max-w-[180px] sm:max-w-none"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
                  <ShieldCheck size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-black text-[#0A2540] uppercase tracking-wider">100% Verified</p>
                  <p className="text-[9px] sm:text-[11px] text-gray-500 font-bold leading-tight">Skilled Worker Profiles</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Instant Payouts */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-4 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 max-w-[180px] sm:max-w-none"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shrink-0">
                  <Zap size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-black text-[#0A2540] uppercase tracking-wider">Instant Dispatch</p>
                  <p className="text-[9px] sm:text-[11px] text-gray-500 font-bold leading-tight">Location-aware matching</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
