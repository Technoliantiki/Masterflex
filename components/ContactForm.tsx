"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export function ContactForm({ locale, b2b = false }: { locale: Locale; b2b?: boolean }) {
  const en = locale === "en";
  const [sent, setSent] = useState(false);
  const field = "w-full border border-border bg-chalk px-4 py-3 text-sm text-carbon outline-none transition placeholder:text-carbon/40 focus:border-flare focus:bg-white";

  if (sent) {
    return (
      <div className="panel p-8">
        <div className="text-sm font-bold text-signal">{en ? "Inquiry prepared" : "Το αίτημα προετοιμάστηκε"}</div>
        <p className="mt-3 text-sm leading-7 text-white/55">
          {en ? "The demo form is validated locally. Connect it to your preferred CRM, email provider or Vercel function before launch." : "Η δοκιμαστική φόρμα επικυρώνεται τοπικά. Πριν τη δημοσίευση, συνδέστε τη με CRM, υπηρεσία email ή Vercel function."}
        </p>
      </div>
    );
  }

  return (
    <form className="panel grid gap-4 p-6 sm:grid-cols-2 sm:p-8" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <label className="text-xs text-white/50">{b2b ? (en ? "Company Name" : "Επωνυμία") : (en ? "Name" : "Όνομα")}<input required className={`${field} mt-2`} /></label>
      <label className="text-xs text-white/50">{en ? "Email" : "Email"}<input required type="email" className={`${field} mt-2`} /></label>
      <label className="text-xs text-white/50">{en ? "Phone / WhatsApp" : "Τηλέφωνο / WhatsApp"}<input className={`${field} mt-2`} /></label>
      <label className="text-xs text-white/50">{en ? "Country" : "Χώρα"}<input required className={`${field} mt-2`} /></label>
      {b2b && <>
        <label className="text-xs text-white/50">{en ? "Business Type" : "Τύπος Επιχείρησης"}
          <select className={`${field} mt-2`} required defaultValue="">
            <option value="" disabled>{en ? "Select" : "Επιλέξτε"}</option>
            {["Distributor", "Importer", "Industrial Supplier", "Technical Retailer", "Manufacturer", "End User"].map((x) => <option key={x}>{x}</option>)}
          </select>
        </label>
        <label className="text-xs text-white/50">{en ? "Estimated annual demand" : "Εκτιμώμενη ετήσια ζήτηση"}<input className={`${field} mt-2`} /></label>
        <label className="text-xs text-white/50 sm:col-span-2">{en ? "Interested product groups" : "Ομάδες προϊόντων ενδιαφέροντος"}<input className={`${field} mt-2`} /></label>
      </>}
      <label className="text-xs text-white/50 sm:col-span-2">{en ? "Message" : "Μήνυμα"}<textarea required rows={5} className={`${field} mt-2 resize-none`} /></label>
      {b2b && <label className="text-xs text-white/50 sm:col-span-2">{en ? "Optional technical file" : "Προαιρετικό τεχνικό αρχείο"}<input type="file" className={`${field} mt-2`} /></label>}
      <button className="btn-primary sm:col-span-2 sm:justify-self-start" type="submit">{b2b ? (en ? "Send B2B Inquiry" : "Αποστολή B2B Αιτήματος") : (en ? "Send Inquiry" : "Αποστολή Αιτήματος")}</button>
    </form>
  );
}
