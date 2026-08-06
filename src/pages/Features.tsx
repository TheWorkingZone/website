import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Shield,
  Briefcase,
  MapPin,
  CheckCircle2,
  Download,
  HardHat,
  Smartphone,
  Star,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroShowcase from "@/assets/hero-showcase.jpg";

const FeaturesPage = () => {
  const { t } = useTranslation();

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  const featureCards = [
    {
      icon: MapPin,
      badge: "Discovery",
      title: t("features_page.f1_title"),
      desc: t("features_page.f1_desc"),
      borderColor: "border-emerald-200 hover:border-emerald-500",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      checkColor: "text-emerald-600",
      points: [t("hero.bullet2"), t("download_page.p2"), t("hero.bullet1")],
    },
    {
      icon: Briefcase,
      badge: "Dispatch",
      title: t("features_page.f2_title"),
      desc: t("features_page.f2_desc"),
      borderColor: "border-orange-200 hover:border-orange-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-200",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      checkColor: "text-orange-500",
      points: [t("download_page.contractor_title"), t("download_page.contractor_i1"), t("hero.bullet3")],
    },
    {
      icon: Shield,
      badge: "Security",
      title: t("features_page.f3_title"),
      desc: t("features_page.f3_desc"),
      borderColor: "border-rose-200 hover:border-rose-500",
      iconBg: "bg-gradient-to-br from-rose-700 to-maroon-800 text-white shadow-md shadow-rose-200",
      badgeColor: "bg-rose-50 text-rose-900 border-rose-200",
      checkColor: "text-rose-700",
      points: [t("download_page.worker_i2"), t("cta.pill_no_hidden"), t("cta.pill_support")],
    },
    {
      icon: HardHat,
      badge: "Identity",
      title: t("features_page.f4_title"),
      desc: t("features_page.f4_desc"),
      borderColor: "border-blue-200 hover:border-blue-500",
      iconBg: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-200",
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      checkColor: "text-blue-700",
      points: [t("hero.badge_verified_sub"), t("hero.bullet4"), t("download_page.b1_title")],
    },
    {
      icon: Clock,
      badge: "Operations",
      title: t("features_page.f5_title"),
      desc: t("features_page.f5_desc"),
      borderColor: "border-emerald-200 hover:border-emerald-500",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-200",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      checkColor: "text-emerald-600",
      points: [t("download_page.contractor_i2"), t("hero.badge_dispatch_title"), t("download_page.p3")],
    },
    {
      icon: Star,
      badge: "Quality",
      title: t("features_page.f6_title"),
      desc: t("features_page.f6_desc"),
      borderColor: "border-orange-200 hover:border-orange-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-200",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      checkColor: "text-orange-500",
      points: [t("download_page.contractor_i3"), t("cta.pill_secure"), t("download_page.worker_title")],
    },
  ];

  return (
    <div className="min-h-screen site-background flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-28 lg:pt-32 pb-16">
        {/* Seamless Open Hero Section */}
        <section className="relative py-8 md:py-12 overflow-hidden">
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
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-[40%] w-80 h-80 rounded-full bg-rose-500/20 blur-[120px] pointer-events-none"
          />

          <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md text-[#0A2540] mb-8">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <Sparkles size={14} className="text-orange-500" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A2540]">
                  {t("features_page.badge")}
                </span>
                <span className="flex h-2 w-2 rounded-full bg-rose-600" />
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0A2540] tracking-tight mb-6 leading-[1.1] break-words">
                Powerful Features for{" "}
                <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent inline-block">
                  {t("features_page.hero_title_gradient", "Workers & Contractors")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#0A2540]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                {t("features_page.hero_subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Deep-Dive Feature Grid */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
              {t("features.badge")}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
              {t("features_page.grid_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`bg-white p-8 rounded-3xl border ${card.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center`}>
                      <card.icon size={26} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs text-gray-800 font-semibold">
                        <CheckCircle2 size={16} className={`${card.checkColor} shrink-0 mt-0.5`} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* App Showcase Spotlight */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="bg-white p-10 md:p-14 rounded-[36px] border border-gray-200 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Smartphone size={14} className="text-emerald-600" />
                  <span>{t("download_page.badge")}</span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-6">
                  {t("download_page.exp_title")}
                </h2>

                <p className="text-gray-600 font-medium leading-relaxed text-base mb-6">
                  {t("download_page.hero_subtitle")}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-sm text-[#0A2540] font-bold">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t("download_page.worker_i1")}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#0A2540] font-bold">
                    <CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>{t("download_page.p4")}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#0A2540] font-bold">
                    <CheckCircle2 size={20} className="text-rose-700 shrink-0 mt-0.5" />
                    <span>{t("download_page.p2")}</span>
                  </div>
                </div>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg transition-all hover:scale-105"
                >
                  <Download size={20} />
                  <span>{t("hero.download_playstore")}</span>
                </a>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white p-2"
                  >
                    <img
                      src={heroShowcase}
                      alt="TheWorkingZone mobile app interface"
                      className="w-full h-auto rounded-[24px] object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Download Banner */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 rounded-3xl sm:rounded-[36px] p-6 sm:p-10 md:p-14 text-white text-center shadow-2xl border border-rose-900/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight break-words">
                {t("cta.title_part1")} <span className="text-orange-400 inline-block">{t("cta.title_part2")}</span>
              </h2>
              <p className="text-white/80 text-base md:text-lg font-medium mb-8">
                {t("cta.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 hover:from-orange-600 hover:via-rose-700 hover:to-blue-800 text-white font-extrabold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-base"
                >
                  <Download size={20} />
                  <span>{t("hero.download_playstore")}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
