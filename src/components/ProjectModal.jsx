import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Terminal } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e1422] border border-white/15 shadow-2xl shadow-orange-500/10 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121828]/95 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a59] animate-pulse" />
            <h3 className="font-display font-bold text-lg text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image / Preview */}
        <div className="p-6 space-y-6">
          <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#080c14] relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[360px] object-cover object-top"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 text-xs font-mono text-[#ff7a59] border border-orange-500/30 backdrop-blur-md">
              {project.category}
            </div>
          </div>

          {/* Subtitle & Full Description */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              {project.subtitle}
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && (
            <div className="space-y-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff7a59]" />
                <span>Technical Implementation Highlights</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 font-normal">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#ff7a59] mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Tech Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-orange-500/10 text-[#ff7a59] border border-orange-500/20 font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.toolsUsed?.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white coral-gradient shadow-md shadow-orange-500/25 transition-transform hover:-translate-y-0.5"
            >
              <span>Discuss Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
