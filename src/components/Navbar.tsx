import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import Logo from "./Logo";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'ur', name: 'اردو' },
  { code: 'mai', name: 'मैथिली' },
  { code: 'bho', name: 'भोजपुरी' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguageName = languages.find(l => l.code === i18n.language)?.name || 'English';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t("navbar.home") },
    { href: "/#features", label: t("navbar.features") },
    { href: "/#about", label: t("navbar.about") },
    { href: "/#vision", label: t("navbar.vision") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#") && location.pathname === "/") {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02] active:scale-95">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[15px] font-bold text-[#0A2540] transition-colors hover:text-secondary relative group/link"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200" />

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-[15px] font-bold text-[#0A2540] hover:text-secondary outline-none transition-colors">
              <Languages size={18} className="text-secondary" />
              <span>{currentLanguageName}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border-gray-100 rounded-2xl p-1 shadow-2xl min-w-[180px] z-[60] max-h-[450px] overflow-y-auto custom-scrollbar">
              {languages.map((lng) => (
                <DropdownMenuItem
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm cursor-pointer transition-colors ${
                    i18n.language === lng.code ? "bg-primary/5 text-primary font-bold" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {lng.name}
                  {i18n.language === lng.code && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/download"
            className="flex items-center gap-2 rounded-2xl bg-[#0A2540] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-900 active:scale-95"
          >
            {t("navbar.download")}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white shadow-2xl"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-lg font-bold text-[#0A2540] py-2 border-l-4 border-transparent hover:border-primary hover:pl-4 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Language Switcher */}
              <div className="py-2 border-t border-gray-100 mt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 text-lg font-bold text-[#0A2540] outline-none w-full">
                    <Languages size={20} className="text-secondary" />
                    <span>{currentLanguageName}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-white border-gray-100 rounded-2xl p-1 shadow-2xl min-w-[220px] z-[60] max-h-[350px] overflow-y-auto">
                    {languages.map((lng) => (
                      <DropdownMenuItem
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}
                        className={`flex items-center justify-between py-3 px-5 rounded-xl text-base cursor-pointer transition-colors ${
                          i18n.language === lng.code ? "bg-primary/5 text-primary font-bold" : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {lng.name}
                        {i18n.language === lng.code && <div className="h-2 w-2 rounded-full bg-primary" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link
                to="/download"
                onClick={() => setIsOpen(false)}
                className="bg-[#0A2540] rounded-xl px-5 py-4 text-center text-base font-bold text-white mt-4 shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                {t("navbar.download")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
