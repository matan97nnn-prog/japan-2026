import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { itinerary } from "../data/itinerary";
import { useLocalizeDay } from "../data/i18n";
import { useLang } from "../lib/i18n";
import { localizeShortDate, localizeWeekday } from "../lib/dict";
import { navigateChapter, navigatePage } from "../lib/route";
import { currentDay } from "../lib/currentDay";
import { dayImage } from "./PlanOverview";

/* The plan as a swipeable strip of day cards. Opens centred on today;
 * arrows step a day back or forward; tapping a card opens that day. */

export default function DayCarousel() {
  const { lang } = useLang();
  const localize = useLocalizeDay();
  const he = lang === "he";
  const { day: today, isToday } = currentDay();
  const scroller = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(today.dayNumber);

  const scrollToDay = (n: number, smooth = true) => {
    const box = scroller.current;
    const el = cards.current[n - 1];
    if (!box || !el) return;
    // Centre the card inside the strip without moving the page vertically.
    const boxRect = box.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta = elRect.left + elRect.width / 2 - (boxRect.left + boxRect.width / 2);
    box.scrollBy({ left: delta, behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    scrollToDay(today.dayNumber, false);
  }, [today.dayNumber]);

  // Card widths follow the screen width, so keep the same day centred on rotate/resize.
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    const onResize = () => scrollToDay(activeRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Track which card is in the middle, for the counter and the arrows.
  useEffect(() => {
    const box = scroller.current;
    if (!box) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.day));
        }
      },
      { root: box, threshold: 0.6 }
    );
    cards.current.forEach((c) => c && io.observe(c));
    return () => io.disconnect();
  }, []);

  const step = (d: number) => scrollToDay(Math.min(itinerary.length, Math.max(1, active + d)));
  // In RTL the "previous" arrow sits on the right.
  const PrevIcon = he ? ChevronRight : ChevronLeft;
  const NextIcon = he ? ChevronLeft : ChevronRight;

  return (
    <section id="trip" className="pt-5 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center gap-2">
        <h2 className="text-[22px] sm:text-3xl text-ink-900">{he ? "התוכנית" : "The plan"}</h2>
        <span className="text-[13px] text-ink-700/60 font-semibold">
          {he ? `יום ${active} מתוך ${itinerary.length}` : `Day ${active} of ${itinerary.length}`}
        </span>
        <div className="flex-1" />
        {active !== today.dayNumber && (
          <button
            onClick={() => scrollToDay(today.dayNumber)}
            className="rounded-full bg-terracotta-600 text-cream-50 px-3 py-1 text-[12.5px] font-bold"
          >
            {isToday ? (he ? "להיום" : "Today") : he ? "ליום 1" : "Day 1"}
          </button>
        )}
        <button
          onClick={() => step(-1)}
          disabled={active <= 1}
          aria-label={he ? "יום קודם" : "Previous day"}
          className="w-8 h-8 rounded-full border border-ink-900/15 bg-cream-50 flex items-center justify-center disabled:opacity-30"
        >
          <PrevIcon size={17} />
        </button>
        <button
          onClick={() => step(1)}
          disabled={active >= itinerary.length}
          aria-label={he ? "יום הבא" : "Next day"}
          className="w-8 h-8 rounded-full border border-ink-900/15 bg-cream-50 flex items-center justify-center disabled:opacity-30"
        >
          <NextIcon size={17} />
        </button>
      </div>

      <div
        ref={scroller}
        className="mt-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-3 px-[11vw] sm:px-[calc(50%-170px)] pb-2" style={{ width: "max-content" }}>
          {itinerary.map((raw, i) => {
            const d = localize(raw);
            const img = dayImage(raw);
            const isNow = isToday && raw.dayNumber === today.dayNumber;
            return (
              <button
                key={raw.dayNumber}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                data-day={raw.dayNumber}
                onClick={() => navigateChapter(raw.dayNumber)}
                className={`snap-center w-[78vw] sm:w-[340px] shrink-0 rounded-2xl overflow-hidden text-start bg-cream-50 border shadow-sm active:scale-[0.99] transition ${
                  isNow ? "border-terracotta-500 ring-2 ring-terracotta-500/30" : "border-ink-900/10"
                }`}
              >
                <div className="relative h-36 bg-cream-200">
                  {img && <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-transparent to-transparent" />
                  <div className="absolute bottom-2 start-3 text-cream-50 flex items-end gap-2">
                    <span className="text-[34px] font-extrabold leading-none">{raw.dayNumber}</span>
                    <span className="pb-1 text-[12.5px] font-semibold leading-tight">
                      {localizeWeekday(raw.weekday, lang)}
                      <br />
                      {localizeShortDate(raw.date, lang)}
                    </span>
                  </div>
                  {isNow && (
                    <span className="absolute top-2 start-2 rounded-full bg-terracotta-500 text-cream-50 px-2.5 py-0.5 text-[12px] font-bold">
                      {he ? "היום" : "Today"}
                    </span>
                  )}
                </div>
                <div className="px-3 py-2.5">
                  <div className="text-[16px] font-bold text-ink-900 leading-snug line-clamp-2 min-h-[2.6em]">{d.title}</div>
                  {d.base && (
                    <div className="mt-1 flex items-center gap-1 text-[12.5px] text-ink-700/70">
                      <MapPin size={12} /> <span className="truncate">{d.base}</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <button onClick={() => navigatePage("plan")} className="mt-1 text-[13px] font-semibold text-terracotta-600">
          {he ? "כל הימים ברשימה" : "All days as a list"}
        </button>
      </div>
    </section>
  );
}
