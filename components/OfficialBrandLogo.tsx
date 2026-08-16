import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'parchment' | 'dark' | 'brass' | 'seal';
  size?: number | string;
}

/**
 * Isolated Wine Bottle & Grapes Illustration Mark
 * Matches the uploaded official artwork: stippled wine bottle, stemmed glass, and grape bunch.
 */
export const OfficialBottleMark: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = "w-10 h-10", color = "currentColor", size }) => {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Ale House Wine Bottle and Grapes Brand Mark"
    >
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Bottle Neck & Capsule */}
        <path d="M92 48 L92 20 C92 18 94 16 96 16 L104 16 C106 16 108 18 108 20 L108 48" />
        <path d="M90 22 L110 22" strokeWidth="1.5" />
        <path d="M91 28 L109 28" strokeWidth="1.5" />
        
        {/* Capsule Foil & Seal */}
        <path d="M92 36 L108 36" strokeWidth="1.5" />
        <line x1="100" y1="16" x2="100" y2="28" strokeWidth="1" strokeDasharray="1 2" />

        {/* Bottle Shoulders & Body */}
        <path d="M92 48 C92 65 76 80 76 105 L76 168 C76 178 82 184 94 186" />
        <path d="M108 48 C108 65 124 80 124 105 L124 125" />

        {/* Bottle Stippling & Glass Reflections (fine vintage stipple dots & lines) */}
        <g strokeWidth="1.2" opacity="0.85">
          <circle cx="84" cy="90" r="0.75" fill={color} />
          <circle cx="88" cy="82" r="0.75" fill={color} />
          <circle cx="82" cy="100" r="0.75" fill={color} />
          <circle cx="86" cy="112" r="0.75" fill={color} />
          <circle cx="83" cy="125" r="0.75" fill={color} />
          <circle cx="87" cy="138" r="0.75" fill={color} />
          <circle cx="84" cy="150" r="0.75" fill={color} />
          <circle cx="88" cy="162" r="0.75" fill={color} />
          <circle cx="94" cy="62" r="0.75" fill={color} />
          <circle cx="98" cy="55" r="0.75" fill={color} />
          <circle cx="102" cy="62" r="0.75" fill={color} />
          <circle cx="106" cy="55" r="0.75" fill={color} />
          <circle cx="114" cy="85" r="0.75" fill={color} />
          <circle cx="118" cy="98" r="0.75" fill={color} />
        </g>

        {/* Bottle Label Inset Outline */}
        <path d="M80 102 L106 102" strokeWidth="1.5" />
        <path d="M80 148 L100 148" strokeWidth="1.5" />
        <path d="M80 102 L80 148" strokeWidth="1.5" />
        <path d="M106 102 L106 122" strokeWidth="1.5" />
        <rect x="83" y="106" width="20" height="38" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

        {/* Stemmed Wine/Fizz Glass */}
        <path d="M108 108 C108 108 107 136 118 144 C129 136 128 108 128 108 Z" strokeWidth="2" />
        <path d="M109 116 C112 118 124 118 127 116" strokeWidth="1.2" />
        
        {/* Glass Fizz Bubbles */}
        <circle cx="114" cy="124" r="1" fill={color} />
        <circle cx="121" cy="120" r="0.8" fill={color} />
        <circle cx="118" cy="132" r="1" fill={color} />
        <circle cx="115" cy="138" r="0.8" fill={color} />
        <circle cx="122" cy="128" r="0.8" fill={color} />

        {/* Glass Stem & Foot */}
        <path d="M118 144 L118 172" strokeWidth="2" />
        <path d="M104 174 C112 171 124 171 132 174" strokeWidth="2" />

        {/* Grapes Cluster (Pyramidal, authentic stippled wine grapes) */}
        {/* Top/Upper Grapes */}
        <circle cx="98" cy="154" r="6" />
        <circle cx="109" cy="153" r="6" />
        <circle cx="122" cy="152" r="5.5" />
        <circle cx="132" cy="156" r="5" />

        {/* Middle Layer Grapes */}
        <circle cx="90" cy="162" r="6" />
        <circle cx="102" cy="162" r="6" />
        <circle cx="114" cy="161" r="6" />
        <circle cx="126" cy="162" r="5.5" />
        <circle cx="136" cy="165" r="5" />

        {/* Lower Layer Grapes */}
        <circle cx="84" cy="172" r="5.5" />
        <circle cx="94" cy="172" r="6" />
        <circle cx="106" cy="172" r="6" />
        <circle cx="118" cy="172" r="6" />
        <circle cx="128" cy="173" r="5" />

        {/* Bottom Tip Grapes */}
        <circle cx="90" cy="182" r="5" />
        <circle cx="100" cy="182" r="5.5" />
        <circle cx="112" cy="182" r="5.5" />
        <circle cx="122" cy="182" r="5" />
        <circle cx="96" cy="190" r="4.5" />
        <circle cx="106" cy="190" r="5" />
        <circle cx="115" cy="190" r="4.5" />
        <circle cx="106" cy="198" r="4" />

        {/* Left Side Scattered Grapes */}
        <circle cx="78" cy="178" r="4.5" />
        <circle cx="72" cy="184" r="4" />
        <circle cx="80" cy="186" r="4" />

        {/* Grape Leaves & Vines */}
        <path d="M82 144 C76 138 68 142 66 148 C64 154 70 160 76 158" strokeWidth="1.5" />
        <path d="M128 140 C138 134 146 140 144 148 C142 154 136 156 130 152" strokeWidth="1.5" />
        {/* Vine curly tendrils */}
        <path d="M136 136 C144 130 152 134 148 142 C146 146 140 146 140 148" strokeWidth="1.2" />
        <path d="M72 148 C66 144 60 148 62 154" strokeWidth="1.2" />
      </g>
    </svg>
  );
};

/**
 * Full Official Heritage Emblem & Seal
 * Exact reproduction of the uploaded artwork:
 * - Ornate notched cartouche outer frame
 * - "since"
 * - "19" "98"
 * - Center bottle, glass, and grapes illustration
 * - "ALE HOUSE" (tall condensed block typography)
 * - "WINE SHOP" (spaced tracked subtitle)
 */
export const OfficialLogoSeal: React.FC<LogoProps> = ({
  className = "w-72 sm:w-84 md:w-96",
  variant = 'parchment'
}) => {
  // Theme styling for the emblem
  const isParchment = variant === 'parchment';
  const isSeal = variant === 'seal';
  const isBrass = variant === 'brass';

  // Primary colors
  let frameStroke = isParchment ? "#1A2E26" : isBrass ? "#C5A059" : "#F5EFEB";
  let textColor = isParchment ? "#14241E" : isBrass ? "#C5A059" : "#F5EFEB";
  let artworkColor = isParchment ? "#1A2E26" : isBrass ? "#C5A059" : "#F5EFEB";
  let bgFill = isSeal ? "#1B1311" : "transparent";

  if (isSeal) {
    frameStroke = "#F5EFEB";
    textColor = "#F5EFEB";
    artworkColor = "#F5EFEB";
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        viewBox="0 0 420 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        aria-label="Ale House Wine Shop Official Heritage Logo Seal - Since 1998"
      >
        {/* Optional Authentic Dark Brown Seal Background */}
        {isSeal && (
          <rect width="420" height="540" fill={bgFill} rx="4" />
        )}

        {/* Outer Ornate Cartouche Border with Notched Corners & Arched Tabs */}
        <g stroke={frameStroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Ornate Frame Path */}
          <path
            d="
              M 48 36
              L 155 36
              C 180 20 240 20 265 36
              L 372 36
              L 372 65
              C 388 65 388 78 388 95
              L 388 445
              C 388 462 388 475 372 475
              L 372 504
              L 265 504
              C 240 520 180 520 155 504
              L 48 504
              L 48 475
              C 32 475 32 462 32 445
              L 32 95
              C 32 78 32 65 48 65
              Z
            "
          />

          {/* Inner Fine Border Line */}
          <path
            d="
              M 56 46
              L 158 46
              C 182 32 238 32 262 46
              L 364 46
              L 364 72
              C 378 74 378 84 378 98
              L 378 442
              C 378 456 378 466 364 468
              L 364 494
              L 262 494
              C 238 508 182 508 158 494
              L 56 494
              L 56 468
              C 42 466 42 456 42 442
              L 42 98
              C 42 84 42 74 56 72
              Z
            "
            strokeWidth="1.2"
            opacity="0.75"
          />

          {/* Fine Corner Accent Notches */}
          <line x1="48" y1="65" x2="56" y2="72" strokeWidth="1.2" />
          <line x1="372" y1="65" x2="364" y2="72" strokeWidth="1.2" />
          <line x1="48" y1="475" x2="56" y2="468" strokeWidth="1.2" />
          <line x1="372" y1="475" x2="364" y2="468" strokeWidth="1.2" />
        </g>

        {/* Top: "since" in typewriter/serif lowercase */}
        <text
          x="210"
          y="84"
          textAnchor="middle"
          fill={textColor}
          fontSize="24"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="400"
          letterSpacing="0.22em"
          opacity="0.9"
        >
          since
        </text>

        {/* Left: "19" */}
        <text
          x="108"
          y="235"
          textAnchor="middle"
          fill={textColor}
          fontSize="44"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="400"
          letterSpacing="0.18em"
        >
          19
        </text>

        {/* Right: "98" */}
        <text
          x="312"
          y="235"
          textAnchor="middle"
          fill={textColor}
          fontSize="44"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="400"
          letterSpacing="0.18em"
        >
          98
        </text>

        {/* Center Illustration: Bottle, Glass & Grapes */}
        <g transform="translate(105, 75) scale(1.05)">
          <g stroke={artworkColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Bottle Neck */}
            <path d="M92 48 L92 20 C92 18 94 16 96 16 L104 16 C106 16 108 18 108 20 L108 48" />
            <path d="M90 22 L110 22" strokeWidth="1.5" />
            <path d="M91 28 L109 28" strokeWidth="1.5" />
            <path d="M92 36 L108 36" strokeWidth="1.5" />

            {/* Bottle Shoulders & Body */}
            <path d="M92 48 C92 65 76 80 76 105 L76 168 C76 178 82 184 94 186" />
            <path d="M108 48 C108 65 124 80 124 105 L124 125" />

            {/* Stippling Dots in Glass Bottle */}
            <g strokeWidth="1.2" opacity="0.85">
              <circle cx="84" cy="90" r="0.75" fill={artworkColor} />
              <circle cx="88" cy="82" r="0.75" fill={artworkColor} />
              <circle cx="82" cy="100" r="0.75" fill={artworkColor} />
              <circle cx="86" cy="112" r="0.75" fill={artworkColor} />
              <circle cx="83" cy="125" r="0.75" fill={artworkColor} />
              <circle cx="87" cy="138" r="0.75" fill={artworkColor} />
              <circle cx="84" cy="150" r="0.75" fill={artworkColor} />
              <circle cx="88" cy="162" r="0.75" fill={artworkColor} />
              <circle cx="94" cy="62" r="0.75" fill={artworkColor} />
              <circle cx="98" cy="55" r="0.75" fill={artworkColor} />
              <circle cx="102" cy="62" r="0.75" fill={artworkColor} />
              <circle cx="106" cy="55" r="0.75" fill={artworkColor} />
              <circle cx="114" cy="85" r="0.75" fill={artworkColor} />
              <circle cx="118" cy="98" r="0.75" fill={artworkColor} />
            </g>

            {/* Label Inset */}
            <path d="M80 102 L106 102" strokeWidth="1.5" />
            <path d="M80 148 L100 148" strokeWidth="1.5" />
            <path d="M80 102 L80 148" strokeWidth="1.5" />
            <path d="M106 102 L106 122" strokeWidth="1.5" />
            <rect x="83" y="106" width="20" height="38" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

            {/* Wine / Champagne Glass */}
            <path d="M108 108 C108 108 107 136 118 144 C129 136 128 108 128 108 Z" strokeWidth="2" />
            <path d="M109 116 C112 118 124 118 127 116" strokeWidth="1.2" />
            <circle cx="114" cy="124" r="1" fill={artworkColor} />
            <circle cx="121" cy="120" r="0.8" fill={artworkColor} />
            <circle cx="118" cy="132" r="1" fill={artworkColor} />
            <circle cx="115" cy="138" r="0.8" fill={artworkColor} />
            <circle cx="122" cy="128" r="0.8" fill={artworkColor} />
            <path d="M118 144 L118 172" strokeWidth="2" />
            <path d="M104 174 C112 171 124 171 132 174" strokeWidth="2" />

            {/* Grapes Bunch */}
            <circle cx="98" cy="154" r="6" />
            <circle cx="109" cy="153" r="6" />
            <circle cx="122" cy="152" r="5.5" />
            <circle cx="132" cy="156" r="5" />
            <circle cx="90" cy="162" r="6" />
            <circle cx="102" cy="162" r="6" />
            <circle cx="114" cy="161" r="6" />
            <circle cx="126" cy="162" r="5.5" />
            <circle cx="136" cy="165" r="5" />
            <circle cx="84" cy="172" r="5.5" />
            <circle cx="94" cy="172" r="6" />
            <circle cx="106" cy="172" r="6" />
            <circle cx="118" cy="172" r="6" />
            <circle cx="128" cy="173" r="5" />
            <circle cx="90" cy="182" r="5" />
            <circle cx="100" cy="182" r="5.5" />
            <circle cx="112" cy="182" r="5.5" />
            <circle cx="122" cy="182" r="5" />
            <circle cx="96" cy="190" r="4.5" />
            <circle cx="106" cy="190" r="5" />
            <circle cx="115" cy="190" r="4.5" />
            <circle cx="106" cy="198" r="4" />
            <circle cx="78" cy="178" r="4.5" />
            <circle cx="72" cy="184" r="4" />
            <circle cx="80" cy="186" r="4" />

            {/* Leaves */}
            <path d="M82 144 C76 138 68 142 66 148 C64 154 70 160 76 158" strokeWidth="1.5" />
            <path d="M128 140 C138 134 146 140 144 148 C142 154 136 156 130 152" strokeWidth="1.5" />
            <path d="M136 136 C144 130 152 134 148 142 C146 146 140 146 140 148" strokeWidth="1.2" />
            <path d="M72 148 C66 144 60 148 62 154" strokeWidth="1.2" />
          </g>
        </g>

        {/* Divider Under Artwork */}
        <line x1="84" y1="365" x2="336" y2="365" stroke={frameStroke} strokeWidth="1" opacity="0.4" />

        {/* Main Bold Title: "ALE HOUSE" */}
        {/* Rendered with the exact vintage outline/condensed block display */}
        <text
          x="210"
          y="420"
          textAnchor="middle"
          fill="none"
          stroke={textColor}
          strokeWidth="3.5"
          fontSize="48"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          fontWeight="900"
          letterSpacing="0.08em"
        >
          ALE HOUSE
        </text>
        <text
          x="210"
          y="420"
          textAnchor="middle"
          fill={isParchment ? textColor : "none"}
          fontSize="48"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          fontWeight="900"
          letterSpacing="0.08em"
        >
          ALE HOUSE
        </text>

        {/* Subtitle: "WINE SHOP" */}
        <text
          x="210"
          y="462"
          textAnchor="middle"
          fill={textColor}
          fontSize="24"
          fontFamily="'Inter', -apple-system, sans-serif"
          fontWeight="600"
          letterSpacing="0.32em"
        >
          WINE SHOP
        </text>
      </svg>
    </div>
  );
};

/**
 * Refined Horizontal Navbar Brand Lockup
 * - Uses the official bottle & grapes illustration mark as the brand icon
 * - Shows "ALE HOUSE" (top) and "WINE SHOP" (bottom) in exact typography
 * - Adds "NAGAON, ASSAM" secondary location label
 */
export const NavbarBrandLockup: React.FC<{
  className?: string;
  isCompact?: boolean;
}> = ({ className = "", isCompact = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Bottle & Grapes Brand Mark in Aged Brass Ring */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#08100C] border border-[#C5A059]/60 flex items-center justify-center p-1 shadow-sm shrink-0">
        <OfficialBottleMark color="#C5A059" className="w-full h-full" />
      </div>

      {/* Brand Name & Location */}
      <div className="text-left flex flex-col justify-center leading-none">
        <span className="font-serif font-bold text-sm sm:text-base lg:text-[17px] tracking-[0.14em] text-[#F5EFEB] group-hover:text-[#C5A059] transition-colors">
          ALE HOUSE
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.24em] text-[#C5A059] uppercase mt-0.5">
          WINE SHOP
        </span>
        {!isCompact && (
          <span className="hidden sm:block text-[8px] sm:text-[9px] tracking-[0.22em] text-[#BCB3A7] uppercase font-sans font-light mt-0.5">
            NAGAON, ASSAM · EST. 1998
          </span>
        )}
      </div>
    </div>
  );
};
