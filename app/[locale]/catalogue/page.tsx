import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BrandLogo } from "@/components/BrandLogo";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "Download Masterflex Catalogue" : "Λήψη Καταλόγου Masterflex", "Download the Masterflex abrasive catalogue.", "/catalogue");
}

export default async function CataloguePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  return (
    <>
      <PageHero locale={locale} current={en ? "Catalogue" : "Κατάλογος"} eyebrow={en ? "Product reference" : "Αναφορά προϊόντων"} title={en ? "Download the Masterflex Catalogue." : "Κατεβάστε τον Κατάλογο Masterflex."} intro={en ? "Review the product range, available forms and technical selection information in one practical reference." : "Δείτε τη γκάμα, τις διαθέσιμες μορφές και τις τεχνικές πληροφορίες επιλογής σε ένα πρακτικό αρχείο."} />
      <section className="py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div className="panel relative flex min-h-[460px] items-center justify-center overflow-hidden bg-gradient-to-br from-signal/10 to-transparent p-8">
            <div className="absolute inset-5 border border-white/10" />
            <div className="relative text-center"><FileText className="mx-auto text-signal" size={64} /><BrandLogo className="mt-7 h-20" /><div className="mt-5 text-xs uppercase tracking-[.3em] text-white/35">Industrial Abrasives Catalogue</div><div className="mt-14 text-xs text-white/30">2026 / Digital Edition</div></div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="eyebrow">{en ? "PDF catalogue" : "Κατάλογος PDF"}</div>
            <h2 className="section-title">{en ? "A practical tool for range selection." : "Ένα πρακτικό εργαλείο επιλογής γκάμας."}</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">{en ? "The current source catalogue contains 64 pages of product families, dimensions, grit information, conversion materials and technical guidance." : "Ο τρέχων κατάλογος περιλαμβάνει 64 σελίδες με οικογένειες προϊόντων, διαστάσεις, κόκκους, υλικά μεταποίησης και τεχνικές οδηγίες."}</p>
            <a href="/catalogues/masterflex-catalogue.pdf" download className="btn-primary mt-8 self-start"><Download size={16} />{en ? "Download Catalogue" : "Λήψη Καταλόγου"}</a>
            <Link href={`/${locale}/contact`} className="mt-5 text-sm font-semibold text-white/60 hover:text-signal">{en ? "Need a technical recommendation instead?" : "Χρειάζεστε τεχνική πρόταση;"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
