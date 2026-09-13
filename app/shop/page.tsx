"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types/product";

const categories: ("All" | ProductCategory)[] = [
  "All",
  "Shoes",
  "Bags",
  "Watches",
  "Accessories",
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"All" | ProductCategory>("All");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen">
      <section className="border-b border-[var(--border)] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            The Collection
          </p>

          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
            Shop AUREN
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Explore our curated selection of everyday pieces, from footwear
            and bags to watches and accessories.
          </p>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => {
                const active = category === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                      active
                        ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                        : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--foreground)]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <label className="relative block w-full lg:max-w-xs">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-[var(--border)] bg-transparent px-5 py-3 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center border border-[var(--border)] px-6 text-center">
              <h2 className="font-serif text-2xl">Nothing found</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
                We couldn&apos;t find anything matching your search. Try
                another product or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 border-b border-[var(--foreground)] pb-1 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}