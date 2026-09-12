export type ProductCategory =
  | "Shoes"
  | "Bags"
  | "Watches"
  | "Accessories";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  details: string[];
  available: boolean;
}