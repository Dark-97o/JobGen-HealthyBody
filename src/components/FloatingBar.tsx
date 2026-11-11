import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

interface FloatingBarProps {
  onOpenBooking: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 text-white backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-white/10 flex items-center gap-4 text-xs font-medium"
        >
          <a
            href="tel:0247225555"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>(02) 4722 5555</span>
          </a>

          <span className="w-px h-3.5 bg-white/20" />

          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center gap-2 text-white hover:text-emerald-300 transition-colors font-semibold"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Book Consultation</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

