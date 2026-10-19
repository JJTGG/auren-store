import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const description = `${product.description} This is an illustrative storefront listing; price, availability and delivery are unverified.`;

  const title = `${product.name} — AUREN`;

  return {
    title: product.name,
    description,

    alternates: {
      canonical: `/shop/${product.slug}`,
    },

    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: "AUREN",
      title,
      description,
      url: `/shop/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
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

  const formattedPrice = product.price.toLocaleString("en-NG");

  const whatsappMessage = encodeURIComponent(
    `Hi AUREN, I'm testing the AUREN storefront demo and would like to enquire about the ${product.name}. I understand the displayed price of NGN ${formattedPrice} is illustrative and availability and delivery are not verified.`
  );

  return (
    <main>
      <section className="px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/shop"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
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

              <div className="mt-5">
                <p className="text-2xl font-medium">
                  ₦{formattedPrice}
                </p>

                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  Illustrative demo price — not a verified retail offer.
                </p>
              </div>

              <div className="mt-5 border-l-2 border-[var(--border)] pl-4">
                <p className="text-sm font-medium">
                  Demonstration listing
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  This is not live inventory. Actual product availability
                  has not been verified.
                </p>
              </div>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {product.description}
              </p>

              {product.available && (
                <a
                  href={`https://wa.me/2348147436789?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-medium text-white transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
                >
                  Try WhatsApp enquiry demo
                </a>
              )}

              <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                Opening WhatsApp demonstrates a prefilled enquiry only.
                It does not create or confirm an order.
              </p>

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
                    This demo does not provide delivery services or confirm
                    delivery coverage, fees, or timelines. Those details
                    would need to be confirmed by an actual retailer.
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