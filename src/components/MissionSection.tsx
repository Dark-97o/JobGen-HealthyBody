import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Award } from 'lucide-react';

interface MissionSectionProps {
  onSelectAbout: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onSelectAbout }) => {
  return (
    <section className="min-h-screen flex items-center py-20 sm:py-24 bg-[#FAF6EE] border-y border-[#E8E1D3]">
      <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl border-4 border-white aspect-[4/3] relative">
              <img
                src="https://www.thehealthybodycompany.com.au/wp-content/uploads/2024/05/our-team-The-Healthy-Body-2304035597.jpg"
                alt="The Healthy Body Company allied health team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-normal text-healis-dark tracking-tight leading-[1.25] sm:leading-[1.2]">
              Dedicated to your health and <span className="text-healis-blue font-medium">well-being</span>
            </h2>

            <p className="text-base sm:text-lg text-healis-grey font-normal leading-relaxed">
              Our mission is to provide exceptional healthcare tailored to your needs. We are committed to fostering a healthier community through compassionate hands-on care, active rehabilitation, and continuous clinical mentoring.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-healis-dark">
              <span className="flex items-center gap-1.5 bg-[#F8F9FB] px-3.5 py-2 rounded-xl border border-black/5">
                <Award className="w-4 h-4 text-healis-blue" />
                26+ Years of Practice
              </span>
              <span className="flex items-center gap-1.5 bg-[#F8F9FB] px-3.5 py-2 rounded-xl border border-black/5">
                <ShieldCheck className="w-4 h-4 text-healis-blue" />
                APA Accredited Practice
              </span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onSelectAbout}
                className="inline-flex items-center gap-2 bg-healis-blue hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:scale-[0.975]"
              >
                <span>Learn more about us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
