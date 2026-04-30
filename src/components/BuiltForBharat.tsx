import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Flag, Heart, Map, Sparkles } from "lucide-react";

const BuiltForBharat = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Flag,
      title: "Viksit Bharat 2047",
      desc: "Aligning with the national vision of a developed India by 2047 through skilled manpower.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Map,
      title: "Ground Reality",
      desc: "Built for the unique operational challenges of the Indian blue-collar workforce.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Heart,
      title: "Inclusive Growth",
      desc: "Ensuring every worker and contractor grows together with transparent unit economics.",
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FDF2F2]/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-primary border border-red-100 group cursor-default">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Commitment</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-[#0A2540] leading-[1.1]">
              Built for <span className="text-primary">Bharat</span>,<br />
              Vision for <span className="text-secondary">Viksit Bharat</span>.
            </h2>
            
            <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-xl">
              TheWorkingZone is more than just a platform; it's a mission to organize India's blue-collar workforce with dignity, accountability, and technological excellence.
            </p>

            <div className="grid gap-6 pt-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-3xl bg-white border border-red-50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`h-12 w-12 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center shrink-0`}>
                    <pillar.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#0A2540] mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
               <img 
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1000" 
                alt="Digital Bharat" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-3xl font-black italic tracking-tighter">"Connecting the heart of India's growth."</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-60 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForBharat;
