import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, Target, Award, ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  const values = [
    {
      title: 'Compassion',
      desc: 'We listen carefully, understand your limitations, and provide empathy at every stage of recovery.',
      icon: Heart,
    },
    {
      title: 'Empowerment',
      desc: 'We give you the knowledge, exercises, and autonomy to take control of your long-term physical health.',
      icon: Users,
    },
    {
      title: 'Integrity',
      desc: 'Transparent diagnoses, clear treatment plans, and zero unnecessary treatments or sales pressure.',
      icon: ShieldCheck,
    },
    {
      title: 'Excellence',
      desc: 'Continuous professional clinical development, modern technology, and evidence-based medicine.',
      icon: Award,
    },
    {
      title: 'Collaboration',
      desc: 'Working closely with you, your family, your GP, and specialist surgeons for seamless care.',
      icon: Target,
    },
  ];

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-3">
            Since 1998
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal text-healis-dark tracking-tight leading-[1.2] sm:leading-[1.18]">
            Helping you love <br />
            <span className="text-healis-blue font-medium">
              the body you live in
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            From our founding clinic in Penrith in 1998, The Healthy Body Company has grown organically into a multi-practice allied health network serving thousands of families across Sydney.
          </p>
        </motion.div>

        {/* Narrative & Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-slate-700 font-light leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
              Our Clinical Philosophy
            </h2>
            <p>
              When Jude Holroyd founded the practice, the vision was clear: to create an allied health business where patients are treated like family, and where clinicians have the mentoring, resources, and time to deliver their best work.
            </p>
            <p>
              We firmly believe physical health is the foundation of a joyful, active life. Whether you are dealing with chronic lower back pain from long desk hours, recovering from an ACL reconstruction, or learning to navigate Parkinson’s or joint arthritis, our team is in your corner.
            </p>
            <p>
              Every clinic is purpose-designed with private treatment suites alongside fully-equipped rehabilitation gyms so you transition seamlessly from hands-on pain relief to active, long-term physical resilience.
            </p>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-xl border-4 border-white">
            <img
              src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/05/our-team-The-Healthy-Body-2304035597.jpg"
              alt="The Healthy Body Company Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-2">
              Our Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-healis-dark tracking-tight leading-[1.25]">
              Values that guide our <span className="text-healis-blue font-medium">care</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-[2rem] p-6 border border-black/5 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-healis-blue/10 text-healis-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-healis-dark">{v.title}</h3>
                  <p className="text-xs text-healis-grey font-normal leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-healis-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-normal">Experience the difference in person</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
              Initial sessions are 45 minutes of thorough assessment and hands-on therapy.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-pill bg-healis-blue text-white font-medium text-xs tracking-normal hover:bg-black transition-all flex items-center gap-2 flex-shrink-0 relative z-10 shadow-md hover:scale-[0.98]"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
