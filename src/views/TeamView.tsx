import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { REAL_TEAM } from '../data/thbcData';

interface TeamViewProps {
  onOpenBooking: () => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onOpenBooking }) => {
  const [selectedClinic, setSelectedClinic] = useState<string>('All');

  const clinics = ['All', 'Penrith', 'Caringbah', 'Jordan Springs', 'Mount Annan'];

  const filtered = selectedClinic === 'All'
    ? REAL_TEAM
    : REAL_TEAM.filter(m => m.location.includes(selectedClinic));

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Allied Health Team
          </div>
          <h1 className="text-4xl sm:text-6xl font-light text-slate-900 tracking-tight leading-[1.08]">
            Meet our <br />
            <span className="font-serif italic font-normal text-forest-800">
              dedicated practitioners
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            The Healthy Body Company brings together a team of qualified physiotherapists, remedial massage therapists, and clinical directors committed to empowering your health journey with exceptional care and expertise.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {clinics.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedClinic(c)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedClinic === c
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-stone-100 border border-black/5'
              }`}
            >
              {c === 'All' ? 'All Clinics' : `${c} Clinic`}
            </button>
          ))}
        </div>

        {/* Team Grid (All 16 Practitioners) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filtered.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-medium text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-xs text-forest-800 font-semibold">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-light flex items-center gap-1 pt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{member.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed italic pt-2">
                    "{member.quote}"
                  </p>

                  <div className="pt-3 flex flex-wrap gap-1">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium text-slate-600 bg-stone-100 px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-full bg-stone-100 hover:bg-forest-900 hover:text-white text-slate-800 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book with {member.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
