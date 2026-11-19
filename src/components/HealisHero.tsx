import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface HealisHeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const HealisHero: React.FC<HealisHeroProps> = ({
  onOpenBooking,
  onExploreServices,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Graphic Load Balancing: Pause video when scrolled out of viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-end overflow-hidden bg-black">
      {/* Full Background Video with Graphic Load Balancing */}
      <video
        ref={videoRef}
        src="/heronew.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 will-change-transform"
      />

      {/* Cinematic Gradient Overlay for Maximum Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Brand Red Accent on Left Edge */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-4 sm:w-6 lg:w-8 h-40 sm:h-52 lg:h-60 rounded-r-2xl bg-[#E53935] pointer-events-none z-20 opacity-90 shadow-lg"
        aria-hidden="true"
      />

      {/* Hero Content: Centered at the Bottom */}
      <div className="relative z-20 max-w-[1240px] w-full mx-auto px-6 sm:px-10 pb-16 sm:pb-20 lg:pb-28 pt-44 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-7"
        >
          {/* Main Big Headline */}
          <h1 className="font-exo text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold text-white tracking-tight leading-[1.02] uppercase select-none drop-shadow-2xl">
            Live your best <br className="hidden sm:inline" />
            active life, <span className="text-[#38bdf8]">always!</span>
          </h1>

          {/* Subheading Micro-copy */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 font-medium leading-snug drop-shadow-lg max-w-2xl mx-auto">
            With your local Sydney physios.
          </p>

          {/* Bigger Action Buttons Centered at Bottom of Video */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 bg-healis-blue hover:bg-white hover:text-healis-dark text-white text-base sm:text-lg font-semibold tracking-normal px-8 py-4 sm:px-10 sm:py-5 rounded-pill shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              <span>Book appointment</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center gap-2.5 bg-white/20 hover:bg-white hover:text-healis-dark text-white text-base sm:text-lg font-semibold tracking-normal px-8 py-4 sm:px-10 sm:py-5 rounded-pill border border-white/40 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              <span>Explore services</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
