import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles, ShieldCheck, Zap, CheckCircle2, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroShowcase from "@/assets/hero-showcase.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  const rotatingWords = [
    { text: t("hero.words.workers"), color: "from-emerald-500 via-teal-500 to-emerald-700" },
    { text: t("hero.words.contractors"), color: "from-orange-500 via-amber-500 to-orange-700" },
    { text: t("hero.words.contracts"), color: "from-blue-600 via-indigo-600 to-blue-800" },
    { text: t("hero.words.skill_pools", "skill pools."), color: "from-rose-600 via-rose-500 to-maroon-800" },
    { text: t("hero.words.teams"), color: "from-emerald-600 via-teal-600 to-blue-700" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <section className="relative min-h-[85vh] bg-transparent flex items-center overflow-hidden pt-28 lg:pt-36 pb-20">
      {/* Premium Grid & Ambient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20 opacity-60" />

      {/* Theme Dynamic Ambient Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-[10%] w-[550px] h-[550px] rounded-full bg-emerald-400/25 blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.55, 0.35], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/25 blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[35%] w-[450px] h-[450px] rounded-full bg-orange-400/25 blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[35%] w-[400px] h-[400px] rounded-full bg-rose-500/20 blur-[130px] pointer-events-none -z-10"
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-left">
            {/* Theme Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-xl border border-gray-200/90 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#0A2540] shadow-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles size={14} className="text-orange-500" />
              <span>{t("hero.smarter_workforce")}</span>
              <span className="flex h-2 w-2 rounded-full bg-rose-600" />
            </motion.div>

            {/* Refined, Slightly Smaller Headline */}
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.12] text-[#0A2540] tracking-tight mb-5 break-words">
              {t("hero.connect_easily")} <br />
              <span className="inline-block relative min-h-[1.2em] align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[index].text}
                    className={`inline-block bg-gradient-to-r ${rotatingWords[index].color} bg-clip-text text-transparent transform-gpu`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                  >
                    {rotatingWords[index].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#0A2540]/80 max-w-2xl font-medium leading-relaxed mb-7">
              {t("hero.description")}
            </p>

            {/* Micro Feature Boxes in Theme Palette Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 max-w-xl">
              {/* Box 1: Light Green / Emerald */}
              <div className="flex items-center gap-3 text-xs font-bold text-[#0A2540] bg-emerald-50/90 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-200/90 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                </div>
                <span>{t("hero.bullet1")}</span>
              </div>

              {/* Box 2: Vibrant Orange */}
              <div className="flex items-center gap-3 text-xs font-bold text-[#0A2540] bg-orange-50/90 backdrop-blur-md p-3.5 rounded-2xl border border-orange-200/90 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                <div className="w-7 h-7 rounded-xl bg-orange-500/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-orange-600" />
                </div>
                <span>{t("hero.bullet2")}</span>
              </div>

              {/* Box 3: Light Maroon / Rose Accent */}
              <div className="flex items-center gap-3 text-xs font-bold text-[#0A2540] bg-rose-50/90 backdrop-blur-md p-3.5 rounded-2xl border border-rose-200/90 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                <div className="w-7 h-7 rounded-xl bg-rose-500/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-rose-800" />
                </div>
                <span>{t("hero.bullet3")}</span>
              </div>

              {/* Box 4: Deep Blue */}
              <div className="flex items-center gap-3 text-xs font-bold text-[#0A2540] bg-blue-50/90 backdrop-blur-md p-3.5 rounded-2xl border border-blue-200/90 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                <div className="w-7 h-7 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-blue-700" />
                </div>
                <span>{t("hero.bullet4")}</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-9">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 hover:from-orange-600 hover:via-rose-700 hover:to-blue-800 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 text-center"
              >
                <Download size={20} />
                <span>{t("hero.download_playstore")}</span>
              </a>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-2xl bg-white/95 hover:bg-white text-[#0A2540] font-bold text-sm sm:text-base border border-gray-200/90 shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>{t("hero.explore_features")}</span>
                <ArrowRight size={18} className="text-orange-500" />
              </Link>
            </div>

            {/* Micro Social Trust Metric */}
            <div className="flex items-center gap-3 text-xs font-bold text-gray-500 pt-1">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">W</div>
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">C</div>
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center ring-2 ring-white text-[10px]">S</div>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[#0A2540] font-extrabold">100% Verified Workforce Ecosystem</span>
            </div>
          </div>

          {/* Right Column: App Showcase with Floating Live Badges */}
          <div className="lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              {/* Subtle Backglow Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 via-rose-500/20 to-blue-600/30 rounded-[40px] blur-2xl transform scale-105 pointer-events-none" />

              {/* App Image Showcase Box */}
              <div className="relative z-10 animate-float rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-white p-2">
                <img
                  src={heroShowcase}
                  alt="TheWorkingZone Mobile App Showcase"
                  className="w-full h-auto rounded-[28px] object-cover shadow-inner"
                />
              </div>

              {/* Floating Live Badge 1: Verified Profiles */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-3 sm:-top-6 sm:-left-8 z-20 bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-2xl border border-emerald-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-[#0A2540] uppercase tracking-wider">{t("hero.badge_verified_title")}</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold leading-tight">{t("hero.badge_verified_sub")}</p>
                </div>
              </motion.div>

              {/* Floating Live Badge 2: Realtime Dispatch */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 z-20 bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-2xl border border-orange-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
                  <Zap size={22} />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-[#0A2540] uppercase tracking-wider">{t("hero.badge_dispatch_title")}</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold leading-tight">{t("hero.badge_dispatch_sub")}</p>
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
