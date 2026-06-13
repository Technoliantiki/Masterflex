import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Product } from "@/data/products";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/utils";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const en = locale === "en";
  return (
    <article className="panel flex h-full flex-col overflow-hidden">
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-softyellow/60 via-chalk to-white">
        <div className="h-28 w-28 rounded-full border-[18px] border-carbon/10 shadow-[0_0_40px_rgba(217,169,0,.12)]" />
        <div className="absolute left-5 top-5 text-[10px] font-bold uppercase tracking-widest text-signal">{product.group}</div>
        <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-widest text-white/25">{en ? "Image to update" : "Ενημέρωση εικόνας"}</div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="text-xs font-bold tracking-[0.15em] text-signal">{product.series}</div>
        <h3 className="mt-2 font-display text-xl font-semibold">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/50">{t(product.description, locale)}</p>
        <div className="mt-5 space-y-2 text-xs text-white/60">
          <div><span className="text-white/30">{en ? "Materials" : "Υλικά"}:</span> {product.materials.join(", ")}</div>
          <div><span className="text-white/30">{en ? "Formats" : "Διαστάσεις"}:</span> {product.dimensions.join(", ")}</div>
          <div><span className="text-white/30">{en ? "Grits" : "Κόκκοι"}:</span> {product.grits.join(", ")}</div>
        </div>
        <div className="mt-5 space-y-2">
          {product.benefits.map((benefit) => (
            <div key={benefit.en} className="flex items-center gap-2 text-xs text-white/55"><CheckCircle2 size={13} className="text-signal" /> {t(benefit, locale)}</div>
          ))}
        </div>
        <a href={`/${locale}/contact?product=${product.id}`} className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-wider transition hover:text-signal">
          {en ? "Product inquiry" : "Ερώτηση προϊόντος"} <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
