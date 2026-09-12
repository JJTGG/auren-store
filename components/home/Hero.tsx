import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl md:grid-cols-2">
        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              AUREN / THE NEW EVERYDAY
            </p>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The New
              <br />
              Everyday.
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-muted sm:text-lg">
              Thoughtfully selected pieces for every part of your day.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-4"
              >
                Shop Collection
              </Link>

              <Link
                href="/shop"
                className="border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-4"
              >
                Explore Categories
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] md:min-h-0">
          <Image
            src="https://res.cloudinary.com/kcxmd95c/image/upload/v1789233243/1789233106660.png"
            alt="AUREN curated everyday accessories"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}