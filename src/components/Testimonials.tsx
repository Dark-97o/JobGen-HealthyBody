import React from 'react';
import { TESTIMONIALS_DATA, HEALTH_FUNDS } from '../data/clinicsData';
import { Star, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-sand-200">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            Verified Patient Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Over 28,000 Sydney Patients <br className="hidden sm:inline" />
            <span className="text-forest-700 italic font-serif">Trust Us with Their Recovery</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5.0 Average Rating</span>
            <span className="text-slate-400">•</span>
            <span>1,200+ Verified Google Reviews across all 4 practices</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-sand-50/70 rounded-3xl p-6 border border-sand-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Clinic Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 bg-forest-100 px-2 py-0.5 rounded">
                    {t.clinic}
                  </span>
                </div>

                {/* Condition Treated Badge */}
                <div className="inline-block text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-sand-200 mb-3">
                  Treated: {t.condition}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-sand-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Health Funds & Rebate Stream */}
        <div className="mt-20 pt-12 border-t border-sand-200">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Claim on the spot via HICAPS • Approved for All Major Australian Health Funds
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HEALTH_FUNDS.map((fund, idx) => (
              <span
                key={idx}
                className="bg-sand-100 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl border border-sand-200 shadow-2xs hover:bg-white hover:text-forest-700 transition-colors"
              >
                {fund}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-600" />
              SIRA Workers Compensation Approved
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-600" />
              Medicare EPC / Chronic Disease Referral Accepted
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-600" />
              NDIS Self-Managed & Plan-Managed Registered
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest-600" />
              Department of Veterans’ Affairs (DVA)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
