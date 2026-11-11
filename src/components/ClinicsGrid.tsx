import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ClinicsGridProps {
  onOpenBooking: () => void;
}

export const ClinicsGrid: React.FC<ClinicsGridProps> = ({ onOpenBooking }) => {
  const clinics = [
    {
      suburb: 'Penrith',
      title: 'Flagship & Rehab Gym',
      address: '95 Lethbridge Street',
      phone: '(02) 4722 5555',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      suburb: 'Caringbah',
      title: 'Sutherland Shire Studio',
      address: 'Suite 2, 383 Port Hacking Rd',
      phone: '(02) 9524 4400',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    },
    {
      suburb: 'Jordan Springs',
      title: 'Community Practice',
      address: '63 Watergum Drive',
      phone: '(02) 4702 0222',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
    {
      suburb: 'Mount Annan',
      title: 'Central Practice',
      address: 'Shop 17, Mount Annan Central',
      phone: '(02) 4647 8880',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="clinics" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
              Four Sydney Spaces
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Clinics <span className="font-serif italic font-normal text-forest-800">& spaces</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-light max-w-sm">
            Open Monday to Saturday with dedicated patient parking and instant HICAPS private health rebates.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={clinic.image}
                    alt={clinic.suburb}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-1.5">
                  <h3 className="text-xl font-medium text-slate-900">
                    {clinic.suburb}
                  </h3>
                  <div className="text-xs text-slate-500 font-light">
                    {clinic.title}
                  </div>
                  <div className="text-xs text-slate-700 pt-2 font-light">
                    {clinic.address}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {clinic.phone}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:text-forest-800 transition-colors pt-3 border-t border-slate-100"
                >
                  <span>Book at {clinic.suburb}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
