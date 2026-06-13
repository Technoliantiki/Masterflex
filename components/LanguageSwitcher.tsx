"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { alternateLocale } from "@/lib/i18n";
import { replaceLocale } from "@/lib/utils";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = alternateLocale(locale);

  return (
    <div className="flex items-center gap-1 text-[11px] font-bold tracking-widest">
      <span className="text-signal">{locale.toUpperCase()}</span>
      <span className="text-white/25">/</span>
      <Link className="text-white/60 transition hover:text-signal" href={replaceLocale(pathname, other)}>
        {other.toUpperCase()}
      </Link>
    </div>
  );
}
