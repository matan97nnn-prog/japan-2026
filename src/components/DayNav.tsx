import { useEffect, useRef } from "react";
import { itinerary } from "../data/itinerary";
import { useLang } from "../lib/i18n";
import { navigateChapter } from "../lib/route";
import type { Day } from "../data/types";
import { BedDouble, Route } from "lucide-react";
import { dayRouteUrl, morningStay, nightStay } from "../lib/dayRoute";

/* Sticky row of day chips (יום 1 … יום 19) on the day page, so moving
 * between days is one tap — the current day stays scrolled into view. */
export function DayChips({ current }: { current: number }) {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelector<HTMLElement>(`[data-day="${current}"]`)?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [current]);
  return (
    <div ref={ref} className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-1.5 px-4 sm:px-6 py-2" style={{ width: "max-content" }}>
        {itinerary.map((d) => {
          const dt = new Date(d.date + "T12:00:00");
          const active = d.dayNumber === current;
          return (
            <button
              key={d.dayNumber}
              data-day={d.dayNumber}
              onClick={() => navigateChapter(d.dayNumber)}
              className={`shrink-0 rounded-xl px-3 py-1.5 text-center leading-tight transition ${
                active ? "bg-terracotta-600 text-cream-50 shadow" : "bg-cream-100 text-ink-800"
              }`}
            >
              <div className="text-[13px] font-bold">{lang === "he" ? `יום ${d.dayNumber}` : `Day ${d.dayNumber}`}</div>
              <div className={`text-[11px] ${active ? "text-cream-50/85" : "text-ink-700/60"}`}>
                {dt.getDate()}.{dt.getMonth() + 1}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* "Today at a glance" — the day's stops in order, each a tap away. */
export function DayAgenda({ day, raw }: { day: Day; raw: Day }) {
  const { lang } = useLang();
  const he = lang === "he";
  const from = morningStay(raw.date);
  const to = nightStay(raw.date);
  const routeUrl = dayRouteUrl(raw);
  const HotelRow = ({ label, name }: { label: string; name: string }) => (
    <li className="flex items-center gap-3">
      <span className="shrink-0 w-7 h-7 rounded-full bg-ink-900 text-cream-50 flex items-center justify-center">
        <BedDouble size={14} />
      </span>
      <span className="w-14 shrink-0 text-[12.5px] font-semibold text-ink-700/70">{label}</span>
      <span className="flex-1 text-[14px] font-semibold text-ink-900" dir="ltr" style={{ textAlign: "start" }}>{name}</span>
    </li>
  );
  return (
    <section className="rounded-2xl bg-cream-50 ring-1 ring-cream-300/70 p-4 sm:p-5">
      <h3 className="text-xl font-bold text-ink-900">{he ? "היום בקצרה" : "Today at a glance"}</h3>
      <ol className="mt-3 space-y-2">
        {from && <HotelRow label={he ? "יציאה" : "Start"} name={from.name} />}
        {day.activities.map((a, i) => (
          <li key={i}>
            <button
              onClick={() =>
                document.getElementById(`stop-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="w-full flex items-center gap-3 text-start"
            >
              <span
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold ${
                  a.optional ? "bg-cream-200 text-ink-700" : "bg-terracotta-600 text-cream-50"
                }`}
              >
                {i + 1}
              </span>
              <span className="w-14 shrink-0 text-[13px] font-semibold text-ink-700/70" dir="ltr" style={{ textAlign: "start" }}>
                {a.time && /\d/.test(a.time) ? a.time : ""}
              </span>
              <span className={`flex-1 text-[15px] leading-snug ${a.optional ? "text-ink-700/70" : "text-ink-900 font-semibold"}`}>
                {a.title}
                {a.optional && <span className="ms-1.5 text-[11px] font-medium text-olive-700">{he ? "(אופציונלי)" : "(optional)"}</span>}
              </span>
            </button>
          </li>
        ))}
        {to && <HotelRow label={he ? "לינה" : "Sleep"} name={to.name} />}
      </ol>
      {routeUrl && (
        <a
          href={routeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-ink-900 text-cream-50 px-4 py-2.5 text-[14px] font-semibold"
        >
          <Route size={16} /> {he ? "כל המסלול של היום בגוגל מפות" : "Today's whole route in Google Maps"}
        </a>
      )}
    </section>
  );
}
