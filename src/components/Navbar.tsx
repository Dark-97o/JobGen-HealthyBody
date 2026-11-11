import React, { useState, useEffect } from 'react';
import { CLINIC_LOCATIONS } from '../data/clinicsData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preferredClinicId?: string) => void;
  selectedClinicId: string;
  onSelectClinic: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  selectedClinicId, 
  onSelectClinic 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clinicDropdownOpen, setClinicDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeClinic = CLINIC_LOCATIONS.find((c) => c.id === selectedClinicId) || CLINIC_LOCATIONS[0];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Clinical Announcement & Triage Bar */}
      <div className="bg-forest-950 text-emerald-100 text-xs py-2 px-4 border-b border-forest-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Appointments Available Today across Sydney Clinics
            </span>
            <span className="text-forest-700">|</span>
            <span className="text-emerald-200/80 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Instant HICAPS & Private Health Rebates • SIRA & NDIS Accredited
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${activeClinic.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{activeClinic.name.split(' ')[0]}: {activeClinic.phone}</span>
            </a>
            <span className="text-forest-700">|</span>
            <span className="flex items-center gap-1 text-emerald-300">
              <Clock className="w-3 h-3" />
              <span>Mon-Fri 7:30am - 7:30pm</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100'
            : 'bg-[#FBF9F5]/90 backdrop-blur-sm py-4 border-b border-sand-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-emerald-300 flex items-center justify-center shadow-md group-hover:bg-forest-900 transition-all">
                <Activity className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 leading-none group-hover:text-forest-800 transition-colors">
                  The Healthy Body Company
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-forest-700 mt-1 flex items-center gap-1">
                  Physiotherapy & Sports Rehab • Est. 1998
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              <a href="#services" className="hover:text-forest-700 transition-colors">
                Services & Modalities
              </a>
              <a href="#interactive-body-map" className="hover:text-forest-700 transition-colors flex items-center gap-1 text-forest-800 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-forest-600" />
                3D Body Navigator
              </a>
              <a href="#clinical-pathway" className="hover:text-forest-700 transition-colors">
                Clinical Pathway
              </a>
              <a href="#recovery-protocols" className="hover:text-forest-700 transition-colors">
                Evidence Protocols
              </a>
              <a href="#locations" className="hover:text-forest-700 transition-colors">
                Clinics & Hours
              </a>
              <a href="#team" className="hover:text-forest-700 transition-colors">
                Team
              </a>
            </div>

            {/* Right Action Hub */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Clinic Location Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setClinicDropdownOpen(!clinicDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sand-100 hover:bg-sand-200 border border-sand-300 text-xs font-semibold text-slate-800 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-forest-700" />
                  <span className="max-w-[110px] truncate">{activeClinic.suburb}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {clinicDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white shadow-elevated border border-slate-100 p-2 z-50 animate-fade-in">
                    <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1">
                      Select Your Nearest Clinic
                    </div>
                    {CLINIC_LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => {
                          onSelectClinic(loc.id);
                          setClinicDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                          loc.id === activeClinic.id
                            ? 'bg-forest-50 text-forest-900 font-bold border border-forest-200'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div>
                          <div>{loc.suburb}</div>
                          <div className="text-[10px] text-slate-400 font-normal">{loc.region}</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                          4.9★
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary Booking Button */}
              <button
                type="button"
                onClick={() => onOpenBooking(activeClinic.id)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenBooking(activeClinic.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-700 text-white text-xs font-semibold"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              {CLINIC_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    onSelectClinic(loc.id);
                  }}
                  className={`p-2 rounded-xl text-left text-xs ${
                    loc.id === activeClinic.id
                      ? 'bg-forest-50 text-forest-800 font-bold border border-forest-200'
                      : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="font-semibold">{loc.suburb}</div>
                  <div className="text-[10px] text-slate-400">{loc.phone}</div>
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Services & Modalities
              </a>
              <a
                href="#interactive-body-map"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50 text-forest-800 font-semibold flex items-center gap-2"
              >
                <Activity className="w-4 h-4 text-forest-600" />
                3D Anatomical Body Navigator
              </a>
              <a
                href="#clinical-pathway"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                4-Step Clinical Pathway
              </a>
              <a
                href="#recovery-protocols"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Evidence-Based Protocols
              </a>
              <a
                href="#locations"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Locations & Opening Hours
              </a>
              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Practitioners & Team
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(activeClinic.id);
                }}
                className="w-full py-3 rounded-xl bg-forest-700 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Online at {activeClinic.suburb}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

