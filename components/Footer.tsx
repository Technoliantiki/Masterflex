import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";

export function Footer({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  return (
    <footer className="border-t border-white/10 bg-[#05080a]">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo className="h-16" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
            {isEn ? "Advanced abrasive solutions for demanding industrial performance." : "Εξελιγμένες λειαντικές λύσεις για απαιτητική βιομηχανική απόδοση."}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/35">{isEn ? "Navigate" : "Πλοήγηση"}</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link href={`/${locale}/products`}>{isEn ? "Products" : "Προϊόντα"}</Link>
            <Link href={`/${locale}/applications`}>{isEn ? "Applications" : "Εφαρμογές"}</Link>
            <Link href={`/${locale}/technical-resources`}>{isEn ? "Abrasive knowledge" : "Τεχνική βιβλιοθήκη"}</Link>
            <Link href={`/${locale}/b2b-cooperation`}>B2B</Link>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/35">{isEn ? "Contact" : "Επικοινωνία"}</h3>
          <div className="mt-5 space-y-2 text-sm leading-6 text-white/65">
            <p>Thessaloniki Industrial Area<br />Sindos, Greece</p>
            <p>+30 2310 797 952<br />+30 2310 796 016</p>
            <p>info@technoliantiki.gr</p>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/35">{isEn ? "Industrial origin" : "Βιομηχανική βάση"}</h3>
          <p className="mt-5 text-sm leading-7 text-white/50">
            {isEn
              ? "Masterflex is developed by Technoliantiki, a Greek abrasive production and distribution company based in Thessaloniki Industrial Area."
              : "Η Masterflex αναπτύσσεται από την Τεχνολειαντική, ελληνική εταιρεία παραγωγής και διανομής λειαντικών με βάση τη ΒΙ.ΠΕ. Θεσσαλονίκης."}
          </p>
        </div>
      </div>
      <div className="container-wide flex flex-col gap-3 border-t border-white/10 py-6 text-[11px] text-white/35 sm:flex-row sm:justify-between">
        <span>© 2026 Masterflex. All rights reserved.</span>
        <span>{isEn ? "Technical data subject to final commercial verification." : "Τα τεχνικά στοιχεία υπόκεινται σε τελική εμπορική επιβεβαίωση."}</span>
      </div>
    </footer>
  );
}
