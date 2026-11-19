import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, MapPin, Phone, Building2 } from 'lucide-react';

interface InteractiveCardsSectionProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  onSelectLocations: () => void;
}

export const InteractiveCardsSection: React.FC<InteractiveCardsSectionProps> = ({
  onOpenBooking,
  onExploreServices,
  onSelectLocations,
}) => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#F8F9FB] overflow-hidden">
      {/* Brand Red Accent on Screen Left Edge */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-4 sm:w-6 lg:w-8 h-40 sm:h-52 lg:h-60 rounded-r-2xl bg-[#E53935] pointer-events-none z-0 opacity-80"
        aria-hidden="true"
      />

      <div className="max-w-[1340px] w-full mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 4 Interactive Cards Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* 4 Cards in 2x2 grid with interactive central locator circle */}
              <div
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
                onMouseLeave={() => setShowLocations(false)}
              >
                {/* Center Circle with Looping Locator Icon to switch between Services & Sydney Clinic Locations */}
                <div
                  onMouseEnter={() => setShowLocations(true)}
                  onClick={() => setShowLocations((prev) => !prev)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer hidden sm:flex items-center justify-center group"
                  title="Hover or click to switch cards to all 4 Sydney clinic locations"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full border-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95 shadow-md">
                    <motion.div
                      animate={{
                        scale: [0.92, 1.25, 0.92],
                        color: ['#0068FF', '#E53935', '#7DBE47', '#00B4D8', '#0068FF'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center justify-center"
                    >
                      <MapPin className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.3]" />
                    </motion.div>
                  </div>
                </div>

                {/* Card 1 (Top-Left): Sports Physio <-> Penrith Flagship */}
                <div className="rounded-none overflow-hidden bg-slate-100 border-2 border-white min-h-[275px] sm:min-h-[310px] h-[275px] sm:h-[310px] relative group shadow-sm">
                  <AnimatePresence mode="wait">
                    {!showLocations ? (
                      <motion.div
                        key="default-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full relative"
                      >
                        <video
                          src="/hero1.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-5 left-5 right-5 text-white">
                          <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-none border border-white/20 uppercase tracking-wider">
                            Sports Physiotherapy
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="loc-1"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full p-6 sm:p-7 bg-[#111111] text-white flex flex-col justify-between relative overflow-hidden"
                      >
                        <img
                          src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Physiotherapy-in-Penrith-scaled-e1761877163453.jpg"
                          alt="Penrith Flagship Clinic"
                          className="absolute inset-0 w-full h-full object-cover opacity-35"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

                        <div className="relative z-10 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-healis-blue text-white text-[10px] font-bold uppercase tracking-wider rounded-none">
                            <MapPin className="w-3 h-3" />
                            <span>Clinic 01 • Flagship</span>
                          </div>
                          <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white font-exo">
                            PENRITH
                          </h3>
                          <p className="text-xs text-slate-200 font-normal line-clamp-1">
                            95 Lethbridge St, Penrith NSW
                          </p>
                          <p className="text-[11px] text-slate-300 font-mono flex items-center gap-1.5 pt-0.5">
                            <Phone className="w-3 h-3 text-healis-blue" />
                            <span>(02) 4722 5555</span>
                          </p>
                        </div>

                        <div className="relative z-10 pt-2 flex items-center justify-between">
                          <span className="text-[11px] text-white/80 font-medium">Rehab Gym & Casting</span>
                          <button
                            type="button"
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-healis-dark hover:bg-healis-blue hover:text-white text-xs font-semibold rounded-none transition-all shadow-sm"
                          >
                            <span>Book Penrith</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card 2 (Top-Right): Vibrant Green Card <-> Caringbah */}
                <div className="rounded-none bg-[#7DBE47] text-white border-2 border-white min-h-[275px] sm:min-h-[310px] h-[275px] sm:h-[310px] relative overflow-hidden group shadow-sm">
                  <AnimatePresence mode="wait">
                    {!showLocations ? (
                      <motion.div
                        key="default-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full p-6 sm:p-7 flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <h3 className="text-2xl sm:text-[24px] font-bold tracking-tight leading-tight">
                            Live Fully, Live Actively
                          </h3>
                          <p className="text-xs sm:text-sm text-white/95 font-light leading-relaxed">
                            Our expert physiotherapists can provide:
                          </p>
                          <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium pt-0.5">
                            <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                            <span>Individually tailored pain relief</span>
                          </div>
                        </div>

                        <div className="pt-3 space-y-2.5">
                          <div className="text-[11px] uppercase tracking-wider font-semibold text-white/95">
                            Let's get you moving!
                          </div>
                          <button
                            type="button"
                            onClick={onExploreServices}
                            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-none border-2 border-white/90 hover:bg-white hover:text-[#7DBE47] text-white text-xs font-semibold tracking-normal transition-all duration-300 hover:scale-[0.98] w-fit shadow-xs"
                          >
                            <span>Browse Our Services</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="loc-2"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
                      >
                        <img
                          src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/jordan-springs-284A0112-scaled.jpg"
                          alt="Caringbah Clinic"
                          className="absolute inset-0 w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#539423] via-[#7DBE47]/90 to-[#7DBE47]/75 pointer-events-none" />

                        <div className="relative z-10 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white text-[#7DBE47] text-[10px] font-bold uppercase tracking-wider rounded-none">
                            <MapPin className="w-3 h-3" />
                            <span>Clinic 02 • Shire</span>
                          </div>
                          <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white font-exo">
                            CARINGBAH
                          </h3>
                          <p className="text-xs text-white/95 font-normal line-clamp-1">
                            Suite 2, 383 Port Hacking Rd
                          </p>
                          <p className="text-[11px] text-white/90 font-mono flex items-center gap-1.5 pt-0.5">
                            <Phone className="w-3 h-3 text-white" />
                            <span>(02) 9531 2000</span>
                          </p>
                        </div>

                        <div className="relative z-10 pt-2 flex items-center justify-between">
                          <span className="text-[11px] text-white/90 font-medium">Pilates & Sports Physio</span>
                          <button
                            type="button"
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#7DBE47] hover:bg-black hover:text-white text-xs font-semibold rounded-none transition-all shadow-sm"
                          >
                            <span>Book Caringbah</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card 3 (Bottom-Left): Vibrant Cyan Card <-> Jordan Springs */}
                <div className="rounded-none bg-[#00B4D8] text-white border-2 border-white min-h-[275px] sm:min-h-[310px] h-[275px] sm:h-[310px] relative overflow-hidden group shadow-sm">
                  <AnimatePresence mode="wait">
                    {!showLocations ? (
                      <motion.div
                        key="default-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full p-6 sm:p-7 flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <h3 className="text-xl sm:text-[21px] font-bold tracking-tight leading-snug">
                            Experience our difference: enjoy optimum outcomes
                          </h3>
                          <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-relaxed pt-0.5">
                            <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                            <span>
                              Deep dive mentoring: we connect you with the right recovery plan for now and the future.
                            </span>
                          </div>
                        </div>

                        <div className="pt-3 space-y-2.5">
                          <div className="text-[11px] uppercase tracking-wider font-semibold text-white/95">
                            Let's get you moving!
                          </div>
                          <button
                            type="button"
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-none border-2 border-white/90 hover:bg-white hover:text-[#00B4D8] text-white text-xs font-semibold tracking-normal transition-all duration-300 hover:scale-[0.98] w-fit shadow-xs"
                          >
                            <span>Book Now</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="loc-3"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
                      >
                        <img
                          src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-14-scaled.jpg"
                          alt="Jordan Springs Clinic"
                          className="absolute inset-0 w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#008ba6] via-[#00B4D8]/90 to-[#00B4D8]/75 pointer-events-none" />

                        <div className="relative z-10 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white text-[#00B4D8] text-[10px] font-bold uppercase tracking-wider rounded-none">
                            <MapPin className="w-3 h-3" />
                            <span>Clinic 03 • Family & Sports</span>
                          </div>
                          <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white font-exo">
                            JORDAN SPRINGS
                          </h3>
                          <p className="text-xs text-white/95 font-normal line-clamp-1">
                            Unit 9, 65 Water Gum Dr
                          </p>
                          <p className="text-[11px] text-white/90 font-mono flex items-center gap-1.5 pt-0.5">
                            <Phone className="w-3 h-3 text-white" />
                            <span>(02) 4722 6994</span>
                          </p>
                        </div>

                        <div className="relative z-10 pt-2 flex items-center justify-between">
                          <span className="text-[11px] text-white/90 font-medium">Paediatrics & Spine Health</span>
                          <button
                            type="button"
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#00B4D8] hover:bg-black hover:text-white text-xs font-semibold rounded-none transition-all shadow-sm"
                          >
                            <span>Book Jordan Springs</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card 4 (Bottom-Right): Red Uniform Card <-> Mount Annan */}
                <div className="rounded-none overflow-hidden bg-slate-100 border-2 border-white min-h-[275px] sm:min-h-[310px] h-[275px] sm:h-[310px] relative group shadow-sm">
                  <AnimatePresence mode="wait">
                    {!showLocations ? (
                      <motion.div
                        key="default-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full relative"
                      >
                        <video
                          src="/hero2.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-5 left-5 right-5 text-white">
                          <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-none border border-white/20 uppercase tracking-wider">
                            The Healthy Body Company
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="loc-4"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full p-6 sm:p-7 bg-[#E53935] text-white flex flex-col justify-between relative overflow-hidden"
                      >
                        <img
                          src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-12-scaled-e1761877163453.jpg"
                          alt="Mount Annan Clinic"
                          className="absolute inset-0 w-full h-full object-cover opacity-25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#bd211d] via-[#E53935]/90 to-[#E53935]/75 pointer-events-none" />

                        <div className="relative z-10 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white text-[#E53935] text-[10px] font-bold uppercase tracking-wider rounded-none">
                            <MapPin className="w-3 h-3" />
                            <span>Clinic 04 • Macarthur</span>
                          </div>
                          <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white font-exo">
                            MOUNT ANNAN
                          </h3>
                          <p className="text-xs text-white/95 font-normal line-clamp-1">
                            Shop 2, 1 Raintree Way
                          </p>
                          <p className="text-[11px] text-white/90 font-mono flex items-center gap-1.5 pt-0.5">
                            <Phone className="w-3 h-3 text-white" />
                            <span>(02) 4622 8111</span>
                          </p>
                        </div>

                        <div className="relative z-10 pt-2 flex items-center justify-between">
                          <span className="text-[11px] text-white/90 font-medium">Mobility & WorkCover SIRA</span>
                          <button
                            type="button"
                            onClick={onOpenBooking}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#E53935] hover:bg-black hover:text-white text-xs font-semibold rounded-none transition-all shadow-sm"
                          >
                            <span>Book Mount Annan</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Different Headline, Clean Info, & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Clean blue subtitle, no pill */}
            <div className="text-sm font-bold uppercase tracking-wider text-healis-blue">
              Greater Sydney Care Network
            </div>

            {/* Different Headline */}
            <h2 className="font-exo text-3xl sm:text-4xl lg:text-[46px] font-bold text-healis-dark tracking-tight leading-[1.08] uppercase">
              Four Clinics Across Sydney, <br />
              <span className="text-healis-blue">One Standard of Care</span>
            </h2>

            {/* Concise 1-2 line description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Experience dedicated, one-on-one physiotherapy and sports rehabilitation tailored to get you moving pain-free and back to what you love.
            </p>

            {/* Key Clinical Advantages - Clean list, no pills */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-healis-blue/10 text-healis-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>On-the-spot HICAPS private health rebates with no referral required</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-healis-blue/10 text-healis-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Integrated rehabilitation gyms, private consult suites, and clinical Pilates</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-healis-blue/10 text-healis-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Over 25 years of trusted community care across Penrith, Caringbah, Jordan Springs & Mount Annan</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-semibold tracking-normal px-8 py-4 rounded-pill shadow-md transition-all duration-300 hover:scale-[0.98] active:scale-95"
              >
                <span>Book appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onSelectLocations}
                className="inline-flex items-center gap-2 bg-white hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-semibold tracking-normal px-8 py-4 rounded-pill border border-black/10 shadow-sm transition-all duration-300 hover:scale-[0.98]"
              >
                <Building2 className="w-4 h-4 text-healis-blue group-hover:text-white" />
                <span>View all locations</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
