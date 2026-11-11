import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { REAL_BLOG_POSTS } from '../data/thbcData';

interface HomeBlogSectionProps {
  onSelectBlog: () => void;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ onSelectBlog }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FB] border-t border-black/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-pill text-xs font-medium text-healis-blue tracking-tight shadow-xs border border-black/5">
            <span>The Healthy Body Solution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.12]">
            Your guide to <span className="text-healis-blue font-medium">health</span>
          </h2>
          <p className="text-base text-healis-grey font-normal">
            Explore insightful articles and evidence-based rehabilitation advice from our clinicians.
          </p>
        </motion.div>

        {/* 3 Healis Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REAL_BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={onSelectBlog}
              className="bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-7 space-y-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-healis-blue flex items-center justify-between">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-healis-dark group-hover:text-healis-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-healis-grey leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-healis-dark group-hover:text-healis-blue transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
