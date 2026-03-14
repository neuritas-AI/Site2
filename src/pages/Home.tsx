import { useEffect, useState } from 'react';
import { ArrowRight, Zap, Globe, Calendar, Mic, Sparkles, Brain, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black">
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
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
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse shadow-2xl shadow-cyan-500/50" />
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4"
                style={{
                  transform: `rotate(${i * 45}deg) translateX(200px)`,
                  animation: `orbit ${10 + i}s linear infinite`,
                }}
              >
                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              </div>
            ))}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + 33 * Math.cos((i * 45 * Math.PI) / 180)}%`}
                  y2={`${50 + 33 * Math.sin((i * 45 * Math.PI) / 180)}%`}
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">{t('hero.badge')}</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent animate-gradient uppercase">
              {t('hero.title1')}
            </span>
            <span className="block text-white mt-2 uppercase">{t('hero.title2')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2"
            >
              {t('hero.ctaMain')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm flex items-center justify-center"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 animate-bounce cursor-pointer"
        >
          <span className="text-sm tracking-widest uppercase">{t('hero.scrollExplore')}</span>
        </button>
      </section>

      <section id="services" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">{t('home.servicesBadge')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('home.customerTitle'),
                description: t('home.customerDesc'),
                link: '/customer-engagement',
                color: 'cyan',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: t('home.websiteTitle'),
                description: t('home.websiteDesc'),
                link: '/website-optimization',
                color: 'purple',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: t('home.appointmentTitle'),
                description: t('home.appointmentDesc'),
                link: '/appointment-setting',
                color: 'purple',
              },
              {
                icon: <Mic className="w-8 h-8" />,
                title: t('nav.aiVoiceCaller'),
                description: t('aiVoiceCaller.description'),
                link: '/ai-voice-caller',
                color: 'cyan',
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-2xl backdrop-blur-sm ${
                  service.color === 'cyan'
                    ? 'hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                    : 'hover:border-purple-500/50 hover:shadow-purple-500/20'
                }`}
              >
                <div className={`mb-6 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                  service.color === 'cyan'
                    ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-400'
                    : 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-400'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                <div className={`mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ${
                  service.color === 'cyan'
                    ? 'text-cyan-400'
                    : 'text-purple-400'
                }`}>
                  <span className="text-sm font-medium">{t('hero.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('home.featuresBadge')}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                {t('home.featuresTitle1')}
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {t('home.featuresTitle2')}
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {t('home.featuresDesc')}
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Response Time', value: '<100ms' },
                  { label: 'Accuracy Rate', value: '99.9%' },
                  { label: 'Uptime', value: '24/7' },
                  { label: 'Scalability', value: 'Unlimited' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
                    <span className="text-gray-400">{stat.label}:</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Technology and Business Innovation"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent mix-blend-overlay" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover opacity-10"
            style={{ filter: 'hue-rotate(170deg) saturate(2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/15 via-cyan-400/10 to-cyan-500/15 rounded-full blur-[150px] animate-pulse" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative p-12 md:p-16 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 400"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.2 }}
              >
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="nodeGlowPurple" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                    <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glowStrong">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <clipPath id="lensClip">
                    <circle cx="530" cy="175" r="105" />
                  </clipPath>
                  <mask id="lensMask">
                    <circle cx="530" cy="175" r="105" fill="white" />
                  </mask>
                </defs>

                {/* Data network lines */}
                <g stroke="#06b6d4" strokeWidth="0.6" opacity="0.5">
                  <line x1="80" y1="60" x2="200" y2="130"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" /></line>
                  <line x1="200" y1="130" x2="310" y2="80"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite" /></line>
                  <line x1="200" y1="130" x2="280" y2="220"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" /></line>
                  <line x1="310" y1="80" x2="420" y2="140"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.8s" repeatCount="indefinite" /></line>
                  <line x1="280" y1="220" x2="420" y2="140"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.5s" repeatCount="indefinite" /></line>
                  <line x1="280" y1="220" x2="340" y2="320"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" /></line>
                  <line x1="420" y1="140" x2="500" y2="200"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.8s" repeatCount="indefinite" /></line>
                  <line x1="500" y1="200" x2="600" y2="240"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.2s" repeatCount="indefinite" /></line>
                  <line x1="600" y1="240" x2="700" y2="180"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.9s" repeatCount="indefinite" /></line>
                  <line x1="600" y1="240" x2="660" y2="340"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.7s" repeatCount="indefinite" /></line>
                  <line x1="100" y1="300" x2="200" y2="350"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.2s" repeatCount="indefinite" /></line>
                  <line x1="200" y1="350" x2="340" y2="320"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" /></line>
                  <line x1="340" y1="320" x2="500" y2="200" strokeDasharray="4 3"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.6s" repeatCount="indefinite" /></line>
                  <line x1="80" y1="60" x2="100" y2="300" strokeDasharray="3 4"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" /></line>
                  <line x1="700" y1="180" x2="720" y2="80"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="4.4s" repeatCount="indefinite" /></line>
                  <line x1="420" y1="140" x2="310" y2="80" strokeDasharray="5 3"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="5.5s" repeatCount="indefinite" /></line>
                </g>

                {/* Purple accent lines */}
                <g stroke="#a855f7" strokeWidth="0.5" opacity="0.35">
                  <line x1="150" y1="180" x2="280" y2="220"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" /></line>
                  <line x1="420" y1="140" x2="480" y2="80"><animate attributeName="opacity" values="0.15;0.45;0.15" dur="4.8s" repeatCount="indefinite" /></line>
                  <line x1="600" y1="240" x2="550" y2="130"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.7s" repeatCount="indefinite" /></line>
                </g>

                {/* Data nodes — outer network */}
                <g filter="url(#glow)">
                  <circle cx="80" cy="60" r="4" fill="#06b6d4"><animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" /></circle>
                  <circle cx="200" cy="130" r="5" fill="#06b6d4"><animate attributeName="r" values="4;6;4" dur="3.5s" repeatCount="indefinite" /></circle>
                  <circle cx="310" cy="80" r="3.5" fill="#a855f7"><animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" /></circle>
                  <circle cx="280" cy="220" r="4" fill="#06b6d4"><animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" /></circle>
                  <circle cx="340" cy="320" r="3" fill="#a855f7"><animate attributeName="r" values="2.5;4;2.5" dur="4.5s" repeatCount="indefinite" /></circle>
                  <circle cx="100" cy="300" r="3.5" fill="#06b6d4"><animate attributeName="r" values="3;4.5;3" dur="3.2s" repeatCount="indefinite" /></circle>
                  <circle cx="200" cy="350" r="3" fill="#a855f7"><animate attributeName="r" values="2;4;2" dur="5s" repeatCount="indefinite" /></circle>
                  <circle cx="600" cy="240" r="4.5" fill="#06b6d4"><animate attributeName="r" values="3.5;5.5;3.5" dur="3.8s" repeatCount="indefinite" /></circle>
                  <circle cx="700" cy="180" r="3.5" fill="#a855f7"><animate attributeName="r" values="3;5;3" dur="4.2s" repeatCount="indefinite" /></circle>
                  <circle cx="720" cy="80" r="3" fill="#06b6d4"><animate attributeName="r" values="2.5;4;2.5" dur="3.6s" repeatCount="indefinite" /></circle>
                  <circle cx="660" cy="340" r="3" fill="#a855f7"><animate attributeName="r" values="2;4;2" dur="4.8s" repeatCount="indefinite" /></circle>
                  <circle cx="150" cy="180" r="3" fill="#06b6d4"><animate attributeName="r" values="2.5;4;2.5" dur="5.5s" repeatCount="indefinite" /></circle>
                  <circle cx="480" cy="80" r="3" fill="#a855f7"><animate attributeName="r" values="2;3.5;2" dur="4s" repeatCount="indefinite" /></circle>
                </g>

                {/* Highlighted nodes inside lens area — brighter */}
                <g filter="url(#glowStrong)">
                  <circle cx="420" cy="140" r="6" fill="#06b6d4"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                  <circle cx="500" cy="200" r="5.5" fill="#22d3ee"><animate attributeName="r" values="4.5;7;4.5" dur="3s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" /></circle>
                  <circle cx="550" cy="130" r="4" fill="#a855f7"><animate attributeName="r" values="3;5.5;3" dur="3.5s" repeatCount="indefinite" /></circle>
                </g>

                {/* Travelling data pulse along a path */}
                <circle r="3" fill="#22d3ee" opacity="0.9" filter="url(#glow)">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M80,60 L200,130 L280,220 L340,320 L500,200 L600,240 L700,180" />
                </circle>
                <circle r="2.5" fill="#a855f7" opacity="0.8" filter="url(#glow)">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="2s" path="M720,80 L700,180 L600,240 L500,200 L420,140 L310,80 L200,130 L80,60" />
                </circle>

                {/* Lens glow fill */}
                <circle cx="530" cy="175" r="105" fill="url(#lensGlow)" />

                {/* Magnifying glass circle */}
                <circle cx="530" cy="175" r="100" fill="none" stroke="#06b6d4" strokeWidth="2.5" opacity="0.9" filter="url(#glowStrong)" />
                <circle cx="530" cy="175" r="100" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4" />

                {/* Inner lens rim */}
                <circle cx="530" cy="175" r="94" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 530 175" to="360 530 175" dur="30s" repeatCount="indefinite" />
                </circle>

                {/* Scanning line inside lens */}
                <line x1="430" y1="175" x2="630" y2="175" stroke="#06b6d4" strokeWidth="0.8" opacity="0.3" mask="url(#lensMask)">
                  <animate attributeName="y1" values="110;240;110" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="110;240;110" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
                </line>

                {/* Handle */}
                <line x1="607" y1="247" x2="670" y2="320" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" opacity="0.7" filter="url(#glow)" />
                <line x1="607" y1="247" x2="670" y2="320" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                {/* Lens glare */}
                <ellipse cx="488" cy="135" rx="22" ry="10" fill="white" opacity="0.04" transform="rotate(-30 488 135)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50" />

              <div className="relative z-10">
                <div className="mb-8 flex justify-center">
                  <Brain className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.7))' }} />
                </div>

                <blockquote className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                  <span className="text-gray-300 italic">"</span>
                  <span className="bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent italic">
                    {t('home.quotation')}
                  </span>
                  <span className="text-gray-300 italic">"</span>
                </blockquote>

                <div className="mt-8 flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                      style={{
                        animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
              {t('home.ctaTitle')}
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t('home.ctaSubtitle')}
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {t('home.ctaDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3"
              >
                {t('home.ctaButton')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
              >
                {t('home.ctaButton2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
