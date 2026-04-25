import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, ShieldCheck, Banknote } from "lucide-react";
import NumberTicker from "./ui/NumberTicker";

const StatsBar = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 -mt-10 px-6">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Skilled Workers Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
                        className="flex items-center gap-4 md:gap-6 bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-3xl md:rounded-[2.5rem] border border-white shadow-premium hover-lift"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
              <Users size={28} />
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-[#0A2540]">
                <NumberTicker value={5000} suffix="+" />
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("stats.skilled_workers")}</p>
            </div>
          </motion.div>

          {/* Contractors Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex items-center gap-4 md:gap-6 bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-3xl md:rounded-[2.5rem] border border-white shadow-premium hover-lift"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-[#0A2540]">
                <NumberTicker value={500} suffix="+" />
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("stats.trusted_contractors")}</p>
            </div>
          </motion.div>

          {/* Earnings Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex items-center gap-4 md:gap-6 bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-3xl md:rounded-[2.5rem] border border-white shadow-premium hover-lift"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-sm">
              <Banknote size={28} />
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-[#0A2540]">
                <NumberTicker value={2} prefix="₹" suffix="Cr+" />
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("stats.earned_by_workers")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
