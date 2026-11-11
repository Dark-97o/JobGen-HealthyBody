import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import { REAL_CLINICS, REAL_SERVICES, REAL_TEAM, REAL_BLOG_POSTS } from '../data/thbcData';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Headline & Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-500">
                Penrith • Caringbah • Jordan Springs • Mount Annan
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-slate-900 tracking-tight leading-[1.08]">
                Live your best <br />
                <span className="font-serif italic font-normal text-forest-800">
                  active life, always!
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                Sydney’s trusted allied health and sports physiotherapy practice since 1998. We combine expert hands-on manual therapy with on-site rehabilitation gyms to help you move freely and without limits.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-xl active:scale-95"
                >
                  <span>Book Initial Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-300" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectTab('services')}
                  className="inline-flex items-center px-7 py-4 rounded-full bg-white hover:bg-stone-50 text-slate-800 text-sm font-medium tracking-wide border border-black/10 transition-all shadow-2xs"
                >
                  Browse All 16 Services
                </button>
              </div>

              {/* Trust Reassurance */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-light">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  No GP Referral Needed for Private Patients
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  Instant HICAPS Health Fund Rebates
                </span>
              </div>
            </motion.div>

            {/* Right: Authentic Real Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-200 shadow-2xl border-4 border-white">
                <img
                  src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Physiotherapy-in-Penrith-scaled-e1761877313120.jpg"
                  alt="Physiotherapist treating a patient at The Healthy Body Company"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-white font-semibold ml-2">4.9★ Google Verified</span>
                  </div>
                  <p className="text-xs text-white/90 italic font-light">
                    "25+ years of care across Penrith, Caringbah, Jordan Springs & Mount Annan."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE OUR DIFFERENCE (SECTION 2 OF ORIGINAL WEBSITE) */}
      <section className="py-24 sm:py-32 bg-[#F3EFEA] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
              The Healthy Body Difference
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Enjoy optimum <span className="font-serif italic font-normal text-forest-800">outcomes</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
              We reject the factory-line approach to healthcare. Every consultation is dedicated one-on-one time designed to address the root cause of your condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Expert Diagnosis',
                desc: 'Our physiotherapists swiftly pinpoint the root cause of your pain and discomfort, so you get lasting relief faster.',
              },
              {
                title: 'Hands-On Treatment',
                desc: 'There is no substitute for specialist human touch. We combine joint mobilisation, dry needling, and soft tissue therapy.',
              },
              {
                title: 'Active On-Site Gym Rehab',
                desc: 'Every clinic houses an on-site rehabilitation gym. We progressively rebuild strength and movement capacity.',
              },
              {
                title: 'Preventative Care',
                desc: 'We empower you with education and self-management strategies so that your injuries never relapse.',
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3"
              >
                <div className="font-serif italic text-2xl text-forest-800">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-medium text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE (16 ALLIED HEALTH SERVICES) */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
                Allied Health Services
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
                Comprehensive <span className="font-serif italic font-normal text-forest-800">clinical care</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
            >
              <span>View All 16 Specialised Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REAL_SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 space-y-2">
                    <h3 className="text-xl font-medium text-slate-900 group-hover:text-forest-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-3 space-y-1">
                      {service.indications.slice(0, 2).map((ind, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500 font-light">
                          <Check className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:text-forest-800 transition-colors"
                  >
                    <span>Book {service.title.split(' ')[0]}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET OUR DEDICATED TEAM (REAL TEAM PHOTOS FROM LIVE SITE) */}
      <section className="py-24 sm:py-32 bg-[#F3EFEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
                Allied Health Practitioners
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
                Meet our <span className="font-serif italic font-normal text-forest-800">dedicated team</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('team')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
            >
              <span>View All Practitioners & Leadership</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_TEAM.slice(0, 8).map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-1.5">
                    <h3 className="text-lg font-medium text-slate-900">
                      {member.name}
                    </h3>
                    <div className="text-xs text-forest-800 font-semibold">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-slate-500 font-light flex items-center gap-1 pt-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{member.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed italic pt-2 line-clamp-3">
                      "{member.quote}"
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-full bg-stone-100 hover:bg-forest-900 hover:text-white text-slate-800 text-xs font-semibold tracking-wide transition-colors"
                  >
                    Book with {member.name.split(' ')[0]}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOUR SYDNEY CLINIC SPACES (REAL CLINIC PHOTOS) */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
                Physical Spaces
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
                Four convenient <br />
                <span className="font-serif italic font-normal text-forest-800">
                  Sydney locations
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('locations')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
            >
              <span>View Clinic Hours & Directions</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_CLINICS.map((clinic, idx) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-medium text-slate-900">
                      {clinic.suburb}
                    </h3>
                    <p className="text-xs text-slate-600 font-light">
                      {clinic.address}
                    </p>
                    <a
                      href={`tel:${clinic.phone.replace(/[^0-9]/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-forest-800 hover:underline pt-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{clinic.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:text-forest-800 transition-colors"
                  >
                    <span>Book at {clinic.suburb}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST FROM THE THBC BLOG */}
      <section className="py-24 sm:py-32 bg-[#F3EFEA] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
                Evidence & Articles
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
                Latest from our <span className="font-serif italic font-normal text-forest-800">physios</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onSelectTab('blog')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900 hover:text-forest-700 transition-colors"
            >
              <span>Visit Clinical Blog</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_BLOG_POSTS.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-forest-700">
                      {post.category} • {post.readTime}
                    </div>
                    <h3 className="text-base font-medium text-slate-900 group-hover:text-forest-800 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectTab('blog')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-forest-800 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM & COMMUNITY STRIP */}
      <section className="py-16 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Community & Movement
            </div>
            <h3 className="text-2xl font-light text-slate-900 tracking-tight mt-1">
              Follow us on Instagram <span className="font-semibold text-forest-800">@healthybody_co</span>
            </h3>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Connect on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};
