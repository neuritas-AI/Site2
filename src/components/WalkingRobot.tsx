export default function WalkingRobot() {
  return (
    <div className="robot-scene-container">
      <div className="robot-scene">
        <svg
          viewBox="0 0 240 360"
          className="robot-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shellWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="30%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="shellWhiteSide" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="40%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="shellHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#f1f5f9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="darkFrame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="darkMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            <linearGradient id="shoulderRing" cx="50%" cy="50%" r="50%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="40%" stopColor="#0e4a7a" />
              <stop offset="100%" stopColor="#0a1929" />
            </linearGradient>

            <radialGradient id="eyeCore" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
              <stop offset="40%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.6" />
            </radialGradient>

            <radialGradient id="eyeOuter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="chestCore" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
            </radialGradient>

            <radialGradient id="groundGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.25)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
            </radialGradient>

            <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glowSoft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="dropShadowDeep">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
            </filter>

            <filter id="bodyAmbient">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
            </filter>

            <clipPath id="headClip">
              <rect x="90" y="55" width="60" height="58" rx="8" />
            </clipPath>
          </defs>

          <ellipse cx="120" cy="348" rx="52" ry="8" fill="url(#groundGlow)" />
          <ellipse cx="120" cy="348" rx="32" ry="4" fill="rgba(0,0,0,0.5)" />

          <g className="robot-idle">

            <g className="leg-left">
              <rect x="86" y="255" width="22" height="42" rx="4" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="88" y="255" width="5" height="42" rx="2" fill="url(#shellHighlight)" />
              <rect x="104" y="255" width="3" height="42" fill="rgba(51,65,85,0.2)" />
              <rect x="84" y="294" width="26" height="8" rx="2" fill="url(#darkMid)" />
              <rect x="86" y="302" width="22" height="30" rx="3" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="88" y="302" width="4" height="30" rx="2" fill="url(#shellHighlight)" />
              <rect x="83" y="330" width="28" height="14" rx="5" fill="url(#shellWhite)" filter="url(#dropShadowDeep)" />
              <rect x="85" y="332" width="8" height="10" rx="2" fill="url(#shellHighlight)" />
              <rect x="83" y="340" width="28" height="4" rx="2" fill="url(#darkFrame)" />
              <rect x="86" y="338" width="22" height="2" rx="1" fill="rgba(6,182,212,0.4)" />
            </g>

            <g className="leg-right">
              <rect x="132" y="255" width="22" height="42" rx="4" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="134" y="255" width="5" height="42" rx="2" fill="url(#shellHighlight)" />
              <rect x="150" y="255" width="3" height="42" fill="rgba(51,65,85,0.2)" />
              <rect x="130" y="294" width="26" height="8" rx="2" fill="url(#darkMid)" />
              <rect x="132" y="302" width="22" height="30" rx="3" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="134" y="302" width="4" height="30" rx="2" fill="url(#shellHighlight)" />
              <rect x="129" y="330" width="28" height="14" rx="5" fill="url(#shellWhite)" filter="url(#dropShadowDeep)" />
              <rect x="131" y="332" width="8" height="10" rx="2" fill="url(#shellHighlight)" />
              <rect x="129" y="340" width="28" height="4" rx="2" fill="url(#darkFrame)" />
              <rect x="132" y="338" width="22" height="2" rx="1" fill="rgba(6,182,212,0.4)" />
            </g>

            <g className="torso">
              <rect x="82" y="155" width="76" height="105" rx="10" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="86" y="155" width="8" height="105" rx="4" fill="url(#shellHighlight)" />
              <rect x="150" y="155" width="5" height="105" fill="rgba(51,65,85,0.15)" />

              <rect x="92" y="162" width="56" height="70" rx="6" fill="url(#darkFrame)" filter="url(#dropShadowDeep)" />
              <rect x="94" y="164" width="52" height="66" rx="5" fill="rgba(2,6,23,0.95)" />

              <line x1="94" y1="186" x2="146" y2="186" stroke="rgba(6,182,212,0.15)" strokeWidth="0.5" />
              <line x1="94" y1="206" x2="146" y2="206" stroke="rgba(6,182,212,0.15)" strokeWidth="0.5" />
              <line x1="120" y1="164" x2="120" y2="230" stroke="rgba(6,182,212,0.08)" strokeWidth="0.5" />

              <circle cx="120" cy="197" r="14" fill="rgba(6,182,212,0.08)" />
              <circle cx="120" cy="197" r="10" fill="rgba(6,182,212,0.12)" />
              <circle cx="120" cy="197" r="6" fill="url(#chestCore)" filter="url(#glowCyan)">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="120" cy="197" r="2.5" fill="#bae6fd">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
              </circle>

              <rect x="100" y="212" width="40" height="12" rx="3" fill="rgba(6,182,212,0.05)" />
              <rect x="102" y="214" width="8" height="8" rx="1" fill="rgba(6,182,212,0.25)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="114" y="214" width="8" height="8" rx="1" fill="rgba(6,182,212,0.15)">
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="126" y="214" width="8" height="8" rx="1" fill="rgba(6,182,212,0.25)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
              </rect>

              <rect x="92" y="232" width="56" height="16" rx="4" fill="url(#darkMid)" />
              <rect x="96" y="235" width="12" height="4" rx="1" fill="rgba(6,182,212,0.3)" />
              <rect x="112" y="235" width="8" height="4" rx="1" fill="rgba(6,182,212,0.15)" />
              <rect x="124" y="235" width="12" height="4" rx="1" fill="rgba(6,182,212,0.3)" />
              <rect x="140" y="235" width="6" height="4" rx="1" fill="rgba(6,182,212,0.2)" />

              <rect x="82" y="248" width="76" height="10" rx="3" fill="url(#darkMid)" />
              <rect x="84" y="250" width="72" height="3" rx="1" fill="rgba(6,182,212,0.2)" />
            </g>

            <g className="shoulder-left">
              <rect x="60" y="158" width="22" height="18" rx="5" fill="url(#darkFrame)" />
              <rect x="62" y="160" width="6" height="14" rx="3" fill="rgba(255,255,255,0.06)" />
              <circle cx="82" cy="167" r="9" fill="url(#darkFrame)" />
              <circle cx="82" cy="167" r="6" fill="#0f172a" />
              <circle cx="82" cy="167" r="4" fill="rgba(6,182,212,0.6)" filter="url(#glowSoft)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="82" cy="167" r="2" fill="#67e8f9" />
            </g>

            <g className="arm-left">
              <rect x="60" y="173" width="20" height="50" rx="6" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="62" y="173" width="5" height="50" rx="3" fill="url(#shellHighlight)" />
              <rect x="76" y="173" width="3" height="50" fill="rgba(51,65,85,0.2)" />
              <rect x="58" y="220" width="24" height="10" rx="3" fill="url(#darkMid)" />
              <rect x="61" y="230" width="18" height="36" rx="5" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="63" y="230" width="4" height="36" rx="2" fill="url(#shellHighlight)" />
              <rect x="59" y="262" width="22" height="10" rx="3" fill="url(#darkFrame)" />
              <g>
                <rect x="60" y="272" width="6" height="14" rx="3" fill="url(#shellWhite)" />
                <rect x="68" y="270" width="6" height="16" rx="3" fill="url(#shellWhite)" />
                <rect x="76" y="272" width="4" height="12" rx="2" fill="url(#shellWhite)" />
                <rect x="62" y="272" width="3" height="5" rx="1" fill="url(#shellHighlight)" />
                <rect x="70" y="270" width="3" height="5" rx="1" fill="url(#shellHighlight)" />
              </g>
            </g>

            <g className="shoulder-right">
              <rect x="158" y="158" width="22" height="18" rx="5" fill="url(#darkFrame)" />
              <rect x="172" y="160" width="6" height="14" rx="3" fill="rgba(255,255,255,0.06)" />
              <circle cx="158" cy="167" r="9" fill="url(#darkFrame)" />
              <circle cx="158" cy="167" r="6" fill="#0f172a" />
              <circle cx="158" cy="167" r="4" fill="rgba(6,182,212,0.6)" filter="url(#glowSoft)">
                <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="158" cy="167" r="2" fill="#67e8f9" />
            </g>

            <g className="arm-right">
              <rect x="160" y="173" width="20" height="50" rx="6" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="162" y="173" width="5" height="50" rx="3" fill="url(#shellHighlight)" />
              <rect x="176" y="173" width="3" height="50" fill="rgba(51,65,85,0.2)" />
              <rect x="158" y="220" width="24" height="10" rx="3" fill="url(#darkMid)" />
              <rect x="161" y="230" width="18" height="36" rx="5" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="163" y="230" width="4" height="36" rx="2" fill="url(#shellHighlight)" />
              <rect x="159" y="262" width="22" height="10" rx="3" fill="url(#darkFrame)" />
              <g>
                <rect x="160" y="272" width="4" height="12" rx="2" fill="url(#shellWhite)" />
                <rect x="166" y="270" width="6" height="16" rx="3" fill="url(#shellWhite)" />
                <rect x="174" y="272" width="6" height="14" rx="3" fill="url(#shellWhite)" />
                <rect x="168" y="270" width="3" height="5" rx="1" fill="url(#shellHighlight)" />
                <rect x="176" y="272" width="3" height="5" rx="1" fill="url(#shellHighlight)" />
              </g>
            </g>

            <g className="neck">
              <rect x="108" y="148" width="24" height="10" rx="3" fill="url(#darkFrame)" />
              <rect x="112" y="149" width="16" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
              <rect x="110" y="152" width="4" height="4" rx="1" fill="rgba(6,182,212,0.3)" />
              <rect x="118" y="152" width="4" height="4" rx="1" fill="rgba(6,182,212,0.2)" />
              <rect x="126" y="152" width="4" height="4" rx="1" fill="rgba(6,182,212,0.3)" />
            </g>

            <g className="head">
              <rect x="88" y="55" width="64" height="58" rx="10" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="92" y="55" width="10" height="58" rx="5" fill="url(#shellHighlight)" />
              <rect x="142" y="55" width="6" height="58" fill="rgba(51,65,85,0.18)" />
              <rect x="140" y="57" width="8" height="54" rx="4" fill="rgba(51,65,85,0.12)" />

              <rect x="98" y="64" width="44" height="40" rx="6" fill="url(#darkFrame)" filter="url(#dropShadowDeep)" />
              <rect x="100" y="66" width="40" height="36" rx="5" fill="rgba(2,6,23,0.98)" />

              <ellipse cx="112" cy="84" rx="9" ry="8" fill="rgba(6,182,212,0.08)" />
              <ellipse cx="112" cy="84" rx="6.5" ry="5.5" fill="rgba(6,182,212,0.18)" />
              <ellipse cx="112" cy="84" rx="4.5" ry="4" fill="url(#eyeCore)" filter="url(#glowCyan)">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="5s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="112" cy="83" rx="1.8" ry="1.6" fill="#e0f7ff" />

              <ellipse cx="128" cy="84" rx="9" ry="8" fill="rgba(6,182,212,0.08)" />
              <ellipse cx="128" cy="84" rx="6.5" ry="5.5" fill="rgba(6,182,212,0.18)" />
              <ellipse cx="128" cy="84" rx="4.5" ry="4" fill="url(#eyeCore)" filter="url(#glowCyan)">
                <animate attributeName="opacity" values="0.9;1;0.9" dur="5s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="128" cy="83" rx="1.8" ry="1.6" fill="#e0f7ff" />

              <rect x="108" y="96" width="24" height="3" rx="1.5" fill="rgba(100,116,139,0.5)" />
              <rect x="113" y="97" width="14" height="1" rx="0.5" fill="rgba(6,182,212,0.2)" />

              <rect x="102" y="72" width="12" height="3" rx="1" fill="rgba(6,182,212,0.15)" />
              <rect x="126" y="72" width="12" height="3" rx="1" fill="rgba(6,182,212,0.15)" />
            </g>

            <g className="head-top">
              <rect x="104" y="44" width="32" height="14" rx="4" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <rect x="107" y="45" width="7" height="12" rx="3" fill="url(#shellHighlight)" />
              <rect x="106" y="52" width="4" height="5" rx="1" fill="url(#darkFrame)" />
              <rect x="114" y="52" width="4" height="5" rx="1" fill="url(#darkFrame)" />
              <rect x="122" y="52" width="4" height="5" rx="1" fill="url(#darkFrame)" />
              <rect x="130" y="52" width="4" height="5" rx="1" fill="url(#darkFrame)" />
              <rect x="107" y="53" width="2" height="3" rx="0.5" fill="rgba(6,182,212,0.4)" />
              <rect x="115" y="53" width="2" height="3" rx="0.5" fill="rgba(6,182,212,0.3)" />
              <rect x="123" y="53" width="2" height="3" rx="0.5" fill="rgba(6,182,212,0.4)" />
              <rect x="131" y="53" width="2" height="3" rx="0.5" fill="rgba(6,182,212,0.3)" />
            </g>

            <g className="knee-left">
              <circle cx="97" cy="254" r="10" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <circle cx="97" cy="254" r="6" fill="url(#darkFrame)" />
              <circle cx="97" cy="254" r="3.5" fill="rgba(6,182,212,0.15)" />
              <circle cx="97" cy="254" r="2" fill="rgba(6,182,212,0.5)" />
            </g>

            <g className="knee-right">
              <circle cx="143" cy="254" r="10" fill="url(#shellWhite)" filter="url(#bodyAmbient)" />
              <circle cx="143" cy="254" r="6" fill="url(#darkFrame)" />
              <circle cx="143" cy="254" r="3.5" fill="rgba(6,182,212,0.15)" />
              <circle cx="143" cy="254" r="2" fill="rgba(6,182,212,0.5)" />
            </g>

          </g>
        </svg>
      </div>

      <style>{`
        .robot-scene-container {
          position: absolute;
          bottom: 8%;
          right: 6%;
          width: 220px;
          height: 380px;
          pointer-events: none;
          z-index: 5;
        }

        .robot-scene {
          width: 100%;
          height: 100%;
        }

        .robot-svg {
          width: 100%;
          height: 100%;
          filter:
            drop-shadow(0 20px 50px rgba(0,0,0,0.6))
            drop-shadow(0 6px 20px rgba(6,182,212,0.18))
            drop-shadow(0 0 60px rgba(6,182,212,0.08));
        }

        .robot-idle {
          animation: idleFloat 6s ease-in-out infinite;
          transform-origin: 120px 200px;
        }

        @keyframes idleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @media (max-width: 1024px) {
          .robot-scene-container {
            width: 170px;
            height: 300px;
            right: 3%;
            bottom: 10%;
          }
        }

        @media (max-width: 768px) {
          .robot-scene-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
