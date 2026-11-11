import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Subtle Location String - Minimal, No Pills */}
          <motion.div
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.25em] font-medium text-slate-500 mb-6"
          >
            Penrith • Caringbah • Jordan Springs • Mount Annan
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-light text-slate-900 tracking-tight leading-[1.08]"
          >
            Helping you love <br />
            <span className="font-serif italic font-normal text-forest-800">
              the body you live in.
            </span>
          </motion.h1>

          {/* Minimal 1-Sentence Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-slate-600 font-light max-w-xl leading-relaxed"
          >
            Evidence-based physiotherapy, high-performance sports rehabilitation, and clinical Pilates designed for lasting movement.
          </motion.p>

          {/* Action Row */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-xl active:scale-95"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center px-7 py-4 rounded-full bg-white/70 hover:bg-white text-slate-800 text-sm font-medium tracking-wide border border-black/5 transition-all hover:shadow-sm"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Hero Showcase with Fluid Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20 rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-stone-200 relative shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85"
            alt="Physiotherapy hands-on diagnostic therapy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Minimal Floating Caption */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-sm">
            <div className="text-[11px] uppercase tracking-widest text-white/70 font-medium">
              Private 1-on-1 Sessions
            </div>
            <div className="text-sm sm:text-base font-light text-white/90 mt-1">
              On-site rehabilitation gyms in every clinic. No crowded curtained beds.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
