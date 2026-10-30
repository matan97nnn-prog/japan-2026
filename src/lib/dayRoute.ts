import { stays } from "../data/stays";
import type { Day, Stay } from "../data/types";

/** Where we woke up this morning (last night's stay), if any. */
export function morningStay(date: string): Stay | undefined {
  return stays.find((s) => s.checkIn < date && date <= s.checkOut);
}

/** Where we sleep tonight, if any. */
export function nightStay(date: string): Stay | undefined {
  return stays.find((s) => s.checkIn <= date && date < s.checkOut);
}

/** The day's stops in travel order, read off the Google-Maps legs:
 *  morning hotel → first stop → … → tonight's hotel. */
export function dayStops(day: Day): string[] {
  const out: string[] = [];
  const push = (name?: string) => {
    if (name && out[out.length - 1] !== name) out.push(name);
  };
  const leg = (d?: { from: string; to: string }) => {
    if (!d) return;
    push(d.from);
    push(d.to);
  };
  leg(day.rideToFirst?.dir);
  // "Option" rows are alternatives to the day, not part of its route.
  for (const a of day.activities) if (a.time !== "Option") leg(a.rideToNext?.dir);
  leg(day.returnTo?.dir);
  return out;
}

/** One Google Maps link for the whole day. Google allows waypoints for
 *  driving/walking (not transit), so city days open as an overview and
 *  each leg's own link gives the exact train route. */
export function dayRouteUrl(day: Day): string | null {
  const stops = dayStops(day);
  if (stops.length < 3) return null;
  const q = (s: string) => encodeURIComponent(/japan|cyprus/i.test(s) ? s : `${s}, Japan`);
  const driving = [day.rideToFirst, ...day.activities.map((a) => a.rideToNext), day.returnTo].some(
    (l) => l?.dir?.mode === "driving"
  );
  const waypoints = stops.slice(1, -1).slice(0, 8).map(q).join("%7C");
  return (
    `https://www.google.com/maps/dir/?api=1&origin=${q(stops[0])}&destination=${q(stops[stops.length - 1])}` +
    `&waypoints=${waypoints}&travelmode=${driving ? "driving" : "walking"}`
  );
}
