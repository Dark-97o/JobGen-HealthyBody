import React from 'react';
import { TEAM_MEMBERS } from '../data/clinicsData';
import { 
  MapPin, 
  GraduationCap, 
  Calendar 
} from 'lucide-react';

interface TeamDirectoryProps {
  onOpenBooking: () => void;
}

export const TeamDirectory: React.FC<TeamDirectoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="team" className="py-24 bg-sand-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-forest-200">
            <GraduationCap className="w-3.5 h-3.5 text-forest-600" />
            Clinical Leadership & Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Experienced Physiotherapists <br className="hidden sm:inline" />
            <span className="text-forest-700 italic font-serif">Dedicated to Your Health</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Our multi-disciplinary team has over 70 years of combined clinical mastery. 
            We match you with clinicians who hold advanced postgraduate expertise in your specific injury.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-sand-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-forest-800/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-forest-600/40">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Clinics */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.locations.map((loc, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-sand-100 px-2 py-0.5 rounded"
                      >
                        <MapPin className="w-2.5 h-2.5 text-forest-700" />
                        {loc}
                      </span>
                    ))}
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-forest-800 mt-0.5">
                    {member.title}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {member.credentials}
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Sub-Specialties:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.slice(0, 3).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-sand-100 text-slate-700 font-medium px-2 py-0.5 rounded border border-sand-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sand-100 hover:bg-forest-700 hover:text-white text-slate-800 font-bold text-xs transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {member.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
