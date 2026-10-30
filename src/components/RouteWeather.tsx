import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudSun, Sunrise, Sunset, Umbrella, Loader2 } from "lucide-react";
import { useLang } from "../lib/i18n";

/* Forecast along the route: for each trip day, the place we'll actually
 * be, with highs/lows, sunrise/sunset and the hours rain is likely.
 * Open-Meteo, no key. Their forecast reaches ~16 days out, so later
 * days fill in as the trip gets closer. */

type L = { en: string; he: string };
interface Stop { date: string; place: L; lat: number; lon: number }

const STOPS: Stop[] = [
  { date: "2026-10-30", place: { en: "Larnaca", he: "לרנקה" }, lat: 34.92, lon: 33.63 },
  { date: "2026-10-31", place: { en: "Larnaca", he: "לרנקה" }, lat: 34.92, lon: 33.63 },
  { date: "2026-11-01", place: { en: "Tokyo", he: "טוקיו" }, lat: 35.67, lon: 139.77 },
  { date: "2026-11-02", place: { en: "Tokyo", he: "טוקיו" }, lat: 35.67, lon: 139.77 },
  { date: "2026-11-03", place: { en: "Tokyo", he: "טוקיו" }, lat: 35.67, lon: 139.77 },
  { date: "2026-11-04", place: { en: "Hakone", he: "האקונה" }, lat: 35.23, lon: 139.05 },
  { date: "2026-11-05", place: { en: "Kawaguchiko", he: "קאוואגוצ'יקו" }, lat: 35.5, lon: 138.76 },
  { date: "2026-11-06", place: { en: "Matsumoto", he: "מטסומוטו" }, lat: 36.24, lon: 137.97 },
  { date: "2026-11-07", place: { en: "Kamikochi", he: "קמיקוצ'י" }, lat: 36.25, lon: 137.64 },
  { date: "2026-11-08", place: { en: "Takayama", he: "טקאיאמה" }, lat: 36.14, lon: 137.25 },
  { date: "2026-11-09", place: { en: "Shirakawa-go", he: "שירקאווה-גו" }, lat: 36.26, lon: 136.91 },
  { date: "2026-11-10", place: { en: "Kanazawa", he: "קנאזאווה" }, lat: 36.56, lon: 136.66 },
  { date: "2026-11-11", place: { en: "Kyoto", he: "קיוטו" }, lat: 35.0, lon: 135.77 },
  { date: "2026-11-12", place: { en: "Kyoto", he: "קיוטו" }, lat: 35.0, lon: 135.77 },
  { date: "2026-11-13", place: { en: "Kurama", he: "קוראמה" }, lat: 35.12, lon: 135.77 },
  { date: "2026-11-14", place: { en: "Kyoto", he: "קיוטו" }, lat: 35.0, lon: 135.77 },
  { date: "2026-11-15", place: { en: "Tokyo", he: "טוקיו" }, lat: 35.7, lon: 139.79 },
  { date: "2026-11-16", place: { en: "Tokyo", he: "טוקיו" }, lat: 35.7, lon: 139.79 },
  { date: "2026-11-17", place: { en: "Tokyo", he: "טוקיו" }, lat: 35.7, lon: 139.79 }
];

interface DayWx {
  tMax: number;
  tMin: number;
  code: number;
  sunrise: string;
  sunset: string;
  rainMax: number;
  rainHours: string; // e.g. "14–18"
}

const CACHE_KEY = "japan-route-weather-v1";
const TTL = 60 * 60 * 1000;

function icon(code: number) {
  if (code === 0) return <Sun size={18} className="text-gold-500" />;
  if (code <= 2) return <CloudSun size={18} className="text-gold-500" />;
  if (code <= 48) return <Cloud size={18} className="text-ink-700/60" />;
  return <CloudRain size={18} className="text-olive-600" />;
}

/** Collapse the hours with ≥50% rain chance (06–22) into ranges like "9–12, 15–18". */
function rainWindows(times: string[], probs: number[], date: string): string {
  const hours: number[] = [];
  times.forEach((t, i) => {
    if (!t.startsWith(date)) return;
    const h = parseInt(t.slice(11, 13), 10);
    if (h >= 6 && h <= 22 && probs[i] >= 50) hours.push(h);
  });
  const ranges: string[] = [];
  for (let i = 0; i < hours.length; i++) {
    const start = hours[i];
    while (i + 1 < hours.length && hours[i + 1] === hours[i] + 1) i++;
    ranges.push(`${start}–${hours[i] + 1}`);
  }
  return ranges.join(", ");
}

async function load(): Promise<Record<string, DayWx>> {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (c && Date.now() - c.at < TTL) return c.data;
  } catch {
    /* ignore */
  }
  const out: Record<string, DayWx> = {};
  const spots = [...new Map(STOPS.map((s) => [`${s.lat},${s.lon}`, s])).values()];
  await Promise.all(
    spots.map(async (s) => {
      const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${s.lat}&longitude=${s.lon}` +
        `&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,precipitation_probability_max` +
        `&hourly=precipitation_probability&timezone=auto&forecast_days=16`;
      const r = await fetch(url);
      if (!r.ok) return;
      const j = await r.json();
      const days: string[] = j.daily.time;
      for (const stop of STOPS.filter((x) => x.lat === s.lat && x.lon === s.lon)) {
        const i = days.indexOf(stop.date);
        if (i < 0) continue;
        out[stop.date] = {
          tMax: Math.round(j.daily.temperature_2m_max[i]),
          tMin: Math.round(j.daily.temperature_2m_min[i]),
          code: j.daily.weather_code[i],
          sunrise: j.daily.sunrise[i].slice(11, 16),
          sunset: j.daily.sunset[i].slice(11, 16),
          rainMax: j.daily.precipitation_probability_max[i] ?? 0,
          rainHours: rainWindows(j.hourly.time, j.hourly.precipitation_probability, stop.date)
        };
      }
    })
  );
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: out }));
  } catch {
    /* ignore */
  }
  return out;
}

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
    <section id="weather" className="relative pt-8 pb-2 sm:pt-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-[26px] sm:text-3xl text-ink-900">{he ? "מזג אוויר לאורך המסלול" : "Weather along the route"}</h2>
        <div className="mt-4 overflow-x-auto -mx-4 px-4">
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
