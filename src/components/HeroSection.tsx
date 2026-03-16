import { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  badge?: {
    icon: ReactNode;
    text: string;
  };
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  overlayClassName?: string;
  scrollTarget?: string;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  description,
  backgroundImage,
  overlayClassName = 'bg-gradient-to-b from-black/80 via-black/70 to-black',
  scrollTarget = 'content',
}: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </>
      ) : (
        <>
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {badge && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
            {badge.icon}
            <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">{badge.text}</span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-tighter">
          <span className="block bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent animate-gradient">
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-6 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <button
        onClick={() => scrollToSection(scrollTarget)}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 animate-bounce cursor-pointer"
      >
        <span className="text-sm tracking-widest">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-6 h-6" />
      </button>

      <style>{`
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
    </section>
  );
}
