import { Cloud, CloudRain, Sun, CloudSun } from "lucide-react";

/* Route weather data: where we are each day, and Open-Meteo loaders. */

type L = { en: string; he: string };
interface Stop { date: string; place: L; lat: number; lon: number }

export const STOPS: Stop[] = [
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

export interface DayWx {
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

export function icon(code: number) {
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

export async function load(): Promise<Record<string, DayWx>> {
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

/** Right-now temperature at a spot, cached 20 minutes (and kept for offline). */
export async function loadNow(lat: number, lon: number): Promise<{ temp: number; code: number } | null> {
  const key = `japan-wx-now-${lat},${lon}`;
  let stale: { temp: number; code: number } | null = null;
  try {
    const c = JSON.parse(localStorage.getItem(key) || "null");
    if (c) {
      stale = c.data;
      if (Date.now() - c.at < 20 * 60 * 1000) return c.data;
    }
  } catch {
    /* ignore */
  }
  try {
    const r = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`
    );
    if (!r.ok) return stale;
    const j = await r.json();
    const data = { temp: Math.round(j.current.temperature_2m), code: j.current.weather_code };
    try {
      localStorage.setItem(key, JSON.stringify({ at: Date.now(), data }));
    } catch {
      /* ignore */
    }
    return data;
  } catch {
    return stale;
  }
}

