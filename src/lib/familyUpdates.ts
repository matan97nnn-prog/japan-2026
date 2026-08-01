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

/** Google Sheets auto-detects anything that looks like a date typed
 *  into a cell and silently converts it to its own date type — the
 *  CSV export then returns a serial day-count (epoch 1899-12-30)
 *  instead of the "YYYY-MM-DD" text that was actually typed. There's
 *  no column-formatting control available to stop this at the source,
 *  so we detect and convert it back here. Plain "YYYY-MM-DD" text
 *  (e.g. if a cell is formatted as Plain text) passes through as-is. */
/** The trip's own year — used to fill in a year when someone types a
 *  shorthand day-month date like "20-11" instead of the full
 *  "2026-11-20". Every date on this trip falls in this year, so it's
 *  a safe assumption rather than a guess. */
const TRIP_YEAR = 2026;

function parseSheetDate(raw: string): string {
  const v = raw.trim();
  if (!v) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  // "D-M-YYYY" / "DD-MM-YYYY" — day-month-year, the usual Israeli
  // written order, with an explicit year.
  const withYear = v.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (withYear) {
    const day = withYear[1].padStart(2, "0");
    const month = withYear[2].padStart(2, "0");
    return `${withYear[3]}-${month}-${day}`;
  }
  // Shorthand "D-M" or "DD-MM" (day first, matching how it's typically
  // typed in Israel) with no year — assume the trip year.
  const shorthand = v.match(/^(\d{1,2})-(\d{1,2})$/);
  if (shorthand) {
    const day = shorthand[1].padStart(2, "0");
    const month = shorthand[2].padStart(2, "0");
    return `${TRIP_YEAR}-${month}-${day}`;
  }
  if (/^\d+$/.test(v)) {
    const serial = parseInt(v, 10);
    const ms = Date.UTC(1899, 11, 30) + serial * 86400000;
    const d = new Date(ms);
    if (!Number.isNaN(d.getTime())) {
      return d.toISOString().slice(0, 10);
    }
  }
  // Last resort — let the browser try (handles things like "11/16/2026").
  const parsed = new Date(v);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }
  return "";
}

function rowsToUpdates(rows: string[][]): FamilyUpdate[] {
  // First row is the header (date_start, date_end, city, category, ...).
  const [, ...dataRows] = rows;
  const updates: FamilyUpdate[] = [];
  for (const r of dataRows) {
    const [dateStartRaw, dateEndRaw, city, category, title, details, link] = r;
    const dateStart = parseSheetDate(dateStartRaw || "");
    const dateEnd = parseSheetDate(dateEndRaw || "") || dateStart;
    if (!title?.trim()) continue;
    updates.push({
      dateStart,
      dateEnd,
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
