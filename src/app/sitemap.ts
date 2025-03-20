import { MetadataRoute } from "next";

export const dynamic = "force-static"; // Ensures it's statically generated

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/landingpage",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/faqs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.2,
    },
    {
      url: "https://nirvanaeliteresearchsolutions.vercel.app/review",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.1,
    },
  ];
}
