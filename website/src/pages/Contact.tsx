import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/917004102260?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: t("contact.toast_title"),
      description: t("contact.toast_desc"),
    });
    
    e.currentTarget.reset();
  };

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

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 md:p-10">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{t("contact.form_title")}</h3>
                <p className="text-[#0A2540]/60 font-medium mb-8 text-lg">{t("contact.form_subtitle")}</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0A2540]">{t("contact.full_name")}</label>
                      <Input name="fullName" placeholder={t("contact.full_name")} className="bg-white/50 border-border/50" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0A2540]">{t("contact.email_address")}</label>
                      <Input name="email" type="email" placeholder={t("contact.email_address")} className="bg-white/50 border-border/50" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2540]">{t("contact.subject")}</label>
                    <Input name="subject" placeholder={t("contact.subject")} className="bg-white/50 border-border/50" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2540]">{t("contact.message")}</label>
                    <Textarea 
                      name="message"
                      placeholder={t("contact.message")} 
                      className="min-h-[150px] bg-white/50 border-border/50" 
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold py-6 px-10 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95 flex items-center gap-2">
                    {t("contact.send")}
                    <Send size={18} />
                  </Button>
                </form>
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
