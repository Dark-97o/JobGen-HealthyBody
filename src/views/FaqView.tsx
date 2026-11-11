import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone } from 'lucide-react';
import { REAL_FAQS } from '../data/thbcData';

interface FaqViewProps {
  onOpenBooking?: () => void;
}

export const FaqView: React.FC<FaqViewProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Patient Support
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal text-healis-dark tracking-tight leading-[1.2] sm:leading-[1.18]">
            Frequently asked <br />
            <span className="text-healis-blue font-medium">
              patient questions
            </span>
          </h1>
          <p className="mt-6 text-base text-slate-600 font-light leading-relaxed">
            Everything you need to know about your consultation, health fund rebates, private billing, and what to expect during your care.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {REAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-black/5 p-6 transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 text-base sm:text-lg font-light text-slate-900 hover:text-forest-800 transition-colors"
                >
                  <span className="font-medium">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-14 p-8 rounded-3xl bg-[#F3EFEA] border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-medium text-slate-900">Have a specific clinical question?</h3>
            <p className="text-xs text-slate-600 font-light mt-1">
              Speak directly with our clinic patient care coordinators across our 4 practices.
            </p>
          </div>
          <a
            href="tel:0247225555"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (02) 4722 5555</span>
          </a>
        </div>
      </div>
    </div>
  );
};
