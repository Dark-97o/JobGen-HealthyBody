import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="rounded-[2.5rem] bg-healis-dark text-white p-8 sm:p-14 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-healis-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Get in touch
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              Ready to take the first step toward lasting movement freedom? Reserve your consultation with our experienced Sydney clinicians today.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-white hover:bg-healis-blue hover:text-white text-healis-dark text-sm font-semibold tracking-normal px-9 py-4 rounded-pill transition-all duration-300 hover:scale-[0.975] shadow-lg active:scale-95"
            >
              <span>Contact us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
