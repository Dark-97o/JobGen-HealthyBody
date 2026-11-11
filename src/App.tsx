import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { LocationsView } from './views/LocationsView';
import { TeamView } from './views/TeamView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';
import { FaqView } from './views/FaqView';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingBar } from './components/FloatingBar';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans selection:bg-forest-900 selection:text-white relative">
      {/* Top Navbar with Official Brand Logo */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main View Router */}
      <main>
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
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

        {currentTab === 'faqs' && (
          <FaqView
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Footer with Official White Logo & Full Directory */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Sticky Floating Quick Contact Pill */}
      <FloatingBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Streamlined Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
