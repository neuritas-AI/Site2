import { Brain, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Brain className="w-6 md:w-8 h-6 md:h-8 text-cyan-400" />
                <span className="text-base md:text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">NEURITAS-AI</span>
              </div>
              <p className="text-xs md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                {t('footer.tagline')}
              </p>
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
            </div>

            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">{t('footer.services')}</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    to="/customer-engagement"
                    className="text-xs md:text-base text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.customerEngagement')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/website-optimization"
                    className="text-xs md:text-base text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.websiteOptimization')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointment-setting"
                    className="text-xs md:text-base text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.appointmentSetting')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">{t('footer.company')}</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-xs md:text-base text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-xs md:text-base text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">{t('footer.contact')}</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3 text-gray-400">
                  <Mail className="w-4 md:w-5 h-4 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">{t('footer.email')}</p>
                    <a href="mailto:info@neuritas-ai.com" className="text-xs md:text-sm break-all hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors">
                      info@neuritas-ai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-gray-400">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">{t('footer.businessHours')}</p>
                    <p className="text-xs md:text-sm">{t('footer.hours')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                © 2026 Neuritas-AI. {t('footer.rights')}
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-xs md:text-sm transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-xs md:text-sm transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
