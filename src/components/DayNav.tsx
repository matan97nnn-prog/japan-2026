import { useEffect, useRef } from "react";
import { itinerary } from "../data/itinerary";
import { useLang } from "../lib/i18n";
import { navigateChapter } from "../lib/route";
import type { Day } from "../data/types";
import { BedDouble, Route } from "lucide-react";
import { dayRouteUrl, morningStay, nightStay } from "../lib/dayRoute";
import { STAY_JA } from "../data/japanese";
import { TaxiButton } from "./TaxiCard";

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

/* "Today at a glance": a clean timeline. Time | dot | what. Tap a stop to
 * jump to it; hotels at both ends with the taxi card one tap away. */
function HotelRow({ label, name, id }: { label: string; name: string; id: string }) {
  return (
    <li className="grid grid-cols-[3.25rem_1.75rem_1fr_auto] items-center gap-x-2 py-1.5">
      <span className="text-[12px] font-semibold text-ink-700/60">{label}</span>
      <span className="relative z-10 w-7 h-7 rounded-full bg-ink-900 text-cream-50 flex items-center justify-center">
        <BedDouble size={14} />
      </span>
      <span className="min-w-0 truncate text-[14px] font-semibold text-ink-900" dir="ltr" style={{ textAlign: "start" }}>
        {name}
      </span>
      {STAY_JA[id] ? <TaxiButton iconOnly name={STAY_JA[id].name} address={STAY_JA[id].address} /> : <span />}
    </li>
  );
}

export function DayAgenda({ day, raw }: { day: Day; raw: Day }) {
  const { lang } = useLang();
  const he = lang === "he";
  const from = morningStay(raw.date);
  const to = nightStay(raw.date);
  const routeUrl = dayRouteUrl(raw);
  return (
    <section className="rounded-2xl bg-cream-50 ring-1 ring-cream-300/70 p-4 sm:p-5">
      <h3 className="text-xl font-bold text-ink-900">{he ? "היום בקצרה" : "Today at a glance"}</h3>
      <ol className="relative mt-3">
        {/* the timeline rail, behind the dots */}
        <span
          aria-hidden
          className="absolute top-4 bottom-4 w-px bg-ink-900/15"
          style={{ insetInlineStart: "calc(3.25rem + 0.5rem + 0.875rem)" }}
        />
        {from && <HotelRow label={he ? "יציאה" : "Start"} name={from.name} id={from.id} />}
        {day.activities.map((a, i) => {
          const time = a.time?.match(/\d{1,2}:\d{2}/)?.[0] ?? "";
          return (
            <li key={i}>
              <button
                onClick={() => document.getElementById(`stop-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="w-full grid grid-cols-[3.25rem_1.75rem_1fr] items-center gap-x-2 py-1.5 text-start"
              >
                <span className="text-[13px] font-bold text-ink-900 tabular-nums" dir="ltr" style={{ textAlign: "start" }}>
                  {time}
                </span>
                <span
                  className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-[12.5px] font-bold ${
                    a.optional ? "bg-cream-200 text-ink-700 ring-1 ring-ink-900/10" : "bg-terracotta-600 text-cream-50"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`min-w-0 text-[14.5px] leading-snug line-clamp-1 ${a.optional ? "text-ink-700/70" : "text-ink-900 font-semibold"}`}>
                  {a.title}
                  {a.optional && <span className="ms-1.5 text-[11.5px] font-medium text-olive-700">{he ? "לא חובה" : "optional"}</span>}
                </span>
              </button>
            </li>
          );
        })}
        {to && <HotelRow label={he ? "לינה" : "Sleep"} name={to.name} id={to.id} />}
      </ol>
      {routeUrl && (
        <a
          href={routeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-ink-900 text-cream-50 px-4 py-2.5 text-[14px] font-semibold"
        >
          <Route size={16} /> {he ? "כל המסלול של היום בגוגל מפות" : "Today's whole route in Google Maps"}
        </a>
      )}
    </section>
  );
}
