import React from 'react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking?: () => void;
  isHome?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking, isHome = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (tab: string) => {
    onSelectTab(tab);
    scrollToTop();
  };

  return (
    <footer className={`relative ${isHome ? 'bg-white' : 'bg-[#F8F9FB]'} text-white overflow-hidden pt-40 sm:pt-52 md:pt-60 lg:pt-68 pb-12 sm:pb-14`}>
      {/* Scenic Mountain Landscape & Family Silhouette Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-cover pointer-events-none"
        style={{ backgroundImage: `url('/images/footer-landscape-hd.jpg')` }}
      />

      {/* Top Blend Overlay for Sub-Pages (Seamlessly melts with the previous section's #F8F9FB background) */}
      {!isHome && (
        <div
          className="absolute inset-x-0 top-0 h-32 sm:h-44 bg-gradient-to-b from-[#F8F9FB] via-[#F8F9FB]/80 to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />
      )}

      {/* Subtle Lower-Third Shading Gradient (leaving mountains, sky and silhouettes clear) */}
      <div className="absolute inset-x-0 bottom-0 top-[45%] bg-gradient-to-b from-transparent via-[#02181d]/35 to-[#011215]/75 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 space-y-8 sm:space-y-10">
        {/* Navigation Card Container with Increased Transparency */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#02181d]/35 backdrop-blur-sm p-6 sm:p-8 md:p-9 lg:p-10 border border-[#5CE1E6]/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-0">
            {/* 1. LEARN (2 Sub-Columns) */}
            <div className="md:col-span-12 lg:col-span-4 lg:pr-8 lg:border-r lg:border-[#5CE1E6]/30">
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#7FE7F3] mb-4">
                LEARN
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <div>
                  <ul className="space-y-2.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('blog')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
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
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
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
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Free Courses</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('blog')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Browse Articles</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('services')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
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
            <div className="md:col-span-12 lg:col-span-5 lg:px-8 lg:border-r lg:border-[#5CE1E6]/30">
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#7FE7F3] mb-4">
                GENERAL
              </h3>
              <div className="grid grid-cols-3 gap-x-5 gap-y-3">
                <div>
                  <ul className="space-y-2.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('about')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>About</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('services')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Give Back</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('careers')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Careers</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('partners')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Partners</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('blog')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Blog</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('locations')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Press</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('team')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Labs</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('locations')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Store</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('about')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>Privacy</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => navigate('faqs')}
                        className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
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
            <div className="md:col-span-12 lg:col-span-3 lg:pl-8">
              <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#7FE7F3] mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenBooking) onOpenBooking();
                      else navigate('locations');
                    }}
                    className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Ask for Help</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('team')}
                    className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Archivists</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('partners')}
                    className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Technology Partners</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('careers')}
                    className="group flex items-center gap-2 text-white hover:text-[#5CE1E6] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:translate-x-1 text-left py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Developers</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="pt-2 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-teal-100/80">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 leading-relaxed">
            <p>
              <span className="font-semibold text-white">© 2026 The Healthy Body Company</span>
              <span className="mx-2 text-teal-200/50">·</span>
              <span>A service dedicated to helping you love the body you live in</span>
            </p>
          </div>

          {/* Powered by Jobgen (Replaces Back to top on the right) */}
          <a
            href="#partners"
            onClick={(e) => {
              e.preventDefault();
              navigate('partners');
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all hover:scale-105 group shrink-0"
            title="Technology Partner — Powered by JOBGEN.AI"
          >
            <span className="text-teal-100/90 font-medium">Powered by</span>
            <img
              src="/jobgen-logo.webp"
              alt="JobGen Logo"
              className="w-4 h-4 object-contain brightness-0 invert group-hover:brightness-100 transition-all"
            />
            <span className="text-[#5CE1E6] font-bold tracking-wide">JOBGEN.AI</span>
          </a>
        </div>

        {/* Big Glowing Company Name Below Copyright Bar */}
        <div className="pt-10 sm:pt-14 pb-2 flex justify-center items-center w-full overflow-hidden select-none">
          <h2 className="footer-brand-title font-exo font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[132px] leading-[0.92] text-center cursor-default">
            The Healthy Body
          </h2>
        </div>
      </div>
    </footer>
  );
};
