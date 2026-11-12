import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FollowUsInstagramSection: React.FC = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.setAttribute('data-use-service-core', '');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-[#0B0F17] text-white border-t border-white/10">
      <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-healis-blue">
              <InstagramIcon className="w-4 h-4" />
              <span>@healthybody_co</span>
            </div>
            <h2 className="font-exo text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Follow us on <span className="text-healis-blue">Instagram</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Live updates, exercise tips, and clinic highlights directly from our official Instagram feed.
            </p>
          </div>

          <a
            href="https://www.instagram.com/healthybody_co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300 self-start md:self-auto shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @healthybody_co</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Live Official Elfsight Instagram Feed from thehealthybodycompany.com.au */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-4 sm:p-6 min-h-[280px]">
          <div
            className="elfsight-app-a2186dc4-44e8-465f-84eb-81143b8b414d"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};
