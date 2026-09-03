import React, { useState } from 'react';
import {
  Network,
  Cpu,
  Radio,
  Terminal,
  Server,
  Cloud,
  Boxes,
  Workflow,
  Layout,
  Code,
  GitBranch,
  Database,
  ShieldCheck,
  Check,
  Sparkles,
  Search
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Network: Network,
  Cpu: Cpu,
  Radio: Radio,
  Terminal: Terminal,
  Server: Server,
  Cloud: Cloud,
  Boxes: Boxes,
  Workflow: Workflow,
  Layout: Layout,
  Code: Code,
  GitBranch: GitBranch,
  Database: Database,
  ShieldCheck: ShieldCheck
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Networking', 'Systems & Cloud', 'Web Development', 'Development Tools'];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#0c1017]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff7a59] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            My <span className="coral-gradient-text">Skills</span> & Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Practical competencies developed through hands-on lab experiments, network simulations, server setups, and web engineering.
          </p>
          <div className="w-16 h-1 coral-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'coral-gradient text-white shadow-md shadow-orange-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tool, protocol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.icon] || Network;
            return (
              <div
                key={skill.id}
                className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 border border-white/10 hover:border-orange-500/40 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Corner Glow on Hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/15 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4">
                  
                  {/* Card Header: Icon + Name + Level Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-[#ff7a59] group-hover:coral-gradient group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-orange-500/25">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-[#ff7a59] transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-orange-500/10 text-[#ff7a59] border border-orange-500/20 whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed font-normal">
                    {skill.description}
                  </p>

                  {/* Skill Percentage Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="text-slate-300 font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full coral-gradient rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/80 text-slate-400 border border-white/5 group-hover:border-orange-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            No skills found matching "{searchQuery}". Try selecting another category!
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
