import React from 'react';
import { STORE_DETAILS, ASSETS, HERITAGE_BG_IMAGE } from '../data/inventory';
import { ViewTab } from '../types';
import { MapPin, PhoneCall, ArrowUpRight } from 'lucide-react';

interface HeritageSectionProps {
  onSelectTab?: (tab: ViewTab) => void;
}

const HeritageSection: React.FC<HeritageSectionProps> = ({ onSelectTab }) => {
  return (
    <section id="about" className="bg-[#08100C] py-20 sm:py-28 lg:py-32 border-b border-[#1B3228]/50 text-[#F5EFEB] relative overflow-hidden">
      
      {/* Subtle aged brass accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.28em] text-[#C5A059] uppercase font-semibold">
                A NAME YOU KNOW
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#F5EFEB] leading-[1.08]">
              Rooted in Nagaon. <br />
              <span className="text-[#EDE6DD] italic font-serif font-light">Built on trust.</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#C5A059]/50" />

            {/* Sincere, Concise Body Copy */}
            <div className="space-y-4 text-[#D5CCC1] text-sm sm:text-base leading-relaxed font-light font-sans max-w-2xl">
              <p>
                For over two decades, <strong className="text-[#F5EFEB] font-medium">ALE HOUSE WINE SHOP</strong> has stood as a familiar and trusted fixture along Laokhowa Road in Diphalu, Nagaon.
              </p>
              <p>
                We believe a genuine wine shop is built on longstanding relationships, honest counter recommendations, and an uncompromising commitment to 100% authentic, legally sourced stock.
              </p>
              <p className="text-[#BCB3A7]">
                Whether you are picking up everyday staples, searching for a single malt to mark a milestone, or coordinating wholesale requirements for hospitality, our team offers knowledgeable and respectful service.
              </p>
            </div>

            {/* Understated Detail Tags */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#1B3228] text-xs">
              <div className="py-2">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-semibold mb-0.5">ESTABLISHED</span>
                <span className="text-[#F5EFEB] font-serif">1998 in Nagaon, Assam</span>
              </div>
              <div className="py-2 sm:border-l sm:border-[#1B3228] sm:pl-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-semibold mb-0.5">LOCATION</span>
                <span className="text-[#F5EFEB] font-serif">Diphalu, Laokhowa Rd</span>
              </div>
              <div className="py-2 sm:border-l sm:border-[#1B3228] sm:pl-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-semibold mb-0.5">PROPRIETOR</span>
                <span className="text-[#F5EFEB] font-serif">{STORE_DETAILS.owner}</span>
              </div>
            </div>

            {/* Sincere Quote Container */}
            <div className="p-5 bg-[#0C1813] border-l-2 border-[#C5A059] border-y border-r border-[#1B3228] text-[#F5EFEB]">
              <p className="font-serif italic text-base sm:text-lg text-[#EDE6DD] font-light leading-relaxed">
                "Our doors are always open with genuine bottles, fair pricing, and honest local hospitality."
              </p>
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#C5A059] uppercase mt-2">
                — Prasanta Kalita · Proprietor
              </span>
            </div>

            {/* Section CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={STORE_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#08100C]" />
                <span>FIND OUR STORE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#08100C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
                className="px-6 py-3.5 bg-[#0C1813] hover:bg-[#102019] text-[#F5EFEB] border border-[#C5A059]/60 hover:border-[#C5A059] text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>WHOLESALE DESK</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Split Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#0C1813] border border-[#1B3228] p-3 sm:p-4 shadow-2xl">
              
              {/* Cropped Storefront / Cellar Photograph */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#050B08]">
                <img 
                  src={HERITAGE_BG_IMAGE} 
                  alt="ALE HOUSE WINE SHOP Nagaon Storefront and Curated Shelves" 
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08100C] via-[#08100C]/30 to-transparent opacity-90" />
                
                {/* Photo Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#08100C]/90 border border-[#C5A059]/40 text-[9px] font-sans font-bold tracking-widest text-[#C5A059] uppercase backdrop-blur-sm">
                  DIPHALU · NAGAON
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 inset-x-4 text-left">
                  <span className="text-[10px] text-[#C5A059] tracking-widest uppercase block font-semibold mb-1">
                    LAOKHOWA ROAD STOREFRONT
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#F5EFEB] font-bold leading-snug">
                    Serving Nagaon and Assam patrons with authentic stock.
                  </p>
                </div>
              </div>

              {/* Minimal Bottom Specs */}
              <div className="mt-4 pt-3 border-t border-[#1B3228] flex items-center justify-between text-[11px] text-[#D5CCC1]">
                <span>Diphalu, Nagaon (PIN 782003)</span>
                <span className="text-[#C5A059] font-medium">Licensed Retailer</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeritageSection;


