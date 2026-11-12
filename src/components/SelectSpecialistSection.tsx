import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Quote } from 'lucide-react';
import { REAL_TEAM } from '../data/thbcData';

interface SelectSpecialistSectionProps {
  onSelectTeam: () => void;
  onOpenBooking: () => void;
}

export const SelectSpecialistSection: React.FC<SelectSpecialistSectionProps> = ({
  onSelectTeam,
  onOpenBooking,
}) => {
  return (
    <section className="min-h-screen flex items-center py-20 sm:py-28 bg-[#F8F9FB] border-y border-black/5">
      <div className="max-w-[1300px] w-full mx-auto px-6 sm:px-8 space-y-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-exo text-4xl sm:text-5xl font-semibold text-healis-dark tracking-tight leading-tight uppercase">
              MEET OUR <span className="text-healis-blue">SPECIALISTS</span>
            </h2>
            <p className="text-base sm:text-lg text-healis-grey font-normal leading-relaxed">
              Dedicated physiotherapists and allied health leaders committed to your long-term recovery. Hover any specialist to read their clinical philosophy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
            >
              <span>Book appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onSelectTeam}
              className="inline-flex items-center gap-2 bg-white hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium px-7 py-3.5 rounded-pill border border-black/10 transition-all duration-300 hover:scale-[0.975]"
            >
              <span>Full Directory</span>
            </button>
          </div>
        </motion.div>

        {/* 4-Column Grid of All 16 Capsule-Shaped Specialist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {REAL_TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={onOpenBooking}
              className="rounded-full overflow-hidden h-[390px] sm:h-[420px] relative group cursor-pointer border-4 border-white shadow-md bg-slate-100"
            >
              {/* Portrait Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Default Bottom Scrim + Name & Role */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              <div className="absolute bottom-8 left-6 right-6 text-center text-white transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-exo text-lg font-bold tracking-tight leading-snug text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-white/85 font-medium mt-0.5 line-clamp-1">
                  {member.role}
                </p>
                <span className="inline-block text-[10px] uppercase tracking-wider text-white/75 mt-1">
                  {member.location}
                </span>
              </div>

              {/* Hover Green Overlay with White Quote Text */}
              <div className="absolute inset-0 bg-[#2D6E4F]/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center text-white">
                <Quote className="w-6 h-6 text-white/75 mb-3 shrink-0" />
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-white line-clamp-6">
                  "{member.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-white/25 w-3/4">
                  <div className="font-exo text-sm font-bold text-white">
                    {member.name}
                  </div>
                  <div className="text-[11px] text-white/80 mt-0.5">
                    {member.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Select Your Specialist, Book Instantly Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F1F4F8] rounded-[28px] p-7 sm:p-10 lg:p-12 border border-black/[0.04]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Portrait Image */}
            <div className="lg:col-span-4">
              <div className="rounded-[20px] overflow-hidden aspect-[4/4.4] w-full bg-white shadow-sm">
                <img
                  src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/07/steph-winchester.jpg"
                  alt="Senior Physiotherapist at The Healthy Body Company"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <h3 className="font-exo text-3xl sm:text-4xl lg:text-[46px] font-semibold text-healis-dark tracking-tight leading-[1.12]">
                Select your specialist,
                <br />
                book <span className="text-healis-blue">instantly</span>
              </h3>

              <p className="text-base sm:text-[17px] text-healis-grey font-normal leading-relaxed max-w-2xl mt-4">
                Easily search for specialists based on your needs. Our user-friendly platform allows you to book appointments in just a few clicks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
