import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900 border border-orange-500/40 text-white shadow-2xl shadow-orange-500/20 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs font-bold text-white font-display">Message Sent!</div>
        <div className="text-xs text-slate-300">{message}</div>
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
