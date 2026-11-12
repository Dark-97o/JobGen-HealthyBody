import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const INSTAGRAM_POSTS = [
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/sports-physio-The-Healthy-Body-2304035057-scaled-e1719978691299.jpg',
    caption: 'High-performance sports rehab & return-to-play testing',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-12-scaled-e1761877163453.jpg',
    caption: 'Strong and steady balance & mobility coaching',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Penrith-Physio-14-scaled.jpg',
    caption: 'Hands-on manual therapy in Penrith & Jordan Springs',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/05/our-team-The-Healthy-Body-2304035597.jpg',
    caption: 'Our multidisciplinary physio & admin team',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/mt-annan-284A0133.jpg',
    caption: 'Inside our Mount Annan clinic & rehab suite',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2026/04/DSCF2028-scaled-e1776832196563.jpeg',
    caption: 'Hands-on student & graduate physiotherapy workshops',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2025/10/Physio-in-Caringbah-scaled-e1761639907271.jpg',
    caption: 'Movement & posture coaching in Caringbah',
  },
  {
    src: 'https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/04/Sports-Physio-The-Healthy-Body.jpg',
    caption: 'Dedicated on-site rehab gyms for every recovery stage',
  },
];

export const FollowUsInstagramSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0B0F17] text-white border-t border-white/10">
      <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-healis-blue">
              <InstagramIcon className="w-4 h-4" />
              <span>@healthybody_co</span>
            </div>
            <h2 className="font-exo text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Follow us on <span className="text-healis-blue">Instagram</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Daily movement tips, exercise demos, and behind-the-scenes stories from our Penrith, Jordan Springs, Mount Annan, and Caringbah clinics.
            </p>
          </div>

          <a
            href="https://www.instagram.com/healthybody_co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300 self-start md:self-auto shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @healthybody_co</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* 4x2 Dark Gallery Grid (8 Original THBC Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/healthybody_co/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={post.src}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
