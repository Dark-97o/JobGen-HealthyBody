import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

interface HealisHeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const HealisHero: React.FC<HealisHeroProps> = ({
  onOpenBooking,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-24 bg-[#F8F9FB] overflow-hidden">
      {/* Brand Red Half Semi-Circle on the Left Edge */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-44 h-88 sm:w-60 sm:h-[480px] lg:w-72 lg:h-[580px] rounded-r-full bg-[#E53935] pointer-events-none z-0 shadow-2xl opacity-90"
        aria-hidden="true"
      />

      <div className="max-w-[1340px] w-full mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Info, & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Main Headline on the Left */}
            <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-bold text-healis-dark tracking-tight leading-[1.02] uppercase select-none">
              Live your best <br />
              active life, <br />
              <span className="text-healis-blue">always!</span>
            </h1>

            {/* Info Micro-copy */}
            <p className="text-xl sm:text-2xl text-healis-dark font-medium leading-snug">
              With your local physio.
            </p>

            {/* Action Buttons Directly Below Headline on Left Side */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium tracking-normal px-8 py-4 rounded-pill shadow-md transition-all duration-300 hover:scale-[0.975] active:scale-95"
              >
                <span>Book appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 bg-white hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium tracking-normal px-8 py-4 rounded-pill border border-black/10 shadow-sm transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Explore services</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 4 Individual Cards - Brought down by 25px, 20% larger, pointed corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 translate-y-[25px]"
          >
            {/* 20% larger cards in a 2x2 grid with pointed (sharp) corners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 scale-100 lg:scale-[1.08] origin-center">
              
              {/* Card 1 (Top-Left): Sports Physio Image Card (previously bottom-right) - Pointed Corners */}
              <div className="rounded-none overflow-hidden bg-slate-100 shadow-lg border-2 border-white aspect-[4/3] sm:aspect-square min-h-[260px] sm:min-h-[300px] relative group">
                <img
                  src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/sports-physio-The-Healthy-Body-2304035057-scaled-e1719978691299.jpg"
                  alt="Sports physiotherapy rehabilitation session at The Healthy Body Company"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-none border border-white/20 uppercase tracking-wider">
                    Sports Physiotherapy
                  </span>
                </div>
              </div>

              {/* Card 2 (Top-Right): Vibrant Green Text Card - Pointed Corners */}
              <div className="rounded-none p-7 sm:p-8 bg-[#7DBE47] text-white shadow-lg flex flex-col justify-between aspect-[4/3] sm:aspect-square min-h-[260px] sm:min-h-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="space-y-3.5">
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight leading-tight">
                    Live Fully, Live Actively
                  </h3>
                  <p className="text-xs sm:text-sm text-white/95 font-light leading-relaxed">
                    Our expert physiotherapists can provide:
                  </p>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium pt-1">
                    <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Individually tailored pain relief</span>
                  </div>
                </div>

                <div className="pt-5 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/95">
                    Let's get you moving!
                  </div>
                  <button
                    type="button"
                    onClick={onExploreServices}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-none border-2 border-white/90 hover:bg-white hover:text-[#7DBE47] text-white text-xs font-semibold tracking-normal transition-all duration-300 hover:scale-[0.98] w-fit shadow-xs"
                  >
                    <span>Browse Our Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 3 (Bottom-Left): Vibrant Cyan Blue Text Card - Pointed Corners */}
              <div className="rounded-none p-7 sm:p-8 bg-[#00B4D8] text-white shadow-lg flex flex-col justify-between aspect-[4/3] sm:aspect-square min-h-[260px] sm:min-h-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="space-y-3.5">
                  <h3 className="text-xl sm:text-[22px] font-bold tracking-tight leading-snug">
                    Experience our difference: enjoy optimum outcomes
                  </h3>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-relaxed pt-1">
                    <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>
                      Deep dive mentoring: we understand how your pain began so we connect you with the right recovery plan for now and the future.
                    </span>
                  </div>
                </div>

                <div className="pt-5 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/95">
                    Let's get you moving!
                  </div>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-none border-2 border-white/90 hover:bg-white hover:text-[#00B4D8] text-white text-xs font-semibold tracking-normal transition-all duration-300 hover:scale-[0.98] w-fit shadow-xs"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 4 (Bottom-Right): Red T-Shirt / Brand Polo Image Card - Pointed Corners */}
              <div className="rounded-none overflow-hidden bg-slate-100 shadow-lg border-2 border-white aspect-[4/3] sm:aspect-square min-h-[260px] sm:min-h-[300px] relative group">
                <img
                  src="/images/red-tshirt.jpg"
                  alt="The Healthy Body Company official clinician team uniform"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-none border border-white/20 uppercase tracking-wider">
                    The Healthy Body Company
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
