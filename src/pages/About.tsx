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
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="relative z-10 max-w-7xl mx-auto space-y-32">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl">
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
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">Driven by Innovation</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Driven by Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                At Neuritas-AI, we believe the future belongs to businesses that embrace intelligent automation. Founded by a team of AI researchers and business innovators, we've built a platform that doesn't just automate tasks — it thinks, learns, and evolves with your business needs.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl">
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
                <span className="text-sm text-purple-400 font-medium">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  What We Do
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
                We specialize in three core areas that transform how businesses connect with customers:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customer Engagement</h3>
                  <p className="text-gray-400">
                    AI that understands and responds to your customers with human-like empathy and precision.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Website Optimization</h3>
                  <p className="text-gray-400">
                    Intelligent analytics that continuously improve your digital presence and conversion rates.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Automated Booking</h3>
                  <p className="text-gray-400">
                    Smart scheduling systems that turn leads into appointments without manual intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl">
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
                <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
                To empower businesses of all sizes with enterprise-grade AI automation that's accessible, powerful, and transformative. We're not just building tools — we're building the future of how businesses operate.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Make AI automation accessible to businesses of all sizes
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Deliver measurable ROI through intelligent automation
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Continuously innovate at the cutting edge of AI technology
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">
                    Build lasting partnerships with our clients' success
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
            Ready to Join Us?
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build the Future Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Discover how Neuritas-AI can transform your business with intelligent automation.
          </p>
        </div>
      </section>
    </div>
  );
}
