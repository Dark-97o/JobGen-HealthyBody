import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
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
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Frictionless Inertial Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Balance scroll physics when modal opens/closes
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isBookingOpen) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isBookingOpen]);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentTab('service-detail');
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
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
