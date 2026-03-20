import { useEffect, useState } from 'react';

export default function WalkingRobot() {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      setTimeout(() => {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1000);
      }, 3000);
    };

    handleAnimation();
    const interval = setInterval(handleAnimation, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="walking-robot-container">
      <div className="walking-robot">
        <svg
          viewBox="0 0 300 500"
          className="robot-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="40%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id="darkParts" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <radialGradient id="eyeGlow">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>

            <filter id="robotShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
              <feOffset dx="2" dy="4" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.4"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="glowEffect">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <linearGradient id="metalShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <ellipse cx="150" cy="480" rx="60" ry="12" fill="rgba(0,0,0,0.4)" className="robot-shadow" />

          <g filter="url(#robotShadow)">
            <g className="leg left-leg">
              <rect x="105" y="380" width="28" height="35" rx="8" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <circle cx="119" cy="400" r="12" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
              <circle cx="119" cy="400" r="6" fill="url(#blueGlow)" opacity="0.6"/>

              <rect x="105" y="420" width="28" height="60" rx="10" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <rect x="110" y="430" width="18" height="30" rx="4" fill="url(#darkParts)" opacity="0.3"/>

              <ellipse cx="119" cy="478" rx="16" ry="10" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
              <ellipse cx="119" cy="476" rx="12" ry="7" fill="#1e293b"/>
            </g>

            <g className="leg right-leg">
              <rect x="167" y="380" width="28" height="35" rx="8" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <circle cx="181" cy="400" r="12" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
              <circle cx="181" cy="400" r="6" fill="url(#blueGlow)" opacity="0.6"/>

              <rect x="167" y="420" width="28" height="60" rx="10" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <rect x="172" y="430" width="18" height="30" rx="4" fill="url(#darkParts)" opacity="0.3"/>

              <ellipse cx="181" cy="478" rx="16" ry="10" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
              <ellipse cx="181" cy="476" rx="12" ry="7" fill="#1e293b"/>
            </g>

            <path
              d="M 110 250 L 110 380 L 190 380 L 190 250 Z"
              fill="url(#bodyGradient)"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            <rect x="115" y="260" width="70" height="80" rx="12" fill="url(#darkParts)" opacity="0.4"/>

            <ellipse cx="135" cy="285" rx="8" ry="10" fill="url(#blueGlow)" opacity="0.7" filter="url(#glowEffect)">
              <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="165" cy="285" rx="8" ry="10" fill="url(#blueGlow)" opacity="0.7" filter="url(#glowEffect)">
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
            </ellipse>

            <circle cx="150" cy="310" r="10" fill="url(#blueGlow)" filter="url(#glowEffect)">
              <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
            </circle>

            <rect x="118" y="345" width="64" height="25" rx="8" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
            <ellipse cx="135" cy="357" rx="6" ry="4" fill="url(#blueGlow)" opacity="0.5"/>
            <ellipse cx="165" cy="357" rx="6" ry="4" fill="url(#blueGlow)" opacity="0.5"/>

            <g className={`arm left-arm ${isWaving ? 'waving' : ''}`}>
              <circle cx="95" cy="270" r="20" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="2"/>
              <circle cx="95" cy="270" r="14" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
              <circle cx="95" cy="270" r="8" fill="url(#blueGlow)" opacity="0.7" filter="url(#glowEffect)"/>

              <rect x="81" y="290" width="28" height="55" rx="12" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <rect x="86" y="300" width="18" height="35" rx="6" fill="url(#darkParts)" opacity="0.2"/>

              <rect x="83" y="345" width="24" height="45" rx="10" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <rect x="88" y="355" width="14" height="30" rx="5" fill="url(#darkParts)" opacity="0.3"/>

              <path d="M 85 390 Q 95 395 95 390 Q 98 387 100 390 Q 102 387 103 390 L 97 395 L 85 395 Z" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
            </g>

            <g className={`arm right-arm ${isWaving ? 'waving' : ''}`}>
              <circle cx="205" cy="270" r="20" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="2"/>
              <circle cx="205" cy="270" r="14" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
              <circle cx="205" cy="270" r="8" fill="url(#blueGlow)" opacity="0.7" filter="url(#glowEffect)"/>

              <rect x="191" y="290" width="28" height="55" rx="12" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <rect x="196" y="300" width="18" height="35" rx="6" fill="url(#darkParts)" opacity="0.2"/>

              <rect x="193" y="345" width="24" height="45" rx="10" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="1"/>
              <rect x="198" y="355" width="14" height="30" rx="5" fill="url(#darkParts)" opacity="0.3"/>

              <path d="M 197 390 Q 205 395 205 390 Q 208 387 210 390 Q 212 387 213 390 L 207 395 L 197 395 Z" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
            </g>

            <ellipse cx="150" cy="240" rx="18" ry="8" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>

            <rect x="115" y="160" width="70" height="85" rx="15" fill="url(#bodyGradient)" stroke="#94a3b8" strokeWidth="2"/>
            <rect x="120" y="170" width="60" height="65" rx="12" fill="url(#metalShine)" opacity="0.3"/>

            <path d="M 115 175 Q 150 165 185 175" fill="none" stroke="#94a3b8" strokeWidth="2"/>

            <ellipse cx="135" cy="195" rx="14" ry="16" fill="url(#darkParts)" stroke="#475569" strokeWidth="2"/>
            <ellipse cx="165" cy="195" rx="14" ry="16" fill="url(#darkParts)" stroke="#475569" strokeWidth="2"/>

            <ellipse cx="135" cy="195" rx="10" ry="12" fill="url(#eyeGlow)" filter="url(#glowEffect)">
              <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="165" cy="195" rx="10" ry="12" fill="url(#eyeGlow)" filter="url(#glowEffect)">
              <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
            </ellipse>

            <rect x="145" y="215" width="10" height="2" rx="1" fill="#64748b"/>
            <rect x="140" y="225" width="20" height="3" rx="1.5" fill="#475569"/>

            <circle cx="125" cy="175" r="8" fill="url(#darkParts)" stroke="#475569" strokeWidth="1" opacity="0.6"/>
            <circle cx="175" cy="175" r="8" fill="url(#darkParts)" stroke="#475569" strokeWidth="1" opacity="0.6"/>

            <rect x="135" y="140" width="30" height="8" rx="4" fill="url(#darkParts)" stroke="#475569" strokeWidth="1"/>
            <line x1="150" y1="140" x2="150" y2="120" stroke="url(#darkParts)" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="150" cy="115" r="7" fill="url(#blueGlow)" filter="url(#glowEffect)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      <style>{`
        .walking-robot-container {
          position: absolute;
          bottom: 10%;
          left: 0;
          width: 100%;
          height: 500px;
          pointer-events: none;
          z-index: 5;
        }

        .walking-robot {
          position: absolute;
          bottom: 0;
          width: 180px;
          height: 500px;
          animation: walkAcross 12s linear infinite;
        }

        .robot-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 20px 40px rgba(6, 182, 212, 0.4));
        }

        @keyframes walkAcross {
          0% {
            left: -200px;
          }
          100% {
            left: calc(100% + 200px);
          }
        }

        .left-leg {
          transform-origin: 119px 380px;
          animation: walkLeftLeg 0.6s ease-in-out infinite;
        }

        .right-leg {
          transform-origin: 181px 380px;
          animation: walkRightLeg 0.6s ease-in-out infinite;
        }

        @keyframes walkLeftLeg {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-12deg);
          }
          75% {
            transform: rotate(12deg);
          }
        }

        @keyframes walkRightLeg {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(12deg);
          }
          75% {
            transform: rotate(-12deg);
          }
        }

        .left-arm {
          transform-origin: 95px 270px;
          animation: swingLeftArm 0.6s ease-in-out infinite;
        }

        .right-arm {
          transform-origin: 205px 270px;
          animation: swingRightArm 0.6s ease-in-out infinite;
        }

        @keyframes swingLeftArm {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        @keyframes swingRightArm {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-15deg);
          }
        }

        .right-arm.waving {
          animation: wave 0.4s ease-in-out 3;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-50deg);
          }
          75% {
            transform: rotate(-30deg);
          }
        }

        .robot-body {
          animation: walkBounce 0.6s ease-in-out infinite;
        }

        @keyframes walkBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .robot-shadow {
          animation: shadowPulse 0.6s ease-in-out infinite;
        }

        @keyframes shadowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(0.85);
          }
        }

        @media (max-width: 1024px) {
          .walking-robot {
            width: 140px;
            height: 400px;
          }

          .walking-robot-container {
            height: 400px;
            bottom: 12%;
          }
        }

        @media (max-width: 768px) {
          .walking-robot {
            width: 100px;
            height: 280px;
          }

          .walking-robot-container {
            height: 280px;
            bottom: 15%;
          }
        }

        @media (max-width: 480px) {
          .walking-robot {
            width: 70px;
            height: 200px;
          }

          .walking-robot-container {
            height: 200px;
            bottom: 18%;
          }
        }
      `}</style>
    </div>
  );
}
