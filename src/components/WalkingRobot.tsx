import { useEffect, useState } from 'react';

export default function WalkingRobot() {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      setTimeout(() => {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1500);
      }, 3000);
    };

    handleAnimation();
    const interval = setInterval(handleAnimation, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="walking-robot-container">
      <div className="walking-robot">
        <svg
          viewBox="0 0 240 340"
          className="robot-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="metalBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="35%" stopColor="#94a3b8" />
              <stop offset="65%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id="metalDarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            <linearGradient id="metalLightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="chestPanelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="50%" stopColor="#0891b2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
            </radialGradient>

            <filter id="metalReflection">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
              <feOffset dx="0" dy="-1" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="deepShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
            </filter>
          </defs>

          <g className="robot-body">
            <ellipse cx="120" cy="320" rx="45" ry="10" fill="rgba(0,0,0,0.4)" className="robot-shadow" filter="url(#softGlow)" />

            <g className="leg left-leg">
              <rect x="88" y="240" width="18" height="35" rx="3" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" />
              <rect x="90" y="240" width="3" height="35" fill="rgba(241,245,249,0.3)" />
              <rect x="88" y="275" width="18" height="30" rx="2" fill="url(#metalDarkGradient)" />
              <rect x="84" y="305" width="26" height="16" rx="4" fill="url(#metalBodyGradient)" filter="url(#deepShadow)" />
              <ellipse cx="97" cy="316" rx="11" ry="5" fill="#1e293b" />
            </g>

            <g className="leg right-leg">
              <rect x="134" y="240" width="18" height="35" rx="3" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" />
              <rect x="147" y="240" width="3" height="35" fill="rgba(241,245,249,0.3)" />
              <rect x="134" y="275" width="18" height="30" rx="2" fill="url(#metalDarkGradient)" />
              <rect x="130" y="305" width="26" height="16" rx="4" fill="url(#metalBodyGradient)" filter="url(#deepShadow)" />
              <ellipse cx="143" cy="316" rx="11" ry="5" fill="#1e293b" />
            </g>

            <g className="torso">
              <rect x="85" y="150" width="70" height="95" rx="8" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" className="torso-main" />
              <rect x="88" y="150" width="4" height="95" fill="rgba(241,245,249,0.4)" />
              <rect x="148" y="150" width="4" height="95" fill="rgba(51,65,85,0.3)" />

              <rect x="95" y="165" width="50" height="60" rx="4" fill="url(#chestPanelGradient)" filter="url(#deepShadow)" />
              <rect x="98" y="168" width="44" height="54" rx="3" fill="rgba(6,182,212,0.05)" />

              <line x1="120" y1="170" x2="120" y2="220" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />
              <line x1="100" y1="195" x2="140" y2="195" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />

              <circle cx="120" cy="195" r="6" fill="url(#eyeGlow)" className="chest-core" filter="url(#softGlow)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="120" cy="195" r="3" fill="#22d3ee">
                <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
              </circle>

              <circle cx="107" cy="180" r="2.5" fill="#06b6d4" opacity="0.6" className="status-light">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="133" cy="180" r="2.5" fill="#06b6d4" opacity="0.6" className="status-light">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>

            <circle cx="120" cy="148" r="8" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" />

            <g className={`arm left-arm ${isWaving ? 'waving' : ''}`}>
              <rect x="62" y="155" width="16" height="42" rx="4" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" />
              <rect x="64" y="155" width="3" height="42" fill="rgba(241,245,249,0.3)" />
              <circle cx="70" cy="197" r="6" fill="url(#metalDarkGradient)" />
              <rect x="63" y="197" width="14" height="32" rx="3" fill="url(#metalBodyGradient)" />
              <rect x="65" y="197" width="2" height="32" fill="rgba(241,245,249,0.25)" />
              <rect x="61" y="229" width="18" height="12" rx="3" fill="url(#metalDarkGradient)" filter="url(#deepShadow)" />
            </g>

            <g className={`arm right-arm ${isWaving ? 'waving' : ''}`}>
              <rect x="162" y="155" width="16" height="42" rx="4" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" />
              <rect x="173" y="155" width="3" height="42" fill="rgba(51,65,85,0.4)" />
              <circle cx="170" cy="197" r="6" fill="url(#metalDarkGradient)" />
              <rect x="163" y="197" width="14" height="32" rx="3" fill="url(#metalBodyGradient)" />
              <rect x="173" y="197" width="2" height="32" fill="rgba(51,65,85,0.3)" />
              <rect x="161" y="229" width="18" height="12" rx="3" fill="url(#metalDarkGradient)" filter="url(#deepShadow)" />
            </g>

            <g className="head">
              <rect x="95" y="100" width="50" height="52" rx="6" fill="url(#metalBodyGradient)" filter="url(#metalReflection)" />
              <rect x="98" y="100" width="3" height="52" fill="rgba(241,245,249,0.35)" />
              <rect x="139" y="100" width="3" height="52" fill="rgba(51,65,85,0.3)" />

              <rect x="100" y="108" width="40" height="36" rx="4" fill="url(#chestPanelGradient)" filter="url(#deepShadow)" />

              <g className="eye-panel">
                <ellipse cx="110" cy="126" rx="7" ry="8" fill="#0e7490" opacity="0.3" filter="url(#softGlow)" />
                <ellipse cx="110" cy="126" rx="5" ry="6" fill="url(#eyeGlow)" className="eye-left" filter="url(#softGlow)">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="110" cy="124" rx="2" ry="2.5" fill="#22d3ee" />

                <ellipse cx="130" cy="126" rx="7" ry="8" fill="#0e7490" opacity="0.3" filter="url(#softGlow)" />
                <ellipse cx="130" cy="126" rx="5" ry="6" fill="url(#eyeGlow)" className="eye-right" filter="url(#softGlow)">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="130" cy="124" rx="2" ry="2.5" fill="#22d3ee" />
              </g>

              <rect x="104" y="138" width="32" height="2" rx="1" fill="rgba(6,182,212,0.3)" />
            </g>

            <rect x="108" y="90" width="24" height="8" rx="2" fill="url(#metalBodyGradient)" className="head-vent" filter="url(#metalReflection)" />
            <line x1="112" y1="92" x2="112" y2="96" stroke="#475569" strokeWidth="1" />
            <line x1="116" y1="92" x2="116" y2="96" stroke="#475569" strokeWidth="1" />
            <line x1="120" y1="92" x2="120" y2="96" stroke="#475569" strokeWidth="1" />
            <line x1="124" y1="92" x2="124" y2="96" stroke="#475569" strokeWidth="1" />
            <line x1="128" y1="92" x2="128" y2="96" stroke="#475569" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <style>{`
        .walking-robot-container {
          position: absolute;
          bottom: 10%;
          left: 0;
          width: 100%;
          height: 340px;
          pointer-events: none;
          z-index: 5;
        }

        .walking-robot {
          position: absolute;
          bottom: 0;
          width: 140px;
          height: 340px;
          animation: walkAcross 14s linear infinite;
        }

        .robot-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 5px 15px rgba(6, 182, 212, 0.15));
        }

        @keyframes walkAcross {
          0% {
            left: -180px;
          }
          100% {
            left: calc(100% + 180px);
          }
        }

        .left-leg {
          transform-origin: 97px 240px;
          animation: walkLeftLeg 1s ease-in-out infinite;
        }

        .right-leg {
          transform-origin: 143px 240px;
          animation: walkRightLeg 1s ease-in-out infinite;
        }

        @keyframes walkLeftLeg {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-8deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        @keyframes walkRightLeg {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-8deg);
          }
        }

        .left-arm {
          transform-origin: 70px 155px;
          animation: swingLeftArm 1s ease-in-out infinite;
        }

        .right-arm {
          transform-origin: 170px 155px;
          animation: swingRightArm 1s ease-in-out infinite;
        }

        @keyframes swingLeftArm {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }

        @keyframes swingRightArm {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-12deg);
          }
        }

        .right-arm.waving {
          animation: wave 0.6s ease-in-out 2;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-25deg);
          }
          40% {
            transform: rotate(-15deg);
          }
          60% {
            transform: rotate(-25deg);
          }
          80% {
            transform: rotate(-15deg);
          }
        }

        .robot-body {
          animation: subtleBob 1s ease-in-out infinite;
        }

        @keyframes subtleBob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .robot-shadow {
          animation: shadowSync 1s ease-in-out infinite;
        }

        @keyframes shadowSync {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(0.95);
          }
        }

        .torso-main {
          animation: subtleBreath 3s ease-in-out infinite;
        }

        @keyframes subtleBreath {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.01);
          }
        }

        @media (max-width: 768px) {
          .walking-robot {
            width: 100px;
            height: 240px;
          }

          .walking-robot-container {
            height: 240px;
            bottom: 15%;
          }
        }

        @media (max-width: 480px) {
          .walking-robot {
            width: 70px;
            height: 170px;
          }

          .walking-robot-container {
            height: 170px;
            bottom: 20%;
          }
        }
      `}</style>
    </div>
  );
}
