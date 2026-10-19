import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[55vh] px-5 py-20 sm:px-8 sm:py-28">
      <section className="mx-auto flex max-w-3xl flex-col items-start">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
          AUREN / 404
        </p>

        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
          This page isn&apos;t in the collection.
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          The address may be incorrect, or the page may not exist in this
          storefront demonstration. You can return home or explore the
          catalogue instead.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
          >
            Return home
          </Link>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium transition-colors hover:border-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-4"
          >
            Browse catalogue
          </Link>
        </div>

        <p className="mt-8 max-w-xl text-xs leading-5 text-[var(--muted)]">
          AUREN is a fictional portfolio storefront. This page does not
          represent an operating retailer.
        </p>
      </section>
    </main>
  );
}