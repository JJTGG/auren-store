import Link from "next/link";

const shopLinks = [
  { label: "Shoes", href: "/shop?category=shoes" },
  { label: "Bags", href: "/shop?category=bags" },
  { label: "Watches", href: "/shop?category=watches" },
  { label: "Accessories", href: "/shop?category=accessories" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-display text-2xl tracking-wide"
            >
              AUREN
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Thoughtfully selected pieces for every part of your day.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
              Shop
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              {shopLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
              Company
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
              Social
            </h2>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="#"
                className="w-fit text-sm text-muted transition-colors hover:text-foreground"
              >
                Instagram
              </Link>

              <Link
                href="#"
                className="w-fit text-sm text-muted transition-colors hover:text-foreground"
              >
                TikTok
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-xs text-muted">
          <p>© 2026 AUREN. All rights reserved.</p>
          <p className="mt-1">A fictional concept by TGG HUB.</p>
        </div>
      </div>
    </footer>
  );
}