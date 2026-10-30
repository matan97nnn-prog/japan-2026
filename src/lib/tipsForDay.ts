import { tips } from "../data/tips";
import type { Tip } from "../data/types";

/**
 * Map each chapter to the tip ids that are most relevant on that day.
 * Tips not mapped to a day still show in the global "Tips" section of the home page.
 */
const TIP_IDS_PER_DAY: Record<number, string[]> = {
  3: ["cash-still-needed"],
  5: ["nov3-holiday-crowds"],
  6: ["car-pickup-documents", "driving-on-the-left", "takkyubin-shipping-plan"],
  9: ["kamikochi-no-private-cars", "onsen-tattoos"],
  11: ["car-return-kanazawa"],
  13: ["jr-pass-nozomi", "reserve-seats-foliage-season"],
  17: ["jr-pass-nozomi"]
};

export function tipsForDay(dayNumber: number): Tip[] {
  const ids = TIP_IDS_PER_DAY[dayNumber] ?? [];
  return ids
    .map(id => tips.find(t => t.id === id))
    .filter((t): t is Tip => !!t);
}
