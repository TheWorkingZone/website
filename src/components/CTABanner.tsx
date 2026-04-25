import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTABanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-[#0A2540] rounded-[40px] p-8 md:p-16 text-white"
        >
          {/* Subtle background patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
                {t("cta.title_part1")} <br />
                <span className="text-secondary">{t("cta.title_part2")}</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 font-medium">
                {t("cta.description")}
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
                {[
                  t("cta.badge1"), 
                  t("cta.badge2"), 
                  t("cta.badge3"), 
                  t("cta.badge4")
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-gray-200">
                    <CheckCircle2 size={16} className="text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex -space-x-4 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-12 w-12 rounded-full ring-4 ring-[#0A2540] object-cover"
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt="User avatar"
                  />
                ))}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xs font-bold ring-4 ring-[#0A2540]">
                  +10k
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400">{t("cta.trusted_by")}</p>
              
              <Link
                to="/download"
                className="bg-secondary flex items-center gap-2 rounded-xl px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-[#e05e00]"
              >
                {t("cta.download_cta")}
                <ArrowRight size={20} />
              </Link>
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                {t("cta.subtext")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
