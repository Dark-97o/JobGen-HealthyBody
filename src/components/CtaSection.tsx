import React from 'react';
import { ArrowUpRight, Calendar, CheckCircle2, MapPin, Phone } from 'lucide-react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="rounded-[2.5rem] bg-[#0A0F17] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,104,255,0.15)]">
          {/* Ambient Lighting Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-healis-blue/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-healis-blue/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="space-y-4 max-w-2xl">
              <h3 className="font-exo text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Ready to move <span className="text-healis-blue">pain-free?</span>
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                45-minute 1-on-1 physio assessments with same-week appointments across 4 Sydney clinics.
              </p>

              {/* Quick Trust Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant HICAPS Private Health Rebates</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-healis-blue shrink-0" />
                  <span>No Referral Needed</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-healis-blue shrink-0" />
                  <span>4 Greater Sydney Clinics</span>
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-sm sm:text-base font-semibold px-8 py-4 rounded-pill transition-all duration-300 hover:scale-[0.98] shadow-lg shadow-healis-blue/25"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0247225555"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-pill border border-white/15 transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-healis-blue" />
                <span>Call Practice: (02) 4722 5555</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
