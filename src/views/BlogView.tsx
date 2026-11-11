import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUpRight, X } from 'lucide-react';
import { REAL_BLOG_POSTS, type RealBlogPost } from '../data/thbcData';

export const BlogView: React.FC = () => {
  const [activePost, setActivePost] = useState<RealBlogPost | null>(null);

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Clinical Insights & Advice
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal text-healis-dark tracking-tight leading-[1.2] sm:leading-[1.18]">
            The Healthy Body <br />
            <span className="text-healis-blue font-medium">
              knowledge hub
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Evidence-based injury advice, rehabilitation exercises, and clinical health tips authored directly by our physiotherapists.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REAL_BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-healis-blue flex items-center justify-between">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-slate-900 group-hover:text-healis-blue transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-healis-grey font-normal leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-healis-dark group-hover:text-healis-blue transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-black/5 overflow-hidden my-8"
            >
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-forest-700">
                  {activePost.category} • {activePost.readTime}
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                  {activePost.title}
                </h2>
                <p className="text-sm text-slate-700 font-light leading-relaxed pt-2">
                  {activePost.excerpt}
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-black/5 text-xs text-slate-600 font-light leading-relaxed">
                  <span className="font-semibold text-slate-900 block mb-1">Clinical Key Takeaway:</span>
                  Accurate early clinical diagnosis by a registered physiotherapist ensures you load the tissue appropriately rather than exacerbating hidden stress fractures or joint inflammation.
                </div>
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActivePost(null)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
