import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export function HeroSection({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <section className="industrial-glow noise relative min-h-[760px] overflow-hidden border-b border-white/10">
      <div className="container-wide relative z-10 grid min-h-[760px] items-center gap-10 py-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,.88fr)] lg:py-24">
        <div className="max-w-4xl">
          <div className="eyebrow">{en ? "Industrial abrasive systems" : "Βιομηχανικά συστήματα λείανσης"}</div>
          <h1 className="display-title max-w-4xl">
            {en ? "Advanced Abrasive Solutions for " : "Εξελιγμένες Λειαντικές Λύσεις για "}
            <span className="text-signal">{en ? "Industrial Performance" : "Βιομηχανική Απόδοση"}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            {en
              ? "Masterflex provides cutting, grinding, sanding and finishing solutions for professional distributors, industrial users and technical applications."
              : "Η Masterflex προσφέρει λύσεις κοπής, λείανσης και φινιρίσματος για επαγγελματίες διανομείς, βιομηχανικούς χρήστες και τεχνικές εφαρμογές."}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={`/${locale}/products`} className="btn-primary">{en ? "Explore Product Range" : "Δείτε τη Γκάμα"} <ArrowRight size={16} /></Link>
            <Link href="#finder" className="btn-secondary">{en ? "Find the Right Abrasive" : "Βρείτε το Σωστό Λειαντικό"}</Link>
            <Link href={`/${locale}/catalogue`} className="btn-secondary"><Download size={15} /> {en ? "Catalogue" : "Κατάλογος"}</Link>
          </div>
          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              ["35", en ? "Years of experience" : "Χρόνια εμπειρίας"],
              ["4K", en ? "m² facilities" : "m² εγκαταστάσεων"],
              ["B2B", en ? "Distribution focus" : "Προσανατολισμός"],
              ["EU", en ? "Production base" : "Βάση παραγωγής"],
            ].map(([value, label]) => (
              <div key={label} className="bg-carbon/80 p-5">
                <div className="font-display text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/35">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <Image
            src="/images/hero-orange-flap-disc.png"
            alt="Orange abrasive flap disc for industrial grinding and finishing"
            width={1254}
            height={1254}
            priority
            className="hero-disc-image"
          />
        </div>
      </div>
    </section>
  );
}
