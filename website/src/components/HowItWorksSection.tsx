import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FileText, Users, Briefcase, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    { 
      icon: FileText, 
      title: t("how_it_works.steps.step1_title"), 
      description: t("how_it_works.steps.step1_desc") 
    },
    { 
      icon: Users, 
      title: t("how_it_works.steps.step2_title"), 
      description: t("how_it_works.steps.step2_desc") 
    },
    { 
      icon: Briefcase, 
      title: t("how_it_works.steps.step3_title"), 
      description: t("how_it_works.steps.step3_desc") 
    },
    { 
      icon: TrendingUp, 
      title: t("how_it_works.steps.step4_title"), 
      description: t("how_it_works.steps.step4_desc") 
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white/40 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-block font-bold tracking-widest text-[11px] uppercase text-primary">
            {t("how_it_works.badge")}
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-[#0A2540] sm:text-5xl">
            {t("how_it_works.title_part1")} <span className="text-secondary">{t("how_it_works.title_part2")}</span>
          </h2>
          <p className="mt-4 text-gray-400 font-medium">
            {t("how_it_works.description")}
          </p>
        </motion.div>

        <div className="mt-20 relative px-4">
          {/* Connector lines (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-gray-200 -z-10 hidden lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 text-center group border border-white/20 shadow-sm"
              >
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50/50 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                  <step.icon size={36} />
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-200 hidden lg:block" size={24} />
                  )}
                </div>
                
                <h3 className="font-heading text-lg font-extrabold text-[#0A2540] transition-colors group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-gray-400 max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
