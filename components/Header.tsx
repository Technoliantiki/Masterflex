"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/data/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BrandLogo } from "./BrandLogo";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const tr = getTranslations(locale);
  const links = [
    ["products", tr.nav.products],
    ["applications", tr.nav.applications],
    ["b2b-cooperation", tr.nav.b2b],
    ["technical-resources", tr.nav.resources],
    ["catalogue", tr.nav.catalogue],
    ["about", tr.nav.about],
    ["contact", tr.nav.contact],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-carbon/90 backdrop-blur-xl">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href={`/${locale}`} aria-label="Masterflex home">
          <BrandLogo priority className="h-11 sm:h-12" />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={`/${locale}/${href}`} className="text-xs font-semibold text-white/70 transition hover:text-signal">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/contact`} className="btn-primary">
            {tr.nav.sales} <ArrowUpRight size={15} />
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-graphite px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map(([href, label]) => (
              <Link key={href} href={`/${locale}/${href}`} onClick={() => setOpen(false)} className="text-lg font-semibold">
                {label}
              </Link>
            ))}
            <div className="mt-3"><LanguageSwitcher locale={locale} /></div>
          </nav>
        </div>
      )}
    </header>
  );
}
