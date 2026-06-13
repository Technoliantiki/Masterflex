import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  locale,
  eyebrow,
  title,
  intro,
  current,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
  children?: ReactNode;
}) {
  return (
    <section className="industrial-glow noise border-b border-white/10">
      <div className="container-wide py-16 lg:py-24">
        <Breadcrumbs locale={locale} items={[{ label: current }]} />
        <div className="eyebrow mt-12">{eyebrow}</div>
        <h1 className="display-title max-w-5xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-white/55">{intro}</p>
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
