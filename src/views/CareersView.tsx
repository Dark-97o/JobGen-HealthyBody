import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';

export const CareersView: React.FC = () => {
  const [selectedSuburb, setSelectedSuburb] = useState<string>('All');

  const values = [
    {
      num: '01',
      title: 'Compassion',
      description:
        'Creating a space in which every patient feels heard, understood, and supported on their path to wellness — and treating one another the same way.',
      icon: HeartHandshake,
    },
    {
      num: '02',
      title: 'Empowerment & Growth',
      description:
        'Equipping our clinicians with the competencies, mentoring, and confidence they need to excel while helping patients take control of their health.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Integrity First',
      description:
        'Upholding the highest standards of ethical clinical practice, openness, and trust in every interaction with patients and colleagues.',
      icon: CheckCircle2,
    },
    {
      num: '04',
      title: 'Excellence & Collaboration',
      description:
        'Accurate diagnosis via clinical reasoning, working closely alongside fellow physiotherapists, GPs, and specialists to achieve outstanding results.',
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: 'Competitive Remuneration',
      stat: 'Salary + Incentives',
      description:
        'We value our people and reward your clinical dedication with generous base remuneration plus clear performance incentives.',
      icon: Award,
    },
    {
      title: 'Ongoing Development',
      stat: '50% Courses Covered',
      description:
        'We cover 50% of all extended learning education and post-graduate courses, paving a clear pathway for your career progression.',
      icon: GraduationCap,
    },
    {
      title: 'Structured Graduate Program',
      stat: 'Weekly Mentoring',
      description:
        '45-minute initial consultations, shadowed assessments, regular in-house PD workshops, and 1-on-1 guidance from practice principals.',
      icon: Briefcase,
    },
  ];

  const openings = [
    {
      role: 'Physiotherapist (Full-Time / Part-Time)',
      suburb: 'Penrith',
      locations: 'Penrith & Jordan Springs',
      type: 'Experienced & Mid-Career',
      summary:
        'Join a collaborative musculoskeletal and sports clinic featuring a private rehab gym, varied caseload, and weekly clinical mentoring.',
    },
    {
      role: '2026/2027 Graduate Physiotherapist',
      suburb: 'Jordan Springs',
      locations: 'Jordan Springs & Mount Annan',
      type: 'Graduate Program',
      summary:
        'Supported transition into private practice with 45-minute initial appointments, structured clinical mentoring, and 50% PD course funding.',
    },
    {
      role: 'Musculoskeletal & Sports Physiotherapist',
      suburb: 'Mount Annan',
      locations: 'Mount Annan',
      type: 'Full-Time',
      summary:
        'Work with active families, local sporting clubs, and post-operative patients in our modern Mount Annan clinic and rehab studio.',
    },
    {
      role: 'Remedial Massage Therapist',
      suburb: 'Caringbah',
      locations: 'Caringbah Practice',
      type: 'Part-Time / Casual',
      summary:
        'Collaborate alongside our Caringbah physiotherapy team in private heated rooms supporting athletes, runners, and everyday recovery.',
    },
  ];

  const suburbs = ['All', 'Penrith', 'Jordan Springs', 'Mount Annan', 'Caringbah'];
  const filteredOpenings =
    selectedSuburb === 'All'
      ? openings
      : openings.filter((job) => job.locations.includes(selectedSuburb));

  return (
    <div className="pt-32 pb-24 bg-[#F8F9FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-20">
        {/* Editorial Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-14 border border-black/5 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F3F5F8] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-healis-blue">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Careers &amp; Graduate Program</span>
            </div>

            <h1 className="font-exo text-4xl sm:text-5xl lg:text-6xl font-bold text-healis-dark tracking-tight leading-[1.06]">
              Come work <span className="text-healis-blue">with us.</span>
            </h1>

            <p className="text-base sm:text-lg text-healis-grey leading-relaxed max-w-2xl">
              With a deep learning culture and a focus on mentoring, we know that the more highly skilled our team is, the greater the impact we can have on our community.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:admin@thehealthybodycompany.com.au?subject=Career%20Application%20-%20The%20Healthy%20Body%20Company"
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Send Your CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-[#F3F5F8] hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300"
              >
                <span>View Open Roles</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3.6] shadow-md border border-black/5 bg-slate-100">
              <img
                src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/05/our-team-The-Healthy-Body-2304035597.jpg"
                alt="The Healthy Body Company clinical team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Dark High-Contrast "Why Work With Us?" Bento Showcase */}
        <section className="bg-[#0B0F17] text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-14 space-y-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-healis-blue">
                Clinician Support &amp; Growth
              </span>
              <h2 className="font-exo text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Why Work <span className="text-healis-blue">With Us?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Our mission is to nurture and develop every team member to achieve their full professional potential across our 4 Sydney clinics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/[0.04] border border-white/10 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-healis-blue text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-healis-blue bg-healis-blue/10 px-3 py-1 rounded-full">
                      {b.stat}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-exo text-xl font-bold text-white">
                      {b.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Values We Live By (Numbered 01-04 Editorial Grid) */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
                The Values We Live By
              </h2>
              <p className="text-sm sm:text-base text-healis-grey">
                More than a group of physiotherapy clinics — we are a thriving team dedicated to excellence, compassion, and growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.num}
                  className="bg-white rounded-[2rem] p-8 border border-black/5 shadow-xs flex items-start gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3F5F8] text-healis-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      {val.num}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-exo text-xl font-bold text-healis-dark">
                      {val.title}
                    </h3>
                    <p className="text-sm text-healis-grey leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Opportunities with Suburb Filter */}
        <section id="openings" className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
                Current Opportunities
              </h2>
              <p className="text-sm sm:text-base text-healis-grey">
                Filter roles by clinic location or send an expression of interest anytime.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {suburbs.map((suburb) => (
                <button
                  key={suburb}
                  type="button"
                  onClick={() => setSelectedSuburb(suburb)}
                  className={`px-4 py-2 rounded-pill text-xs font-medium transition-all ${
                    selectedSuburb === suburb
                      ? 'bg-healis-blue text-white shadow-sm'
                      : 'bg-white text-healis-dark border border-black/10 hover:bg-slate-50'
                  }`}
                >
                  {suburb}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-8 border border-black/5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider bg-healis-blue/10 text-healis-blue px-3.5 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-healis-grey font-medium">
                      <MapPin className="w-3.5 h-3.5 text-healis-blue" />
                      <span>{job.locations}</span>
                    </span>
                  </div>

                  <h3 className="font-exo text-xl sm:text-2xl font-bold text-healis-dark">
                    {job.role}
                  </h3>

                  <p className="text-sm text-healis-grey leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <a
                  href={`mailto:admin@thehealthybodycompany.com.au?subject=${encodeURIComponent(`Application: ${job.role}`)}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#F3F5F8] hover:bg-healis-blue text-healis-dark hover:text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-pill transition-all duration-300 self-start"
                >
                  <span>Apply via Email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
