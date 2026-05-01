import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Rocket, Smartphone, Heart, Hourglass, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/construction-hero.png";

const DownloadPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow relative flex items-center pt-20">
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Construction background" 
            className="w-full h-full object-cover object-center lg:object-right opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-white/80 lg:hidden" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-secondary border border-orange-100 mb-6 group cursor-default">
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t("download.badge")}</span>
                </div>
                
                <p className="text-[11px] font-bold text-[#0A2540]/40 uppercase tracking-[0.3em] mb-4">
                  {t("download.welcome")}
                </p>
                
                <h1 className="font-heading text-4xl md:text-7xl font-extrabold text-[#0A2540] leading-[1] tracking-tighter mb-4">
                  TheWorking<span className="text-secondary">Zone</span>
                  <br />
                  {t("download.title")}
                </h1>

                <div className="w-16 h-1 bg-secondary mb-8" />

                <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-4">
                  {t("download.subtitle")}
                </h3>
                
                <p className="text-[#0A2540]/70 text-base md:text-lg max-w-xl font-medium">
                  {t("download.description")}
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 pt-4"
              >
                {[
                  { icon: Rocket, label: t("download.innovation"), desc: t("download.innovation_desc") },
                  { icon: Smartphone, label: t("download.accessibility"), desc: t("download.accessibility_desc") },
                  { icon: Heart, label: t("download.dedication"), desc: t("download.dedication_desc") },
                ].map((item, i) => (
                  <div key={i} className="text-center md:text-left space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-primary border border-gray-100 mx-auto md:mx-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-[#0A2540] uppercase">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Bottom Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-xl"
              >
                <a
                  href="https://github.com/TheWorkingZone/app-releases/releases/download/v1.0.0-beta/TheWorkingZone-v0.0.1-beta.apk"
                  download
                  className="flex items-center justify-between gap-6 bg-secondary hover:bg-secondary/90 p-6 rounded-3xl shadow-xl group transition-all hover:scale-[1.02] active:scale-95"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary shrink-0 shadow-lg">
                      <Smartphone size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-grow text-left">
                      <p className="text-lg font-bold text-white">Download APK Now</p>
                      <p className="text-xs text-white/80 font-medium">Version 1.0.0 Beta • Android</p>
                    </div>
                  </div>
                  <ArrowRight size={24} className="text-white group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </motion.div>
            </div>

            {/* Right Side Text Overlay */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start xl:pl-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-card p-10 border-white/40 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 lg:mb-20"
              >
                {/* Decorative glowing dots */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />

                <div className="w-16 h-1 bg-secondary mb-8 group-hover:w-24 transition-all duration-500" />
                <h2 className="text-3xl md:text-6xl font-black text-[#0A2540] leading-[1.1] tracking-tight max-w-sm">
                  {t("download.bharat_title")}
                  <br />
                  <span className="text-secondary relative">
                    {t("download.bharat_highlight")}
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-1 bg-secondary/30 w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </h2>
                <div className="w-16 h-1 bg-primary mt-8 group-hover:w-24 transition-all duration-500" />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
