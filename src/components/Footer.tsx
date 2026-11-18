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
        {/* Navigation Columns Grid with High-Visibility Lines & Interactive Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-0">
          {/* 1. LEARN (2 Sub-Columns) */}
          <div className="md:col-span-12 lg:col-span-4 lg:pr-10 lg:border-r-2 lg:border-[#4EA3B0]/60">
            <h3 className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.24em] text-[#7FE7F3] mb-6 drop-shadow-sm">
              LEARN
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('blog')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>What's New</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenBooking) onOpenBooking();
                        else navigate('services');
                      }}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Getting Started</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenBooking) onOpenBooking();
                        else navigate('services');
                      }}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Free Courses</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('blog')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Browse Articles</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('services')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Indexing</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. GENERAL (3 Sub-Columns) */}
          <div className="md:col-span-12 lg:col-span-5 lg:px-10 lg:border-r-2 lg:border-[#4EA3B0]/60">
            <h3 className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.24em] text-[#7FE7F3] mb-6 drop-shadow-sm">
              GENERAL
            </h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('about')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>About</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('services')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Give Back</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('careers')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Careers</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('blog')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Blog</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('locations')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Press</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('team')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Labs</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('locations')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Store</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('about')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Privacy</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => navigate('faqs')}
                      className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>Terms</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. RESOURCES (1 Sub-Column) */}
          <div className="md:col-span-12 lg:col-span-3 lg:pl-10">
            <h3 className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.24em] text-[#7FE7F3] mb-6 drop-shadow-sm">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenBooking) onOpenBooking();
                    else navigate('locations');
                  }}
                  className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Ask for Help</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('team')}
                  className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Archivists</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('careers')}
                  className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-semibold text-[15px] sm:text-[16px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Developers</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-teal-100/90">
          <p className="leading-relaxed">
            <span className="font-semibold text-white">© 2026 The Healthy Body Company</span>
            <span className="mx-2 text-teal-200/50">·</span>
            <span>A service dedicated to helping you love the body you live in</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
