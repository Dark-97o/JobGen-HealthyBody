import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { LocationsView } from './views/LocationsView';
import { TeamView } from './views/TeamView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';
import { CareersView } from './views/CareersView';
import { FaqView } from './views/FaqView';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('physiotherapy-treatment');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentTab('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-healis-dark font-sans selection:bg-healis-blue selection:text-white relative">
      {/* Top Navbar with Official Brand Logo */}
      <Navbar
        currentTab={currentTab}
        selectedServiceId={selectedServiceId}
        onSelectTab={handleSelectTab}
        onSelectService={handleSelectService}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main View Router */}
      <main>
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onSelectService={handleSelectService}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onSelectService={handleSelectService}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'service-detail' && (
          <ServiceDetailView
            serviceId={selectedServiceId}
            onSelectService={handleSelectService}
            onBackToServices={() => handleSelectTab('services')}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'locations' && (
          <LocationsView
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'team' && (
          <TeamView
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'blog' && (
          <BlogView />
        )}

        {currentTab === 'careers' && (
          <CareersView />
        )}

        {currentTab === 'faqs' && (
          <FaqView
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Footer with Official White Logo & Full Directory */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Streamlined Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
