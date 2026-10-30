import { useMemo, useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { savedPlaces, type SavedPlaceRow } from "../data/savedPlaces";
import { getAttraction } from "../data/attractions";
import { morningStay, nightStay } from "../lib/dayRoute";
import { useLang } from "../lib/i18n";
import GoogleReviewsLink from "./GoogleReviewsLink";
import type { Day } from "../data/types";

/* "From our lists, near today's route": the friends' Google Maps picks that
 * sit within ~1.2 km of today's stops or hotels, closest first. */
const RADIUS_KM = 1.2;
const SHOW = 6;

function km(a: [number, number], b: [number, number]) {
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLon / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
}

const placeUrl = (r: SavedPlaceRow) =>
  r[5] ? `https://www.google.com/maps?cid=${r[5]}` : `https://www.google.com/maps/search/?api=1&query=${r[3]},${r[4]}`;

export default function NearbySaved({ day }: { day: Day }) {
  const { lang } = useLang();
  const he = lang === "he";
  const [all, setAll] = useState(false);

  const nearby = useMemo(() => {
    const points: [number, number][] = [];
    for (const a of day.activities) {
      const p = a.attractionId ? getAttraction(a.attractionId) : undefined;
      if (p) points.push(p.coords);
    }
    const am = morningStay(day.date);
    const pm = nightStay(day.date);
    if (am) points.push(am.coords);
    if (pm) points.push(pm.coords);
    if (points.length === 0) return [];
    return savedPlaces
      .map((r) => ({ r, d: Math.min(...points.map((p) => km(p, [r[3], r[4]]))) }))
      .filter((x) => x.d <= RADIUS_KM)
      .sort((a, b) => a.d - b.d);
  }, [day]);

  if (nearby.length === 0) return null;
  const list = all ? nearby : nearby.slice(0, SHOW);

  return (
    <section className="rounded-2xl bg-cream-50 ring-1 ring-cream-300/70 p-5 sm:p-6">
      <div className="flex items-center gap-2 text-[12px] font-bold text-terracotta-600">
        <Heart size={13} /> {he ? "מהרשימות של החברים" : "From our friends' lists"}
      </div>
      <h3 className="mt-1 text-xl sm:text-2xl text-ink-900">
        {he ? `ליד המסלול היום (${nearby.length})` : `Near today's route (${nearby.length})`}
      </h3>
      <ul className="mt-3 divide-y divide-ink-900/[0.07]">
        {list.map(({ r, d }, i) => (
          <li key={i} className="py-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-ink-900 text-[15px]">{r[0]}</span>
              <span className="shrink-0 text-[12px] text-ink-700/55">
                {d < 1 ? `${Math.round(d * 1000)} ${he ? "מ'" : "m"}` : `${d.toFixed(1)} ${he ? "ק\"מ" : "km"}`}
              </span>
            </div>
            {r[1] && <p className="mt-0.5 text-[13.5px] text-ink-700/80">{r[1]}</p>}
            <GoogleReviewsLink href={placeUrl(r)} />
          </li>
        ))}
      </ul>
      {nearby.length > SHOW && (
        <button
          onClick={() => setAll((v) => !v)}
          className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-terracotta-600"
        >
          <ChevronDown size={16} className={all ? "rotate-180" : ""} />
          {all ? (he ? "פחות" : "Less") : he ? `הצג את כל ה-${nearby.length}` : `Show all ${nearby.length}`}
        </button>
      )}
    </section>
  );
}
