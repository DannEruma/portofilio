import React from 'react';

// Custom high-contrast brand icons for the floating tech badges
export const TechIcon = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case 'cisco':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#00bceb" fillOpacity="0.1" />
          <path d="M7 26V23M12 26V19M17 26V15M23 26V15M28 26V19M33 26V23" stroke="#00bceb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="11" r="2.5" fill="#00bceb" />
        </svg>
      );
    case 'mikrotik':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#ff7a59" fillOpacity="0.12" />
          <path d="M10 28V12L18 20L26 12V28" stroke="#ff7a59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="31" cy="20" r="3" fill="#ff7a59" />
        </svg>
      );
    case 'linux':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#fcc624" fillOpacity="0.15" />
          <path d="M14 26C14 22 17 14 20 14C23 14 26 22 26 26" stroke="#fcc624" strokeWidth="3" strokeLinecap="round" />
          <circle cx="18" cy="18" r="1.5" fill="#fcc624" />
          <circle cx="22" cy="18" r="1.5" fill="#fcc624" />
          <path d="M16 28H24" stroke="#ff7a59" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'windows':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#0078d4" fillOpacity="0.12" />
          <g transform="translate(10, 10)">
            <rect x="0" y="0" width="9" height="9" fill="#0078d4" rx="1" />
            <rect x="11" y="0" width="9" height="9" fill="#0078d4" rx="1" />
            <rect x="0" y="11" width="9" height="9" fill="#0078d4" rx="1" />
            <rect x="11" y="11" width="9" height="9" fill="#0078d4" rx="1" />
          </g>
        </svg>
      );
    case 'cloud':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#38bdf8" fillOpacity="0.15" />
          <path d="M13 24C10.5 24 9 22.2 9 20C9 17.8 10.8 16 13 16C13.5 13.5 15.8 11.5 18.5 11.5C21.8 11.5 24.3 14 24.5 17C26.5 17 28 18.5 28 20.5C28 22.5 26.5 24 24.5 24H13Z" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="20" cy="20" r="1.5" fill="#38bdf8" />
        </svg>
      );
    case 'html':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#e34f26" fillOpacity="0.12" />
          <path d="M11 11L13 27L20 29L27 27L29 11H11Z" stroke="#e34f26" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M25 15H15L15.5 20H24.5L24 24L20 25.2L16 24L15.8 22" stroke="#e34f26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'css':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#1572b6" fillOpacity="0.12" />
          <path d="M11 11L13 27L20 29L27 27L29 11H11Z" stroke="#1572b6" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M25 15H15L15.5 20H24.5L24 24L20 25.2L16 24" stroke="#1572b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#f05032" fillOpacity="0.12" />
          <circle cx="15" cy="15" r="3" fill="#f05032" />
          <circle cx="15" cy="25" r="3" fill="#f05032" />
          <circle cx="25" cy="18" r="3" fill="#f05032" />
          <line x1="15" y1="18" x2="15" y2="22" stroke="#f05032" strokeWidth="2" />
          <path d="M15 22C15 18 25 21 25 18" stroke="#f05032" strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return null;
  }
};

const FloatingTechBadge = ({ tech }) => {
  return (
    <div
      className={`absolute z-20 group cursor-pointer transition-all duration-300 hover:scale-115 ${tech.customClass}`}
      title={`${tech.name} - ${tech.category}`}
    >
      {/* Glow aura */}
      <div 
        className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundColor: tech.color }}
      />
      
      {/* Badge container with pure white / glass look matching reference */}
      <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-white/60 p-2 transform transition-transform duration-300">
        <TechIcon type={tech.iconType} className="w-7 h-7 md:w-8 md:h-8" />
      </div>

      {/* Hover tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-slate-900/90 text-slate-200 text-xs px-2.5 py-1 rounded-full border border-slate-700 shadow-lg z-30 font-medium">
        {tech.name}
      </div>
    </div>
  );
};

export default FloatingTechBadge;
