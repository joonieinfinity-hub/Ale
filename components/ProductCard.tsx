import React from 'react';
import { Product } from '../types';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  activeSizeFilter?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct, activeSizeFilter }) => {
  // Display primary size and price or range
  const matchedSize = activeSizeFilter && activeSizeFilter !== 'All'
    ? product.sizes.find(s => s.size === activeSizeFilter)
    : undefined;

  const firstSize = product.sizes[0];
  const displayPrice = matchedSize ? matchedSize.price : (product.sizes.length > 1 ? `From ${firstSize?.price || '₹ —'}` : (firstSize?.price || '₹ —'));
  const formattedSizes = product.sizes.map(s => s.size).join(' · ');

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative bg-[#1D1818] border border-[#352B2C] hover:border-[#e1b382] rounded-none overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
    >
      {/* Top Banner & Image Container */}
      <div className="relative h-64 sm:h-72 w-full bg-[#110F0F] p-6 flex items-center justify-center overflow-hidden border-b border-[#2D2526]">
        
        {/* Category & Tag badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-0.5 rounded-none bg-[#211A1A]/90 border border-[#352B2C] text-[10px] font-bold text-[#B59A68] uppercase tracking-wider backdrop-blur-sm">
            {product.category}
          </span>
          {product.isFeatured && (
            <span className="px-2.5 py-0.5 rounded-none bg-[#c89666]/90 border border-[#e1b382]/60 text-[10px] font-semibold text-[#EDE5D8] uppercase tracking-wider backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        {/* Origin Badge */}
        {product.origin && (
          <span className="absolute top-3 right-3 z-10 text-[10px] text-[#C9BFB2] bg-[#211A1A]/80 px-2 py-0.5 rounded-none border border-[#352B2C] font-light">
            {product.origin}
          </span>
        )}

        {/* Bottle Image */}
        <img
          src={product.image}
          alt={`${product.brand} - ${product.name}`}
          loading="lazy"
          className="max-h-full max-w-full object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay button */}
        <div className="absolute inset-0 bg-[#110F0F]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button 
            className="px-4 py-2 bg-[#e1b382] hover:bg-[#c89666] text-[#171313] border border-[#e1b382]/60 font-bold text-xs uppercase tracking-widest rounded-none shadow-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#171313]" />
            <span>View Details & Sizes</span>
          </button>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Name */}
          <div className="text-[10px] font-bold tracking-[0.25em] text-[#B59A68] uppercase mb-1">
            {product.brand}
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg font-bold text-[#EDE5D8] group-hover:text-[#B59A68] transition-colors leading-snug mb-1">
            {product.name}
          </h3>

          {/* Type / Subcategory */}
          <p className="text-xs text-[#C9BFB2] font-light mb-2">
            {product.type} {product.abv && `· ${product.abv}`}
          </p>

          {/* Curated Descriptors / Style Tags Badge Area */}
          {(() => {
            const tagsList = product.descriptors && product.descriptors.length > 0
              ? product.descriptors
              : (product.tags && product.tags.length > 0 
                  ? product.tags 
                  : (product.character ? product.character.split('·').map(s => s.trim()) : []));

            if (tagsList.length === 0) return null;

            return (
              <div className="flex flex-wrap gap-1.5 my-2.5">
                {tagsList.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-0.5 rounded-none bg-[#110F0F] border border-[#2D2526] text-[10px] font-semibold text-[#B59A68] tracking-wider uppercase group-hover:border-[#B59A68]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Sizes and Price Row */}
        <div className="pt-3 border-t border-[#2D2526] space-y-2">
          {/* Available Sizes List */}
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#C9BFB2] font-light">Available Sizes:</span>
            <span className="text-[#DCD2C3] font-medium truncate max-w-[160px]" title={formattedSizes}>
              {formattedSizes}
            </span>
          </div>

          {/* Price display */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="text-[10px] uppercase text-[#C9BFB2] font-semibold tracking-wider">
              {matchedSize ? `${matchedSize.size} Price` : 'Store Price'}
            </span>
            <div className="text-right">
              <span className="font-serif text-xl font-bold text-[#EDE5D8]">
                {displayPrice}
              </span>
              <span className="block text-[9px] text-[#C9BFB2] italic font-light">
                (Subject to counter verification)
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;

