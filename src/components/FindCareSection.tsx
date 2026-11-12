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
  return <Icon className="w-4 h-4" />;
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

  const visibleServices = [
    REAL_SERVICES[startIndex % totalServices],
    REAL_SERVICES[(startIndex + 1) % totalServices],
    REAL_SERVICES[(startIndex + 2) % totalServices],
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE4] border-y border-[#E8E1D3]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-5"
          >
            <h2 className="font-exo text-3xl sm:text-4xl lg:text-[42px] font-semibold text-healis-dark tracking-tight leading-tight">
              Services we offer
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

          {/* Right 3-Card Row: 3 Services Shown at a Time (Auto-rotates every 2s) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {visibleServices.map((service, idx) => (
                <div
                  key={idx}
                  onClick={idx === 1 ? onOpenBooking : onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-[#FAF6EE] hover:bg-[#EFE8D8] border border-[#E8E1D3] h-[340px] sm:h-[360px] flex flex-col justify-between transition-colors duration-300 cursor-pointer group"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full flex flex-col justify-between"
                    >
                      {/* Top Service Image */}
                      <div className="relative">
                        <div className="h-[175px] w-full overflow-hidden bg-[#EAE3D2]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute -bottom-5 left-5 w-10 h-10 rounded-full bg-healis-blue text-white flex items-center justify-center border-2 border-[#FAF6EE] z-10">
                          {getServiceIcon(startIndex + idx)}
                        </div>
                      </div>

                      {/* Bottom Service Text */}
                      <div className="p-5 pt-7 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="font-exo text-lg font-semibold text-healis-dark tracking-tight line-clamp-1">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-healis-grey font-normal leading-relaxed line-clamp-3">
                            {service.shortDesc}
                          </p>
                        </div>

                        <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-healis-blue">
                          <span>Learn more</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
