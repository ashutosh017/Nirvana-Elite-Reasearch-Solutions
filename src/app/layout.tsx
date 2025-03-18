import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirvana Elite Research Solution",
  description:
    "Providing top-tier thesis, viva, and project assistance for PG students. Expert guidance, research support, and academic excellence in one place.",
  keywords: [
    "thesis help",
    "PG research support",
    "viva preparation",
    "academic projects",
    "Nirvana Elite",
    "research solutions",
    "dissertation assistance",
    "academic consulting",
  ],
  alternates:{
    canonical:"https://nirvanaeliteresearchsolutions.vercel.app/"
  },
  authors: [{ name: "Nirvana Elite Research Solution" }],
  openGraph: {
    title: "Nirvana Elite Research Solution",
    description:
      "Premium thesis, viva, and project assistance for postgraduate students. Elevate your academic journey with expert support.",
    url: "https://nirvanaeliteresearchsolutions.vercel.app/", // Replace with your actual website URL
    siteName: "Nirvana Elite Research Solution",
    images: [
      {
        url: "/images/og.png", // Replace with your actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Nirvana Elite Research Solution",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvana Elite Research Solution",
    description:
      "Expert guidance for PG students in thesis, viva, and academic projects.",
    images: ["/images/og.png"], // Replace with your actual Twitter card image URL
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script 
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nirvana Elite Research Solution",
              "url": "https://nirvanaeliteresearchsolutions.vercel.app/",
              "logo": "https://nirvanaeliteresearchsolutions.vercel.app/images/logo.png",
              "description": "Helping PG students with their theses, viva, projects, and research solutions.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9528775789",
                "contactType": "customer support",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
