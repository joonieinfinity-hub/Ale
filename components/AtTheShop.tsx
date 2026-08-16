import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ViewTab } from '../types';
import { SHOP_GALLERY_IMAGES, STORE_DETAILS } from '../data/inventory';
import { Camera, MapPin, Award, User, Maximize2, X, ChevronRight, Info } from 'lucide-react';

interface AtTheShopProps {
  onSelectTab: (tab: ViewTab) => void;
}

const AtTheShop: React.FC<AtTheShopProps> = ({ onSelectTab }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof SHOP_GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#110F0F] border-b border-[#2D2526] text-[#EDE5D8] relative overflow-hidden">
      {/* Subtle Sand Tan Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#e1b382]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#1D1818] border border-[#B59A68]/40 text-[#B59A68] text-[10px] font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#B59A68]" />
            <span>AT THE SHOP · LOCAL LEGACY SINCE 1998</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#EDE5D8] mb-3">
            Life at ALE HOUSE
          </h2>

          <div className="w-16 h-[1px] bg-[#B59A68] mx-auto mb-4 opacity-75" />

          <p className="text-[#DCD2C3] font-serif italic text-base sm:text-lg max-w-2xl mx-auto font-light">
            "More than a wine shop — a 26-year cornerstone of trust, authenticity, and hospitality in Nagaon."
          </p>
        </motion.div>

        {/* Photography Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:grid-rows-3 md:h-[620px] mb-10">
          {SHOP_GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative overflow-hidden rounded-none border border-[#352B2C] hover:border-[#e1b382] bg-[#1D1818] cursor-pointer transition-all duration-500 shadow-xl ${item.aspect}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#110F0F] via-[#110F0F]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 bg-[#110F0F]/90 border border-[#B59A68]/40 text-[10px] font-bold tracking-widest text-[#EDE5D8] uppercase backdrop-blur-md">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-none bg-[#110F0F]/80 border border-[#352B2C] group-hover:border-[#e1b382] flex items-center justify-center text-[#EDE5D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#e1b382]" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#EDE5D8] group-hover:text-[#e1b382] transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#DCD2C3] font-sans line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend / Heritage Stat Callouts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#1D1818] border border-[#352B2C] rounded-none mb-8 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-none bg-[#110F0F] border border-[#B59A68]/40 flex items-center justify-center text-[#B59A68] flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#EDE5D8]">Established 1998</h4>
              <p className="text-xs text-[#C9BFB2]">26+ years serving Diphalu & Nagaon patrons</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 sm:border-l sm:border-[#352B2C]">
            <div className="w-10 h-10 rounded-none bg-[#110F0F] border border-[#B59A68]/40 flex items-center justify-center text-[#B59A68] flex-shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#EDE5D8]">Proprietor Prasanta Kalita</h4>
              <p className="text-xs text-[#C9BFB2]">Personalized counter advice & authentic stock</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 sm:border-l sm:border-[#352B2C]">
            <div className="w-10 h-10 rounded-none bg-[#110F0F] border border-[#B59A68]/40 flex items-center justify-center text-[#B59A68] flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#EDE5D8]">Diphalu, Laokhowa Road</h4>
              <p className="text-xs text-[#C9BFB2]">Centrally located in Nagaon, Assam (PIN 782003)</p>
            </div>
          </div>
        </motion.div>

        {/* Footer Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#352B2C]"
        >
          <div className="flex items-center gap-2 text-xs text-[#C9BFB2] font-sans font-light">
            <Info className="w-4 h-4 text-[#B59A68] flex-shrink-0" />
            <span>Store Photography — authentic Nagaon storefront & team</span>
          </div>

          <button
            onClick={() => {
              onSelectTab('visit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] font-bold text-xs uppercase tracking-[0.2em] rounded-none border border-[#e1b382]/60 hover:border-[#c89666] transition-all flex items-center gap-2 group cursor-pointer shadow-lg"
          >
            <MapPin className="w-3.5 h-3.5 text-[#171313]" />
            <span>VISIT OUR NAGAON STOREFRONT</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#171313]" />
          </button>
        </motion.div>

      </div>

      {/* Lightbox Photo Preview Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#110F0F]/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#1D1818] border border-[#e1b382]/50 p-4 sm:p-6 shadow-2xl overflow-hidden rounded-none">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-[#DCD2C3] hover:text-[#EDE5D8] bg-[#110F0F] border border-[#352B2C] hover:border-[#e1b382] rounded-none transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#e1b382]" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Main Expanded Image */}
              <div className="w-full md:w-2/3 bg-[#110F0F] border border-[#352B2C] overflow-hidden flex items-center justify-center max-h-[70vh]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              {/* Photo Story Details */}
              <div className="w-full md:w-1/3 flex flex-col justify-between space-y-4">
                <div>
                  <span className="px-2.5 py-1 bg-[#110F0F] border border-[#e1b382]/60 text-[10px] font-bold tracking-widest text-[#e1b382] uppercase inline-block mb-3">
                    {selectedPhoto.category}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#EDE5D8] mb-2 leading-snug">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-sm text-[#DCD2C3] font-sans leading-relaxed mb-4 font-light">
                    {selectedPhoto.caption}
                  </p>

                  <div className="p-3 bg-[#110F0F] border border-[#2D2526] rounded-none text-xs text-[#C9BFB2]">
                    <span className="font-semibold text-[#e1b382] block mb-0.5">LOCATION</span>
                    {STORE_DETAILS.fullAddress}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#352B2C]">
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      onSelectTab('visit');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 hover:border-[#c89666] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>GET DIRECTIONS TO STORE</span>
                    <ChevronRight className="w-4 h-4 text-[#171313]" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default AtTheShop;

