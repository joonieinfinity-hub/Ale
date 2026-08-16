import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ViewTab } from '../types';
import { HERO_CAROUSEL_SLIDES, STORE_DETAILS } from '../data/inventory';
import { MapPin, PhoneCall, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onSelectTab?: (tab: ViewTab) => void;
  onNavigateSection?: (sectionId: string) => void;
}

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per slide
const SWIPE_CONFIDENCE_THRESHOLD = 40; // Low threshold for effortless swiping
const VELOCITY_THRESHOLD = 300; // Swift swipe gesture detection

// Framer Motion Variants for buttery directional transitions
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.08,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32, mass: 0.8 },
      opacity: { duration: 0.45, ease: 'easeOut' },
      scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.94,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32, mass: 0.8 },
      opacity: { duration: 0.35, ease: 'easeIn' },
      scale: { duration: 0.5 }
    }
  })
};

const Hero: React.FC<HeroProps> = ({ onSelectTab, onNavigateSection }) => {
  // [[currentSlide, direction]] to manage directional animations
  const [[currentSlide, direction], setSlideState] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const totalSlides = HERO_CAROUSEL_SLIDES.length;

  const nextSlide = useCallback(() => {
    setSlideState(([prev]) => [(prev + 1) % totalSlides, 1]);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setSlideState(([prev]) => [(prev - 1 + totalSlides) % totalSlides, -1]);
  }, [totalSlides]);

  const goToSlide = (newIndex: number) => {
    if (newIndex === currentSlide) return;
    const newDirection = newIndex > currentSlide ? 1 : -1;
    setSlideState([newIndex, newDirection]);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, nextSlide, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Framer Motion Drag/Swipe Handler
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    setIsPaused(false);

    const { offset, velocity } = info;
    const swipeOffset = offset.x;
    const swipeVelocity = velocity.x;

    // Detect left swipe (next slide) or right swipe (prev slide)
    if (swipeOffset < -SWIPE_CONFIDENCE_THRESHOLD || swipeVelocity < -VELOCITY_THRESHOLD) {
      nextSlide();
    } else if (swipeOffset > SWIPE_CONFIDENCE_THRESHOLD || swipeVelocity > VELOCITY_THRESHOLD) {
      prevSlide();
    }
  };

  const activeSlideData = HERO_CAROUSEL_SLIDES[currentSlide];

  return (
    <section 
      aria-label="Ale House Wine Shop Showcase Carousel"
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#08100C] overflow-hidden flex flex-col justify-between select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
    >
      
      {/* 
        ========================================================================
        SWIPEABLE FULL-BLEED BACKGROUND CAROUSEL
        Slide 1: Authentic Ale House Wine Shop Storefront (Nagaon, Assam)
        Slide 2: Johnnie Walker Black Label 12YO
        Slide 3: Dewar's White Label Blended Scotch
        Slide 4: Jim Beam Kentucky Straight Bourbon
        Slide 5: Tuborg Green All Malt European Lager
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden cursor-grab active:cursor-grabbing">
        
        {/* Interactive Drag Surface with Gesture Physics */}
        <motion.div
          className="w-full h-full relative"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragStart={() => {
            setIsDragging(true);
            setIsPaused(true);
          }}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeSlideData.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={activeSlideData.image} 
                alt={activeSlideData.alt} 
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
                loading={currentSlide === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Subtle Dark-to-Transparent Legibility Overlay on left side */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#08100C]/95 via-[#08100C]/75 to-[#08100C]/30 sm:w-4/5 lg:w-3/5 pointer-events-none" />
        
        {/* Top subtle nav shadow */}
        <div className="absolute inset-x-0 top-0 h-32 z-20 bg-gradient-to-b from-[#08100C]/90 via-[#08100C]/40 to-transparent pointer-events-none" />
        
        {/* Bottom subtle atmospheric blend */}
        <div className="absolute inset-x-0 bottom-0 h-44 z-20 bg-gradient-to-t from-[#08100C] via-[#08100C]/80 to-transparent pointer-events-none" />
      </div>

      {/* Spacer for Top Transparent Navigation */}
      <div className="h-20 sm:h-24 pointer-events-none" />

      {/* Main Hero Content Area (Positioned intentionally on the quieter left side) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full my-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pointer-events-none">
        
        {/* Left: Brand Headline & Primary Actions */}
        <div className="max-w-2xl text-left pointer-events-auto">
          
          {/* Eyebrow & Secondary Location Label */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.28em] text-[#C5A059] uppercase font-semibold">
              WELCOME TO
            </span>
            <span className="w-6 h-[1px] bg-[#C5A059]/60" />
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#D5CCC1] uppercase font-medium">
              NAGAON, ASSAM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-[#F5EFEB] leading-[1.02] mb-4 sm:mb-5 drop-shadow-lg">
            <span className="block">ALE HOUSE</span>
            <span className="block text-[#EDE6DD] font-serif font-light italic">
              WINE SHOP
            </span>
          </h1>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg md:text-xl text-[#D5CCC1] font-sans font-light leading-relaxed max-w-xl mb-8 sm:mb-10 text-balance">
            A trusted destination for fine spirits in Nagaon, Assam.
          </p>

          {/* Primary Immediate Hero Actions (Visible immediately on first load without scrolling) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            
            {/* GET DIRECTIONS — Filled Aged Brass CTA */}
            <a
              href={STORE_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-xl hover:shadow-[0_0_24px_rgba(197,160,89,0.4)] flex items-center justify-center gap-2.5 group cursor-pointer border border-[#C5A059]"
            >
              <MapPin className="w-4 h-4 text-[#08100C]" />
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#08100C] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* CALL FOR WHOLESALE — Outlined Aged Brass CTA */}
            <a
              href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
              className="px-7 py-4 bg-[#08100C]/70 hover:bg-[#08100C]/95 text-[#F5EFEB] hover:text-[#FAF6F0] font-sans font-semibold text-xs uppercase tracking-[0.2em] rounded-none border border-[#C5A059]/80 hover:border-[#C5A059] backdrop-blur-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059] transition-transform group-hover:scale-110" />
              <span>CALL FOR WHOLESALE</span>
            </a>

          </div>

        </div>

        {/* Right: Elegant Carousel Controls & Interactive Slide Indicators */}
        <div className="flex flex-col items-start lg:items-end gap-3 pointer-events-auto">
          
          {/* Active Photo Info Badge */}
          <motion.div 
            key={activeSlideData.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#08100C]/90 backdrop-blur-md border border-[#1B3228] px-4 py-2.5 shadow-xl flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <div className="text-left">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#C5A059] uppercase font-bold">
                0{currentSlide + 1} / 0{totalSlides} · {activeSlideData.title}
              </div>
              <div className="text-[11px] text-[#BCB3A7] font-light">
                {activeSlideData.tag}
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls: Prev / Next Buttons + Pagination Pills */}
          <div className="flex items-center gap-3 bg-[#08100C]/80 backdrop-blur-md border border-[#1B3228] p-2 shadow-xl">
            
            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous photograph slide"
              className="w-10 h-10 bg-[#0C1813] hover:bg-[#1B3228] border border-[#1B3228] hover:border-[#C5A059]/70 text-[#C5A059] hover:text-[#F5EFEB] flex items-center justify-center transition-all duration-200 cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Interactive Slide Indicators */}
            <div className="flex items-center gap-1.5 px-2">
              {HERO_CAROUSEL_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(idx);
                    }}
                    aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                    className={`relative h-2 rounded-none transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive 
                        ? 'w-8 bg-[#C5A059]' 
                        : 'w-2.5 bg-[#1B3228] hover:bg-[#C5A059]/50'
                    }`}
                  >
                    {/* Animated Progress indicator on active slide when playing */}
                    {isActive && !isPaused && !isDragging && (
                      <span 
                        className="absolute inset-0 bg-[#F5EFEB]/40 origin-left animate-[progress_6s_linear_infinite]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next photograph slide"
              className="w-10 h-10 bg-[#0C1813] hover:bg-[#1B3228] border border-[#1B3228] hover:border-[#C5A059]/70 text-[#C5A059] hover:text-[#F5EFEB] flex items-center justify-center transition-all duration-200 cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Swipe Hint */}
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059]/80 font-sans flex items-center gap-1.5 px-1">
            <span>◄ SWIPE OR DRAG TO EXPLORE GALLERY ►</span>
          </div>

        </div>

      </div>

      {/* Hero Bottom Editorial Sub-bar with Store Coordinates */}
      <div className="relative z-20 w-full border-t border-[#C5A059]/15 bg-[#08100C]/85 backdrop-blur-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-[#D5CCC1] font-light">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-serif italic text-[#F5EFEB]">Diphalu, Laokhowa Road, Nagaon, Assam</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#BCB3A7]">
            <span>Hours: {STORE_DETAILS.openingHoursPlaceholder}</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Proprietor: {STORE_DETAILS.owner}</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
