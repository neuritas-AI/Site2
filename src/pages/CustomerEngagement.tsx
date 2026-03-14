import { Bot, MessageCircle, Users, Clock, TrendingUp, Sparkles, ArrowRight, Calendar, CheckCircle, Zap, Brain, BarChart } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CustomerEngagement() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Bot className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />, text: t('chatbots.badge') }}
        title={t('chatbots.title1').toUpperCase()}
        subtitle={t('chatbots.title2').toUpperCase()}
        description={t('chatbots.description')}
        backgroundImage="/ChatGPT_Image_14_mrt_2026,_22_31_20.png"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('chatbots.introductionBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('chatbots.introductionTitle')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('chatbots.introductionDesc')}
            </p>
          </div>

          <div className="mb-32 relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold">{t('chatbots.whatIsChatbotTitle')}</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t('chatbots.whatIsChatbotDesc')}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <MessageCircle className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="text-xl font-semibold mb-2">{t('chatbots.capability1Title')}</h4>
                  <p className="text-gray-400">{t('chatbots.capability1Desc')}</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <Users className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="text-xl font-semibold mb-2">{t('chatbots.capability2Title')}</h4>
                  <p className="text-gray-400">{t('chatbots.capability2Desc')}</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <BarChart className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="text-xl font-semibold mb-2">{t('chatbots.capability3Title')}</h4>
                  <p className="text-gray-400">{t('chatbots.capability3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('chatbots.featuresBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('chatbots.featuresTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: t('chatbots.feature1Title'),
                description: t('chatbots.feature1Desc'),
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: t('chatbots.feature2Title'),
                description: t('chatbots.feature2Desc'),
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: t('chatbots.feature3Title'),
                description: t('chatbots.feature3Desc'),
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: t('chatbots.feature4Title'),
                description: t('chatbots.feature4Desc'),
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: t('chatbots.feature5Title'),
                description: t('chatbots.feature5Desc'),
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: t('chatbots.feature6Title'),
                description: t('chatbots.feature6Desc'),
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('chatbots.feature7Title'),
                description: t('chatbots.feature7Desc'),
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: t('chatbots.feature8Title'),
                description: t('chatbots.feature8Desc'),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm"
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden mb-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                {t('chatbots.benefitsTitle')}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('chatbots.benefit1Stat')}</div>
                  <p className="text-gray-400">{t('chatbots.benefit1')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('chatbots.benefit2Stat')}</div>
                  <p className="text-gray-400">{t('chatbots.benefit2')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('chatbots.benefit3Stat')}</div>
                  <p className="text-gray-400">{t('chatbots.benefit3')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                {t('chatbots.ctaTitle')}
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('chatbots.ctaDesc')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50"
              >
                {t('chatbots.ctaButton')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
