import type { Metadata } from "next";
import { Factory, Lightbulb, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "About Masterflex" : "Σχετικά με τη Masterflex", "A Greek abrasive solutions brand with international direction.", "/about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  const pillars = [
    [Factory, en ? "Production capability" : "Παραγωγική δυνατότητα", en ? "Conversion and production of discs, flap discs, belts, rolls, sheets and special formats." : "Μεταποίηση και παραγωγή δίσκων, flap discs, ιμάντων, ρολών, φύλλων και ειδικών μορφών."],
    [Lightbulb, en ? "Applied expertise" : "Εφαρμοσμένη τεχνογνωσία", en ? "More than three decades of experience in industrial abrasive selection and process support." : "Περισσότερες από τρεις δεκαετίες εμπειρίας στην επιλογή λειαντικών και την υποστήριξη διεργασιών."],
    [ShieldCheck, en ? "Quality discipline" : "Πειθαρχία ποιότητας", en ? "A documented quality approach across production, packaging and supply operations." : "Τεκμηριωμένη προσέγγιση ποιότητας στην παραγωγή, συσκευασία και εφοδιαστική λειτουργία."],
    [Target, en ? "European direction" : "Ευρωπαϊκή κατεύθυνση", en ? "A focused brand platform for distribution growth and long-term industrial partnerships." : "Στοχευμένη πλατφόρμα brand για ανάπτυξη διανομής και μακροχρόνιες βιομηχανικές συνεργασίες."],
  ] as const;
  return (
    <>
      <PageHero locale={locale} current={en ? "About" : "Σχετικά"} eyebrow={en ? "Industrial origin. International direction." : "Βιομηχανική βάση. Διεθνής κατεύθυνση."} title={en ? "Abrasive expertise, engineered into a focused brand." : "Τεχνογνωσία λειαντικών, οργανωμένη σε ένα στοχευμένο brand."} intro={en ? "Masterflex brings together production experience, conversion capability and application support from Greece for distributors and industrial users across Europe." : "Η Masterflex συνδυάζει παραγωγική εμπειρία, δυνατότητα μεταποίησης και τεχνική υποστήριξη από την Ελλάδα για διανομείς και βιομηχανικούς χρήστες στην Ευρώπη."} />
      <section className="py-20 lg:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><div className="eyebrow">{en ? "Since 1991" : "Από το 1991"}</div><h2 className="section-title">{en ? "From abrasive supply to process partnership." : "Από την προμήθεια λειαντικών στη συνεργασία διεργασίας."}</h2></div>
          <div className="space-y-6 text-base leading-8 text-white/55">
            <p>{en ? "The production base in Thessaloniki Industrial Area supports the conversion of European abrasive cloth and paper into application-ready formats. The operation combines modern equipment, technical sales knowledge and a broad distribution portfolio." : "Η παραγωγική βάση στη ΒΙ.ΠΕ. Θεσσαλονίκης μεταποιεί ευρωπαϊκά σμυριδόπανα και σμυριδόχαρτα σε μορφές έτοιμες για εφαρμογή, συνδυάζοντας σύγχρονο εξοπλισμό, τεχνική γνώση και ευρεία γκάμα διανομής."}</p>
            <p>{en ? "Masterflex is the platform for bringing that experience into a clear international offer: dependable industrial products, custom conversion and practical technical support." : "Η Masterflex μεταφέρει αυτή την εμπειρία σε μια σαφή διεθνή πρόταση: αξιόπιστα βιομηχανικά προϊόντα, ειδική μεταποίηση και πρακτική τεχνική υποστήριξη."}</p>
          </div>
        </div>
        <div className="container-wide mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([Icon, title, body]) => <div className="bg-carbon p-7" key={title}><Icon className="text-signal" /><h3 className="mt-8 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/45">{body}</p></div>)}
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
