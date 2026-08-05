import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Users2,
  Sparkles,
  Users,
  Banknote,
  CheckCircle2,
  Download,
  ChevronRight,
  Zap,
  Building2,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";

const AboutPage = () => {
  const { t } = useTranslation();

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  const corePillars = [
    {
      icon: ShieldCheck,
      badge: "Trust",
      title: "Workplace Transparency",
      desc: "Zero middleman fees, verified worker profiles, pre-agreed terms, and transparent rating integrity.",
      borderColor: "border-emerald-200 hover:border-emerald-500",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      checkColor: "text-emerald-600",
      points: ["100% verified worker credentials", "Direct wage agreement visibility", "Rating integrity system"],
    },
    {
      icon: Award,
      badge: "Empowerment",
      title: "Dignity of Labor",
      desc: "Empowering daily wage workers with direct job access, digital track records, and fair compensation.",
      borderColor: "border-orange-200 hover:border-orange-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-200",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      checkColor: "text-orange-500",
      points: ["Digital work identity cards", "No commission exploitation", "Location-based daily alerts"],
    },
    {
      icon: Users2,
      badge: "Efficiency",
      title: "Enterprise Contractor Scaling",
      desc: "Helping contractors and companies manage large workforce pools, dispatch labor, and track attendance.",
      borderColor: "border-rose-200 hover:border-rose-500",
      iconBg: "bg-gradient-to-br from-rose-700 to-maroon-800 text-white shadow-md shadow-rose-200",
      badgeColor: "bg-rose-50 text-rose-900 border-rose-200",
      checkColor: "text-rose-700",
      points: ["Multi-site site management", "60-second requirement posting", "Real-time attendance logs"],
    },
    {
      icon: HeartHandshake,
      badge: "Security",
      title: "Safety & Compliance",
      desc: "Strict adherence to safety standards, data privacy protection, and transparent support escalation.",
      borderColor: "border-blue-200 hover:border-blue-500",
      iconBg: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-200",
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      checkColor: "text-blue-700",
      points: ["256-bit encrypted data protection", "Prompt grievance escalation", "Verified contractor badges"],
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
                  About TheWorkingZone
                </span>
                <span className="flex h-2 w-2 rounded-full bg-rose-600" />
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A2540] tracking-tight mb-6 leading-[1.1]">
                Building the Future of{" "}
                <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent">
                  India's Labor Ecosystem
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#0A2540]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                TheWorkingZone is India's dedicated digital platform bridging skilled daily wage workers, contractors, and site managers with trust, transparency, and dignity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="mb-20">
          <StatsBar />
        </section>

        {/* Core Pillars Section */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
              Our Foundations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
              Built on Trust, Empowerment & Speed
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`bg-white p-8 md:p-10 rounded-[36px] border ${pillar.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center`}>
                      <pillar.icon size={28} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs text-gray-800 font-semibold">
                        <CheckCircle2 size={16} className={`${pillar.checkColor} shrink-0 mt-0.5`} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us & Platform Impact Story */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="bg-white p-10 md:p-14 rounded-[36px] border border-gray-200 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Zap size={14} className="text-orange-500" />
                  <span>Why Choose TheWorkingZone</span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-6">
                  Transforming How Blue-Collar Work Gets Done in India
                </h2>

                <p className="text-gray-600 font-medium leading-relaxed text-base mb-6">
                  Traditional labor markets in India suffer from informal middlemen, wage delays, and lack of transparency. TheWorkingZone changes this by providing a unified digital platform where workers build verifiable profiles and contractors hire verified talent instantly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-emerald-950 uppercase tracking-wider mb-1">Worker Empowerment</h4>
                      <p className="text-xs text-gray-600 font-medium">Direct jobs, fair wages & digital reputation tracking.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-orange-950 uppercase tracking-wider mb-1">Contractor Speed</h4>
                      <p className="text-xs text-gray-600 font-medium">Dispatch workforce requirements in under 60 seconds.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-rose-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-rose-950 uppercase tracking-wider mb-1">Verified Safety</h4>
                      <p className="text-xs text-gray-600 font-medium">OTP verification, data privacy & grievance desk.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-blue-950 uppercase tracking-wider mb-1">Multi-Language UI</h4>
                      <p className="text-xs text-gray-600 font-medium">Accessible interfaces available in regional languages.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/learn-more"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0A2540] text-white font-bold text-xs shadow-md hover:bg-blue-950 transition-all hover:scale-105"
                  >
                    <span>Explore Guides & FAQ</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-100 text-[#0A2540] font-bold text-xs border border-gray-200 hover:bg-gray-200 transition-all hover:scale-105"
                  >
                    <span>Contact Support</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="aspect-square rounded-[36px] bg-gradient-to-tr from-emerald-500 via-orange-500 to-rose-700 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-[34px] bg-[#0A2540] p-8 flex flex-col justify-between text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
                      
                      <div>
                        <Building2 size={40} className="text-orange-400 mb-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-2">
                          Pan-India Vision
                        </span>
                        <h3 className="font-heading text-2xl font-extrabold mb-3">
                          Organizing Blue-Collar Work
                        </h3>
                        <p className="text-xs text-white/80 font-medium leading-relaxed">
                          Empowering millions of skilled workers across construction, manufacturing, and daily trades.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                          <Shield size={16} />
                          <span>100% Free for Workers</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase text-orange-400 bg-orange-500/20 px-2.5 py-1 rounded-md">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Download Banner */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 rounded-[36px] p-10 md:p-14 text-white text-center shadow-2xl border border-rose-900/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Be Part of <span className="text-orange-400">TheWorkingZone</span>
              </h2>
              <p className="text-white/80 text-base md:text-lg font-medium mb-8">
                Download the official app on Google Play to post jobs or find daily work today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-base"
                >
                  <Download size={20} />
                  <span>Download on Google Play</span>
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

export default AboutPage;
