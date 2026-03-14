import { Brain, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/neuritas_ai/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61586244849568',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/111895558/',
    icon: Linkedin,
  },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">NEURITAS-AI</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t('footer.tagline')}
              </p>
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.services')}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/customer-engagement"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.customerEngagement')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/website-optimization"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.websiteOptimization')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointment-setting"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.appointmentSetting')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.company')}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.contact')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('footer.email')}</p>
                    <a href="mailto:info@neuritas-ai.com" className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors">
                      chat@neuritas-ai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('footer.businessHours')}</p>
                    <p>{t('footer.hours')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm">
                © 2026 Neuritas-AI. {t('footer.rights')}
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 social-icon-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-sm transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-sm transition-colors"
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
