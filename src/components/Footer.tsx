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

      {/* Atmospheric Shading Gradient to Guarantee Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#032025]/60 to-[#011417]/95 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1260px] mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">
        {/* Navigation Shaded Scrim Card Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#02181d]/75 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 border border-[#4EA3B0]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-0">
            {/* 1. LEARN (2 Sub-Columns) */}
            <div className="md:col-span-12 lg:col-span-4 lg:pr-10 lg:border-r-2 lg:border-[#5CE1E6]/50">
              <h3
                className="text-[17px] sm:text-[18px] md:text-[19px] font-extrabold uppercase tracking-[0.22em] text-[#7FE7F3] mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
              >
                LEARN
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <ul className="space-y-3.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('blog')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
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
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
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
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Free Courses</span>
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
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Browse Articles</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('services')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Indexing</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. GENERAL (3 Sub-Columns) */}
            <div className="md:col-span-12 lg:col-span-5 lg:px-10 lg:border-r-2 lg:border-[#5CE1E6]/50">
              <h3
                className="text-[17px] sm:text-[18px] md:text-[19px] font-extrabold uppercase tracking-[0.22em] text-[#7FE7F3] mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
              >
                GENERAL
              </h3>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <ul className="space-y-3.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('about')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>About</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('services')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Give Back</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('careers')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Careers</span>
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
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Blog</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('locations')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Press</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('team')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Labs</span>
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
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Store</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('about')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Privacy</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('faqs')}
                        className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Terms</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. RESOURCES (1 Sub-Column) */}
            <div className="md:col-span-12 lg:col-span-3 lg:pl-10">
              <h3
                className="text-[17px] sm:text-[18px] md:text-[19px] font-extrabold uppercase tracking-[0.22em] text-[#7FE7F3] mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
              >
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
                    className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Ask for Help</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('team')}
                    className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Archivists</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('careers')}
                    className="group flex items-center gap-2.5 text-white hover:text-[#5CE1E6] font-bold text-[17px] sm:text-[18px] md:text-[19px] transition-all duration-200 hover:translate-x-1 text-left py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Developers</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[14px] sm:text-[15px] text-teal-100 font-medium">
          <p className="leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            <span className="font-bold text-white">© 2026 The Healthy Body Company</span>
            <span className="mx-2.5 text-teal-300">·</span>
            <span>A service dedicated to helping you love the body you live in</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-[14px] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
