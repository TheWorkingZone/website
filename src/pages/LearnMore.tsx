import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Search,
  Shield,
  FileText,
  PlayCircle,
  ChevronRight,
  ChevronDown,
  Download,
  Users,
  Briefcase,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lock,
  Smartphone,
  Zap,
  X,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// FAQ Data
const faqs = [
  {
    category: "workers",
    question: "How do I create a Worker Profile on TheWorkingZone?",
    answer:
      "Download TheWorkingZone app from the Google Play Store, sign up with your phone number, select 'Worker', and fill in your skills, experience, location, and daily expected wage. Your profile will be instantly visible to contractors nearby.",
  },
  {
    category: "workers",
    question: "Is there any registration fee for workers?",
    answer:
      "No! Registering as a worker and applying for job opportunities on TheWorkingZone is completely free.",
  },
  {
    category: "contractors",
    question: "How do contractors post job requirements?",
    answer:
      "Contractors can log into the app, select 'Post New Requirement', specify the required skill categories, worker count, location, duration, and daily rate. Matching local workers receive instant job alerts.",
  },
  {
    category: "contractors",
    question: "Can I manage multiple project sites simultaneously?",
    answer:
      "Yes, the contractor dashboard allows you to organize labor pools across different job sites, track attendance, and monitor daily progress in real time.",
  },
  {
    category: "payments",
    question: "How are payments handled between hirers and workers?",
    answer:
      "Agreed wages are documented transparently in the job agreement. Direct payments can be settled according to agreed schedules (daily, weekly, or upon project completion).",
  },
  {
    category: "security",
    question: "How is my personal information protected?",
    answer:
      "We use industry-standard encryption, secure OTP authentication, and strict privacy controls. Your personal contact details are kept secure and shared only for verified job engagements.",
  },
];

const LearnMore = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "workers" | "contractors" | "legal" | "faq">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; category: string; desc: string } | null>(null);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";

  const guideCards = [
    {
      id: "worker-guide",
      tab: "workers",
      icon: Users,
      badge: "For Workers",
      title: "Worker Success Guide",
      description: "Everything you need to build your reputation, find daily work, and get hired faster.",
      borderColor: "border-emerald-200 hover:border-emerald-500",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      btnColor: "hover:bg-emerald-600 hover:text-white text-emerald-950 bg-emerald-50",
      checkColor: "text-emerald-600",
      steps: [
        "Complete your profile with certified skills & experience",
        "Set location preferences for nearby job alerts",
        "Apply to verified jobs with one tap",
        "Receive ratings & build your digital track record",
      ],
    },
    {
      id: "contractor-guide",
      tab: "contractors",
      icon: Briefcase,
      badge: "For Hirers & Contractors",
      title: "Workforce Management Hub",
      description: "Streamline contractor operations, mobilize skilled labor pools, and manage site attendance.",
      borderColor: "border-orange-200 hover:border-orange-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-200",
      badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
      btnColor: "hover:bg-orange-500 hover:text-white text-orange-950 bg-orange-50",
      checkColor: "text-orange-500",
      steps: [
        "Post detailed workforce requirements in under 60s",
        "Review applicant skill ratings & verified experience",
        "Assign teams to specific site locations",
        "Track daily attendance and digital contract logs",
      ],
    },
    {
      id: "legal-guide",
      tab: "legal",
      icon: Shield,
      badge: "Security & Legal",
      title: "Safety & Compliance Hub",
      description: "Learn how we protect worker rights, secure client data, and enforce platform transparency.",
      borderColor: "border-rose-200 hover:border-rose-500",
      iconBg: "bg-gradient-to-br from-rose-700 to-maroon-800 text-white shadow-md shadow-rose-200",
      badgeColor: "bg-rose-50 text-rose-900 border-rose-200",
      btnColor: "hover:bg-rose-800 hover:text-white text-rose-950 bg-rose-50",
      checkColor: "text-rose-700",
      steps: [
        "256-bit encrypted data protection standards",
        "Clear transparent labor terms & no hidden fees",
        "Rating integrity and anti-fraud monitoring",
        "Direct support and grievance escalation channels",
      ],
    },
  ];

  const videoTutorials = [
    {
      title: "Getting Started with Worker Registration",
      category: "Worker Basics",
      desc: "Step-by-step walkthrough of creating a worker profile and choosing primary skills.",
      duration: "2 min",
      accent: "bg-emerald-500",
    },
    {
      title: "How Contractors Post Work Requirements",
      category: "Contractor Hub",
      desc: "Learn how to dispatch job notifications to local worker pools instantly.",
      duration: "3 min",
      accent: "bg-orange-500",
    },
    {
      title: "Managing Multi-Site Teams & Attendance",
      category: "Operations",
      desc: "Tips for monitoring workforce presence across multiple construction sites.",
      duration: "4 min",
      accent: "bg-rose-700",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || activeTab === "faq" || faq.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen site-background flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-28 lg:pt-32 pb-16">
        {/* Seamless Open Hero Section - No Enclosed Dark Box */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Theme Dynamic Ambient Lights: Blue, Light Green, Orange, Light Maroon */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35], x: [0, 40, 0] }}
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
              {/* Theme Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md text-[#0A2540] mb-8">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <Sparkles size={14} className="text-orange-500" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A2540]">
                  Knowledge & Resource Center
                </span>
                <span className="flex h-2 w-2 rounded-full bg-rose-600" />
              </div>

              {/* Bold Dynamic Title */}
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A2540] tracking-tight mb-6 leading-[1.1]">
                Master{" "}
                <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent">
                  TheWorkingZone
                </span>{" "}
                Platform
              </h1>

              <p className="text-lg md:text-xl text-[#0A2540]/80 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                Explore interactive guides, user handbooks, safety protocols, and answers to common questions.
              </p>

              {/* Floating Ultra-Sleek Search Input */}
              <div className="max-w-2xl mx-auto relative mb-12">
                <div className="relative flex items-center shadow-2xl rounded-2xl">
                  <Search className="absolute left-5 text-gray-400" size={22} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search guides, topics, FAQs..."
                    className="w-full pl-14 pr-12 py-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 text-[#0A2540] font-semibold text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* Theme Color Palette Category Pills */}
              <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
                {(
                  [
                    { id: "all", label: "All Guides", color: "bg-[#0A2540] text-white" },
                    { id: "workers", label: "For Workers", color: "bg-emerald-600 text-white" },
                    { id: "contractors", label: "Contractors", color: "bg-orange-500 text-white" },
                    { id: "legal", label: "Legal & Privacy", color: "bg-rose-800 text-white" },
                    { id: "faq", label: "FAQ", color: "bg-blue-700 text-white" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm ${
                      activeTab === tab.id
                        ? `${tab.color} scale-105 shadow-md ring-2 ring-offset-2 ring-gray-200`
                        : "bg-white/80 text-[#0A2540] hover:bg-white border border-gray-200/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Guide Cards with Theme Palette */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {guideCards
              .filter((card) => activeTab === "all" || activeTab === card.tab)
              .map((card, idx) => (
                <motion.div
                  key={card.id}
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
                      {card.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {card.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-3 text-xs text-gray-800 font-semibold">
                          <CheckCircle2 size={16} className={`${card.checkColor} shrink-0 mt-0.5`} />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={card.tab === "legal" ? "/privacy-policy" : "/download"}
                    className={`inline-flex items-center justify-between w-full p-4 rounded-2xl font-bold text-sm transition-all group/btn shadow-sm ${card.btnColor}`}
                  >
                    <span>{card.tab === "legal" ? "View Policy Docs" : "Get App Guide"}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Legal & Security Spotlight */}
        {(activeTab === "all" || activeTab === "legal") && (
          <section className="container mx-auto px-6 max-w-5xl mb-24">
            <div className="bg-gradient-to-r from-rose-900 via-[#0A2540] to-blue-950 p-10 md:p-14 rounded-[36px] text-white shadow-2xl relative overflow-hidden border border-rose-800/30">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-extrabold uppercase tracking-wider mb-4">
                    <Shield size={14} className="text-emerald-400" />
                    <span>Compliance & Protection</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                    Transparent Policies & Data Security
                  </h2>
                  <p className="text-white/80 font-medium leading-relaxed mb-8 text-base">
                    We maintain strict data privacy, encryption, and worker safety guidelines across India. Read our complete legal documentation.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/privacy-policy"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
                    >
                      <Lock size={16} />
                      <span>Privacy Policy</span>
                    </Link>
                    <Link
                      to="/terms-and-conditions"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
                    >
                      <FileText size={16} />
                      <span>Terms & Conditions</span>
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-400 via-orange-400 to-rose-500 p-1 shadow-2xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#0A2540] flex flex-col items-center justify-center text-center p-4">
                      <Award size={36} className="text-emerald-400 mb-1" />
                      <span className="text-[10px] font-black uppercase text-white">Verified Platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Video Walkthrough Previews */}
        <section className="container mx-auto px-6 max-w-6xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
              Visual Guides
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
              Video Walkthroughs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTutorials.map((vid, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSelectedVideo(vid)}
                className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-1.5"
              >
                <div className="relative aspect-video rounded-2xl bg-[#0A2540] overflow-hidden flex items-center justify-center mb-5 group-hover:scale-[1.02] transition-transform">
                  <div className={`w-14 h-14 rounded-full ${vid.accent} text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                    <PlayCircle size={28} />
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/70 px-2.5 py-1 rounded-md text-[10px] text-white font-bold">
                    {vid.duration}
                  </span>
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider text-orange-500 mb-1 block">
                  {vid.category}
                </span>
                <h4 className="font-heading text-lg font-bold text-[#0A2540] mb-2 group-hover:text-blue-700 transition-colors">
                  {vid.title}
                </h4>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">{vid.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Preview Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-gray-100"
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-1.5 rounded-full bg-gray-100"
                >
                  <X size={20} />
                </button>

                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-4 shadow-md">
                  <PlayCircle size={24} />
                </div>

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-500 block mb-1">
                  {selectedVideo.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-3">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                  {selectedVideo.desc}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 mb-6">
                  <Zap size={20} className="text-emerald-600 shrink-0" />
                  <p className="text-xs text-emerald-950 font-bold">
                    Full HD step-by-step video tutorials are integrated directly inside TheWorkingZone Mobile App!
                  </p>
                </div>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <Download size={18} />
                  <span>Download App to Watch</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive FAQ Accordion */}
        <section className="container mx-auto px-6 max-w-4xl mb-24">
          <div className="text-center mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-700 block mb-2">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0A2540] text-base md:text-lg hover:text-emerald-600 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={20} className="text-orange-500 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-600 font-medium text-sm md:text-base leading-relaxed border-t border-gray-100 mt-1">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center p-12 bg-white rounded-3xl border border-gray-200">
                <p className="text-gray-500 font-medium">No matching questions found for "{searchQuery}".</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-6 py-2 rounded-xl bg-[#0A2540] text-white text-xs font-bold"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Global Download Banner */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 rounded-[36px] p-10 md:p-16 text-white text-center shadow-2xl border border-rose-900/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <Smartphone size={48} className="mx-auto mb-4 text-orange-400" />
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Ready to Experience <span className="text-orange-400">TheWorkingZone</span>?
              </h2>
              <p className="text-white/80 text-base md:text-lg font-medium mb-8">
                Download the official app on Google Play to post jobs, find skilled workers, and manage your workforce today.
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
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 transition-all hover:scale-105 active:scale-95 text-base"
                >
                  <span>Contact Support</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;
