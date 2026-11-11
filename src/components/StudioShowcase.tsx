import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StudioShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-15%']);

  const spaces = [
    {
      title: 'Private Treatment Suites',
      caption: 'Quiet, dedicated rooms for manual therapy and private assessments.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Rehabilitation Gyms',
      caption: 'Dedicated strength, barbell, and cable loading bays in every practice.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Clinical Reformer Studios',
      caption: 'Physiotherapist-guided reformer beds for spinal and core stability.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Biomechanical Video Lab',
      caption: 'High-speed camera analysis for running gait and athletic mechanics.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Facilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Spaces designed for <br />
            <span className="font-serif italic font-normal text-forest-800">
              movement freedom
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Fluid Parallax Carousel Track */}
      <motion.div style={{ x }} className="flex gap-6 pl-6 sm:pl-16 w-max">
        {spaces.map((space, idx) => (
          <div
            key={idx}
            className="w-[300px] sm:w-[420px] rounded-3xl overflow-hidden bg-white border border-black/5 shadow-md flex-shrink-0 group"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-1.5">
              <h3 className="text-lg font-medium text-slate-900">
                {space.title}
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {space.caption}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
