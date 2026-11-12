import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from 'lucide-react';
import { REAL_CLINICS } from '../data/thbcData';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'locations', label: 'Location' },
    { id: 'team', label: 'Doctors' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Strip */}
      <div className="bg-[#111111] text-slate-300 text-[11px] py-1.5 px-6 border-b border-white/5 hidden md:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-normal text-slate-300">
              Penrith • Caringbah • Jordan Springs • Mount Annan • Est. 1998
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Instant HICAPS Private Health Rebates</span>
            <span className="text-slate-600">|</span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocationDropdown(!locationDropdown)}
                className="flex items-center gap-1.5 text-white font-medium hover:text-healis-blue transition-colors"
              >
                <Phone className="w-3 h-3 text-healis-blue" />
                <span>Call Practice</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {locationDropdown && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white text-slate-800 shadow-2xl border border-black/5 p-2 z-50">
                  {REAL_CLINICS.map((clinic) => (
                    <a
                      key={clinic.id}
                      href={`tel:${clinic.phone.replace(/[^0-9]/g, '')}`}
                      className="block p-2.5 rounded-xl hover:bg-stone-50 transition-colors text-left"
                    >
                      <div className="font-semibold text-xs text-healis-dark">{clinic.suburb}</div>
                      <div className="text-[11px] text-healis-grey font-mono">{clinic.phone}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF6EE]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-black/5'
            : 'bg-[#FAF6EE]/90 backdrop-blur-sm py-4 border-b border-black/5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src="https://www.thehealthybodycompany.com.au/wp-content/themes/thbc/static/images/thbc-logo-blue.png"
              alt="The Healthy Body Company"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm lg:text-[15px] font-medium tracking-normal text-healis-grey">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onSelectTab(link.id)}
                className={`py-1 relative transition-colors ${
                  currentTab === link.id
                    ? 'text-healis-blue font-semibold'
                    : 'text-healis-dark hover:text-healis-blue'
                }`}
              >
                <span>{link.label}</span>
                {currentTab === link.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-healis-blue rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-pill bg-healis-blue hover:bg-black text-white text-sm font-medium tracking-normal transition-all duration-300 hover:scale-[0.975] active:scale-95 shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-healis-dark"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-b border-black/5 px-6 py-6 space-y-4 shadow-xl"
            >
              <div className="flex flex-col space-y-2 text-sm font-medium text-healis-dark">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => {
                      onSelectTab(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left py-2 px-3 rounded-xl transition-colors ${
                      currentTab === link.id
                        ? 'bg-healis-blue text-white font-semibold'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-pill bg-healis-blue text-white text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Book Initial Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
