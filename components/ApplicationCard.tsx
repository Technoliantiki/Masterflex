import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Application } from "@/data/applications";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/utils";

export function ApplicationCard({ item, locale }: { item: Application; locale: Locale }) {
  return (
    <Link href={`/${locale}/applications/${item.slug}`} className="group border-t border-white/15 py-7 transition hover:border-signal">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold">{t(item.title, locale)}</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">{t(item.need, locale)}</p>
        </div>
        <ArrowRight className="mt-1 shrink-0 text-white/25 transition group-hover:translate-x-1 group-hover:text-signal" />
      </div>
    </Link>
  );
}
