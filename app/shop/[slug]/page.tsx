import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hi AUREN, I'd like to order the ${product.name} for ₦${product.price.toLocaleString()}.`
  );

  return (
    <main>
      <section className="px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/shop"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            ← Back to shop
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden bg-[var(--surface)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                {product.category}
              </p>

              <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 text-2xl font-medium">
                ₦{product.price.toLocaleString()}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm">
                <span
                  className={`h-2 w-2 rounded-full ${
                    product.available ? "bg-green-600" : "bg-red-500"
                  }`}
                />
                <span className="text-[var(--muted)]">
                  {product.available ? "In stock" : "Currently unavailable"}
                </span>
              </div>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {product.description}
              </p>

              {product.available && (
                <a
                  href={`https://wa.me/2348147436789?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-medium text-white transition hover:opacity-85"
                >
                  Order via WhatsApp
                </a>
              )}

              <div className="mt-8 border-y border-[var(--border)]">
                <div className="border-b border-[var(--border)] py-5">
                  <h2 className="text-sm font-medium">Product details</h2>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                    {product.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="py-5">
                  <h2 className="text-sm font-medium">Delivery</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Nationwide delivery available across Nigeria. Delivery
                    details will be confirmed when placing your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                You may also like
              </p>

              <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                More from {product.category}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}