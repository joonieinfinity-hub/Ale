/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeritageBrandIntro from './components/HeritageBrandIntro';
import HeritageSection from './components/HeritageSection';
import CategoryGrid from './components/CategoryGrid';
import WhyAleHouse from './components/WhyAleHouse';
import StoreGallery from './components/StoreGallery';
import VisitUsSection from './components/VisitUsSection';
import WholesaleCTA from './components/WholesaleCTA';
import LoyaltyProgram from './components/LoyaltyProgram';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import BrandsDirectory from './components/BrandsDirectory';
import AboutPage from './components/AboutPage';
import VisitUsPage from './components/VisitUsPage';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import AgeVerificationModal from './components/AgeVerificationModal';
import { ViewTab, ViewState, Product, SpiritCategory } from './types';

function App() {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });

  // Handle tab switching
  const handleSelectTab = (tab: ViewTab) => {
    if (tab === 'home') setViewState({ type: 'home' });
    else if (tab === 'collection') setViewState({ type: 'collection' });
    else if (tab === 'brands') setViewState({ type: 'brands' });
    else if (tab === 'about') setViewState({ type: 'about' });
    else if (tab === 'visit') setViewState({ type: 'visit' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Derive active tab from viewState
  const activeTab: ViewTab = 
    viewState.type === 'product-detail' 
      ? 'collection' 
      : (viewState.type as ViewTab);

  const handleSelectCategoryFromHome = (cat: SpiritCategory) => {
    setViewState({ type: 'collection', category: cat });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrandFromDirectory = (brandName: string) => {
    setViewState({ type: 'collection', brand: brandName });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setViewState({ type: 'product-detail', product });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08100C] text-[#D5CCC1] font-sans selection:bg-[#C5A059] selection:text-[#08100C] flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar 
          activeTab={activeTab} 
          onSelectTab={handleSelectTab}
          onOpenSearch={() => {
            setViewState({ type: 'collection' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Main View Router */}
        <main>
          {/* HOME VIEW: Editorial Single Page Flow */}
          {viewState.type === 'home' && (
            <>
              {/* 1. Full-Bleed Storefront Hero */}
              <Hero onSelectTab={handleSelectTab} />

              {/* 2. Dedicated Heritage Brand Intro - Warm Ivory Visual Pause */}
              <HeritageBrandIntro />

              {/* 3. Heritage Narrative & Store Details */}
              <HeritageSection onSelectTab={handleSelectTab} />

              {/* 4. Curated Showcase Categories */}
              <CategoryGrid 
                onSelectCategory={handleSelectCategoryFromHome} 
                onSelectTab={handleSelectTab} 
              />

              {/* 5. Why Ale House - 4 Core Pillars */}
              <WhyAleHouse onSelectTab={handleSelectTab} />

              {/* 6. Loyalty Program & Patron Privileges */}
              <LoyaltyProgram onSelectTab={handleSelectTab} />

              {/* 7. The Store / Photographic Archive */}
              <StoreGallery onSelectTab={handleSelectTab} />

              {/* 8. Come Find Us / Store Location & Hours */}
              <VisitUsSection />

              {/* 9. Wholesale Enquiries CTA */}
              <WholesaleCTA />
            </>
          )}

          {/* COLLECTION VIEW */}
          {viewState.type === 'collection' && (
            <ProductGrid 
              onSelectProduct={handleSelectProduct}
              onNavigateHome={() => handleSelectTab('home')}
              initialCategory={viewState.category || 'All'}
              initialBrand={viewState.brand || 'All'}
              initialSearch={viewState.search || ''}
            />
          )}

          {/* BRANDS DIRECTORY VIEW */}
          {viewState.type === 'brands' && (
            <BrandsDirectory 
              onSelectBrand={handleSelectBrandFromDirectory}
            />
          )}

          {/* ABOUT & HERITAGE VIEW */}
          {viewState.type === 'about' && (
            <AboutPage 
              onSelectTab={handleSelectTab}
            />
          )}

          {/* VISIT STORE VIEW */}
          {viewState.type === 'visit' && (
            <VisitUsPage />
          )}

          {/* PRODUCT DETAIL VIEW */}
          {viewState.type === 'product-detail' && (
            <ProductDetailModal
              product={viewState.product}
              onBack={() => setViewState({ type: 'collection' })}
              onNavigateHome={() => handleSelectTab('home')}
              onNavigateToCategory={(cat) => setViewState({ type: 'collection', category: cat })}
              onNavigateToVisit={() => handleSelectTab('visit')}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Counter Assistant */}
      <Assistant />

      {/* Mandatory Initial Age Verification Modal */}
      <AgeVerificationModal />
    </div>
  );
}

export default App;

