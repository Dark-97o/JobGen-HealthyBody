import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-sm italic group-hover:scale-105 transition-transform">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900">
              The Healthy Body Co.
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-500 font-medium">
              Sydney • Est. 1998
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-xs font-semibold tracking-wider uppercase text-slate-600">
          <a href="#services" className="hover:text-slate-950 transition-colors">
            Services
          </a>
          <a href="#focus" className="hover:text-slate-950 transition-colors">
            Body Focus
          </a>
          <a href="#pathway" className="hover:text-slate-950 transition-colors">
            Pathway
          </a>
          <a href="#clinics" className="hover:text-slate-950 transition-colors">
            Clinics
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            <span>Book Session</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-900"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAF8F5] border-b border-black/5 px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-emerald-800"
              >
                Services
              </a>
              <a
                href="#focus"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-emerald-800"
              >
                Body Focus
              </a>
              <a
                href="#pathway"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-emerald-800"
              >
                Pathway
              </a>
              <a
                href="#clinics"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-emerald-800"
              >
                Clinics
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-slate-900 text-white text-xs font-semibold text-center flex items-center justify-center gap-2"
              >
                <span>Book Initial Session</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
