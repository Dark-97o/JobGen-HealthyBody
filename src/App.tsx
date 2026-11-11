import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biomechanics3D } from './components/Biomechanics3D';
import { SymptomTriage } from './components/SymptomTriage';
import { ServicesMatrix } from './components/ServicesMatrix';
import { ClinicalPathway } from './components/ClinicalPathway';
import { EvidenceHub } from './components/EvidenceHub';
import { ClinicLocations } from './components/ClinicLocations';
import { TeamDirectory } from './components/TeamDirectory';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedClinicId, setSelectedClinicId] = useState<string>('penrith');
  const [bookingServiceName, setBookingServiceName] = useState<string | undefined>(undefined);

  const handleOpenBooking = (clinicId?: string, serviceName?: string) => {
    if (clinicId) setSelectedClinicId(clinicId);
    if (serviceName) setBookingServiceName(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingServiceName(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-slate-800 selection:bg-forest-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenBooking={(clinicId) => handleOpenBooking(clinicId)}
        selectedClinicId={selectedClinicId}
        onSelectClinic={setSelectedClinicId}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={(clinicId) => handleOpenBooking(clinicId)}
          selectedClinicId={selectedClinicId}
          onSelectClinic={setSelectedClinicId}
        />

        {/* 3D Interactive Biomechanical Body Navigator (React Three Fiber) */}
        <Biomechanics3D
          onBookCondition={(conditionName) =>
            handleOpenBooking(selectedClinicId, `${conditionName} Consultation`)
          }
        />

        {/* Interactive Symptom & Goal Triage */}
        <SymptomTriage
          onBookService={(serviceName) =>
            handleOpenBooking(selectedClinicId, serviceName)
          }
        />

        {/* Comprehensive Services Matrix */}
        <ServicesMatrix
          onBookService={(serviceName) =>
            handleOpenBooking(selectedClinicId, serviceName)
          }
        />

        {/* 4-Step Clinical Pathway */}
        <ClinicalPathway
          onOpenBooking={() => handleOpenBooking(selectedClinicId)}
        />

        {/* Evidence-Based Rehabilitation Protocols Hub (Physio-Pedia inspired) */}
        <EvidenceHub />

        {/* Multi-Clinic Locations & Live Hours Hub */}
        <ClinicLocations
          selectedClinicId={selectedClinicId}
          onSelectClinic={setSelectedClinicId}
          onOpenBooking={(clinicId) => handleOpenBooking(clinicId)}
        />

        {/* Allied Health & Leadership Team */}
        <TeamDirectory
          onOpenBooking={() => handleOpenBooking(selectedClinicId)}
        />

        {/* Verified Patient Outcomes & Health Funds */}
        <Testimonials />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Booking Modal with Health Fund Rebate Calculator */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialClinicId={selectedClinicId}
        initialServiceName={bookingServiceName}
      />
    </div>
  );
};

export default App;
