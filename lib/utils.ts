import type { Locale } from "./i18n";

export type Localized = { en: string; el: string };

export function t(value: Localized, locale: Locale) {
  return value[locale];
}

export function replaceLocale(pathname: string, locale: Locale) {
  const parts = pathname.split("/");
  parts[1] = locale;
  return parts.join("/") || `/${locale}`;
}
