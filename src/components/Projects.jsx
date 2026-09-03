import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, Sparkles, ExternalLink, Eye, PlusCircle, Layers, Mail } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#090d14]/80 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff7a59] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase & Laboratory Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            My <span className="coral-gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Practical implementations ranging from enterprise network topologies and MikroTik routing to server orchestration and modern web applications.
          </p>
          <div className="w-16 h-1 coral-gradient mx-auto rounded-full mt-2" />
        </div>

        {/* When Projects Exist */}
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15 flex flex-col justify-between ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Project Image / Thumbnail Container */}
                  <div className="relative w-full overflow-hidden bg-slate-950 border-b border-white/10 aspect-video group-hover:brightness-105 transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-slate-200">
                      {project.category}
                    </div>

                    {/* Overlay Quick Action on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-end p-4">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ff7a59] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#ff7a59] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>
                      <div className="text-xs font-mono text-slate-400">
                        {project.subtitle}
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-orange-400 border border-orange-500/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-200 bg-slate-800/80 hover:bg-[#ff7a59] hover:text-white border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-orange-500/20"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State when projects array is empty */
          <div className="max-w-2xl mx-auto text-center py-16 px-6 glass-card rounded-3xl border border-white/10 relative overflow-hidden space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mx-auto text-[#ff7a59] shadow-inner">
              <FolderGit2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Projects Coming Soon
              </h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Project showcase is currently being prepared. New network engineering simulations, server architectures, and web apps will be added soon.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white coral-gradient shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                <span>Contact For Inquiries</span>
              </a>
            </div>
          </div>
        )}

        {/* Modal for Project Deep Dive */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
