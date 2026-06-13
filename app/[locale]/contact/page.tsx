import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  return createMetadata(l, l === "en" ? "Contact Masterflex" : "Επικοινωνία Masterflex", "Contact Masterflex technical sales.", "/contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const en = locale === "en";
  return (
    <>
      <PageHero locale={locale} current={en ? "Contact" : "Επικοινωνία"} eyebrow={en ? "Technical sales" : "Τεχνικές πωλήσεις"} title={en ? "Let’s discuss the application." : "Ας συζητήσουμε την εφαρμογή."} intro={en ? "Share the material, machine, work step and target finish. The more context you provide, the more focused the recommendation can be." : "Μοιραστείτε το υλικό, το μηχάνημα, την εργασία και το επιθυμητό φινίρισμα για πιο στοχευμένη πρόταση."} />
      <section className="py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold">Masterflex</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4"><MapPin className="shrink-0 text-signal" size={20} /><div className="text-sm leading-6 text-white/55">Thessaloniki Industrial Area<br />Sindos, Greece</div></div>
              <div className="flex gap-4"><Phone className="shrink-0 text-signal" size={20} /><div className="text-sm leading-6 text-white/55">+30 2310 797 952<br />+30 2310 796 016</div></div>
              <div className="flex gap-4"><Mail className="shrink-0 text-signal" size={20} /><div className="text-sm leading-6 text-white/55">info@technoliantiki.gr</div></div>
            </div>
            <p className="mt-10 border-l border-flare pl-4 text-xs leading-6 text-white/35">{en ? "Launch note: confirm whether a dedicated Masterflex email address will replace the current company email." : "Σημείωση δημοσίευσης: να επιβεβαιωθεί αν θα χρησιμοποιηθεί νέο αποκλειστικό email Masterflex."}</p>
            <div className="panel mt-10 flex min-h-52 items-center justify-center text-xs uppercase tracking-widest text-white/25">{en ? "Map integration placeholder" : "Θέση ενσωμάτωσης χάρτη"}</div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  );
}
