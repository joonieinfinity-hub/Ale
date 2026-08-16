import React, { useState } from 'react';
import { ViewTab } from '../types';
import { SHOP_GALLERY_IMAGES, STORE_DETAILS, ASSETS } from '../data/inventory';
import { Camera, MapPin, Maximize2, X, ArrowUpRight } from 'lucide-react';

interface StoreGalleryProps {
  onSelectTab?: (tab: ViewTab) => void;
}

const StoreGallery: React.FC<StoreGalleryProps> = ({ onSelectTab }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof SHOP_GALLERY_IMAGES[0] | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-[#08100C] border-b border-[#1B3228]/50 text-[#F5EFEB] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0C1813] border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>PHOTOGRAPHIC ARCHIVE & STOREFRONT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#F5EFEB] mb-4">
            SEE THE STORE
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-4" />

          <p className="text-[#D5CCC1] font-sans text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            A glimpse into life at our Diphalu shopfront on Laokhowa Road — authentic bottles, organized shelves, and counter hospitality.
          </p>
        </div>

        {/* Editorial Photo Spread Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:grid-rows-3 md:h-[640px] mb-12">
          {SHOP_GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative overflow-hidden rounded-none border border-[#1B3228] hover:border-[#C5A059] bg-[#0C1813] cursor-pointer transition-all duration-500 shadow-xl ${item.aspect}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.05] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08100C] via-[#08100C]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 bg-[#08100C]/90 border border-[#C5A059]/40 text-[10px] font-sans font-bold tracking-widest text-[#F5EFEB] uppercase backdrop-blur-md">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-none bg-[#08100C]/80 border border-[#1B3228] group-hover:border-[#C5A059] flex items-center justify-center text-[#F5EFEB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#F5EFEB] group-hover:text-[#C5A059] transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D5CCC1] font-sans line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legend / Heritage Stat Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#0C1813] border border-[#1B3228] mb-8 text-center sm:text-left">
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-none bg-[#08100C] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <span className="font-serif font-bold text-sm">98</span>
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#F5EFEB]">Established 1998</h4>
              <p className="text-xs text-[#BCB3A7] font-light">26+ years serving Diphalu & Nagaon patrons</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 sm:border-l sm:border-[#1B3228]">
            <div className="w-10 h-10 rounded-none bg-[#08100C] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <span className="font-serif font-bold text-sm">PK</span>
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#F5EFEB]">Proprietor Prasanta Kalita</h4>
              <p className="text-xs text-[#BCB3A7] font-light">Personalized counter advice & authentic stock</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 sm:border-l sm:border-[#1B3228]">
            <div className="w-10 h-10 rounded-none bg-[#08100C] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#F5EFEB]">Diphalu, Laokhowa Road</h4>
              <p className="text-xs text-[#BCB3A7] font-light">Centrally located in Nagaon, Assam (PIN 782003)</p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Photo Preview Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#08100C]/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#0C1813] border border-[#C5A059]/50 p-4 sm:p-6 shadow-2xl overflow-hidden rounded-none">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-[#D5CCC1] hover:text-[#F5EFEB] bg-[#08100C] border border-[#1B3228] hover:border-[#C5A059] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#C5A059]" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Main Expanded Image */}
              <div className="w-full md:w-2/3 bg-[#08100C] border border-[#1B3228] overflow-hidden flex items-center justify-center max-h-[70vh]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              {/* Photo Story Details */}
              <div className="w-full md:w-1/3 flex flex-col justify-between space-y-4">
                <div>
                  <span className="px-2.5 py-1 bg-[#08100C] border border-[#C5A059]/60 text-[10px] font-sans font-bold tracking-widest text-[#C5A059] uppercase inline-block mb-3">
                    {selectedPhoto.category}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#F5EFEB] mb-2 leading-snug">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-sm text-[#D5CCC1] font-sans leading-relaxed mb-4 font-light">
                    {selectedPhoto.caption}
                  </p>

                  <div className="p-3 bg-[#08100C] border border-[#1B3228] text-xs text-[#BCB3A7]">
                    <span className="font-semibold text-[#C5A059] block mb-0.5 font-sans">LOCATION</span>
                    {STORE_DETAILS.fullAddress}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1B3228]">
                  <a
                    href={STORE_DETAILS.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>GET DIRECTIONS TO STORE</span>
                    <ArrowUpRight className="w-4 h-4 text-[#08100C]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default StoreGallery;
