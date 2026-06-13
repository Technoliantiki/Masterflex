import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";
import { t } from "@/lib/utils";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string }> }): Promise<Metadata> {
  const { locale, category: slug } = await params;
  const l = isLocale(locale) ? locale : "en";
  const category = categories.find((item) => item.slug === slug);
  return createMetadata(l, category ? t(category.title, l) : "Products", category ? t(category.description, l) : "", `/products/${slug}`);
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale: raw, category: slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const matching = products.filter((product) => product.category === category.slug);

  return (
    <>
      <section className="industrial-glow noise border-b border-white/10">
        <div className="container-wide py-16 lg:py-24">
          <Breadcrumbs locale={locale} items={[{ label: en ? "Products" : "Προϊόντα", href: `/${locale}/products` }, { label: t(category.title, locale) }]} />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.4fr]">
            <div>
              <div className="eyebrow">{category.code} / {en ? "Product category" : "Κατηγορία προϊόντων"}</div>
              <h1 className="display-title">{t(category.title, locale)}</h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/55">{t(category.description, locale)}</p>
            </div>
            <div className="panel p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-signal">{en ? "Best for" : "Κατάλληλο για"}</div>
              <div className="mt-4 flex flex-wrap gap-2">{category.materials.map((item) => <span key={item} className="tag">{item}</span>)}</div>
              <div className="mt-7 text-[10px] font-bold uppercase tracking-widest text-signal">{en ? "Typical applications" : "Τυπικές εφαρμογές"}</div>
              <div className="mt-4 flex flex-wrap gap-2">{category.applications.map((item) => <span key={item} className="tag">{item}</span>)}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-5">
            <div>
              <div className="eyebrow">{en ? "Available range" : "Διαθέσιμη γκάμα"}</div>
              <h2 className="section-title">{en ? "Selected product lines" : "Επιλεγμένες σειρές προϊόντων"}</h2>
            </div>
            <a href={`/${locale}/contact`} className="btn-secondary hidden sm:inline-flex">{en ? "Ask for recommendation" : "Ζητήστε πρόταση"} <ArrowRight size={15} /></a>
          </div>
          {matching.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{matching.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}</div>
          ) : (
            <div className="panel mt-10 p-9">
              <div className="text-sm font-bold text-signal">{en ? "Digital product data in preparation" : "Η ψηφιακή καταχώριση προϊόντων είναι σε εξέλιξη"}</div>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">{en ? "This confirmed category is available in the source catalogue. Individual SKUs will be added after final technical and commercial validation." : "Η κατηγορία επιβεβαιώνεται στον επίσημο κατάλογο. Οι επιμέρους κωδικοί θα προστεθούν μετά την τελική τεχνική και εμπορική επικύρωση."}</p>
            </div>
          )}
          <div className="panel mt-12 grid gap-7 p-7 md:grid-cols-3">
            <div><div className="text-xs font-bold uppercase tracking-widest text-signal">{en ? "Available forms" : "Διαθέσιμες μορφές"}</div><p className="mt-3 text-sm leading-6 text-white/50">{category.groups.join(", ")}</p></div>
            <div><div className="text-xs font-bold uppercase tracking-widest text-signal">{en ? "Technical note" : "Τεχνική σημείωση"}</div><p className="mt-3 text-sm leading-6 text-white/50">{en ? "Final dimensions, grit availability and operating limits must be confirmed against the current technical sheet." : "Οι τελικές διαστάσεις, κόκκοι και συνθήκες λειτουργίας επιβεβαιώνονται από το τρέχον τεχνικό δελτίο."}</p></div>
            <div><div className="text-xs font-bold uppercase tracking-widest text-signal">{en ? "Custom conversion" : "Ειδική μεταποίηση"}</div><p className="mt-3 text-sm leading-6 text-white/50">{en ? "Special dimensions may be available depending on material, format and minimum production quantity." : "Ειδικές διαστάσεις ενδέχεται να διατίθενται ανάλογα με υλικό, μορφή και ελάχιστη ποσότητα παραγωγής."}</p></div>
          </div>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
