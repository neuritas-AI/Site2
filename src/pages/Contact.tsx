import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Mail className="w-4 h-4 text-cyan-400" />, text: 'Get In Touch' }}
        title="LET'S TALK"
        subtitle="ABOUT YOUR FUTURE"
        description="Ready to transform your business with AI automation? Reach out to our team and discover what's possible."
        backgroundImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920"
        scrollTarget="content"
      />

      <section id="content" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Start Your Journey
                  </span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Whether you're looking to automate customer engagement, optimize your website, or streamline appointment booking, we're here to help you succeed.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-400">hello@neuritas-ai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-400">
                      123 Innovation Drive<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Free consultation call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Custom solution design</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                {submitted && (
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-400">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-8">Send us a message</h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
