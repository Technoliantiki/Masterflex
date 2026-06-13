import type { Metadata } from "next";
import { Boxes, Factory, Globe2, Headphones, PackageCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "Become a Masterflex Distributor" : "Γίνετε Διανομέας Masterflex", "Abrasive export and distribution cooperation.", "/b2b-cooperation");
}

export default async function B2BPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  const items = [
    [Globe2, en ? "Export cooperation" : "Εξαγωγική συνεργασία", en ? "A structured range designed for international distributors and industrial supply partners." : "Δομημένη γκάμα για διεθνείς διανομείς και προμηθευτές βιομηχανίας."],
    [Boxes, en ? "Range support" : "Υποστήριξη γκάμας", en ? "Product-family planning by market, application and customer profile." : "Σχεδιασμός οικογενειών προϊόντων ανά αγορά, εφαρμογή και προφίλ πελάτη."],
    [Headphones, en ? "Technical sales" : "Τεχνικές πωλήσεις", en ? "Application guidance for product selection and problem solving." : "Καθοδήγηση εφαρμογών για επιλογή προϊόντων και επίλυση προβλημάτων."],
    [Wrench, en ? "Custom solutions" : "Ειδικές λύσεις", en ? "Custom belts, discs and dimensions subject to production validation." : "Ειδικοί ιμάντες, δίσκοι και διαστάσεις κατόπιν παραγωγικής επιβεβαίωσης."],
    [PackageCheck, en ? "Private label potential" : "Δυνατότητα private label", en ? "OEM and private-label discussions based on volume, format and compliance requirements." : "Συζήτηση OEM και private label βάσει όγκου, μορφής και απαιτήσεων συμμόρφωσης."],
    [Factory, en ? "Industrial origin" : "Βιομηχανική προέλευση", en ? "Production and conversion capability in Thessaloniki Industrial Area." : "Δυνατότητα παραγωγής και μεταποίησης στη ΒΙ.ΠΕ. Θεσσαλονίκης."],
  ] as const;
  return (
    <>
      <PageHero locale={locale} current="B2B" eyebrow={en ? "Distribution & export" : "Διανομή & εξαγωγές"} title={en ? "Become a Masterflex Partner." : "Γίνετε Συνεργάτης Masterflex."} intro={en ? "Built for distributors, industrial suppliers, technical retailers and partners who need a reliable abrasive range with responsive support." : "Για διανομείς, βιομηχανικούς προμηθευτές και συνεργάτες που χρειάζονται αξιόπιστη γκάμα λειαντικών με άμεση υποστήριξη."} />
      <section className="py-20">
        <div className="container-wide">
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {items.map(([Icon, title, body]) => <div key={title} className="bg-carbon p-7"><Icon className="text-signal" /><h2 className="mt-8 font-display text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-white/45">{body}</p></div>)}
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div><div className="eyebrow">{en ? "Start a conversation" : "Έναρξη συνεργασίας"}</div><h2 className="section-title">{en ? "Tell us about your market." : "Μιλήστε μας για την αγορά σας."}</h2><p className="mt-5 text-sm leading-7 text-white/50">{en ? "Share your product focus, customer base and estimated demand. Technical sales will use this information to prepare a relevant range proposal." : "Μοιραστείτε το προϊοντικό ενδιαφέρον, την πελατειακή βάση και την εκτιμώμενη ζήτηση, ώστε να ετοιμαστεί σχετική πρόταση γκάμας."}</p></div>
            <ContactForm locale={locale} b2b />
          </div>
        </div>
      </section>
    </>
  );
}
