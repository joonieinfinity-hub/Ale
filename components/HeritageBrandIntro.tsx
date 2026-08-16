import React from 'react';
import { OfficialLogoSeal } from './OfficialBrandLogo';

const HeritageBrandIntro: React.FC = () => {
  return (
    <section 
      id="heritage-intro" 
      className="bg-[#F7F4EE] py-24 sm:py-32 lg:py-36 text-[#14241E] relative overflow-hidden border-b border-[#E3DCce] transition-colors"
    >
      {/* Subtle Fine Top Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Centered Official Heritage Logo Seal with Generous Breathing Room */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="transition-transform duration-700 hover:scale-[1.01]">
            <OfficialLogoSeal 
              variant="parchment" 
              className="w-60 sm:w-72 md:w-80 max-w-full" 
            />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 sm:w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-[11px] sm:text-xs font-sans tracking-[0.3em] text-[#8C703A] uppercase font-semibold">
            EST. 1998 · NAGAON, ASSAM
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-[#C5A059]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal tracking-tight text-[#14241E] leading-[1.12] mb-6">
          A name rooted in Nagaon.
        </h2>

        {/* Fine Accent Divider */}
        <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6 opacity-75" />

        {/* Sincere, Restrained Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#3E4E46] font-serif font-light leading-relaxed max-w-2xl mx-auto italic">
          "Since 1998, Ale House Wine Shop has been a familiar part of the local landscape — built around trust, familiarity, and the simple tradition of serving our community well."
        </p>

      </div>

      {/* Subtle Fine Bottom Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
    </section>
  );
};

export default HeritageBrandIntro;
