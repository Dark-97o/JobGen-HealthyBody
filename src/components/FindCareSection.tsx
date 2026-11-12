import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  Activity,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { REAL_SERVICES } from '../data/thbcData';

interface FindCareSectionProps {
  onSelectServices: () => void;
  onOpenBooking: () => void;
}

const getServiceIcon = (index: number) => {
  const icons = [Stethoscope, Activity, Zap, HeartPulse, ShieldCheck, Sparkles];
  const Icon = icons[index % icons.length];
  return <Icon className="w-5 h-5" />;
};

export const FindCareSection: React.FC<FindCareSectionProps> = ({
  onSelectServices,
  onOpenBooking,
}) => {
  const [pairIndex, setPairIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalServices = REAL_SERVICES.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPairIndex((prev) => (prev + 2) % totalServices);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPaused, totalServices]);

  const handlePrev = () => {
    setPairIndex((prev) => (prev - 2 + totalServices) % totalServices);
  };

  const handleNext = () => {
    setPairIndex((prev) => (prev + 2) % totalServices);
  };

  const serviceA = REAL_SERVICES[pairIndex % totalServices];
  const serviceB = REAL_SERVICES[(pairIndex + 1) % totalServices];
  const numA = String((pairIndex % totalServices) + 1).padStart(2, '0');
  const numB = String(((pairIndex + 1) % totalServices) + 1).padStart(2, '0');

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Healis Tag Chip */}
            <div className="inline-flex items-center gap-2 bg-[#EEF3FB] px-4 py-1.5 rounded-pill text-xs font-medium text-healis-blue tracking-tight">
              <span>Our Clinical Services • {totalServices} Specialties</span>
            </div>

            <h2 className="font-exo text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.2] sm:leading-[1.16]">
              Evidence-based care tailored to what you <span className="text-healis-blue font-medium">need</span>
            </h2>

            <p className="text-base text-healis-grey font-normal leading-relaxed max-w-md">
              From sports physiotherapy, shockwave therapy, and TMJ care to clinical Pilates, NDIS, and paediatric rehab—explore every service we offer.
            </p>

            {/* Action Button + Left / Right Arrows */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onSelectServices}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div
                className="flex items-center gap-2.5"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous services"
                  className="w-11 h-11 rounded-full bg-[#F3F5F8] hover:bg-healis-blue text-healis-dark hover:text-white border border-black/5 flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next services"
                  className="w-11 h-11 rounded-full bg-[#F3F5F8] hover:bg-healis-blue text-healis-dark hover:text-white border border-black/5 flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-semibold text-healis-grey ml-1">
                  {numA}–{numB} / {String(totalServices).padStart(2, '0')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Staggered Bento Grid: 2 Services Shown at a Time (Auto-rotates every 1s) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              {/* Sub-Column 1: Tall Image Card (Service A) + Soft Grey Icon Card (Service B) */}
              <div className="flex flex-col gap-5">
                {/* Top-Left: Tall Image Card for Service A */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[280px] sm:h-[310px] relative group cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceA.id + '-img'}
                      initial={{ opacity: 0.4, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={serviceA.image}
                        alt={serviceA.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 block mb-1">
                          {numA} • {serviceA.category}
                        </span>
                        <h3 className="font-exo text-xl font-semibold text-white tracking-tight line-clamp-1">
                          {serviceA.title}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom-Left: Soft Grey Icon Card for Service B */}
                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] p-7 flex flex-col justify-between min-h-[215px] transition-colors duration-300 cursor-pointer group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceB.id + '-card'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                        {getServiceIcon(pairIndex + 1)}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-exo text-xl font-medium text-healis-dark tracking-tight line-clamp-1">
                          {serviceB.title}
                        </h3>
                        <p className="text-sm text-healis-grey font-normal leading-relaxed line-clamp-2">
                          {serviceB.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Sub-Column 2: Soft Grey Icon Card (Service A) + Tall Image Card (Service B) */}
              <div className="flex flex-col gap-5">
                {/* Top-Right: Soft Grey Icon Card for Service A */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] p-7 flex flex-col justify-between min-h-[215px] transition-colors duration-300 cursor-pointer group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceA.id + '-card'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                        {getServiceIcon(pairIndex)}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-exo text-xl font-medium text-healis-dark tracking-tight line-clamp-1">
                          {serviceA.title}
                        </h3>
                        <p className="text-sm text-healis-grey font-normal leading-relaxed line-clamp-2">
                          {serviceA.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom-Right: Tall Image Card for Service B */}
                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[280px] sm:h-[310px] relative group cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceB.id + '-img'}
                      initial={{ opacity: 0.4, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={serviceB.image}
                        alt={serviceB.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 block mb-1">
                          {numB} • {serviceB.category}
                        </span>
                        <h3 className="font-exo text-xl font-semibold text-white tracking-tight line-clamp-1">
                          {serviceB.title}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
