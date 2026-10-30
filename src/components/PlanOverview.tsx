import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { itinerary } from "../data/itinerary";
import { getAttraction } from "../data/attractions";
import { useLocalizeDay } from "../data/i18n";
import { useLang } from "../lib/i18n";
import { localizeShortDate, localizeWeekday } from "../lib/dict";
import { navigateChapter } from "../lib/route";
import { getCurrentOrUpcomingDayNumber } from "../lib/tripState";
import type { Day } from "../data/types";

/* The trip at a glance: one tappable row per day — "Day 4 · Mon 2 Nov",
 * the day's title, where we sleep, and a photo. Tapping opens the day. */

export function dayImage(day: Day): string | undefined {
  for (const a of day.activities) {
    const img = a.attractionId ? getAttraction(a.attractionId)?.image : undefined;
    if (img) return img;
  }
  return day.leadImage;
}

export default function PlanOverview({ id = "trip" }: { id?: string }) {
  const { lang } = useLang();
  const localize = useLocalizeDay();
  const he = lang === "he";
  const today = getCurrentOrUpcomingDayNumber();
  const Arrow = he ? ChevronLeft : ChevronRight;

  return (
    <section id={id} className="relative py-8 sm:py-12 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-[28px] sm:text-4xl text-ink-900">{he ? "תוכנית הטיול" : "The plan"}</h2>
        <p className="mt-1 text-[15px] text-ink-700/75">
          {he ? "יום אחרי יום, לוחצים על יום לתוכנית המלאה" : "Day by day, tap a day for the full plan"}
        </p>
        <ol className="mt-5 space-y-2.5">
          {itinerary.map((raw) => {
            const d = localize(raw);
            const img = dayImage(raw);
            const isToday = raw.dayNumber === today;
            return (
              <li key={raw.dayNumber}>
                <button
                  onClick={() => navigateChapter(raw.dayNumber)}
                  className={`w-full flex items-stretch gap-3 rounded-2xl overflow-hidden text-start bg-cream-50 border shadow-sm active:scale-[0.99] transition ${
                    isToday ? "border-terracotta-500 ring-2 ring-terracotta-500/25" : "border-ink-900/10"
                  }`}
                >
                  <div className="relative w-24 sm:w-32 shrink-0 bg-cream-200">
                    {img && <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent px-2 pb-1.5 pt-5 text-cream-50">
                      <div className="text-[11px] font-semibold leading-none">{he ? "יום" : "Day"}</div>
                      <div className="text-2xl font-extrabold leading-none">{raw.dayNumber}</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 py-3 pe-1">
                    <div className="text-[12.5px] font-semibold text-terracotta-600">
                      {localizeWeekday(raw.weekday, lang)} · {localizeShortDate(raw.date, lang)}
                      {isToday && <span className="ms-2 rounded-full bg-terracotta-500 text-cream-50 px-2 py-0.5 text-[11px]">{he ? "היום" : "Today"}</span>}
                    </div>
                    <div className="mt-0.5 text-[17px] sm:text-lg font-bold text-ink-900 leading-snug">{d.title}</div>
                    {d.base && (
                      <div className="mt-1 flex items-center gap-1 text-[13px] text-ink-700/70">
                        <MapPin size={12} /> {d.base}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center pe-3 text-ink-700/40">
                    <Arrow size={20} />
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
