import React from 'react';
import { 
  Activity, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-slate-300 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-forest-900/80">
          {/* Brand Mission & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-emerald-300 flex items-center justify-center shadow-md">
                <Activity className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">
                  The Healthy Body Company
                </span>
                <span className="block text-[11px] text-emerald-300/80 uppercase font-semibold">
                  Helping You Love the Body You Live In
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Established in Penrith in 1998, The Healthy Body Company is a patient-centric allied health and physiotherapy practice group. We deliver evidence-based recovery protocols, sports rehabilitation, and clinical exercise physiology across Sydney.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-emerald-300/90 font-medium">
              <span className="bg-forest-900/80 px-2.5 py-1 rounded-md border border-forest-800">
                APA Accredited Practice
              </span>
              <span className="bg-forest-900/80 px-2.5 py-1 rounded-md border border-forest-800">
                AHPRA Registered
              </span>
              <span className="bg-forest-900/80 px-2.5 py-1 rounded-md border border-forest-800">
                SIRA Workers Comp
              </span>
            </div>
          </div>

          {/* Quick Clinic 1 & 2 */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Penrith (Flagship)
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">95 Lethbridge Street</p>
              <p>Penrith NSW 2750</p>
              <p className="text-emerald-300 pt-1 font-mono">(02) 4722 5555</p>
            </div>

            <div className="pt-4 text-xs font-bold uppercase tracking-wider text-emerald-400">
              Caringbah Practice
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">Suite 2, 383 Port Hacking Rd</p>
              <p>Caringbah NSW 2229</p>
              <p className="text-emerald-300 pt-1 font-mono">(02) 9524 4400</p>
            </div>
          </div>

          {/* Quick Clinic 3 & 4 */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Jordan Springs
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">63 Watergum Drive</p>
              <p>Jordan Springs NSW 2747</p>
              <p className="text-emerald-300 pt-1 font-mono">(02) 4702 0222</p>
            </div>

            <div className="pt-4 text-xs font-bold uppercase tracking-wider text-emerald-400">
              Mount Annan
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">Shop 17, Mount Annan Central</p>
              <p>Mount Annan NSW 2567</p>
              <p className="text-emerald-300 pt-1 font-mono">(02) 4647 8880</p>
            </div>
          </div>

          {/* Clinical Navigation & Disclaimer */}
          <div className="space-y-3 text-xs">
            <div className="font-bold uppercase tracking-wider text-emerald-400">
              Clinical Hub
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#interactive-body-map" className="hover:text-white transition-colors">
                  3D Biomechanical Body Map
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sports & Spine Therapy
                </a>
              </li>
              <li>
                <a href="#recovery-protocols" className="hover:text-white transition-colors">
                  Evidence-Based Milestones
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Clinic Hours & Parking
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Our Allied Health Team
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-900 text-slate-300 hover:text-white text-[11px] font-semibold border border-forest-800 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Medical Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} The Healthy Body Company Pty Ltd. All rights reserved. ABN 84 092 114 742.
          </div>

          <div className="text-center md:text-right max-w-xl text-slate-500">
            Clinical Disclaimer: Information presented on this website is intended for educational purposes and does not substitute for personalized clinical diagnosis by a registered physiotherapist or medical doctor.
          </div>
        </div>
      </div>
    </footer>
  );
};
