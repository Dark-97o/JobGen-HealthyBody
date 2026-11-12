import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { REAL_CLINICS, REAL_SERVICES } from '../data/thbcData';
import { SERVICE_DETAILS } from '../data/serviceDetailsData';

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
  const details = SERVICE_DETAILS[service.id] ?? SERVICE_DETAILS['physiotherapy-treatment'];
  const relatedServices = REAL_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);
  const availableClinics = REAL_CLINICS.filter((c) => details.availableAt.includes(c.suburb));

  return (
    <div className="pt-32 pb-24 bg-[#F8F9FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-14">
        {/* Top Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToServices}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-healis-grey hover:text-healis-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 16 Services</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-black/5 text-healis-blue">
              {service.category}
            </span>
            <span className="text-[11px] font-medium bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full border border-emerald-200/70">
              Available at {details.availableAt.length} {details.availableAt.length === 1 ? 'Clinic' : 'Clinics'}
            </span>
          </div>
        </div>

        {/* Hero Split Card */}
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-white rounded-[2.5rem] p-7 sm:p-10 lg:p-12 border border-black/5 shadow-sm"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-healis-blue">
              <Stethoscope className="w-4 h-4" />
              <span>The Healthy Body Company</span>
            </div>

            <h1 className="font-exo text-3xl sm:text-5xl font-bold text-healis-dark tracking-tight leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-healis-grey leading-relaxed">
              {service.shortDesc}
            </p>

            {/* Available Clinics Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {details.availableAt.map((suburb) => (
                <span
                  key={suburb}
                  className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#F3F5F8] text-healis-dark px-3.5 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{suburb}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300 shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onBackToServices}
                className="inline-flex items-center gap-2 bg-[#F3F5F8] hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium px-6 py-3.5 rounded-pill transition-all duration-300"
              >
                <span>Explore All Services</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden aspect-[16/11] bg-slate-100 shadow-md border border-black/5">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Clinical Content + Sticky Booking Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left 7 Columns: Complete Clinical Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-xs space-y-5">
              <h2 className="font-exo text-2xl sm:text-3xl font-bold text-healis-dark">
                About {service.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-healis-grey leading-relaxed">
                {details.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Dark Editorial Treatment Approach Callout */}
            <div className="bg-[#0B0F17] text-white rounded-[2rem] p-8 sm:p-10 space-y-4 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-healis-blue">
                <Sparkles className="w-4 h-4" />
                <span>Our Clinical Approach</span>
              </div>
              <h3 className="font-exo text-2xl font-bold text-white">
                {details.treatmentApproachTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {details.treatmentApproachText}
              </p>
            </div>

            {/* Conditions & Indications */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-xs space-y-6">
              <h3 className="font-exo text-2xl font-bold text-healis-dark">
                {details.clinicalFocusTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.clinicalFocusItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F9FB] border border-black/[0.04]"
                  >
                    <span className="w-6 h-6 rounded-full bg-healis-blue/10 text-healis-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm text-healis-dark leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Session Highlights & Clinic Availability */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-[2rem] p-8 border border-black/5 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="font-exo text-xl font-bold text-healis-dark">
                  What’s Included
                </h3>
                <p className="text-xs text-healis-grey">
                  No GP referral required for private patients. Instant HICAPS claiming available.
                </p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-healis-dark">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm text-healis-dark">
                  <span className="w-6 h-6 rounded-full bg-healis-blue/10 text-healis-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </span>
                  <span>1-on-1 private suite &amp; on-site rehab gym access</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-black/5 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Where This Service Is Offered
                </div>
                <div className="space-y-2.5">
                  {availableClinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="rounded-2xl bg-[#F8F9FB] p-3.5 border border-black/[0.04] flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 font-exo text-sm font-semibold text-healis-dark">
                          <MapPin className="w-3.5 h-3.5 text-healis-blue shrink-0" />
                          <span>{clinic.suburb}</span>
                        </div>
                        <p className="text-[11px] text-healis-grey mt-0.5">{clinic.address}</p>
                      </div>
                      <a
                        href={`tel:${clinic.phone.replace(/[^0-9]/g, '')}`}
                        className="text-[11px] font-mono font-semibold text-healis-blue shrink-0 hover:underline"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-4 rounded-pill bg-healis-blue hover:bg-healis-dark text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
              >
                <span>Book {service.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-exo text-2xl sm:text-3xl font-bold text-healis-dark">
              Related Physiotherapy Services
            </h3>
            <button
              type="button"
              onClick={onBackToServices}
              className="text-xs sm:text-sm font-semibold text-healis-blue hover:underline"
            >
              View all 16 →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onSelectService(rel.id)}
                className="text-left bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
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
                    <p className="text-xs text-healis-grey line-clamp-2 leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 text-xs font-semibold text-healis-blue inline-flex items-center gap-1">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
