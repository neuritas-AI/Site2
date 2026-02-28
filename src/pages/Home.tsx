import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Brain, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomerEngagementIcon, WebsiteOptimizationIcon, AppointmentPlanningIcon } from '../components/ServiceIcons';

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
          <div className="absolute inset-0 opacity-30 max-[768px]:opacity-15">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse max-[768px]:hidden md:block"
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
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
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

          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tighter">
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent animate-gradient uppercase">
              {t('hero.title1')}
            </span>
            <span className="block text-white mt-1 md:mt-2 uppercase">{t('hero.title2')}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-3 md:mb-4 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col gap-3 justify-center md:flex-row md:gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {t('hero.ctaMain')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm flex items-center justify-center text-sm md:text-base"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 animate-bounce cursor-pointer"
        >
          <span className="text-xs md:text-sm tracking-widest uppercase">{t('hero.scrollExplore')}</span>
        </button>
      </section>

      <section id="services" className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 md:mb-6">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-xs md:text-sm text-purple-400 font-medium">{t('home.servicesBadge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <CustomerEngagementIcon className="w-8 md:w-10 h-8 md:h-10" />,
                title: t('home.customerTitle'),
                description: t('home.customerDesc'),
                link: '/customer-engagement',
              },
              {
                icon: <WebsiteOptimizationIcon className="w-8 md:w-10 h-8 md:h-10" />,
                title: t('home.websiteTitle'),
                description: t('home.websiteDesc'),
                link: '/website-optimization',
              },
              {
                icon: <AppointmentPlanningIcon className="w-8 md:w-10 h-8 md:h-10" />,
                title: t('home.appointmentTitle'),
                description: t('home.appointmentDesc'),
                link: '/appointment-setting',
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className="mb-4 md:mb-6 w-12 md:w-16 h-12 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">{t('hero.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-4 md:mb-6">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-xs md:text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{t('home.featuresBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter">
                {t('home.featuresTitle1')}
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {t('home.featuresTitle2')}
                </span>
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
                {t('home.featuresDesc')}
              </p>

              <div className="space-y-4 md:space-y-6">
                {[
                  { label: 'Response Time', value: '<100ms' },
                  { label: 'Accuracy Rate', value: '99.9%' },
                  { label: 'Uptime', value: '24/7' },
                  { label: 'Scalability', value: 'Unlimited' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-400">{stat.label}:</span>
                    <span className="text-sm md:text-base text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 md:w-64 h-40 md:h-64">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                        style={{
                          animation: `ping ${3 + i}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ WebkitTextStroke: '2px transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative p-6 md:p-12 lg:p-16 rounded-3xl bg-black/50 border border-white/10 backdrop-blur-xl">
              <div className="mb-4 md:mb-8 flex justify-center">
                <Brain className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }} />
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                <span className="text-gray-400 italic text-lg">"</span>
                <span className="bg-gradient-to-r from-cyan-100 via-purple-100 to-cyan-100 bg-clip-text text-transparent italic">
                  {t('home.quotation')}
                </span>
                <span className="text-gray-400 italic text-lg">"</span>
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
      </section>

      <section id="contact" className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="p-6 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter">
              {t('home.ctaTitle')}
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t('home.ctaSubtitle')}
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto">
              {t('home.ctaDesc')}
            </p>

            <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold text-sm md:text-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3"
              >
                {t('home.ctaButton')}
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-6 md:px-10 py-3 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-sm md:text-lg transition-all backdrop-blur-sm flex items-center justify-center"
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
