import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Check, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [clinic, setClinic] = useState<string>('Penrith');
  const [service, setService] = useState<string>('Musculoskeletal & Sports Physio');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0F382E', '#2D6A4F', '#0284C7'],
      });
      setStep(3);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-black/5 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-light text-slate-900">
              Book Consultation
            </h3>
            <p className="text-xs text-slate-500 font-light mt-0.5">
              The Healthy Body Company • No GP referral needed
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Choose Location
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Penrith', 'Caringbah', 'Jordan Springs', 'Mount Annan'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setClinic(c)}
                      className={`p-3.5 rounded-2xl text-left text-xs font-medium border transition-all ${
                        clinic === c
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-black/5'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Select Focus
                </label>
                <div className="space-y-1.5">
                  {[
                    'Musculoskeletal & Sports Physio',
                    'Spine, Lower Back & Sciatica',
                    'Post-Surgical Knee / Shoulder Rehab',
                    'Clinical Pilates',
                    'Radial Shockwave for Tendons',
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                        service === s
                          ? 'bg-forest-50 border-forest-700 text-forest-900 font-semibold'
                          : 'bg-white hover:bg-stone-50 text-slate-700 border-black/5'
                      }`}
                    >
                      <span>{s}</span>
                      {service === s && <Check className="w-3.5 h-3.5 text-forest-700" />}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Mitchell"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm p-3 rounded-xl border border-black/10 focus:outline-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0400 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm p-3 rounded-xl border border-black/10 focus:outline-slate-900"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 text-xs text-slate-600">
                Reserving at <span className="font-semibold text-slate-900">{clinic} Clinic</span> for <span className="font-semibold text-slate-900">{service}</span>.
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase transition-all"
              >
                Confirm Appointment
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-light text-slate-900">
                Session Reserved
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you {name || 'patient'}. We have saved your session at {clinic}. An SMS confirmation has been dispatched.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-medium"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
