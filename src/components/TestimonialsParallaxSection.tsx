import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TestimonialsParallaxSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Penrith Marathon Runner',
      quote: 'The care I received was exceptional. Stephen used shockwave therapy paired with heavy load conditioning for my plantar fasciitis. Within five weeks I was back running along the Nepean River completely pain-free.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Michael Brennan',
      role: 'Local Grade Rugby Player',
      quote: 'From the moment I walked in after tearing my ACL, I felt supported. Jude and the team took me through every single milestone with force-plate testing. Returned to contact rugby yesterday feeling stronger than ever.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Eleanor Vance',
      role: 'High School Teacher',
      quote: 'I was nervous about my chronic sciatica after years of classroom standing. The clinical pilates with Steph at Caringbah transformed my core stability and relieved my lower back pain permanently.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Marcus Zhou',
      role: 'WorkCover SIRA Patient',
      quote: 'Suffered a severe shoulder impingement at work. The team handled the insurer billing seamlessly with zero out-of-pocket costs, and the on-site rehab gym drills got me back to full duties weeks ahead of schedule.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE4] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.25] sm:leading-[1.2]">
            Stories of recovery and <span className="text-healis-blue font-medium">strength</span>
          </h2>
        </motion.div>

        {/* Staggered Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`p-7 rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between space-y-4 ${
                idx % 2 === 1 ? 'lg:translate-y-6' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-xs border-2 border-white">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-healis-dark font-normal leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="text-xs font-semibold text-healis-dark">{item.name}</div>
                <div className="text-[11px] text-healis-grey">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
