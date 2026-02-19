import { MessageCircle, Users, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CustomerEngagement() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <MessageCircle className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />, text: t('customerEngagement.badge') }}
        title={t('customerEngagement.title1').toUpperCase()}
        subtitle={t('customerEngagement.title2').toUpperCase()}
        description={t('customerEngagement.description')}
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('customerEngagement.sectionBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('customerEngagement.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('customerEngagement.sectionDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: t('customerEngagement.feature1Title'),
                description: t('customerEngagement.feature1Desc'),
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: t('customerEngagement.feature2Title'),
                description: t('customerEngagement.feature2Desc'),
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: t('customerEngagement.feature3Title'),
                description: t('customerEngagement.feature3Desc'),
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: t('customerEngagement.feature4Title'),
                description: t('customerEngagement.feature4Desc'),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                {t('customerEngagement.benefitsTitle')}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('customerEngagement.benefit1Stat')}</div>
                  <p className="text-gray-400">{t('customerEngagement.benefit1')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('customerEngagement.benefit2Stat')}</div>
                  <p className="text-gray-400">{t('customerEngagement.benefit2')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('customerEngagement.benefit3Stat')}</div>
                  <p className="text-gray-400">{t('customerEngagement.benefit3')}</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50"
              >
                {t('customerEngagement.ctaButton')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
