import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#0c1017]">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff7a59] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Education & <span className="coral-gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Formal education and structured engineering curriculum at the undergraduate level.
          </p>
          <div className="w-16 h-1 coral-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-2 border-dashed border-orange-500/30 space-y-12 ml-2 sm:ml-4">
          
          {experienceData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0c1017] border-2 border-[#ff7a59] flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_#ff7a59]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff7a59] animate-ping opacity-75" />
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 space-y-6">
                
                {/* Header: Date + Degree Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/10 text-[#ff7a59] border border-orange-500/20 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#ff7a59] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {item.institution}
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ● {item.status}
                  </span>
                </div>

                {/* Exact Requested Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  "{item.description}"
                </p>

                {/* Key Focus & Competencies */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ff7a59]" />
                    <span>Academic & Lab Focus Areas</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.achievements.map((achieve, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ff7a59] shrink-0 mt-0.5" />
                        <span>{achieve}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Coursework Badges */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#ff7a59]" />
                    <span>Key Coursework & Modules</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
