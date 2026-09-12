import Link from "next/link";

import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function FeaturedCollection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            AUREN / COLLECTION
          </p>

          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Selected for you.
          </h2>
        </div>

        <Link
          href="/shop"
          className="hidden text-sm font-medium underline underline-offset-4 sm:block"
        >
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          href="/shop"
          className="text-sm font-medium underline underline-offset-4"
        >
          View all collection
        </Link>
      </div>
    </section>
  );
}