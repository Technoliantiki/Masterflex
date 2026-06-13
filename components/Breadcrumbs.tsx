import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-white/35">
      <Link href={`/${locale}`}>Masterflex</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span className="text-white/65">{item.label}</span>}
        </span>
      ))}
    </div>
  );
}
