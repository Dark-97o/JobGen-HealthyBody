import React from 'react';
import { HealisHero } from '../components/HealisHero';
import { SpecialtiesMarquee } from '../components/SpecialtiesMarquee';
import { FindCareSection } from '../components/FindCareSection';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection';
import { SelectSpecialistSection } from '../components/SelectSpecialistSection';
import { ComprehensiveCareSection } from '../components/ComprehensiveCareSection';
import { MissionSection } from '../components/MissionSection';
import { TestimonialsParallaxSection } from '../components/TestimonialsParallaxSection';
import { CtaSection } from '../components/CtaSection';
import { HomeBlogSection } from '../components/HomeBlogSection';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
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

      {/* 3. Services Showcase Section (4 Core Physiotherapy Services) */}
      <FindCareSection
        onSelectServices={() => onSelectTab('services')}
        onOpenBooking={onOpenBooking}
      />

      {/* 3.5. Full-Width 80% Height Video Showcase with Transparent Blur Card */}
      <VideoShowcaseSection />

      {/* 4. Meet Our Specialists & Book Instantly */}
      <SelectSpecialistSection
        onSelectTeam={() => onSelectTab('team')}
        onOpenBooking={onOpenBooking}
      />

      {/* 5. Comprehensive Care for Every Stage of Life (3 Pillars & Review Avatars) */}
      <ComprehensiveCareSection />

      {/* 6. Dedicated to Your Health & Well-being Mission Section */}
      <MissionSection
        onSelectAbout={() => onSelectTab('about')}
      />

      {/* 7. Second Subtle Marquee Divider */}
      <SpecialtiesMarquee />

      {/* 8. Parallax Testimonials Wall */}
      <TestimonialsParallaxSection />

      {/* 9. Get in Touch Full-Width CTA Box */}
      <CtaSection onOpenBooking={onOpenBooking} />

      {/* 10. Your Guide to Health Blog Cards */}
      <HomeBlogSection onSelectBlog={() => onSelectTab('blog')} />
    </div>
  );
};
