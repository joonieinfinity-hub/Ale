import React, { useState, useMemo } from 'react';
import { Product, SpiritCategory } from '../types';
import { PRODUCTS, BRANDS_LIST, CATEGORIES_META, extractNumericPrice, getProductMinMaxPrice } from '../data/inventory';
import ProductCard from './ProductCard';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';
import { Search, SlidersHorizontal, X, ArrowUpDown, Wine, RotateCcw, Filter, IndianRupee } from 'lucide-react';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
  onNavigateHome?: () => void;
  initialCategory?: SpiritCategory | 'All';
  initialBrand?: string;
  initialSearch?: string;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'a-z' | 'z-a';

const MIN_CATALOGUE_PRICE = 0;
const MAX_CATALOGUE_PRICE = 5500;
const PRICE_STEP = 50;

const BUDGET_PRESETS = [
  { label: 'All Budgets', min: MIN_CATALOGUE_PRICE, max: MAX_CATALOGUE_PRICE },
  { label: 'Under ₹500', min: MIN_CATALOGUE_PRICE, max: 500 },
  { label: '₹500 – ₹1.5k', min: 500, max: 1500 },
  { label: '₹1.5k – ₹3k', min: 1500, max: 3000 },
  { label: '₹3,000+', min: 3000, max: MAX_CATALOGUE_PRICE },
];

const ProductGrid: React.FC<ProductGridProps> = ({
  onSelectProduct,
  onNavigateHome,
  initialCategory = 'All',
  initialBrand = 'All',
  initialSearch = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<SpiritCategory | 'All'>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_CATALOGUE_PRICE, MAX_CATALOGUE_PRICE]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Extract all unique bottle sizes across products
  const availableSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach(p => p.sizes.forEach(s => set.add(s.size)));
    return Array.from(set).sort();
  }, []);

  const isPriceFiltered = priceRange[0] > MIN_CATALOGUE_PRICE || priceRange[1] < MAX_CATALOGUE_PRICE;

  const resetPriceFilter = () => {
    setPriceRange([MIN_CATALOGUE_PRICE, MAX_CATALOGUE_PRICE]);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedSize('All');
    resetPriceFilter();
    setSortBy('featured');
  };

  // Breadcrumb Trail Construction
  const breadcrumbItems = useMemo(() => {
    const items: BreadcrumbItem[] = [
      { label: 'Home', onClick: onNavigateHome },
      {
        label: 'Collection',
        onClick: (selectedCategory !== 'All' || selectedBrand !== 'All' || searchQuery || isPriceFiltered || selectedSize !== 'All')
          ? () => resetFilters()
          : undefined,
        isActive: selectedCategory === 'All' && selectedBrand === 'All' && !searchQuery && !isPriceFiltered && selectedSize === 'All'
      },
    ];

    if (selectedCategory !== 'All') {
      items.push({
        label: selectedCategory,
        onClick: (selectedBrand !== 'All' || searchQuery) ? () => { setSelectedBrand('All'); setSearchQuery(''); } : undefined,
        isActive: selectedBrand === 'All' && !searchQuery
      });
    }

    if (selectedBrand !== 'All') {
      items.push({
        label: selectedBrand,
        isActive: !searchQuery
      });
    }

    if (searchQuery.trim()) {
      items.push({
        label: `"${searchQuery.trim()}"`,
        isActive: true
      });
    }

    return items;
  }, [selectedCategory, selectedBrand, searchQuery, isPriceFiltered, selectedSize, onNavigateHome]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Search term match across brand, name, category, type, and tags
      const query = searchQuery.trim().toLowerCase();
      if (query) {
        const matchBrand = p.brand.toLowerCase().includes(query);
        const matchName = p.name.toLowerCase().includes(query);
        const matchCat = p.category.toLowerCase().includes(query);
        const matchType = p.type.toLowerCase().includes(query);
        const matchTags = p.tags?.some(t => t.toLowerCase().includes(query));
        if (!matchBrand && !matchName && !matchCat && !matchType && !matchTags) {
          return false;
        }
      }

      // Category match
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Brand match
      if (selectedBrand !== 'All' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // Size match
      if (selectedSize !== 'All' && !p.sizes.some(s => s.size === selectedSize)) {
        return false;
      }

      // Price range match
      if (isPriceFiltered) {
        const minSelected = priceRange[0];
        const maxSelected = priceRange[1];

        if (selectedSize !== 'All') {
          const matchedSizeObj = p.sizes.find(s => s.size === selectedSize);
          if (!matchedSizeObj) return false;
          const priceNum = extractNumericPrice(matchedSizeObj.price);
          if (priceNum < minSelected || priceNum > maxSelected) {
            return false;
          }
        } else {
          // If All sizes selected, match if ANY size of this product falls within range
          const productPrices = p.sizes.map(s => extractNumericPrice(s.price)).filter(num => num > 0);
          const hasAffordableSize = productPrices.some(priceNum => priceNum >= minSelected && priceNum <= maxSelected);
          if (!hasAffordableSize) {
            return false;
          }
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = selectedSize !== 'All'
          ? (extractNumericPrice(a.sizes.find(s => s.size === selectedSize)?.price) || getProductMinMaxPrice(a).min)
          : getProductMinMaxPrice(a).min;
        const priceB = selectedSize !== 'All'
          ? (extractNumericPrice(b.sizes.find(s => s.size === selectedSize)?.price) || getProductMinMaxPrice(b).min)
          : getProductMinMaxPrice(b).min;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = selectedSize !== 'All'
          ? (extractNumericPrice(a.sizes.find(s => s.size === selectedSize)?.price) || getProductMinMaxPrice(a).max)
          : getProductMinMaxPrice(a).max;
        const priceB = selectedSize !== 'All'
          ? (extractNumericPrice(b.sizes.find(s => s.size === selectedSize)?.price) || getProductMinMaxPrice(b).max)
          : getProductMinMaxPrice(b).max;
        return priceB - priceA;
      }
      if (sortBy === 'a-z') return a.name.localeCompare(b.name);
      if (sortBy === 'z-a') return b.name.localeCompare(a.name);
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedBrand, selectedSize, priceRange, isPriceFiltered, sortBy]);

  const activeFilterCount = (selectedCategory !== 'All' ? 1 : 0) + 
                            (selectedBrand !== 'All' ? 1 : 0) + 
                            (selectedSize !== 'All' ? 1 : 0) + 
                            (isPriceFiltered ? 1 : 0) + 
                            (searchQuery ? 1 : 0);

  // Price Slider Sub-Component
  const renderPriceRangeControls = (isMobile = false) => {
    const minPercent = ((priceRange[0] - MIN_CATALOGUE_PRICE) / (MAX_CATALOGUE_PRICE - MIN_CATALOGUE_PRICE)) * 100;
    const maxPercent = ((priceRange[1] - MIN_CATALOGUE_PRICE) / (MAX_CATALOGUE_PRICE - MIN_CATALOGUE_PRICE)) * 100;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-[#e1b382]" />
            Price Range / Budget
          </label>
          {isPriceFiltered && (
            <button
              onClick={resetPriceFilter}
              className="text-[11px] text-[#e1b382] hover:underline cursor-pointer"
            >
              Reset Price
            </button>
          )}
        </div>

        {/* Min & Max Display Cards */}
        <div className="flex items-center justify-between text-xs gap-2">
          <div className="bg-[#110F0F] border border-[#2D2526] px-2.5 py-1.5 flex flex-col flex-1">
            <span className="text-[9px] uppercase tracking-wider text-[#C9BFB2] font-semibold">Min Price</span>
            <span className="font-serif font-bold text-xs text-[#EDE5D8]">
              ₹ {priceRange[0].toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[#C9BFB2] font-light">—</span>
          <div className="bg-[#110F0F] border border-[#2D2526] px-2.5 py-1.5 flex flex-col flex-1 text-right">
            <span className="text-[9px] uppercase tracking-wider text-[#C9BFB2] font-semibold">Max Price</span>
            <span className="font-serif font-bold text-xs text-[#EDE5D8]">
              {priceRange[1] >= MAX_CATALOGUE_PRICE
                ? `₹ ${priceRange[1].toLocaleString('en-IN')}+`
                : `₹ ${priceRange[1].toLocaleString('en-IN')}`}
            </span>
          </div>
        </div>

        {/* Dual Thumb Range Slider */}
        <div className="relative py-2 select-none">
          {/* Background rail */}
          <div className="w-full h-2 bg-[#110F0F] border border-[#2D2526] rounded-none relative">
            {/* Active Highlight Range */}
            <div
              className="absolute top-0 bottom-0 bg-gradient-to-r from-[#e1b382] to-[#c89666] transition-all"
              style={{
                left: `${minPercent}%`,
                width: `${Math.max(0, maxPercent - minPercent)}%`
              }}
            />
          </div>

          {/* Min Price Thumb Input */}
          <input
            type="range"
            min={MIN_CATALOGUE_PRICE}
            max={MAX_CATALOGUE_PRICE}
            step={PRICE_STEP}
            value={priceRange[0]}
            onChange={(e) => {
              const val = Math.min(Number(e.target.value), priceRange[1] - PRICE_STEP);
              setPriceRange([val, priceRange[1]]);
            }}
            aria-label="Minimum price filter"
            className="absolute inset-0 w-full h-full opacity-0 pointer-events-none cursor-pointer z-20 
              [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
              [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6"
          />

          {/* Max Price Thumb Input */}
          <input
            type="range"
            min={MIN_CATALOGUE_PRICE}
            max={MAX_CATALOGUE_PRICE}
            step={PRICE_STEP}
            value={priceRange[1]}
            onChange={(e) => {
              const val = Math.max(Number(e.target.value), priceRange[0] + PRICE_STEP);
              setPriceRange([priceRange[0], val]);
            }}
            aria-label="Maximum price filter"
            className="absolute inset-0 w-full h-full opacity-0 pointer-events-none cursor-pointer z-30 
              [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
              [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6"
          />

          {/* Visual Custom Thumb Indicators */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#e1b382] border-2 border-[#171313] shadow-md pointer-events-none z-10 -ml-2"
            style={{ left: `${minPercent}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#e1b382] border-2 border-[#171313] shadow-md pointer-events-none z-10 -ml-2"
            style={{ left: `${maxPercent}%` }}
          />
        </div>

        {/* Quick Budget Presets */}
        <div>
          <span className="text-[10px] text-[#C9BFB2] uppercase tracking-wider font-semibold block mb-1.5">
            Quick Budget Presets
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {BUDGET_PRESETS.map((preset) => {
              const isSelected = priceRange[0] === preset.min && priceRange[1] === preset.max;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setPriceRange([preset.min, preset.max])}
                  className={`px-2 py-1 text-[10px] font-medium transition-colors cursor-pointer border text-center ${
                    isSelected
                      ? 'bg-[#e1b382] text-[#171313] border-[#e1b382] font-bold shadow-sm'
                      : 'bg-[#110F0F] text-[#DCD2C3] border-[#2D2526] hover:border-[#e1b382]/50 hover:bg-[#211A1A]'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 sm:py-20 bg-[#08100C] min-h-screen text-[#D5CCC1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation Path */}
        <div className="mb-6 sm:mb-8 pb-4 border-b border-[#1B3228]/80">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
            STORE CATALOGUE · DIPHALU, NAGAON
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5EFEB]">
            Liquor Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#BCB3A7] mt-2 max-w-2xl font-light">
            Explore our curated selection of spirits, fine wines, imported malts and cold lagers available at our Diphalu store.
          </p>
        </div>

        {/* Search Bar & Primary Controls */}
        <div className="bg-[#1D1818] border border-[#352B2C] rounded-none p-5 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B59A68]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand, bottle name, whisky, vodka, rum..."
                className="w-full bg-[#110F0F] border border-[#2D2526] focus:border-[#e1b382] rounded-none pl-10 pr-10 py-3 text-xs text-[#EDE5D8] placeholder-[#C9BFB2] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#C9BFB2] hover:text-[#EDE5D8] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Desktop Quick Sort & Filter Drawer Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-2 text-xs text-[#C9BFB2]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#B59A68]" />
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-xs rounded-none px-2.5 py-2.5 focus:border-[#e1b382] outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="a-z">Alphabetical (A–Z)</option>
                  <option value="z-a">Alphabetical (Z–A)</option>
                </select>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-[#110F0F] border border-[#352B2C] text-[#B59A68] rounded-none text-xs font-semibold cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
              </button>
            </div>

          </div>

          {/* Quick Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[#2D2526] no-scrollbar">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-none text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#e1b382] text-[#171313] border border-[#e1b382] font-bold shadow'
                  : 'bg-[#110F0F] text-[#DCD2C3] hover:bg-[#211A1A] border border-[#2D2526]'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES_META.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 py-1.5 rounded-none text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.name
                    ? 'bg-[#e1b382] text-[#171313] border border-[#e1b382] font-bold shadow'
                    : 'bg-[#110F0F] text-[#DCD2C3] hover:bg-[#211A1A] border border-[#2D2526]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6 bg-[#1D1818] border border-[#352B2C] rounded-none p-5 h-fit sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-[#2D2526]">
              <span className="font-serif text-lg font-bold text-[#EDE5D8] flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#B59A68]" />
                Catalogue Filters
              </span>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#B59A68] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {/* Price Range Slider Filter */}
            {renderPriceRangeControls(false)}

            {/* Category Filter */}
            <div className="pt-4 border-t border-[#2D2526]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as SpiritCategory | 'All')}
                className="w-full bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-xs rounded-none p-2.5 focus:border-[#e1b382] outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                {CATEGORIES_META.map(c => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] mb-2">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-xs rounded-none p-2.5 focus:border-[#e1b382] outline-none cursor-pointer"
              >
                <option value="All">All Brands</option>
                {BRANDS_LIST.map(b => (
                  <option key={b.name} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            {/* Bottle Size Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] mb-2">
                Bottle Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-xs rounded-none p-2.5 focus:border-[#e1b382] outline-none cursor-pointer"
              >
                <option value="All">All Sizes</option>
                {availableSizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Active Filters Summary */}
            <div className="pt-4 border-t border-[#2D2526] text-xs text-[#C9BFB2]">
              <p>Showing <strong className="text-[#EDE5D8]">{filteredProducts.length}</strong> of {PRODUCTS.length} bottles</p>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            
            {/* Active Filters Chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
                <span className="text-[#C9BFB2]">Active Filters:</span>
                {isPriceFiltered && (
                  <span className="px-2.5 py-1 rounded-none bg-[#1D1818] border border-[#e1b382]/60 text-[#EDE5D8] flex items-center gap-1.5">
                    Budget: ₹{priceRange[0]} – ₹{priceRange[1] >= MAX_CATALOGUE_PRICE ? `${priceRange[1]}+` : priceRange[1]}
                    <X className="w-3 h-3 cursor-pointer text-[#e1b382]" onClick={resetPriceFilter} />
                  </span>
                )}
                {selectedCategory !== 'All' && (
                  <span className="px-2.5 py-1 rounded-none bg-[#1D1818] border border-[#e1b382]/60 text-[#EDE5D8] flex items-center gap-1.5">
                    Category: {selectedCategory}
                    <X className="w-3 h-3 cursor-pointer text-[#e1b382]" onClick={() => setSelectedCategory('All')} />
                  </span>
                )}
                {selectedBrand !== 'All' && (
                  <span className="px-2.5 py-1 rounded-none bg-[#1D1818] border border-[#e1b382]/60 text-[#EDE5D8] flex items-center gap-1.5">
                    Brand: {selectedBrand}
                    <X className="w-3 h-3 cursor-pointer text-[#e1b382]" onClick={() => setSelectedBrand('All')} />
                  </span>
                )}
                {selectedSize !== 'All' && (
                  <span className="px-2.5 py-1 rounded-none bg-[#1D1818] border border-[#e1b382]/60 text-[#EDE5D8] flex items-center gap-1.5">
                    Size: {selectedSize}
                    <X className="w-3 h-3 cursor-pointer text-[#e1b382]" onClick={() => setSelectedSize('All')} />
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2.5 py-1 rounded-none bg-[#1D1818] border border-[#e1b382]/60 text-[#EDE5D8] flex items-center gap-1.5">
                    Query: "{searchQuery}"
                    <X className="w-3 h-3 cursor-pointer text-[#e1b382]" onClick={() => setSearchQuery('')} />
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-[#e1b382] hover:text-[#EDE5D8] underline ml-2 cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    activeSizeFilter={selectedSize}
                  />
                ))}
              </div>
            ) : (
              /* Polished Empty State */
              <div className="bg-[#1D1818] border border-[#352B2C] rounded-none p-12 text-center my-8">
                <div className="w-16 h-16 rounded-full bg-[#110F0F] border border-[#e1b382]/50 text-[#e1b382] flex items-center justify-center mx-auto mb-4">
                  <Wine className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#EDE5D8] mb-2">
                  No bottles found
                </h3>
                <p className="text-sm text-[#C9BFB2] max-w-md mx-auto mb-6 font-light">
                  No products matched your selected budget or filter criteria. Try adjusting the price range slider or clearing filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 text-xs font-bold uppercase tracking-wider rounded-none shadow-lg transition-all cursor-pointer"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer / Bottom Sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-[#110F0F]/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-[#1D1818] border-l border-[#352B2C] h-full p-6 flex flex-col justify-between overflow-y-auto animate-slide-up">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2D2526] mb-6">
                <span className="font-serif text-xl font-bold text-[#EDE5D8]">Filter Catalogue</span>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-[#C9BFB2] hover:text-[#EDE5D8] cursor-pointer"
                >
                  <X className="w-6 h-6 text-[#B59A68]" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Price Range Controls for Mobile */}
                <div className="pb-4 border-b border-[#2D2526]">
                  {renderPriceRangeControls(true)}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as SpiritCategory | 'All')}
                    className="w-full bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-sm rounded-none p-3 cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES_META.map(c => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] mb-2">
                    Brand
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-sm rounded-none p-3 cursor-pointer"
                  >
                    <option value="All">All Brands</option>
                    {BRANDS_LIST.map(b => (
                      <option key={b.name} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>

                {/* Size */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#B59A68] mb-2">
                    Bottle Size
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-[#110F0F] border border-[#2D2526] text-[#EDE5D8] text-sm rounded-none p-3 cursor-pointer"
                  >
                    <option value="All">All Sizes</option>
                    {availableSizes.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2D2526] space-y-3">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 font-bold text-xs uppercase tracking-wider rounded-none cursor-pointer shadow-md"
              >
                SHOW {filteredProducts.length} BOTTLES
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2.5 bg-transparent text-[#C9BFB2] text-xs uppercase tracking-wider hover:text-white cursor-pointer"
              >
                Reset Filters
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;


