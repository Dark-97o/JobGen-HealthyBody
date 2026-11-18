import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  PhoneCall,
  Layers,
  Database,
  ShieldCheck,
  Code2,
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
      role: 'Outbound Patient Care',
      description:
        'Pre-screens patient inquiries, answers service questions, and syncs consultations directly with clinic diaries.',
      avatar: '/images/partners/olivia.png',
    },
    {
      name: 'JENNY',
      role: 'Enterprise Voice Receptionist',
      description:
        'Answers practice calls on ring one 24/7, handles FAQs, and routes urgent clinical matters to practitioners.',
      avatar: '/images/partners/jenny.png',
    },
    {
      name: 'JESS',
      role: 'Clinical Talent Screener',
      description:
        'Automates talent screening, qualification checks, and applicant shortlisting for allied health roles.',
      avatar: '/images/partners/jess.png',
    },
    {
      name: 'EMMA',
      role: 'Patient Onboarding Specialist',
      description:
        'Guides new patient onboarding, recovery milestone check-ins, and practitioner professional workflows.',
      avatar: '/images/partners/emma.png',
    },
  ];

  const platforms = [
    {
      name: 'JOBGEN.AI',
      category: 'Enterprise Healthcare AI',
      desc: 'Automates patient calls, calendar bookings, and PMS integrations 24/7 with zero missed inquiries.',
      link: 'https://jobgen.ai/',
    },
    {
      name: 'JOBGEN.IO',
      category: 'Healthcare Talent Tech',
      desc: 'AI-driven clinician recruitment, automated resume tailoring, and interactive interview coaching.',
      link: 'https://jobgen.io/',
    },
    {
      name: 'CONNECTGEN.AI',
      category: 'Digital Growth Systems',
      desc: 'High-performance healthcare web applications, digital portals, and patient acquisition funnels.',
      link: 'https://connectgen.ai/',
    },
  ];

  const capabilities = [
    {
      icon: Database,
      title: 'PMS & Diary Sync',
      desc: 'Bi-directional integration with Cliniko, Nookal, Google Calendar, and medical diaries.',
    },
    {
      icon: Layers,
      title: 'Spatial Demand Analytics',
      desc: 'Demographic healthcare trend mapping across 15,000+ suburbs to optimize practice locations.',
    },
    {
      icon: ShieldCheck,
      title: 'Failsafe Human Handover',
      desc: 'Complex clinical inquiries instantly transfer to senior physiotherapists with live call summaries.',
    },
    {
      icon: Code2,
      title: 'Custom Web & AI Engineering',
      desc: 'Secure HIPAA-ready medical web platforms and continuous autonomous voice model tuning.',
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
          <span className="text-healis-dark font-semibold">Technology Partner</span>
        </div>

        {/* ── SECTION 1: HERO SPOTLIGHT (POWERED BY JOBGEN) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.5rem] bg-[#0A0F17] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-healis-blue/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-healis-blue/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="space-y-5 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-healis-blue block">
                Strategic AI &amp; Technology Partner
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <img
                  src="/jobgen-logo.png"
                  alt="JobGen Logo"
                  className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
                />
                <h1 className="font-exo text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  POWERED BY <span className="text-healis-blue">JOBGEN.AI</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Autonomous voice receptionists, neural appointment scheduling, and clinical triage automation across our 4 Greater Sydney clinics.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://jobgen.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-healis-blue hover:bg-white text-white hover:text-healis-dark text-sm font-semibold px-7 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.98] shadow-lg shadow-healis-blue/25"
                >
                  <span>Visit JobGen.ai</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-pill border border-white/15 transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4 text-healis-blue" />
                  <span>Inquire About Integration</span>
                </button>
              </div>
            </div>

            {/* Right Stat Block */}
            <div className="lg:w-80 rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-7 space-y-4 shrink-0">
              <div>
                <div className="text-3xl font-extrabold text-white font-exo">24/7 / 365</div>
                <div className="text-xs uppercase tracking-wider text-healis-blue font-semibold mt-0.5">
                  Autonomous Operations
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Sydney Hub</span>
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
            </div>
          </div>
        </motion.div>

        {/* ── SECTION 2: AUTONOMOUS ECOSYSTEM ── */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              01 // ECOSYSTEM
            </span>
            <h2 className="font-exo text-2xl sm:text-3xl font-bold text-healis-dark tracking-tight">
              Inside JobGen <span className="text-healis-blue">Autonomous Ecosystem</span>
            </h2>
            <p className="text-xs sm:text-sm text-healis-grey">
              Headquartered in Sydney (60 Martin Place) and San Francisco (580 California St).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-7 border border-black/5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-exo text-xl font-bold text-healis-dark">
                      {p.name}
                    </h3>
                    <span className="text-xs font-bold text-healis-blue">
                      {p.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-healis-grey leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-healis-blue hover:text-healis-dark transition-colors self-start"
                >
                  <span>Explore {p.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: AUTONOMOUS AI SPECIALIST AGENTS ── */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              02 // NEURAL AGENTS
            </span>
            <h2 className="font-exo text-2xl sm:text-3xl font-bold text-healis-dark tracking-tight">
              Autonomous AI <span className="text-healis-blue">Specialist Agents</span>
            </h2>
            <p className="text-xs sm:text-sm text-healis-grey">
              Specialized neural models operating 24/7 across clinical front desk, recruitment, and patient workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Agent Image Header (Clean, No Pills) */}
                <div className="relative aspect-[4/3.8] bg-slate-900 overflow-hidden">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Agent Body */}
                <div className="p-6 space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-exo text-lg font-bold text-healis-dark">
                      {agent.name}
                    </h3>
                    <span className="text-xs font-bold text-healis-blue">
                      Active 24/7
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-700">
                    {agent.role}
                  </div>

                  <p className="text-xs text-healis-grey leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: ENTERPRISE CAPABILITIES ── */}
        <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-black/5 shadow-xs space-y-8">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue">
              03 // INFRASTRUCTURE
            </span>
            <h2 className="font-exo text-2xl sm:text-3xl font-bold text-healis-dark tracking-tight">
              Enterprise Healthcare <span className="text-healis-blue">Capabilities</span>
            </h2>
            <p className="text-xs sm:text-sm text-healis-grey">
              End-to-end automation architectures powering modern medical practices and physiotherapy clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#F8F9FB] p-6 space-y-2.5 border border-black/5 hover:bg-slate-100/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-healis-blue text-white flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-exo text-base font-bold text-healis-dark">
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
          <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8 sm:gap-10">
              <div>
                <div className="text-2xl font-extrabold text-healis-dark font-exo">
                  24/7 / 365
                </div>
                <div className="text-xs text-healis-grey font-medium">Continuous Clinic Operations</div>
              </div>
              <div className="h-6 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="text-2xl font-extrabold text-healis-dark font-exo">
                  15,000+
                </div>
                <div className="text-xs text-healis-grey font-medium">Suburbs Screened Daily</div>
              </div>
              <div className="h-6 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="text-2xl font-extrabold text-healis-dark font-exo">
                  Sydney • SF
                </div>
                <div className="text-xs text-healis-grey font-medium">Global Technology Hubs</div>
              </div>
            </div>

            <a
              href="https://jobgen.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-xs font-semibold px-6 py-3 rounded-pill transition-all duration-300 shadow-sm"
            >
              <span>Visit JobGen.ai</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── SECTION 5: PARTNER NETWORK CTA ── */}
        <section className="rounded-[2.5rem] bg-[#0A0F17] text-white p-8 sm:p-12 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-healis-blue block">
              04 // COLLABORATION
            </span>

            <h3 className="font-exo text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Partner with <span className="text-healis-blue">Our Network</span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              We collaborate with general practitioners, orthopedic surgeons, sports clubs, and healthcare innovators for seamless patient outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
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
