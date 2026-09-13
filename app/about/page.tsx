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
            AUREN is a curated fashion store built around pieces that are easy
            to wear, easy to pair, and made to fit naturally into everyday
            life.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              The idea
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Less noise. Better choices.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            <p>
              We believe getting dressed does not need to be complicated.
              A good wardrobe starts with pieces that work beyond a single
              occasion.
            </p>

            <p>
              That is why AUREN focuses on a considered selection of shoes,
              bags, watches, and accessories rather than an endless catalogue.
            </p>

            <p>
              From everyday essentials to pieces that make a little more
              statement, everything is selected with versatility and personal
              style in mind.
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
                A focused collection instead of endless choices.
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-5">
              <h2 className="font-serif text-2xl">Everyday</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Pieces designed to work naturally with your wardrobe.
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-5">
              <h2 className="font-serif text-2xl">Nigeria-wide</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Simple ordering with delivery available across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Find your next everyday piece.
          </h2>

          <Link
            href="/shop"
            className="mt-7 inline-flex rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85"
          >
            Shop the collection
          </Link>
        </div>
      </section>
    </main>
  );
}