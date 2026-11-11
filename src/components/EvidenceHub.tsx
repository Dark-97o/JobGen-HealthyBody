import React, { useState } from 'react';
import { RECOVERY_PROTOCOLS } from '../data/clinicsData';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';

export const EvidenceHub: React.FC = () => {
  const [selectedProtocolId, setSelectedProtocolId] = useState(RECOVERY_PROTOCOLS[0].id);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const currentProtocol = RECOVERY_PROTOCOLS.find((p) => p.id === selectedProtocolId) || RECOVERY_PROTOCOLS[0];
  const currentPhase = currentProtocol.phases[activePhaseIndex] || currentProtocol.phases[0];

  const handleProtocolChange = (id: string) => {
    setSelectedProtocolId(id);
    setActivePhaseIndex(0);
  };

  return (
    <section id="recovery-protocols" className="py-24 bg-gradient-to-b from-white via-sand-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-forest-200">
            <BookOpen className="w-3.5 h-3.5 text-forest-600" />
            Clinical Evidence & Recovery Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Transparent, Milestone-Driven <br className="hidden sm:inline" />
            <span className="text-forest-700 italic font-serif">Rehabilitation Roadmaps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Inspired by global rehabilitation registries and peer-reviewed physiotherapy literature. We guide you through objective criteria—not guesswork.
          </p>
        </div>

        {/* Protocol Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {RECOVERY_PROTOCOLS.map((protocol) => {
            const active = protocol.id === selectedProtocolId;
            return (
              <button
                key={protocol.id}
                type="button"
                onClick={() => handleProtocolChange(protocol.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2.5 ${
                  active
                    ? 'bg-forest-800 text-white border-forest-900 shadow-md'
                    : 'bg-white text-slate-700 border-sand-300 hover:border-forest-400'
                }`}
              >
                <Activity className={`w-4 h-4 ${active ? 'text-emerald-300' : 'text-slate-400'}`} />
                <span>{protocol.condition}</span>
              </button>
            );
          })}
        </div>

        {/* Protocol Deep-Dive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200 shadow-elevated">
          {/* Top Protocol Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-sand-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-1">
                {currentProtocol.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentProtocol.condition}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-sand-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 border border-sand-200">
                <Clock className="w-3.5 h-3.5 text-forest-600" />
                Est. Horizon: ~{currentProtocol.estimatedWeeks} Weeks
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Level 1 Evidence Protocol
              </span>
            </div>
          </div>

          {/* Evidence Citation Banner */}
          <div className="my-6 p-4 rounded-2xl bg-forest-50/70 border border-forest-100 flex items-start gap-3">
            <FileText className="w-5 h-5 text-forest-700 mt-0.5 flex-shrink-0" />
            <div className="text-xs sm:text-sm text-forest-900">
              <span className="font-bold">Clinical Evidence Basis: </span>
              {currentProtocol.clinicalEvidence}
            </div>
          </div>

          {/* Timeline Phase Navigators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
            {currentProtocol.phases.map((phase, idx) => {
              const isActive = idx === activePhaseIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    isActive
                      ? 'bg-forest-900 text-white border-forest-950 shadow-md ring-2 ring-forest-500/30'
                      : 'bg-sand-50 hover:bg-sand-100 text-slate-700 border-sand-200'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Phase 0{idx + 1}
                  </div>
                  <div className="text-xs font-bold mt-1 line-clamp-1">{phase.timeline}</div>
                  <div className={`text-[11px] mt-0.5 line-clamp-2 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {phase.phase.split(':')[1] || phase.phase}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Phase Breakdown */}
          <div className="bg-sand-50/60 rounded-2xl p-6 sm:p-8 border border-sand-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Phase Objective & Interventions */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-forest-700 bg-forest-100 px-2.5 py-0.5 rounded-md">
                  Active Phase: {currentPhase.timeline}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {currentPhase.phase}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                <span className="font-semibold text-slate-800">Primary Objective: </span>
                {currentPhase.focus}
              </p>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Physiotherapy Interventions:
              </div>
              <div className="space-y-2">
                {currentPhase.interventions.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Milestone Discharge / Progression Gate */}
            <div className="bg-white rounded-2xl p-6 border border-sand-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                  <Activity className="w-4 h-4 text-amber-600" />
                  Progression Gate Criteria
                </div>
                <h5 className="text-base font-bold text-slate-900">
                  Required Clinical Milestone
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Patients must objectively achieve the following test scores before advancing to subsequent loading:
                </p>
                <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-900">
                  "{currentPhase.milestoneCriteria}"
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Objective Dynamometer & ROM Validated</span>
                <span className="text-forest-700 font-bold">The Healthy Body Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
