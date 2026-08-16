import React from 'react';
import { STORE_DETAILS } from '../data/inventory';
import { ViewTab } from '../types';
import { Award, MapPin, ShieldCheck, History, PhoneCall, ArrowUpRight } from 'lucide-react';
import { OfficialLogoSeal } from './OfficialBrandLogo';

interface AboutPageProps {
  onSelectTab: (tab: ViewTab) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onSelectTab }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#08100C] min-h-screen text-[#D5CCC1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#0C1813] border border-[#C5A059]/40 mb-4 shadow">
            <History className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase">
              LOCAL HERITAGE & ORIGINS
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#F5EFEB] mb-3">
            OUR STORY
          </h1>

          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-4 opacity-75" />

          <p className="text-base sm:text-lg text-[#C5A059] font-serif italic mb-2">
            ALE HOUSE WINE SHOP · ESTABLISHED IN 1998
          </p>

          <p className="text-xs text-[#BCB3A7] font-light">
            Diphalu, Laokhowa Road, Nagaon, Assam · Proprietor: {STORE_DETAILS.owner}
          </p>
        </div>

        {/* Official Heritage Seal Display */}
        <div className="bg-[#0C1813] border border-[#1B3228] p-8 sm:p-12 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Center / Left: Official Logo Seal */}
            <div className="md:col-span-5 flex justify-center">
              <OfficialLogoSeal 
                variant="brass" 
                className="w-56 sm:w-64" 
              />
            </div>

            {/* Narrative Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>26+ Years of Community Sourcing</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFEB]">
                A Local Legacy Built on Familiarity & Sincerity
              </h2>

              <p className="text-xs sm:text-sm text-[#D5CCC1] leading-relaxed font-light">
                Founded in 1998 by <strong className="text-[#F5EFEB] font-medium">{STORE_DETAILS.owner}</strong>, <strong>ALE HOUSE WINE SHOP</strong> has operated continuously at Diphalu on Laokhowa Road in Nagaon, Assam.
              </p>

              <p className="text-xs sm:text-sm text-[#BCB3A7] leading-relaxed font-light">
                For over a quarter of a century, our storefront has remained dedicated to serving our community with authenticity, genuine brand sourcing, and warm personal attention. We take pride in cultivating long-standing customer relationships and offering a dependable selection of domestic and international spirits.
              </p>

              <div className="pt-4 border-t border-[#1B3228] flex flex-wrap gap-4 text-xs font-semibold text-[#C5A059]">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Established 1998</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Diphalu, Nagaon, Assam</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Editorial Timeline Component */}
        <div className="bg-[#0C1813] border border-[#1B3228] p-6 sm:p-10 mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFEB] mb-2 text-center">
            OUR TIMELINE
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-3 opacity-60" />
          <p className="text-xs text-[#BCB3A7] text-center mb-10 max-w-xl mx-auto font-light">
            An ongoing journey of retail excellence and community trust in Nagaon.
          </p>

          <div className="relative border-l-2 border-[#1B3228] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            
            {/* Milestone 1: 1998 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-5 h-5 rounded-none bg-[#C5A059] border-2 border-[#08100C] shadow" />
              <div className="bg-[#08100C] border border-[#1B3228] p-5 max-w-2xl">
                <span className="font-serif text-2xl font-bold text-[#C5A059] block mb-1">
                  1998
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F5EFEB] mb-2">
                  The Beginning of ALE HOUSE WINE SHOP
                </h3>
                <p className="text-xs text-[#BCB3A7] leading-relaxed font-light">
                  ALE HOUSE WINE SHOP begins its journey at Diphalu, Laokhowa Road, Nagaon, Assam under the leadership of {STORE_DETAILS.owner}.
                </p>
              </div>
            </div>

            {/* Milestone 2: TODAY */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-5 h-5 rounded-none bg-[#C5A059] border-2 border-[#08100C] shadow" />
              <div className="bg-[#08100C] border border-[#1B3228] p-5 max-w-2xl">
                <span className="font-serif text-2xl font-bold text-[#C5A059] block mb-1">
                  TODAY
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F5EFEB] mb-2">
                  A Continuing Local Legacy in Nagaon
                </h3>
                <p className="text-xs text-[#BCB3A7] leading-relaxed font-light">
                  A continuing local legacy in Nagaon — providing an authentic spirits catalogue, transparent service, and serving our community with care.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              onSelectTab('visit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-bold text-xs uppercase tracking-[0.2em] rounded-none transition-all cursor-pointer shadow-lg"
          >
            VISIT OUR NAGAON STORE →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;

