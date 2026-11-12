import React from 'react';
import { motion } from 'framer-motion';

export const VideoShowcaseSection: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[540px] max-h-[860px] overflow-hidden bg-slate-900">
      {/* Full-Width Background Video */}
      <video
        src="/vido.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -scale-x-100"
      />

      {/* Subtle Dark Scrim for Glass Card Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/55 pointer-events-none" />

      {/* Right-Side Transparent Blur Card with White Italic Text */}
      <div className="relative z-10 max-w-[1300px] mx-auto h-full px-6 sm:px-8 flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md sm:max-w-lg rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/25 p-8 sm:p-10 text-white shadow-2xl"
        >
          <p className="font-exo italic text-2xl sm:text-3xl font-semibold text-white leading-snug">
            Over 5+ years of trusted expertise in physiotherapy &amp; active rehabilitation.
          </p>

          <p className="mt-4 italic text-sm sm:text-base text-white/90 leading-relaxed">
            Helping thousands of patients recover faster, move pain-free, and return to the activities they love across Greater Sydney.
          </p>

          <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 gap-6">
            <div>
              <div className="font-exo italic text-3xl sm:text-4xl font-bold text-white">
                50,000+
              </div>
              <div className="italic text-xs sm:text-sm text-white/85 mt-1">
                Patients Treated
              </div>
            </div>

            <div>
              <div className="font-exo italic text-3xl sm:text-4xl font-bold text-white">
                5+ Years
              </div>
              <div className="italic text-xs sm:text-sm text-white/85 mt-1">
                Clinical Physio Expertise
              </div>
            </div>

            <div>
              <div className="font-exo italic text-3xl sm:text-4xl font-bold text-white">
                4 Clinics
              </div>
              <div className="italic text-xs sm:text-sm text-white/85 mt-1">
                Equipped Rehab Gyms
              </div>
            </div>

            <div>
              <div className="font-exo italic text-3xl sm:text-4xl font-bold text-white">
                98%
              </div>
              <div className="italic text-xs sm:text-sm text-white/85 mt-1">
                Patient Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

