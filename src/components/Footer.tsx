import { Brain, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">NEURITAS-AI</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                We build smart automation systems that help businesses modernize operations, improve efficiency, and scale with confidence.
              </p>
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/customer-engagement"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    Customer Engagement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/website-optimization"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    Website Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointment-setting"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    Appointment Setting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:info@neuritas-ai.com" className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-colors">
                      info@neuritas-ai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                    <p>Mon–Fri | 9:00 – 18:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 Neuritas-AI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
