import React, { useState } from 'react';
import { 
  Crown, 
  Gift, 
  Sparkles, 
  Wine, 
  Clock, 
  Award, 
  CheckCircle2, 
  Coins, 
  UserCheck, 
  ArrowUpRight, 
  PhoneCall,
  ShieldCheck,
  ChevronRight,
  Calculator
} from 'lucide-react';
import { STORE_DETAILS } from '../data/inventory';
import { ViewTab } from '../types';

interface LoyaltyProgramProps {
  onSelectTab?: (tab: ViewTab) => void;
}

interface TierInfo {
  id: string;
  name: string;
  badge: string;
  spendThreshold: string;
  pointsRate: string;
  color: string;
  highlights: string[];
}

const LoyaltyProgram: React.FC<LoyaltyProgramProps> = ({ onSelectTab }) => {
  const [activeTier, setActiveTier] = useState<number>(1);
  const [calcSpend, setCalcSpend] = useState<number>(10000);

  const stepsToEarn = [
    {
      step: '01',
      title: 'Counter Enrollment',
      description: 'Simply share your mobile number with the storekeeper at our Diphalu counter or when calling in an order. Instant activation with zero paperwork.',
      icon: UserCheck,
      badge: 'Zero Friction'
    },
    {
      step: '02',
      title: 'Earn On Every Bottle',
      description: 'Accumulate 1 Patron Point for every ₹100 spent across all single malts, blended scotches, chilled beers, wines, and craft spirits.',
      icon: Coins,
      badge: 'All Categories'
    },
    {
      step: '03',
      title: 'Redeem Exclusive Perks',
      description: 'Redeem points directly against seasonal bills, rare cask reserves, celebratory hampers, and priority allocations during festival rush.',
      icon: Gift,
      badge: 'Instant Value'
    }
  ];

  const benefits = [
    {
      id: 'rare-allocation',
      title: 'Rare Cask & Single Malt Allocation',
      description: 'First access and reserved holds on limited global releases and Indian single malts (Amrut, Paul John, Johnnie Walker XR) before public shelf display.',
      icon: Crown,
      category: 'Exclusive Access'
    },
    {
      id: 'festive-discounts',
      title: 'Festive Tier Savings & Cashbacks',
      description: 'Special patron-only redemption rates during Rongali Bihu, Durga Puja, Diwali, and New Year celebrations for all your festive hosting.',
      icon: Gift,
      category: 'Seasonal Value'
    },
    {
      id: 'event-curation',
      title: 'Event & Bulk Coordination Perks',
      description: 'Complimentary party volume calculation, chilled temperature storage holds, and priority packaging for weddings, banquets, and family gatherings.',
      icon: Sparkles,
      category: 'Hospitality Service'
    },
    {
      id: 'anniversary-vouchers',
      title: 'Birthday & Milestone Treats',
      description: 'Receive special celebration vouchers, curated glassware, or artisanal bottle gifts added to your orders during your birth or anniversary month.',
      icon: Wine,
      category: 'Patron Celebrations'
    },
    {
      id: 'express-checkout',
      title: 'Express Counter Priority',
      description: 'Call ahead for pre-packed crates and express counter pickup with direct invoice dispatch, avoiding wait times during peak evening hours.',
      icon: Clock,
      category: 'Convenience'
    },
    {
      id: 'tasting-notes',
      title: 'Curator Tasting Notes & Previews',
      description: 'Receive personalized vintage recommendations, regional distillation background sheets, and guidance directly from proprietor Prasanta Kalita.',
      icon: Award,
      category: 'Connoisseur Guidance'
    }
  ];

  const tiers: TierInfo[] = [
    {
      id: 'bronze',
      name: 'BRONZE PATRON',
      badge: 'Entry Level',
      spendThreshold: '₹0 - ₹25,000 / year',
      pointsRate: '1 Point / ₹100 spent',
      color: '#B59A68',
      highlights: [
        'Point accumulation on all purchases',
        'Standard festive redemption rates',
        'SMS updates on new bottle arrivals',
        'Store credit redemption at checkout'
      ]
    },
    {
      id: 'silver',
      name: 'SILVER CELLAR',
      badge: 'Regular Guest',
      spendThreshold: '₹25,000 - ₹75,000 / year',
      pointsRate: '1.25 Points / ₹100 spent',
      color: '#D5CCC1',
      highlights: [
        '25% Bonus point earning rate',
        '48-Hour priority holds on new Scotch shipments',
        'Annual birthday celebration voucher',
        'Call-ahead express packing service'
      ]
    },
    {
      id: 'gold',
      name: 'GOLD RESERVE',
      badge: 'Connoisseur & Bulk',
      spendThreshold: '₹75,000+ / year or Wholesale',
      pointsRate: '1.5 Points / ₹100 spent',
      color: '#C5A059',
      highlights: [
        '50% Bonus point earning rate',
        'Direct personal allocation of rare casks & malts',
        'Complimentary party catering consultation',
        'Dedicated wholesale desk & invoice management'
      ]
    }
  ];

  // Calculate estimated points
  const pointsMultiplier = activeTier === 0 ? 1 : activeTier === 1 ? 1.25 : 1.5;
  const estimatedPoints = Math.round((calcSpend / 100) * pointsMultiplier);
  const estimatedRedemptionValue = Math.round(estimatedPoints * 5); // ₹5 per 10 points

  return (
    <section id="loyalty-program" className="py-20 sm:py-28 lg:py-32 bg-[#08100C] border-b border-[#1B3228]/50 text-[#F5EFEB] relative overflow-hidden">
      
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1B3228]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0C1813] border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>PATRON PRIVILEGES & REWARDS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-[#F5EFEB] mb-4 leading-tight">
            THE ALE HOUSE GUILD
          </h2>

          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-4" />

          <p className="text-[#D5CCC1] font-sans text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Our loyalty program honors regular patrons across Nagaon with points on every bottle, priority reservations on rare single malts, and bespoke event assistance.
          </p>
        </div>

        {/* 3 Step Flow: How To Earn Rewards */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase">
              SIMPLE & EFFORTLESS EARNING
            </h3>
            <p className="font-serif text-xl sm:text-2xl text-[#F5EFEB] mt-1">
              How Regular Patrons Earn Rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {stepsToEarn.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={step.step}
                  className="relative p-8 bg-[#0C1813] border border-[#1B3228] hover:border-[#C5A059]/70 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  {/* Top Step Counter & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors">
                      {step.step}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#08100C] border border-[#1B3228] text-[10px] font-mono tracking-wider text-[#BCB3A7] uppercase">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon & Details */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-none bg-[#08100C] border border-[#C5A059]/40 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] flex items-center justify-center text-[#C5A059] group-hover:text-[#08100C] transition-all mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#F5EFEB] mb-2 group-hover:text-[#C5A059] transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-[13px] text-[#D5CCC1] font-sans font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual bottom accent */}
                  <div className="pt-4 border-t border-[#1B3228]/80 flex items-center text-[11px] text-[#C5A059] font-medium tracking-wider">
                    <span>{idx === 0 ? 'Visit Shop' : idx === 1 ? 'Every ₹100' : 'Instant Savings'}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6-Card Icon-Based Grid: Benefits of the Program */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase">
              MEMBER ADVANTAGES
            </h3>
            <p className="font-serif text-2xl sm:text-3xl text-[#F5EFEB] mt-1">
              Curated Privileges for Every Occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="p-7 sm:p-8 bg-[#0C1813] border border-[#1B3228] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Category Pill + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-none bg-[#08100C] border border-[#C5A059]/40 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] flex items-center justify-center text-[#C5A059] group-hover:text-[#08100C] transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-sans font-semibold tracking-widest text-[#C5A059] uppercase bg-[#08100C] px-2.5 py-1 border border-[#1B3228]">
                        {benefit.category}
                      </span>
                    </div>

                    {/* Benefit Title */}
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F5EFEB] group-hover:text-[#C5A059] transition-colors mb-3 leading-snug">
                      {benefit.title}
                    </h4>

                    {/* Benefit Description */}
                    <p className="text-xs sm:text-[13px] text-[#D5CCC1] font-sans font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Guaranteed Quality Tag */}
                  <div className="pt-5 mt-6 border-t border-[#1B3228] flex items-center gap-2 text-[11px] text-[#BCB3A7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Included in Ale House Patron Membership</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Patron Tiers & Points Estimator */}
        <div className="bg-[#0C1813] border border-[#1B3228] p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Tier Selector */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#C5A059] uppercase font-bold block mb-1">
                  MEMBERSHIP TIERS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFEB]">
                  Elevate Your Patron Status
                </h3>
                <p className="text-xs sm:text-sm text-[#D5CCC1] font-light mt-1">
                  Enjoy multiplying rewards and priority privileges as your annual counter visits and celebration orders grow.
                </p>
              </div>

              {/* Tier Selection Buttons */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {tiers.map((tier, idx) => {
                  const isSelected = activeTier === idx;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setActiveTier(idx)}
                      className={`p-3 sm:p-4 text-left border rounded-none transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-[#1B3228]/60 border-[#C5A059] shadow-lg' 
                          : 'bg-[#08100C] border-[#1B3228] hover:border-[#C5A059]/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold">
                        {tier.badge}
                      </div>
                      <div className="font-serif text-xs sm:text-sm font-bold text-[#F5EFEB] mt-0.5">
                        {tier.name}
                      </div>
                      <div className="text-[10px] text-[#BCB3A7] hidden sm:block mt-1 font-mono">
                        {tier.pointsRate}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Tier Highlights */}
              <div className="p-5 bg-[#08100C] border border-[#1B3228]">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1B3228]">
                  <span className="font-serif text-base font-bold text-[#C5A059]">
                    {tiers[activeTier].name} Highlights
                  </span>
                  <span className="text-xs font-mono text-[#BCB3A7]">
                    {tiers[activeTier].spendThreshold}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tiers[activeTier].highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#D5CCC1]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Reward Calculator */}
            <div className="lg:col-span-5 bg-[#08100C] border border-[#C5A059]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>REWARDS CALCULATOR</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#F5EFEB] mb-4">
                  Estimate Your Annual Points
                </h4>

                {/* Spend Range Slider */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#BCB3A7]">Estimated Annual Spend:</span>
                    <span className="font-mono text-base font-bold text-[#F5EFEB]">₹{calcSpend.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="100000"
                    step="1000"
                    value={calcSpend}
                    onChange={(e) => setCalcSpend(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#1B3228] rounded-none appearance-none cursor-pointer accent-[#C5A059]"
                  />
                  <div className="flex justify-between text-[10px] text-[#8C8275] font-mono">
                    <span>₹2,000</span>
                    <span>₹50,000</span>
                    <span>₹1,00,000+</span>
                  </div>
                </div>

                {/* Calculated Result Breakdown */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#0C1813] border border-[#1B3228] mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#BCB3A7] block">Points Earned</span>
                    <span className="font-serif text-2xl font-bold text-[#C5A059]">{estimatedPoints.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-[#8C8275] block mt-0.5">pts</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#BCB3A7] block">Reward Value</span>
                    <span className="font-serif text-2xl font-bold text-[#F5EFEB]">₹{estimatedRedemptionValue.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-[#8C8275] block mt-0.5">est. savings</span>
                  </div>
                </div>
              </div>

              {/* Join / Enquire CTA Button */}
              <div className="space-y-2">
                <a
                  href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
                  className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-none transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#08100C]" />
                  <span>ENQUIRE OR REGISTER AT COUNTER</span>
                </a>
                <p className="text-[10px] text-center text-[#BCB3A7] font-light">
                  Free instant enrollment on your next visit to Diphalu, Nagaon.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Banner Assurance */}
        <div className="border-t border-[#1B3228] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BCB3A7]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Honoring regular patrons in Nagaon since 1998 · No plastic cards or registration fees</span>
          </div>
          {onSelectTab && (
            <button
              onClick={() => onSelectTab('collection')}
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#F5EFEB] font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

    </section>
  );
};

export default LoyaltyProgram;
