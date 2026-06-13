"use client";

import { useMemo, useState } from "react";
import { RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import { filterOptions } from "@/data/filters";
import type { Locale } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

type FilterKey = "workSteps" | "materials" | "machines" | "groups" | "industries";

export function ProductFinder({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const en = locale === "en";
  const [filters, setFilters] = useState<Record<FilterKey, string[]>>({
    workSteps: [],
    materials: [],
    machines: [],
    groups: [],
    industries: [],
  });

  const options: { key: FilterKey; label: string; values: string[] }[] = [
    { key: "workSteps", label: en ? "Work Step" : "Εργασία", values: filterOptions.workSteps },
    { key: "materials", label: en ? "Material" : "Υλικό", values: filterOptions.materials },
    { key: "machines", label: en ? "Machine" : "Μηχάνημα", values: filterOptions.machines },
    { key: "groups", label: en ? "Product Group" : "Ομάδα Προϊόντος", values: [...new Set(products.map((p) => p.group))] },
    { key: "industries", label: en ? "Industry" : "Κλάδος", values: [...new Set(products.flatMap((p) => p.industries))] },
  ];

  const results = useMemo(() => products.filter((product) => {
    const productValues: Record<FilterKey, string[]> = {
      workSteps: product.workSteps,
      materials: product.materials,
      machines: product.machines,
      groups: [product.group],
      industries: product.industries,
    };
    return (Object.keys(filters) as FilterKey[]).every(
      (key) => filters[key].length === 0 || filters[key].some((value) => productValues[key].includes(value)),
    );
  }), [filters]);

  function toggle(key: FilterKey, value: string) {
    setFilters((current) => ({
      ...current,
      [key]: current[key].includes(value) ? current[key].filter((item) => item !== value) : [...current[key], value],
    }));
  }

  const activeCount = Object.values(filters).flat().length;

  return (
    <section id="finder" className={compact ? "" : "py-20 lg:py-28"}>
      <div className={compact ? "" : "container-wide"}>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">{en ? "Application-led selection" : "Επιλογή βάσει εφαρμογής"}</div>
            <h2 className="section-title">{en ? "Find the right abrasive." : "Βρείτε το σωστό λειαντικό."}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
              {en ? "Filter by process, material, machine and product family. Combine criteria to narrow the range." : "Φιλτράρετε ανά εργασία, υλικό, μηχάνημα και οικογένεια προϊόντος. Συνδυάστε κριτήρια για στοχευμένο αποτέλεσμα."}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold"><span className="text-signal">{results.length}</span> {en ? "results" : "αποτελέσματα"}</span>
            <button
              onClick={() => setFilters({ workSteps: [], materials: [], machines: [], groups: [], industries: [] })}
              className="flex items-center gap-2 text-xs text-white/45 transition hover:text-white"
            >
              <RotateCcw size={14} /> {en ? "Reset" : "Επαναφορά"}
            </button>
          </div>
        </div>

        <div className="panel p-4 sm:p-6">
          <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
            <SlidersHorizontal size={15} /> {en ? "Selection criteria" : "Κριτήρια επιλογής"} {activeCount > 0 && <span className="text-signal">({activeCount})</span>}
          </div>
          <div className="grid gap-3 lg:grid-cols-5">
            {options.map((option) => (
              <details key={option.key} className="group relative">
                <summary className="flex cursor-pointer list-none items-center justify-between border border-industrial bg-carbon px-4 py-3 text-sm font-semibold text-white">
                  <span>{option.label}</span>
                  <span className="text-xs text-signal">{filters[option.key].length || "+"}</span>
                </summary>
                <div className="z-20 mt-1 max-h-64 w-full overflow-y-auto border border-border bg-white p-2 shadow-xl lg:absolute">
                  {option.values.map((value) => (
                    <label key={value} className="flex cursor-pointer items-center gap-3 px-2 py-2 text-xs text-carbon/70 hover:bg-softyellow hover:text-carbon">
                      <input
                        type="checkbox"
                        checked={filters[option.key].includes(value)}
                        onChange={() => toggle(option.key, value)}
                        className="accent-[#F5C400]"
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </details>
            ))}
          </div>
          {activeCount > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {(Object.keys(filters) as FilterKey[]).flatMap((key) => filters[key].map((value) => (
                <button key={`${key}-${value}`} onClick={() => toggle(key, value)} className="tag flex items-center gap-2 hover:border-signal">
                  {value} <X size={11} />
                </button>
              )))}
            </div>
          )}
        </div>

        <div className={`mt-8 grid gap-5 ${compact ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}>
          {results.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}
        </div>
        {results.length === 0 && (
          <div className="panel mt-8 p-10 text-center">
            <h3 className="font-display text-xl font-semibold">{en ? "No exact match in the current digital range." : "Δεν υπάρχει ακριβής αντιστοίχιση στην τρέχουσα ψηφιακή γκάμα."}</h3>
            <p className="mt-3 text-sm text-white/50">{en ? "Reset a filter or ask technical sales for an application-specific solution." : "Αφαιρέστε ένα φίλτρο ή ζητήστε εξατομικευμένη τεχνική πρόταση."}</p>
          </div>
        )}
      </div>
    </section>
  );
}
