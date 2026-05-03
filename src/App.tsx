import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LanguageManager from './components/LanguageManager';
import Home from './pages/Home';
import Services from './pages/Services';
import Chatbots from './pages/Chatbots';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import AITraining from './pages/AITraining';
import AIVoiceCaller from './pages/AIVoiceCaller';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import Articles from './pages/Articles';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
      <ScrollToTop />
      <LanguageManager />
      <div className="bg-black text-white overflow-x-hidden min-h-screen">
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen opacity-20 transition-all duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chatbots" element={<Chatbots />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/ai-training" element={<AITraining />} />
          <Route path="/ai-voice-caller" element={<AIVoiceCaller />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>

        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
