import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

// Detect if user prefers reduced motion or is on a low-end device
const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const HeroSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const mobile = isMobile();

  const rotatingWords = [
    { text: t("hero.words.workers"), color: "text-green-500" },
    { text: t("hero.words.contractors"), color: "text-secondary" },
    { text: t("hero.words.contracts"), color: "text-primary" },
    { text: t("hero.words.laborers"), color: "text-orange-500" },
    { text: t("hero.words.teams"), color: "text-indigo-500" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // On mobile: simple fade instead of letter-by-letter
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[90vh] bg-transparent flex items-center overflow-hidden pt-24 pb-12">
      {/* Background blobs — static on mobile, animated on desktop */}
      {mobile ? (
        <>
          <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-[100px] -z-10" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[300px] w-[300px] rounded-full bg-orange-100/20 blur-[100px] -z-10" />
        </>
      ) : (
        <>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-[120px] -z-10"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0], y: [0, 60, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-orange-100/20 blur-[120px] -z-10"
          />
        </>
      )}

      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2540] shadow-sm transition-all hover:bg-white"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              {t("hero.badge")}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <h1 className="font-heading text-3xl font-extrabold leading-[1.1] text-[#0A2540] sm:text-6xl xl:text-7xl tracking-tight">
                <motion.span variants={lineVariants} className="block mb-2">{t("hero.title_static")}</motion.span>
                <div className="h-[1.15em] relative block">
                  <AnimatePresence mode="wait">
                    {mobile ? (
                      // Simple word fade on mobile — no letter-by-letter
                      <motion.div
                        key={rotatingWords[index].text}
                        className={`inline-block ${rotatingWords[index].color}`}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      >
                        {rotatingWords[index].text}
                      </motion.div>
                    ) : (
                      // Letter-by-letter on desktop
                      <motion.div
                        key={rotatingWords[index].text}
                        className={`inline-block ${rotatingWords[index].color}`}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
                      >
                        {rotatingWords[index].text.split("").map((letter, i) => (
                          <motion.span
                            key={i}
                            variants={letterVariants}
                            transition={{ duration: 0.25, delay: i * 0.03, ease: "backOut" }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 text-lg leading-relaxed text-[#0A2540]/70 max-w-2xl font-medium"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <Link
                to="/download"
                className="bg-secondary relative group flex items-center gap-2.5 rounded-2xl px-10 py-4 text-base font-bold text-white shadow-xl shadow-orange-200/50 transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{t("hero.cta_primary")}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-600 to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 font-bold text-[#0A2540] hover:text-primary transition-colors group text-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 group-hover:border-primary group-hover:bg-primary/5 transition-all group-hover:scale-110">
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                </div>
                {t("hero.cta_secondary")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
