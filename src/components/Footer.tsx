import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (tab: string) => {
    onSelectTab(tab);
    scrollToTop();
  };

  return (
    <footer className="relative bg-[#05333a] text-white overflow-hidden pt-44 sm:pt-56 md:pt-64 lg:pt-72 pb-12 sm:pb-16">
      {/* Scenic Mountain Landscape & Family Silhouette Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-cover pointer-events-none"
        style={{ backgroundImage: `url('/images/footer-landscape-hd.jpg')` }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
        {/* Navigation Columns Grid matching the attached image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-0">
          {/* 1. LEARN (2 Sub-Columns) */}
          <div className="md:col-span-12 lg:col-span-4 lg:pr-10 lg:border-r lg:border-white/15">
            <h3 className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#86B4BC] mb-5">
              LEARN
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <div>
                <ul className="space-y-3.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('blog')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      What's New
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenBooking) onOpenBooking();
                        else navigate('services');
                      }}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Getting Started
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenBooking) onOpenBooking();
                        else navigate('services');
                      }}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Free Courses
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('blog')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Browse Articles
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('services')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Indexing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. GENERAL (3 Sub-Columns) */}
          <div className="md:col-span-12 lg:col-span-5 lg:px-10 lg:border-r lg:border-white/15">
            <h3 className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#86B4BC] mb-5">
              GENERAL
            </h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3.5">
              <div>
                <ul className="space-y-3.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('about')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('services')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Give Back
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('careers')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Careers
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('blog')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('locations')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Press
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('team')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Labs
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('locations')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Store
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('about')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Privacy
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('faqs')}
                      className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                    >
                      Terms
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. RESOURCES (1 Sub-Column) */}
          <div className="md:col-span-12 lg:col-span-3 lg:pl-10">
            <h3 className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#86B4BC] mb-5">
              RESOURCES
            </h3>
            <ul className="space-y-3.5">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenBooking) onOpenBooking();
                    else navigate('locations');
                  }}
                  className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                >
                  Ask for Help
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('team')}
                  className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                >
                  Archivists
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('careers')}
                  className="text-white hover:text-[#A6E0E9] font-medium text-[14px] sm:text-[15px] transition-colors text-left"
                >
                  Developers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Attribution Bar matching the image */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-teal-100/75">
          <p className="leading-relaxed">
            <span className="font-semibold text-white">© 2026 The Healthy Body Company</span>
            <span className="mx-2 text-teal-200/40">·</span>
            <span>A service dedicated to helping you love the body you live in</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-teal-200/80 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
