import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Health Funds & Costs' | 'Appointments';
}

const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'Do I need a doctor’s referral to see a physiotherapist?',
    answer: 'No referral is needed if you are a private patient. In Australia, physiotherapists are primary-contact health practitioners. You can simply book an appointment online or by phone. Referrals are only required if you are claiming through SIRA Workers Compensation, CTP Motor Vehicle Accident claims, Department of Veterans’ Affairs (DVA), or a Medicare Enhanced Primary Care (EPC) Chronic Disease Management plan.',
  },
  {
    category: 'Health Funds & Costs',
    question: 'How does on-the-spot health fund claiming work?',
    answer: 'All four of our clinics (Penrith, Caringbah, Jordan Springs, and Mount Annan) are equipped with digital HICAPS terminals. Please bring your physical private health card or digital wallet app (Apple Pay / Google Wallet with participating funds). We swipe your card at reception to instantly claim your health fund rebate; you only pay the remaining gap out-of-pocket.',
  },
  {
    category: 'Appointments',
    question: 'What happens during my 45-minute initial consultation?',
    answer: 'Your first session is 100% one-on-one with a senior physiotherapist. We conduct a thorough clinical diagnostic history, orthopaedic joint & ligament tests, nerve screening, and biomechanical movement analysis. We explain your diagnosis in plain English, begin immediate hands-on pain relief, and formulate your personalized recovery roadmap.',
  },
  {
    category: 'General',
    question: 'What should I wear to my appointment?',
    answer: 'Wear comfortable, loose-fitting athletic or casual clothing that allows easy assessment of the affected joint or limb. For example, bring shorts for knee, hip, or ankle assessments, and a singlet or loose T-shirt for shoulder and neck issues.',
  },
  {
    category: 'Health Funds & Costs',
    question: 'How do you handle WorkCover NSW (SIRA) and NDIS claims?',
    answer: 'We have over two decades of experience working with insurers, doctors, and case managers. For approved Workers Comp (SIRA) or CTP motor vehicle claims, we invoice your insurer directly with zero out-of-pocket expenses to you. For NDIS participants, we support both self-managed and plan-managed participants with functional capacity reports and therapy goals.',
  },
  {
    category: 'Appointments',
    question: 'How is The Healthy Body Company different from standard clinics?',
    answer: 'Unlike many clinics that leave patients lying alone on a bed with heat packs or ultrasound machines across curtained cubicles, we practice active, evidence-based physiotherapy. Every clinic features private treatment suites combined with an on-site rehabilitation gym. We pair hands-on manual relief with progressive load conditioning so your injury does not return.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Health Funds & Costs', 'Appointments'];

  const filtered = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-sand-200">
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            Patient Information & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-forest-700 italic font-serif">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, transparent answers about appointments, health fund rebates, and what to expect during your care.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIdx(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-sand-50 text-slate-600 hover:text-slate-900 border border-sand-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {filtered.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-sand-300 bg-sand-50/50 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-forest-700 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-forest-600 flex-shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-forest-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sand-200/60 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-sand-100 border border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-slate-700">
            <ShieldCheck className="w-5 h-5 text-forest-700 flex-shrink-0" />
            <span>Have a specific condition or question not answered here? Speak with our clinic reception.</span>
          </div>
          <a
            href="tel:0247225555"
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold border border-sand-300 shadow-2xs whitespace-nowrap"
          >
            Call (02) 4722 5555
          </a>
        </div>
      </div>
    </section>
  );
};

