import { ArrowRight, Bot, Globe, Calendar, Mic, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Bot className="w-10 h-10" />,
      badge: 'Chatbots',
      title: t('nav.customerEngagement'),
      description: t('home.customerDesc'),
      link: '/customer-engagement',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      borderHover: 'hover:border-cyan-500/50',
      shadowHover: 'hover:shadow-cyan-500/20',
      iconColor: 'text-cyan-400',
      stat: '95%',
      statLabel: t('chatbots.benefit1'),
    },
    {
      icon: <Globe className="w-10 h-10" />,
      badge: t('nav.websiteOptimization'),
      title: t('nav.websiteOptimization'),
      description: t('home.websiteDesc'),
      link: '/website-optimization',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      borderHover: 'hover:border-cyan-500/50',
      shadowHover: 'hover:shadow-cyan-500/20',
      iconColor: 'text-cyan-400',
      stat: '+30%',
      statLabel: t('websiteOptimization.benefit3').split('via')[0].trim(),
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      badge: t('nav.appointmentSetting'),
      title: t('nav.appointmentSetting'),
      description: t('home.appointmentDesc'),
      link: '/appointment-setting',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      borderHover: 'hover:border-cyan-500/50',
      shadowHover: 'hover:shadow-cyan-500/20',
      iconColor: 'text-cyan-400',
      stat: '40%',
      statLabel: t('appointmentSetting.stat2Label'),
    },
    {
      icon: <Mic className="w-10 h-10" />,
      badge: t('nav.aiVoiceCaller'),
      title: t('nav.aiVoiceCaller'),
      description: t('aiVoiceCaller.description'),
      link: '/ai-voice-caller',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      borderHover: 'hover:border-cyan-500/50',
      shadowHover: 'hover:shadow-cyan-500/20',
      iconColor: 'text-cyan-400',
      stat: '24/7',
      statLabel: t('aiVoiceCaller.benefit1Title'),
    },
  ];

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Cpu className="w-4 h-4 text-cyan-400" />, text: t('home.servicesBadge') }}
        title={t('home.servicesTitle').toUpperCase()}
        subtitle={t('home.servicesSubtitle')}
        description=""
        backgroundImage="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="services-content"
      />

      <section id="services-content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">{t('home.servicesBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`group relative p-10 rounded-2xl bg-white/5 border border-white/10 ${service.borderHover} transition-all duration-500 hover:shadow-2xl ${service.shadowHover} backdrop-blur-sm overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                        {service.stat}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 max-w-[120px] text-right leading-tight">
                        {service.statLabel}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-100 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>{t('hero.learnMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
              {t('home.ctaTitle')}
              <span className="block bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                {t('home.ctaSubtitle')}
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('home.ctaDesc')}
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              {t('home.ctaButton')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
