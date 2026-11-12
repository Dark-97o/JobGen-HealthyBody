import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, ArrowUpRight } from 'lucide-react';

interface FindCareSectionProps {
  onSelectServices: () => void;
  onOpenBooking: () => void;
}

export const FindCareSection: React.FC<FindCareSectionProps> = ({
  onSelectServices,
  onOpenBooking,
}) => {
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
              <span>Our Clinical Services</span>
            </div>

            <h2 className="font-exo text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.2] sm:leading-[1.16]">
              Evidence-based care tailored to what you <span className="text-healis-blue font-medium">need</span>
            </h2>

            <p className="text-base text-healis-grey font-normal leading-relaxed max-w-md">
              Our multidisciplinary physiotherapy team delivers hands-on manual therapy, sports rehabilitation, and targeted recovery programs.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onSelectServices}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Staggered 4-Service Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              {/* Sub-Column 1: Tall Image Card (Service 1) + Soft Grey Icon Card (Service 3) */}
              <div className="flex flex-col gap-5">
                {/* Service 1: Shockwave Therapy (Tall Image Card) */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[280px] sm:h-[310px] relative group cursor-pointer"
                >
                  <img
                    src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/imageshockwave02-scaled.jpg"
                    alt="Shockwave Therapy at The Healthy Body Company"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 block mb-1">
                      01 • Tendon Recovery
                    </span>
                    <h3 className="font-exo text-xl font-semibold text-white tracking-tight">
                      Shockwave Therapy
                    </h3>
                  </div>
                </div>

                {/* Service 3: Sports Physiotherapy (Light Grey Icon Card) */}
                <div
                  onClick={onOpenBooking}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] p-7 flex flex-col justify-between min-h-[215px] transition-colors duration-300 cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-exo text-xl font-medium text-healis-dark tracking-tight">
                      Sports Physiotherapy
                    </h3>
                    <p className="text-sm text-healis-grey font-normal leading-relaxed">
                      Rapid acute diagnosis, ligament rehabilitation, and return-to-play strength testing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-Column 2: Soft Grey Icon Card (Service 2) + Tall Image Card (Service 4) */}
              <div className="flex flex-col gap-5">
                {/* Service 2: Physiotherapy Treatment (Light Grey Icon Card) */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] bg-[#F3F5F8] hover:bg-[#EAEFF6] p-7 flex flex-col justify-between min-h-[215px] transition-colors duration-300 cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-full bg-healis-blue text-white flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-exo text-xl font-medium text-healis-dark tracking-tight">
                      Physiotherapy Treatment
                    </h3>
                    <p className="text-sm text-healis-grey font-normal leading-relaxed">
                      Hands-on manual therapy and tailored exercise plans for back, neck, and joint pain.
                    </p>
                  </div>
                </div>

                {/* Service 4: Clinical Pilates & Rehab (Tall Image Card) */}
                <div
                  onClick={onSelectServices}
                  className="rounded-[1.75rem] overflow-hidden bg-slate-100 h-[280px] sm:h-[310px] relative group cursor-pointer"
                >
                  <img
                    src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/Sports-Physio-The-Healthy-Body.jpg"
                    alt="Clinical Pilates and Rehabilitation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 block mb-1">
                      04 • Strength & Mobility
                    </span>
                    <h3 className="font-exo text-xl font-semibold text-white tracking-tight">
                      Clinical Pilates & Rehab
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
