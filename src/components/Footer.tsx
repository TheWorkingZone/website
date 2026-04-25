import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Twitter, Linkedin, Facebook, ArrowUp, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    platform: [
      { label: t("footer.links.features"), href: "/#features" },
      { label: t("footer.links.how_it_works"), href: "/#how-it-works" },
      { label: t("footer.links.vision"), href: "/#vision" },
    ],
    company: [
      { label: t("footer.links.about_us"), href: "/#about" },
      { label: t("footer.links.contact"), href: "/contact" },
      { label: t("footer.links.download_app"), href: "/download" },
    ],
    legal: [
      { label: t("footer.links.privacy"), href: "#" },
      { label: t("footer.links.terms"), href: "#" },
      { label: t("footer.links.cookies"), href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="relative border-t border-gray-100 bg-white pt-10 pb-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-50/30 to-transparent -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4 transition-opacity hover:opacity-80">
              <Logo className="h-10" />
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed mb-6 max-w-xs font-medium">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`h-9 w-9 flex items-center justify-center rounded-xl bg-gray-50/50 text-gray-400 border border-gray-100 transition-all ${social.color} hover:bg-white hover:shadow-md hover:border-transparent`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-[#0A2540] mb-4 text-[10px] uppercase tracking-[0.2em] opacity-80">{t("footer.columns.platform")}</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-primary text-[13px] font-medium transition-colors relative group/link"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary/80 transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-[#0A2540] mb-4 text-[10px] uppercase tracking-[0.2em] opacity-80">{t("footer.columns.company")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-gray-500 hover:text-secondary text-[15px] font-semibold transition-colors relative group/link"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-secondary/80 transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-[#0A2540] mb-4 text-[10px] uppercase tracking-[0.2em] opacity-80">{t("footer.columns.legal")}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-primary text-[13px] font-medium transition-colors relative group/link"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary/80 transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Interaction Column - Back to top */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-start">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="h-9 w-9 rounded-lg bg-primary/90 text-white flex items-center justify-center shadow-md shadow-blue-50 group transition-all"
            >
              <ArrowUp className="group-hover:-translate-y-0.5 transition-transform" size={18} />
            </motion.button>
            <span className="mt-2 text-[8px] font-bold uppercase tracking-widest text-primary/30 text-center lg:text-right">
              {t("footer.back_to_top")}
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col items-center text-center gap-3">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} <span className="text-primary/70 font-bold">TheWorkingZone</span>. {t("footer.tagline")}.
          </p>
          <div className="flex items-center gap-2 bg-gray-50/50 px-2.5 py-1 rounded-full border border-gray-50">
            <span className="h-1 w-1 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em]">{t("footer.systems_online")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
