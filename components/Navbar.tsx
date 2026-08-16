import React, { useState, useEffect } from 'react';
import { ViewTab } from '../types';
import { STORE_DETAILS } from '../data/inventory';
import { MapPin, Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { OfficialBottleMark } from './OfficialBrandLogo';

interface NavbarProps {
  activeTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  onNavigateSection?: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; tab: ViewTab; sectionId: string }[] = [
    { label: 'HOME', tab: 'home', sectionId: 'hero' },
    { label: 'ABOUT', tab: 'about', sectionId: 'about' },
    { label: 'COLLECTION', tab: 'collection', sectionId: 'collection' },
    { label: 'GALLERY', tab: 'gallery', sectionId: 'gallery' },
    { label: 'VISIT US', tab: 'visit', sectionId: 'visit' },
    { label: 'CONTACT', tab: 'contact', sectionId: 'contact' }
  ];

  const handleLinkClick = (item: { label: string; tab: ViewTab; sectionId: string }) => {
    setMobileMenuOpen(false);
    if (activeTab === 'home') {
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onSelectTab(item.tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500">
      <div 
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? 'bg-[#08100C]/95 backdrop-blur-md border-b border-[#C5A059]/25 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-2.5 sm:py-3' 
            : 'bg-gradient-to-b from-[#08100C]/95 via-[#08100C]/60 to-transparent py-3 sm:py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Official Bottle Mark Lockup */}
          <button
            onClick={() => handleLinkClick({ label: 'HOME', tab: 'home', sectionId: 'hero' })}
            className="text-left group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none cursor-pointer"
            aria-label="Ale House Wine Shop - Home"
          >
            {/* Official Wine Bottle & Grapes Brand Mark */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-[#08100C] border border-[#C5A059]/50 group-hover:border-[#C5A059] flex items-center justify-center p-1 text-[#C5A059] transition-all shadow-sm shrink-0">
              <OfficialBottleMark color="#C5A059" className="w-full h-full" />
            </div>

            {/* Typography Stack */}
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-[0.14em] text-[#F5EFEB] group-hover:text-[#C5A059] transition-colors leading-none">
                  ALE HOUSE
                </span>
                {/* Desktop secondary label */}
                <span className="hidden sm:inline font-serif text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase leading-none">
                  WINE SHOP
                </span>
              </div>
              
              {/* Mobile second line */}
              <div className="sm:hidden flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] font-sans font-semibold tracking-[0.22em] text-[#C5A059] uppercase leading-none">
                  WINE SHOP
                </span>
                <span className="text-[8px] text-[#BCB3A7]/60">·</span>
                <span className="text-[8px] tracking-[0.18em] text-[#BCB3A7] uppercase font-sans font-light leading-none">
                  NAGAON
                </span>
              </div>

              {/* Desktop location line */}
              <span className="hidden sm:block text-[9px] tracking-[0.26em] text-[#BCB3A7] uppercase font-sans font-light mt-1 leading-none">
                NAGAON, ASSAM · EST. 1998
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item)}
                className="px-3.5 py-2 text-[11px] font-sans font-semibold tracking-[0.22em] text-[#D5CCC1] hover:text-[#C5A059] transition-colors relative cursor-pointer group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </nav>

          {/* Desktop Right Quick Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
              className="px-4 py-2 border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#08100C]/70 text-[#F5EFEB] hover:text-[#C5A059] text-[11px] font-sans font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>WHOLESALE</span>
            </a>

            <a
              href={STORE_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] text-[11px] font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-[#08100C]" />
              <span>DIRECTIONS</span>
              <ArrowUpRight className="w-3 h-3 text-[#08100C]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={STORE_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#08100C] bg-[#C5A059] border border-[#C5A059] text-xs font-bold"
              aria-label="Get Directions on Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5EFEB] bg-[#08100C]/80 border border-[#C5A059]/50 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Compact Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-[#08100C]/98 border-b border-[#C5A059]/30 shadow-2xl p-6 backdrop-blur-xl animate-fade-in z-50">
          <div className="flex flex-col space-y-1 mb-6">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-semibold pb-2 border-b border-[#1B3228]">
              ALE HOUSE WINE SHOP · NAGAON
            </span>
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item)}
                className="flex items-center justify-between py-3 text-xs font-bold tracking-[0.2em] text-[#F5EFEB] hover:text-[#C5A059] border-b border-[#102019] text-left transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-[#C5A059]">→</span>
              </button>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={STORE_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#C5A059] text-[#08100C] text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow"
            >
              <MapPin className="w-3.5 h-3.5 text-[#08100C]" />
              <span>GET DIRECTIONS (DIPHALU, NAGAON)</span>
            </a>

            <a
              href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
              className="w-full py-3 px-4 bg-[#08100C] border border-[#C5A059]/70 text-[#F5EFEB] text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>CALL FOR WHOLESALE</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


