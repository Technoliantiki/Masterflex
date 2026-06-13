import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export function CTASection({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <section className="border-y border-white/10 bg-signal text-carbon">
      <div className="container-wide flex flex-col justify-between gap-8 py-14 md:flex-row md:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em]">{en ? "B2B & export cooperation" : "B2B & εξαγωγική συνεργασία"}</div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight lg:text-4xl">
            {en ? "Looking for a reliable abrasive partner?" : "Αναζητάτε έναν αξιόπιστο συνεργάτη λειαντικών;"}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/b2b-cooperation`} className="inline-flex items-center gap-2 bg-carbon px-5 py-3 text-sm font-bold text-white">
            {en ? "Become a Masterflex Partner" : "Γίνετε Συνεργάτης Masterflex"} <ArrowUpRight size={16} />
          </Link>
          <Link href={`/${locale}/contact`} className="border border-carbon/30 px-5 py-3 text-sm font-bold">
            {en ? "Contact Technical Sales" : "Τεχνικές Πωλήσεις"}
          </Link>
        </div>
      </div>
    </section>
  );
}
