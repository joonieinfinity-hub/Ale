import React, { useState } from 'react';
import { Product } from '../types';
import { STORE_DETAILS } from '../data/inventory';
import { ArrowLeft, MapPin, Share2, Info, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateToCategory?: (category: string) => void;
  onNavigateToVisit: () => void;
}

const ProductDetailModal: React.FC<ProductDetailProps> = ({ 
  product, 
  onBack, 
  onNavigateHome,
  onNavigateToCategory,
  onNavigateToVisit 
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', onClick: onNavigateHome },
    { label: 'Collection', onClick: onBack },
    ...(product.category ? [{
      label: product.category,
      onClick: onNavigateToCategory ? () => onNavigateToCategory(product.category) : onBack
    }] : []),
    { label: product.name, isActive: true }
  ];

  return (
    <div className="min-h-screen bg-[#08100C] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-[#D5CCC1]">
      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb Navigation Path */}
        <div className="mb-6 pb-4 border-b border-[#1B3228]/80">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Navigation / Back Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1B3228]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#0C1813] border border-[#1B3228] hover:border-[#C5A059] text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-[#F5EFEB] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            <span>BACK TO COLLECTION</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-[#BCB3A7] hover:text-[#F5EFEB] transition-colors cursor-pointer"
            title="Copy Page Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-[#C5A059]" />}
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* Product Card Container */}
        <div className="bg-[#0C1813] border border-[#1B3228] rounded-none overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left Column: Bottle Gallery */}
          <div className="md:col-span-5 bg-[#08100C] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#1B3228] relative">
            
            {/* Category Tag */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-none bg-[#0C1813] border border-[#1B3228] text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                {product.category}
              </span>
              {product.origin && (
                <span className="px-2.5 py-1 rounded-none bg-[#0C1813] border border-[#1B3228] text-xs font-medium text-[#BCB3A7]">
                  {product.origin}
                </span>
              )}
            </div>

            {/* Main Bottle Image */}
            <div className="h-80 sm:h-96 w-full flex items-center justify-center my-6">
              <img
                src={product.image}
                alt={`${product.brand} - ${product.name}`}
                className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
              />
            </div>

            {/* Authenticity guarantee */}
            <div className="flex items-center gap-2 text-xs text-[#BCB3A7] pt-4 border-t border-[#1B3228] w-full justify-center font-light">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Genuine Sourcing · ALE HOUSE WINE SHOP</span>
            </div>
          </div>

          {/* Right Column: Bottle Info & Size Table */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Brand */}
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                {product.brand}
              </span>

              {/* Product Name */}
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5EFEB] mb-2 leading-tight">
                {product.name}
              </h1>

              {/* Subtype & ABV */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#BCB3A7] font-medium mb-6">
                <span>{product.type}</span>
                {product.abv && (
                  <>
                    <span>•</span>
                    <span className="text-[#C5A059] font-semibold">{product.abv}</span>
                  </>
                )}
                {product.availability && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-400">{product.availability}</span>
                  </>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-6 bg-[#08100C] p-4 rounded-none border border-[#1B3228] text-xs sm:text-sm text-[#D5CCC1] leading-relaxed font-light">
                  {product.description}
                </div>
              )}

              {/* Multiple Bottle Sizes Table */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <span>AVAILABLE BOTTLE SIZES & PRICING</span>
                  <span className="text-[10px] text-[#BCB3A7] lowercase italic font-light">Select a size below</span>
                </div>

                <div className="border border-[#1B3228] rounded-none divide-y divide-[#1B3228] bg-[#08100C]">
                  {product.sizes.map((sizeObj, idx) => {
                    const isSelected = selectedSizeIndex === idx;
                    return (
                      <div
                        key={sizeObj.size}
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`p-3.5 flex items-center justify-between cursor-pointer transition-colors ${
                          isSelected ? 'bg-[#C5A059]/15 border-l-2 border-l-[#C5A059]' : 'hover:bg-[#0C1813]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-none border flex items-center justify-center ${
                            isSelected ? 'border-[#C5A059] bg-[#C5A059]' : 'border-[#1B3228]'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 bg-[#08100C]" />}
                          </div>
                          <span className="font-serif text-sm font-semibold text-[#F5EFEB]">
                            {sizeObj.size}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="font-serif text-lg font-bold text-[#F5EFEB]">
                            {sizeObj.price || '₹ —'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notice */}
              <div className="p-3.5 bg-[#08100C] border border-[#1B3228] rounded-none flex items-start gap-2.5 text-xs text-[#BCB3A7] font-light">
                <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> Bottle prices and inventory availability are subject to local Assam excise regulations and store counter verification at our Diphalu, Nagaon location.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-[#1B3228] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={onNavigateToVisit}
                  className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] border border-[#C5A059] font-bold text-xs uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#08100C]" />
                  <span>Get Directions to Store</span>
                </button>

                <a
                  href={STORE_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#08100C] hover:bg-[#12231C] text-[#D5CCC1] hover:text-[#F5EFEB] border border-[#1B3228] hover:border-[#C5A059] font-semibold text-xs uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                  <span>Inquire at Counter</span>
                </a>
              </div>

              <div className="text-center">
                <button
                  onClick={onBack}
                  className="text-xs text-[#BCB3A7] hover:text-[#C5A059] underline pt-2 inline-block cursor-pointer font-light"
                >
                  ← Return to Full Catalogue
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;

