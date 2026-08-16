/**
 * ============================================================================
 * ALE HOUSE WINE SHOP — ASSET PLACEHOLDERS & INVENTORY DATA
 * ============================================================================
 * 
 * HOW TO REPLACE IMAGES:
 * 1. To replace the Hero Homepage background, update HERO_BG_IMAGE below.
 * 2. To replace category backgrounds, update CATEGORIES_META.
 * 3. To replace individual bottle photos, update 'image' on each item in PRODUCTS.
 * 
 * Established 1998 · Nagaon, Assam · Owner: Prasanta Kalita
 * ============================================================================
 */

import { Product, BrandInfo, SpiritCategory, StoreDetails } from '../types';

import heroBarLoungeImg from '../src/assets/images/hero_bar_lounge_1786680431475.jpg';
import editScotchBottleImg from '../src/assets/images/edit_scotch_bottle_1786680447407.jpg';
import whiskyIceRocksImg from '../src/assets/images/whisky_ice_rocks_1786680462119.jpg';
import luxuryXrBottleImg from '../src/assets/images/luxury_xr_bottle_1786680472565.jpg';
import darkGoldMapImg from '../src/assets/images/dark_gold_map_1786680482721.jpg';

export const ASSETS = {
  heroBarLounge: heroBarLoungeImg,
  editScotchBottle: editScotchBottleImg,
  whiskyIceRocks: whiskyIceRocksImg,
  luxuryXrBottle: luxuryXrBottleImg,
  darkGoldMap: darkGoldMapImg,
};

/**
 * HERO BACKGROUND IMAGE ASSET & CAROUSEL SLIDES
 * Slide 1 is the authentic ALE HOUSE WINE SHOP storefront in Nagaon, Assam,
 * accompanied by premium featured bottles: Black Label, Dewar's White Label, Jim Beam, and Tuborg.
 */
export const HERO_CAROUSEL_SLIDES = [
  {
    id: 'storefront',
    image: 'https://cdn.corenexis.com/f/aPMOWjo3ABJ.png',
    alt: 'ALE HOUSE WINE SHOP Storefront in Diphalu, Nagaon, Assam',
    title: 'The Storefront',
    tag: 'Diphalu, Laokhowa Road, Nagaon'
  },
  {
    id: 'black-label',
    image: 'https://cdn.corenexis.com/f/kymA5rXeilJ.jpg',
    alt: 'Johnnie Walker Black Label 12 Year Old Blended Scotch Whisky',
    title: 'Johnnie Walker Black Label',
    tag: '12YO Blended Scotch Whisky'
  },
  {
    id: 'dewars-white-label',
    image: 'https://cdn.corenexis.com/f/lDINa5RxHJT.jpg',
    alt: "Dewar's White Label Blended Scotch Whisky",
    title: "Dewar's White Label",
    tag: 'Double Aged Blended Scotch'
  },
  {
    id: 'jim-beam',
    image: 'https://cdn.corenexis.com/f/SILF61q9TDg.jpg',
    alt: 'Jim Beam Kentucky Straight Bourbon Whiskey',
    title: 'Jim Beam Bourbon',
    tag: 'Kentucky Straight Bourbon'
  },
  {
    id: 'tuborg',
    image: 'https://cdn.corenexis.com/f/OjNgV3nOAWR.jpg',
    alt: 'Tuborg Green All Malt Premium European Beer',
    title: 'Tuborg Green Lager',
    tag: 'All Malt Premium European Lager'
  }
];

export const HERO_BG_IMAGE = 'https://cdn.corenexis.com/f/aPMOWjo3ABJ.png';

/**
 * HERITAGE SECTION BACKGROUND ASSET PLACEHOLDER
 */
export const HERITAGE_BG_IMAGE = "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1600&auto=format&fit=crop";

/**
 * STOREFRONT EXTERIOR IMAGE
 */
export const STORE_EXTERIOR_IMAGE = "https://cdn.corenexis.com/f/aPMOWjo3ABJ.png";

/**
 * AT THE SHOP GALLERY PLACEHOLDERS
 * High-resolution photography of ALE HOUSE WINE SHOP in Nagaon (storefront, interior, shelves, cellar).
 */
export const SHOP_GALLERY_IMAGES = [
  {
    id: 'interior-shelves',
    title: 'Warm Oak Shelves & Main Counter',
    category: 'Store Interior',
    caption: 'Thoughtfully organized displays showcasing over 80+ domestic and international spirits.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    aspect: 'aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-2'
  },
  {
    id: 'proprietor-legacy',
    title: 'Proprietor Prasanta Kalita',
    category: '26+ Years Legacy',
    caption: 'Founded in 1998 with a commitment to authenticity, fair pricing, and expert guidance.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1'
  },
  {
    id: 'storefront-entrance',
    title: 'Diphalu, Laokhowa Road Storefront',
    category: 'Nagaon Landmark',
    caption: 'The authentic ALE HOUSE WINE SHOP in Diphalu for connoisseurs and local patrons alike.',
    image: 'https://cdn.corenexis.com/f/aPMOWjo3ABJ.png',
    aspect: 'aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1'
  },
  {
    id: 'wine-cellar',
    title: 'The Wine & Single Malt Collection',
    category: 'Curated Cellar',
    caption: 'Carefully stored wines and rare Scotch malts selected for discerning palates.',
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-1'
  }
];

export const STORE_DETAILS: StoreDetails = {
  name: "ALE HOUSE WINE SHOP",
  established: 1998,
  owner: "Prasanta Kalita",
  addressLine1: "Diphalu, Laokhowa Road",
  addressLine2: "Nagaon, Assam",
  city: "Nagaon",
  state: "Assam",
  country: "India",
  pin: "782003",
  fullAddress: "ALE HOUSE WINE SHOP, Diphalu, Laokhowa Road, Nagaon, Assam 782003, India",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Ale+House+Wine+Shop+Diphalu+Laokhowa+Road+Nagaon+Assam+782003",
  phonePlaceholder: "+91 98640 55432",
  wholesalePhone: "+91 98640 88990",
  wholesalePhoneDial: "+919864088990",
  whatsappPlaceholder: "+91 98640 88990",
  openingHoursPlaceholder: "10:00 AM – 10:00 PM (Monday to Sunday)"
};

export const SHOWCASE_CATEGORIES = [
  {
    id: 'whisky',
    name: 'WHISKY',
    categoryKey: 'Whisky' as SpiritCategory,
    tagline: 'Single Malts, Blended Scotch & Fine Indian Whiskies',
    description: 'A distinguished repertoire ranging from revered Speyside & Islay scotches to India’s acclaimed single malts and celebrated everyday blends.',
    image: 'https://cdn.corenexis.com/f/kymA5rXeilJ.jpg',
    highlights: ['Single Malts', 'Blended Scotch', 'Premium Grain', 'Aged Reserves']
  },
  {
    id: 'wine',
    name: 'WINE',
    categoryKey: 'Wine' as SpiritCategory,
    tagline: 'Fine Reds, Whites, Rosés & Sparkling Selections',
    description: 'Carefully handled vintages from Nashik Valley and world vineyards, selected for quiet dinners, celebratory evenings, and gifting.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Cabernet & Shiraz', 'Crisp Sauvignon', 'Sparkling & Brut', 'Dessert Vintages']
  },
  {
    id: 'beer',
    name: 'BEER',
    categoryKey: 'Beer' as SpiritCategory,
    tagline: 'Chilled Lagers, Wheat Brews & International Pilsners',
    description: 'Crisp Indian lagers, craft wheat ales, and chilled international classics stored to ensure optimum freshness.',
    image: 'https://cdn.corenexis.com/f/OjNgV3nOAWR.jpg',
    highlights: ['Chilled Lagers', 'Wheat Ales', 'Strong Brews', 'Imported Pilsners']
  },
  {
    id: 'spirits',
    name: 'SPIRITS',
    categoryKey: 'Rum' as SpiritCategory,
    tagline: 'Aged Rums, Botanical Gins, Smooth Vodkas & Brandies',
    description: 'Authentic spirits spanning dark vatted rums, copper-distilled artisanal gins, triple-distilled vodkas, and warming grape brandies.',
    image: 'https://cdn.corenexis.com/f/Ywby3AFzaBu.jpg',
    highlights: ['Aged Dark Rum', 'Botanical Gin', 'Pure Grain Vodka', 'French Grape Brandy']
  },
  {
    id: 'premium-selection',
    name: 'PREMIUM SELECTION',
    categoryKey: 'Whisky' as SpiritCategory,
    tagline: 'Rare Reserves, Luxury Decanters & Limited Bottles',
    description: 'An elevated collection of distinguished prestige labels, celebratory bottles, and limited editions for discerning collectors and momentous occasions.',
    image: 'https://cdn.corenexis.com/f/lDINa5RxHJT.jpg',
    highlights: ['Limited Editions', 'Rare Casks', 'Luxury Decanters', 'Prestige Labels']
  }
];

export const CATEGORIES_META: { name: SpiritCategory; description: string; image: string; count: string }[] = [
  {
    name: "Whisky",
    description: "Curated Blended Scotch, Indian Single Malts, Bourbon & Fine Whiskies.",
    image: "https://cdn.corenexis.com/f/kymA5rXeilJ.jpg",
    count: "35+ Brands Available"
  },
  {
    name: "Vodka",
    description: "Triple-distilled pure grain vodkas and premium international labels.",
    image: "https://cdn.corenexis.com/f/Ywby3AFzaBu.jpg",
    count: "15+ Brands Available"
  },
  {
    name: "Rum",
    description: "Classic dark aged rums, golden spiced varieties & light cocktail rums.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
    count: "12+ Brands Available"
  },
  {
    name: "Gin",
    description: "Artisanal botanical gins, London Dry standards & craft Indian infusions.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
    count: "10+ Brands Available"
  },
  {
    name: "Brandy",
    description: "Smooth grape brandies and cognac selections for warm sipping.",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1000&auto=format&fit=crop",
    count: "8+ Brands Available"
  },
  {
    name: "Wine",
    description: "Fine reds, crisp whites, sparkling wines & dessert vintages.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
    count: "20+ Labels Available"
  },
  {
    name: "Beer",
    description: "Chilled lagers, strong brews, wheat beers & international pilsners.",
    image: "https://cdn.corenexis.com/f/OjNgV3nOAWR.jpg",
    count: "25+ Varieties Available"
  },
  {
    name: "Liqueurs",
    description: "Irish creams, herbal digestifs, coffee liqueurs & triple secs.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
    count: "8+ Labels Available"
  },
  {
    name: "Ready to Drink",
    description: "Pre-mixed spirit cocktails, hard seltzers & flavored coolers.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop",
    count: "10+ Flavors Available"
  }
];

export const BRANDS_LIST: BrandInfo[] = [
  { name: "Johnnie Walker", slug: "johnnie-walker", categories: ["Whisky"], country: "Scotland", description: "World-renowned Scotch whisky heritage since 1820.", featured: true },
  { name: "Jameson", slug: "jameson", categories: ["Whisky"], country: "Ireland", description: "Iconic Irish whiskey triple distilled for signature smoothness.", featured: true },
  { name: "Dewar's", slug: "dewars", categories: ["Whisky"], country: "Scotland", description: "Pioneering blended Scotch double-aged in oak casks.", featured: true },
  { name: "Jim Beam", slug: "jim-beam", categories: ["Whisky"], country: "USA", description: "World's #1 Kentucky Straight Bourbon distilled since 1795.", featured: true },
  { name: "Chivas Regal", slug: "chivas-regal", categories: ["Whisky"], country: "Scotland", description: "Iconic blended Scotch whisky crafted in Speyside.", featured: true },
  { name: "Amrut", slug: "amrut", categories: ["Whisky"], country: "India", description: "Pioneer of Indian Single Malt whisky with global acclaim.", featured: true },
  { name: "Paul John", slug: "paul-john", categories: ["Whisky"], country: "India", description: "Craft Goa single malt whisky distilled in copper pot stills.", featured: true },
  { name: "Royal Stag", slug: "royal-stag", categories: ["Whisky"], country: "India", description: "Classic blend of imported Scotch malt and Indian grain spirits.", featured: true },
  { name: "Blenders Pride", slug: "blenders-pride", categories: ["Whisky"], country: "India", description: "Premium grain whisky blended with Scotch malt spirits.", featured: true },
  { name: "Imperial Blue", slug: "imperial-blue", categories: ["Whisky"], country: "India", description: "Smooth blend of Indian grain spirits and imported Scotch malts.", featured: true },
  { name: "McDowell's No. 1", slug: "mcdowells", categories: ["Whisky", "Rum", "Brandy"], country: "India", description: "One of India's favorite spirits brands since 1968.", featured: true },
  { name: "Absolut", slug: "absolut", categories: ["Vodka"], country: "Sweden", description: "Iconic Swedish vodka crafted with winter wheat.", featured: true },
  { name: "Smirnoff", slug: "smirnoff", categories: ["Vodka"], country: "USA", description: "Triple-distilled global benchmark vodka.", featured: true },
  { name: "Magic Moments", slug: "magic-moments", categories: ["Vodka"], country: "India", description: "Popular grain vodka available in classic and flavored variants.", featured: true },
  { name: "Old Monk", slug: "old-monk", categories: ["Rum"], country: "India", description: "Legendary vatted 7-year-old dark rum with vanilla notes.", featured: true },
  { name: "Bacardi", slug: "bacardi", categories: ["Rum"], country: "Puerto Rico", description: "World-famous rum family offering white, dark, and spiced rums.", featured: true },
  { name: "Bombay Sapphire", slug: "bombay-sapphire", categories: ["Gin"], country: "United Kingdom", description: "Vapour-infused London Dry Gin with 10 hand-selected botanicals.", featured: true },
  { name: "Greater Than", slug: "greater-than", categories: ["Gin"], country: "India", description: "India's first craft London Dry Gin distilled in Goa.", featured: true },
  { name: "Roku", slug: "roku", categories: ["Gin"], country: "Japan", description: "Craft Japanese gin infused with 6 traditional Japanese botanicals.", featured: true },
  { name: "Mansion House", slug: "mansion-house", categories: ["Brandy"], country: "India", description: "Popular aged French grape brandy blend.", featured: true },
  { name: "Sula Vineyards", slug: "sula", categories: ["Wine"], country: "India", description: "Nashik Valley premium Indian red, white, and rosé wines.", featured: true },
  { name: "Grover Zampa", slug: "grover-zampa", categories: ["Wine"], country: "India", description: "Pioneering Indian winery crafting medal-winning reserve wines.", featured: true },
  { name: "Kingfisher", slug: "kingfisher", categories: ["Beer"], country: "India", description: "The King of Good Times, iconic Indian lager beer.", featured: true },
  { name: "Bira 91", slug: "bira-91", categories: ["Beer"], country: "India", description: "Modern craft beer brand known for White Ale and Blonde Lager.", featured: true },
  { name: "Heineken", slug: "heineken", categories: ["Beer"], country: "Netherlands", description: "World-famous pure malt lager.", featured: true },
  { name: "Tuborg", slug: "tuborg", categories: ["Beer"], country: "Denmark", description: "Refreshing lager beer brewed with fine barley malt.", featured: true },
  { name: "Baileys", slug: "baileys", categories: ["Liqueurs"], country: "Ireland", description: "Original Irish Cream blending Irish whiskey and spirits.", featured: true },
  { name: "Jagermeister", slug: "jagermeister", categories: ["Liqueurs"], country: "Germany", description: "Herbal digestif crafted with 56 herbs and botanicals.", featured: true },
  { name: "Breezer", slug: "breezer", categories: ["Ready to Drink"], country: "Puerto Rico", description: "Refreshing rum-based fruit coolers.", featured: true }
];

export const PRODUCTS: Product[] = [
  // WHISKY
  {
    id: "jw-black-label",
    brand: "Johnnie Walker",
    name: "Black Label 12 Year Old",
    category: "Whisky",
    type: "Blended Scotch Whisky",
    image: "https://cdn.corenexis.com/f/kymA5rXeilJ.jpg",
    sizes: [
      { size: "180 ml", price: "₹ 950" },
      { size: "375 ml", price: "₹ 1,850" },
      { size: "750 ml", price: "₹ 3,600" },
      { size: "1 L", price: "₹ 4,800" }
    ],
    description: "An iconic masterwork created using whiskies aged for a minimum of 12 years. Deep notes of sweet vanilla, dark fruits and signature peat smoke.",
    character: "Rich · Smoky · Full-bodied",
    descriptors: ["Rich", "Smoky", "Full-bodied"],
    collections: ["premium", "evening-shelf", "classics"],
    origin: "Scotland",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Scotch", "12 Years", "Premium", "Blended"]
  },
  {
    id: "dewars-white-label",
    brand: "Dewar's",
    name: "White Label Blended Scotch",
    category: "Whisky",
    type: "Blended Scotch Whisky",
    image: "https://cdn.corenexis.com/f/lDINa5RxHJT.jpg",
    sizes: [
      { size: "180 ml", price: "₹ 720" },
      { size: "375 ml", price: "₹ 1,400" },
      { size: "750 ml", price: "₹ 2,750" },
      { size: "1 L", price: "₹ 3,600" }
    ],
    description: "Double-aged for exceptional smoothness. Notes of Scottish heather honey, vanilla fudge, freshly cut pear, and delicate smoke on a lingering oak finish.",
    character: "Heather Honey · Golden Pear · Delicate Smoke",
    descriptors: ["Heather Honey", "Golden Pear", "Delicate Smoke"],
    collections: ["classics", "premium", "evening-shelf"],
    origin: "Scotland",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Scotch", "Double Aged", "Classic Blend", "Smooth"]
  },
  {
    id: "jameson-irish-whiskey",
    brand: "Jameson",
    name: "Irish Whiskey Original",
    category: "Whisky",
    type: "Irish Whiskey",
    image: "https://cdn.corenexis.com/f/rS0lFufVkDt.jpg",
    sizes: [
      { size: "180 ml", price: "₹ 750" },
      { size: "375 ml", price: "₹ 1,450" },
      { size: "750 ml", price: "₹ 2,800" },
      { size: "1 L", price: "₹ 3,700" }
    ],
    description: "Triple distilled and aged in oak casks for a minimum of 4 years. Exceptionally smooth with a balance of spicy, nutty and vanilla notes with hints of sweet sherry.",
    character: "Triple Distilled · Smooth Vanilla · Toasted Wood",
    descriptors: ["Triple Distilled", "Smooth Vanilla", "Toasted Wood"],
    collections: ["classics", "premium", "discover-new"],
    origin: "Ireland",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Irish Whiskey", "Triple Distilled", "Smooth", "Popular"]
  },
  {
    id: "jim-beam-white-bourbon",
    brand: "Jim Beam",
    name: "Kentucky Straight Bourbon",
    category: "Whisky",
    type: "Kentucky Bourbon",
    image: "https://cdn.corenexis.com/f/SILF61q9TDg.jpg",
    sizes: [
      { size: "180 ml", price: "₹ 680" },
      { size: "375 ml", price: "₹ 1,320" },
      { size: "750 ml", price: "₹ 2,550" },
      { size: "1 L", price: "₹ 3,400" }
    ],
    description: "Aged for four years in newly charred American white oak barrels. Elegant, smooth and refined with notes of caramel, vanilla, and pleasant wood spice warmth.",
    character: "Caramel · Sweet Corn · Toasted American Oak",
    descriptors: ["Caramel", "Sweet Corn", "Toasted American Oak"],
    collections: ["classics", "premium", "discover-new"],
    origin: "USA (Kentucky)",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Bourbon", "Kentucky Straight", "Oak Aged", "American Classic"]
  },
  {
    id: "jw-red-label",
    brand: "Johnnie Walker",
    name: "Red Label",
    category: "Whisky",
    type: "Blended Scotch Whisky",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 650" },
      { size: "375 ml", price: "₹ 1,250" },
      { size: "750 ml", price: "₹ 2,400" },
      { size: "1 L", price: "₹ 3,200" }
    ],
    description: "The world's best-selling Scotch whisky. Vibrant and smoky, combining light whiskies from the Scottish East Coast with dark peat whiskies.",
    character: "Vibrant · Peaty · Bold",
    descriptors: ["Vibrant", "Peaty", "Bold"],
    collections: ["classics"],
    origin: "Scotland",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Scotch", "Smoky", "Classic"]
  },
  {
    id: "chivas-12",
    brand: "Chivas Regal",
    name: "12 Year Old Blended Scotch",
    category: "Whisky",
    type: "Blended Scotch Whisky",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "375 ml", price: "₹ 1,950" },
      { size: "750 ml", price: "₹ 3,800" },
      { size: "1 L", price: "₹ 5,100" }
    ],
    description: "Smooth, rich and generous. Speyside single malts form the heart of this classic Scotch blend with notes of wild herbs, heather, honey and orchard fruits.",
    character: "Honeyed · Orchard Fruit · Smooth",
    descriptors: ["Honeyed", "Orchard Fruit", "Smooth"],
    collections: ["premium", "classics"],
    origin: "Scotland",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Speyside", "12 Years", "Smooth"]
  },
  {
    id: "amrut-fusion",
    brand: "Amrut",
    name: "Fusion Single Malt Whisky",
    category: "Whisky",
    type: "Indian Single Malt",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "750 ml", price: "₹ 4,200" }
    ],
    description: "Multi-award-winning Indian single malt crafted using 75% unpeated Indian malted barley and 25% peated Scottish barley. Rich oak, sherry, and spice nuances.",
    character: "Complex Oak · Peat · Sherry",
    descriptors: ["Complex Oak", "Peat", "Sherry"],
    collections: ["premium", "discover-new"],
    origin: "India",
    abv: "50.0% ABV",
    availability: "Limited Stock",
    isFeatured: true,
    tags: ["Single Malt", "Award Winner", "Peated", "Craft"]
  },
  {
    id: "paul-john-nirvana",
    brand: "Paul John",
    name: "Nirvana Indian Single Malt",
    category: "Whisky",
    type: "Indian Single Malt",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "750 ml", price: "₹ 2,950" }
    ],
    description: "Unpeated Goa single malt with sweet bourbon notes, fruitcake aromas and a light malt finish. Distilled in copper pot stills near the tropical coast.",
    character: "Sweet Bourbon · Fruitcake · Light Malt",
    descriptors: ["Sweet Bourbon", "Fruitcake", "Light Malt"],
    collections: ["discover-new"],
    origin: "India",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Goa", "Single Malt", "Bourbon Cask"]
  },
  {
    id: "royal-stag-deluxe",
    brand: "Royal Stag",
    name: "Deluxe Whisky",
    category: "Whisky",
    type: "Blended Grain Whisky",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "90 ml", price: "₹ 120" },
      { size: "180 ml", price: "₹ 220" },
      { size: "375 ml", price: "₹ 420" },
      { size: "750 ml", price: "₹ 820" },
      { size: "1 L", price: "₹ 1,100" }
    ],
    description: "A blend of imported Scotch malt whiskies and select Indian grain spirits. Free from artificial flavors, delivering a smooth and consistent palate.",
    character: "Smooth · Grain & Malt Balance",
    descriptors: ["Smooth", "Grain & Malt Balance"],
    collections: ["classics"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Classic", "Popular", "Value"]
  },
  {
    id: "blenders-pride-rare",
    brand: "Blenders Pride",
    name: "Rare Premium Whisky",
    category: "Whisky",
    type: "Blended Grain Whisky",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 290" },
      { size: "375 ml", price: "₹ 560" },
      { size: "750 ml", price: "₹ 1,080" },
      { size: "1 L", price: "₹ 1,450" }
    ],
    description: "Premium Indian grain whisky blended with aged Scotch malt spirits from Chivas Brothers. Features a subtle fruity nose and clean rounded finish.",
    character: "Fruity Nose · Rounded · Clean",
    descriptors: ["Fruity Nose", "Rounded", "Clean"],
    collections: ["classics", "evening-shelf"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Premium Blend", "Popular", "Smooth"]
  },
  {
    id: "imperial-blue-deluxe",
    brand: "Imperial Blue",
    name: "Super Deluxe Whisky",
    category: "Whisky",
    type: "Blended Grain Whisky",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "90 ml", price: "₹ 100" },
      { size: "180 ml", price: "₹ 190" },
      { size: "375 ml", price: "₹ 370" },
      { size: "750 ml", price: "₹ 720" },
      { size: "1 L", price: "₹ 950" }
    ],
    description: "A harmonious combination of fine Indian grain spirits and select imported Scotch malt concentrates. Renowned for its smooth drinkability.",
    character: "Smooth · Easy Drinking",
    descriptors: ["Smooth", "Easy Drinking"],
    collections: ["classics"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Popular", "Value", "Smooth"]
  },
  {
    id: "mcdowells-no1-whisky",
    brand: "McDowell's No. 1",
    name: "Reserve Whisky",
    category: "Whisky",
    type: "Blended Whisky",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "90 ml", price: "₹ 95" },
      { size: "180 ml", price: "₹ 180" },
      { size: "375 ml", price: "₹ 350" },
      { size: "750 ml", price: "₹ 680" },
      { size: "1 L", price: "₹ 900" }
    ],
    description: "Crafted with Scotch malts and select grain spirits matured in oak casks. An enduring favorite across India for over five decades.",
    character: "Warm Oak · Classic Reserve",
    descriptors: ["Warm Oak", "Classic Reserve"],
    collections: ["classics"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Heritage", "Popular", "Classic"]
  },

  // VODKA
  {
    id: "absolut-vodka-classic",
    brand: "Absolut",
    name: "Swedish Vodka Original",
    category: "Vodka",
    type: "Grain Vodka",
    image: "https://cdn.corenexis.com/f/Ywby3AFzaBu.jpg",
    sizes: [
      { size: "375 ml", price: "₹ 1,100" },
      { size: "750 ml", price: "₹ 2,150" },
      { size: "1 L", price: "₹ 2,850" }
    ],
    description: "Produced in Åhus, Sweden using winter wheat and deep-well water. Exceptionally clean and velvety texture without added sugar.",
    character: "Velvety · Pure Winter Wheat",
    descriptors: ["Velvety", "Pure Winter Wheat"],
    collections: ["classics", "premium"],
    origin: "Sweden",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Swedish", "Pure Grain", "Classic"]
  },
  {
    id: "smirnoff-no21",
    brand: "Smirnoff",
    name: "No. 21 Triple Distilled Vodka",
    category: "Vodka",
    type: "Grain Vodka",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 320" },
      { size: "375 ml", price: "₹ 620" },
      { size: "750 ml", price: "₹ 1,190" },
      { size: "1 L", price: "₹ 1,580" }
    ],
    description: "Triple distilled and ten-times charcoal filtered for ultimate clarity and smoothness. Ideal for cocktails or neat serving.",
    character: "Crisp · Charcoal Filtered",
    descriptors: ["Crisp", "Charcoal Filtered"],
    collections: ["classics"],
    origin: "USA",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Triple Distilled", "Classic", "Cocktails"]
  },
  {
    id: "magic-moments-vodka",
    brand: "Magic Moments",
    name: "Grain Vodka Classic",
    category: "Vodka",
    type: "Grain Vodka",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 180" },
      { size: "375 ml", price: "₹ 340" },
      { size: "750 ml", price: "₹ 660" }
    ],
    description: "Distilled from finest imported grains. Smooth on the palate with zero harshness, an Indian vodka staple.",
    character: "Clean · Smooth Grain Spirit",
    descriptors: ["Clean", "Smooth Grain Spirit"],
    collections: ["classics"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Indian Favorite", "Clean", "Value"]
  },

  // RUM
  {
    id: "old-monk-xxx",
    brand: "Old Monk",
    name: "XXX Very Old Vatted Dark Rum",
    category: "Rum",
    type: "Dark Aged Rum",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 160" },
      { size: "375 ml", price: "₹ 310" },
      { size: "750 ml", price: "₹ 590" },
      { size: "1 L", price: "₹ 790" }
    ],
    description: "A legendary 7-year-old dark rum aged in oak barrels. Distinctive caramel, vanilla, and chocolate spices with a iconic rich heritage.",
    character: "Caramel · Vanilla · Aged Oak",
    descriptors: ["Caramel", "Vanilla", "Aged Oak"],
    collections: ["classics", "evening-shelf"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Legendary", "7 Years Aged", "Vanilla & Caramel", "Cult Favorite"]
  },
  {
    id: "bacardi-carta-blanca",
    brand: "Bacardi",
    name: "Carta Blanca White Rum",
    category: "Rum",
    type: "White Rum",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 280" },
      { size: "375 ml", price: "₹ 540" },
      { size: "750 ml", price: "₹ 1,050" }
    ],
    description: "Light and clean spirit crafted in white oak barrels and shaped through a secret blend of charcoal filtration for subtle floral notes.",
    character: "Subtle Floral · Light & Fresh",
    descriptors: ["Subtle Floral", "Light & Fresh"],
    collections: ["classics"],
    origin: "Puerto Rico",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["White Rum", "Mojito Standard", "Classic"]
  },
  {
    id: "bacardi-black",
    brand: "Bacardi",
    name: "Carta Negra Dark Rum",
    category: "Rum",
    type: "Dark Rum",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "375 ml", price: "₹ 580" },
      { size: "750 ml", price: "₹ 1,120" }
    ],
    description: "Medium-bodied black rum crafted in heavily charred oak barrels, shaped through secret charcoal filtration. Notes of tropical fruits and wood.",
    character: "Tropical Fruit · Heavy Charred Oak",
    descriptors: ["Tropical Fruit", "Heavy Charred Oak"],
    collections: ["evening-shelf"],
    origin: "Puerto Rico",
    abv: "40.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Dark Rum", "Tropical", "Heavy Oak"]
  },

  // GIN
  {
    id: "bombay-sapphire-gin",
    brand: "Bombay Sapphire",
    name: "London Dry Gin",
    category: "Gin",
    type: "London Dry Gin",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "375 ml", price: "₹ 1,280" },
      { size: "750 ml", price: "₹ 2,480" },
      { size: "1 L", price: "₹ 3,300" }
    ],
    description: "Infused with 10 exotic botanicals via vapour infusion. Vibrant citrus, floral notes, and crisp juniper berries in its signature translucent blue bottle.",
    character: "Vapour Infused · Crisp Juniper · Citrus",
    descriptors: ["Vapour Infused", "Crisp Juniper", "Citrus"],
    collections: ["premium", "discover-new"],
    origin: "United Kingdom",
    abv: "47.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["London Dry", "Vapour Infused", "Botanical"]
  },
  {
    id: "greater-than-gin",
    brand: "Greater Than",
    name: "Craft London Dry Gin",
    category: "Gin",
    type: "Craft Gin",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "750 ml", price: "₹ 1,450" }
    ],
    description: "Distilled in copper stills in Goa with juniper from Bulgaria and fresh coriander seeds, chamomile, lemongrass and ginger from India.",
    character: "Craft Botanical · Coriander & Lemongrass",
    descriptors: ["Craft Botanical", "Coriander & Lemongrass"],
    collections: ["discover-new"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Indian Craft", "Goa Distilled", "Fresh Botanicals"]
  },
  {
    id: "roku-japanese-gin",
    brand: "Roku",
    name: "Japanese Craft Gin",
    category: "Gin",
    type: "Craft Gin",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "700 ml", price: "₹ 3,950" }
    ],
    description: "Infused with 6 unique Japanese botanicals: Sakura flower, Sakura leaf, Yuzu peel, Sencha tea, Gyokuro tea, and Sansho pepper.",
    character: "Yuzu Peel · Sakura Blossom · Green Tea",
    descriptors: ["Yuzu Peel", "Sakura Blossom", "Green Tea"],
    collections: ["premium", "discover-new"],
    origin: "Japan",
    abv: "43.0% ABV",
    availability: "Limited Stock",
    isFeatured: false,
    tags: ["Japanese", "Botanical", "Yuzu & Sakura"]
  },

  // BRANDY
  {
    id: "mansion-house-brandy",
    brand: "Mansion House",
    name: "French Grape Brandy",
    category: "Brandy",
    type: "Grape Brandy",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 210" },
      { size: "375 ml", price: "₹ 410" },
      { size: "750 ml", price: "₹ 790" }
    ],
    description: "Aged French grape brandy blend featuring a rich mahogany amber color and warm fruit notes. Highly popular across South and East India.",
    character: "Warm Amber · Aged Grape Finish",
    descriptors: ["Warm Amber", "Aged Grape Finish"],
    collections: ["classics"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Aged Brandy", "French Grapes", "Classic"]
  },
  {
    id: "mcdowells-no1-brandy",
    brand: "McDowell's No. 1",
    name: "Vintage Brandy",
    category: "Brandy",
    type: "Grape Brandy",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "180 ml", price: "₹ 175" },
      { size: "375 ml", price: "₹ 340" },
      { size: "750 ml", price: "₹ 650" }
    ],
    description: "Blended with rich grape spirits matured in oak wood. Velvety, smooth finish with pleasant warmth.",
    character: "Velvety · Matured Grape Warmth",
    descriptors: ["Velvety", "Matured Grape Warmth"],
    collections: ["classics"],
    origin: "India",
    abv: "42.8% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Vintage", "Warm Finish", "Popular"]
  },

  // WINE
  {
    id: "sula-shiraz-cabernet",
    brand: "Sula Vineyards",
    name: "Shiraz Cabernet Red Wine",
    category: "Wine",
    type: "Still Red Wine",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "375 ml", price: "₹ 540" },
      { size: "750 ml", price: "₹ 980" }
    ],
    description: "Smooth, medium-bodied dark red wine with rich aromas of black pepper, spices and ripe berries. Matured in French oak casks.",
    character: "Black Pepper · Ripe Berries · Oak",
    descriptors: ["Black Pepper", "Ripe Berries", "Oak"],
    collections: ["wine-table"],
    origin: "India (Nashik Valley)",
    abv: "13.5% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Red Wine", "Nashik Valley", "Oak Aged"]
  },
  {
    id: "sula-sauvignon-blanc",
    brand: "Sula Vineyards",
    name: "Sauvignon Blanc White Wine",
    category: "Wine",
    type: "Still White Wine",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "375 ml", price: "₹ 520" },
      { size: "750 ml", price: "₹ 950" }
    ],
    description: "Crisp dry white wine bursting with aromas of green pepper, bell pepper, and tropical fruits. Refreshing acidity.",
    character: "Crisp · Tropical Fruit · Refreshing",
    descriptors: ["Crisp", "Tropical Fruit", "Refreshing"],
    collections: ["wine-table"],
    origin: "India (Nashik Valley)",
    abv: "12.5% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["White Wine", "Dry & Crisp", "Chilled"]
  },
  {
    id: "grover-la-reserve-red",
    brand: "Grover Zampa",
    name: "La Réserve Cabernet Shiraz",
    category: "Wine",
    type: "Reserve Red Wine",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "750 ml", price: "₹ 1,550" }
    ],
    description: "Hand-harvested grapes matured for 16 months in French oak barrels. Intense notes of dark chocolate, coffee, and cassis.",
    character: "Dark Chocolate · Cassis · French Oak",
    descriptors: ["Dark Chocolate", "Cassis", "French Oak"],
    collections: ["wine-table", "premium"],
    origin: "India (Nandi Hills)",
    abv: "14.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Reserve Red", "Award Winning", "Complex"]
  },

  // BEER
  {
    id: "kingfisher-premium",
    brand: "Kingfisher",
    name: "Premium Lager Beer",
    category: "Beer",
    type: "Lager Beer",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "330 ml", price: "₹ 110" },
      { size: "500 ml Can", price: "₹ 150" },
      { size: "650 ml Bottle", price: "₹ 190" }
    ],
    description: "India's iconic lager beer. Brewed with finest Saaz hops and malted barley for a crisp, light, refreshing golden draught flavor.",
    character: "Crisp · Golden Malt · Refreshing",
    descriptors: ["Crisp", "Golden Malt", "Refreshing"],
    collections: ["classics"],
    origin: "India",
    abv: "4.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Lager", "Refreshing", "Iconic"]
  },
  {
    id: "kingfisher-strong",
    brand: "Kingfisher",
    name: "Strong Premium Beer",
    category: "Beer",
    type: "Strong Lager",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "500 ml Can", price: "₹ 160" },
      { size: "650 ml Bottle", price: "₹ 200" }
    ],
    description: "Full-bodied strong lager brewed using malted barley and hops. Crisp bitterness balanced by malt sweetness.",
    character: "Full-bodied · Balanced Bitterness",
    descriptors: ["Full-bodied", "Balanced Bitterness"],
    collections: ["classics"],
    origin: "India",
    abv: "8.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Strong Lager", "Full Body", "Popular"]
  },
  {
    id: "bira-white-ale",
    brand: "Bira 91",
    name: "White Wheat Ale",
    category: "Beer",
    type: "Wheat Ale",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "330 ml", price: "₹ 150" },
      { size: "500 ml Can", price: "₹ 210" }
    ],
    description: "Deliciously wheat beer brewed with orange peel and coriander seeds. Mild bitterness with citrus notes.",
    character: "Orange Peel · Coriander · Smooth Wheat",
    descriptors: ["Orange Peel", "Coriander", "Smooth Wheat"],
    collections: ["discover-new"],
    origin: "India",
    abv: "4.9% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Craft Wheat Ale", "Citrus & Spice", "Smooth"]
  },
  {
    id: "tuborg-green",
    brand: "Tuborg",
    name: "Green All Malt Premium Beer",
    category: "Beer",
    type: "Pilsner Lager",
    image: "https://cdn.corenexis.com/f/OjNgV3nOAWR.jpg",
    sizes: [
      { size: "330 ml", price: "₹ 110" },
      { size: "500 ml Can", price: "₹ 150" },
      { size: "650 ml Bottle", price: "₹ 190" }
    ],
    description: "Crisp European style lager brewed with pure spring water, quality barley and select hops. Easy-drinking pull-cap bottle.",
    character: "Crisp European Lager · Pure Malt",
    descriptors: ["Crisp European Lager", "Pure Malt"],
    collections: ["classics"],
    origin: "Denmark / India",
    abv: "4.8% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Pilsner", "Pull Cap", "Smooth"]
  },

  // LIQUEURS
  {
    id: "baileys-irish-cream",
    brand: "Baileys",
    name: "Original Irish Cream Liqueur",
    category: "Liqueurs",
    type: "Cream Liqueur",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "750 ml", price: "₹ 2,650" }
    ],
    description: "Luxurious blend of aged Irish whiskey, rich dairy cream, cocoa, and heavenly vanilla notes. Serve over ice.",
    character: "Velvety Dairy Cream · Cocoa · Vanilla",
    descriptors: ["Velvety Dairy Cream", "Cocoa", "Vanilla"],
    collections: ["premium", "evening-shelf"],
    origin: "Ireland",
    abv: "17.0% ABV",
    availability: "In Stock",
    isFeatured: true,
    tags: ["Irish Cream", "Dessert Liqueur", "Velvety"]
  },
  {
    id: "jagermeister-herbal",
    brand: "Jagermeister",
    name: "Herbal Liqueur",
    category: "Liqueurs",
    type: "Digestif Liqueur",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "350 ml", price: "₹ 1,750" },
      { size: "700 ml", price: "₹ 3,250" }
    ],
    description: "Blend of 56 herbs, blossoms, roots and fruits aged in oak barrels. Serve ice-cold at -18°C.",
    character: "56 Botanicals · Herbal Digestif",
    descriptors: ["56 Botanicals", "Herbal Digestif"],
    collections: ["discover-new", "evening-shelf"],
    origin: "Germany",
    abv: "35.0% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Herbal", "Digestif", "Ice Cold"]
  },

  // READY TO DRINK
  {
    id: "breezer-cranberry",
    brand: "Breezer",
    name: "Cranberry Flavoured Rum Cooler",
    category: "Ready to Drink",
    type: "Fruit Rum Cooler",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
    sizes: [
      { size: "275 ml", price: "₹ 130" }
    ],
    description: "A sparkling blend of Bacardi rum, fruit juice and sparkling water. Refreshing cranberry flavor.",
    character: "Sparkling · Fruity · Low ABV",
    descriptors: ["Sparkling", "Fruity", "Low ABV"],
    collections: ["classics"],
    origin: "India",
    abv: "4.8% ABV",
    availability: "In Stock",
    isFeatured: false,
    tags: ["Cooler", "Cranberry", "Low ABV"]
  }
];

/**
 * Utility functions for numeric price extraction and bounds calculation
 */
export const extractNumericPrice = (priceStr?: string): number => {
  if (!priceStr) return 0;
  const digits = priceStr.replace(/[^0-9]/g, '');
  return digits ? parseInt(digits, 10) : 0;
};

export const getProductMinMaxPrice = (product: Product): { min: number; max: number } => {
  const numericPrices = product.sizes
    .map(s => extractNumericPrice(s.price))
    .filter(p => p > 0);

  if (numericPrices.length === 0) return { min: 0, max: 0 };
  return {
    min: Math.min(...numericPrices),
    max: Math.max(...numericPrices),
  };
};

export const CATALOGUE_PRICE_BOUNDS = (() => {
  let min = Infinity;
  let max = 0;
  PRODUCTS.forEach(p => {
    p.sizes.forEach(s => {
      const num = extractNumericPrice(s.price);
      if (num > 0) {
        if (num < min) min = num;
        if (num > max) max = num;
      }
    });
  });
  return {
    min: min === Infinity ? 0 : min,
    max: max === 0 ? 5000 : max,
  };
})();
