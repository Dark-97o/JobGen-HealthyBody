import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { REAL_SERVICES } from '../data/thbcData';

interface ServicesViewProps {
  onOpenBooking: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 16 Services' },
    { id: 'physio', label: 'Physiotherapy & Sports' },
    { id: 'specialized', label: 'Specialized Modalities' },
    { id: 'rehab', label: 'Rehab & Classes' },
    { id: 'community', label: 'Community & NDIS' },
  ];

  const filtered = activeCategory === 'all'
    ? REAL_SERVICES
    : REAL_SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Allied Health Services Directory
          </div>
          <h1 className="text-4xl sm:text-6xl font-light text-slate-900 tracking-tight leading-[1.08]">
            Evidence-based <br />
            <span className="font-serif italic font-normal text-forest-800">
              physical therapies
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Every session at The Healthy Body Company is conducted one-on-one by our qualified physiotherapists and remedial therapists in private suites with on-site gym access.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === c.id
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-stone-100 border border-black/5'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Services Grid (All 16 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-forest-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Target Indications:
                    </div>
                    {service.indications.map((ind, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-light">
                        <Check className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Session Highlights:
                    </div>
                    {service.features.map((feat, i) => (
                      <div key={i} className="text-xs text-forest-800 font-medium">
                        • {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book {service.title.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
