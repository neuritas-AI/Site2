import { Phone, Calendar, Clock, Users, Sparkles, ArrowRight, Headphones, MessageSquare, CheckCircle, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function AIVoiceCaller() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="AI Voice Callers | Neuritas-AI" description="Replace traditional call centers with intelligent AI voice agents." url="/ai-voice-caller" />
      <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Phone className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />, text: t('aiVoiceCaller.badge') }}
        title={t('aiVoiceCaller.title1').toUpperCase()}
        subtitle={t('aiVoiceCaller.title2').toUpperCase()}
        description={t('aiVoiceCaller.description')}
        backgroundImage="/robot-voice-caller.png"
        overlayClassName="bg-gradient-to-b from-black/70 via-black/60 to-black"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Headphones className="w-4 h-4 text-cyan-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('aiVoiceCaller.introductionBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('aiVoiceCaller.introductionTitle')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('aiVoiceCaller.introductionDesc')}
            </p>
          </div>

          <div className="mb-32 relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold">{t('aiVoiceCaller.whatIsTitle')}</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t('aiVoiceCaller.whatIsDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <MessageSquare className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="text-xl font-semibold mb-2">{t('aiVoiceCaller.function1Title')}</h4>
                  <p className="text-gray-400">{t('aiVoiceCaller.function1Desc')}</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                  <Calendar className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="text-xl font-semibold mb-2">{t('aiVoiceCaller.function2Title')}</h4>
                  <p className="text-gray-400">{t('aiVoiceCaller.function2Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('aiVoiceCaller.featuresBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('aiVoiceCaller.featuresTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-32">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: t('aiVoiceCaller.feature1Title'),
                description: t('aiVoiceCaller.feature1Desc'),
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: t('aiVoiceCaller.feature2Title'),
                description: t('aiVoiceCaller.feature2Desc'),
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: t('aiVoiceCaller.feature3Title'),
                description: t('aiVoiceCaller.feature3Desc'),
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('aiVoiceCaller.feature4Title'),
                description: t('aiVoiceCaller.feature4Desc'),
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

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl overflow-hidden mb-32">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full mb-6">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('aiVoiceCaller.benefitsBadge')}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  {t('aiVoiceCaller.benefitsTitle')}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('aiVoiceCaller.benefit1Stat')}</div>
                  <h4 className="text-xl font-semibold mb-2">{t('aiVoiceCaller.benefit1Title')}</h4>
                  <p className="text-gray-400">{t('aiVoiceCaller.benefit1Desc')}</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('aiVoiceCaller.benefit2Stat')}</div>
                  <h4 className="text-xl font-semibold mb-2">{t('aiVoiceCaller.benefit2Title')}</h4>
                  <p className="text-gray-400">{t('aiVoiceCaller.benefit2Desc')}</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{t('aiVoiceCaller.benefit3Stat')}</div>
                  <h4 className="text-xl font-semibold mb-2">{t('aiVoiceCaller.benefit3Title')}</h4>
                  <p className="text-gray-400">{t('aiVoiceCaller.benefit3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                {t('aiVoiceCaller.ctaTitle')}
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('aiVoiceCaller.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  {t('aiVoiceCaller.ctaButton')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm"
                >
                  {t('aiVoiceCaller.ctaButton2')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </>
  );
}