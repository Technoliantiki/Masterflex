import type { Localized } from "@/lib/utils";

export type Application = {
  slug: string;
  title: Localized;
  need: Localized;
  outcome: Localized;
  groups: string[];
};

export const applications: Application[] = [
  {
    slug: "metal-fabrication",
    title: { en: "Metal Fabrication", el: "Μεταλλικές Κατασκευές" },
    need: { en: "Cutting, weld removal, deburring and preparation across production stages.", el: "Κοπή, αφαίρεση ραφών, γρεζιών και προετοιμασία σε κάθε στάδιο παραγωγής." },
    outcome: { en: "Faster stock removal with a controlled transition to final finish.", el: "Ταχύτερη αφαίρεση υλικού με ελεγχόμενη μετάβαση στο τελικό φινίρισμα." },
    groups: ["Cutting Discs", "Flap Discs", "Fibre Discs"],
  },
  {
    slug: "stainless-steel",
    title: { en: "Stainless Steel Processing", el: "Κατεργασία Ανοξείδωτου" },
    need: { en: "Low-heat grinding, blending and consistent directional finishing.", el: "Λείανση χαμηλής θερμοκρασίας, ομογενοποίηση και σταθερό κατευθυντικό φινίρισμα." },
    outcome: { en: "Process-matched surface quality with fewer corrective steps.", el: "Ποιότητα επιφάνειας προσαρμοσμένη στη διεργασία με λιγότερα διορθωτικά στάδια." },
    groups: ["Ceramic Flap Discs", "Non-Woven Abrasives", "Unitized Products"],
  },
  {
    slug: "welding",
    title: { en: "Welding Preparation & Finishing", el: "Προετοιμασία & Φινίρισμα Συγκολλήσεων" },
    need: { en: "Cleaning, bevel preparation, seam grinding and final blending.", el: "Καθαρισμός, προετοιμασία ακμών, λείανση ραφής και τελική ομογενοποίηση." },
    outcome: { en: "A repeatable workflow from joint preparation to visual finish.", el: "Επαναλήψιμη διαδικασία από την προετοιμασία έως το οπτικό φινίρισμα." },
    groups: ["Grinding Discs", "Flap Discs", "Surface Conditioning"],
  },
  {
    slug: "woodworking",
    title: { en: "Woodworking", el: "Επεξεργασία Ξύλου" },
    need: { en: "Efficient calibration and fine sanding without premature loading.", el: "Αποδοτική βαθμονόμηση και λεπτή λείανση χωρίς πρόωρο μπούκωμα." },
    outcome: { en: "Clean surfaces ready for coating, assembly or finishing.", el: "Καθαρές επιφάνειες έτοιμες για βαφή, συναρμολόγηση ή φινίρισμα." },
    groups: ["Sanding Belts", "Abrasive Rolls", "Hook & Loop Discs"],
  },
  {
    slug: "stone-marble",
    title: { en: "Stone & Marble Processing", el: "Επεξεργασία Πέτρας & Μαρμάρου" },
    need: { en: "Cutting, shaping and polishing across mineral surfaces.", el: "Κοπή, διαμόρφωση και γυάλισμα ορυκτών επιφανειών." },
    outcome: { en: "Application-specific progression from removal to final gloss.", el: "Εξειδικευμένη ακολουθία από την αφαίρεση έως την τελική γυαλάδα." },
    groups: ["Diamond Tools", "Stone Abrasives", "Polishing Products"],
  },
  {
    slug: "automotive-marine",
    title: { en: "Automotive & Marine Repair", el: "Επισκευή Αυτοκινήτου & Σκαφών" },
    need: { en: "Paint, filler and gelcoat preparation across complex surfaces.", el: "Προετοιμασία χρώματος, στόκου και gelcoat σε σύνθετες επιφάνειες." },
    outcome: { en: "Consistent preparation for repair and coating systems.", el: "Σταθερή προετοιμασία για συστήματα επισκευής και βαφής." },
    groups: ["Hook & Loop Discs", "Sheets", "Non-Woven Abrasives"],
  },
  {
    slug: "food-dairy",
    title: { en: "Food & Dairy Equipment Maintenance", el: "Συντήρηση Εξοπλισμού Τροφίμων & Γαλακτοκομίας" },
    need: { en: "Controlled stainless steel maintenance and hygienic surface workflows, subject to technical validation.", el: "Ελεγχόμενη συντήρηση ανοξείδωτου και ροές υγιεινής προετοιμασίας, κατόπιν τεχνικής επικύρωσης." },
    outcome: { en: "Defined finish sequences selected with technical support.", el: "Καθορισμένη ακολουθία φινιρίσματος με τεχνική υποστήριξη." },
    groups: ["Non-Woven Abrasives", "Unitized Products", "Finishing Accessories"],
  },
  {
    slug: "industrial-maintenance",
    title: { en: "Industrial Maintenance", el: "Βιομηχανική Συντήρηση" },
    need: { en: "A reliable range for repair, cleaning and surface preparation.", el: "Αξιόπιστη γκάμα για επισκευή, καθαρισμό και προετοιμασία επιφανειών." },
    outcome: { en: "Fewer sourcing gaps across daily maintenance tasks.", el: "Λιγότερα κενά προμήθειας στις καθημερινές εργασίες συντήρησης." },
    groups: ["Cutting Discs", "Wire Brushes", "Cleaning Discs"],
  },
  {
    slug: "technical-distribution",
    title: { en: "Technical Distribution", el: "Τεχνική Διανομή" },
    need: { en: "A coherent, export-ready range backed by application guidance.", el: "Συνεκτική, εξαγωγική γκάμα με υποστήριξη ανά εφαρμογή." },
    outcome: { en: "Clear product positioning and responsive technical sales support.", el: "Σαφής τοποθέτηση προϊόντων και άμεση τεχνική εμπορική υποστήριξη." },
    groups: ["Full Product Range", "Private Label", "Custom Solutions"],
  },
];
