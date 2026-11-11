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
    { id: 'locations', label: 'Locations' },
    { id: 'team', label: 'Our Team' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Clinical Utility Strip */}
      <div className="bg-[#102A1F] text-emerald-100 text-[11px] py-1.5 px-6 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-light tracking-wide text-emerald-200/90">
              Evidence-Based Physiotherapy • Penrith • Caringbah • Jordan Springs • Mount Annan
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-emerald-200/80">Instant HICAPS Private Health Rebates</span>
            <span className="text-emerald-600">|</span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocationDropdown(!locationDropdown)}
                className="flex items-center gap-1.5 text-white font-medium hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>Call Clinic Directly</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {locationDropdown && (
                <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white text-slate-800 shadow-xl border border-black/5 p-2 z-50">
                  {REAL_CLINICS.map((clinic) => (
                    <a
                      key={clinic.id}
                      href={`tel:${clinic.phone.replace(/[^0-9]/g, '')}`}
                      className="block p-2.5 rounded-xl hover:bg-stone-50 transition-colors text-left"
                    >
                      <div className="font-semibold text-xs text-slate-900">{clinic.suburb}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{clinic.phone}</div>
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
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3.5 shadow-sm border-b border-black/5'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm py-4 border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <button
            type="button"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src="https://www.thehealthybodycompany.com.au/wp-content/themes/thbc/static/images/thbc-logo-blue.png"
              alt="The Healthy Body Company"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onSelectTab(link.id)}
                className={`py-1 relative transition-colors ${
                  currentTab === link.id
                    ? 'text-forest-900 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{link.label}</span>
                {currentTab === link.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-forest-800 rounded-full"
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
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-lg active:scale-95"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900"
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
              className="lg:hidden bg-[#FAF8F5] border-b border-black/5 px-6 py-6 space-y-4"
            >
              <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
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
                        ? 'bg-forest-900 text-white font-bold'
                        : 'hover:bg-black/5 text-slate-700'
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
                  className="w-full py-3 rounded-full bg-forest-900 text-white text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Book Initial Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
