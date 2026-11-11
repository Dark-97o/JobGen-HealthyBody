import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { REAL_CLINICS } from '../data/thbcData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClinic?: string;
  initialService?: string;
  initialPractitioner?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialClinic,
  initialService,
  initialPractitioner,
}) => {
  const [step, setStep] = useState<number>(1);
  const [clinic, setClinic] = useState<string>(initialClinic || 'Penrith');
  const [service, setService] = useState<string>(initialService || 'Physiotherapy Treatment');
  const [practitioner, setPractitioner] = useState<string>(initialPractitioner || 'Any Available Clinician');
  const [timeSlot, setTimeSlot] = useState<string>('Tomorrow, Morning (8am - 12pm)');
  const [healthFund, setHealthFund] = useState<string>('Bupa');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    if (initialClinic) setClinic(initialClinic);
    if (initialService) setService(initialService);
    if (initialPractitioner) setPractitioner(initialPractitioner);
  }, [initialClinic, initialService, initialPractitioner]);

  if (!isOpen) return null;

  const currentClinicData = REAL_CLINICS.find(c => c.suburb.toLowerCase() === clinic.toLowerCase()) || REAL_CLINICS[0];

  const standardFee = 118;
  const isZeroGap = healthFund === 'WorkCover (SIRA)' || healthFund === 'NDIS (Plan Managed)';
  const rebate = isZeroGap ? 118 : (healthFund === 'None / Private Self-Pay' ? 0 : 64);
  const gap = standardFee - rebate;

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#0F382E', '#2D6A4F', '#0284C7', '#10B981'],
      });
      setStep(3);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
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
              The Healthy Body Company • Instant SMS confirmation
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              {/* Clinic Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                  1. Choose Clinic Location
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {REAL_CLINICS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setClinic(c.suburb)}
                      className={`p-3 rounded-2xl text-left text-xs font-medium border transition-all ${
                        clinic.toLowerCase() === c.suburb.toLowerCase()
                          ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                          : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-black/5'
                      }`}
                    >
                      <div className="font-semibold text-sm">{c.suburb}</div>
                      <div className={`text-[10px] mt-0.5 truncate ${clinic.toLowerCase() === c.suburb.toLowerCase() ? 'text-emerald-200' : 'text-slate-500'}`}>
                        {c.address.split(',')[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                  2. Select Clinical Focus
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs font-medium p-3 rounded-xl border border-black/10 bg-white text-slate-900 focus:outline-forest-900"
                >
                  <option value="Physiotherapy Treatment">Physiotherapy Treatment (Initial Consult)</option>
                  <option value="Sports Physiotherapy">Sports Physiotherapy & Rehab</option>
                  <option value="TMJ Dysfunction & Jaw Pain">TMJ Dysfunction & Jaw Pain</option>
                  <option value="Orthopaedic Physio">Orthopaedic / Post-Op Surgery</option>
                  <option value="Work Injuries (SIRA)">Work Injuries (SIRA WorkCover)</option>
                  <option value="Shockwave Therapy">Shockwave Therapy (ESWT)</option>
                  <option value="Massage Therapy">Remedial Massage Therapy</option>
                  <option value="Exercise Classes & Pilates">Clinical Pilates Reformer</option>
                  <option value="Healthy Mums (Women’s Health)">Healthy Mums (Women’s Pelvic Health)</option>
                  <option value="Vertigo & Dizziness">Vertigo & Dizziness (Vestibular)</option>
                  <option value="NDIS Physiotherapy">NDIS Physiotherapy</option>
                  <option value="Paediatric Physiotherapy">Paediatric & Youth Sports</option>
                  <option value="Falls Prevention & Mobility">Falls Prevention & Senior Balance</option>
                </select>
              </div>

              {/* Health Fund Estimator */}
              <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-black/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-forest-700" />
                    Instant HICAPS Rebate Calculator
                  </span>
                  <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                    Claim on the spot
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 items-center pt-1 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block mb-1">Your Fund / Scheme:</span>
                    <select
                      value={healthFund}
                      onChange={(e) => setHealthFund(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-black/10 bg-white text-slate-800 font-medium"
                    >
                      <option value="Bupa">Bupa Members First</option>
                      <option value="Medibank">Medibank Preferred</option>
                      <option value="HCF">HCF More for Muscles</option>
                      <option value="NIB">NIB Health Fund</option>
                      <option value="Teachers Health">Teachers Health</option>
                      <option value="AHM">AHM by Medibank</option>
                      <option value="CBHS">CBHS Health</option>
                      <option value="WorkCover (SIRA)">WorkCover NSW (SIRA)</option>
                      <option value="NDIS (Plan Managed)">NDIS (Plan Managed)</option>
                      <option value="None / Private Self-Pay">None / Private Self-Pay</option>
                    </select>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-black/5 text-xs text-right space-y-0.5">
                    <div className="text-slate-500 text-[10px]">Standard Consult: ${standardFee}</div>
                    <div className="text-emerald-700 font-semibold text-[11px]">
                      Est. Rebate: -${rebate}
                    </div>
                    <div className="font-bold text-slate-900 border-t border-slate-100 pt-1 text-xs">
                      Est. Gap: ${gap}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Continue to Patient Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              {/* Preferred Time Window */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Preferred Appointment Window
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Tomorrow, Morning (8am - 12pm)',
                    'Tomorrow, Afternoon (1pm - 5pm)',
                    'Tomorrow, Evening (5pm - 7:30pm)',
                    'Saturday Morning (8am - 1pm)',
                  ].map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        timeSlot === slot
                          ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                          : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-black/5'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Mitchell"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs font-medium p-3 rounded-xl border border-black/10 focus:outline-forest-900"
                />
              </div>

              {/* Patient Phone */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Mobile Phone (For Instant SMS Confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0400 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs font-medium p-3 rounded-xl border border-black/10 focus:outline-forest-900"
                />
              </div>

              {/* Booking Summary Pill */}
              <div className="p-3.5 rounded-2xl bg-[#F7F5F0] text-xs text-slate-700 space-y-1">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>{clinic} Clinic</span>
                  <span className="text-forest-800">{service.split(' ')[0]} ({practitioner})</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  {currentClinicData.address}
                </div>
                <div className="text-[11px] text-emerald-800 font-medium">
                  {timeSlot}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-full border border-black/10 text-xs font-semibold text-slate-600 hover:bg-stone-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-3 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-2xl font-light text-slate-900">
                  Appointment Confirmed
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-1 font-light">
                  Thank you <span className="font-semibold text-slate-900">{name || 'Patient'}</span>. We have reserved your session at our <span className="font-semibold text-slate-900">{clinic} Practice</span>.
                </p>
              </div>

              {/* Realistic SMS Card Simulation */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white text-left max-w-sm mx-auto space-y-2 text-xs font-light">
                <div className="text-[10px] text-emerald-400 uppercase font-mono tracking-wider">
                  SMS Dispatched to {phone || '0400 000 000'}
                </div>
                <div className="text-slate-300">
                  "Hi {name || 'there'}, your session at The Healthy Body Company ({clinic}) is scheduled for {timeSlot}. Address: {currentClinicData.address}. Questions? Call {currentClinicData.phone}."
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-full bg-forest-900 text-white text-xs font-semibold tracking-wider uppercase shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
