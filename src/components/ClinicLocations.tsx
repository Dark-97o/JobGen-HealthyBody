import React, { useState } from 'react';
import { CLINIC_LOCATIONS } from '../data/clinicsData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  CheckCircle, 
  Calendar, 
  Star, 
  ExternalLink 
} from 'lucide-react';

interface ClinicLocationsProps {
  selectedClinicId: string;
  onSelectClinic: (id: string) => void;
  onOpenBooking: (clinicId: string) => void;
}

export const ClinicLocations: React.FC<ClinicLocationsProps> = ({ 
  selectedClinicId, 
  onSelectClinic, 
  onOpenBooking 
}) => {
  const [activeId, setActiveId] = useState(selectedClinicId || CLINIC_LOCATIONS[0].id);

  const activeClinic = CLINIC_LOCATIONS.find((c) => c.id === activeId) || CLINIC_LOCATIONS[0];

  const handleTabClick = (id: string) => {
    setActiveId(id);
    onSelectClinic(id);
  };

  return (
    <section id="locations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-sand-200">
            <MapPin className="w-3.5 h-3.5 text-forest-700" />
            Sydney Clinic Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Four Convenient Locations <br className="hidden sm:inline" />
            <span className="text-forest-700 italic font-serif">Across Sydney</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Purpose-built treatment suites, dedicated on-site rehab gyms, and friendly patient care across Greater Western Sydney and Sutherland Shire.
          </p>
        </div>

        {/* Clinic Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {CLINIC_LOCATIONS.map((loc) => {
            const isCurrent = loc.id === activeId;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => handleTabClick(loc.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all ${
                  isCurrent
                    ? 'bg-forest-900 text-white border-forest-950 shadow-lg scale-[1.02]'
                    : 'bg-sand-50/70 hover:bg-sand-100/70 text-slate-800 border-sand-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider font-semibold opacity-75">
                    {loc.region}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{loc.rating}</span>
                  </div>
                </div>
                <div className="text-base sm:text-lg font-bold">{loc.suburb}</div>
                <div className={`text-xs mt-1 truncate ${isCurrent ? 'text-emerald-200' : 'text-slate-500'}`}>
                  {loc.address}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Clinic Details Card */}
        <div className="bg-sand-50/70 rounded-3xl p-6 sm:p-10 border border-sand-300 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold mb-2">
                {activeClinic.region} Clinic
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeClinic.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                {activeClinic.description}
              </p>
            </div>

            {/* Address & Direct Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-sand-300 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-forest-700" />
                  Address
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {activeClinic.address}
                </div>
                <div className="text-xs text-slate-500">
                  {activeClinic.suburb} {activeClinic.state} {activeClinic.postcode}
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    activeClinic.name + ' ' + activeClinic.address + ' ' + activeClinic.suburb
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-forest-700 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-sand-300 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
                  <Phone className="w-3.5 h-3.5 text-forest-700" />
                  Contact Directly
                </div>
                <a
                  href={`tel:${activeClinic.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm font-bold text-slate-900 hover:text-forest-700 block transition-colors"
                >
                  {activeClinic.phone}
                </a>
                <a
                  href={`mailto:${activeClinic.email}`}
                  className="text-xs text-slate-500 hover:underline block truncate mt-0.5"
                >
                  {activeClinic.email}
                </a>
                <div className="mt-2 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Phone lines open 7:30 AM – 7:30 PM
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="p-4 rounded-2xl bg-white border border-sand-300 shadow-2xs flex items-start gap-3">
              <Car className="w-5 h-5 text-forest-700 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Parking & Accessibility</div>
                <div className="text-xs text-slate-600 mt-0.5">{activeClinic.parkingInfo}</div>
              </div>
            </div>

            {/* Facilities Checklist */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                On-Site Clinical Equipment & Amenities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeClinic.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-forest-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hours & Action */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-sand-300 shadow-soft space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-forest-700" />
                  Opening Hours
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Open Today
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Monday – Thursday</span>
                  <span className="font-bold text-slate-900">{activeClinic.hours.weekdays}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Friday</span>
                  <span className="font-bold text-slate-900">{activeClinic.hours.friday}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Saturday Morning</span>
                  <span className="font-bold text-slate-900">{activeClinic.hours.saturday}</span>
                </div>
                <div className="flex justify-between py-1.5 text-slate-400">
                  <span>Sunday</span>
                  <span>Closed (Emergency on-call)</span>
                </div>
              </div>
            </div>

            {/* Lead Clinician */}
            <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200 text-xs">
              <span className="text-slate-500 block">Practice Principal / Lead:</span>
              <span className="font-bold text-slate-900 block mt-0.5">{activeClinic.leadClinician}</span>
            </div>

            {/* Booking Trigger */}
            <button
              type="button"
              onClick={() => onOpenBooking(activeClinic.id)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment at {activeClinic.suburb}</span>
            </button>
            <div className="text-center text-[11px] text-slate-500">
              No referral needed for private patients.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
