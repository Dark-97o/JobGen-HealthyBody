import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, ArrowUpRight, ExternalLink } from 'lucide-react';
import { REAL_CLINICS } from '../data/thbcData';

interface LocationsViewProps {
  onOpenBooking: () => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onOpenBooking }) => {
  const [activeClinicId, setActiveClinicId] = useState<string>(REAL_CLINICS[0].id);

  const selectedClinic = REAL_CLINICS.find(c => c.id === activeClinicId) || REAL_CLINICS[0];

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
            Physical Clinics
          </div>
          <h1 className="text-4xl sm:text-6xl font-light text-slate-900 tracking-tight leading-[1.08]">
            Four Sydney <br />
            <span className="font-serif italic font-normal text-forest-800">
              practices & gyms
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Convenient, accessible locations across Greater Western Sydney and Sutherland Shire with on-site rehabilitation facilities, private treatment suites, and free parking.
          </p>
        </motion.div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {REAL_CLINICS.map((clinic) => {
            const isActive = clinic.id === activeClinicId;
            return (
              <button
                key={clinic.id}
                type="button"
                onClick={() => setActiveClinicId(clinic.id)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-forest-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-stone-100 border border-black/5'
                }`}
              >
                {clinic.suburb}
              </button>
            );
          })}
        </div>

        {/* Detailed Clinic Profile Card */}
        <motion.div
          key={selectedClinic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                {selectedClinic.suburb} Practice
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mt-1">
                {selectedClinic.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-3">
                {selectedClinic.description}
              </p>
            </div>

            {/* Address & Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-black/5 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-forest-700" />
                  Address
                </div>
                <div className="text-sm font-medium text-slate-900">
                  {selectedClinic.address}
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedClinic.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-forest-800 hover:underline pt-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-black/5 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-forest-700" />
                  Direct Phone
                </div>
                <a
                  href={`tel:${selectedClinic.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm font-bold font-mono text-slate-900 block hover:text-forest-800"
                >
                  {selectedClinic.phone}
                </a>
                <a
                  href={`mailto:${selectedClinic.email}`}
                  className="text-xs text-slate-500 block hover:underline truncate"
                >
                  {selectedClinic.email}
                </a>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-black/5 flex items-start gap-3">
              <Car className="w-5 h-5 text-forest-700 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Parking & Transit</div>
                <div className="text-xs text-slate-600 font-light mt-0.5 leading-relaxed">
                  {selectedClinic.parking}
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-forest-700" />
                Operating Hours
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-stone-50 border border-black/5">
                  <span className="text-slate-500 block">Mon – Thu</span>
                  <span className="font-semibold text-slate-900">{selectedClinic.hours.weekdays}</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-black/5">
                  <span className="text-slate-500 block">Friday</span>
                  <span className="font-semibold text-slate-900">{selectedClinic.hours.friday}</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-black/5">
                  <span className="text-slate-500 block">Saturday Morning</span>
                  <span className="font-semibold text-slate-900">{selectedClinic.hours.saturday}</span>
                </div>
              </div>
            </div>

            {/* Booking Action */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                <span>Book Consultation at {selectedClinic.suburb}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Clinic Image */}
          <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md">
            <img
              src={selectedClinic.image}
              alt={selectedClinic.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
