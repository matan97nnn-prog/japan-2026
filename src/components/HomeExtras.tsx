import { BedDouble, ChevronLeft, ChevronRight, Compass, ExternalLink, Info, Map, MapPinned, MessageCircle, Utensils } from "lucide-react";
import { stays } from "../data/stays";
import { useLocalizePoi } from "../data/i18n";
import { useLang } from "../lib/i18n";
import { localizeShortDate } from "../lib/dict";
import { navigatePage, type Page } from "../lib/route";
import { LISTS } from "./SavedPlacesSection";
import type { Stay } from "../data/types";

/* Home-page blocks below the plan: the hotels as a swipeable strip, the
 * Google Maps lists, and shortcuts into the other tabs. */

export function HotelsStrip() {
  const { lang } = useLang();
  const localize = useLocalizePoi();
  const he = lang === "he";
  return (
    <section className="py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-[26px] sm:text-3xl text-ink-900">{he ? "איפה ישנים" : "Where we sleep"}</h2>
          <button onClick={() => navigatePage("stays")} className="text-sm font-semibold text-terracotta-600">
            {he ? "כל הפרטים" : "All details"}
          </button>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-3 px-4 sm:px-6 pb-2" style={{ width: "max-content" }}>
          {stays.map((raw) => {
            const s = localize(raw) as Stay;
            return (
              <button
                key={raw.id}
                onClick={() => navigatePage("stays")}
                className="snap-start w-[240px] shrink-0 rounded-2xl overflow-hidden bg-cream-50 border border-ink-900/10 shadow-sm text-start"
              >
                <div className="relative h-28 bg-cream-200">
                  {raw.image && <img src={raw.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
                  {raw.rating && (
                    <span className="absolute top-2 end-2 rounded-md bg-[#003580] text-white px-1.5 py-0.5 text-xs font-bold" dir="ltr">
                      {raw.rating.toFixed(1)}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <div className="text-[12.5px] font-semibold text-terracotta-600">
                    {localizeShortDate(raw.checkIn, lang)} – {localizeShortDate(raw.checkOut, lang)}
                  </div>
                  <div className="mt-0.5 text-[15px] font-bold text-ink-900 leading-snug line-clamp-2" dir="ltr" style={{ textAlign: "start" }}>
                    {raw.name}
                  </div>
                  {s.rooms && <div className="mt-1 text-[12.5px] text-ink-700/75 line-clamp-1">{s.rooms}</div>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MapsLists() {
  const { lang } = useLang();
  const he = lang === "he";
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-ink-900 text-cream-50 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-lg font-bold">
            <MapPinned size={20} className="text-gold-400" />
            {he ? "המפות שלנו בגוגל" : "Our Google Maps lists"}
          </div>
          <div className="text-[14px] text-cream-50/75">
            {he ? "כל ההמלצות, מסעדות, בתי קפה ואטרקציות, עם ביקורות" : "Every recommendation, restaurants, cafés, sights, with reviews"}
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {LISTS.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl bg-cream-50 text-ink-900 px-4 py-3 font-semibold"
              >
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ background: l.color }} />
                  {l.name}
                </span>
                <ExternalLink size={15} className="text-terracotta-600" />
              </a>
            ))}
          </div>
          <button onClick={() => navigatePage("map")} className="mt-3 text-sm font-semibold text-gold-400 underline underline-offset-4">
            {he ? "כל 686 המקומות במפה אחת באתר" : "All 686 places on one map on this site"}
          </button>
        </div>
      </div>
    </section>
  );
}

const TILES: { page: Page; Icon: typeof Map; he: [string, string]; en: [string, string] }[] = [
  { page: "map", Icon: Map, he: ["מפות", "מפת הטיול וכל ההמלצות"], en: ["Maps", "Trip map and every pin"] },
  { page: "food", Icon: Utensils, he: ["אוכל", "מה לאכול ואיפה"], en: ["Food", "What to eat, and where"] },
  { page: "places", Icon: Compass, he: ["מקומות", "המקומות שנבקר בהם"], en: ["Places", "Where we're going"] },
  { page: "stays", Icon: BedDouble, he: ["מלונות", "הזמנות, חדרים, דירוגים"], en: ["Hotels", "Bookings, rooms, ratings"] },
  { page: "phrases", Icon: MessageCircle, he: ["שיחון", "משפטים ביפנית עם שמע"], en: ["Phrases", "Japanese, read aloud"] },
  { page: "info", Icon: Info, he: ["טיפים ומידע", "הערות, רשימות, חירום"], en: ["Tips & info", "Notes, lists, emergency"] }
];

export function HomeTiles() {
  const { lang } = useLang();
  const he = lang === "he";
  const Arrow = he ? ChevronLeft : ChevronRight;
  return (
    <section className="py-6 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {TILES.map(({ page, Icon, he: h, en }) => {
          const [title, sub] = he ? h : en;
          return (
            <button
              key={page}
              onClick={() => navigatePage(page)}
              className="rounded-2xl bg-cream-50 border border-ink-900/10 shadow-sm p-4 text-start active:scale-[0.98] transition"
            >
              <div className="flex items-center justify-between">
                <Icon size={22} className="text-terracotta-600" />
                <Arrow size={16} className="text-ink-700/40" />
              </div>
              <div className="mt-2 text-[16px] font-bold text-ink-900">{title}</div>
              <div className="text-[12.5px] text-ink-700/70 leading-snug">{sub}</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
