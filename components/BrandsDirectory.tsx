import React, { useState, useMemo } from 'react';
import { BRANDS_LIST, PRODUCTS } from '../data/inventory';
import { SpiritCategory } from '../types';
import { Search, Award, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface BrandsDirectoryProps {
  onSelectBrand: (brandName: string) => void;
}

const ALPHABET = [
  'ALL', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const BrandsDirectory: React.FC<BrandsDirectoryProps> = ({ onSelectBrand }) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [brandSearch, setBrandSearch] = useState<string>('');

  // Count products for each brand
  const brandProductCountMap = useMemo(() => {
    const map = new Map<string, number>();
    PRODUCTS.forEach(p => {
      const count = map.get(p.brand.toLowerCase()) || 0;
      map.set(p.brand.toLowerCase(), count + 1);
    });
    return map;
  }, []);

  // Filtered brands list
  const filteredBrands = useMemo(() => {
    return BRANDS_LIST.filter(b => {
      // Alphabet filter
      if (selectedLetter !== 'ALL') {
        if (!b.name.toUpperCase().startsWith(selectedLetter)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'ALL') {
        if (!b.categories.includes(selectedCategory as SpiritCategory)) {
          return false;
        }
      }

      // Search text filter
      if (brandSearch.trim()) {
        const query = brandSearch.trim().toLowerCase();
        const nameMatch = b.name.toLowerCase().includes(query);
        const countryMatch = b.country.toLowerCase().includes(query);
        const catMatch = b.categories.some(c => c.toLowerCase().includes(query));
        if (!nameMatch && !countryMatch && !catMatch) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedLetter, selectedCategory, brandSearch]);

  return (
    <section className="py-16 sm:py-24 bg-[#171313] min-h-screen text-[#DCD2C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#211A1A] border border-[#B59A68]/40 mb-4 shadow">
            <Award className="w-3.5 h-3.5 text-[#B59A68]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#B59A68] uppercase">
              AUTHENTIC LABELS DIRECTORY
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#EDE5D8] mb-3">
            OUR BRANDS
          </h1>

          <div className="w-16 h-[1px] bg-[#B59A68] mx-auto mb-4 opacity-75" />

          <p className="text-base sm:text-lg text-[#DCD2C3] font-serif italic font-light">
            "Explore the iconic distilleries and houses represented on our shelves."
          </p>
        </div>

        {/* Search & Category Bar */}
        <div className="bg-[#1D1818] border border-[#352B2C] rounded-none p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-6">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B59A68]" />
              <input
                type="text"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                placeholder="Search brand name, country, category..."
                className="w-full bg-[#110F0F] border border-[#2D2526] focus:border-[#e1b382] rounded-none pl-10 pr-4 py-2.5 text-xs text-[#EDE5D8] placeholder-[#C9BFB2] focus:outline-none transition-colors"
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-[11px] text-[#C9BFB2] font-semibold uppercase tracking-wider whitespace-nowrap">
                Category:
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-xs rounded-none p-2.5 focus:border-[#e1b382] outline-none cursor-pointer"
              >
                <option value="ALL">All Categories</option>
                <option value="Whisky">Whisky</option>
                <option value="Vodka">Vodka</option>
                <option value="Rum">Rum</option>
                <option value="Gin">Gin</option>
                <option value="Brandy">Brandy</option>
                <option value="Wine">Wine</option>
                <option value="Beer">Beer</option>
                <option value="Liqueurs">Liqueurs</option>
                <option value="Ready to Drink">Ready to Drink</option>
              </select>
            </div>

          </div>

          {/* A–Z Alphabet Navigation Bar */}
          <div className="border-t border-[#2D2526] pt-4">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#B59A68] mb-3 text-center sm:text-left">
              ALPHABETICAL FILTER (A–Z)
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
              {ALPHABET.map(letter => {
                const isActive = selectedLetter === letter;
                return (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-none text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-[#e1b382] text-[#171313] border border-[#e1b382] font-bold shadow'
                        : 'bg-[#110F0F] text-[#DCD2C3] hover:bg-[#211A1A] hover:text-[#EDE5D8] border border-[#2D2526]'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Brand Cards Directory */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => {
              const productCount = brandProductCountMap.get(brand.name.toLowerCase()) || 0;
              return (
                <div
                  key={brand.slug}
                  onClick={() => onSelectBrand(brand.name)}
                  className="group bg-[#1D1818] border border-[#352B2C] hover:border-[#e1b382] rounded-none p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#B59A68] block mb-0.5">
                          {brand.country}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-[#EDE5D8] group-hover:text-[#e1b382] transition-colors leading-tight">
                          {brand.name}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-none bg-[#110F0F] border border-[#2D2526] text-[10px] font-bold text-[#DCD2C3]">
                        {productCount} {productCount === 1 ? 'Bottle' : 'Bottles'}
                      </span>
                    </div>

                    {/* Description */}
                    {brand.description && (
                      <p className="text-xs text-[#C9BFB2] leading-relaxed mb-4 font-light">
                        {brand.description}
                      </p>
                    )}

                    {/* Categories represented */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {brand.categories.map(cat => (
                        <span key={cat} className="px-2 py-0.5 rounded-none bg-[#110F0F] border border-[#2D2526] text-[10px] text-[#DCD2C3]">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-4 border-t border-[#2D2526] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#e1b382]">
                    <span>View Brand Bottles</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-[#1D1818] border border-[#352B2C] rounded-none p-12 text-center my-8">
            <h3 className="font-serif text-2xl font-bold text-[#EDE5D8] mb-2">
              No brands match your filter
            </h3>
            <p className="text-xs text-[#C9BFB2] mb-6 font-light">
              Try selecting another letter or clearing your brand search term.
            </p>
            <button
              onClick={() => {
                setSelectedLetter('ALL');
                setSelectedCategory('ALL');
                setBrandSearch('');
              }}
              className="px-6 py-2.5 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 font-bold text-xs uppercase tracking-wider rounded-none cursor-pointer transition-colors shadow-md"
            >
              RESET BRAND FILTERS
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default BrandsDirectory;

