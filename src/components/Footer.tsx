import React, { useState, useRef } from 'react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking?: () => void;
  isHome?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking, isHome = true }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
        style={{ backgroundImage: `url('/images/footer-landscape-hd.webp')` }}
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

        {/* Big Glowing Brand Statement: Single Line with Pointer Spotlight Glow in ~10 Radius */}
        <div className="pt-10 sm:pt-14 pb-2 flex justify-center items-center w-full overflow-hidden select-none">
          <div
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative inline-block text-center cursor-default max-w-full"
          >
            {/* Base Layer: Crisp Simple White Text (Single Line, Never Wraps) */}
            <h2 className="font-exo font-black uppercase tracking-tight text-[8vw] xl:text-[116px] leading-none text-white whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] select-none">
              The Healthy Body
            </h2>

            {/* Glowing Layer: Only illuminates within a 10 radius (~110px circle) directly around the pointer */}
            <h2
              aria-hidden="true"
              style={{
                opacity: isHovered ? 1 : 0,
                maskImage: isHovered
                  ? `radial-gradient(circle 110px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 25%, transparent 100%)`
                  : 'none',
                WebkitMaskImage: isHovered
                  ? `radial-gradient(circle 110px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 25%, transparent 100%)`
                  : 'none',
                transition: 'opacity 0.2s ease',
              }}
              className="absolute inset-0 font-exo font-black uppercase tracking-tight text-[8vw] xl:text-[116px] leading-none whitespace-nowrap pointer-events-none select-none text-transparent bg-clip-text bg-gradient-to-r from-[#5CE1E6] via-[#38BDF8] via-[#2DD4BF] to-[#7DBE47] drop-shadow-[0_0_20px_rgba(92,225,230,0.95)] drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]"
            >
              The Healthy Body
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
