import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Briefcase, HardHat, Users, Shield, MapPin, MessageSquare } from "lucide-react";
import heroPhones from "@/assets/hero-phones.png";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Briefcase,
      title: t("features.items.companies_title"),
      description: t("features.items.companies_desc"),
      color: "bg-red-50 text-primary",
    },
    {
      icon: Users,
      title: t("features.items.contractors_title"),
      description: t("features.items.contractors_desc"),
      color: "bg-orange-50 text-secondary",
    },
    {
      icon: HardHat,
      title: t("features.items.workers_title"),
      description: t("features.items.workers_desc"),
      color: "bg-red-50 text-secondary",
    },
    {
      icon: Shield,
      title: t("features.items.workflows_title"),
      description: t("features.items.workflows_desc"),
      color: "bg-green-50 text-green-700",
    },
    {
      icon: MapPin,
      title: t("features.items.accuracy_title"),
      description: t("features.items.accuracy_desc"),
      color: "bg-blue-50 text-primary",
    },
    {
      icon: MessageSquare,
      title: t("features.items.accountability_title"),
      description: t("features.items.accountability_desc"),
      color: "bg-red-50 text-primary",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-24 bg-white/40 backdrop-blur-md relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-50/20 blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <span className="mb-4 inline-block font-bold tracking-widest text-[11px] uppercase text-primary">
            {t("features.badge")}
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-[#0A2540] sm:text-5xl">
            {t("features.title_part1")} <span className="text-secondary">{t("features.title_part2")}</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-medium leading-relaxed">
            {t("features.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid Left */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:order-1 order-2"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#0A2540]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:order-2 order-1"
          >
            <div className="relative z-10 animate-float">
              <img
                src={heroPhones}
                alt="TheWorkingZone app interface"
                loading="lazy"
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
