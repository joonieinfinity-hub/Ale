import React from 'react';
import { SHOWCASE_CATEGORIES, CATEGORIES_META } from '../data/inventory';
import { SpiritCategory, ViewTab } from '../types';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: SpiritCategory) => void;
  onSelectTab: (tab: ViewTab) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory, onSelectTab }) => {
  const handleCategoryClick = (categoryKey: SpiritCategory) => {
    onSelectCategory(categoryKey);
    onSelectTab('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="collection" className="py-20 sm:py-28 lg:py-32 bg-[#08100C] border-b border-[#1B3228]/50 text-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0C1813] border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>DISCOVER THE STORE SELECTION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#F5EFEB] mb-4">
            A CURATED SELECTION
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-4" />

          <p className="text-[#D5CCC1] font-sans text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            From world-renowned Scotch distilleries to regional cellars and chilled craft brews, explore our verified bottle portfolio.
          </p>
        </div>

        {/* 5 Showcase Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SHOWCASE_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.categoryKey)}
              className={`group relative rounded-none overflow-hidden border border-[#1B3228] hover:border-[#C5A059] bg-[#0C1813] transition-all duration-500 shadow-xl cursor-pointer flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Category Background Imagery */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#050B08]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.06] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Editorial Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1813] via-[#0C1813]/50 to-transparent" />
                
                {/* Top Badge: Category Name */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase bg-[#08100C]/90 border border-[#C5A059]/40 px-3 py-1 backdrop-blur-sm">
                    {cat.name}
                  </span>

                  <div className="w-8 h-8 rounded-none bg-[#08100C]/80 border border-[#1B3228] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] flex items-center justify-center text-[#F5EFEB] group-hover:text-[#08100C] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:text-[#08100C]" />
                  </div>
                </div>

                {/* Tagline over image bottom */}
                <div className="absolute bottom-3 inset-x-4">
                  <span className="text-[11px] font-serif italic text-[#EDE6DD] block">
                    {cat.tagline}
                  </span>
                </div>
              </div>

              {/* Bottom Content Card */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-[13px] text-[#D5CCC1] font-sans font-light leading-relaxed">
                  {cat.description}
                </p>

                {/* Highlight Tags */}
                <div className="pt-3 border-t border-[#1B3228]">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cat.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-sans text-[#BCB3A7] bg-[#08100C] border border-[#1B3228] px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#C5A059] pt-1">
                    <span>VIEW {cat.name}</span>
                    <span className="text-[#F5EFEB] transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Full Inventory Catalogue */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 bg-[#0C1813] border border-[#1B3228] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-[#C5A059] block mb-1">
              COMPLETE BOTTLE DIRECTORY
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5EFEB]">
              Looking for a specific vintage, malt, or brand?
            </h3>
            <p className="text-xs text-[#D5CCC1] mt-1 font-light font-sans max-w-xl">
              Browse our search-enabled inventory with size specifications, price brackets, and distillery origins.
            </p>
          </div>

          <button
            onClick={() => {
              onSelectTab('collection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] text-xs font-sans font-bold tracking-[0.2em] uppercase rounded-none transition-all whitespace-nowrap shadow-lg flex items-center gap-2 group cursor-pointer"
          >
            <span>EXPLORE FULL CATALOGUE</span>
            <ArrowUpRight className="w-4 h-4 text-[#08100C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;

