import { BarChart3, Gauge, Target, Zap, Sparkles, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

export default function WebsiteOptimization() {
  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <BarChart3 className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />, text: 'Website Optimization' }}
        title="INTELLIGENT"
        subtitle="OPTIMIZATION"
        description="Maximize your website's potential with AI-driven analytics and optimization that continuously improves performance and conversions."
        backgroundImage="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">AI-Powered Analytics</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              MAXIMIZE PERFORMANCE
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transform your website into a high-performing conversion machine with intelligent optimization powered by advanced AI algorithms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Real-Time Analytics',
                description: 'Deep insights into user behavior, traffic patterns, and engagement metrics with AI-powered predictive analytics.',
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: 'Performance Monitoring',
                description: 'Continuous monitoring and optimization of page load times, resource usage, and overall site performance.',
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Conversion Optimization',
                description: 'AI-driven A/B testing and personalization to maximize conversions and user engagement.',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Automated Improvements',
                description: 'Machine learning automatically identifies and implements optimization opportunities without manual intervention.',
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                Performance Metrics
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">45%</div>
                  <p className="text-gray-400">Increase in Conversions</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">60%</div>
                  <p className="text-gray-400">Faster Load Times</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">80%</div>
                  <p className="text-gray-400">Better User Engagement</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50"
              >
                Optimize Your Site
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
