import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE } from "@/lib/seo";
import "./globals.css";

const jakarta = localFont({
  src: [
    { path: "./fonts/Jakarta-400.woff2", weight: "400" },
    { path: "./fonts/Jakarta-500.woff2", weight: "500" },
    { path: "./fonts/Jakarta-600.woff2", weight: "600" },
    { path: "./fonts/Jakarta-700.woff2", weight: "700" },
    { path: "./fonts/Jakarta-800.woff2", weight: "800" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const anton = localFont({
  src: "./fonts/Anton-400.woff2",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | Cribs" },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Cribs",
    "rent in Lagos",
    "houses for rent Lagos",
    "apartments for rent Lagos",
    "no agent fees",
    "verified listings",
    "landlords Lagos",
    "property rental Nigeria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_NG",
    url: "/",
    title: SITE.title,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Cribs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
  appleWebApp: { title: SITE.name, statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.85,
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon-512.png`,
      description: SITE.description,
      areaServed: "Lagos, Nigeria",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#org` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${anton.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
