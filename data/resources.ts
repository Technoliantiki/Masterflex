import type { Localized } from "@/lib/utils";

export type Resource = {
  slug: string;
  category: string;
  title: Localized;
  summary: Localized;
  sections: { heading: Localized; body: Localized }[];
};

export const resources: Resource[] = [
  ["choose-abrasive-disc", "Product Selection Guides", "How to Choose the Right Abrasive Disc", "Πώς να Επιλέξετε τον Σωστό Λειαντικό Δίσκο"],
  ["grain-comparison", "Basics", "Ceramic vs Zirconia vs Aluminium Oxide", "Κεραμικό, Ζιρκόνιο ή Οξείδιο Αλουμινίου"],
  ["stainless-finishing", "Materials", "Abrasives for Stainless Steel Finishing", "Λειαντικά για Φινίρισμα Ανοξείδωτου"],
  ["select-sanding-belts", "Machines", "How to Select Sanding Belts", "Πώς να Επιλέξετε Ιμάντες Λείανσης"],
  ["before-painting", "Work Steps", "Surface Preparation Before Painting", "Προετοιμασία Επιφάνειας Πριν τη Βαφή"],
  ["cutting-safety", "Safety", "Safety Basics for Cutting and Grinding Discs", "Βασική Ασφάλεια για Δίσκους Κοπής και Λείανσης"],
].map(([slug, category, en, el]) => ({
  slug,
  category,
  title: { en, el },
  summary: {
    en: "A practical selection guide for industrial users and technical distributors.",
    el: "Πρακτικός οδηγός επιλογής για βιομηχανικούς χρήστες και τεχνικούς διανομείς.",
  },
  sections: [
    {
      heading: { en: "Start with the work step", el: "Ξεκινήστε από την εργασία" },
      body: {
        en: "Define the material, machine, required removal rate and target finish before selecting an abrasive.",
        el: "Καθορίστε το υλικό, το μηχάνημα, τον απαιτούμενο ρυθμό αφαίρεσης και το τελικό φινίρισμα πριν επιλέξετε λειαντικό.",
      },
    },
    {
      heading: { en: "Validate the operating conditions", el: "Επιβεβαιώστε τις συνθήκες λειτουργίας" },
      body: {
        en: "Check dimensions, speed limits, backing, grain and safety instructions against the tool and process.",
        el: "Ελέγξτε διαστάσεις, όρια ταχύτητας, βάση, κόκκο και οδηγίες ασφαλείας σε σχέση με το εργαλείο και τη διεργασία.",
      },
    },
  ],
})) as Resource[];
