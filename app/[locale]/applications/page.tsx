import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ApplicationCard } from "@/components/ApplicationCard";
import { CTASection } from "@/components/CTASection";
import { applications } from "@/data/applications";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "Abrasive Solutions by Application" : "Λειαντικές Λύσεις ανά Εφαρμογή", "Application-specific abrasive solutions.", "/applications");
}

export default async function ApplicationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  return (
    <>
      <PageHero
        locale={locale}
        current={en ? "Applications" : "Εφαρμογές"}
        eyebrow={en ? "Process-first navigation" : "Πλοήγηση βάσει διεργασίας"}
        title={en ? "Abrasive solutions mapped to the work." : "Λειαντικές λύσεις χαρτογραφημένες στην εργασία."}
        intro={en ? "Move from the production challenge to a focused set of product groups, machines and finishing steps." : "Μεταβείτε από την παραγωγική ανάγκη σε στοχευμένες ομάδες προϊόντων, μηχανήματα και στάδια φινιρίσματος."}
      />
      <section className="py-20 lg:py-28">
        <div className="container-wide grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => <ApplicationCard key={item.slug} item={item} locale={locale} />)}
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
