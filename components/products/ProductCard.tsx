import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-4"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="pt-4">
        <p className="text-xs uppercase tracking-[0.15em] text-muted">
          {product.category}
        </p>

        <h3 className="mt-1 text-sm font-medium">{product.name}</h3>

        <p className="mt-2 text-sm text-muted">
          ₦{product.price.toLocaleString("en-NG")}
        </p>
      </div>
    </Link>
  );
}