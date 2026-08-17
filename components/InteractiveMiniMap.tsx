import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Car, 
  Clock, 
  Phone, 
  ShieldCheck,
  Building,
  Bus,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { STORE_DETAILS } from '../data/inventory';

interface InteractiveMiniMapProps {
  className?: string;
  onSelectRoute?: (routeId: string) => void;
}

type ViewPreset = 'diphalu' | 'corridor' | 'highway';

interface Landmark {
  id: string;
  name: string;
  category: string;
  distance: string;
  driveTime: string;
  x: number;
  y: number;
  icon: React.ElementType;
}

const LANDMARKS: Landmark[] = [
  {
    id: 'clock-tower',
    name: 'Nagaon Central Clock Tower',
    category: 'City Center',
    distance: '3.2 km',
    driveTime: '7 min',
    x: 180,
    y: 310,
    icon: Building
  },
  {
    id: 'astc-bus',
    name: 'ASTC Bus Terminal',
    category: 'Transit Hub',
    distance: '4.1 km',
    driveTime: '9 min',
    x: 140,
    y: 220,
    icon: Bus
  },
  {
    id: 'railway',
    name: 'Nagaon Railway Station',
    category: 'Train Junction',
    distance: '5.0 km',
    driveTime: '12 min',
    x: 230,
    y: 360,
    icon: Building
  },
  {
    id: 'laokhowa-reserve',
    name: 'Laokhowa Wildlife Sanctuary Route',
    category: 'Scenic Route (North)',
    distance: 'Direct North',
    driveTime: 'Direct Exit',
    x: 620,
    y: 70,
    icon: Sparkles
  }
];

export const InteractiveMiniMap: React.FC<InteractiveMiniMapProps> = ({ className = '' }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activePreset, setActivePreset] = useState<ViewPreset>('corridor');
  const [activeRoute, setActiveRoute] = useState<string>('clock-tower');
  const [selectedLandmark, setSelectedLandmark] = useState<string | null>('alehouse');
  const [copiedCoords, setCopiedCoords] = useState<boolean>(false);
  const [isHoveredPin, setIsHoveredPin] = useState<boolean>(false);

  const GPS_COORDS = "26.3484° N, 92.6840° E";
  const LAT_LNG = "26.3484,92.6840";

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setActivePreset('corridor');
  };

  const handlePresetChange = (preset: ViewPreset) => {
    setActivePreset(preset);
    if (preset === 'diphalu') setZoomLevel(1.4);
    if (preset === 'corridor') setZoomLevel(1.0);
    if (preset === 'highway') setZoomLevel(0.85);
  };

  const handleCopyCoordinates = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(GPS_COORDS);
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2500);
    }
  };

  const handleTriggerNativeDirections = () => {
    // Check if on iOS device to use Apple Maps or fallback to Google Maps
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const destinationQuery = encodeURIComponent("ALE HOUSE WINE SHOP, Diphalu, Laokhowa Road, Nagaon, Assam 782003");
    
    if (isIOS) {
      window.open(`https://maps.apple.com/?daddr=${LAT_LNG}&q=${destinationQuery}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}&destination_place_id=${LAT_LNG}`, '_blank');
    }
  };

  // Viewbox transformation based on preset and zoom
  const viewBoxX = activePreset === 'diphalu' ? 320 : activePreset === 'highway' ? 50 : 100;
  const viewBoxY = activePreset === 'diphalu' ? 100 : activePreset === 'highway' ? 20 : 50;
  const viewBoxW = 800 / zoomLevel;
  const viewBoxH = 460 / zoomLevel;

  return (
    <div className={`bg-[#050B08] border border-[#1B3228] overflow-hidden shadow-2xl flex flex-col ${className}`}>
      
      {/* Top Map Action & Filter Bar */}
      <div className="p-3 sm:p-4 bg-[#08100C] border-b border-[#1B3228] flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Preset View Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0C1813] p-1 border border-[#1B3228]">
          <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A059] uppercase px-2 py-0.5 hidden sm:inline-block">
            MAP VIEW:
          </span>
          <button
            onClick={() => handlePresetChange('diphalu')}
            className={`px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer ${
              activePreset === 'diphalu'
                ? 'bg-[#C5A059] text-[#08100C] font-bold shadow-sm'
                : 'text-[#BCB3A7] hover:text-[#F5EFEB]'
            }`}
          >
            Diphalu Hub (1.4x)
          </button>
          <button
            onClick={() => handlePresetChange('corridor')}
            className={`px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer ${
              activePreset === 'corridor'
                ? 'bg-[#C5A059] text-[#08100C] font-bold shadow-sm'
                : 'text-[#BCB3A7] hover:text-[#F5EFEB]'
            }`}
          >
            Nagaon Corridor
          </button>
          <button
            onClick={() => handlePresetChange('highway')}
            className={`px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer ${
              activePreset === 'highway'
                ? 'bg-[#C5A059] text-[#08100C] font-bold shadow-sm'
                : 'text-[#BCB3A7] hover:text-[#F5EFEB]'
            }`}
          >
            Regional NH-127
          </button>
        </div>

        {/* Zoom & Reset Controls */}
        <div className="flex items-center gap-1.5 ml-auto">
          <button
            onClick={handleZoomIn}
            aria-label="Zoom in"
            title="Zoom In"
            className="w-7 h-7 bg-[#0C1813] hover:bg-[#1B3228] border border-[#1B3228] text-[#C5A059] hover:text-[#F5EFEB] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label="Zoom out"
            title="Zoom Out"
            className="w-7 h-7 bg-[#0C1813] hover:bg-[#1B3228] border border-[#1B3228] text-[#C5A059] hover:text-[#F5EFEB] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleResetZoom}
            aria-label="Reset map zoom"
            title="Reset Map Orientation"
            className="px-2 h-7 bg-[#0C1813] hover:bg-[#1B3228] border border-[#1B3228] text-[10px] font-mono uppercase tracking-wider text-[#BCB3A7] hover:text-[#F5EFEB] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3 text-[#C5A059]" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

      </div>

      {/* SVG Interactive Map Area */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/11] bg-[#07110C] overflow-hidden select-none">
        
        {/* Subtle Ambient Radial Glow on Store Location */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Vector SVG Cartography */}
        <svg
          viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxW} ${viewBoxH}`}
          className="w-full h-full transition-all duration-500 ease-out"
          style={{ cursor: 'grab' }}
        >
          <defs>
            {/* Dark Grid Pattern */}
            <pattern id="cartoGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1B3228" strokeWidth="0.5" strokeOpacity="0.4" />
              <circle cx="30" cy="30" r="0.75" fill="#C5A059" fillOpacity="0.25" />
            </pattern>

            {/* Glowing Amber Filter for Ale House Pin */}
            <filter id="amberGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Route Gradient */}
            <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E6C875" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <rect x="-200" y="-200" width="1400" height="900" fill="url(#cartoGrid)" />

          {/* Water Feature: Kolong River Ribbon */}
          <path
            d="M -50 380 Q 200 420 380 340 T 750 390 T 1100 350"
            fill="none"
            stroke="#0e2a22"
            strokeWidth="32"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            d="M -50 380 Q 200 420 380 340 T 750 390 T 1100 350"
            fill="none"
            stroke="#1b4d3e"
            strokeWidth="18"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />
          <text x="360" y="375" fill="#529b82" fontSize="9" letterSpacing="0.2em" fontFamily="sans-serif" fontStyle="italic" opacity="0.8">
            KOLONG RIVER
          </text>

          {/* Secondary Arterial Roads & Connectors */}
          <path
            d="M 50 180 L 300 240 L 500 220 L 750 310"
            fill="none"
            stroke="#14261E"
            strokeWidth="10"
            strokeLinecap="square"
          />
          <path
            d="M 180 420 L 220 280 L 380 200 L 580 180"
            fill="none"
            stroke="#14261E"
            strokeWidth="8"
          />

          {/* Regional Bypass NH-127 (South-East axis) */}
          <path
            d="M -20 120 Q 250 160 520 280 T 950 400"
            fill="none"
            stroke="#1B3228"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M -20 120 Q 250 160 520 280 T 950 400"
            fill="none"
            stroke="#264537"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <text x="730" y="360" fill="#8C8275" fontSize="8" letterSpacing="0.15em" fontFamily="sans-serif" fontWeight="bold">
            NH-127 BYPASS CORRIDOR
          </text>

          {/* Primary Artery: LAOKHOWA ROAD (Through Diphalu) */}
          <path
            d="M 120 400 L 240 280 L 480 180 L 720 100 L 880 40"
            fill="none"
            stroke="#1D382B"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M 120 400 L 240 280 L 480 180 L 720 100 L 880 40"
            fill="none"
            stroke="#2A523E"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Road center dash */}
          <path
            d="M 120 400 L 240 280 L 480 180 L 720 100 L 880 40"
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeOpacity="0.75"
          />
          
          {/* Road Name Label */}
          <g transform="translate(320, 240) rotate(-22)">
            <rect x="-10" y="-12" width="140" height="18" fill="#08100C" stroke="#1B3228" strokeWidth="0.75" />
            <text x="60" y="1" fill="#C5A059" fontSize="9" letterSpacing="0.25em" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              LAOKHOWA ROAD
            </text>
          </g>

          {/* Diphalu Junction Label */}
          <g transform="translate(480, 220)">
            <circle cx="0" cy="0" r="4" fill="#C5A059" fillOpacity="0.4" />
            <text x="12" y="3" fill="#D5CCC1" fontSize="8.5" fontFamily="sans-serif" letterSpacing="0.1em">
              Diphalu Chowk
            </text>
          </g>

          {/* Animated Route Line from Selected Landmark */}
          {activeRoute === 'clock-tower' && (
            <g>
              <path
                d="M 180 310 L 240 280 L 480 180 L 515 165"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                className="animate-pulse"
              />
            </g>
          )}

          {activeRoute === 'astc-bus' && (
            <g>
              <path
                d="M 140 220 L 240 280 L 480 180 L 515 165"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                className="animate-pulse"
              />
            </g>
          )}

          {activeRoute === 'railway' && (
            <g>
              <path
                d="M 230 360 L 240 280 L 480 180 L 515 165"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="3.5"
                strokeDasharray="6 4"
                className="animate-pulse"
              />
            </g>
          )}

          {/* Landmark Pins */}
          {LANDMARKS.map(lm => {
            const isSelected = activeRoute === lm.id;
            return (
              <g 
                key={lm.id} 
                transform={`translate(${lm.x}, ${lm.y})`}
                className="cursor-pointer group"
                onClick={() => {
                  setActiveRoute(lm.id);
                  setSelectedLandmark(lm.id);
                }}
              >
                {/* Outer halo if active */}
                {isSelected && (
                  <circle cx="0" cy="0" r="16" fill="#C5A059" fillOpacity="0.15" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 3" />
                )}
                <circle 
                  cx="0" 
                  cy="0" 
                  r="6" 
                  fill={isSelected ? "#C5A059" : "#0C1813"} 
                  stroke={isSelected ? "#08100C" : "#8C8275"} 
                  strokeWidth="2" 
                />
                <circle cx="0" cy="0" r="2" fill={isSelected ? "#08100C" : "#C5A059"} />
                
                {/* Landmark Label Plate */}
                <g transform="translate(10, -6)">
                  <rect 
                    x="0" 
                    y="-8" 
                    width={lm.name.length * 5.8 + 14} 
                    height="16" 
                    fill="#08100C" 
                    stroke={isSelected ? "#C5A059" : "#1B3228"} 
                    strokeWidth="1" 
                    fillOpacity="0.9"
                  />
                  <text 
                    x="6" 
                    y="3" 
                    fill={isSelected ? "#F5EFEB" : "#BCB3A7"} 
                    fontSize="7.5" 
                    fontFamily="sans-serif" 
                    fontWeight={isSelected ? "bold" : "normal"}
                  >
                    {lm.name} ({lm.driveTime})
                  </text>
                </g>
              </g>
            );
          })}

          {/* MAIN PIN: ALE HOUSE WINE SHOP at Diphalu, Laokhowa Road (520, 165) */}
          <g 
            transform="translate(520, 165)" 
            className="cursor-pointer"
            onMouseEnter={() => setIsHoveredPin(true)}
            onMouseLeave={() => setIsHoveredPin(false)}
            onClick={() => setSelectedLandmark('alehouse')}
          >
            {/* Animated Radar Pulse Rings */}
            <circle cx="0" cy="0" r="32" fill="#C5A059" fillOpacity="0.1" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="0" cy="0" r="22" fill="#C5A059" fillOpacity="0.18" />
            <circle cx="0" cy="0" r="14" fill="#C5A059" fillOpacity="0.3" />

            {/* Pin Target Callout Body */}
            <g transform="translate(-18, -48)" filter="url(#amberGlow)">
              {/* Outer Badge */}
              <polygon points="18,48 4,24 4,4 32,4 32,24" fill="#C5A059" stroke="#08100C" strokeWidth="1.5" />
              <circle cx="18" cy="14" r="8" fill="#08100C" />
              {/* Star / Wine glyph */}
              <polygon points="18,8 20,13 25,13 21,16 23,21 18,18 13,21 15,16 11,13 16,13" fill="#C5A059" />
            </g>

            {/* Prominent High-Contrast Callout Card */}
            <g transform="translate(24, -42)">
              <rect 
                x="0" 
                y="0" 
                width="160" 
                height="46" 
                fill="#08100C" 
                stroke="#C5A059" 
                strokeWidth="1.5" 
                fillOpacity="0.95"
              />
              <rect x="0" y="0" width="160" height="3" fill="#C5A059" />
              
              <text x="10" y="16" fill="#C5A059" fontSize="9.5" fontFamily="serif" fontWeight="bold" letterSpacing="0.05em">
                ALE HOUSE WINE SHOP
              </text>
              <text x="10" y="28" fill="#F5EFEB" fontSize="7.5" fontFamily="sans-serif">
                Diphalu, Laokhowa Rd, Nagaon
              </text>
              <text x="10" y="38" fill="#529b82" fontSize="7" fontFamily="monospace" fontWeight="bold">
                ● OPEN TODAY · 10AM - 10PM
              </text>
            </g>
          </g>

          {/* Cartographic Compass Rose & Coordinates Watermark */}
          <g transform="translate(730, 80)" opacity="0.6">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#C5A059" strokeWidth="0.75" />
            <line x1="0" y1="-18" x2="0" y2="18" stroke="#C5A059" strokeWidth="1" />
            <line x1="-18" y1="0" x2="18" y2="0" stroke="#C5A059" strokeWidth="1" />
            <text x="0" y="-21" fill="#C5A059" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
            <text x="22" y="3" fill="#8C8275" fontSize="6" textAnchor="middle">E</text>
          </g>

          {/* Scale Bar */}
          <g transform="translate(680, 420)" opacity="0.75">
            <line x1="0" y1="0" x2="60" y2="0" stroke="#C5A059" strokeWidth="2" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="#C5A059" strokeWidth="1" />
            <line x1="60" y1="-3" x2="60" y2="3" stroke="#C5A059" strokeWidth="1" />
            <text x="30" y="-5" fill="#BCB3A7" fontSize="7" fontFamily="monospace" textAnchor="middle">1.0 km</text>
          </g>

        </svg>

        {/* Floating Coordinates & Status Badge Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#08100C]/90 border border-[#1B3228] p-2.5 flex items-center gap-3 backdrop-blur-md z-10 shadow-lg">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#C5A059] font-mono font-bold uppercase tracking-wider">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>{GPS_COORDS}</span>
            </div>
            <span className="text-[10px] text-[#BCB3A7] font-light">Diphalu, Nagaon, Assam 782003</span>
          </div>

          <button
            onClick={handleCopyCoordinates}
            aria-label="Copy GPS Coordinates"
            title="Copy GPS coordinates"
            className="p-1.5 bg-[#0C1813] hover:bg-[#1B3228] border border-[#1B3228] hover:border-[#C5A059] text-[#C5A059] transition-colors cursor-pointer"
          >
            {copiedCoords ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* Interactive Route Selector Chips */}
      <div className="p-4 bg-[#08100C] border-t border-[#1B3228]">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>ESTIMATED DRIVE TIMES TO DIPHALU</span>
          </span>
          <span className="text-[10px] font-mono text-[#BCB3A7]">Select origin for route</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {LANDMARKS.filter(l => l.id !== 'laokhowa-reserve').map(lm => {
            const isSelected = activeRoute === lm.id;
            return (
              <button
                key={lm.id}
                onClick={() => {
                  setActiveRoute(lm.id);
                  setSelectedLandmark(lm.id);
                }}
                className={`p-2.5 text-left border rounded-none transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0C1813] border-[#C5A059] text-[#F5EFEB] shadow-md'
                    : 'bg-[#050B08] border-[#1B3228] text-[#BCB3A7] hover:border-[#C5A059]/40 hover:text-[#D5CCC1]'
                }`}
              >
                <div>
                  <div className="text-[11px] font-medium leading-tight">{lm.name}</div>
                  <div className="text-[10px] text-[#8C8275]">{lm.distance} via Laokhowa Rd</div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#C5A059]' : 'text-[#BCB3A7]'}`}>
                    {lm.driveTime}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Native Directions Trigger Action Bar */}
      <div className="p-4 sm:p-5 bg-[#0C1813] border-t border-[#1B3228] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        
        <div>
          <h5 className="font-serif text-sm font-bold text-[#F5EFEB]">
            Ready to visit the store?
          </h5>
          <p className="text-[11px] text-[#BCB3A7] font-light">
            Launch GPS turn-by-turn navigation directly to our Diphalu storefront counter.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Main Directions Button */}
          <button
            id="trigger-native-directions-btn"
            onClick={handleTriggerNativeDirections}
            className="flex-1 sm:flex-initial py-3 px-5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#08100C] font-sans font-bold text-xs uppercase tracking-[0.18em] rounded-none transition-all shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]"
          >
            <Navigation className="w-4 h-4 text-[#08100C] shrink-0" />
            <span>START NATIVE GPS DIRECTIONS</span>
          </button>

          {/* Quick Call Button */}
          <a
            href={`tel:${STORE_DETAILS.wholesalePhoneDial}`}
            aria-label="Call store for directions"
            title="Call Store for route help"
            className="p-3 bg-[#08100C] hover:bg-[#1B3228] border border-[#1B3228] hover:border-[#C5A059] text-[#C5A059] hover:text-[#F5EFEB] transition-colors flex items-center justify-center cursor-pointer"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  );
};

export default InteractiveMiniMap;
