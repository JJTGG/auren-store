import Link from "next/link";

import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function TrendingProducts() {
  const trendingProducts = [...products].reverse();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            AUREN / NOW
          </p>

          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Currently in rotation.
          </h2>
        </div>

        <Link
          href="/shop"
          className="hidden text-sm font-medium underline underline-offset-4 sm:block"
        >
          Shop everything
        </Link>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-4">
        {trendingProducts.map((product) => (
          <div key={product.id} className="min-w-[72%] sm:min-w-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Link
          href="/shop"
          className="text-sm font-medium underline underline-offset-4"
        >
          Shop everything
        </Link>
      </div>
    </section>
  );
}