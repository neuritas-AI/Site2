import { GraduationCap, Brain, Lightbulb, TrendingUp, Sparkles, ArrowRight, HelpCircle, Clock, Smartphone, Target } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function AppointmentSetting() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <GraduationCap className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />, text: t('aiTraining.badge') }}
        title={t('aiTraining.title1').toUpperCase()}
        subtitle={t('aiTraining.title2').toUpperCase()}
        description={t('aiTraining.description')}
        backgroundImage="/business-silhouette.svg"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('aiTraining.introductionBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('aiTraining.introductionTitle')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('aiTraining.introductionDesc')}
            </p>
          </div>

          <div className="mb-32 relative rounded-3xl overflow-hidden">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/Ai-training.png.png"
                alt="AI Training Session"
                className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/10"
              />
            </div>
          </div>

          <div className="mb-32 relative p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                {t('aiTraining.offeringsTitle')}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-6">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{t('aiTraining.simpleTrainingTitle')}</h4>
                  <p className="text-gray-400 leading-relaxed">{t('aiTraining.simpleTrainingDesc')}</p>
                </div>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-purple-400 mb-6">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{t('aiTraining.advancedTrainingTitle')}</h4>
                  <p className="text-gray-400 leading-relaxed">{t('aiTraining.advancedTrainingDesc')}</p>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
                <p className="text-lg text-gray-300">{t('aiTraining.customizationNote')}</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('aiTraining.benefitsBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('aiTraining.benefitsTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: t('aiTraining.benefit1Title'),
                description: t('aiTraining.benefit1Desc'),
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: t('aiTraining.benefit2Title'),
                description: t('aiTraining.benefit2Desc'),
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: t('aiTraining.benefit3Title'),
                description: t('aiTraining.benefit3Desc'),
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('aiTraining.faqBadge')}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
                {t('aiTraining.faqTitle')}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  icon: <Clock className="w-5 h-5" />,
                  question: t('aiTraining.faq1Question'),
                  answer: t('aiTraining.faq1Answer'),
                },
                {
                  icon: <Smartphone className="w-5 h-5" />,
                  question: t('aiTraining.faq2Question'),
                  answer: t('aiTraining.faq2Answer'),
                },
                {
                  icon: <Target className="w-5 h-5" />,
                  question: t('aiTraining.faq3Question'),
                  answer: t('aiTraining.faq3Answer'),
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                        {faq.icon}
                      </div>
                      <span className="text-xl font-semibold">{faq.question}</span>
                    </div>
                    <div className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                {t('aiTraining.ctaTitle')}
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('aiTraining.ctaDesc')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50"
              >
                {t('aiTraining.ctaButton')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
