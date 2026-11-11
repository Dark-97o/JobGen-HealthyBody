import React from 'react';
import { CLINIC_LOCATIONS } from '../data/clinicsData';
import { 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Activity, 
  MapPin, 
  Calendar, 
  Zap,
  Users
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (clinicId?: string) => void;
  selectedClinicId: string;
  onSelectClinic: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking, 
  selectedClinicId, 
  onSelectClinic 
}) => {
  const activeClinic = CLINIC_LOCATIONS.find((c) => c.id === selectedClinicId) || CLINIC_LOCATIONS[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-sand-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100/90 text-forest-800 text-xs font-semibold border border-forest-200/80 shadow-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-forest-600 animate-ping" />
              <span>Evidence-Based Physiotherapy • Penrith • Caringbah • Jordan Springs • Mount Annan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              Helping you love the <br className="hidden sm:inline" />
              <span className="relative inline-block text-forest-800 font-serif italic">
                body you live in.
                <svg className="absolute -bottom-2 left-0 w-full text-emerald-400/60" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Sydney’s multi-disciplinary physiotherapy and sports rehab practice since 1998. 
              We blend hands-on manual therapy with on-site rehabilitation gyms to eliminate pain, rebuild strength, and restore lifelong movement freedom.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking(activeClinic.id)}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-base transition-all shadow-md hover:shadow-xl active:scale-[0.98] group"
              >
                <Calendar className="w-5 h-5 text-emerald-300" />
                <span>Book Initial Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#interactive-body-map"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-sand-100 text-slate-800 font-semibold text-base border border-sand-300 transition-all shadow-sm hover:shadow"
              >
                <Activity className="w-5 h-5 text-forest-700" />
                <span>Interactive 3D Body Map</span>
              </a>
            </div>

            {/* Reassurances / Micro-Trust */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-forest-600" />
                <span>No Doctor’s Referral Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-forest-600" />
                <span>Instant Health Fund Rebates (HICAPS)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-forest-600" />
                <span>Private 1-on-1 Treatment Rooms</span>
              </div>
            </div>

            {/* Clinic Quick-Select Strip */}
            <div className="pt-4 border-t border-sand-300/60">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Your Nearest Sydney Clinic:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CLINIC_LOCATIONS.map((loc) => {
                  const isSelected = loc.id === selectedClinicId;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => onSelectClinic(loc.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-forest-800 text-white border-forest-900 shadow-md ring-2 ring-forest-600/30'
                          : 'bg-white/80 hover:bg-white text-slate-700 border-sand-300 hover:border-forest-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{loc.suburb}</span>
                        <MapPin className={`w-3 h-3 ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`} />
                      </div>
                      <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                        {loc.phone}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card Cluster with High-End Editorial Style */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Feature Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Physiotherapist performing targeted spinal and muscular assessment"
                  className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Floating Patient Review Overlay on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 bg-sand-100 px-2 py-0.5 rounded-full">
                      4.9 / 5.0 (1,200+ Reviews)
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 italic">
                    "From unbearable sciatica to running the Nepean marathon with zero pain. The team at The Healthy Body Company are the gold standard."
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-slate-900 flex items-center justify-between">
                    <span>— Verified Patient (Penrith Clinic)</span>
                    <span className="text-forest-700 font-bold text-[10px]">Google Verified</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: 26+ Years */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-elevated border border-slate-100 animate-float-slow hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center font-bold text-xl">
                  26+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Years of Care</div>
                  <div className="text-[11px] text-slate-500">Established 1998</div>
                </div>
              </div>

              {/* Floating Stat Badge 2: Patients Treated */}
              <div className="absolute -bottom-6 -right-4 bg-forest-900 text-white rounded-2xl p-4 shadow-elevated border border-forest-800 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-emerald-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-100">28,000+ Treated</div>
                  <div className="text-[10px] text-emerald-300/80">Sydney Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

