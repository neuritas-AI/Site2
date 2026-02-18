import { useEffect, useState } from 'react';
import { ArrowRight, Zap, Globe, Calendar, ChevronDown, Sparkles, Brain, Cpu } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen opacity-20 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold tracking-tight">NEURITAS-AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">HOME</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">SERVICES</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-cyan-400 transition-colors">FEATURES</button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/50">
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

        {/* Floating Neural Network Visualization */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="relative w-[600px] h-[600px]">
            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse shadow-2xl shadow-cyan-500/50" />

            {/* Orbiting Elements */}
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

            {/* Connection Lines */}
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">AI-Powered Automation</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent animate-gradient">
              INTELLIGENT
            </span>
            <span className="block text-white mt-2">AUTOMATION</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            AI-Powered Solutions for Customer Engagement
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI automation for customer engagement, website optimization, and automated sales booking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce cursor-pointer"
        >
          <span className="text-sm tracking-widest">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                AI-POWERED SOLUTIONS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Revolutionize your business operations with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Customer Engagement',
                description: 'AI-driven interactions that understand, respond, and engage your customers 24/7 with human-like conversations.',
                color: 'cyan',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Website Optimization',
                description: 'Intelligent algorithms that analyze user behavior and optimize your website for maximum conversion and performance.',
                color: 'purple',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Automated Booking',
                description: 'Smart scheduling system that automatically books sales appointments, manages calendars, and follows up with leads.',
                color: 'cyan',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-${service.color}-500/20 to-purple-500/20 flex items-center justify-center text-${service.color}-400 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${service.color}-500/0 to-purple-500/0 group-hover:from-${service.color}-500/5 group-hover:to-purple-500/5 transition-all duration-500 -z-10`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Advanced Technology</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                Built for the
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Future of Business
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our AI-powered platform leverages cutting-edge machine learning and natural language processing to deliver intelligent automation that scales with your business.
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Response Time', value: '<100ms' },
                  { label: 'Accuracy Rate', value: '99.9%' },
                  { label: 'Uptime', value: '24/7' },
                  { label: 'Scalability', value: 'Unlimited' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-gray-400">{stat.label}:</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                        style={{
                          animation: `ping ${3 + i}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="w-32 h-32 text-cyan-400" />
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

      {/* CTA Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
              Ready to Transform
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join leading companies that trust Neuritas-AI to automate their customer engagement and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-10 py-5 bg-cyan-500 hover:bg-cyan-400 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-3">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-lg transition-all backdrop-blur-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-cyan-400" />
            <span className="font-bold">NEURITAS-AI</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Neuritas-AI. Intelligent Automation for the Future.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
