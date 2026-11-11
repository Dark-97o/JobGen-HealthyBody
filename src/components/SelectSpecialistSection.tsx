import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { REAL_TEAM } from '../data/thbcData';

interface SelectSpecialistSectionProps {
  onSelectTeam: () => void;
  onOpenBooking: () => void;
}

export const SelectSpecialistSection: React.FC<SelectSpecialistSectionProps> = ({
  onSelectTeam,
  onOpenBooking,
}) => {
  const featuredPractitioners = REAL_TEAM.slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-black/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Lead Clinician Reviewing Patient Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl border-4 border-white aspect-[4/5] relative">
              <img
                src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/jude-holroyd.jpg"
                alt="Jude Holroyd, Practice Principal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="text-sm font-semibold">Jude Holroyd</div>
                <div className="text-xs text-white/80">Practice Principal & Co-Founder</div>
                <p className="text-[11px] text-white/70 italic mt-1">
                  "Ensuring every patient is provided with a tailored, compassionate approach."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content & Specialist Picker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#F0F2F5] px-4 py-1.5 rounded-pill text-xs font-medium text-healis-blue tracking-tight">
              <span>The Healthy Body Solution</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.25] sm:leading-[1.2]">
              Select your specialist, book <span className="text-healis-blue font-medium">instantly</span>
            </h2>

            <p className="text-base sm:text-lg text-healis-grey font-normal leading-relaxed">
              Easily search for practitioners based on your needs. Our platform allows you to book appointments in just a few clicks.
            </p>

            {/* Quick Practitioner List Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {featuredPractitioners.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 rounded-2xl bg-[#F8F9FB] border border-black/5 hover:border-healis-blue/40 transition-all flex items-center gap-3.5 group cursor-pointer"
                  onClick={onOpenBooking}
                >
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-healis-dark group-hover:text-healis-blue transition-colors truncate">
                      {doc.name}
                    </div>
                    <div className="text-xs text-healis-grey truncate">
                      {doc.role}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {doc.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Book consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onSelectTeam}
                className="inline-flex items-center gap-2 text-sm font-medium text-healis-dark hover:text-healis-blue transition-colors px-4 py-2"
              >
                <span>View all 16 practitioners</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
