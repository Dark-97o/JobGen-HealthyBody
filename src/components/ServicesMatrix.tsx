import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/clinicsData';
import { 
  Check, 
  ArrowRight, 
  Activity, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

interface ServicesMatrixProps {
  onBookService: (serviceName: string) => void;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'sports', label: 'Sports & Performance' },
    { id: 'physio', label: 'Spine & Musculoskeletal' },
    { id: 'rehab', label: 'Post-Op & Pilates' },
    { id: 'specialized', label: 'Shockwave & TMJ' },
    { id: 'wellness', label: 'Remedial Massage' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-sand-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-forest-200">
              <Activity className="w-3.5 h-3.5 text-forest-600" />
              Comprehensive Clinical Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Evidence-Based Physical Therapy <br className="hidden sm:inline" />
              <span className="text-forest-700 italic font-serif">Engineered for Your Recovery.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Every session is 100% one-on-one with your physiotherapist. We never juggle multiple patients at once across curtained cubicles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-sand-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-sand-200 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag & Duration */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sand-100 text-slate-700 border border-sand-200">
                    {service.badge}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {service.duration}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Indications Checklist */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Common Indications:
                  </div>
                  <div className="space-y-1.5">
                    {service.indications.slice(0, 3).map((ind, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" />
                        <span className="truncate">{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Techniques */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Modalities Used:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.techniques.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-forest-50 text-forest-800 px-2 py-0.5 rounded border border-forest-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Health Fund Rebates
                </span>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-700 hover:text-forest-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
