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
    "Discover thoughtfully selected shoes, bags, watches, and accessories from AUREN. Nationwide delivery across Nigeria.",

  applicationName: "AUREN",

  keywords: [
    "AUREN",
    "fashion store Nigeria",
    "shoes Nigeria",
    "bags Nigeria",
    "watches Nigeria",
    "fashion accessories Nigeria",
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
      "Thoughtfully selected shoes, bags, watches, and accessories. Nationwide delivery across Nigeria.",
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
      "Thoughtfully selected shoes, bags, watches, and accessories. Nationwide delivery across Nigeria.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}