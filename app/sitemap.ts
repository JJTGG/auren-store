import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const baseUrl = "https://auren-store-delta.vercel.app";

// These are the latest relevant source-change timestamps for the current
// audited version of each route, recorded in UTC.
//
// Update the relevant timestamp when route content or shared components
// change. Do not use new Date() here: doing so would make every URL appear
// modified whenever the sitemap is generated.

const lastModified = {
  home: new Date("2026-10-19T09:02:38.000Z"),
  sharedPages: new Date("2026-10-19T08:55:13.000Z"),
  productPages: new Date("2026-10-19T08:59:13.000Z"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: lastModified.productPages,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: lastModified.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: lastModified.sharedPages,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified.sharedPages,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified.sharedPages,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...productPages,
  ];
}