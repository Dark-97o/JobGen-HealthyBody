import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, MapPin, ShieldCheck, Stethoscope } from 'lucide-react';
import { REAL_CLINICS, REAL_SERVICES } from '../data/thbcData';

interface ServiceDetailViewProps {
  serviceId: string;
  onSelectService: (serviceId: string) => void;
  onBackToServices: () => void;
  onOpenBooking: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId,
  onSelectService,
  onBackToServices,
  onOpenBooking,
}) => {
  const service = REAL_SERVICES.find((s) => s.id === serviceId) ?? REAL_SERVICES[0];
  const relatedServices = REAL_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-[#F8F9FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-16">
        {/* Breadcrumb / Back */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToServices}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-healis-grey hover:text-healis-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <span className="text-xs font-semibold uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-black/5 text-healis-blue">
            {service.category}
          </span>
        </div>

        {/* Hero Split */}
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-white rounded-[2.5rem] p-7 sm:p-10 lg:p-12 border border-black/5 shadow-sm"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-healis-blue">
              <Stethoscope className="w-4 h-4" />
              <span>The Healthy Body Company</span>
            </div>

            <h1 className="font-exo text-3xl sm:text-5xl font-bold text-healis-dark tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-healis-grey leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300"
              >
                <span>Book {service.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBackToServices}
                className="inline-flex items-center gap-2 bg-[#F8F9FB] hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium px-6 py-3.5 rounded-pill border border-black/10 transition-all duration-300"
              >
                <span>Compare All 16 Services</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[1.75rem] overflow-hidden aspect-[16/11] bg-slate-100 shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Conditions Treated & Included Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-xs space-y-5">
            <h2 className="font-exo text-2xl font-bold text-healis-dark">
              Common Conditions Treated
            </h2>
            <ul className="space-y-3">
              {service.indications.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-healis-grey">
                  <span className="w-6 h-6 rounded-full bg-healis-blue/10 text-healis-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-xs space-y-5">
            <h2 className="font-exo text-2xl font-bold text-healis-dark">
              What’s Included in Your Care
            </h2>
            <ul className="space-y-3">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-healis-grey">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Available Across All 4 Clinics */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-black/5 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-exo text-xl sm:text-2xl font-bold text-healis-dark">
                Available Across All 4 Sydney Clinics
              </h3>
              <p className="text-sm text-healis-grey mt-1">
                Same-week appointments with instant HICAPS private health rebates.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-pill transition-colors self-start sm:self-auto"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REAL_CLINICS.map((clinic) => (
              <div
                key={clinic.id}
                className="rounded-2xl bg-[#F8F9FB] p-4 border border-black/5 space-y-1"
              >
                <div className="flex items-center gap-1.5 font-exo text-sm font-semibold text-healis-dark">
                  <MapPin className="w-3.5 h-3.5 text-healis-blue shrink-0" />
                  <span>{clinic.suburb}</span>
                </div>
                <p className="text-xs text-healis-grey">{clinic.address}</p>
                <p className="text-xs font-mono text-healis-blue pt-1">{clinic.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="space-y-6">
          <h3 className="font-exo text-2xl font-bold text-healis-dark">
            Explore Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onSelectService(rel.id)}
                className="text-left bg-white rounded-[1.75rem] overflow-hidden border border-black/5 shadow-xs hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="font-exo text-lg font-semibold text-healis-dark group-hover:text-healis-blue transition-colors">
                    {rel.title}
                  </div>
                  <p className="text-xs text-healis-grey line-clamp-2">{rel.shortDesc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
