import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Briefcase, Users, ShieldCheck, Banknote } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroPhones from "@/assets/hero-phones.png";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-32 pb-0 flex flex-col">
      {/* 4-Color Wave Background */}
      <div className="hero-waves hidden lg:block">
        <div className="hero-wave-maroon opacity-90" />
        <div className="hero-wave-green opacity-90" />
        <div className="hero-wave-orange opacity-90" />
        <div className="hero-wave-blue" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Left Content */}
          <div className="lg:w-7/12 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A2540]"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              INDIA'S SMART LABOR PLATFORM
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl lg:text-[72px] font-black leading-[1.05] text-[#0A2540] tracking-tight"
            >
              Connecting Skills.<br />
              Creating Opportunities.<br />
              <span className="text-secondary">Building Tomorrow.</span>
            </motion.h1>

            {/* Color underline indicators */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
              <div className="h-1.5 w-12 bg-maroon rounded-full" />
              <div className="h-1.5 w-12 bg-green rounded-full" />
              <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
              <div className="h-1.5 w-12 bg-secondary rounded-full" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl text-[#0A2540]/80 max-w-2xl font-medium leading-relaxed"
            >
              The Working Zone is a one-stop platform that connects <span className="text-maroon font-bold">Workers</span>, <span className="text-green font-bold">Individuals</span>, <span className="text-primary font-bold">Contractors</span>, and <span className="text-secondary font-bold">Companies</span> for trusted work and reliable workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <Link
                to="/download"
                className="bg-[#0A2540] flex items-center gap-2.5 rounded-full px-12 py-5 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Explore Opportunities
                <ArrowRight size={18} />
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 font-bold text-[#0A2540] hover:text-primary transition-colors group text-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 group-hover:scale-110 transition-all">
                  <Play size={18} fill="#0A2540" className="ml-0.5" />
                </div>
                Watch How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="lg:w-5/12 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-[480px]"
            >
              <img src={heroPhones} alt="TheWorkingZone App" className="w-full h-auto drop-shadow-2xl" />
              
              {/* Floating Icons */}
              <div className="absolute top-1/4 -left-8 h-12 w-12 rounded-full bg-maroon text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce" style={{ animationDuration: '3s' }}>
                <Users size={20} />
              </div>
              <div className="absolute bottom-1/3 -left-12 h-12 w-12 rounded-full bg-green text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce" style={{ animationDuration: '4s' }}>
                <Users size={20} />
              </div>
              <div className="absolute top-1/3 -right-6 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce" style={{ animationDuration: '3.5s' }}>
                <Briefcase size={20} />
              </div>
              <div className="absolute bottom-1/4 -right-10 h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce" style={{ animationDuration: '4.5s' }}>
                <Banknote size={20} />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats Pill - Positioned below the content but above the navy bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 mb-8 bg-white border border-gray-100 rounded-[32px] p-8 shadow-2xl flex flex-wrap items-center justify-between gap-8 max-w-5xl mx-auto w-full z-30"
        >
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center lg:justify-start">
            <div className="h-12 w-12 rounded-full bg-red-50 text-maroon flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0A2540]">5,000+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Skilled Workers</p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-100 hidden lg:block" />
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center lg:justify-start">
            <div className="h-12 w-12 rounded-full bg-green-50 text-green flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0A2540]">500+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trusted Contractors</p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-100 hidden lg:block" />
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center lg:justify-start">
            <div className="h-12 w-12 rounded-full bg-blue-50 text-primary flex items-center justify-center">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0A2540]">1,000+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Companies</p>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-100 hidden lg:block" />
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center lg:justify-start">
            <div className="h-12 w-12 rounded-full bg-orange-50 text-secondary flex items-center justify-center">
              <Banknote size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0A2540]">2Cr+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navy Bottom Bar */}
      <div className="w-full bg-[#0A2540] py-12 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex items-center gap-5 text-white">
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <Users size={28} className="text-maroon" />
              </div>
              <div>
                <p className="font-bold text-lg">Easy to Use</p>
                <p className="text-sm text-gray-400">Simple for everyone</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-white">
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <ShieldCheck size={28} className="text-green" />
              </div>
              <div>
                <p className="font-bold text-lg">Trusted & Secure</p>
                <p className="text-sm text-gray-400">Verified profiles</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-white">
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <div className="text-3xl">⚡</div>
              </div>
              <div>
                <p className="font-bold text-lg">Faster Connections</p>
                <p className="text-sm text-gray-400">Hire in clicks</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-white">
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <Banknote size={28} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-lg">Better Future</p>
                <p className="text-sm text-gray-400">Empowering India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
