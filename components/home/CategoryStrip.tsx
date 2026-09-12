import Link from "next/link";

const categories = [
  "Shoes",
  "Bags",
  "Watches",
  "Accessories",
];

export default function CategoryStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/shop?category=${category.toLowerCase()}`}
            className="border-border px-5 py-6 text-center text-sm font-medium transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-foreground"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}