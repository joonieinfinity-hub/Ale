import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center text-xs tracking-wider uppercase font-sans ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1 || item.isActive;

          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              {!isFirst && (
                <ChevronRight className="w-3 h-3 text-[#C5A059]/50 shrink-0" aria-hidden="true" />
              )}
              
              {isLast || !item.onClick ? (
                <span 
                  className={`flex items-center gap-1.5 font-medium ${
                    isLast 
                      ? 'text-[#C5A059] font-semibold' 
                      : 'text-[#BCB3A7]'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isFirst && <Home className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />}
                  <span className="truncate max-w-[180px] sm:max-w-[260px] md:max-w-none">
                    {item.label}
                  </span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="flex items-center gap-1.5 text-[#BCB3A7] hover:text-[#F5EFEB] transition-colors focus:outline-none focus:text-[#C5A059] cursor-pointer group"
                >
                  {isFirst && (
                    <Home className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#F5EFEB] transition-colors shrink-0" />
                  )}
                  <span className="group-hover:underline underline-offset-4 decoration-[#C5A059]/60 truncate max-w-[150px] sm:max-w-[200px]">
                    {item.label}
                  </span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
