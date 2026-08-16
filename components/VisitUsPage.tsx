import React, { useState } from 'react';
import { STORE_DETAILS } from '../data/inventory';
import { MapPin, Phone, MessageSquare, Clock, Copy, Check, Navigation, User, Store, ExternalLink, Info } from 'lucide-react';

const VisitUsPage: React.FC = () => {
  const [addressCopied, setAddressCopied] = useState(false);
  const [contactNotice, setContactNotice] = useState<string | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_DETAILS.fullAddress);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const handleShowNotice = (msg: string) => {
    setContactNotice(msg);
    setTimeout(() => setContactNotice(null), 3500);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#171313] min-h-screen text-[#DCD2C3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#211A1A] border border-[#B59A68]/40 mb-4 shadow">
            <MapPin className="w-3.5 h-3.5 text-[#B59A68]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#B59A68] uppercase">
              STORE LOCATION & VISITOR GUIDE
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#EDE5D8] mb-3">
            VISIT ALE HOUSE
          </h1>

          <div className="w-16 h-[1px] bg-[#B59A68] mx-auto mb-4 opacity-75" />

          <p className="text-base sm:text-lg text-[#DCD2C3] font-serif italic font-light">
            "Conveniently located at Diphalu on Laokhowa Road in Nagaon, Assam."
          </p>
        </div>

        {/* Floating Notification for contact buttons */}
        {contactNotice && (
          <div className="mb-6 p-4 bg-[#c89666]/90 border border-[#e1b382] text-[#171313] font-bold text-xs font-sans text-center rounded-none shadow-xl animate-fade-in flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-[#171313]" />
            <span>{contactNotice}</span>
          </div>
        )}

        {/* Primary Store Address & Quick Action Card */}
        <div className="bg-[#1D1818] border border-[#352B2C] rounded-none p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Address Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#B59A68] uppercase block mb-1">
                  ESTABLISHED 1998 · NAGAON, ASSAM
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#EDE5D8] mb-2">
                  {STORE_DETAILS.name}
                </h2>
                <p className="text-xs text-[#C9BFB2] flex items-center gap-1.5 font-light">
                  <User className="w-3.5 h-3.5 text-[#B59A68]" />
                  <span>Proprietor: <strong className="text-[#EDE5D8] font-medium">{STORE_DETAILS.owner}</strong></span>
                </p>
              </div>

              {/* Exact Address Box */}
              <div className="p-5 bg-[#110F0F] border border-[#2D2526] rounded-none space-y-2 relative">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B59A68]">
                  Physical Storefront Address
                </span>
                <p className="font-serif text-lg font-bold text-[#EDE5D8] leading-snug">
                  {STORE_DETAILS.addressLine1}
                </p>
                <p className="text-xs text-[#DCD2C3] font-light">
                  {STORE_DETAILS.addressLine2}, India — PIN: <strong className="text-[#EDE5D8] font-medium">{STORE_DETAILS.pin}</strong>
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1D1818] hover:bg-[#211A1A] border border-[#352B2C] hover:border-[#e1b382] text-xs font-semibold text-[#e1b382] rounded-none transition-all cursor-pointer"
                  >
                    {addressCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{addressCopied ? 'Address Copied!' : 'Copy Full Address'}</span>
                  </button>
                </div>
              </div>

              {/* Information Grid Placeholders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
                {/* Phone */}
                <div className="p-3.5 bg-[#110F0F] border border-[#2D2526] rounded-none flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B59A68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#EDE5D8] block font-sans">Phone Inquiries</span>
                    <span className="text-[#C9BFB2] italic">{STORE_DETAILS.phonePlaceholder}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-3.5 bg-[#110F0F] border border-[#2D2526] rounded-none flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#B59A68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#EDE5D8] block font-sans">WhatsApp Counter</span>
                    <span className="text-[#C9BFB2] italic">{STORE_DETAILS.whatsappPlaceholder}</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-3.5 bg-[#110F0F] border border-[#2D2526] rounded-none flex items-start gap-3 sm:col-span-2">
                  <Clock className="w-4 h-4 text-[#B59A68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#EDE5D8] block font-sans">Store Opening Hours</span>
                    <span className="text-[#C9BFB2] italic">{STORE_DETAILS.openingHoursPlaceholder}</span>
                    <p className="text-[10px] text-[#C9BFB2] mt-1">(Hours governed by Assam Excise regulations)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs Column */}
            <div className="lg:col-span-5 bg-[#110F0F] border border-[#2D2526] rounded-none p-6 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B59A68] block mb-2">
                STORE DIRECTIONS & CONTACT
              </span>

              {/* Main Directions CTA */}
              <a
                href={STORE_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 hover:border-[#c89666] font-bold text-xs uppercase tracking-[0.2em] rounded-none shadow-lg transition-all flex items-center justify-center gap-2.5 text-center cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#171313]" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#171313]" />
              </a>

              {/* Call Store Button Placeholder */}
              <button
                onClick={() => handleShowNotice("Store phone number will be displayed once verified counter contact is added.")}
                className="w-full py-3 bg-[#1D1818] hover:bg-[#211A1A] text-[#EDE5D8] border border-[#352B2C] hover:border-[#e1b382] font-semibold text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#B59A68]" />
                <span>CALL STORE</span>
              </button>

              {/* WhatsApp Button Placeholder */}
              <button
                onClick={() => handleShowNotice("Store WhatsApp link will be activated once official counter number is verified.")}
                className="w-full py-3 bg-[#1D1818] hover:bg-[#211A1A] text-[#EDE5D8] border border-[#352B2C] hover:border-[#e1b382] font-semibold text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#B59A68]" />
                <span>WHATSAPP INQUIRY</span>
              </button>

              <div className="pt-2 text-[10px] text-[#C9BFB2] text-center leading-relaxed font-light">
                Visit us directly in Diphalu for counter retail sales, bottle size inquiries, and verified local pricing.
              </div>
            </div>

          </div>
        </div>

        {/* Map Preview Card Placeholder */}
        <div className="bg-[#1D1818] border border-[#352B2C] rounded-none p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2D2526]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B59A68]">
                MAP LOCATION PREVIEW
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#EDE5D8]">
                Diphalu, Laokhowa Road, Nagaon
              </h3>
            </div>

            <a
              href={STORE_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#110F0F] hover:bg-[#211A1A] border border-[#e1b382]/50 text-[#e1b382] hover:text-[#EDE5D8] text-xs font-bold uppercase tracking-wider rounded-none inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Frame Container */}
          <div className="relative h-80 w-full bg-[#110F0F] border border-[#2D2526] rounded-none overflow-hidden flex flex-col items-center justify-center text-center p-6 group">
            <div className="w-14 h-14 rounded-none bg-[#1D1818] border border-[#e1b382] flex items-center justify-center text-[#e1b382] mb-3 shadow-xl transform group-hover:scale-105 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>

            <h4 className="font-serif text-xl font-bold text-[#EDE5D8] mb-1">
              ALE HOUSE WINE SHOP
            </h4>
            <p className="text-xs text-[#DCD2C3] max-w-sm mb-4 font-light">
              Diphalu, Laokhowa Road, Nagaon, Assam 782003
            </p>

            <a
              href={STORE_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 font-bold text-xs uppercase tracking-[0.2em] rounded-none shadow-lg transition-all"
            >
              LAUNCH INTERACTIVE NAVIGATION →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisitUsPage;

