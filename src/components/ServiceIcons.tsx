export function CustomerEngagementIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="ce-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      {/* Two people connected by a network arc */}
      <circle cx="20" cy="22" r="6" stroke="url(#ce-grad)" strokeWidth="2.5" />
      <path d="M10 42c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="url(#ce-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="22" r="6" stroke="url(#ce-grad)" strokeWidth="2.5" />
      <path d="M34 42c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="url(#ce-grad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Connection arc between them */}
      <path d="M26 18c4-6 8-6 12 0" stroke="url(#ce-grad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
      {/* Engagement pulse dots */}
      <circle cx="32" cy="12" r="2" fill="url(#ce-grad)" opacity="0.8" />
      <circle cx="32" cy="50" r="1.5" fill="url(#ce-grad)" opacity="0.5" />
      <circle cx="22" cy="50" r="1.5" fill="url(#ce-grad)" opacity="0.5" />
      <circle cx="42" cy="50" r="1.5" fill="url(#ce-grad)" opacity="0.5" />
    </svg>
  );
}

export function WebsiteOptimizationIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="wo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      {/* Speedometer gauge */}
      <path d="M12 44a22 22 0 0 1 40 0" stroke="url(#wo-grad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Gauge ticks */}
      <line x1="14" y1="36" x2="18" y2="38" stroke="url(#wo-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="24" x2="24" y2="28" stroke="url(#wo-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="20" x2="32" y2="24" stroke="url(#wo-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="24" x2="40" y2="28" stroke="url(#wo-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="36" x2="46" y2="38" stroke="url(#wo-grad)" strokeWidth="2" strokeLinecap="round" />
      {/* Needle pointing to high performance */}
      <line x1="32" y1="44" x2="44" y2="28" stroke="url(#wo-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="44" r="3" fill="url(#wo-grad)" />
      {/* Rising bar chart below */}
      <rect x="16" y="50" width="6" height="6" rx="1" fill="url(#wo-grad)" opacity="0.4" />
      <rect x="25" y="47" width="6" height="9" rx="1" fill="url(#wo-grad)" opacity="0.6" />
      <rect x="34" y="44" width="6" height="12" rx="1" fill="url(#wo-grad)" opacity="0.8" />
      <rect x="43" y="40" width="6" height="16" rx="1" fill="url(#wo-grad)" />
    </svg>
  );
}

export function AppointmentPlanningIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="ap-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      {/* Calendar body */}
      <rect x="8" y="14" width="36" height="36" rx="4" stroke="url(#ap-grad)" strokeWidth="2.5" />
      {/* Calendar top bar */}
      <line x1="8" y1="24" x2="44" y2="24" stroke="url(#ap-grad)" strokeWidth="2" />
      {/* Calendar hooks */}
      <line x1="18" y1="10" x2="18" y2="18" stroke="url(#ap-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="34" y1="10" x2="34" y2="18" stroke="url(#ap-grad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Calendar grid dots */}
      <circle cx="16" cy="31" r="1.5" fill="url(#ap-grad)" opacity="0.4" />
      <circle cx="26" cy="31" r="1.5" fill="url(#ap-grad)" opacity="0.4" />
      <circle cx="36" cy="31" r="1.5" fill="url(#ap-grad)" opacity="0.4" />
      <circle cx="16" cy="39" r="1.5" fill="url(#ap-grad)" opacity="0.4" />
      <circle cx="36" cy="39" r="1.5" fill="url(#ap-grad)" opacity="0.4" />
      {/* Checkmark on a date */}
      <path d="M22 38l3 3 6-6" stroke="url(#ap-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Clock overlay in corner */}
      <circle cx="50" cy="42" r="11" fill="black" stroke="url(#ap-grad)" strokeWidth="2.5" />
      <line x1="50" y1="42" x2="50" y2="36" stroke="url(#ap-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="42" x2="55" y2="44" stroke="url(#ap-grad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="42" r="1.5" fill="url(#ap-grad)" />
    </svg>
  );
}
