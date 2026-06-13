import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { applications } from "@/data/applications";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { isLocale } from "@/lib/i18n";
import { t } from "@/lib/utils";

export function generateStaticParams() {
  return applications.map((item) => ({ slug: item.slug }));
}

export default async function ApplicationPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  const application = applications.find((item) => item.slug === slug);
  if (!application) notFound();
  const matching = products.filter((product) => product.industries.includes(application.title.en)).slice(0, 3);

  return (
    <>
      <section className="industrial-glow noise border-b border-white/10">
        <div className="container-wide py-16 lg:py-24">
          <Breadcrumbs locale={locale} items={[{ label: en ? "Applications" : "Εφαρμογές", href: `/${locale}/applications` }, { label: t(application.title, locale) }]} />
          <div className="eyebrow mt-14">{en ? "Application solution" : "Λύση εφαρμογής"}</div>
          <h1 className="display-title max-w-4xl">{t(application.title, locale)}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/55">{t(application.need, locale)}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="panel p-7"><div className="text-xs font-bold uppercase tracking-widest text-signal">{en ? "Customer challenge" : "Ανάγκη πελάτη"}</div><p className="mt-5 text-sm leading-7 text-white/55">{t(application.need, locale)}</p></div>
            <div className="panel p-7"><div className="text-xs font-bold uppercase tracking-widest text-signal">{en ? "Technical result" : "Τεχνικό αποτέλεσμα"}</div><p className="mt-5 text-sm leading-7 text-white/55">{t(application.outcome, locale)}</p></div>
            <div className="panel p-7"><div className="text-xs font-bold uppercase tracking-widest text-signal">{en ? "Suggested groups" : "Προτεινόμενες ομάδες"}</div><div className="mt-5 space-y-3">{application.groups.map((group) => <div key={group} className="flex items-center gap-2 text-sm text-white/60"><CheckCircle2 size={14} className="text-signal" />{group}</div>)}</div></div>
          </div>
          <div className="mt-16">
            <div className="eyebrow">{en ? "Suggested range" : "Προτεινόμενη γκάμα"}</div>
            <h2 className="section-title">{en ? "Products to start the evaluation." : "Προϊόντα για την αρχική αξιολόγηση."}</h2>
            {matching.length ? <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{matching.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}</div> : <p className="panel mt-9 p-7 text-sm text-white/50">{en ? "Ask technical sales to build a validated product sequence for this application." : "Ζητήστε από τις τεχνικές πωλήσεις μια επικυρωμένη ακολουθία προϊόντων για την εφαρμογή."}</p>}
          </div>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
