import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductFinder } from "@/components/ProductFinder";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { categories } from "@/data/categories";
import { createMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "Industrial Abrasive Products" : "Βιομηχανικά Λειαντικά Προϊόντα", "Masterflex industrial abrasive product range.", "/products");
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  return (
    <>
      <PageHero
        locale={locale}
        current={en ? "Products" : "Προϊόντα"}
        eyebrow={en ? "Structured industrial range" : "Δομημένη βιομηχανική γκάμα"}
        title={en ? "Abrasive systems organised around the process." : "Συστήματα λειαντικών οργανωμένα γύρω από τη διεργασία."}
        intro={en ? "Explore bonded, coated, non-woven and special abrasive solutions for cutting, grinding, sanding, finishing and polishing." : "Ανακαλύψτε συγκολλημένα, επικαλυμμένα, non-woven και ειδικά λειαντικά για κοπή, λείανση και φινίρισμα."}
      />
      <section className="bg-chalk py-20 text-carbon">
        <div className="container-wide grid gap-px bg-carbon/10 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.slug} className="[&>a]:h-full [&>a]:border-carbon/10 [&>a]:bg-white [&>a]:text-carbon [&_p]:text-carbon/55 [&_.tag]:border-carbon/10 [&_.tag]:text-carbon/50">
              <ProductCategoryCard category={category} locale={locale} />
            </div>
          ))}
        </div>
      </section>
      <ProductFinder locale={locale} />
    </>
  );
}
