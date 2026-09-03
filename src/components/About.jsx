import React from 'react';
import {
  Network,
  Router,
  Cloud,
  Terminal,
  Code2,
  CheckCircle2,
  Cpu,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

const iconMap = {
  Network: Network,
  Router: Router,
  Cloud: Cloud,
  Terminal: Terminal,
  Server: Server,
  Code2: Code2
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#090d14]/70 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff7a59] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="coral-gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 coral-gradient mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              {/* Terminal Title Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="font-mono text-xs text-slate-400 font-medium">
                  dhani@internet-engineer:~
                </div>
                <div className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                  v2026.09
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-[#0a0e17]/90 text-slate-300">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-[#ff7a59] font-bold">➜</span>
                  <span className="text-sky-400 font-semibold">whoami</span>
                </div>
                <div className="pl-4 text-emerald-400 font-semibold">
                  "{personalData.name} ({personalData.shortName})"
                </div>

                <div className="flex items-center gap-2 text-slate-400 pt-2">
                  <span className="text-[#ff7a59] font-bold">➜</span>
                  <span className="text-sky-400 font-semibold">cat profile.json</span>
                </div>
                <div className="pl-4 bg-slate-900/60 p-3 rounded-lg border border-white/5 space-y-1 text-xs">
                  <div><span className="text-orange-400">"degree"</span>: <span className="text-amber-200">"D4 Internet Engineering Tech"</span>,</div>
                  <div><span className="text-orange-400">"interests"</span>: [</div>
                  <div className="pl-4 text-sky-300">"Networking", "MikroTik", "Cisco", "Cloud", "Linux", "Web"</div>
                  <div>],</div>
                  <div><span className="text-orange-400">"status"</span>: <span className="text-emerald-400">"Exploring & Innovating 🚀"</span></div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 pt-2">
                  <span className="text-[#ff7a59] font-bold">➜</span>
                  <span className="text-sky-400 font-semibold">ping -c 3 knowledge.lan</span>
                </div>
                <div className="pl-4 text-slate-400 text-[11px] space-y-0.5 font-mono">
                  <div>64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.84 ms</div>
                  <div>64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.62 ms</div>
                  <div className="text-emerald-400 font-medium">-- 0% packet loss | Ready for challenges --</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                Pioneering Internet Systems, Network Infrastructure & Modern Web Apps
              </h3>
              
              {/* Requested exact text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                "{personalData.aboutText}"
              </p>
            </div>

            {/* 5 Highlighted Areas */}
            <div className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ff7a59]" />
                <span>Key Areas of Expertise</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {personalData.focusAreas.map((area, idx) => {
                  const Icon = iconMap[area.iconName] || Cpu;
                  return (
                    <div
                      key={area.title}
                      className="group p-4 rounded-xl bg-slate-900/60 hover:bg-slate-850 border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="p-2.5 rounded-lg bg-orange-500/10 text-[#ff7a59] group-hover:bg-[#ff7a59] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#ff7a59] transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
