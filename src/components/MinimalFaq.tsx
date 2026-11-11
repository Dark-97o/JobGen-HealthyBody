import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const MinimalFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a doctor’s referral to make an appointment?',
      a: 'No referral is required for private appointments. Physiotherapists are primary-contact practitioners in Australia. Referrals are only needed for Workers Comp (SIRA), CTP, or Medicare EPC plans.',
    },
    {
      q: 'How does on-the-spot health fund claiming work?',
      a: 'All our clinics have digital HICAPS terminals. Simply bring your physical health fund card or phone digital pass to receive your instant rebate and pay only the remaining gap.',
    },
    {
      q: 'What is included in the initial consultation?',
      a: 'Every initial session is 45 minutes of one-on-one clinical diagnostic history, joint mobility tests, video motion analysis, immediate manual pain relief, and a personalized recovery roadmap.',
    },
    {
      q: 'Do you have on-site gyms at all locations?',
      a: 'Yes. Every clinic features private consultation suites alongside an on-site rehabilitation gym equipped for progressive strength loading and Clinical Pilates.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Frequently <span className="font-serif italic font-normal text-forest-800">asked</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-black/10 pb-5 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-3 text-base sm:text-lg font-light text-slate-900 hover:text-forest-800 transition-colors"
                >
                  <span>{faq.q}</span>
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
                      <p className="pt-2 pb-3 text-sm text-slate-600 font-light leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

