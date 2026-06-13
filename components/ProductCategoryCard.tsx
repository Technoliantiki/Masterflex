import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/categories";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/utils";

export function ProductCategoryCard({ category, locale }: { category: Category; locale: Locale }) {
  return (
    <Link href={`/${locale}/products/${category.slug}`} className="group panel relative block overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-signal">
      <div className="flex items-start justify-between">
        <span className="font-display text-xs font-bold tracking-[0.2em]" style={{ color: category.accent }}>{category.code}</span>
        <ArrowUpRight className="text-white/25 transition group-hover:text-signal" size={20} />
      </div>
      <h3 className="mt-12 font-display text-2xl font-semibold tracking-tight">{t(category.title, locale)}</h3>
      <p className="mt-4 text-sm leading-7 text-white/50">{t(category.description, locale)}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {category.materials.slice(0, 3).map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
    </Link>
  );
}
