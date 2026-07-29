/**
 * Live "family updates" layer — reads a shared Google Sheet that Eti and
 * Ronen (or anyone in the family) can edit directly, no GitHub/code
 * needed. The sheet must be shared as "Anyone with the link can view"
 * for the public gviz CSV endpoint below to work with no auth.
 *
 * Sheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit
 * Tab "Updates" columns: date_start, date_end, city, category, title,
 * details, link.
 *
 * No backend, no rebuild needed — this fetches client-side on page
 * load, so a new row shows up on the live site within seconds of being
 * typed into the sheet.
 */

export const FAMILY_UPDATES_SPREADSHEET_ID =
  "1bAXvK8CRSRcEC_m9aN7vj5wcAooLK7CHNIGYp1Y9hiI";

const SHEET_NAME = "Updates";

const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${FAMILY_UPDATES_SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

export type UpdateCategory =
  | "hotel"
  | "car"
  | "ticket"
  | "recommendation"
  | "market"
  | "note";

export interface FamilyUpdate {
  dateStart: string;
  dateEnd: string;
  city: string;
  category: UpdateCategory | "note";
  title: string;
  details: string;
  link?: string;
}

const CACHE_KEY = "japan-family-updates-v1";
const CACHE_TTL_MS = 5 * 60 * 1000;

/** Minimal RFC-4180 CSV parser — handles quoted fields with embedded
 *  commas, newlines and escaped ("") quotes. Good enough for a small
 *  hand-typed sheet; not a general-purpose CSV library. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter(r => r.some(cell => cell.trim() !== ""));
}

function normalizeCategory(raw: string): UpdateCategory {
  const v = raw.trim().toLowerCase();
  if (v === "hotel" || v === "car" || v === "ticket" || v === "recommendation" || v === "market") {
    return v;
  }
  return "note";
}

function rowsToUpdates(rows: string[][]): FamilyUpdate[] {
  // First row is the header (date_start, date_end, city, category, ...).
  const [, ...dataRows] = rows;
  const updates: FamilyUpdate[] = [];
  for (const r of dataRows) {
    const [dateStart, dateEnd, city, category, title, details, link] = r;
    if (!title?.trim()) continue;
    updates.push({
      dateStart: (dateStart || "").trim(),
      dateEnd: (dateEnd || dateStart || "").trim(),
      city: (city || "").trim(),
      category: normalizeCategory(category || ""),
      title: title.trim(),
      details: (details || "").trim(),
      link: link?.trim() || undefined
    });
  }
  // Chronological — undated notes sort last.
  updates.sort((a, b) => (a.dateStart || "9999").localeCompare(b.dateStart || "9999"));
  return updates;
}

interface CacheShape {
  fetchedAt: number;
  updates: FamilyUpdate[];
}

function readCache(): FamilyUpdate[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CacheShape = JSON.parse(raw);
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return parsed.updates;
  } catch {
    return null;
  }
}

function writeCache(updates: FamilyUpdate[]) {
  try {
    const payload: CacheShape = { fetchedAt: Date.now(), updates };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    /* private mode / quota — silently skip caching */
  }
}

/** Fetch the family updates sheet. Returns [] (never throws) on any
 *  failure — a mis-shared sheet or network hiccup should never break
 *  the rest of the page for visiting family. */
export async function fetchFamilyUpdates(): Promise<FamilyUpdate[]> {
  const cached = readCache();
  if (cached) return cached;

  try {
    const res = await fetch(CSV_URL, { cache: "no-store" });
    if (!res.ok) return [];
    const text = await res.text();
    const updates = rowsToUpdates(parseCsv(text));
    writeCache(updates);
    return updates;
  } catch {
    return [];
  }
}

/** True when `dateISO` (YYYY-MM-DD) falls within the update's range
 *  (inclusive). Used to surface relevant updates on a specific
 *  itinerary day. */
export function updateCoversDate(update: FamilyUpdate, dateISO: string): boolean {
  if (!update.dateStart) return false;
  const end = update.dateEnd || update.dateStart;
  return dateISO >= update.dateStart && dateISO <= end;
}
