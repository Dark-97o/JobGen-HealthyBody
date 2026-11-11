import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CLINIC_LOCATIONS, SERVICES_LIST, HEALTH_FUNDS } from '../data/clinicsData';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  ChevronRight, 
  ArrowLeft 
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClinicId?: string;
  initialServiceName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialClinicId,
  initialServiceName,
}) => {
  const [step, setStep] = useState<number>(1);
  const [clinicId, setClinicId] = useState<string>(initialClinicId || CLINIC_LOCATIONS[0].id);
  const [serviceName, setServiceName] = useState<string>(initialServiceName || SERVICES_LIST[0].title);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 9:30 AM');
  const [healthFund, setHealthFund] = useState<string>('Bupa');
  
  // Patient Details
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const currentClinic = CLINIC_LOCATIONS.find((c) => c.id === clinicId) || CLINIC_LOCATIONS[0];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Fire confetti celebration on final booking
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2D6E4F', '#10B981', '#38BDF8', '#F59E0B'],
      });
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Mock standard consult fee and rebate calculation
  const standardFee = 118;
  const estimatedRebate = healthFund !== 'None / Medicare Self-Pay' ? 62 : 0;
  const estimatedGap = standardFee - estimatedRebate;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-sand-300 overflow-hidden animate-fade-in my-8">
        {/* Top Header */}
        <div className="bg-forest-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest-800 text-emerald-300 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Book Initial Consultation
              </h3>
              <p className="text-xs text-emerald-200">
                The Healthy Body Company • Instant SMS Confirmation
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-forest-800 hover:bg-forest-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator (when not completed) */}
        {step < 4 && (
          <div className="bg-sand-100/70 px-6 py-3 border-b border-sand-200 flex items-center justify-between text-xs font-semibold text-slate-600">
            <span className={step >= 1 ? 'text-forest-800 font-bold' : ''}>1. Clinic & Service</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className={step >= 2 ? 'text-forest-800 font-bold' : ''}>2. Time & Rebate</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className={step >= 3 ? 'text-forest-800 font-bold' : ''}>3. Patient Details</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Select Clinic and Service */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Select Clinic Location:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {CLINIC_LOCATIONS.map((loc) => {
                    const selected = loc.id === clinicId;
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setClinicId(loc.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all text-xs ${
                          selected
                            ? 'bg-forest-50 border-forest-600 text-forest-900 font-bold ring-1 ring-forest-600'
                            : 'bg-sand-50/50 hover:bg-sand-100 text-slate-700 border-sand-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm">{loc.suburb}</span>
                          <span className="text-[10px] text-emerald-700 font-bold">4.9★</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 truncate">{loc.address}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Select Service / Primary Concern:
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {SERVICES_LIST.map((srv) => {
                    const isSelected = srv.title === serviceName;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setServiceName(srv.title)}
                        className={`w-full p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                          isSelected
                            ? 'bg-forest-50 border-forest-600 text-forest-900 font-bold ring-1 ring-forest-600'
                            : 'bg-white hover:bg-sand-50 text-slate-700 border-sand-200'
                        }`}
                      >
                        <div>
                          <div className="font-bold">{srv.title}</div>
                          <div className="text-[11px] text-slate-500">{srv.shortDesc}</div>
                        </div>
                        <span className="text-[10px] text-forest-700 font-semibold ml-2 whitespace-nowrap">
                          {srv.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm transition-all flex items-center gap-2"
                >
                  <span>Continue to Time & Rebates</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Time & Health Fund Rebate Calculator */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Choose Preferred Appointment Window:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Today, 3:30 PM (Priority)',
                    'Tomorrow, 8:30 AM',
                    'Tomorrow, 11:00 AM',
                    'Tomorrow, 4:00 PM',
                    'Thursday, 9:30 AM',
                    'Saturday, 9:00 AM',
                  ].map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                        selectedDate === slot
                          ? 'bg-forest-800 text-white border-forest-900 shadow-sm'
                          : 'bg-sand-50 hover:bg-sand-100 text-slate-700 border-sand-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Health Fund Estimator */}
              <div className="p-4 rounded-2xl bg-sand-100/80 border border-sand-300 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-forest-700" />
                    Instant Health Fund Rebate Estimator (HICAPS)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    On-the-spot Claim
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Your Health Fund:
                    </label>
                    <select
                      value={healthFund}
                      onChange={(e) => setHealthFund(e.target.value)}
                      className="w-full text-xs font-semibold p-2 rounded-lg bg-white border border-sand-300 text-slate-800"
                    >
                      {HEALTH_FUNDS.map((f, i) => (
                        <option key={i} value={f}>
                          {f}
                        </option>
                      ))}
                      <option value="None / Medicare Self-Pay">None / Medicare Self-Pay</option>
                    </select>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-sand-200 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Standard Initial Consult:</span>
                      <span>${standardFee}</span>
                    </div>
                    <div className="flex justify-between text-forest-700 font-semibold mt-0.5">
                      <span>Est. Fund Rebate:</span>
                      <span>-${estimatedRebate}</span>
                    </div>
                    <div className="flex justify-between text-slate-900 font-extrabold text-sm pt-1 mt-1 border-t border-slate-100">
                      <span>Est. Out-of-Pocket:</span>
                      <span className="text-forest-800">${estimatedGap}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 rounded-xl border border-sand-300 text-slate-600 hover:bg-sand-50 font-semibold text-xs flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm transition-all flex items-center gap-2"
                >
                  <span>Continue to Patient Info</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Info Form */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Henderson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs font-medium pl-9 pr-3 py-2.5 rounded-xl border border-sand-300 focus:outline-forest-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Mobile Phone (For SMS Confirmation) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs font-medium pl-9 pr-3 py-2.5 rounded-xl border border-sand-300 focus:outline-forest-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="liam@example.com.au"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs font-medium pl-9 pr-3 py-2.5 rounded-xl border border-sand-300 focus:outline-forest-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Brief Injury / Pain Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Rolled left ankle during basketball match, acute swelling since Saturday."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs font-medium p-3 rounded-xl border border-sand-300 focus:outline-forest-600"
                />
              </div>

              {/* Summary Pill */}
              <div className="p-3 rounded-xl bg-forest-50 border border-forest-200 text-xs text-forest-900 flex items-center justify-between">
                <div>
                  <span className="font-bold">{currentClinic.suburb} Clinic</span> • {selectedDate}
                </div>
                <div className="font-semibold text-emerald-800">
                  {serviceName.split(' ')[0]} Consult
                </div>
              </div>

              <div className="pt-3 flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 rounded-xl border border-sand-300 text-slate-600 hover:bg-sand-50 font-semibold text-xs flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-slate-900">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{fullName || 'Patient'}</span>. We have reserved your initial session and sent an SMS confirmation to your mobile.
                </p>
              </div>

              {/* Appointment Card Summary */}
              <div className="bg-sand-50/80 rounded-2xl p-5 border border-sand-300 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-sand-200">
                  <span className="text-slate-500 font-semibold">Location:</span>
                  <span className="font-bold text-slate-900">{currentClinic.name}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-sand-200">
                  <span className="text-slate-500 font-semibold">Address:</span>
                  <span className="font-bold text-slate-900">{currentClinic.address}, {currentClinic.suburb}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-sand-200">
                  <span className="text-slate-500 font-semibold">Date & Time:</span>
                  <span className="font-bold text-forest-800">{selectedDate}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-sand-200">
                  <span className="text-slate-500 font-semibold">Service:</span>
                  <span className="font-bold text-slate-900">{serviceName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="text-slate-500 font-semibold">Direct Clinic Phone:</span>
                  <span className="font-bold text-forest-700">{currentClinic.phone}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
