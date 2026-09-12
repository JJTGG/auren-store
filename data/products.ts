import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "auren-001",
    slug: "nova-low-sneakers",
    name: "Nova Low Sneakers",
    category: "Shoes",
    price: 68500,
    image: "/images/products/nova-low.jpg",
    description:
      "A clean everyday sneaker designed to move easily between casual and refined looks.",
    details: [
      "Low-profile silhouette",
      "Cushioned footbed",
      "Everyday wear",
      "Nationwide delivery available",
    ],
    available: true,
  },
  {
    id: "auren-002",
    slug: "frame-leather-bag",
    name: "Frame Leather Bag",
    category: "Bags",
    price: 72000,
    image: "/images/products/frame-bag.jpg",
    description:
      "A structured everyday bag with a minimal silhouette and practical interior.",
    details: [
      "Structured design",
      "Adjustable strap",
      "Everyday carry",
      "Nationwide delivery available",
    ],
    available: true,
  },
  {
    id: "auren-003",
    slug: "axis-minimal-watch",
    name: "Axis Minimal Watch",
    category: "Watches",
    price: 55000,
    image: "/images/products/axis-watch.jpg",
    description:
      "A restrained timepiece built around a clean dial and versatile everyday styling.",
    details: [
      "Minimal dial",
      "Adjustable strap",
      "Everyday wear",
      "Nationwide delivery available",
    ],
    available: true,
  },
  {
    id: "auren-004",
    slug: "line-statement-sunglasses",
    name: "Line Statement Sunglasses",
    category: "Accessories",
    price: 28500,
    image: "/images/products/line-sunglasses.jpg",
    description:
      "Sharp, understated sunglasses designed to finish an everyday look.",
    details: [
      "Classic frame",
      "Lightweight construction",
      "Unisex styling",
      "Nationwide delivery available",
    ],
    available: true,
  },
];

export const categories = [
  "Shoes",
  "Bags",
  "Watches",
  "Accessories",
] as const;