import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, ArrowUpRight, ExternalLink } from 'lucide-react';
import { REAL_CLINICS } from '../data/thbcData';

interface LocationsViewProps {
  onOpenBooking: () => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onOpenBooking }) => {
  const [activeClinicId, setActiveClinicId] = useState<string>(REAL_CLINICS[0].id);

  const selectedClinic = REAL_CLINICS.find((c) => c.id === activeClinicId) || REAL_CLINICS[0];

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header: Headline on the Left, Info on the Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2"
        >
          {/* Left: Bold Headline */}
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-healis-blue">
              Physical Clinics
            </div>
            <h1 className="font-exo text-4xl sm:text-5xl lg:text-6xl font-bold text-healis-dark tracking-tight leading-[1.08]">
              Four Sydney <br />
              <span className="text-healis-blue">practices &amp; gyms</span>
            </h1>
          </div>

          {/* Right: Info Line */}
          <div className="max-w-md lg:max-w-lg lg:text-right">
            <p className="text-base sm:text-lg text-healis-grey font-normal leading-relaxed">
              Convenient, accessible locations across Greater Western Sydney and Sutherland Shire with on-site rehabilitation facilities, private treatment suites, and free parking.
            </p>
          </div>
        </motion.div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {REAL_CLINICS.map((clinic) => {
            const isActive = clinic.id === activeClinicId;
            return (
              <button
                key={clinic.id}
                type="button"
                onClick={() => setActiveClinicId(clinic.id)}
                className={`px-6 py-3 rounded-pill text-xs font-semibold tracking-normal transition-all duration-300 ${
                  isActive
                    ? 'bg-healis-blue text-white shadow-md'
                    : 'bg-white text-healis-dark hover:bg-stone-100 border border-black/5'
                }`}
              >
                {clinic.suburb}
              </button>
            );
          })}
        </div>

        {/* Detailed Clinic Profile Card (Compact & Balanced Layout) */}
        <motion.div
          key={selectedClinic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[2rem] p-6 sm:p-10 border border-black/5 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Compact Clinic Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-healis-blue font-semibold">
                {selectedClinic.suburb} Practice
              </div>
              <h2 className="font-exo text-2xl sm:text-3xl font-bold text-healis-dark mt-1">
                {selectedClinic.name}
              </h2>
              <p className="text-xs sm:text-sm text-healis-grey font-normal leading-relaxed mt-2 line-clamp-2">
                {selectedClinic.description}
              </p>
            </div>

            {/* Address & Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-[#F8F9FB] border border-black/5 space-y-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-healis-blue shrink-0" />
                  <span>Address</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-healis-dark leading-snug">
                  {selectedClinic.address}
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedClinic.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-healis-blue hover:underline pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FB] border border-black/5 space-y-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-healis-blue shrink-0" />
                  <span>Direct Phone</span>
                </div>
                <a
                  href={`tel:${selectedClinic.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xs sm:text-sm font-semibold font-mono text-healis-dark block hover:text-healis-blue transition-colors"
                >
                  {selectedClinic.phone}
                </a>
                <a
                  href={`mailto:${selectedClinic.email}`}
                  className="text-[11px] text-healis-grey block hover:underline truncate pt-0.5"
                >
                  {selectedClinic.email}
                </a>
              </div>
            </div>

            {/* Parking & Transit */}
            <div className="p-4 rounded-2xl bg-[#F8F9FB] border border-black/5 flex items-start gap-3">
              <Car className="w-4 h-4 text-healis-blue mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-healis-dark">Parking &amp; Transit</div>
                <div className="text-xs text-healis-grey font-normal leading-relaxed">
                  {selectedClinic.parking}
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-healis-blue shrink-0" />
                <span>Operating Hours</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-[#F8F9FB] border border-black/5 text-center">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Mon–Thu</span>
                  <span className="font-medium text-healis-dark block mt-0.5">{selectedClinic.hours.weekdays.replace('AM', 'am').replace('PM', 'pm')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F8F9FB] border border-black/5 text-center">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Friday</span>
                  <span className="font-medium text-healis-dark block mt-0.5">{selectedClinic.hours.friday.replace('AM', 'am').replace('PM', 'pm')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F8F9FB] border border-black/5 text-center">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Saturday</span>
                  <span className="font-medium text-healis-dark block mt-0.5">{selectedClinic.hours.saturday.replace('AM', 'am').replace('PM', 'pm')}</span>
                </div>
              </div>
            </div>

            {/* Booking Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill bg-healis-blue hover:bg-black text-white text-xs font-semibold tracking-normal transition-all shadow-sm hover:scale-[0.98]"
              >
                <span>Book Consultation at {selectedClinic.suburb}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Full-Height Balanced Clinic Photo */}
          <div className="lg:col-span-5 h-[320px] sm:h-[400px] lg:h-full min-h-[320px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-slate-100 shadow-md relative group">
            <img
              src={selectedClinic.image}
              alt={selectedClinic.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                {selectedClinic.suburb} Clinic &amp; Rehab Gym
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
