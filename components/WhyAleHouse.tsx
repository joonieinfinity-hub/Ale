import React from 'react';
import { ViewTab } from '../types';
import { STORE_DETAILS } from '../data/inventory';
import { ShieldCheck, MapPin, Wine, PhoneCall, ArrowUpRight } from 'lucide-react';

interface WhyAleHouseProps {
  onSelectTab?: (tab: ViewTab) => void;
}

const WhyAleHouse: React.FC<WhyAleHouseProps> = ({ onSelectTab }) => {
  const pillars = [
    {
      id: 'trusted-locally',
      title: 'TRUSTED LOCALLY',
      description: 'A familiar destination for customers in Nagaon, serving generations of patrons with genuine goodwill.',
      icon: MapPin,
      detail: 'Established 1998 in Diphalu'
    },
    {
      id: 'authentic-selection',
      title: 'AUTHENTIC SELECTION',
      description: 'Products sourced strictly through legitimate, licensed channels with guaranteed provenance and seal integrity.',
      icon: ShieldCheck,
      detail: '100% Genuine & Licensed'
    },
    {
      id: 'premium-everyday',
      title: 'PREMIUM & EVERYDAY',
      description: 'A balanced portfolio suited to everyday gatherings, milestone toasts, festival celebrations, and quiet evenings.',
      icon: Wine,
      detail: '80+ Curated Labels'
    },
    {
      id: 'wholesale',
      title: 'WHOLESALE',
      description: 'Dedicated assistance and supply coordination for hospitality establishments, banquet events, and bulk enquiries.',
      icon: PhoneCall,
      detail: 'Direct Desk Coordination'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#0C1813] border-b border-[#1B3228]/50 text-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#08100C] border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <span>OUR CORE COMMITMENTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFEB] mb-4">
            WHY ALE HOUSE
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-4" />

          <p className="text-[#D5CCC1] font-sans text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Quiet standards that have defined our counter service, inventory curation, and community reputation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-8 bg-[#08100C] border border-[#1B3228] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  {/* Minimal Brass Line Icon */}
                  <div className="w-12 h-12 rounded-none bg-[#0C1813] border border-[#C5A059]/40 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] flex items-center justify-center text-[#C5A059] group-hover:text-[#08100C] transition-all mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5EFEB] group-hover:text-[#C5A059] transition-colors mb-3 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#D5CCC1] font-sans font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1B3228] flex items-center justify-between text-[10px] font-sans font-semibold tracking-widest text-[#BCB3A7] uppercase">
                  <span>{pillar.detail}</span>
                  <span className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyAleHouse;
