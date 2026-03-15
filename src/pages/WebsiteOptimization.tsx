import { Globe, Smartphone, ShoppingCart, Mail, Zap, BarChart3, Share2, Calendar, CreditCard, ArrowRight, Code2, RefreshCw, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function WebsiteOptimization() {
  const { t } = useTranslation();

  const implementations = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: t('websiteOptimization.impl1Title'),
      description: t('websiteOptimization.impl1Desc'),
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t('websiteOptimization.impl2Title'),
      description: t('websiteOptimization.impl2Desc'),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('websiteOptimization.impl3Title'),
      description: t('websiteOptimization.impl3Desc'),
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t('websiteOptimization.impl4Title'),
      description: t('websiteOptimization.impl4Desc'),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('websiteOptimization.impl5Title'),
      description: t('websiteOptimization.impl5Desc'),
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('websiteOptimization.impl6Title'),
      description: t('websiteOptimization.impl6Desc'),
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t('websiteOptimization.impl7Title'),
      description: t('websiteOptimization.impl7Desc'),
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: t('websiteOptimization.impl8Title'),
      description: t('websiteOptimization.impl8Desc'),
    },
  ];

  const generalInfo = [
    {
      icon: <Globe className="w-6 h-6" />,
      text: t('websiteOptimization.general1'),
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      text: t('websiteOptimization.general2'),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: t('websiteOptimization.general3'),
    },
  ];

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Code2 className="w-4 h-4 text-cyan-400" />, text: t('websiteOptimization.badge') }}
        title={t('websiteOptimization.title1').toUpperCase()}
        subtitle={t('websiteOptimization.title2').toUpperCase()}
        description={t('websiteOptimization.description')}
        backgroundImage="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="content"
      />

      <section id="content" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">{t('websiteOptimization.introBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('websiteOptimization.introTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('websiteOptimization.introDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {generalInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400">
                  {item.icon}
                </div>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">{t('websiteOptimization.implBadge')}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {t('websiteOptimization.implTitle')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementations.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-400 hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-sm"
                >
                  <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
                  <p className="text-gray-400">{t('websiteOptimization.stat1Label')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">2x</div>
                  <p className="text-gray-400">{t('websiteOptimization.stat2Label')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">24/7</div>
                  <p className="text-gray-400">{t('websiteOptimization.stat3Label')}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-cyan-500/40"
              >
                {t('websiteOptimization.optimizeYourSiteBtn')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
