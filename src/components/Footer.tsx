import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-slate-300 pt-16 pb-12 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Logo & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="https://www.thehealthybodycompany.com.au/wp-content/themes/thbc/static/images/thbc-logo-white.png"
              alt="The Healthy Body Company"
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs text-slate-400 font-normal leading-relaxed max-w-sm">
              Established in Penrith in 1998. Dedicated to helping you love the body you live in through expert physical diagnosis, specialist hands-on therapy, and on-site gym rehabilitation.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider font-semibold text-healis-blue">
              <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-slate-300">
                APA Accredited
              </span>
              <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-slate-300">
                AHPRA Registered
              </span>
              <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-slate-300">
                SIRA Approved
              </span>
              <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-slate-300">
                NDIS Registered
              </span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('home');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('services');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('locations');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('team');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Doctors
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('blog');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('faqs');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Clinics 1 & 2 */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Penrith & Caringbah
            </div>
            <div className="text-xs text-slate-400 font-normal space-y-1">
              <span className="font-semibold text-white block">Penrith Flagship</span>
              <span>95 Lethbridge St, Penrith NSW 2750</span>
              <a href="tel:0247225555" className="block text-slate-200 font-mono pt-0.5 hover:text-healis-blue">
                (02) 4722 5555
              </a>
            </div>
            <div className="text-xs text-slate-400 font-normal space-y-1 pt-2">
              <span className="font-semibold text-white block">Caringbah Practice</span>
              <span>Suite 2, 383 Port Hacking Rd, Caringbah NSW 2229</span>
              <a href="tel:0295312000" className="block text-slate-200 font-mono pt-0.5 hover:text-healis-blue">
                (02) 9531 2000
              </a>
            </div>
          </div>

          {/* Clinics 3 & 4 */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Jordan Springs & Mount Annan
            </div>
            <div className="text-xs text-slate-400 font-normal space-y-1">
              <span className="font-semibold text-white block">Jordan Springs</span>
              <span>Unit 9, 65 Water Gum Dr, Jordan Springs NSW 2747</span>
              <a href="tel:0247226994" className="block text-slate-200 font-mono pt-0.5 hover:text-healis-blue">
                (02) 4722 6994
              </a>
            </div>
            <div className="text-xs text-slate-400 font-normal space-y-1 pt-2">
              <span className="font-semibold text-white block">Mount Annan</span>
              <span>Shop 2, 1 Raintree Way, Mount Annan NSW 2567</span>
              <a href="tel:0246228111" className="block text-slate-200 font-mono pt-0.5 hover:text-healis-blue">
                (02) 4622 8111
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div>
            © {new Date().getFullYear()} The Healthy Body Company Pty Ltd. All rights reserved. ABN 84 092 114 742.
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
