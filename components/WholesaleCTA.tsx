import React from 'react';
import { STORE_DETAILS } from '../data/inventory';
import { PhoneCall, Building2, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

const WholesaleCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#08100C] border-b border-[#1B3228]/50 text-[#F5EFEB] relative overflow-hidden">
      
      {/* Subtle aged brass ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-[#0C1813] border border-[#1B3228] hover:border-[#C5A059]/50 transition-colors p-8 sm:p-12 lg:p-16 shadow-2xl text-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#08100C] border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-5 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>COMMERCIAL & BULK SUPPLY</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight text-[#F5EFEB] mb-4">
            WHOLESALE ENQUIRIES
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-6" />

          {/* Sincere Supporting Text */}
          <p className="text-base sm:text-lg text-[#D5CCC1] font-sans font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Looking to enquire about wholesale? Speak with our team directly.
          </p>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="p-3.5 bg-[#08100C] border border-[#1B3228] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="text-xs text-[#D5CCC1] font-light">Licensed bulk supply for events & banquets</span>
            </div>
            <div className="p-3.5 bg-[#08100C] border border-[#1B3228] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="text-xs text-[#D5CCC1] font-light">Direct wholesale price coordination</span>
            </div>
            <div className="p-3.5 bg-[#08100C] border border-[#1B3228] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="text-xs text-[#D5CCC1] font-light">Verified genuine bottles & excise permits</span>
            </div>
          </div>

          {/* Action Button: CALL FOR WHOLESALE */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
              className="w-full sm:w-auto px-10 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-sans font-bold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#08100C]" />
              <span>CALL FOR WHOLESALE</span>
            </a>

            <a
              href={`https://wa.me/${STORE_DETAILS.wholesalePhoneDial.replace(/[^0-9]/g, '')}?text=Hello%20Ale%20House%20Wine%20Shop,%20I%20would%20like%20to%20enquire%20about%20wholesale%20supply.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#08100C] hover:bg-[#102019] text-[#F5EFEB] border border-[#C5A059]/60 hover:border-[#C5A059] font-sans font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>WHATSAPP DESK</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1B3228] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#BCB3A7] font-light">
            <span>Direct Desk: <strong className="text-[#F5EFEB] font-medium">{STORE_DETAILS.wholesalePhone}</strong></span>
            <span className="hidden sm:inline">·</span>
            <span>Diphalu, Laokhowa Road, Nagaon, Assam</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WholesaleCTA;
