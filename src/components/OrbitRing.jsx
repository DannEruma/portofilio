import React from 'react';

const OrbitRing = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
      {/* Outer subtle dashed orbit */}
      <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-orange-500/25 animate-spin-slow" />
      
      {/* Middle dashed orbit matching reference visual */}
      <div className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] md:w-[430px] md:h-[430px] rounded-full border border-dashed border-white/15 animate-spin-reverse-slow">
        {/* Orbit Node Pulse 1 */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_12px_#ff6b4a]" />
        {/* Orbit Node Pulse 2 */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
      </div>

      {/* Inner glowing halo */}
      <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-tr from-orange-500/20 via-orange-600/10 to-transparent blur-2xl animate-pulse-glow" />
    </div>
  );
};

export default OrbitRing;
