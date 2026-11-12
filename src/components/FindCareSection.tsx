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
    <section className="py-20 sm:py-28 bg-[#F4EFE4] border-y border-[#E8E1D3]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            <h2 className="font-exo text-4xl sm:text-5xl font-semibold text-healis-dark tracking-tight leading-tight whitespace-nowrap">
              Services
            </h2>

            <p className="text-base text-healis-grey font-normal leading-relaxed max-w-md">
              Hands-on physio, sports rehab, and targeted recovery.
            </p>

            {/* Action Button + Left / Right Arrows */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onSelectServices}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
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
                  className="w-11 h-11 rounded-full bg-[#FAF6EE] hover:bg-healis-blue text-healis-dark hover:text-white border border-[#E8E1D3] flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next services"
                  className="w-11 h-11 rounded-full bg-[#FAF6EE] hover:bg-healis-blue text-healis-dark hover:text-white border border-[#E8E1D3] flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Staggered Bento Grid: 3 Services Shown at a Time */}
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
              {/* Sub-Column 1: Tall Image Card (Service 1) + Soft Creme Icon Card (Service 3) */}
              <div className="flex flex-col gap-5">
                {/* Top-Left: Tall Image Card for Service 1 */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-[#EAE3D2] h-[280px] sm:h-[310px] relative group cursor-pointer"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2214]/80 via-[#1C2214]/15 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <h3 className="font-exo text-xl font-semibold text-white tracking-tight line-clamp-1">
                          {serviceA.title}
                        </h3>
                        <p className="text-xs text-white/85 line-clamp-1 mt-1">
                          {serviceA.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom-Left: Soft Creme Icon Card for Service 3 */}
                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] bg-[#FAF6EE] hover:bg-[#EFE8D8] border border-[#E8E1D3] p-7 flex flex-col justify-between min-h-[215px] transition-colors duration-300 cursor-pointer group overflow-hidden"
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
                      <div className="space-y-2">
                        <h3 className="font-exo text-xl font-medium text-healis-dark tracking-tight line-clamp-1">
                          {serviceC.title}
                        </h3>
                        <p className="text-sm text-healis-grey font-normal leading-relaxed line-clamp-2">
                          {serviceC.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Sub-Column 2: Soft Creme Icon Card (Service 2) + Tall Image Card (Service 3 / Service 2 Visual) */}
              <div className="flex flex-col gap-5">
                {/* Top-Right: Soft Creme Icon Card for Service 2 */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] bg-[#FAF6EE] hover:bg-[#EFE8D8] border border-[#E8E1D3] p-7 flex flex-col justify-between min-h-[215px] transition-colors duration-300 cursor-pointer group overflow-hidden"
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

                {/* Bottom-Right: Tall Image Card pairing Service 2 */}
                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] overflow-hidden bg-[#EAE3D2] h-[280px] sm:h-[310px] relative group cursor-pointer"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2214]/70 via-transparent to-transparent" />
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
