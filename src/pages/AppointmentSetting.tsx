import { Calendar, Clock, CheckCircle, Zap, Sparkles, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AppointmentSetting() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Calendar className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />, text: t('appointmentSetting.badge') }}
        title={t('appointmentSetting.title1').toUpperCase()}
        subtitle={t('appointmentSetting.title2').toUpperCase()}
        description={t('appointmentSetting.description')}
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="content"
      />

      <section id="content" className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />
              <span className="text-xs md:text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('appointmentSetting.smartSchedulingBadge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('appointmentSetting.effortlessBookingTitle')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('appointmentSetting.effortlessBookingDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            {[
              {
                icon: <Calendar className="w-6 md:w-8 h-6 md:h-8" />,
                title: t('appointmentSetting.feat1Title'),
                description: t('appointmentSetting.feat1Desc'),
              },
              {
                icon: <Clock className="w-6 md:w-8 h-6 md:h-8" />,
                title: t('appointmentSetting.feat2Title'),
                description: t('appointmentSetting.feat2Desc'),
              },
              {
                icon: <CheckCircle className="w-6 md:w-8 h-6 md:h-8" />,
                title: t('appointmentSetting.feat3Title'),
                description: t('appointmentSetting.feat3Desc'),
              },
              {
                icon: <Zap className="w-6 md:w-8 h-6 md:h-8" />,
                title: t('appointmentSetting.feat4Title'),
                description: t('appointmentSetting.feat4Desc'),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className="mb-4 md:mb-6 w-12 md:w-16 h-12 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="relative p-6 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">
                {t('appointmentSetting.successRatesTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
                <div>
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">85%</div>
                  <p className="text-sm md:text-base text-gray-400">{t('appointmentSetting.stat1Label')}</p>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">5x</div>
                  <p className="text-sm md:text-base text-gray-400">{t('appointmentSetting.stat2Label')}</p>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">90%</div>
                  <p className="text-sm md:text-base text-gray-400">{t('appointmentSetting.stat3Label')}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold text-sm md:text-base transition-all hover:shadow-2xl hover:shadow-purple-500/50"
              >
                {t('appointmentSetting.automateSchedulingBtn')}
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
