import type { Localized } from "@/lib/utils";

export type Category = {
  slug: string;
  code: string;
  title: Localized;
  description: Localized;
  materials: string[];
  applications: string[];
  groups: string[];
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "bonded-abrasives",
    code: "01",
    title: { en: "Bonded Abrasives", el: "Συγκολλημένα Λειαντικά" },
    description: {
      en: "Cutting, grinding and precision wheel solutions for controlled stock removal.",
      el: "Λύσεις κοπής και λείανσης για ελεγχόμενη αφαίρεση υλικού.",
    },
    materials: ["Steel", "Stainless Steel", "Aluminium", "Stone / Marble"],
    applications: ["Cutting", "Grinding", "Weld preparation"],
    groups: ["Cutting Discs", "Grinding Discs", "Grinding Wheels"],
    accent: "#00d4ff",
  },
  {
    slug: "coated-abrasives",
    code: "02",
    title: { en: "Coated Abrasives", el: "Επικαλυμμένα Λειαντικά" },
    description: {
      en: "Engineered discs, belts, sheets and rolls for metal, wood and surface workflows.",
      el: "Δίσκοι, ιμάντες, φύλλα και ρολά για μέταλλο, ξύλο και κατεργασία επιφανειών.",
    },
    materials: ["Steel", "Stainless Steel", "Wood", "Paint / Varnish"],
    applications: ["Sanding", "Deburring", "Finishing"],
    groups: ["Flap Discs", "Fibre Discs", "Sanding Belts", "Abrasive Rolls"],
    accent: "#2e7bff",
  },
  {
    slug: "surface-conditioning",
    code: "03",
    title: { en: "Surface Conditioning", el: "Προετοιμασία Επιφανειών" },
    description: {
      en: "Non-woven, unitized and cleaning systems for blending and controlled finishing.",
      el: "Non-woven, unitized και συστήματα καθαρισμού για ομογενοποίηση και φινίρισμα.",
    },
    materials: ["Stainless Steel", "Steel", "Aluminium", "Composite Materials"],
    applications: ["Cleaning", "Finishing", "Surface Preparation"],
    groups: ["Non-Woven Abrasives", "Unitized Products", "Cleaning Discs"],
    accent: "#00b7a8",
  },
  {
    slug: "polishing-finishing",
    code: "04",
    title: { en: "Polishing & Finishing", el: "Γυάλισμα & Φινίρισμα" },
    description: {
      en: "Compounds, pads and accessories for repeatable final-surface results.",
      el: "Πάστες, δίσκοι και εξαρτήματα για επαναλήψιμο τελικό αποτέλεσμα.",
    },
    materials: ["Stainless Steel", "Aluminium", "Stone / Marble", "Marine Surfaces"],
    applications: ["Polishing", "Fine Finishing"],
    groups: ["Polishing Compounds", "Polishing Pads", "Finishing Accessories"],
    accent: "#9b7cff",
  },
  {
    slug: "brushes-deburring",
    code: "05",
    title: { en: "Brushes & Deburring", el: "Βούρτσες & Αφαίρεση Γρεζιών" },
    description: {
      en: "Technical brushes and deburring tools for edges, welds and difficult profiles.",
      el: "Τεχνικές βούρτσες και εργαλεία για ακμές, συγκολλήσεις και δύσκολα προφίλ.",
    },
    materials: ["Steel", "Stainless Steel", "Aluminium"],
    applications: ["Deburring", "Cleaning", "Weld finishing"],
    groups: ["Wire Brushes", "Technical Brushes", "Carbide Burrs"],
    accent: "#ff8a3d",
  },
  {
    slug: "stone-glass",
    code: "06",
    title: { en: "Stone, Marble & Glass", el: "Πέτρα, Μάρμαρο & Γυαλί" },
    description: {
      en: "Application-led tools for cutting, shaping, finishing and polishing mineral surfaces.",
      el: "Εργαλεία για κοπή, διαμόρφωση, φινίρισμα και γυάλισμα ορυκτών επιφανειών.",
    },
    materials: ["Stone / Marble", "Glass"],
    applications: ["Cutting", "Grinding", "Polishing"],
    groups: ["Diamond Tools", "Stone Abrasives", "Glass Processing Products"],
    accent: "#68a7b8",
  },
  {
    slug: "machines-accessories",
    code: "07",
    title: { en: "Machines & Accessories", el: "Μηχανήματα & Εξαρτήματα" },
    description: {
      en: "Professional sanding and grinding machines, backing pads, holders and support systems.",
      el: "Επαγγελματικά μηχανήματα λείανσης, βάσεις, υποδοχές και συστήματα υποστήριξης.",
    },
    materials: ["Multi-material"],
    applications: ["Sanding", "Grinding", "Polishing"],
    groups: ["Sanding Machines", "Backing Pads", "Holders", "Accessories"],
    accent: "#7e8a94",
  },
  {
    slug: "special-solutions",
    code: "08",
    title: { en: "Special Abrasive Solutions", el: "Ειδικές Λειαντικές Λύσεις" },
    description: {
      en: "Custom belts, discs, dimensions and process-specific abrasive configurations.",
      el: "Ειδικοί ιμάντες, δίσκοι, διαστάσεις και λύσεις προσαρμοσμένες στη διεργασία.",
    },
    materials: ["Application-specific"],
    applications: ["Custom Production", "Process Optimisation"],
    groups: ["Custom Belts", "Custom Discs", "Special Dimensions"],
    accent: "#ff6b2c",
  },
];
