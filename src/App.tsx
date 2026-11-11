import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BodyFocus } from './components/BodyFocus';
import { ServicesBento } from './components/ServicesBento';
import { PathwaySteps } from './components/PathwaySteps';
import { ClinicsGrid } from './components/ClinicsGrid';
import { EditorialQuotes } from './components/EditorialQuotes';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans selection:bg-slate-900 selection:text-white">
      {/* Sleek Minimal Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Editorial Hero */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Fluid Body Focus Selector (Replaces 3D mannequin) */}
        <BodyFocus onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Modern Services Bento Grid */}
        <ServicesBento onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 4-Step Recovery Pathway */}
        <PathwaySteps />

        {/* Sydney Clinics Showcase */}
        <ClinicsGrid onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Editorial Trust & Quotes */}
        <EditorialQuotes />
      </main>

      {/* Minimal Clean Footer */}
      <Footer />

      {/* Streamlined Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
