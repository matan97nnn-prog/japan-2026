/* Day and stop ratings. Saved on the phone first (works with no signal),
 * then sent to the family's Google Sheet through a small Apps Script web
 * app whenever there's a connection. Re-rating the same thing overwrites
 * it: each row has a stable id (who | day | stop). */

/** Apps Script web-app URL (Deploy → Web app). Empty = keep on the phone only. */
export const RATINGS_ENDPOINT = "";

export const FAMILY = [
  { id: "eti", he: "אתי", en: "Eti" },
  { id: "ronen", he: "רונן", en: "Ronen" },
  { id: "matan", he: "מתן", en: "Matan" },
  { id: "amit", he: "עמית", en: "Amit" }
] as const;

export const TAGS = [
  { id: "loved", he: "אהבנו מאוד", en: "Loved it" },
  { id: "kids", he: "מתאים לכולם", en: "Fun for all" },
  { id: "crowded", he: "צפוף", en: "Crowded" },
  { id: "early", he: "לבוא מוקדם", en: "Go early" },
  { id: "pricey", he: "יקר", en: "Pricey" },
  { id: "skip", he: "אפשר לוותר", en: "Can skip" }
] as const;

export interface Rating {
  id: string;
  who: string;
  day: number;
  date: string;
  kind: "stop" | "day";
  stop: string;
  stars: number;
  tags: string[];
  note: string;
  rated_at: string;
}

const STORE = "japan-ratings-v1";
const OUTBOX = "japan-ratings-outbox-v1";
const WHO = "japan-ratings-who";

function read<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked: ratings stay in memory for this visit */
  }
}

export const getWho = (): string => read<string>(WHO, "");
export const setWho = (who: string) => write(WHO, who);

export function ratingId(who: string, day: number, stop: string) {
  return `${who}|${day}|${stop}`;
}

export function allRatings(): Record<string, Rating> {
  return read<Record<string, Rating>>(STORE, {});
}

export function saveRating(r: Omit<Rating, "id" | "rated_at">): Rating {
  const full: Rating = { ...r, id: ratingId(r.who, r.day, r.stop), rated_at: new Date().toISOString() };
  const all = allRatings();
  all[full.id] = full;
  write(STORE, all);
  const outbox = read<string[]>(OUTBOX, []);
  if (!outbox.includes(full.id)) outbox.push(full.id);
  write(OUTBOX, outbox);
  void flush();
  return full;
}

export const pendingCount = () => read<string[]>(OUTBOX, []).length;

let flushing = false;
/** Send everything waiting in the outbox. Safe to call any time. */
export async function flush(): Promise<boolean> {
  if (!RATINGS_ENDPOINT || flushing || !navigator.onLine) return false;
  const ids = read<string[]>(OUTBOX, []);
  if (!ids.length) return true;
  flushing = true;
  try {
    const all = allRatings();
    const rows = ids.map((id) => all[id]).filter(Boolean);
    const sentVersion = new Map(rows.map((r) => [r.id, r.rated_at]));
    // Apps Script doesn't send CORS headers: post as plain text, no-cors.
    await fetch(RATINGS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ rows })
    });
    // Keep anything re-rated while we were sending.
    const now = allRatings();
    const left = read<string[]>(OUTBOX, []).filter((id) => sentVersion.get(id) !== now[id]?.rated_at);
    write(OUTBOX, left);
    return true;
  } catch {
    return false;
  } finally {
    flushing = false;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => void flush());
  window.setTimeout(() => void flush(), 3000);
}
