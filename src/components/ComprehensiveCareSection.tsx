import React from 'react';
import { motion } from 'framer-motion';
import { Star, Activity, Hand, Dumbbell } from 'lucide-react';
import { REAL_TEAM } from '../data/thbcData';

export const ComprehensiveCareSection: React.FC = () => {
  const patientAvatars = REAL_TEAM.slice(4, 8);

  const pillars = [
    {
      title: 'Biomechanical Diagnosis',
      text: 'Thorough 45-minute initial assessment to pinpoint exact kinetic joint and muscle causes.',
      icon: Activity,
    },
    {
      title: 'Specialist Hands-On Therapy',
      text: 'Targeted joint mobilisation, soft tissue release, and dry needling for rapid pain relief.',
      icon: Hand,
    },
    {
      title: 'On-Site Gym Rehabilitation',
      text: 'Progressive loading in our private gyms to build endurance and prevent future re-injury.',
      icon: Dumbbell,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0B0F17] text-white border-y border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-healis-blue/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Heading & Review Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.25] sm:leading-[1.2]">
              Comprehensive care for every stage of <span className="text-[#38bdf8] font-medium">life</span>
            </h2>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              At our clinics, we prioritize your long-term health with a full spectrum of evidence-based allied services tailored to your goals.
            </p>

            {/* Satisfied Patient Cluster */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {patientAvatars.map((m, i) => (
                  <img
                    key={i}
                    src={m.img}
                    alt=""
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#0B0F17] shadow-sm"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <div className="text-xs text-slate-400 font-normal">
                  Over 1,200+ verified Google patient reviews
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 Pillars Cards in Dark Theme */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 rounded-[2rem] bg-white/[0.05] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 space-y-3.5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-healis-blue/20 text-[#38bdf8] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
