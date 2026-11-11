import type { Metadata } from "next";

export const SITE = {
  name: "Cribs",
  url: "https://www.cribshq.app",
  title: "Cribs | The smarter way to rent in Lagos",
  description:
    "Cribs connects tenants and landlords directly. Verified homes in Lagos, direct chat with landlords, and no agent fees.",
  ogImage: "/og.jpg",
};

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_NG",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Cribs" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SITE.ogImage],
    },
  };
}
