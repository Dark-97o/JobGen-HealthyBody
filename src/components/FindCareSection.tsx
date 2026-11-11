import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Clock } from 'lucide-react';

interface FindCareSectionProps {
  onSelectLocations: () => void;
  onOpenBooking: () => void;
}

export const FindCareSection: React.FC<FindCareSectionProps> = ({
  onSelectLocations,
  onOpenBooking,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Healis Tag Chip */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-pill text-xs font-medium text-healis-blue tracking-tight shadow-xs border border-black/5">
              <span>The Healthy Body Solution</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.25] sm:leading-[1.2]">
              Find quality care nearby and access it when you <span className="text-healis-blue font-medium">need</span> it
            </h2>

            <p className="text-base sm:text-lg text-healis-grey font-normal leading-relaxed">
              Our network of healthcare facilities across Sydney is designed to provide you with easy access to quality care. Explore our locations to find the best services near you.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onSelectLocations}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-white hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium px-7 py-3.5 rounded-pill border border-black/10 transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Book location</span>
              </button>
            </div>
          </motion.div>

          {/* Right Visual & Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Clinic Image Card */}
            <div className="rounded-[2.5rem] overflow-hidden bg-white shadow-xl border-4 border-white aspect-[4/3] relative">
              <img
                src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-14-scaled.jpg"
                alt="The Healthy Body Company clinic reception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Healis Stats / Location Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-6 bg-white rounded-3xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-black/5 max-w-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-healis-blue/10 text-healis-blue flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-healis-dark">4 Sydney Practices</h4>
                  <p className="text-xs text-healis-grey font-normal">Penrith • Caringbah • Jordan Springs • Mount Annan</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-healis-blue" />
                  Mon-Sat Hours
                </span>
                <span className="text-healis-blue font-semibold">Free Parking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
