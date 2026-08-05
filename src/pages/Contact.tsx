import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  MessageSquare,
  Sparkles,
  MapPin,
  Send,
  CheckCircle2,
  Download,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    role: "Worker",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.theworkingzone.app&pcampaignid=web_share";
  const WHATSAPP_URL = "https://wa.me/919699652260";
  const PHONE_NUMBER = "+91 96996 52260";
  const EMAIL_ADDRESS = "support@theworkingzone.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully. We will get back to you shortly.");
      setFormData({ name: "", contact: "", role: "Worker", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen site-background flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-28 lg:pt-32 pb-16">
        {/* Seamless Open Hero Section */}
        <section className="relative py-8 md:py-12 overflow-hidden">
          {/* Ambient Glow Circles */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-[15%] w-96 h-96 rounded-full bg-emerald-400/20 blur-[130px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-[10%] w-96 h-96 rounded-full bg-blue-500/20 blur-[130px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-[30%] w-80 h-80 rounded-full bg-orange-400/20 blur-[120px] pointer-events-none"
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
                  Get In Touch
                </span>
                <span className="flex h-2 w-2 rounded-full bg-rose-600" />
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A2540] tracking-tight mb-6 leading-[1.1]">
                {t("contact.title_part1")}{" "}
                <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent">
                  {t("contact.title_part2")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#0A2540]/80 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                {t("contact.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3 Key Contact Action Cards */}
        <section className="container mx-auto px-6 max-w-6xl mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-emerald-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-200 mb-6">
                  <MessageCircle size={28} />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3 inline-block">
                  Instant Support
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-2">
                  WhatsApp Us
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                  Get quick responses for registration, job inquiries, and app support.
                </p>
                <p className="text-lg font-bold text-[#0A2540] mb-6">{PHONE_NUMBER}</p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Direct Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-orange-200 mb-6">
                  <Phone size={28} />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-800 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3 inline-block">
                  Voice Call
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-2">
                  Call Support
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-2">
                  Speak directly with our dedicated support representatives.
                </p>
                <p className="text-xs text-gray-500 font-semibold mb-4 flex items-center gap-1.5">
                  <Clock size={14} className="text-orange-500" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                </p>
                <p className="text-lg font-bold text-[#0A2540] mb-6">{PHONE_NUMBER}</p>
              </div>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-200 mb-6">
                  <Mail size={28} />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 inline-block">
                  Official Desk
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#0A2540] mb-2">
                  Email Desk
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                  Send official inquiries, partnership proposals, or technical support emails.
                </p>
                <p className="text-base font-bold text-[#0A2540] mb-6 truncate">{EMAIL_ADDRESS}</p>
              </div>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#0A2540] hover:bg-blue-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Mail size={18} />
                <span>Email Us</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Main Content: Interactive Form & Company Details */}
        <section className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Interactive Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[36px] border border-gray-200 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-[#0A2540]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold">We typically respond within 24 hours.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0A2540] mb-2">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[#0A2540] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0A2540] mb-2">
                      Phone Number / Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[#0A2540] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0A2540] mb-2">
                      I am a...
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[#0A2540] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    >
                      <option value="Worker">Worker</option>
                      <option value="Contractor">Contractor</option>
                      <option value="Company">Company / Client</option>
                      <option value="Individual">Individual Hirer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0A2540] mb-2">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[#0A2540] font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg transition-all active:scale-95 disabled:opacity-50"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            </motion.div>

            {/* Right Side Info & Verification */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Trust Card */}
              <div className="bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 p-8 rounded-[36px] text-white shadow-xl border border-rose-900/30">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck size={28} className="text-emerald-400" />
                  <h4 className="font-heading text-xl font-bold">Verified Support Desk</h4>
                </div>
                <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">
                  Our official customer care team assists workers and contractors across India with onboarding, profile verification, and platform assistance.
                </p>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-xs text-white/90 font-semibold">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Instant WhatsApp Resolution Desk</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/90 font-semibold">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                    <span>Verified Phone Helpline: +91 96996 52260</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/90 font-semibold">
                    <CheckCircle2 size={16} className="text-rose-300 shrink-0" />
                    <span>Direct Grievance & Escalation Support</span>
                  </div>
                </div>
              </div>

              {/* FAQs Quick Box */}
              <div className="bg-white p-8 rounded-[36px] border border-gray-200 shadow-md">
                <h4 className="font-heading text-lg font-bold text-[#0A2540] mb-2">
                  Looking for quick answers?
                </h4>
                <p className="text-xs text-gray-600 font-medium mb-6">
                  Browse our interactive Knowledge Center and frequently asked questions.
                </p>
                <Link
                  to="/learn-more"
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-gray-50 hover:bg-[#0A2540] text-[#0A2540] hover:text-white font-bold text-xs transition-all group shadow-sm"
                >
                  <span>Explore Learn More Center</span>
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Download Banner */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-rose-950 rounded-[36px] p-10 md:p-14 text-white text-center shadow-2xl border border-rose-900/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Connect with <span className="text-orange-400">TheWorkingZone</span> App
              </h2>
              <p className="text-white/80 text-sm md:text-base font-medium mb-8">
                Download the official app on Google Play to access daily jobs and workforce management features.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-sm"
                >
                  <Download size={18} />
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

export default Contact;
