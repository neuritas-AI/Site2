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
          viewBox="0 0 200 300"
          className="robot-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="50%" stopColor="#c7d2fe" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
            <linearGradient id="robotAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <g className="robot-body">
            <ellipse cx="100" cy="280" rx="40" ry="8" fill="rgba(0,0,0,0.3)" className="robot-shadow" />

            <g className="leg left-leg">
              <rect x="75" y="220" width="15" height="50" rx="7" fill="url(#robotGradient)" />
              <circle cx="82.5" cy="270" r="8" fill="#1e293b" />
            </g>

            <g className="leg right-leg">
              <rect x="110" y="220" width="15" height="50" rx="7" fill="url(#robotGradient)" />
              <circle cx="117.5" cy="270" r="8" fill="#1e293b" />
            </g>

            <rect x="70" y="140" width="60" height="85" rx="10" fill="url(#robotGradient)" className="torso" />

            <rect x="75" y="150" width="50" height="30" rx="5" fill="url(#robotAccent)" opacity="0.3" />

            <circle cx="90" cy="170" r="4" fill="#22d3ee" filter="url(#glow)" className="chest-light">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="110" cy="170" r="4" fill="#818cf8" filter="url(#glow)" className="chest-light">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>

            <g className={`arm left-arm ${isWaving ? 'waving' : ''}`}>
              <rect x="50" y="145" width="12" height="45" rx="6" fill="url(#robotGradient)" />
              <circle cx="56" cy="195" r="7" fill="#1e293b" />
            </g>

            <g className={`arm right-arm ${isWaving ? 'waving' : ''}`}>
              <rect x="138" y="145" width="12" height="45" rx="6" fill="url(#robotGradient)" />
              <circle cx="144" cy="195" r="7" fill="#1e293b" />
            </g>

            <rect x="80" y="100" width="40" height="45" rx="8" fill="url(#robotGradient)" className="head" />

            <circle cx="90" cy="120" r="6" fill="#22d3ee" className="eye" filter="url(#glow)">
              <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="110" cy="120" r="6" fill="#22d3ee" className="eye" filter="url(#glow)">
              <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
            </circle>

            <rect x="85" y="85" width="30" height="6" rx="3" fill="url(#robotAccent)" className="antenna-base" />
            <line x1="100" y1="85" x2="100" y2="70" stroke="url(#robotAccent)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="65" r="5" fill="#22d3ee" filter="url(#glow)">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
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
          height: 300px;
          pointer-events: none;
          z-index: 5;
        }

        .walking-robot {
          position: absolute;
          bottom: 0;
          width: 120px;
          height: 300px;
          animation: walkAcross 12s linear infinite;
        }

        .robot-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 10px 30px rgba(6, 182, 212, 0.3));
        }

        @keyframes walkAcross {
          0% {
            left: -150px;
          }
          100% {
            left: calc(100% + 150px);
          }
        }

        .left-leg {
          transform-origin: 82.5px 220px;
          animation: walkLeftLeg 0.8s ease-in-out infinite;
        }

        .right-leg {
          transform-origin: 117.5px 220px;
          animation: walkRightLeg 0.8s ease-in-out infinite;
        }

        @keyframes walkLeftLeg {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(15deg);
          }
        }

        @keyframes walkRightLeg {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        .left-arm {
          transform-origin: 56px 145px;
          animation: swingLeftArm 0.8s ease-in-out infinite;
        }

        .right-arm {
          transform-origin: 144px 145px;
          animation: swingRightArm 0.8s ease-in-out infinite;
        }

        @keyframes swingLeftArm {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(20deg);
          }
        }

        @keyframes swingRightArm {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-20deg);
          }
        }

        .right-arm.waving {
          animation: wave 0.5s ease-in-out 2;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-45deg);
          }
          75% {
            transform: rotate(-25deg);
          }
        }

        .robot-body {
          animation: bounce 0.8s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .robot-shadow {
          animation: shadowPulse 0.8s ease-in-out infinite;
        }

        @keyframes shadowPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(0.9);
          }
        }

        @media (max-width: 768px) {
          .walking-robot {
            width: 80px;
            height: 200px;
          }

          .walking-robot-container {
            height: 200px;
            bottom: 15%;
          }
        }

        @media (max-width: 480px) {
          .walking-robot {
            width: 60px;
            height: 150px;
          }

          .walking-robot-container {
            height: 150px;
            bottom: 20%;
          }
        }
      `}</style>
    </div>
  );
}
