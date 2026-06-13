import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TechnicalResourceCard } from "@/components/TechnicalResourceCard";
import { resources } from "@/data/resources";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "Abrasive Knowledge & Technical Guides" : "Τεχνικοί Οδηγοί Λειαντικών", "Practical abrasive selection and safety guides.", "/technical-resources");
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  return (
    <>
      <PageHero locale={locale} current={en ? "Technical Resources" : "Τεχνική Βιβλιοθήκη"} eyebrow="Abrasive Knowledge" title={en ? "Technical clarity for better abrasive decisions." : "Τεχνική σαφήνεια για καλύτερες επιλογές λειαντικών."} intro={en ? "Practical guidance organised by basics, work steps, materials, machines, safety and product selection." : "Πρακτική καθοδήγηση οργανωμένη σε βασικές αρχές, εργασίες, υλικά, μηχανήματα, ασφάλεια και επιλογή προϊόντος."} />
      <section className="py-20 lg:py-28">
        <div className="container-wide grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => <TechnicalResourceCard key={resource.slug} resource={resource} locale={locale} />)}
        </div>
      </section>
    </>
  );
}
