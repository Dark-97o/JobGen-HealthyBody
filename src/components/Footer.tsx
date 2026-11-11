import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1411] text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-white text-lg font-light tracking-tight">
              The Healthy Body Company
            </span>
            <p className="text-xs text-slate-500 font-light mt-1">
              Evidence-based physical care across Greater Western Sydney & Sutherland Shire. Est. 1998.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Penrith</span>
            <span>Caringbah</span>
            <span>Jordan Springs</span>
            <span>Mount Annan</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-light">
          <div>
            © {new Date().getFullYear()} The Healthy Body Company Pty Ltd. All rights reserved.
          </div>
          <div className="text-right">
            APA Accredited • AHPRA Registered • SIRA & NDIS Approved
          </div>
        </div>
      </div>
    </footer>
  );
};
