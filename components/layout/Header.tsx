"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.12em]"
          aria-label="AUREN home"
        >
          AUREN
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/2348147436789"
          target="_blank"
          rel="noreferrer"
          className="hidden bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-4 sm:block"
        >
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center md:hidden focus:outline-none focus:ring-2 focus:ring-foreground"
        >
          <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border px-5 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/2348147436789"
              target="_blank"
              rel="noreferrer"
              className="bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            >
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}