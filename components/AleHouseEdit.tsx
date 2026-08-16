import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Product, ViewTab } from '../types';
import { PRODUCTS } from '../data/inventory';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

interface AleHouseEditProps {
  onSelectProduct: (product: Product) => void;
  onSelectTab: (tab: ViewTab) => void;
}

type EditCollectionFilter = 'all' | 'classics' | 'premium' | 'wine-table' | 'evening-shelf' | 'discover-new';

const AleHouseEdit: React.FC<AleHouseEditProps> = ({ onSelectProduct, onSelectTab }) => {
  const [activeCollection, setActiveCollection] = useState<EditCollectionFilter>('all');

  const collectionsMeta: { id: EditCollectionFilter; label: string }[] = [
    { id: 'all', label: 'THE EDIT SELECTION' },
    { id: 'classics', label: 'THE CLASSICS' },
    { id: 'premium', label: 'PREMIUM SELECTION' },
    { id: 'wine-table', label: 'THE WINE TABLE' },
    { id: 'evening-shelf', label: 'EVENING SHELF' },
    { id: 'discover-new', label: 'DISCOVER SOMETHING NEW' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCollection === 'all') return product.isFeatured || product.collections?.includes('premium');
    return product.collections?.includes(activeCollection as any);
  }).slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#171313] via-[#211A1A] to-[#171313] border-b border-[#2D2526] text-[#EDE5D8] relative overflow-hidden">
      
      {/* Subtle Sand Tan ambient radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e1b382]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#211A1A] border border-[#B59A68]/40 text-[#B59A68] text-[10px] font-bold tracking-[0.25em] uppercase mb-4 shadow-md">
            <Sparkles className="w-3 h-3 text-[#B59A68]" />
            <span>CURATED FROM OUR SHELVES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#EDE5D8] mb-3">
            THE ALE HOUSE EDIT
          </h2>

          <div className="w-16 h-[1px] bg-[#B59A68] mx-auto mb-4 opacity-75" />

          <p className="text-[#DCD2C3] font-serif italic text-base sm:text-lg font-light">
            "A selection from the shelves, thoughtfully chosen for every occasion."
          </p>
        </motion.div>

        {/* Collection Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {collectionsMeta.map((item) => {
            const isActive = activeCollection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCollection(item.id)}
                className={`px-4 py-2 rounded-none text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#e1b382] text-[#171313] border border-[#e1b382] shadow-lg'
                    : 'bg-[#1D1818] text-[#DCD2C3] hover:text-[#EDE5D8] border border-[#352B2C] hover:border-[#e1b382]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </motion.div>

        {/* Edit Grid: 4-6 Bottles Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => {
            const primarySize = product.sizes[0];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProduct(product)}
                className="group bg-[#1D1818] border border-[#352B2C] hover:border-[#e1b382] rounded-none overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between cursor-pointer relative"
              >
                {/* Image & Character Overlay Container */}
                <div className="bg-[#110F0F] p-8 flex items-center justify-center relative min-h-[260px] border-b border-[#2D2526]">
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-[#B59A68] uppercase px-2.5 py-1 bg-[#1D1818] border border-[#352B2C] rounded-none">
                    {product.category}
                  </span>

                  {product.origin && (
                    <span className="absolute top-4 right-4 text-[10px] font-medium text-[#C9BFB2] px-2 py-0.5 bg-[#1D1818] border border-[#352B2C] rounded-none">
                      {product.origin}
                    </span>
                  )}

                  {/* Bottle Photo with Natural Bottle Tones */}
                  <img
                    src={product.image}
                    alt={`${product.brand} - ${product.name}`}
                    className="h-48 sm:h-52 object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Brand Name */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B59A68] block mb-1">
                      {product.brand}
                    </span>

                    {/* Product Title */}
                    <h3 className="font-serif text-xl font-bold text-[#EDE5D8] group-hover:text-[#e1b382] transition-colors leading-snug mb-2">
                      {product.name}
                    </h3>

                    {/* Spirit Type */}
                    <p className="text-xs text-[#C9BFB2] font-sans mb-3">
                      {product.type} {product.abv && `· ${product.abv}`}
                    </p>

                    {/* Flavor Character Descriptor */}
                    {product.character && (
                      <div className="py-2 px-3 bg-[#110F0F] border border-[#2D2526] rounded-none text-xs text-[#DCD2C3] font-serif italic mb-3">
                        "{product.character}"
                      </div>
                    )}
                  </div>

                  {/* Sizes & Pricing Footer Bar */}
                  <div className="pt-4 border-t border-[#2D2526] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#C9BFB2] block font-sans">AVAILABLE SIZE</span>
                      <span className="font-serif text-sm text-[#EDE5D8] font-semibold">
                        {primarySize ? primarySize.size : 'Standard Bottle'}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-widest text-[#C9BFB2] block font-sans">COUNTER PRICE</span>
                      <span className="font-serif text-lg text-[#EDE5D8] font-bold">
                        {primarySize?.price || '₹ —'}
                      </span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <button className="w-full py-2.5 bg-[#110F0F] group-hover:bg-[#e1b382] text-[#B59A68] group-hover:text-[#171313] border border-[#2D2526] group-hover:border-[#e1b382] font-bold text-[11px] uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>EXPLORE BOTTLE DETAILS</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Full Catalogue CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => {
              onSelectTab('collection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent hover:bg-[#e1b382]/20 text-[#EDE5D8] border border-[#e1b382] hover:border-[#EDE5D8] rounded-none text-xs font-bold uppercase tracking-[0.2em] transition-all group shadow-md cursor-pointer"
          >
            <span>VIEW COMPLETE CATALOGUE (80+ BRANDS)</span>
            <ArrowRight className="w-4 h-4 text-[#e1b382] transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AleHouseEdit;

