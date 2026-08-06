import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Download } from "lucide-react";
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
    { href: "/features", label: t("navbar.features") },
    { href: "/about", label: t("navbar.about") },
    { href: "/vision", label: t("navbar.vision") },
    { href: "/learn-more", label: t("navbar.learn_more") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 py-3 shadow-md shadow-gray-200/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02] active:scale-95">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`text-[15px] transition-all relative inline-flex items-center justify-center ${
                    isActive
                      ? "bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-gray-200/90 shadow-sm"
                      : "px-3 py-1.5 rounded-xl hover:bg-gray-50/80"
                  }`}
                >
                  <span
                    className={
                      isActive
                        ? "bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent font-extrabold"
                        : "text-[#0A2540] font-bold hover:text-orange-500 transition-colors"
                    }
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="h-5 w-px bg-gray-200" />

          {/* Theme Styled Language Switcher Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/90 text-[14px] font-extrabold text-[#0A2540] hover:border-orange-300 hover:bg-white shadow-sm transition-all outline-none">
              <Languages size={17} className="text-orange-500" />
              <span>{currentLanguageName}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl p-1.5 shadow-2xl min-w-[190px] z-[60] max-h-[450px] overflow-y-auto custom-scrollbar">
              {languages.map((lng) => (
                <DropdownMenuItem
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                    i18n.language === lng.code ? "bg-orange-50 text-orange-600 font-extrabold" : "text-[#0A2540] hover:bg-gray-50"
                  }`}
                >
                  {lng.name}
                  {i18n.language === lng.code && <div className="h-2 w-2 rounded-full bg-orange-500" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Multi-Color Gradient Download Button */}
          <Link
            to="/download"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 hover:from-orange-600 hover:via-rose-700 hover:to-blue-800 px-6 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>{t("navbar.download")}</span>
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-[#0A2540] p-2 rounded-xl bg-white/80 border border-gray-200 shadow-sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-3 px-6 py-6">
              {links.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={handleLinkClick}
                    className={`text-base font-extrabold py-2.5 px-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-white border border-gray-200 shadow-sm"
                        : "text-[#0A2540] hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={
                        isActive
                          ? "bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 bg-clip-text text-transparent font-extrabold"
                          : "text-[#0A2540]"
                      }
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}

              {/* Mobile Language Switcher */}
              <div className="py-3 border-t border-gray-100 mt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base font-extrabold text-[#0A2540] outline-none w-full">
                    <div className="flex items-center gap-2">
                      <Languages size={20} className="text-orange-500" />
                      <span>{currentLanguageName}</span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-white border-gray-100 rounded-2xl p-1 shadow-2xl min-w-[220px] z-[60] max-h-[350px] overflow-y-auto">
                    {languages.map((lng) => (
                      <DropdownMenuItem
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}
                        className={`flex items-center justify-between py-3 px-5 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
                          i18n.language === lng.code ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {lng.name}
                        {i18n.language === lng.code && <div className="h-2 w-2 rounded-full bg-orange-500" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Download CTA */}
              <Link
                to="/download"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-orange-500 via-rose-600 to-blue-700 hover:from-orange-600 hover:via-rose-700 hover:to-blue-800 rounded-2xl px-5 py-3.5 text-center text-base font-extrabold text-white mt-2 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Download size={20} />
                <span>{t("navbar.download")}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
