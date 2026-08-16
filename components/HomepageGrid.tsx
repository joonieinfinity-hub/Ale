import React from 'react';
import { ViewTab, SpiritCategory } from '../types';
import { ASSETS, STORE_DETAILS } from '../data/inventory';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  Award, 
  Heart, 
  GlassWater, 
  Wine, 
  Beer, 
  Flame, 
  Compass 
} from 'lucide-react';

interface HomepageGridProps {
  onSelectTab: (tab: ViewTab) => void;
  onSelectCategory: (category: SpiritCategory) => void;
}

const HomepageGrid: React.FC<HomepageGridProps> = ({ onSelectTab, onSelectCategory }) => {
  const spiritsList: { name: SpiritCategory; icon: React.ReactNode }[] = [
    { name: 'Whisky', icon: <GlassWater className="w-3.5 h-3.5 text-[#D4A244]" /> },
    { name: 'Vodka', icon: <Flame className="w-3.5 h-3.5 text-[#D4A244]" /> },
    { name: 'Rum', icon: <Compass className="w-3.5 h-3.5 text-[#D4A244]" /> },
    { name: 'Gin', icon: <Sparkles className="w-3.5 h-3.5 text-[#D4A244]" /> },
    { name: 'Brandy', icon: <Wine className="w-3.5 h-3.5 text-[#D4A244]" /> },
    { name: 'Wine', icon: <Wine className="w-3.5 h-3.5 text-[#D4A244]" /> },
    { name: 'Beer', icon: <Beer className="w-3.5 h-3.5 text-[#D4A244]" /> },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#201813] via-[#17120F] to-[#0C0A0A] border-b border-[#2D2526] overflow-hidden">
      
      {/* Editorial Thin Sand Tan / Brass Line Separator with Center Jewel */}
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e1b382]/60 to-transparent" />
        <div className="absolute w-2 h-2 rotate-45 border border-[#e1b382] bg-[#c89666]/30 backdrop-blur-xs" />
      </div>

      {/* 4 Feature Cards Grid Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Card 1: THE ALE HOUSE EDIT */}
          <div 
            onClick={() => onSelectTab('collection')}
            className="group relative bg-[#141010] hover:bg-[#1A1415] rounded-xl border border-[#352B2C] hover:border-[#D4A244]/60 p-5 sm:p-6 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between min-h-[280px] cursor-pointer"
          >
            {/* Background bottle image on right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
              <img 
                src={ASSETS.editScotchBottle} 
                alt="The Ale House Edit - Glenfiddich Single Malt" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141010] via-[#141010]/60 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 space-y-2 max-w-[65%]">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#B59A68] uppercase font-semibold block">
                THE ALE HOUSE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE5D8] leading-tight">
                EDIT
              </h3>
              <p className="text-xs text-[#C9BFB2] leading-relaxed pt-1 font-light">
                Handpicked bottles for every occasion.
              </p>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-6">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTab('collection');
                }}
                className="px-4 py-2 bg-[#1B1616]/90 group-hover:bg-[#D4A244] text-[#EDE5D8] group-hover:text-[#120E0E] text-[11px] font-bold uppercase tracking-wider rounded-md border border-[#B59A68]/50 group-hover:border-[#D4A244] transition-all flex items-center gap-1.5 shadow"
              >
                <span>EXPLORE NOW</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 2: EXPLORE BY SPIRIT */}
          <div 
            className="group relative bg-[#141010] hover:bg-[#1A1415] rounded-xl border border-[#352B2C] hover:border-[#D4A244]/60 p-5 sm:p-6 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between min-h-[280px]"
          >
            {/* Background whisky glass on right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
              <img 
                src={ASSETS.whiskyIceRocks} 
                alt="Whisky on the rocks" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141010] via-[#141010]/60 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 space-y-1 max-w-[65%]">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#B59A68] uppercase font-semibold block">
                EXPLORE BY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE5D8] leading-tight mb-2">
                SPIRIT
              </h3>

              {/* Spirits List */}
              <div className="space-y-1 pt-1">
                {spiritsList.map((spirit) => (
                  <button
                    key={spirit.name}
                    onClick={() => onSelectCategory(spirit.name)}
                    className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-[#DCD2C3] hover:text-[#D4A244] uppercase tracking-wider transition-colors w-full text-left cursor-pointer hover:translate-x-0.5"
                  >
                    {spirit.icon}
                    <span>{spirit.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: PREMIUM BRANDS */}
          <div 
            onClick={() => onSelectTab('brands')}
            className="group relative bg-[#141010] hover:bg-[#1A1415] rounded-xl border border-[#352B2C] hover:border-[#D4A244]/60 p-5 sm:p-6 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between min-h-[280px] cursor-pointer"
          >
            {/* Background decanter bottle on right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
              <img 
                src={ASSETS.luxuryXrBottle} 
                alt="Premium Brands - Johnnie Walker XR 21" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141010] via-[#141010]/60 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 space-y-2 max-w-[65%]">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#B59A68] uppercase font-semibold block">
                PREMIUM
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE5D8] leading-tight">
                BRANDS
              </h3>
              <p className="text-xs text-[#C9BFB2] leading-relaxed pt-1 font-light">
                Discover global labels trusted worldwide.
              </p>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-6">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTab('brands');
                }}
                className="px-4 py-2 bg-[#1B1616]/90 group-hover:bg-[#D4A244] text-[#EDE5D8] group-hover:text-[#120E0E] text-[11px] font-bold uppercase tracking-wider rounded-md border border-[#B59A68]/50 group-hover:border-[#D4A244] transition-all flex items-center gap-1.5 shadow"
              >
                <span>BROWSE BRANDS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 4: VISIT ALE HOUSE WINE SHOP */}
          <div 
            onClick={() => onSelectTab('visit')}
            className="group relative bg-[#141010] hover:bg-[#1A1415] rounded-xl border border-[#352B2C] hover:border-[#D4A244]/60 p-5 sm:p-6 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between min-h-[280px] cursor-pointer"
          >
            {/* Background map with pin on right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
              <img 
                src={ASSETS.darkGoldMap} 
                alt="Map to Ale House Wine Shop" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141010] via-[#141010]/50 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 space-y-2 max-w-[65%]">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#EDE5D8] uppercase font-semibold block">
                VISIT ALE HOUSE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A244] leading-tight">
                WINE SHOP
              </h3>
              <p className="text-xs text-[#C9BFB2] leading-relaxed pt-1 font-light">
                Diphalu, Laokhowa Road, Nagaon, Assam
              </p>
            </div>

            {/* Bottom Link */}
            <div className="relative z-10 pt-6">
              <a
                href={STORE_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#D4A244] hover:text-[#E0AF4F] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors group-hover:underline"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5-Pillar Value Proposition / Trust Bar as shown in mockup */}
      <section className="border-t border-[#2D2526] bg-[#0E0B0B]/90 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 items-center">
          
          {/* Pillar 1 */}
          <div className="flex items-center gap-3 justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-full border border-[#D4A244]/50 bg-[#171313] flex items-center justify-center text-[#D4A244] shrink-0 shadow">
              <ShieldCheck className="w-5 h-5 text-[#D4A244]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-[#EDE5D8] tracking-wider uppercase leading-tight">
                100% GENUINE
              </span>
              <span className="block text-[10px] text-[#C9BFB2] tracking-widest uppercase font-light">
                PRODUCTS
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-center gap-3 justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-full border border-[#D4A244]/50 bg-[#171313] flex items-center justify-center text-[#D4A244] shrink-0 shadow">
              <Wine className="w-5 h-5 text-[#D4A244]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-[#EDE5D8] tracking-wider uppercase leading-tight">
                CAREFULLY
              </span>
              <span className="block text-[10px] text-[#C9BFB2] tracking-widest uppercase font-light">
                CURATED
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-center gap-3 justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-full border border-[#D4A244]/50 bg-[#171313] flex items-center justify-center text-[#D4A244] shrink-0 shadow">
              <Tag className="w-5 h-5 text-[#D4A244]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-[#EDE5D8] tracking-wider uppercase leading-tight">
                COMPETITIVE
              </span>
              <span className="block text-[10px] text-[#C9BFB2] tracking-widest uppercase font-light">
                PRICES
              </span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-center gap-3 justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-full border border-[#D4A244]/50 bg-[#171313] flex items-center justify-center text-[#D4A244] shrink-0 shadow">
              <Award className="w-5 h-5 text-[#D4A244]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-[#EDE5D8] tracking-wider uppercase leading-tight">
                BEST-IN-CLASS
              </span>
              <span className="block text-[10px] text-[#C9BFB2] tracking-widest uppercase font-light">
                SERVICE
              </span>
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="flex items-center gap-3 justify-start sm:justify-center col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-full border border-[#D4A244]/50 bg-[#171313] flex items-center justify-center text-[#D4A244] shrink-0 shadow">
              <Heart className="w-5 h-5 text-[#D4A244]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-[#EDE5D8] tracking-wider uppercase leading-tight">
                FOR EVERY
              </span>
              <span className="block text-[10px] text-[#C9BFB2] tracking-widest uppercase font-light">
                OCCASION
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomepageGrid;
