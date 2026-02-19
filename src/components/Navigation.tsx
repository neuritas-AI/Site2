import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/customer-engagement', label: 'CUSTOMER ENGAGEMENT' },
    { path: '/website-optimization', label: 'WEBSITE OPTIMIZATION' },
    { path: '/appointment-setting', label: 'APPOINTMENT SETTING' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-cyan-400" />
          <span className="text-xl font-bold tracking-tight">NEURITAS-AI</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm hover:text-cyan-400 transition-colors ${
                isActive(item.path) ? 'text-cyan-400' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/50 text-sm font-semibold"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm hover:text-cyan-400 transition-colors ${
                  isActive(item.path) ? 'text-cyan-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
