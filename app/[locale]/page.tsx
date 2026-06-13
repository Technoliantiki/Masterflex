import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, Gauge, Globe2, Settings2 } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProductFinder } from "@/components/ProductFinder";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { ApplicationCard } from "@/components/ApplicationCard";
import { CTASection } from "@/components/CTASection";
import { categories } from "@/data/categories";
import { applications } from "@/data/applications";
import { createMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safe = isLocale(locale) ? locale : "en";
  return createMetadata(
    safe,
    safe === "en" ? "Masterflex | Advanced Industrial Abrasive Solutions" : "Masterflex | Εξελιγμένες Βιομηχανικές Λειαντικές Λύσεις",
    safe === "en" ? "Abrasive systems for cutting, grinding, sanding and industrial finishing." : "Συστήματα λειαντικών για κοπή, λείανση και βιομηχανικό φινίρισμα.",
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  const en = locale === "en";
  const strengths = [
    [Factory, en ? "Production & conversion" : "Παραγωγή & μεταποίηση", en ? "In-house conversion of discs, belts, rolls, sheets and special abrasive formats." : "Μεταποίηση δίσκων, ιμάντων, ρολών, φύλλων και ειδικών μορφών."],
    [Gauge, en ? "Application expertise" : "Τεχνική τεχνογνωσία", en ? "Selection support built around the material, machine and target finish." : "Υποστήριξη επιλογής βάσει υλικού, μηχανήματος και τελικού αποτελέσματος."],
    [Settings2, en ? "Special solutions" : "Ειδικές λύσεις", en ? "Custom dimensions and configurations for demanding production processes." : "Ειδικές διαστάσεις και διαμορφώσεις για απαιτητικές παραγωγικές διαδικασίες."],
    [Globe2, en ? "B2B & export ready" : "B2B & εξαγωγές", en ? "A structured range for distributors, industrial suppliers and export partners." : "Δομημένη γκάμα για διανομείς, βιομηχανικούς προμηθευτές και εξαγωγικούς συνεργάτες."],
  ] as const;

  return (
    <>
      <HeroSection locale={locale} />
      <ProductFinder locale={locale} />

      <section className="border-y border-white/10 bg-chalk py-20 text-carbon lg:py-28">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow !text-[#8A6C00]">{en ? "Product architecture" : "Δομή προϊόντων"}</div>
              <h2 className="section-title max-w-2xl">{en ? "One system. Every critical surface step." : "Ένα σύστημα. Κάθε κρίσιμο στάδιο επιφάνειας."}</h2>
            </div>
            <Link href={`/${locale}/products`} className="flex items-center gap-2 text-sm font-bold">{en ? "View all products" : "Όλα τα προϊόντα"} <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-12 grid gap-px bg-carbon/10 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.slug} className="[&>a]:h-full [&>a]:border-carbon/10 [&>a]:bg-white [&>a]:text-carbon [&_p]:text-carbon/55 [&_.tag]:border-carbon/10 [&_.tag]:text-carbon/50">
                <ProductCategoryCard category={category} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise py-20 lg:py-28">
        <div className="container-wide">
          <div className="eyebrow">{en ? "Why Masterflex" : "Γιατί Masterflex"}</div>
          <h2 className="section-title max-w-3xl">{en ? "Built around industrial reality, not catalogue volume." : "Σχεδιασμένη γύρω από τη βιομηχανική πραγματικότητα."}</h2>
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map(([Icon, title, body]) => (
              <div key={title} className="bg-carbon p-7">
                <Icon className="text-signal" size={25} />
                <h3 className="mt-8 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-graphite py-20 lg:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow">{en ? "Applications" : "Εφαρμογές"}</div>
            <h2 className="section-title">{en ? "Start with the work. Then select the abrasive." : "Ξεκινήστε από την εργασία. Μετά επιλέξτε το λειαντικό."}</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
              {en ? "Product selection becomes clearer when the material, machine and required finish are considered together." : "Η επιλογή προϊόντος γίνεται σαφέστερη όταν υλικό, μηχάνημα και απαιτούμενο φινίρισμα εξετάζονται μαζί."}
            </p>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2">
            {applications.slice(0, 8).map((item) => <ApplicationCard key={item.slug} item={item} locale={locale} />)}
          </div>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
