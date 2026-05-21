import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Clock, MessageCircle, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen site-background">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-4">
              {t("contact.title_part1")} <span className="text-secondary">{t("contact.title_part2")}</span>
            </h1>
            <p className="text-lg text-[#0A2540]/80 max-w-2xl mx-auto font-medium">
              {t("contact.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-8">{t("contact.info_title")}</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A2540]">{t("contact.email")}</p>
                      <p className="text-[#0A2540]/70 font-semibold">support@theworkingzone.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A2540]">{t("contact.phone")}</p>
                      <p className="text-[#0A2540]/70 font-semibold">+91 7004102260</p>
                    </div>
                  </div>


                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A2540]">{t("contact.hours")}</p>
                      <p className="text-[#0A2540]/70 font-semibold">{t("contact.hours_val")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-border/50">
                  <p className="font-bold text-[#0A2540] mb-4">{t("contact.connect_head")}</p>
                  <div className="flex gap-4">
                    <a href="https://wa.me/917004102260" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-lg border border-green-100">
                      <MessageCircle size={24} />
                    </a>
                    <a href="mailto:support@theworkingzone.com" className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-lg border border-blue-100">
                      <Mail size={22} />
                    </a>
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-lg border border-secondary/20">
                      <MessageSquare size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Coming Soon */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 md:p-10 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-secondary mx-auto mb-6">
                    <MessageSquare size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Contact Form Coming Soon</h3>
                  <p className="text-[#0A2540]/60 font-medium mb-8 text-lg">
                    We're working on a direct contact form. In the meantime, please reach out to us via email, phone, or WhatsApp.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://wa.me/917004102260" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp Us</span>
                    </a>
                    <a 
                      href="mailto:support@theworkingzone.com"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                    >
                      <Mail size={20} />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
