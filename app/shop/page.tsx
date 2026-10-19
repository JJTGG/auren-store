
import ShopCatalog from "@/components/products/ShopCatalog";
import type { ProductCategory } from "@/types/product";

const categories: ProductCategory[] = [
  "Shoes",
  "Bags",
  "Watches",
  "Accessories",
];

type ShopSearchParams = {
  category?: string | string[];
};

interface ShopPageProps {
  searchParams: Promise<ShopSearchParams>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const rawCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  const initialCategory =
    categories.find(
      (category) =>
        category.toLowerCase() === rawCategory?.trim().toLowerCase()
    ) ?? "All";

  return <ShopCatalog initialCategory={initialCategory} />;
}
