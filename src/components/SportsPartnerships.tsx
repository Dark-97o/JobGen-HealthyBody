import React from 'react';
import { 
  Trophy, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  Activity 
} from 'lucide-react';

interface SportsPartnershipsProps {
  onOpenBooking: () => void;
}

export const SportsPartnerships: React.FC<SportsPartnershipsProps> = ({ onOpenBooking }) => {
  const partners = [
    {
      name: 'Brothers Penrith Rugby League',
      type: 'Senior & Junior JRLC Official Physio Partner',
      badge: '20+ Year Partnership',
      description: 'Providing pitch-side acute injury management, concussion baseline testing, and priority Monday morning scans & rehab for senior rugby squads.',
    },
    {
      name: 'Nepean Football Club',
      type: 'Football NSW League One Partner',
      badge: 'Official Sports Medicine Partner',
      description: 'Delivering comprehensive ACL prevention screenings, groin strength monitoring, and return-to-play testing for senior men, women, and youth academies.',
    },
    {
      name: 'Sutherland Shire Athletic Squads',
      type: 'Track, Field & Distance Running',
      badge: 'Endurance Performance Lab',
      description: 'Specialised video gait kinematics, shockwave therapy for chronic Achilles/plantar fasciitis, and footwear prescription across the Shire.',
    },
  ];

  return (
    <section className="py-20 bg-forest-950 text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-forest-700">
              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
              Community & Sporting Alliances
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Trusted by Sydney’s Leading <br className="hidden sm:inline" />
              <span className="text-emerald-400 italic font-serif">Athletes & Sporting Clubs</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            From grassroots junior rugby to national-level soccer and marathon runners, our sports physios provide pitch-side acute care and gym-based return-to-competition protocols.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="bg-forest-900/60 rounded-3xl p-7 border border-forest-800 backdrop-blur-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-forest-800 px-2.5 py-1 rounded-md border border-forest-700">
                    {p.badge}
                  </span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {p.name}
                </h3>
                <div className="text-xs font-semibold text-emerald-400/90 mt-1">
                  {p.type}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Priority Injury Triage
                </span>
                <span className="text-emerald-400 font-semibold">Active Partner</span>
              </div>
            </div>
          ))}
        </div>

        {/* Monday Morning Weekend Injury Triage Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-forest-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Injured in a Weekend Sports Match?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                We reserve priority Monday morning slots for acute muscle tears, ligament sprains, and concussion evaluations across all clinics.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Priority Sports Triage</span>
          </button>
        </div>
      </div>
    </section>
  );
};
