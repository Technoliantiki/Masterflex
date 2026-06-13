import type { Localized } from "@/lib/utils";

export type Product = {
  id: string;
  category: string;
  group: string;
  name: string;
  series: string;
  description: Localized;
  materials: string[];
  workSteps: string[];
  machines: string[];
  industries: string[];
  dimensions: string[];
  grits: string[];
  benefits: Localized[];
  status: "confirmed" | "verify";
};

// Confirmed starter range extracted from the official 2026 catalogue.
// Extend this array directly or replace it with CMS/ERP data.
export const products: Product[] = [
  {
    id: "tfd-822",
    category: "coated-abrasives",
    group: "Flap Discs",
    name: "Masterflex Flap Disc",
    series: "TFD 822",
    description: {
      en: "Zirconia flap disc for grinding and blending steel, stainless steel and aluminium.",
      el: "Δίσκος βεντάλια ζιρκονίου για λείανση και ομογενοποίηση σε μέταλλο, INOX και αλουμίνιο.",
    },
    materials: ["Steel", "Stainless Steel", "Aluminium"],
    workSteps: ["Grinding", "Deburring", "Finishing"],
    machines: ["Angle Grinder"],
    industries: ["Metal Fabrication", "Stainless Steel Processing"],
    dimensions: ["115 x 22.3 mm", "125 x 22.3 mm", "180 x 22.3 mm"],
    grits: ["P40", "P60", "P80", "P120"],
    benefits: [
      { en: "Broad grit range", el: "Ευρεία γκάμα κόκκων" },
      { en: "Standard and 12° versions", el: "Επίπεδη και έκδοση 12°" },
    ],
    status: "confirmed",
  },
  {
    id: "tfd-812",
    category: "coated-abrasives",
    group: "Flap Discs",
    name: "Masterflex Coated Flap Disc",
    series: "TFD 812",
    description: {
      en: "Aluminium oxide flap disc with special coating for steel and stainless steel.",
      el: "Δίσκος βεντάλια οξειδίου αλουμινίου με ειδική επικάλυψη για μέταλλο και INOX.",
    },
    materials: ["Steel", "Stainless Steel"],
    workSteps: ["Grinding", "Finishing"],
    machines: ["Angle Grinder"],
    industries: ["Metal Fabrication", "Industrial Maintenance"],
    dimensions: ["115 x 22.3 mm", "125 x 22.3 mm"],
    grits: ["P40", "P60", "P80", "P120"],
    benefits: [
      { en: "Special anti-loading coating", el: "Ειδική αντιστομωτική επικάλυψη" },
      { en: "Controlled surface finish", el: "Ελεγχόμενο φινίρισμα" },
    ],
    status: "confirmed",
  },
  {
    id: "mfd-852",
    category: "coated-abrasives",
    group: "Flap Discs",
    name: "Masterflex Extreme Ceramic Flap Disc",
    series: "MFD 852",
    description: {
      en: "Ceramic-plus flap disc with special coating for demanding metal and stainless steel work.",
      el: "Κεραμικός δίσκος βεντάλια με ειδική επικάλυψη για απαιτητική κατεργασία μετάλλου και INOX.",
    },
    materials: ["Steel", "Stainless Steel"],
    workSteps: ["Grinding", "Deburring"],
    machines: ["Angle Grinder"],
    industries: ["Stainless Steel Processing", "Welding Preparation & Finishing"],
    dimensions: ["115 x 22.3 mm", "125 x 22.3 mm"],
    grits: ["P40", "P60"],
    benefits: [
      { en: "Ceramic abrasive technology", el: "Κεραμική τεχνολογία κόκκου" },
      { en: "12° option for curved surfaces", el: "Έκδοση 12° για καμπύλες επιφάνειες" },
    ],
    status: "confirmed",
  },
  {
    id: "tfd-814s",
    category: "coated-abrasives",
    group: "Flap Discs",
    name: "Masterflex Corner Flap Disc",
    series: "TFD 814s",
    description: {
      en: "Extended-flap construction developed for access into corners and internal profiles.",
      el: "Κατασκευή με προεκτεταμένα φύλλα για πρόσβαση σε γωνίες και εσωτερικά προφίλ.",
    },
    materials: ["Steel", "Stainless Steel"],
    workSteps: ["Grinding", "Finishing"],
    machines: ["Angle Grinder"],
    industries: ["Welding Preparation & Finishing", "Stainless Steel Processing"],
    dimensions: ["125 x 22.3 mm"],
    grits: ["P40", "P60", "P80", "P120"],
    benefits: [
      { en: "Improved corner access", el: "Βελτιωμένη πρόσβαση σε γωνίες" },
      { en: "Aluminium oxide and ceramic options", el: "Επιλογές aluminium oxide και ceramic" },
    ],
    status: "confirmed",
  },
  {
    id: "evo-cutting",
    category: "bonded-abrasives",
    group: "Cutting Discs",
    name: "Masterflex EVO Extreme",
    series: "EVO EXTREME",
    description: {
      en: "Thin cutting disc range for metal and stainless steel applications.",
      el: "Σειρά λεπτών δίσκων κοπής για μέταλλο και ανοξείδωτο χάλυβα.",
    },
    materials: ["Steel", "Stainless Steel"],
    workSteps: ["Cutting"],
    machines: ["Angle Grinder"],
    industries: ["Metal Fabrication", "Industrial Maintenance"],
    dimensions: ["115 x 1.2 mm", "125 x 1.2 mm"],
    grits: ["WA60 R-BF"],
    benefits: [
      { en: "Thin cutting profile", el: "Λεπτό προφίλ κοπής" },
      { en: "Professional metalwork format", el: "Επαγγελματική διαμόρφωση για μεταλλικές εργασίες" },
    ],
    status: "confirmed",
  },
  {
    id: "custom-belts",
    category: "special-solutions",
    group: "Sanding Belts",
    name: "Custom Sanding Belts",
    series: "Made-to-dimension",
    description: {
      en: "Converted paper, cloth and surface-conditioning belts produced to machine dimensions.",
      el: "Ιμάντες χαρτιού, πανιού και surface conditioning σε διαστάσεις μηχανήματος.",
    },
    materials: ["Steel", "Stainless Steel", "Wood", "Glass", "Plastic"],
    workSteps: ["Sanding", "Grinding", "Finishing"],
    machines: ["Belt Grinder", "Portable Belt Sander", "Stationary Sanding Machine"],
    industries: ["Metal Fabrication", "Woodworking", "Technical Distribution"],
    dimensions: ["Custom width and length"],
    grits: ["Application-specific"],
    benefits: [
      { en: "Multiple belt-joint options", el: "Πολλαπλοί τύποι κόλλησης" },
      { en: "Produced to order in Greece", el: "Παραγωγή κατά παραγγελία στην Ελλάδα" },
    ],
    status: "confirmed",
  },
  {
    id: "non-woven",
    category: "surface-conditioning",
    group: "Non-Woven Abrasives",
    name: "Surface Conditioning Range",
    series: "SB",
    description: {
      en: "Non-woven rolls, sheets, belts and discs for cleaning, blending and finishing.",
      el: "Non-woven ρολά, φύλλα, ιμάντες και δίσκοι για καθαρισμό, ομογενοποίηση και φινίρισμα.",
    },
    materials: ["Steel", "Stainless Steel", "Aluminium", "Composite Materials"],
    workSteps: ["Cleaning", "Finishing", "Surface Preparation"],
    machines: ["Angle Grinder", "Belt Grinder", "Hand Sanding"],
    industries: ["Industrial Maintenance", "Stainless Steel Processing"],
    dimensions: ["Multiple converted formats"],
    grits: ["Coarse to ultra-fine, by material"],
    benefits: [
      { en: "Controlled, repeatable finish", el: "Ελεγχόμενο, επαναλήψιμο φινίρισμα" },
      { en: "Multiple conversion formats", el: "Πολλαπλές μορφές μεταποίησης" },
    ],
    status: "confirmed",
  },
  {
    id: "velcro-discs",
    category: "coated-abrasives",
    group: "Velcro / Hook & Loop Discs",
    name: "Hook & Loop Sanding Discs",
    series: "Masterflex Converted Range",
    description: {
      en: "Converted abrasive discs for orbital sanding and surface preparation workflows.",
      el: "Δίσκοι μεταποίησης για έκκεντρη λείανση και προετοιμασία επιφανειών.",
    },
    materials: ["Wood", "Paint / Varnish", "Steel", "Composite Materials"],
    workSteps: ["Sanding", "Surface Preparation", "Finishing"],
    machines: ["Random Orbital Sander"],
    industries: ["Woodworking", "Automotive & Marine Repair"],
    dimensions: ["TODO: verify full diameter and hole-pattern range"],
    grits: ["TODO: verify by backing and abrasive type"],
    benefits: [
      { en: "Fast hook-and-loop change", el: "Γρήγορη αλλαγή με σύστημα χνουδιού" },
      { en: "Multiple backing options", el: "Πολλαπλές επιλογές βάσης" },
    ],
    status: "verify",
  },
];
