import React from 'react';
import { STORE_DETAILS } from '../data/inventory';
import { MapPin, Clock, Phone, ShieldCheck, ArrowUpRight, Navigation, Compass } from 'lucide-react';
import InteractiveMiniMap from './InteractiveMiniMap';

const VisitUsSection: React.FC = () => {
  return (
    <section id="visit" className="py-20 sm:py-28 lg:py-32 bg-[#0C1813] border-b border-[#1B3228]/50 text-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#08100C] border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>STORE LOCATION & HOURS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#F5EFEB] mb-4">
            COME FIND US
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-4" />

          <p className="text-[#D5CCC1] font-sans text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Conveniently situated in Diphalu along Laokhowa Road, serving customers across Nagaon and neighboring districts.
          </p>
        </div>

        {/* Two-Column Location Card & Interactive Map Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Store Details */}
          <div className="lg:col-span-5 bg-[#08100C] border border-[#1B3228] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-[#C5A059] text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-1">
                  <span>RETAIL STOREFRONT</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFEB]">
                  ALE HOUSE WINE SHOP
                </h3>
                <p className="font-serif italic text-[#D5CCC1] text-sm mt-0.5">
                  Nagaon, Assam
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#1B3228]" />

              {/* Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#0C1813] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A059] uppercase block mb-1">
                    ADDRESS
                  </span>
                  <p className="text-sm text-[#F5EFEB] font-medium leading-snug">
                    {STORE_DETAILS.addressLine1}
                  </p>
                  <p className="text-xs text-[#D5CCC1] font-light mt-0.5">
                    {STORE_DETAILS.city}, {STORE_DETAILS.state} — PIN {STORE_DETAILS.pin}
                  </p>
                  <p className="text-[11px] text-[#BCB3A7] font-light mt-1">
                    (Landmark: Centrally situated on Laokhowa Road, Diphalu)
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#0C1813] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A059] uppercase block mb-1">
                    OPENING HOURS
                  </span>
                  <p className="text-sm text-[#F5EFEB] font-medium leading-snug">
                    {STORE_DETAILS.openingHoursPlaceholder}
                  </p>
                  <p className="text-xs text-[#BCB3A7] font-light mt-0.5">
                    Open 7 days a week for retail sales and counter assistance.
                  </p>
                </div>
              </div>

              {/* Proprietorship */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#0C1813] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A059] uppercase block mb-1">
                    PROPRIETOR
                  </span>
                  <p className="text-sm text-[#F5EFEB] font-medium leading-snug">
                    {STORE_DETAILS.owner}
                  </p>
                  <p className="text-xs text-[#BCB3A7] font-light mt-0.5">
                    Licensed Indian Made Foreign Liquor & Beer Retailer.
                  </p>
                </div>
              </div>

            </div>

            {/* Prominent Aged Brass Action */}
            <div className="pt-8 mt-8 border-t border-[#1B3228]">
              <a
                href={STORE_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
              >
                <Navigation className="w-4 h-4 text-[#08100C]" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4 text-[#08100C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Mini-Map & Route Guidance */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <InteractiveMiniMap className="w-full" />

            {/* Landmark Guidance Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs font-light text-[#D5CCC1]">
              <div className="p-3.5 bg-[#08100C] border border-[#1B3228]">
                <span className="font-semibold text-[#C5A059] block mb-1 font-sans text-[11px] uppercase tracking-wider">
                  PARKING & ACCESSIBILITY
                </span>
                Ample street-side parking bays along the shop front for quick drive-in and customer collection.
              </div>
              <div className="p-3.5 bg-[#08100C] border border-[#1B3228]">
                <span className="font-semibold text-[#C5A059] block mb-1 font-sans text-[11px] uppercase tracking-wider">
                  PAYMENTS ACCEPTED
                </span>
                Accepting UPI (Google Pay, PhonePe, Paytm), cash, and major credit/debit cards at the counter.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1B3228] flex flex-wrap items-center justify-between text-[11px] text-[#BCB3A7] gap-2">
              <span>For counter directions and hold inquiries:</span>
              <a href={`tel:${STORE_DETAILS.wholesalePhoneDial}`} className="text-[#C5A059] font-semibold hover:underline">
                {STORE_DETAILS.phonePlaceholder}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisitUsSection;
