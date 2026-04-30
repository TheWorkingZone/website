import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Info, Target, Users } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block font-bold tracking-widest text-[11px] uppercase text-primary">
              {t("about.badge")}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#0A2540] sm:text-5xl mb-6">
              {t("about.title_part1")} <span className="text-secondary">{t("about.title_part2")}</span> {t("about.title_part3")}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              {t("about.description")}
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Users, title: t("about.item1_title"), desc: t("about.item1_desc") },
                { icon: Info, title: t("about.item2_title"), desc: t("about.item2_desc") }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-red-100 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2540] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12 overflow-hidden border border-white/50 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-30" />
              <div className="relative text-center">
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white max-w-[280px] mx-auto">
                  <p className="text-primary font-black text-5xl mb-2">{t("about.stats_value")}</p>
                  <p className="text-[#0A2540] font-bold">{t("about.stats_label")}</p>
                </div>
              </div>
            </div>
            {/* Decorative orbits */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-secondary/20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
