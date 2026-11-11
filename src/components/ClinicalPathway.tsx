import React from 'react';
import { 
  Search, 
  Hand, 
  Dumbbell, 
  Award, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface ClinicalPathwayProps {
  onOpenBooking: () => void;
}

export const ClinicalPathway: React.FC<ClinicalPathwayProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Deep Biomechanical Diagnosis',
      tagline: 'We listen first. We never treat symptoms blindly.',
      icon: Search,
      description: 'Your 45-minute initial session starts with a comprehensive history, orthopedic stress tests, neurological screening, and video motion analysis to isolate the true kinetic root cause.',
      outcomes: [
        'Clear anatomical explanation of your injury',
        'Written recovery roadmap with projected timelines',
        'No confusing medical jargon',
      ],
    },
    {
      num: '02',
      title: 'Targeted Hands-On Alleviation',
      tagline: 'Rapid pain relief to restore early movement confidence.',
      icon: Hand,
      description: 'We utilize skilled manual therapy—Maitland joint mobilisations, soft tissue release, dry needling, and Swiss shockwave—to calm acute inflammation and eliminate nerve pressure.',
      outcomes: [
        'Immediate reduction in joint stiffness',
        'Restoration of pain-free range of motion',
        'Taping & support strategies for immediate comfort',
      ],
    },
    {
      num: '03',
      title: 'Active Rehab in Our On-Site Gym',
      tagline: 'Passive treatment alone cannot prevent recurrence.',
      icon: Dumbbell,
      description: 'Unlike clinics with only curtained beds, every Healthy Body clinic features an on-site rehabilitation gym. We progressively load tendons, correct muscle imbalances, and retrain dynamic mechanics.',
      outcomes: [
        'Objective strength testing with digital dynamometry',
        'Clinical Pilates reformer integration',
        'Custom home exercise app with video coaching',
      ],
    },
    {
      num: '04',
      title: 'Return to Life, Sport & Work',
      tagline: 'Bulletproof resilience for the long haul.',
      icon: Award,
      description: 'We don’t discharge you the moment pain drops to zero. We guide you through sports-specific deceleration drills, lifting tolerance, and work-capacity tests to ensure you never re-injure.',
      outcomes: [
        'Return-to-play objective milestone clearance',
        'Direct GP, surgeon & coach progress reporting',
        'Lifelong mobility & postural maintenance plan',
      ],
    },
  ];

  return (
    <section id="clinical-pathway" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-sand-200">
            The Healthy Body Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our 4-Step Pathway to <br className="hidden sm:inline" />
            <span className="text-forest-700 italic font-serif">Lasting Physical Freedom</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A structured, evidence-based methodology that moves you from acute discomfort to peak physical resilience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-sand-50/70 rounded-3xl p-6 sm:p-7 border border-sand-200 flex flex-col justify-between hover:bg-white hover:shadow-elevated transition-all relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-forest-700/60 font-mono">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-forest-700 shadow-sm border border-sand-200 flex items-center justify-center group-hover:bg-forest-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-forest-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-forest-700 mt-1">
                    {step.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Outcomes */}
                  <div className="mt-5 pt-4 border-t border-sand-200/80 space-y-2">
                    {step.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pathway Bottom CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-forest-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold">Ready to Start Step 1 of Your Recovery?</h3>
            <p className="text-emerald-100/80 text-sm mt-1">
              Initial consultations are 45 minutes of thorough assessment and hands-on therapy with our senior physiotherapists.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-forest-900 font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all flex-shrink-0"
          >
            <span>Book Your Step 1 Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

