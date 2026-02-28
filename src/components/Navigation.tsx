import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/customer-engagement', label: t('nav.customerEngagement') },
    { path: '/website-optimization', label: t('nav.websiteOptimization') },
    { path: '/appointment-setting', label: t('nav.appointmentSetting') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
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

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Brain className="w-6 md:w-8 h-6 md:h-8 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
          <span className="hidden md:inline text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            NEURITAS-AI
          </span>
          <span className="md:hidden text-sm font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            AI
          </span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                isActive(item.path) ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/50 text-sm font-semibold uppercase"
          >
            {t('nav.contact')}
          </Link>

          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
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
                      i18n.language === lang.code ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400' : 'text-gray-300'
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
          <div className="px-4 md:px-6 py-3 md:py-4 space-y-3 md:space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                  isActive(item.path) ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 md:pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3 text-xs md:text-sm text-gray-400">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="line-clamp-1">Taal / Language / Langue</span>
              </div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-3 md:px-4 py-2 text-left text-sm rounded-lg transition-all ${
                      i18n.language === lang.code
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-purple-500/50 text-cyan-400'
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
