import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Sparkles,
  PhoneCall,
  Layers,
  Database,
  ShieldCheck,
  Code2,
  Handshake,
  Calendar,
  ChevronRight,
} from 'lucide-react';

interface PartnersViewProps {
  onOpenBooking: () => void;
  onNavigateHome?: () => void;
}

export const PartnersView: React.FC<PartnersViewProps> = ({
  onOpenBooking,
  onNavigateHome,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const agents = [
    {
      name: 'OLIVIA',
      mod: 'MOD-01',
      role: 'Outbound Patient Care & Consultation Scheduling',
      description:
        'Pre-screens incoming inquiries, answers clinical service queries, and schedules physiotherapy consultations with automated diary sync.',
      avatar: '/images/partners/olivia.png',
      badge: 'Active 24/7',
      features: [
        'Instant same-day patient follow-up',
        'Direct diary sync with clinic calendars',
      ],
    },
    {
      name: 'JENNY',
      mod: 'MOD-02',
      role: 'Enterprise Voice Clinical Receptionist',
      description:
        'Answers incoming practice calls on ring one 24/7, handles questions, and transfers urgent clinical calls to practice principals.',
      avatar: '/images/partners/jenny.png',
      badge: 'Active 24/7',
      features: [
        'Zero missed calls & live triage transfers',
        'Cliniko, Nookal & Google calendar sync',
      ],
    },
    {
      name: 'JESS',
      mod: 'MOD-03',
      role: 'AI Clinical Recruitment & Talent Screener',
      description:
        'Screens physiotherapists, remedial massage therapists, and clinic staff against clinical criteria with automated voice screening.',
      avatar: '/images/partners/jess.png',
      badge: 'Active 24/7',
      features: [
        'Overnight clinical shortlists ready by 9 AM',
        'Automated qualification & reference checks',
      ],
    },
    {
      name: 'EMMA',
      mod: 'MOD-04',
      role: 'AI Career Coach & Patient Onboarding',
      description:
        'Accelerates patient intake onboarding, guides personalized care pathways, and assists graduate clinician development.',
      avatar: '/images/partners/emma.png',
      badge: 'Active 24/7',
      features: [
        'Personalized care & recovery onboarding',
        'Interactive clinical professional support',
      ],
    },
  ];

  const flagshipPlatforms = [
    {
      name: 'JOBGEN.AI',
      tag: 'Enterprise Healthcare AI',
      audience: 'For Practice Automation & Patient CRM',
      desc: 'Automates patient calls, appointment scheduling, qualified triage intake, and practice management synchronizations 24/7.',
      points: [
        'Autonomous voice receptionist & clinical call transfer',
        'Instant calendar bookings & bi-directional PMS sync',
      ],
      link: 'https://jobgen.ai/',
      accent: 'text-healis-blue',
    },
    {
      name: 'JOBGEN.IO',
      tag: 'Healthcare Talent Tech',
      audience: 'For Clinicians & Healthcare Talent',
      desc: 'Tailors resumes to clinical job criteria, discovers roles, and prepares practitioners with interactive simulated interviews.',
      points: [
        'AI resume tailoring & clinical career planning',
        'Interactive simulated mock interview coaching',
      ],
      link: 'https://jobgen.io/',
      accent: 'text-emerald-500',
    },
    {
      name: 'CONNECTGEN.AI',
      tag: 'Web & Growth Systems',
      audience: 'For Web Development & Digital Lead Gen',
      desc: 'Custom high-performance healthcare web applications, digital patient portals, and targeted community wellness funnels.',
      points: [
        'Custom clinic website & web application engineering',
        'Targeted digital patient acquisition funnels',
      ],
      link: 'https://connectgen.ai/',
      accent: 'text-amber-500',
    },
  ];

  const enterpriseFeatures = [
    {
      icon: Layers,
      title: 'Healthcare & Spatial Practice Intelligence',
      desc: 'Autonomous 15,000+ suburb demographic screening, regional health demand analytics, and clinical catchment mapping.',
    },
    {
      icon: Database,
      title: 'Enterprise PMS & CRM Sync',
      desc: 'Pre-built native integrations with Cliniko, Nookal, Bullhorn, Google Calendar, Outlook, and medical diary architectures.',
    },
    {
      icon: ShieldCheck,
      title: 'Failsafe Human Handover',
      desc: 'Complex clinical symptoms and emergency inquiries immediately transfer to human senior physiotherapists with live call summaries.',
    },
    {
      icon: Code2,
      title: 'Custom Web & AI Engineering',
      desc: 'Full-stack responsive medical web development, HIPAA/privacy-compliant architectures, and continuous voice model tuning.',
    },
  ];

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#F8F9FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-16 sm:space-y-20">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-healis-grey font-medium">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-healis-blue transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-healis-dark font-semibold">Technology Partner &amp; Ecosystem</span>
        </div>

        {/* ── SECTION 1: HERO SPOTLIGHT (POWERED BY JOBGEN) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.5rem] bg-[#0A0F17] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Ambient Lighting Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-healis-blue/25 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-healis-blue/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Partner Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-healis-blue">
                <Sparkles className="w-4 h-4" />
                <span>Strategic AI &amp; Technology Partner</span>
              </div>

              {/* Title with JobGen Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <img
                  src="/jobgen-logo.png"
                  alt="JobGen Logo"
                  className="h-12 sm:h-14 w-auto object-contain brightness-0 invert"
                />
                <h1 className="font-exo text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  POWERED BY <span className="text-healis-blue">JOBGEN.AI</span>
                </h1>
              </div>

              {/* Lead Copy */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
                The Healthy Body Company partners exclusively with <strong className="text-white">JOBGEN.AI</strong>, synthesizing neural predictive models, autonomous clinical voice receptionists, and high-frequency triage automation to power practice operations, patient onboarding, and consultation management across our 4 Greater Sydney clinics.
              </p>

              {/* Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Autonomous real-time call answering & calendar synchronization',
                  'Intelligent patient inquiry handling & clinical specialist routing',
                  'End-to-end Cliniko/Nookal/CRM integration & outbound reminders',
                  'Zero missed patient inquiries with instant real-time clinical transfer',
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-healis-blue text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://jobgen.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-sm sm:text-base font-semibold px-8 py-4 rounded-pill transition-all duration-300 hover:scale-[0.98] shadow-lg shadow-healis-blue/25"
                >
                  <span>Visit JobGen.ai</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-7 py-4 rounded-pill border border-white/15 transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4 text-healis-blue" />
                  <span>Inquire About Integration</span>
                </button>
              </div>
            </div>

            {/* Right Stat Callout Box */}
            <div className="lg:col-span-4 rounded-3xl bg-white/[0.04] border border-white/10 p-7 sm:p-8 space-y-6">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-exo">
                  24/7 / 365
                </div>
                <div className="text-xs uppercase tracking-wider text-healis-blue font-semibold">
                  Autonomous Clinical Operations
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Sydney Headquarters</span>
                  <span className="font-semibold text-white">60 Martin Place</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>San Francisco Hub</span>
                  <span className="font-semibold text-white">580 California St</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Clinics Connected</span>
                  <span className="font-semibold text-white">4 Greater Sydney</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-healis-blue/10 border border-healis-blue/20 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">Carrier-Grade Telephony</span>
                Powered by carrier-grade SIP infrastructure for crystal-clear voice clarity and instantaneous zero-latency call routing.
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── SECTION 2: INSIDE JOBGEN AUTONOMOUS ECOSYSTEM ── */}
        <section className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              01 // TECH INFRASTRUCTURE
            </span>
            <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
              Inside JobGen <span className="text-healis-blue">Autonomous Ecosystem</span>
            </h2>
            <p className="text-sm sm:text-base text-healis-grey leading-relaxed">
              Headquartered in <strong>Sydney (60 Martin Place)</strong> and <strong>San Francisco (580 California St)</strong>, JOBGEN builds autonomous AI agents, talent discovery tools, and digital growth infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flagshipPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-8 border border-black/5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-exo text-2xl font-bold text-healis-dark">
                      {platform.name}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-healis-blue">
                      {platform.tag}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {platform.audience}
                  </div>

                  <p className="text-sm text-healis-grey leading-relaxed">
                    {platform.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {platform.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-healis-grey">
                        <Check className="w-3.5 h-3.5 text-healis-blue shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#F3F5F8] hover:bg-healis-blue text-healis-dark hover:text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-pill transition-all duration-300 self-start"
                >
                  <span>Explore {platform.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: AUTONOMOUS AI SPECIALIST AGENTS ── */}
        <section className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              02 // NEURAL AGENTS
            </span>
            <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
              Autonomous AI <span className="text-healis-blue">Specialist Agents</span>
            </h2>
            <p className="text-sm sm:text-base text-healis-grey leading-relaxed">
              Specialized neural models handling front desk calls, recruitment, outbound patient care, and consultation advisory 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Agent Image Header */}
                <div className="relative aspect-[4/3.8] bg-slate-900 overflow-hidden">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white px-2.5 py-1 rounded-full shadow-sm">
                    {agent.badge}
                  </span>
                  <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-healis-blue bg-black/60 px-2 py-0.5 rounded">
                    {agent.mod}
                  </span>
                </div>

                {/* Agent Body */}
                <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-exo text-xl font-bold text-healis-dark">
                      {agent.name}<span className="text-xs align-super font-normal text-slate-400">™</span>
                    </h3>
                    <div className="text-xs font-semibold text-healis-blue">
                      {agent.role}
                    </div>
                    <p className="text-xs text-healis-grey leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {agent.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3 h-3 text-healis-blue shrink-0" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: ENTERPRISE CAPABILITIES CARD ── */}
        <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-14 border border-black/5 shadow-sm space-y-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              03 // CLINICAL SYSTEMS
            </span>
            <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
              Enterprise Healthcare <span className="text-healis-blue">Capabilities &amp; Infrastructure</span>
            </h2>
            <p className="text-sm sm:text-base text-healis-grey">
              End-to-end automation architectures powering modern medical practices, physiotherapy clinics, and healthcare networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#F8F9FB] p-6 space-y-3 border border-black/5 hover:bg-slate-100/80 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-healis-blue text-white flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-exo text-lg font-bold text-healis-dark">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-healis-grey leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Metric Bar */}
          <div className="pt-6 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-healis-dark font-exo">
                  24/7 / 365
                </div>
                <div className="text-xs text-healis-grey font-medium">Continuous Clinic Operations</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-healis-dark font-exo">
                  15,000+
                </div>
                <div className="text-xs text-healis-grey font-medium">Suburbs Screened Daily</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-healis-dark font-exo">
                  Sydney • SF
                </div>
                <div className="text-xs text-healis-grey font-medium">Global Support Hubs</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://jobgen.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-pill transition-all duration-300 shadow-sm"
              >
                <span>Visit JobGen.ai</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#F3F5F8] hover:bg-healis-dark hover:text-white text-healis-dark text-xs sm:text-sm font-semibold px-6 py-3 rounded-pill transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-healis-blue" />
                <span>Book Practice Consultation</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: REFERRAL & PARTNER NETWORK CTA ── */}
        <section className="rounded-[2.5rem] bg-[#0A0F17] text-white p-8 sm:p-12 lg:p-14 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-healis-blue text-white flex items-center justify-center shadow-md">
              <Handshake className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              04 // CLINICAL COLLABORATION
            </span>

            <h3 className="font-exo text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Join Our Referral <span className="text-healis-blue">&amp; Partner Network</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We collaborate with general practitioners, orthopedic surgeons, sports clubs, corporate wellness teams, and health technology innovators to provide seamless, integrated patient outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-pill transition-all duration-300 shadow-sm"
              >
                <span>Inquire About Partnership</span>
                <Calendar className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-pill border border-white/15 transition-all duration-300"
              >
                <span>Return to Home Page</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
