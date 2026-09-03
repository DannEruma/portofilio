import React from 'react';
import { ArrowUp, Mail, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#080b11] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl text-white">
                <span className="text-[#ff7a59]">D</span>hani
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-orange-500/10 text-[#ff7a59] border border-orange-500/20">
                Portfolio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              D4 Internet Engineering Technology portfolio showcasing practical expertise in enterprise networking, cloud systems, Linux administration, and modern web applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Network Node Online & Stable</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400">
              <a href="#home" className="hover:text-[#ff7a59] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#ff7a59] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#ff7a59] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#ff7a59] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#ff7a59] transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#ff7a59] transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Connect
            </div>
            <div className="flex items-center space-x-2.5">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ff7a59] text-slate-300 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ff7a59] text-slate-300 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ff7a59] text-slate-300 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.email}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#ff7a59] text-slate-300 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 {personalData.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
            <span>Designed & Built with</span>
            <span className="text-[#ff7a59] font-bold">React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
