import React from 'react';
import { ArrowRight, Mail, Terminal, Sparkles, Shield, Server, Download } from 'lucide-react';
import { personalData, heroFloatingTech } from '../data/portfolioData';
import FloatingTechBadge from './FloatingTechBadge';
import OrbitRing from './OrbitRing';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows & Watermark */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Large subtle background typography watermark mirroring the reference */}
      <div className="absolute left-8 top-1/3 -translate-y-1/2 select-none pointer-events-none text-white/[0.025] font-display font-black text-[100px] sm:text-[140px] md:text-[200px] leading-none whitespace-nowrap z-0">
        Dhani
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Greeting Badge & Script */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-handwriting text-[#ff7a59] text-2xl sm:text-3xl font-bold tracking-wide transform -rotate-2 inline-block">
                Do You Know Me?
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Collaboration</span>
              </div>
            </div>

            {/* Main Greeting + Name Heading */}
            <div className="space-y-1">
              <div className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-200">
                <span>👋</span>
                <h2>{personalData.greeting}</h2>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                <span>{personalData.firstName}</span>
                <br />
                <span className="coral-gradient-text drop-shadow-[0_4px_24px_rgba(255,107,74,0.35)]">
                  {personalData.lastName}
                </span>
              </h1>
            </div>

            {/* Subtitle / Role Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 shadow-inner">
              <Terminal className="w-4 h-4 text-[#ff7a59]" />
              <span className="text-sm sm:text-base font-semibold text-slate-200 tracking-wide">
                {personalData.subtitle}
              </span>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-xl font-normal leading-relaxed">
              {personalData.heroDescription}
            </p>

            {/* CTA Buttons - Matching reference pill button style */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary Pill Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white coral-gradient coral-gradient-hover glow-coral-sm hover:glow-coral transform hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-lg"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Pill Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-orange-500/50 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#ff7a59]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Spec Metrics / Mini Bar */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">5+</div>
                <div className="text-xs text-slate-400 font-medium">Core Tech Domains</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#ff7a59]">10+</div>
                <div className="text-xs text-slate-400 font-medium">Lab & Real Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">D4</div>
                <div className="text-xs text-slate-400 font-medium">Internet Engineering</div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (Profile Photo + Orbit + Tech Badges) ================= */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            
            {/* The Outer Orbit Wrapper */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] flex items-center justify-center">
              
              {/* Background Orbit Ring & Glowing Aura */}
              <OrbitRing />

              {/* Profile Image Container */}
              <div className="relative z-10 w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full p-2.5 bg-gradient-to-b from-orange-500/40 via-white/10 to-slate-900 shadow-2xl shadow-black/80">
                {/* Inner Glow Border Frame */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0d121c] border-2 border-white/20 shadow-inner group">
                  
                  {/* Backdrop Gradient inside circle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017]/70 via-transparent to-transparent z-10 opacity-50 pointer-events-none" />
                  
                  {/* Profile Photo Graphic */}
                  <img
                    src={personalData.profileImage}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-[center_top] transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* 8 Floating Technology Badges orbiting the profile */}
              {heroFloatingTech.map((tech) => (
                <FloatingTechBadge key={tech.name} tech={tech} />
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
