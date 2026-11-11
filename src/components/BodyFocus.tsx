import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FocusArea {
  id: string;
  label: string;
  tagline: string;
  timeline: string;
  approach: string;
  image: string;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'lower-back',
    label: 'Lower Back & Spine',
    tagline: 'Disc decompression, motor control, and progressive loading.',
    timeline: '4 – 8 Weeks',
    approach: 'McKenzie directional preference mechanical therapy paired with deep core transverse abdominis retraining and kettlebell hinge mechanics in our gym.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'shoulder',
    label: 'Shoulder & Rotator Cuff',
    tagline: 'Scapulothoracic rhythm and eccentric tendon rehabilitation.',
    timeline: '6 – 10 Weeks',
    approach: 'Targeted rotator cuff isometric to heavy-slow resistance loading with shockwave therapy for chronic calcific tendinopathy and impingement.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'knee',
    label: 'Knee & Ligaments',
    tagline: 'Patellofemoral tracking, meniscus, and post-op ACL milestones.',
    timeline: 'Phased (8 – 36 Weeks)',
    approach: 'Objective dynamometer strength testing, neuromuscular deceleration training, and phased return-to-sport agility protocols.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'neck',
    label: 'Cervical Neck & Headaches',
    tagline: 'Posture restoration and cervicogenic headache relief.',
    timeline: '2 – 6 Weeks',
    approach: 'Gentle Maitland cervical mobilisations, deep neck flexor motor retraining, and thoracic extension drills to relieve occipital pressure.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'achilles',
    label: 'Foot, Ankle & Plantar',
    tagline: 'Swiss EMS shockwave and heavy-slow calf resistance.',
    timeline: '6 – 12 Weeks',
    approach: 'Acoustic radial shockwave therapy to dissolve fibrotic degeneration coupled with heavy single-leg isometric holds and video gait analysis.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80',
  },
];

interface BodyFocusProps {
  onOpenBooking: () => void;
}

export const BodyFocus: React.FC<BodyFocusProps> = ({ onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState<string>('lower-back');

  const selected = FOCUS_AREAS.find((a) => a.id === selectedId) || FOCUS_AREAS[0];

  return (
    <section id="focus" className="py-24 sm:py-32 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Anatomical Target
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Pinpoint your <span className="font-serif italic font-normal text-forest-800">recovery</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light">
            Select an area to explore our targeted clinical protocols and expected recovery horizons.
          </p>
        </motion.div>

        {/* Region Pills / Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {FOCUS_AREAS.map((item) => {
            const isActive = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`px-5 py-3 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Selected Card with Fluid Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                Targeted Care Protocol
              </div>
              <h3 className="text-3xl sm:text-4xl font-light text-slate-900">
                {selected.label}
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                {selected.tagline}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed border-l-2 border-forest-700 pl-4 py-1">
                {selected.approach}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Expected Timeline
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {selected.timeline}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-forest-800 transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={selected.image}
                alt={selected.label}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

