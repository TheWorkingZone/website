import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, FileText, PlayCircle, BookOpen, ChevronRight, Download, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LearnMore = () => {
  const { t } = useTranslation();

  const policyCards = [
    {
      icon: Shield,
      title: "Privacy Policy",
      description: "Learn how we protect your data and respect your privacy. Understand what information we collect and how we use it.",
      color: "bg-blue-50 text-blue-600",
      link: "/privacy-policy",
      highlights: ["Data Protection", "Your Rights", "Security Measures"]
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      description: "Read our terms of service and understand your rights and responsibilities when using TheWorkingZone.",
      color: "bg-orange-50 text-orange-600",
      link: "/terms-and-conditions",
      highlights: ["User Agreement", "Platform Rules", "Legal Rights"]
    }
  ];

  const tutorialCategories = [
    {
      icon: Users,
      title: "For Workers",
      description: "Learn how to create your profile, find jobs, and get hired",
      color: "bg-green-50 text-green-600",
      tutorials: [
        "Creating Your Worker Profile",
        "Finding the Right Jobs",
        "Applying to Opportunities",
        "Building Your Reputation"
      ]
    },
    {
      icon: Briefcase,
      title: "For Contractors & Companies",
      description: "Discover how to post jobs, hire workers, and manage your workforce",
      color: "bg-purple-50 text-purple-600",
      tutorials: [
        "Posting Your First Job",
        "Finding Skilled Workers",
        "Managing Your Team",
        "Payment & Contracts"
      ]
    },
    {
      icon: BookOpen,
      title: "Platform Basics",
      description: "Get started with TheWorkingZone fundamentals",
      color: "bg-indigo-50 text-indigo-600",
      tutorials: [
        "Account Setup Guide",
        "Navigation & Features",
        "Safety & Best Practices",
        "Getting Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <BookOpen size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Learn More</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-[#0A2540] mb-6">
              Everything You Need to Know
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our policies, understand your rights, and learn how to make the most of TheWorkingZone
            </p>
          </motion.div>

          {/* Legal Documents Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4">
                Legal & Privacy
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Your trust is important to us. Read our policies to understand how we protect you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {policyCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={card.link}
                    className="block group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <card.icon size={28} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {card.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <ChevronRight size={16} className="text-secondary" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-bold group-hover:gap-3 transition-all">
                      <span>Read Full Document</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tutorials Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4">
                Video Tutorials
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Step-by-step guides to help you get started and master the platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tutorialCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-6`}>
                    <category.icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0A2540] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.tutorials.map((tutorial, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                          <PlayCircle size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium group-hover:text-[#0A2540] transition-colors">
                          {tutorial}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <PlayCircle size={48} className="mx-auto mb-4 opacity-90" />
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                    Video Tutorials Coming Soon
                  </h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    We're creating comprehensive video guides to help you get the most out of TheWorkingZone. Stay tuned!
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                    <Download size={16} />
                    <span>Download the app to get notified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Help & Support Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-4xl mx-auto text-center"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Reach out anytime for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span>Contact Support</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A2540] hover:bg-blue-900 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Download size={18} />
                  <span>Download App</span>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;
