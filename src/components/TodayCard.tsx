import { CalendarCheck, Navigation, Clock } from "lucide-react";
import { itinerary } from "../data/itinerary";
import { useLocalizeDay } from "../data/i18n";
import { useLang } from "../lib/i18n";
import { navigateChapter } from "../lib/route";
import { googleMapsDirUrl } from "../lib/nav";
import type { Directions } from "../data/types";

/* During the trip, the home page opens on today: the day's title, what's on
 * now, what's next, and one tap to navigate to the next stop. Hidden before
 * and after the trip. Times are Japan time. */

function tokyoNow() {
  const d = new Date();
  const date = d.toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" });
  const hm = d.toLocaleTimeString("en-GB", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit" });
  return { date, hm };
}

const clock = (t?: string) => t?.match(/(\d{1,2}):(\d{2})/)?.[0]?.padStart(5, "0");

export default function TodayCard() {
  const { lang } = useLang();
  const localize = useLocalizeDay();
  const he = lang === "he";
  const { date, hm } = tokyoNow();
  const raw = itinerary.find((d) => d.date === date);
  if (!raw) return null;
  const day = localize(raw);

  // Index of the next timed stop (first whose time is later than now).
  const acts = raw.activities;
  let next = acts.findIndex((a) => {
    const c = clock(a.time);
    return c !== undefined && c > hm;
  });
  if (next === -1) next = acts.length; // the day's timed stops are done
  const now = next - 1;

  // The leg that leads into the next stop.
  let leg: Directions | undefined;
  if (next === 0) leg = raw.rideToFirst?.dir;
  else if (next < acts.length) leg = acts[next - 1]?.rideToNext?.dir;
  else leg = raw.returnTo?.dir;

  const label = (i: number) => (i >= 0 && i < acts.length ? day.activities[i].title : undefined);

  return (
    <section className="pt-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-terracotta-600 text-cream-50 p-4 sm:p-5 shadow-lg">
          <div className="flex items-center gap-2 text-[13px] font-bold opacity-90">
            <CalendarCheck size={15} />
            {he ? `היום · יום ${raw.dayNumber}` : `Today · Day ${raw.dayNumber}`}
          </div>
          <h2 className="mt-1 text-[22px] sm:text-2xl leading-snug !text-cream-50">{day.title}</h2>

          <div className="mt-3 space-y-1.5 text-[15px]">
            {label(now) && (
              <div className="flex gap-2">
                <span className="font-bold shrink-0">{he ? "עכשיו:" : "Now:"}</span>
                <span>{label(now)}</span>
              </div>
            )}
            {label(next) ? (
              <div className="flex gap-2">
                <span className="font-bold shrink-0">{he ? "הבא:" : "Next:"}</span>
                <span>
                  {label(next)}
                  {clock(acts[next].time) && (
                    <span className="ms-2 inline-flex items-center gap-1 text-[13px] opacity-85" dir="ltr">
                      <Clock size={12} /> {clock(acts[next].time)}
                    </span>
                  )}
                </span>
              </div>
            ) : (
              <div>{he ? "סיימנו את התחנות של היום, חוזרים למלון." : "Done for today, back to the hotel."}</div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {leg && (
              <a
                href={googleMapsDirUrl(leg.from, leg.to, leg.mode)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-cream-50 text-terracotta-700 px-4 py-2 text-[14px] font-bold"
              >
                <Navigation size={15} /> {he ? "ניווט לתחנה הבאה" : "Navigate to next stop"}
              </a>
            )}
            <button
              onClick={() => navigateChapter(raw.dayNumber)}
              className="inline-flex items-center rounded-full border border-cream-50/60 px-4 py-2 text-[14px] font-semibold"
            >
              {he ? "כל היום" : "Full day"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
