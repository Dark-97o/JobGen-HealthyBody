import React from 'react';
import { CheckSquare } from 'lucide-react';

export const SpecialtiesMarquee: React.FC = () => {
  const specialties = [
    'Physiotherapy Treatment',
    'Sports Physiotherapy',
    'TMJ Dysfunction & Jaw Pain',
    'Orthopaedic Physio',
    'Work Injuries (SIRA)',
    'Shockwave Therapy',
    'Clinical Pilates',
    'Paediatric Care',
    'NDIS Physiotherapy',
    'Remedial Massage',
    'Falls Prevention',
    'Healthy Mums',
    'Vertigo & Dizziness',
    'Cardiorespiratory Care',
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-6 sm:px-8 my-6 sm:my-8">
      <div className="w-full bg-healis-blue py-5 px-4 rounded-2xl sm:rounded-3xl border border-healis-blue/80 shadow-sm overflow-hidden">
        <div className="group relative flex w-full overflow-hidden select-none">
          {/* Animated Marquee Row */}
          <div className="flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee group-hover:[animation-play-state:paused]">
            {specialties.map((item, idx) => (
              <div key={`m1-${idx}`} className="flex items-center gap-8 shrink-0">
                <span className="text-[22px] sm:text-[24px] font-bold tracking-tight text-white hover:text-white/85 transition-colors cursor-default whitespace-nowrap">
                  {item}
                </span>
                <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate Row for seamless loop */}
          <div className="flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {specialties.map((item, idx) => (
              <div key={`m2-${idx}`} className="flex items-center gap-8 shrink-0">
                <span className="text-[22px] sm:text-[24px] font-bold tracking-tight text-white hover:text-white/85 transition-colors cursor-default whitespace-nowrap">
                  {item}
                </span>
                <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
