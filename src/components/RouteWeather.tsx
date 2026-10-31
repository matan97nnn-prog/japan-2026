import { useEffect, useState } from "react";
import { Sunrise, Sunset, Umbrella, Loader2 } from "lucide-react";
import { STOPS, icon, load, type DayWx } from "../lib/routeWeather";
import { useLang } from "../lib/i18n";

/* Forecast along the route: for each trip day, the place we'll actually
 * be, with highs/lows, sunrise/sunset and the hours rain is likely.
 * Open-Meteo, no key. Their forecast reaches ~16 days out, so later
 * days fill in as the trip gets closer. */

export default function RouteWeather() {
  const { lang } = useLang();
  const he = lang === "he";
  const [wx, setWx] = useState<Record<string, DayWx> | null>(null);
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" });

  useEffect(() => {
    load().then(setWx).catch(() => setWx({}));
  }, []);

  // Show from today (or the trip start) onward.
  const rows = STOPS.filter((s) => s.date >= today || today < STOPS[0].date);

  return (
    <section id="weather" className="relative pt-7 sm:pt-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-[22px] sm:text-3xl text-ink-900">{he ? "מזג אוויר לאורך המסלול" : "Weather along the route"}</h2>
        <div className="mt-3 overflow-x-auto -mx-4 px-4">
          <div className="flex gap-2.5 pb-2" style={{ minWidth: "max-content" }}>
            {rows.map((s) => {
              const w = wx?.[s.date];
              const d = new Date(s.date + "T12:00:00");
              const label = `${d.getDate()}.${d.getMonth() + 1}`;
              return (
                <div
                  key={s.date}
                  className={`w-[150px] shrink-0 rounded-2xl p-3 border ${
                    s.date === today ? "bg-terracotta-500/10 border-terracotta-500/40" : "bg-cream-50 border-ink-900/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-ink-900">{label}</span>
                    {w ? icon(w.code) : wx === null ? <Loader2 size={14} className="animate-spin text-ink-700/40" /> : null}
                  </div>
                  <div className="text-[12px] text-ink-700/75">{s.place[lang]}</div>
                  {w ? (
                    <>
                      <div className="mt-1.5 font-serif text-lg text-ink-900">
                        {w.tMax}° <span className="text-ink-700/50 text-sm">/ {w.tMin}°</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[11.5px] text-ink-700/75" dir="ltr">
                        <Sunrise size={12} /> {w.sunrise} <Sunset size={12} className="ms-1" /> {w.sunset}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[11.5px] text-olive-700">
                        <Umbrella size={12} />
                        {w.rainHours ? <span dir="ltr">{w.rainHours}</span> : he ? `${w.rainMax}%, יבש` : `${w.rainMax}%, dry`}
                      </div>
                    </>
                  ) : (
                    <div className="mt-2 text-[11.5px] text-ink-700/50">
                      {wx === null ? "" : he ? "תחזית בקרוב" : "Forecast soon"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
