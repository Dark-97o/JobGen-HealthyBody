import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Users,
} from 'lucide-react';
import { REAL_CLINICS } from '../data/thbcData';

export const CareersView: React.FC = () => {
  const values = [
    {
      title: 'Compassion',
      description:
        'Creating a space in which every patient feels heard, understood, and supported on their path to wellness — and treating one another the same way.',
      icon: HeartHandshake,
    },
    {
      title: 'Empowerment & Growth',
      description:
        'Equipping our clinicians with the skills, mentoring, and confidence to excel while helping patients take control of their long-term physical well-being.',
      icon: BookOpen,
    },
    {
      title: 'Integrity First',
      description:
        'Upholding the highest standards of ethical clinical practice, openness, and trust across every patient, team, and community interaction.',
      icon: CheckCircle2,
    },
    {
      title: 'Excellence & Collaboration',
      description:
        'Accurate diagnosis via clinical reasoning, working closely alongside fellow physiotherapists, GPs, and specialists to achieve outstanding outcomes.',
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: 'Competitive Remuneration',
      description:
        'Salary plus performance incentives that recognize your clinical dedication and patient outcomes.',
      icon: Award,
    },
    {
      title: '50% Continuing Education',
      description:
        'We cover 50% of all extended learning education and post-graduate courses to support your career progression.',
      icon: GraduationCap,
    },
    {
      title: 'Structured Graduate Program',
      description:
        'Dedicated 1-on-1 clinical mentoring, weekly case reviews, and hands-on workshops with senior practice leaders.',
      icon: Briefcase,
    },
  ];

  const openings = [
    {
      role: 'Physiotherapist (Full-Time / Part-Time)',
      locations: 'Penrith & Jordan Springs',
      type: 'Experienced & Mid-Career',
      summary:
        'Join a collaborative musculoskeletal and sports clinic with an on-site rehab gym, varied caseload, and weekly clinical mentoring.',
    },
    {
      role: '2026/2027 Graduate Physiotherapist',
      locations: 'Mount Annan & Caringbah',
      type: 'Graduate Program',
      summary:
        'Supported transition into private practice featuring 45-minute initial consultations, shadowed assessments, and PD funding.',
    },
    {
      role: 'Remedial Massage Therapist',
      locations: 'Penrith & Caringbah',
      type: 'Part-Time / Casual',
      summary:
        'Work alongside our physiotherapy team in heated private treatment rooms supporting athletes, runners, and everyday recovery.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F8F9FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-20">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-black/5 text-xs font-semibold uppercase tracking-wider text-healis-blue shadow-xs">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Careers at The Healthy Body Company</span>
            </div>

            <h1 className="font-exo text-4xl sm:text-5xl lg:text-6xl font-bold text-healis-dark tracking-tight leading-[1.08]">
              Come work <span className="text-healis-blue">with us.</span>
            </h1>

            <p className="text-base sm:text-lg text-healis-grey leading-relaxed max-w-2xl">
              With a deep learning culture and a focus on mentoring, we know that the more highly skilled our team is, the greater the impact we can have on our community.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:admin@thehealthybodycompany.com.au?subject=Career%20Application%20-%20The%20Healthy%20Body%20Company"
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-healis-dark text-white text-sm font-medium px-7 py-3.5 rounded-pill transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Send Your CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-white hover:bg-healis-dark hover:text-white text-healis-dark text-sm font-medium px-7 py-3.5 rounded-pill border border-black/10 transition-all duration-300"
              >
                <span>View Open Roles</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg border-4 border-white bg-white">
              <img
                src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/05/our-team-The-Healthy-Body-2304035597.jpg"
                alt="The Healthy Body Company clinical team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Values We Live By */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
              The Values We Live By
            </h2>
            <p className="text-sm sm:text-base text-healis-grey">
              More than a group of physiotherapy clinics — we are a thriving team dedicated to excellence, compassion, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[2rem] p-7 border border-black/5 shadow-xs space-y-4"
                >
                  <div className="w-11 h-11 rounded-2xl bg-healis-blue/10 text-healis-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-exo text-lg font-semibold text-healis-dark">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-healis-grey leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-black/5 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
              Why Work <span className="text-healis-blue">With Us?</span>
            </h2>
            <p className="text-sm sm:text-base text-healis-grey">
              We nurture and develop every clinician so you can achieve your full professional potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#F8F9FB] p-7 border border-black/5 space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-healis-blue text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-exo text-lg font-semibold text-healis-dark">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-healis-grey leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Opportunities */}
        <section id="openings" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-exo text-3xl sm:text-4xl font-bold text-healis-dark tracking-tight">
                Current Opportunities
              </h2>
              <p className="text-sm sm:text-base text-healis-grey">
                Hiring across our {REAL_CLINICS.length} Greater Sydney clinics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-7 border border-black/5 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider bg-healis-blue/10 text-healis-blue px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <h3 className="font-exo text-xl font-bold text-healis-dark">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-healis-grey font-medium">
                    <MapPin className="w-3.5 h-3.5 text-healis-blue" />
                    <span>{job.locations}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-healis-grey leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <a
                  href={`mailto:admin@thehealthybodycompany.com.au?subject=${encodeURIComponent(`Application: ${job.role}`)}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#F8F9FB] hover:bg-healis-blue text-healis-dark hover:text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-pill border border-black/10 hover:border-healis-blue transition-all duration-300"
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
