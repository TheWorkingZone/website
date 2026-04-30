import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Compass, Globe, Sparkles } from "lucide-react";

const VisionSection = () => {
  const { t } = useTranslation();

  const visionItems = [
    {
      icon: Globe,
      title: t("vision.items.scalability_title"),
      desc: t("vision.items.scalability_desc"),
      color: "bg-red-50 text-primary"
    },
    {
      icon: Compass,
      title: t("vision.items.compliance_title"),
      desc: t("vision.items.compliance_desc"),
      color: "bg-red-50 text-secondary"
    },
    {
      icon: Sparkles,
      title: t("vision.items.growth_title"),
      desc: t("vision.items.growth_desc"),
      color: "bg-red-50 text-primary"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-white/40 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="mb-4 inline-block font-bold tracking-widest text-[11px] uppercase text-primary">
            {t("vision.badge")}
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-[#0A2540] sm:text-5xl mb-6">
            {t("vision.title_part1")} <span className="text-secondary">{t("vision.title_part2")}</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            {t("vision.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2 text-center"
            >
              <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-700 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
