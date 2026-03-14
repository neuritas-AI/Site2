import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, Globe, ChevronDown, Bot, Calendar, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setVisible(false);
        setMobileMenuOpen(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setLangMenuOpen(false);
  }, [location.pathname]);

  const serviceItems = [
    { path: '/customer-engagement', label: t('nav.customerEngagement'), icon: <Bot className="w-4 h-4" /> },
    { path: '/website-optimization', label: t('nav.websiteOptimization'), icon: <Globe className="w-4 h-4" /> },
    { path: '/appointment-setting', label: t('nav.appointmentSetting'), icon: <Calendar className="w-4 h-4" /> },
    { path: '/ai-voice-caller', label: t('nav.aiVoiceCaller'), icon: <Mic className="w-4 h-4" /> },
  ];

  const languages = [
    { code: 'nl', label: 'NL', name: 'Nederlands' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = serviceItems.some(s => isActive(s.path)) || isActive('/services');

  return (
    <nav
      className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Brain className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            NEURITAS-AI
          </span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm hover:text-cyan-400 transition-all duration-300 ${
              isActive('/') ? 'text-cyan-400' : 'text-gray-300'
            }`}
          >
            {t('nav.home')}
          </Link>

          <div ref={servicesRef} className="relative">
            <div className="flex items-center">
              <Link
                to="/services"
                className={`text-sm hover:text-cyan-400 transition-all duration-300 ${
                  isServicesActive ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {t('nav.services')}
              </Link>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`ml-1 p-0.5 rounded transition-all duration-300 ${
                  isServicesActive ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
              >
                <div className="p-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 text-cyan-400 border border-cyan-500/20'
                          : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                      }`}
                    >
                      <span className="text-cyan-400/70">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`text-sm hover:text-cyan-400 transition-all duration-300 ${
              isActive('/about') ? 'text-cyan-400' : 'text-gray-300'
            }`}
          >
            {t('nav.about')}
          </Link>

          <Link
            to="/contact"
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/50 text-sm font-semibold uppercase text-black"
          >
            {t('nav.contact')}
          </Link>

          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold">{currentLanguage.label}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition-colors ${
                      i18n.language === lang.code ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 text-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    <span className="font-semibold">{lang.label}</span>
                    <span className="text-xs text-gray-500 ml-2">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm transition-all duration-300 ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {t('nav.home')}
            </Link>

            <div>
              <div className="flex items-center justify-between">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm transition-all duration-300 ${
                    isServicesActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {t('nav.services')}
                </Link>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-1 border-l border-white/10 ml-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                      className={`flex items-center gap-2 py-2 text-sm transition-all duration-300 ${
                        isActive(item.path) ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                      }`}
                    >
                      <span className="text-cyan-400/60">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm transition-all duration-300 ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {t('nav.about')}
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm transition-all duration-300 ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {t('nav.contact')}
            </Link>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Taal / Language / Langue</span>
              </div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm rounded-lg transition-all ${
                      i18n.language === lang.code
                        ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-semibold">{lang.label}</span>
                    <span className="text-xs text-gray-500 ml-2">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
