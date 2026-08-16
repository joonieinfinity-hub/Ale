import React from 'react';
import { ViewTab } from '../types';
import { STORE_DETAILS } from '../data/inventory';
import { MapPin, Phone, Clock, ShieldCheck, PhoneCall, ArrowUpRight } from 'lucide-react';
import { OfficialBottleMark } from './OfficialBrandLogo';

interface FooterProps {
  onSelectTab: (tab: ViewTab) => void;
}

const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNavClick = (tab: ViewTab, sectionId?: string) => {
    onSelectTab(tab);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B08] border-t border-[#1B3228] text-[#D5CCC1] text-xs pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#1B3228]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#08100C] border border-[#C5A059]/60 flex items-center justify-center p-1 text-[#C5A059] shadow">
                <OfficialBottleMark color="#C5A059" className="w-full h-full" />
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-[0.12em] text-[#F5EFEB]">
                  ALE HOUSE WINE SHOP
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-sans font-medium mt-0.5">
                  NAGAON, ASSAM · EST. 1998
                </span>
              </div>
            </div>

            <p className="text-[#BCB3A7] text-xs leading-relaxed max-w-sm font-light font-sans">
              A trusted liquor retail shop in Nagaon, Assam. Offering an authentic, verified catalogue of whisky, wine, beer, and spirits with attentive counter service and wholesale assistance.
            </p>

            <div className="pt-2 text-[11px] text-[#D5CCC1] space-y-1.5 font-light">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{STORE_DETAILS.addressLine1}, {STORE_DETAILS.city}, {STORE_DETAILS.state} {STORE_DETAILS.pin}</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Proprietor: {STORE_DETAILS.owner} · Licensed Retailer</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-sans text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-3">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-light">
              <li>
                <button onClick={() => handleNavClick('home', 'hero')} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'about')} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'collection')} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Collection
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'gallery')} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'visit')} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Visit Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'contact')} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                  Contact & Wholesale
                </button>
              </li>
            </ul>
          </div>

          {/* Store Info & Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-sans text-[11px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block mb-3">
              STORE DETAILS
            </span>
            <div className="space-y-3 text-[#BCB3A7]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F5EFEB] font-medium block">Opening Hours</span>
                  <span className="font-light">{STORE_DETAILS.openingHoursPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F5EFEB] font-medium block">Store Counter Phone</span>
                  <span className="font-light">{STORE_DETAILS.phonePlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F5EFEB] font-medium block">Wholesale Desk</span>
                  <a href={`tel:${STORE_DETAILS.wholesalePhoneDial}`} className="font-light text-[#C5A059] hover:underline">
                    {STORE_DETAILS.wholesalePhone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#D4AF37] font-semibold uppercase tracking-wider"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Responsible Drinking Legal Notice Bar */}
        <div className="bg-[#08100C] border border-[#1B3228] p-4 text-center max-w-4xl mx-auto space-y-1">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C5A059] block">
            RESPONSIBLE DRINKING & STATUTORY NOTICE
          </span>
          <p className="text-[11px] text-[#BCB3A7] leading-relaxed font-light">
            Legal Notice: Sale of alcohol is strictly restricted to persons of legal drinking age in Assam. Please drink responsibly and comply with applicable local laws. ALE HOUSE WINE SHOP does not offer online sales or unattended delivery.
          </p>
        </div>

        {/* Discreet Copyright Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#BCB3A7] pt-4 font-light border-t border-[#102019]">
          <p>© ALE HOUSE WINE SHOP. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0">Diphalu, Laokhowa Road, Nagaon, Assam 782003</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


