import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLang } from "../lib/i18n";
import { useT } from "../lib/dict";
import { currentDay } from "../lib/currentDay";
import { getAttraction } from "../data/attractions";
import { STOPS, icon, loadNow, load } from "../lib/routeWeather";
import { navigatePage } from "../lib/route";

/* Home header: photo of today's places, "Japan 2026", who's travelling,
 * and the weather where we are right now (by the plan, not GPS). Tapping
 * the weather jumps to the full forecast along the route. */

const FALLBACK = "./images/hero/shibuya-crossing-night.jpg";
const PHOTO_MS = 7000;

function useTodayPhotos(): string[] {
  return useMemo(() => {
    const { day } = currentDay();
    const out: string[] = [];
    for (const a of day.activities) {
      const img = a.attractionId ? getAttraction(a.attractionId)?.image : undefined;
      if (img && !out.includes(img)) out.push(img);
    }
    if (day.leadImage && !out.includes(day.leadImage)) out.push(day.leadImage);
    if (!out.length) return [FALLBACK];
    // The plan card below already shows the first photo; open on the next one.
    return out.length > 1 ? [...out.slice(1), out[0]] : out;
  }, []);
}

function useWeatherHere() {
  const { day } = currentDay();
  const stop = STOPS.find((s) => s.date === day.date) ?? STOPS[0];
  const [now, setNow] = useState<{ temp: number; code: number } | null>(null);
  const [range, setRange] = useState<{ tMax: number; tMin: number } | null>(null);
  useEffect(() => {
    loadNow(stop.lat, stop.lon).then(setNow);
    load()
      .then((all) => {
        const w = all[day.date];
        if (w) setRange({ tMax: w.tMax, tMin: w.tMin });
      })
      .catch(() => {});
  }, [stop.lat, stop.lon, day.date]);
  return { place: stop.place, now, range };
}

export default function HomeHero() {
  const { lang } = useLang();
  const t = useT();
  const he = lang === "he";
  const photos = useTodayPhotos();
  const [idx, setIdx] = useState(0);
  const { place, now, range } = useWeatherHere();

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % photos.length), PHOTO_MS);
    return () => window.clearInterval(id);
  }, [photos]);

  const src = photos[idx] ?? FALLBACK;

  return (
    <header
      id="hero"
      className="relative h-[36svh] min-h-[260px] max-h-[380px] overflow-hidden bg-ink-900 text-cream-50"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={src}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: PHOTO_MS / 1000 + 1.4, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${src}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/10 to-ink-900/80" />

      <div className="relative z-10 h-full max-w-3xl mx-auto px-5 flex flex-col justify-end pb-5">
        <h1 className="!text-cream-50 font-extrabold leading-none text-[52px] sm:text-7xl tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          {he ? "יפן 2026" : "Japan 2026"}
        </h1>
        <div className="mt-2 text-[14px] sm:text-base text-cream-50/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
          {t("families_byline")}
        </div>

        <button
          type="button"
          onClick={() => navigatePage("plan")}
          className="mt-3 self-start inline-flex items-center gap-2.5 rounded-full bg-cream-50/15 backdrop-blur-md ring-1 ring-cream-50/30 ps-3 pe-4 py-2 text-[14px]"
          aria-label={he ? "מזג האוויר לאורך המסלול" : "Weather along the route"}
        >
          <span className="inline-flex items-center gap-1 text-cream-50/90">
            <MapPin size={14} /> {place[lang]}
          </span>
          {now ? (
            <span className="inline-flex items-center gap-1.5 font-bold text-[16px]">
              <span className="[&_svg]:!text-cream-50">{icon(now.code)}</span>
              <span dir="ltr">{now.temp}°</span>
            </span>
          ) : null}
          {range && (
            <span className="text-cream-50/75 text-[13px]" dir="ltr">
              {range.tMax}° / {range.tMin}°
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
