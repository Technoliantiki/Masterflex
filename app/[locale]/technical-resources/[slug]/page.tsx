import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { resources } from "@/data/resources";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { isLocale } from "@/lib/i18n";
import { t } from "@/lib/utils";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export default async function ResourcePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();
  return (
    <>
      <article>
        <header className="industrial-glow noise border-b border-white/10">
          <div className="container-wide max-w-5xl py-16 lg:py-24">
            <Breadcrumbs locale={locale} items={[{ label: en ? "Technical Resources" : "Τεχνική Βιβλιοθήκη", href: `/${locale}/technical-resources` }, { label: t(resource.title, locale) }]} />
            <div className="eyebrow mt-14">{resource.category}</div>
            <h1 className="display-title">{t(resource.title, locale)}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/55">{t(resource.summary, locale)}</p>
          </div>
        </header>
        <div className="container-wide max-w-5xl py-20">
          <div className="space-y-14">
            {resource.sections.map((section, index) => (
              <section key={section.heading.en} className="grid gap-6 md:grid-cols-[80px_1fr]">
                <div className="font-display text-3xl text-white/15">0{index + 1}</div>
                <div><h2 className="font-display text-2xl font-semibold">{t(section.heading, locale)}</h2><p className="mt-4 text-base leading-8 text-white/55">{t(section.body, locale)}</p></div>
              </section>
            ))}
          </div>
          <aside className="mt-16 flex gap-4 border border-flare/25 bg-flare/5 p-6">
            <AlertTriangle className="shrink-0 text-flare" size={20} />
            <p className="text-sm leading-7 text-white/55">{en ? "Always follow the product label, machine instructions, applicable safety standards and current technical data sheet. This guide does not replace application validation." : "Ακολουθείτε πάντα την ετικέτα προϊόντος, τις οδηγίες μηχανήματος, τα ισχύοντα πρότυπα ασφαλείας και το τρέχον τεχνικό δελτίο. Ο οδηγός δεν αντικαθιστά την επικύρωση εφαρμογής."}</p>
          </aside>
        </div>
      </article>
      <CTASection locale={locale} />
    </>
  );
}
