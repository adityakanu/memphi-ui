import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Comic_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Memphi UI - Memphis Design meets NeoBrutalism",
    template: "%s | Memphi UI"
  },
  description: "A React component library inspired by Memphis design and NeoBrutalism. Bold, playful, and accessible components for modern web applications.",
  keywords: [
    "React",
    "TypeScript",
    "UI Components",
    "Memphis Design",
    "NeoBrutalism",
    "Component Library",
    "Design System",
    "Tailwind CSS",
    "shadcn/ui",
    "Accessibility",
    "Web Components"
  ],
  authors: [
    {
      name: "Aditya Kanu",
      url: "https://adityakanu.com",
    },
  ],
  creator: "Aditya Kanu",
  publisher: "Aditya Kanu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://memphi.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memphi.dev",
    title: "Memphi UI - Memphis Design meets NeoBrutalism",
    description: "A React component library inspired by Memphis design and NeoBrutalism. Bold, playful, and accessible components for modern web applications.",
    siteName: "Memphi UI",
    images: [
      {
        url: "/memphi.webp",
        width: 1200,
        height: 630,
        alt: "Memphi UI - Memphis Design meets NeoBrutalism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memphi UI - Memphis Design meets NeoBrutalism",
    description: "A React component library inspired by Memphis design and NeoBrutalism. Bold, playful, and accessible components for modern web applications.",
    creator: "@adityakanu",
    images: ["/memphi.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Memphi UI",
  "description": "A React component library inspired by Memphis design and NeoBrutalism. Bold, playful, and accessible components for modern web applications.",
  "url": "https://memphi.dev",
  "author": {
    "@type": "Person",
    "name": "Aditya Kanu",
    "url": "https://adityakanu.com"
  },
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "programmingLanguage": ["TypeScript", "React", "JavaScript"],
  "keywords": "React, TypeScript, UI Components, Memphis Design, NeoBrutalism, Component Library",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "sameAs": [
    "https://github.com/adityakanu/memphi-ui"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comicNeue.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
