import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/neuritas_ai/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61586244849568',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/111895558/',
    icon: Linkedin,
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Alle vereiste velden moeten worden ingevuld');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Voer een geldig e-mailadres in');
      return;
    }

    setLoading(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er is een fout opgetreden');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO title="Contact Us | Neuritas-AI" description="Get in touch with Neuritas-AI to discuss custom AI solutions." url="/contact" />
      <div className="bg-black text-white">
      <HeroSection
        badge={{ icon: <Mail className="w-4 h-4 text-cyan-400" />, text: t('contact.badge') }}
        title={t('contact.title1').toUpperCase()}
        subtitle={t('contact.title2').toUpperCase()}
        description={t('contact.description')}
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
                  <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    {t('contact.startJourney')}
                  </span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {t('contact.journeyDesc')}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('contact.emailTitle')}</h3>
                    <p className="text-gray-400">chat@neuritas-ai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('contact.callTitle')}</h3>
                    <p className="text-gray-400">+32 486 47 67 36</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">{t('contact.quickFactsTitle')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{t('contact.fact1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{t('contact.fact2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{t('contact.fact3')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                <h3 className="text-2xl font-bold mb-3">{t('contact.socialTitle')}</h3>
                <p className="text-gray-400 mb-6">{t('contact.socialDesc')}</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:scale-110 transition-all duration-300 social-icon-${social.name.toLowerCase()}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitted && (
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{t('contact.successTitle')}</h3>
                      <p className="text-gray-400">Bedankt! We nemen zo snel mogelijk contact met je op.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                    {error}
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-8">{t('contact.formTitle')}</h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.formFullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder={t('contact.placeholderName')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.formEmailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder={t('contact.placeholderEmail')}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.formCompanyName')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder={t('contact.placeholderCompany')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.formMessageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                      placeholder={t('contact.formMessagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                  >
                    {loading ? t('contact.formSending') : t('contact.formSubmit')}
                    {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}