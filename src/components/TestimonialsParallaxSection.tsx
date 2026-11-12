import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialItem {
  name: string;
  quote: string;
  image: string;
}

const TOP_ROW_REVIEWS: TestimonialItem[] = [
  {
    name: 'Sarah Mitchell',
    quote:
      "The Healthy Body Company's Penrith team transformed my recovery. Shockwave therapy paired with strength rehab got me back to marathon running pain-free in five weeks.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Michael Brennan',
    quote:
      'After tearing my ACL, Jude and the clinicians guided every milestone with force-plate testing. I returned to grade rugby yesterday feeling stronger than ever.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Eleanor Vance',
    quote:
      'Clinical Pilates with Steph at Caringbah completely relieved my chronic sciatica. Every session feels tailored, calm, and focused on long-term movement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Liam O’Connor',
    quote:
      'Booked online in under two minutes for Jordan Springs. Clear diagnosis, hands-on manual therapy, and a simple home program that fixed my rotator cuff.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
];

const BOTTOM_ROW_REVIEWS: TestimonialItem[] = [
  {
    name: 'Marcus Zhou',
    quote:
      'Suffered a severe shoulder injury at work. @HealthyBodyCo handled SIRA WorkCover billing seamlessly with zero out-of-pocket costs and got me back ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Bishka Nguyen',
    quote:
      'If you are looking for physiotherapists who actually listen and simplify your recovery plan, look no further than @HealthyBodyCo Mount Annan.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Julian Smith',
    quote:
      "I've tried several physio clinics around Sydney, but The Healthy Body Company stands out for its on-site rehab gyms and genuine 1-on-1 care.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Hannah Yu',
    quote:
      'Vertigo treatment here was life-changing. One targeted vestibular session resolved months of dizziness—I recommend this team to everyone I know!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
];

const SocialBirdIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-4 h-4 text-[#1DA1F2] fill-current shrink-0"
  >
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const ReviewCard: React.FC<{ item: TestimonialItem }> = ({ item }) => (
  <div className="w-[330px] sm:w-[375px] shrink-0 bg-white rounded-2xl border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-between">
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover shrink-0 border border-black/5"
        />
        <span className="font-semibold text-[15px] text-healis-dark truncate">
          {item.name}
        </span>
      </div>
      <SocialBirdIcon />
    </div>

    <p className="mt-3.5 text-[14px] text-[#4B5563] font-normal leading-relaxed">
      {item.quote}
    </p>
  </div>
);

export const TestimonialsParallaxSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 bg-white overflow-hidden relative">
      {/* Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto px-6 mb-14"
      >
        <h2 className="font-exo text-4xl sm:text-5xl font-bold text-healis-dark tracking-tight">
          Testimonials
        </h2>
        <p className="mt-3 text-base sm:text-lg text-healis-grey font-normal">
          Trusted by over <span className="font-semibold text-healis-dark">5 000</span> patients across Greater Sydney
        </p>
      </motion.div>

      {/* Tilted 2-Row Card Wall with Soft Edge Fade */}
      <div className="relative">
        {/* Left & Right White Edge Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-white via-white/85 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-white via-white/85 to-transparent z-10" />

        <div className="-rotate-[2deg] space-y-6 py-4">
          {/* Top Row (Drifts Left) */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          >
            {[...TOP_ROW_REVIEWS, ...TOP_ROW_REVIEWS].map((item, idx) => (
              <ReviewCard key={`top-${idx}`} item={item} />
            ))}
          </motion.div>

          {/* Bottom Row (Drifts Right, Offset) */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
          >
            {[...BOTTOM_ROW_REVIEWS, ...BOTTOM_ROW_REVIEWS].map((item, idx) => (
              <ReviewCard key={`bottom-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
