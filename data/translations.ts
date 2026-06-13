import type { Locale } from "@/lib/i18n";

const translations = {
  en: {
    nav: {
      products: "Products",
      applications: "Applications",
      b2b: "B2B Cooperation",
      resources: "Technical Resources",
      catalogue: "Catalogue",
      about: "About",
      contact: "Contact",
      sales: "Contact Sales",
    },
    common: {
      viewCategory: "View category",
      learnMore: "Learn more",
      requestAdvice: "Request technical advice",
      explore: "Explore product range",
      finder: "Find the right abrasive",
      distributor: "Become a distributor",
      download: "Download catalogue",
    },
  },
  el: {
    nav: {
      products: "Προϊόντα",
      applications: "Εφαρμογές",
      b2b: "B2B Συνεργασία",
      resources: "Τεχνική Βιβλιοθήκη",
      catalogue: "Κατάλογος",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      sales: "Επικοινωνία Πωλήσεων",
    },
    common: {
      viewCategory: "Προβολή κατηγορίας",
      learnMore: "Μάθετε περισσότερα",
      requestAdvice: "Ζητήστε τεχνική συμβουλή",
      explore: "Δείτε τη γκάμα προϊόντων",
      finder: "Βρείτε το σωστό λειαντικό",
      distributor: "Γίνετε διανομέας",
      download: "Λήψη καταλόγου",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
