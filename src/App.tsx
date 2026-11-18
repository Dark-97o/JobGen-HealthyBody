import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

// Load-Balanced Dynamic Code Splitting for Sub-Pages
const ServicesView = lazy(() =>
  import('./views/ServicesView').then((m) => ({ default: m.ServicesView }))
);
const ServiceDetailView = lazy(() =>
  import('./views/ServiceDetailView').then((m) => ({ default: m.ServiceDetailView }))
);
const LocationsView = lazy(() =>
  import('./views/LocationsView').then((m) => ({ default: m.LocationsView }))
);
const TeamView = lazy(() =>
  import('./views/TeamView').then((m) => ({ default: m.TeamView }))
);
const AboutView = lazy(() =>
  import('./views/AboutView').then((m) => ({ default: m.AboutView }))
);
const BlogView = lazy(() =>
  import('./views/BlogView').then((m) => ({ default: m.BlogView }))
);
const CareersView = lazy(() =>
  import('./views/CareersView').then((m) => ({ default: m.CareersView }))
);
const PartnersView = lazy(() =>
  import('./views/PartnersView').then((m) => ({ default: m.PartnersView }))
);
const FaqView = lazy(() =>
  import('./views/FaqView').then((m) => ({ default: m.FaqView }))
);

const ViewLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F8F9FB] pt-32">
    <div className="w-9 h-9 border-3 border-healis-blue/20 border-t-healis-blue rounded-full animate-spin" />
  </div>
);

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

        <Suspense fallback={<ViewLoadingFallback />}>
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

          {currentTab === 'partners' && (
            <PartnersView
              onOpenBooking={() => setIsBookingOpen(true)}
              onNavigateHome={() => handleSelectTab('home')}
            />
          )}

          {currentTab === 'faqs' && (
            <FaqView
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}
        </Suspense>
      </main>

      {/* Footer with Scenic Landscape & Multi-Column Navigation */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenBooking={() => setIsBookingOpen(true)}
        isHome={currentTab === 'home'}
      />

      {/* Streamlined Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default App;
