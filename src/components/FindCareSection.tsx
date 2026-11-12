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
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalServices = REAL_SERVICES.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % totalServices);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, totalServices]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 3 + totalServices) % totalServices);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3) % totalServices);
  };

  const serviceA = REAL_SERVICES[startIndex % totalServices];
  const serviceB = REAL_SERVICES[(startIndex + 1) % totalServices];
  const serviceC = REAL_SERVICES[(startIndex + 2) % totalServices];

  return (
    <section className="min-h-screen flex items-center py-20 sm:py-24 bg-white border-y border-black/5">
      <div className="max-w-[1340px] w-full mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-5"
          >
            <h2 className="font-exo text-[48px] sm:text-[54px] lg:text-[60px] font-semibold text-healis-dark tracking-tight leading-[1.04] uppercase">
              SERVICES <br />
              WE <br />
              <span className="text-healis-blue">OFFER</span>
            </h2>

            <p className="text-base text-healis-grey font-normal leading-relaxed">
              Hands-on physio, sports rehab, and targeted recovery.
            </p>

            {/* Action Button + Left / Right Arrows */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onSelectServices}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div
                className="flex items-center gap-2"
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
              </div>
            </div>
          </motion.div>

          {/* Right Staggered 3-Column Bento Grid: 6 Cards (3 Services: Image + Text/Icon each) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 items-stretch">
              {/* Column 1 (Service 1): Top Image Card + Bottom Text/Icon Card */}
              <div className="flex flex-col gap-4 lg:gap-5">
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[345px] sm:h-[375px] relative group cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceA.id + '-img'}
                      initial={{ opacity: 0.4, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={serviceA.image}
                        alt={serviceA.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2214]/60 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] border border-black/5 p-6 flex flex-col justify-between min-h-[280px] transition-colors duration-300 cursor-pointer group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceA.id + '-card'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                        {getServiceIcon(startIndex)}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="font-exo text-lg font-medium text-healis-dark tracking-tight line-clamp-1">
                          {serviceA.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-healis-grey font-normal leading-relaxed line-clamp-3">
                          {serviceA.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Column 2 (Service 2): Top Text/Icon Card + Bottom Image Card */}
              <div className="flex flex-col gap-4 lg:gap-5">
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] border border-black/5 p-6 flex flex-col justify-between min-h-[280px] transition-colors duration-300 cursor-pointer group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceB.id + '-card'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                        {getServiceIcon(startIndex + 1)}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="font-exo text-lg font-medium text-healis-dark tracking-tight line-clamp-1">
                          {serviceB.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-healis-grey font-normal leading-relaxed line-clamp-3">
                          {serviceB.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[345px] sm:h-[375px] relative group cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceB.id + '-img'}
                      initial={{ opacity: 0.4, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={serviceB.image}
                        alt={serviceB.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2214]/60 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Column 3 (Service 3): Top Image Card + Bottom Text/Icon Card */}
              <div className="flex flex-col gap-4 lg:gap-5">
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[345px] sm:h-[375px] relative group cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceC.id + '-img'}
                      initial={{ opacity: 0.4, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={serviceC.image}
                        alt={serviceC.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2214]/60 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] border border-black/5 p-6 flex flex-col justify-between min-h-[280px] transition-colors duration-300 cursor-pointer group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={serviceC.id + '-card'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                        {getServiceIcon(startIndex + 2)}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="font-exo text-lg font-medium text-healis-dark tracking-tight line-clamp-1">
                          {serviceC.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-healis-grey font-normal leading-relaxed line-clamp-3">
                          {serviceC.shortDesc}
                        </p>
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
