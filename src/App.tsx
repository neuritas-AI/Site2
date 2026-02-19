import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LanguageManager from './components/LanguageManager';
import Home from './pages/Home';
import CustomerEngagement from './pages/CustomerEngagement';
import WebsiteOptimization from './pages/WebsiteOptimization';
import AppointmentSetting from './pages/AppointmentSetting';
import About from './pages/About';
import Contact from './pages/Contact';

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
          <Route path="/customer-engagement" element={<CustomerEngagement />} />
          <Route path="/website-optimization" element={<WebsiteOptimization />} />
          <Route path="/appointment-setting" element={<AppointmentSetting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
