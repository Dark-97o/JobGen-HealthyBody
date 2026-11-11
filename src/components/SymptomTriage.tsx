import React, { useState } from 'react';
import { 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Dumbbell, 
  Sparkles, 
  Clock 
} from 'lucide-react';

interface TriageOption {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  recommendedService: string;
  specialistType: string;
  timeline: string;
  firstSession: string[];
  keyTools: string[];
}

const TRIAGE_OPTIONS: TriageOption[] = [
  {
    id: 'sports',
    title: 'Acute Sports Injury',
    icon: '⚡',
    tagline: 'Sudden strain, joint sprain, knee twist, or gym injury',
    recommendedService: 'Musculoskeletal & Sports Physiotherapy',
    specialistType: 'Sports Physiotherapist (APA Titled)',
    timeline: '2 – 6 Weeks to Return-to-Play',
    firstSession: [
      'Ligament integrity & dynamic stress testing',
      'Acute swelling reduction & joint taping',
      'Personalized early-loading homework drills',
    ],
    keyTools: ['On-site Rehab Gym', 'Vald Dynamometer Strength Testing', 'Rigid Strapping'],
  },
  {
    id: 'spine',
    title: 'Back, Neck or Sciatica Pain',
    icon: '🦴',
    tagline: 'Persistent spine pain, radiating leg tingling, or stiff neck',
    recommendedService: 'Spinal, Lower Back & Neck Rehabilitation',
    specialistType: 'Senior Spinal Physiotherapist',
    timeline: '3 – 8 Weeks for Meaningful Resolution',
    firstSession: [
      'Directional preference mechanical assessment (McKenzie)',
      'Nerve root tension & reflex screening',
      'Immediate hands-on joint mobilisation & pain de-escalation',
    ],
    keyTools: ['Maitland Mobilisation Beds', 'Spinal Decompression Protocols', 'Motor Control Biofeedback'],
  },
  {
    id: 'post-op',
    title: 'Post-Surgical Rehabilitation',
    icon: '🏥',
    tagline: 'ACL reconstruction, knee/hip replacement, or rotator cuff repair',
    recommendedService: 'Post-Surgical Orthopaedic Rehabilitation',
    specialistType: 'Orthopaedic Rehabilitation Lead',
    timeline: 'Milestone Phased (8 – 36 Weeks)',
    firstSession: [
      'Surgeon protocol audit & safe range measurement',
      'Effusion / swelling measurement',
      'Safe neuromuscular quad/glute activation drills',
    ],
    keyTools: ['Goniometric Range Tracking', 'Rehab Gym Leg Press', 'Surgeon Milestone Reporting'],
  },
  {
    id: 'tendon',
    title: 'Chronic Tendon Pain',
    icon: '🔥',
    tagline: 'Stubborn Achilles pain, heel plantar fasciitis, or tennis elbow',
    recommendedService: 'Radial Shockwave Therapy (ESWT) + Heavy Loading',
    specialistType: 'Tendon & Shockwave Clinician',
    timeline: '3 – 5 Shockwave Sessions + 6 Weeks Loading',
    firstSession: [
      'Tendon palpation & localized pain pressure test',
      'Trial of Swiss EMS acoustic shockwave',
      'Heavy-Slow Resistance (HSR) exercise prescription',
    ],
    keyTools: ['Swiss EMS DolorClast Shockwave', 'Heavy Isometric Rig', 'Tendon Loading Logs'],
  },
  {
    id: 'jaw-vertigo',
    title: 'TMJ Jaw Pain, Vertigo or Headaches',
    icon: '🌀',
    tagline: 'Clicking jaw, teeth grinding, spinning dizziness, or migraines',
    recommendedService: 'TMJ Jaw Pain & Vestibular Rehabilitation',
    specialistType: 'Vestibular & Craniofacial Physiotherapist',
    timeline: '1 – 4 Sessions for BPPV; 4 – 8 Weeks for TMJ',
    firstSession: [
      'Dix-Hallpike positional testing for vertigo crystals',
      'Temporomandibular joint biomechanics assessment',
      'Gentle Epley maneuver or intra-oral pterygoid release',
    ],
    keyTools: ['Infrared Goggle Tracking', 'Epley Canalith Repositioning', 'Intra-oral Myofascial Release'],
  },
  {
    id: 'workcover',
    title: 'Workplace or CTP Motor Injury',
    icon: '📋',
    tagline: 'WorkCover SIRA claim, CTP injury, or NDIS plan management',
    recommendedService: 'Workers Compensation (SIRA) & NDIS Care',
    specialistType: 'SIRA Accredited Work Injury Physio',
    timeline: 'Coordinated Return-to-Work Schedule',
    firstSession: [
      'Full functional capacity screening & baseline scoring',
      'Direct coordination with your nominated treating doctor (GP)',
      'Billing directly to your insurer with zero out-of-pocket costs',
    ],
    keyTools: ['SIRA Certificate of Capacity', 'Ergonomic Task Conditioning', 'Direct Insurer Billing'],
  },
];

interface SymptomTriageProps {
  onBookService: (serviceName: string) => void;
}

export const SymptomTriage: React.FC<SymptomTriageProps> = ({ onBookService }) => {
  const [selectedId, setSelectedId] = useState<string>('spine');

  const selectedOption = TRIAGE_OPTIONS.find((o) => o.id === selectedId) || TRIAGE_OPTIONS[0];

  return (
    <section className="py-20 bg-white border-y border-sand-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-sand-200">
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            Interactive Triage & Care Matcher
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What Brings You to The Healthy Body Company?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Select your primary concern below. We match you with the exact clinical sub-specialist and evidence-backed therapy protocol.
          </p>
        </div>

        {/* Triage Grid & Recommendation Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {TRIAGE_OPTIONS.map((opt) => {
              const active = opt.id === selectedId;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedId(opt.id)}
                  className={`text-left p-5 rounded-2xl border transition-all text-sm relative group ${
                    active
                      ? 'bg-forest-900 text-white border-forest-950 shadow-lg scale-[1.02]'
                      : 'bg-sand-50/70 hover:bg-sand-100/70 text-slate-800 border-sand-200 hover:border-forest-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{opt.icon}</span>
                    {active ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="font-bold text-base">{opt.title}</div>
                  <div className={`text-xs mt-1 leading-snug ${active ? 'text-emerald-100/80' : 'text-slate-500'}`}>
                    {opt.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Matched Clinical Outcome Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sand-50 to-sand-100 rounded-3xl p-6 sm:p-8 border border-sand-300 shadow-elevated">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-forest-100 text-forest-800 border border-forest-200">
                <Sparkles className="w-3.5 h-3.5 text-forest-600" />
                Tailored Clinical Match
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-forest-600" />
                {selectedOption.timeline}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              {selectedOption.recommendedService}
            </h3>

            <div className="mt-2 text-xs font-semibold text-forest-700">
              Lead Practitioner: {selectedOption.specialistType}
            </div>

            {/* What Happens in Session 1 */}
            <div className="mt-6 pt-5 border-t border-sand-300/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest-700" />
                What to Expect During Your Initial Consultation
              </div>
              <div className="space-y-2.5">
                {selectedOption.firstSession.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-forest-200 text-forest-900 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Equipment Used */}
            <div className="mt-6 pt-5 border-t border-sand-300/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-forest-700" />
                Clinical Facilities & Modalities Deployed
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedOption.keyTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-slate-800 text-xs px-2.5 py-1 rounded-lg border border-sand-300 font-medium shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Booking Action */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onBookService(selectedOption.recommendedService)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>Book First Session for {selectedOption.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-500 mt-2">
                Private health fund instant rebates available via HICAPS on the day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
