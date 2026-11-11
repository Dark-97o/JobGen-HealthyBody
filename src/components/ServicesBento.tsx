import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  const services = [
    {
      title: 'Sports Physiotherapy',
      tagline: 'High-performance return-to-play protocols.',
      description: 'Acute diagnosis, joint mobilisations, and progressive load testing in our dedicated on-site gyms.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-8',
    },
    {
      title: 'Spinal Rehabilitation',
      tagline: 'Sciatica and herniated disc recovery.',
      description: 'Structured decompression and deep core stabilizer retraining.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-4',
    },
    {
      title: 'Clinical Pilates',
      tagline: 'Physiotherapist-guided reformers.',
      description: 'Individual biomechanical correction for spinal and pelvic stability.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-4',
    },
    {
      title: 'Post-Surgical Care',
      tagline: 'ACL, knee & shoulder reconstructions.',
      description: 'Milestone-based progression aligned with Sydney’s leading orthopaedic surgeons.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-8',
    },
    {
      title: 'Radial Shockwave',
      tagline: 'Targeted acoustic healing.',
      description: 'Breakthrough therapy for chronic plantar fasciitis and Achilles tendinopathy.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-6',
    },
    {
      title: 'Remedial Massage',
      tagline: 'Deep myofascial restoration.',
      description: 'Clinical soft-tissue release by accredited remedial therapists.',
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-6',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
              Clinical Offerings
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Evidence-based <span className="font-serif italic font-normal text-forest-800">modalities</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-light max-w-sm">
            Every session is 100% one-on-one with your physiotherapist. No curtained cubicles.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${item.span} group relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-8`}
            >
              {/* Background Image with Dark Gradient */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="relative z-10 text-white space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-medium">
                  {item.tagline}
                </div>
                <h3 className="text-2xl font-light text-white tracking-tight flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-md pt-1">
                  {item.description}
                </p>
              </div>

              {/* Full Card Click Trigger */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="absolute inset-0 z-20"
                aria-label={`Book ${item.title}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
