import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Download,
  Sparkles,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Award,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroShowcase from "@/assets/hero-showcase.jpg";

const DownloadPage = () => {
  const { t } = useTranslation();

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  return (
    <div className="min-h-screen site-background flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-28 lg:pt-32 pb-16">
        {/* Seamless Open Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          {/* Theme Dynamic Ambient Lights */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35], x: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-[15%] w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[140px] pointer-events-none -z-10"
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

          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md text-[#0A2540] mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <Sparkles size={14} className="text-orange-500" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A2540]">
                      {t("download_page.badge")}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-rose-600" />
                  </div>

                  <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0A2540] tracking-tight leading-[1.1] mb-6 break-words">
                    {t("download_page.hero_title_prefix", "Download")}{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent inline-block">
                      TheWorkingZone
                    </span>{" "}
                    {t("download_page.hero_title_suffix", "Official Mobile App")}
                  </h1>

                  <p className="text-lg md:text-xl text-[#0A2540]/80 font-medium leading-relaxed mb-8 max-w-2xl">
                    {t("download_page.hero_subtitle")}
                  </p>

                  {/* Value Bullet Points */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-xl">
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>{t("download_page.p1")}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                      <span>{t("download_page.p2")}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                      <CheckCircle2 size={16} className="text-rose-700 shrink-0" />
                      <span>{t("download_page.p3")}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2540] bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200/60 shadow-sm">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                      <span>{t("download_page.p4")}</span>
                    </div>
                  </div>

                  {/* Download Action Card */}
                  <div className="bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 p-6 md:p-8 rounded-[32px] text-white shadow-2xl border border-rose-900/30 max-w-xl mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                          <Smartphone size={28} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={14} fill="currentColor" />
                            ))}
                            <span className="text-xs font-bold text-white ml-1">4.9 / 5</span>
                          </div>
                          <h3 className="font-heading text-lg font-extrabold text-white">
                            {t("hero.download_playstore")}
                          </h3>
                          <p className="text-xs text-white/70 font-medium">{t("hero.badge_verified_title")}</p>
                        </div>
                      </div>

                      <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 hover:from-orange-600 hover:via-rose-700 hover:to-blue-800 text-white font-extrabold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 shrink-0 w-full sm:w-auto"
                      >
                        <Download size={18} />
                        <span>{t("navbar.download")}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: App Showcase */}
              <div className="lg:col-span-5 relative flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-md"
                >
                  <div className="relative z-10 animate-float rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white p-2">
                    <img
                      src={heroShowcase}
                      alt="TheWorkingZone Mobile App Showcase"
                      className="w-full h-auto rounded-[24px] object-cover"
                    />
                  </div>

                  {/* Floating Trust Badges */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A2540] uppercase tracking-wider">{t("hero.badge_verified_title")}</p>
                      <p className="text-[11px] text-gray-500 font-bold">{t("hero.badge_verified_sub")}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -right-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0A2540] uppercase tracking-wider">{t("hero.badge_dispatch_title")}</p>
                      <p className="text-[11px] text-gray-500 font-bold">{t("hero.badge_dispatch_sub")}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored App Experiences (For Workers & Contractors) */}
        <section className="container mx-auto px-6 max-w-6xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
              {t("download_page.badge")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
              {t("download_page.exp_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Workers Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-[36px] border border-emerald-200 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md mb-6">
                  <Users size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3 inline-block">
                  {t("download_page.worker_badge")}
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-3">
                  {t("download_page.worker_title")}
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                  {t("download_page.worker_desc")}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{t("download_page.worker_i1")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{t("download_page.worker_i2")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{t("download_page.worker_i3")}</span>
                  </div>
                </div>
              </div>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Download size={18} />
                <span>{t("hero.download_playstore")}</span>
              </a>
            </motion.div>

            {/* For Contractors Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-[36px] border border-orange-200 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-md mb-6">
                  <Zap size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-800 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3 inline-block">
                  {t("download_page.contractor_badge")}
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-3">
                  {t("download_page.contractor_title")}
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                  {t("download_page.contractor_desc")}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <span>{t("download_page.contractor_i1")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <span>{t("download_page.contractor_i2")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <span>{t("download_page.contractor_i3")}</span>
                  </div>
                </div>
              </div>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Download size={18} />
                <span>{t("hero.download_playstore")}</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Viksit Bharat Spotlight Card */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-r from-rose-900 via-[#0A2540] to-blue-950 p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[36px] text-white shadow-2xl relative overflow-hidden border border-rose-800/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Award size={14} className="text-emerald-400" />
                  <span>{t("download_page.viksit_badge")}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight break-words">
                  {t("download_page.viksit_title")} <span className="text-orange-400 inline-block">Viksit Bharat</span>
                </h2>
                <p className="text-white/80 font-medium leading-relaxed text-base mb-8">
                  {t("download_page.viksit_desc")}
                </p>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 hover:from-orange-600 hover:via-rose-700 hover:to-blue-800 text-white font-extrabold text-base shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <Download size={20} />
                  <span>{t("hero.download_playstore")}</span>
                </a>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-400 via-orange-400 to-rose-500 p-1 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#0A2540] flex flex-col items-center justify-center text-center p-4">
                    <Globe size={36} className="text-emerald-400 mb-1" />
                    <span className="text-[10px] font-black uppercase text-white">Viksit Bharat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
