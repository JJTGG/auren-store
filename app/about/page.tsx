import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            About AUREN
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            Everyday pieces, chosen with intention.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            AUREN is a fictional fashion and lifestyle storefront experiment
            built around the idea of The New Everyday. It demonstrates how
            a curated catalogue, product detail pages and WhatsApp-first
            enquiries can fit together in a branded shopping experience.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Product names, descriptions, images and prices are demonstration
            content. AUREN is not an operating retailer, and this site does
            not verify stock or provide order fulfilment or delivery.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              The concept
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Less noise. Better choices.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            <p>
              The visual direction explores a focused catalogue of everyday
              fashion and lifestyle pieces without overwhelming visitors
              with unnecessary choices.
            </p>

            <p>
              Shoes, bags, watches and accessories provide the example
              categories for exploring navigation, search and product
              discovery.
            </p>

            <p>
              The project is a web development demonstration. Its catalogue
              is illustrative rather than a statement of actual products
              available for purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="border-t border-[var(--border)] pt-5">
              <h2 className="font-serif text-2xl">Curated</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                A sample collection designed to demonstrate product
                presentation and catalogue browsing.
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-5">
              <h2 className="font-serif text-2xl">Everyday</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                A visual direction built around versatile everyday pieces
                and a considered shopping experience.
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-5">
              <h2 className="font-serif text-2xl">WhatsApp flow</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                A prefilled enquiry link demonstrates one possible
                ordering interaction without processing an order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Explore the storefront concept.
          </h2>

          <Link
            href="/shop"
            className="mt-7 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
          >
            Explore demo catalogue
          </Link>
        </div>
      </section>
    </main>
  );
}