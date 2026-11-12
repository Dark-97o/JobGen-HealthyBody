import React from 'react';
import { HealisHero } from '../components/HealisHero';
import { SpecialtiesMarquee } from '../components/SpecialtiesMarquee';
import { FindCareSection } from '../components/FindCareSection';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection';
import { SelectSpecialistSection } from '../components/SelectSpecialistSection';
import { ComprehensiveCareSection } from '../components/ComprehensiveCareSection';
import { TestimonialsParallaxSection } from '../components/TestimonialsParallaxSection';
import { HomeBlogSection } from '../components/HomeBlogSection';
import { FollowUsInstagramSection } from '../components/FollowUsInstagramSection';
import { CtaSection } from '../components/CtaSection';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onSelectService,
  onOpenBooking,
}) => {
  return (
    <div>
      {/* 1. Healis Hero with Giant Headline & Floating Clinician Portrait */}
      <HealisHero
        onOpenBooking={onOpenBooking}
        onExploreServices={() => onSelectTab('services')}
      />

      {/* 2. Infinite Continuous Specialties Marquee Ticker */}
      <SpecialtiesMarquee />

      {/* 3. Services Showcase Section */}
      <FindCareSection
        onSelectServices={() => onSelectTab('services')}
        onSelectService={onSelectService}
        onOpenBooking={onOpenBooking}
      />

      {/* 3.5. Full-Width 80% Height Video Showcase with Transparent Blur Card */}
      <VideoShowcaseSection />

      {/* 4. Meet Our Specialists & Book Instantly */}
      <SelectSpecialistSection
        onSelectTeam={() => onSelectTab('team')}
        onOpenBooking={onOpenBooking}
      />

      {/* 5. Comprehensive Care for Every Stage of Life */}
      <ComprehensiveCareSection />

      {/* 6. Testimonials Social Wall */}
      <TestimonialsParallaxSection />

      {/* 7. Blog Section */}
      <HomeBlogSection onSelectBlog={() => onSelectTab('blog')} />

      {/* 8. Get in Touch Full-Width CTA Box */}
      <CtaSection onOpenBooking={onOpenBooking} />

      {/* 9. Dark Follow Us on Instagram Section */}
      <FollowUsInstagramSection />
    </div>
  );
};
