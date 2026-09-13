import type { Product } from "@/types/product";

export const products: Product[] = [
  // SHOES
  {
    id: "shoe-001",
    slug: "nova-low-sneakers",
    name: "Nova Low Sneakers",
    category: "Shoes",
    price: 68500,
    image: "/images/products/nova-low.jpg",
    description:
      "A clean everyday sneaker designed for effortless styling and all-day comfort.",
    details: ["Low-top silhouette", "Cushioned sole", "Everyday wear"],
    available: true,
  },
  {
    id: "shoe-002",
    slug: "axis-court-sneakers",
    name: "Axis Court Sneakers",
    category: "Shoes",
    price: 72000,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789240189/images_5.jpg",
    description:
      "A minimal court-inspired sneaker with a refined finish and versatile profile.",
    details: ["Court-inspired design", "Padded footbed", "Rubber outsole"],
    available: true,
  },
  {
    id: "shoe-003",
    slug: "form-runner",
    name: "Form Runner",
    category: "Shoes",
    price: 75500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789240387/images.jpg",
    description:
      "Lightweight everyday runners built for movement without sacrificing style.",
    details: ["Lightweight construction", "Breathable upper", "Flexible outsole"],
    available: true,
  },
  {
    id: "shoe-004",
    slug: "mono-slip-ons",
    name: "Mono Slip-Ons",
    category: "Shoes",
    price: 48500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789240398/mens_slip_on_sneaker_white_01_2000x.jpg",
    description:
      "An understated slip-on silhouette made for quick, comfortable everyday dressing.",
    details: ["Slip-on design", "Soft interior", "Flexible sole"],
    available: true,
  },
  {
    id: "shoe-005",
    slug: "crest-leather-loafers",
    name: "Crest Leather Loafers",
    category: "Shoes",
    price: 89500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789240410/RelaxedLoaferTripleBlack_2copy.jpg",
    description:
      "A refined leather loafer that moves easily between relaxed and polished looks.",
    details: ["Leather upper", "Classic loafer profile", "Cushioned insole"],
    available: true,
  },
  {
    id: "shoe-006",
    slug: "terra-casual-shoes",
    name: "Terra Casual Shoes",
    category: "Shoes",
    price: 63500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789240425/images_1.jpg",
    description:
      "A versatile casual silhouette with a balanced shape and understated finish.",
    details: ["Everyday silhouette", "Comfort footbed", "Durable outsole"],
    available: true,
  },

  // BAGS
  {
    id: "bag-001",
    slug: "frame-leather-bag",
    name: "Frame Leather Bag",
    category: "Bags",
    price: 72000,
    image: "/images/products/frame-bag.jpg",
    description:
      "A structured everyday bag with a clean profile and practical interior.",
    details: ["Structured shape", "Interior compartment", "Adjustable strap"],
    available: true,
  },
  {
    id: "bag-002",
    slug: "muse-shoulder-bag",
    name: "Muse Shoulder Bag",
    category: "Bags",
    price: 64500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789242102/1.jpg",
    description:
      "A compact shoulder bag designed to complement both casual and elevated outfits.",
    details: ["Compact profile", "Shoulder strap", "Secure closure"],
    available: true,
  },
  {
    id: "bag-003",
    slug: "arc-tote",
    name: "Arc Tote",
    category: "Bags",
    price: 78500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789242113/images_2.jpg",
    description:
      "A spacious tote with a structured silhouette for everyday essentials.",
    details: ["Roomy interior", "Structured handles", "Everyday carry"],
    available: true,
  },
  {
    id: "bag-004",
    slug: "line-crossbody",
    name: "Line Crossbody",
    category: "Bags",
    price: 58500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789242125/1674851791-0400018020728-taupebrass-1674851767.jpg",
    description:
      "A streamlined crossbody built for lightweight everyday carrying.",
    details: ["Crossbody strap", "Compact interior", "Minimal hardware"],
    available: true,
  },
  {
    id: "bag-005",
    slug: "frame-mini-bag",
    name: "Frame Mini Bag",
    category: "Bags",
    price: 52500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789242137/Minimalist-Soft-Leather-Box-Bag-for-Women-Adjustable-Crossbody-Shoulder-Purse-Multi-Compartment-Fashion-Daily-Accessory.jpg",
    description:
      "A smaller take on the structured Frame silhouette for essentials on the go.",
    details: ["Mini profile", "Adjustable strap", "Secure closure"],
    available: true,
  },
  {
    id: "bag-006",
    slug: "atlas-weekender",
    name: "Atlas Weekender",
    category: "Bags",
    price: 98500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789242148/travel-bag-banner-with-empty-space-without-text-beige-background-holiday-banner-poster-background_653347-8296.jpg",
    description:
      "A spacious weekender designed for short trips and effortless everyday travel.",
    details: ["Large main compartment", "Carry handles", "Travel-ready design"],
    available: true,
  },

  // WATCHES
  {
    id: "watch-001",
    slug: "axis-minimal-watch",
    name: "Axis Minimal Watch",
    category: "Watches",
    price: 55000,
    image: "/images/products/axis-watch.jpg",
    description:
      "A minimal timepiece with a clean dial designed for everyday wear.",
    details: ["Minimal dial", "Adjustable strap", "Everyday wear"],
    available: true,
  },
  {
    id: "watch-002",
    slug: "meridian-classic-watch",
    name: "Meridian Classic Watch",
    category: "Watches",
    price: 68500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789259921/1_1.jpg",
    description:
      "A classic watch profile with understated detailing and a refined finish.",
    details: ["Classic dial", "Adjustable strap", "Refined finish"],
    available: true,
  },
  {
    id: "watch-003",
    slug: "arc-chronograph",
    name: "Arc Chronograph",
    category: "Watches",
    price: 82000,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789259929/2.jpg",
    description:
      "A contemporary chronograph-inspired watch with a confident everyday profile.",
    details: ["Chronograph-inspired dial", "Metal case", "Adjustable strap"],
    available: true,
  },
  {
    id: "watch-004",
    slug: "mono-square-watch",
    name: "Mono Square Watch",
    category: "Watches",
    price: 59500,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789259936/41UraGszQLL._AC_.jpg",
    description:
      "A modern square watch with a clean geometric profile.",
    details: ["Square case", "Minimal markers", "Adjustable strap"],
    available: true,
  },
  {
    id: "watch-005",
    slug: "crest-automatic-watch",
    name: "Crest Automatic Watch",
    category: "Watches",
    price: 115000,
    image:
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789259943/714qayo2o-L._AC_UY1000_.jpg",
    description:
      "A more elevated timepiece combining classic proportions with modern detailing.",
    details: ["Automatic-inspired design", "Metal case", "Premium profile"],
    available: true,
  },

  // ACCESSORIES
  {
    id: "accessory-001",
    slug: "line-statement-sunglasses",
    name: "Line Statement Sunglasses",
    category: "Accessories",
    price: 28500,
    image: "/images/products/line-sunglasses.jpg",
    description:
      "A bold but balanced frame designed to finish everyday looks.",
    details: ["Statement frame", "UV protection", "Lightweight design"],
    available: true,
  },
  {
    id: "accessory-002",
    slug: "frame-leather-wallet",
    name: "Frame Leather Wallet",
    category: "Accessories",
    price: 24500,
    image: "/images/products/frame-wallet.jpg",
    description:
      "A compact leather wallet designed to keep everyday essentials organized.",
    details: ["Compact profile", "Multiple card slots", "Slim construction"],
    available: true,
  },
  {
    id: "accessory-003",
    slug: "axis-card-holder",
    name: "Axis Card Holder",
    category: "Accessories",
    price: 18500,
    image: "/images/products/axis-card-holder.jpg",
    description:
      "A slim card holder for carrying the essentials without unnecessary bulk.",
    details: ["Slim profile", "Multiple card slots", "Easy carry"],
    available: true,
  },
  {
    id: "accessory-004",
    slug: "arc-metal-sunglasses",
    name: "Arc Metal Sunglasses",
    category: "Accessories",
    price: 32500,
    image: "/images/products/arc-sunglasses.jpg",
    description:
      "A lightweight metal frame with a clean, contemporary silhouette.",
    details: ["Metal frame", "UV protection", "Lightweight design"],
    available: true,
  },
  {
    id: "accessory-005",
    slug: "mono-leather-belt",
    name: "Mono Leather Belt",
    category: "Accessories",
    price: 27500,
    image: "/images/products/mono-belt.jpg",
    description:
      "A clean leather belt designed to work effortlessly across everyday outfits.",
    details: ["Leather construction", "Minimal buckle", "Adjustable fit"],
    available: true,
  },
];