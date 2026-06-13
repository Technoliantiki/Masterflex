import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/data/resources";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/utils";

export function TechnicalResourceCard({ resource, locale }: { resource: Resource; locale: Locale }) {
  return (
    <Link href={`/${locale}/technical-resources/${resource.slug}`} className="group panel p-6 transition hover:border-signal/50">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-signal">
        {resource.category}<ArrowUpRight size={16} />
      </div>
      <h3 className="mt-9 font-display text-xl font-semibold">{t(resource.title, locale)}</h3>
      <p className="mt-3 text-sm leading-6 text-white/45">{t(resource.summary, locale)}</p>
    </Link>
  );
}
