import { Lightbulb, Target, Rocket, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Sparkles className="w-4 h-4 text-cyan-400" />, text: t('about.badge') }}
        title={t('about.title1').toUpperCase()}
        subtitle={t('about.title2').toUpperCase()}
        description={t('about.description')}
        backgroundImage="/futuristic_compressed.jpg"
        scrollTarget="content"
      />

      <div className="section-divider" />

      <section id="content" className="relative py-32 px-6">
        <div className="relative z-10 max-w-7xl mx-auto space-y-32">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/8 backdrop-blur-xl gradient-border"
            style={{ boxShadow: '0 0 60px rgba(6,182,212,0.04), 0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}

            <div className="relative z-10 p-12 md:p-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-purple-500/30 rounded-full mb-8">
                <Lightbulb className="w-5 h-5 text-purple-400" />
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('about.innovationBadge')}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  {t('about.innovationTitle')}
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                {t('about.innovationDesc')}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/8 backdrop-blur-xl gradient-border"
            style={{ boxShadow: '0 0 60px rgba(168,85,247,0.04), 0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
            <div className="absolute inset-0 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
                {[...Array(6)].map((_, i) => (
                  <g key={i}>
                    <circle
                      cx={150 + i * 120}
                      cy="200"
                      r="40"
                      fill="none"
                      stroke="rgba(6, 182, 212, 0.4)"
                      strokeWidth="2"
                    />
                    <line
                      x1={190 + i * 120}
                      y1="200"
                      x2={230 + i * 120}
                      y2="200"
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="2"
                    />
                  </g>
                ))}
                {[...Array(6)].map((_, i) => (
                  <g key={i + 6}>
                    <circle
                      cx={150 + i * 120}
                      cy="400"
                      r="40"
                      fill="none"
                      stroke="rgba(168, 85, 247, 0.4)"
                      strokeWidth="2"
                    />
                    <line
                      x1={150 + i * 120}
                      y1="240"
                      x2={150 + i * 120}
                      y2="360"
                      stroke="rgba(99, 102, 241, 0.3)"
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="relative z-10 p-12 md:p-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-8">
                <Target className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">{t('about.whatWeDoBadge')}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {t('about.whatWeDoTitle')}
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
                {t('about.whatWeDoDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-cyan-500/40 card-premium" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('about.service1Title')}</h3>
                  <p className="text-gray-400">
                    {t('about.service1Desc')}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-purple-500/40 card-premium" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.service2Title')}</h3>
                  <p className="text-gray-400">
                    {t('about.service2Desc')}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-cyan-500/40 card-premium" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('about.service3Title')}</h3>
                  <p className="text-gray-400">
                    {t('about.service3Desc')}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-purple-500/40 card-premium" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('about.service4Title')}</h3>
                  <p className="text-gray-400">
                    {t('about.service4Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/8 backdrop-blur-xl gradient-border"
            style={{ boxShadow: '0 0 60px rgba(6,182,212,0.04), 0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
            <div className="absolute inset-0">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-20 bg-gradient-to-t from-cyan-500/30 to-transparent rounded-t-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      height: `${30 + i * 15}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="relative z-10 p-12 md:p-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full mb-8">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('about.ourMissionBadge')}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  {t('about.ourMissionTitle')}
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
                {t('about.ourMissionDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    {t('about.missionPoint1')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    {t('about.missionPoint2')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    {t('about.missionPoint3')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    {t('about.missionPoint4')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            {t('about.readyToJoin')}
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('about.buildFuture')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t('about.discoverHow')}
          </p>
        </div>
      </section>
    </div>
  );
}
