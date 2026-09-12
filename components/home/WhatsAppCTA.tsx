import Link from "next/link";

const whatsappUrl =
  "https://wa.me/2340000000000?text=Hi%20AUREN%2C%20I%27d%20like%20to%20shop.";

export default function WhatsAppCTA() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">
          READY WHEN YOU ARE
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Found something you like?
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 opacity-70">
          Chat with AUREN on WhatsApp to ask about a piece or place your order.
        </p>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-4 focus:ring-offset-foreground"
        >
          Chat on WhatsApp
        </Link>
      </div>
    </section>
  );
}