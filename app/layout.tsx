import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auren-store-delta.vercel.app"),

  title: {
    default: "AUREN — The New Everyday",
    template: "%s — AUREN",
  },

  description:
    "Explore AUREN, a fictional fashion and lifestyle storefront experiment demonstrating product discovery and WhatsApp-first enquiries.",

  applicationName: "AUREN",

  keywords: [
    "AUREN",
    "fashion storefront demo",
    "ecommerce portfolio project",
    "WhatsApp ordering demo",
    "product catalogue experiment",
  ],

  authors: [{ name: "AUREN" }],

  creator: "AUREN",
  publisher: "AUREN",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "AUREN",
    title: "AUREN — The New Everyday",
    description:
      "A fictional fashion storefront experiment exploring product presentation, discovery and WhatsApp-first enquiries.",
    url: "https://auren-store-delta.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/kcxmd95c/image/upload/v1789233243/1789233106660.png",
        width: 1200,
        height: 630,
        alt: "AUREN — The New Everyday",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AUREN — The New Everyday",
    description:
      "A fictional fashion storefront experiment exploring product presentation and WhatsApp-first enquiries.",
    images: [
      "https://res.cloudinary.com/kcxmd95c/image/upload/v1789233243/1789233106660.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />

        <aside
          aria-label="Demonstration notice"
          className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-center text-xs leading-5 text-[var(--muted)] sm:px-8 sm:text-sm"
        >
          <strong className="font-semibold text-[var(--foreground)]">
            Portfolio demo:
          </strong>{" "}
          AUREN is a fictional storefront. Product information and prices are
          illustrative. This demo does not verify stock, process orders, or
          provide delivery services. WhatsApp links demonstrate an enquiry
          flow only.
        </aside>

        {children}

        <Footer />
      </body>
    </html>
  );
}