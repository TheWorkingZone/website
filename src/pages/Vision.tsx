import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Compass,
  Target,
  TrendingUp,
  MapPin,
  Globe,
  Users,
  ShieldCheck,
  Sparkles,
  FileCheck,
  CheckCircle2,
  Download,
  ChevronRight,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VisionPage = () => {
  const { t } = useTranslation();

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  const visionPillars = [
    {
      icon: Users,
      badge: "Accessibility",
      title: "Hyperlocal Worker Discovery",
      desc: "Connecting skilled workers directly with nearby job opportunities without middlemen or hidden commission fees.",
      borderColor: "border-emerald-200 hover:border-emerald-500",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      checkColor: "text-emerald-600",
      points: ["Direct employer-to-worker connection", "No commission deductions", "Instant location-based job alerts"],
    },
    {
      icon: FileCheck,
      badge: "Transparency",
      title: "Fair Digital Work Agreements",
      desc: "Establishing clear wages, verified job terms, and transparent project milestones for both hirers and workers.",
      borderColor: "border-orange-200 hover:border-orange-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-200",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      checkColor: "text-orange-500",
      points: ["Pre-agreed daily & contract wages", "Verifiable work histories", "Rating & feedback integrity"],
    },
    {
      icon: ShieldCheck,
      badge: "Empowerment",
      title: "Financial & Social Inclusion",
      desc: "Fostering formal identity, skill certification, and digital track records for India's unorganized workforce.",
      borderColor: "border-rose-200 hover:border-rose-500",
      iconBg: "bg-gradient-to-br from-rose-700 to-maroon-800 text-white shadow-md shadow-rose-200",
      badgeColor: "bg-rose-50 text-rose-900 border-rose-200",
      checkColor: "text-rose-700",
      points: ["Digital work identity badges", "Direct wage settlement tracking", "Equal access for all skilled trades"],
    },
    {
      icon: Globe,
      badge: "Scalability",
      title: "Unified Workforce Infrastructure",
      desc: "Empowering contractors and enterprises with multi-site workforce management and real-time attendance tools.",
      borderColor: "border-blue-200 hover:border-blue-500",
      iconBg: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-200",
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      checkColor: "text-blue-700",
      points: ["Multi-site contractor dashboard", "Real-time daily attendance logs", "Pan-India labor dispatching"],
    },
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Hyperlocal Connect",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
      icon: Target,
      iconBg: "bg-emerald-500 text-white",
      desc: "Digitalizing worker discovery across major industrial hubs, construction clusters, and tier-1/2 cities.",
    },
    {
      phase: "Phase 2",
      title: "Financial & Skill Inclusion",
      accent: "text-orange-800 bg-orange-50 border-orange-200",
      icon: TrendingUp,
      iconBg: "bg-orange-500 text-white",
      desc: "Facilitating transparent wage documentation, direct payout tracking, and verified skill badges.",
    },
    {
      phase: "Phase 3",
      title: "Pan-India Ecosystem",
      accent: "text-rose-900 bg-rose-50 border-rose-200",
      icon: MapPin,
      iconBg: "bg-rose-700 text-white",
      desc: "Building India's largest unified blue-collar workforce management platform.",
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
                  Our Vision & Mission
                </span>
                <span className="flex h-2 w-2 rounded-full bg-rose-600" />
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A2540] tracking-tight mb-6 leading-[1.1]">
                Empowering{" "}
                <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent">
                  India's Workforce
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#0A2540]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                Building an equitable, transparent, and digitally empowered ecosystem for millions of skilled workers, contractors, and site owners across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
              Strategic Foundation
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
              The 4 Pillars of Our Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionPillars.map((pillar, idx) => (
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

        {/* Strategic Roadmap (3 Phases) */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="bg-white p-10 md:p-14 rounded-[36px] border border-gray-200 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-500 block mb-2">
                Execution Blueprint
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
                Our Strategic Roadmap
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {roadmapPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${phase.iconBg} flex items-center justify-center shadow-md`}>
                        <phase.icon size={24} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${phase.accent}`}>
                        {phase.phase}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-extrabold text-[#0A2540] mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Spotlight Banner */}
        <section className="container mx-auto px-6 max-w-5xl mb-24">
          <div className="bg-gradient-to-r from-rose-900 via-[#0A2540] to-blue-950 p-10 md:p-14 rounded-[36px] text-white shadow-2xl relative overflow-hidden border border-rose-800/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Award size={14} className="text-emerald-400" />
                  <span>Platform Promise</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                  Dignity, Transparency & Growth
                </h2>
                <p className="text-white/80 font-medium leading-relaxed mb-8 text-base">
                  Every feature we build is designed to protect worker rights, eliminate middleman exploitation, and help contractors scale seamlessly.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/learn-more"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
                  >
                    <span>Learn More Hub</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
                  >
                    <span>Contact Our Team</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-400 via-orange-400 to-rose-500 p-1 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#0A2540] flex flex-col items-center justify-center text-center p-4">
                    <Compass size={36} className="text-orange-400 mb-1" />
                    <span className="text-[10px] font-black uppercase text-white">Our Mission</span>
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
                Join <span className="text-orange-400">TheWorkingZone</span> Vision
              </h2>
              <p className="text-white/80 text-base md:text-lg font-medium mb-8">
                Download the app on Google Play and be part of India's workforce transformation.
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

export default VisionPage;
