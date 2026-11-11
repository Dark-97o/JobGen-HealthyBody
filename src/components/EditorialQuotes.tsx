import React from 'react';
import { motion } from 'framer-motion';

export const EditorialQuotes: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F3EFEA] border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="text-xs uppercase tracking-[0.25em] font-medium text-slate-500">
            28,000+ Sydney Patients
          </div>

          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-snug font-serif italic max-w-3xl mx-auto">
            “After months of crippling plantar fasciitis, they used shockwave and heavy loading. Within five weeks I was back running along the Nepean River completely pain-free.”
          </blockquote>

          <div className="text-sm font-medium text-slate-800">
            Sarah M. <span className="text-slate-400 font-light">•</span> Penrith Marathon Runner
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 sm:gap-14 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Bupa Members First</span>
            <span>Medibank Preferred</span>
            <span>HCF More for Muscles</span>
            <span>SIRA Workers Comp</span>
            <span>NDIS Registered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
