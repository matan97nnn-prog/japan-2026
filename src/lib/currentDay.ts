import { itinerary } from "../data/itinerary";
import { stays } from "../data/stays";
import type { Day, Stay } from "../data/types";

/* "Where are we in the trip right now", by the phone's own date (phones
 * switch to Japan time on landing). Before the trip → Day 1, after → the
 * last day. */

function localIso(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function currentDay(now = new Date()): { day: Day; isToday: boolean } {
  const iso = localIso(now);
  const hit = itinerary.find((d) => d.date === iso);
  if (hit) return { day: hit, isToday: true };
  if (iso < itinerary[0].date) return { day: itinerary[0], isToday: false };
  return { day: itinerary[itinerary.length - 1], isToday: false };
}

/** The hotel we sleep in on the night of `date` (check-in ≤ date < check-out). */
export function stayForNight(date: string): Stay | undefined {
  return stays.find((s) => s.checkIn && s.checkOut && s.checkIn <= date && date < s.checkOut);
}
