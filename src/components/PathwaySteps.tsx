import React from 'react';
import { motion } from 'framer-motion';

export const PathwaySteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnose',
      text: 'A 45-minute biomechanical audit to isolate the true kinetic root cause.',
    },
    {
      num: '02',
      title: 'Alleviate',
      text: 'Targeted hands-on therapy and joint mobilisations to eliminate pain.',
    },
    {
      num: '03',
      title: 'Rebuild',
      text: 'Progressive tendon and muscle loading in our private on-site gyms.',
    },
    {
      num: '04',
      title: 'Excel',
      text: 'Objective milestone clearance to ensure injuries never return.',
    },
  ];

  return (
    <section id="pathway" className="py-24 sm:py-32 bg-[#141C18] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 sm:mb-24"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400 mb-3">
            Our Standard
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            The four-step <br />
            <span className="font-serif italic font-normal text-emerald-300">
              recovery pathway
            </span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/10 pt-8 space-y-4"
            >
              <div className="font-serif italic text-3xl sm:text-4xl text-emerald-400/80 font-normal">
                {step.num}
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
