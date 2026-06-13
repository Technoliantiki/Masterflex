import type { Metadata } from "next";
import type { Locale } from "./i18n";

const siteName = "Masterflex";

export function createMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = "",
): Metadata {
  const prefix = locale === "en" ? "en" : "el";
  return {
    title,
    description,
    keywords: [
      "Masterflex abrasives",
      "industrial abrasives",
      "flap discs",
      "sanding belts",
      "surface preparation",
      "abrasive distributor",
    ],
    alternates: {
      canonical: `/${prefix}${path}`,
      languages: {
        en: `/en${path}`,
        el: `/el${path}`,
      },
    },
    openGraph: {
      title,
      description,
      siteName,
      type: "website",
      locale: locale === "en" ? "en_GB" : "el_GR",
    },
  };
}
