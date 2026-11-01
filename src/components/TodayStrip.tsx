import { AlertTriangle, Bath, Star, BedDouble, Compass, Info, MessageCircle, Siren, TrainFront, Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import { dayAlerts } from "../data/dayAlerts";
import { useLang } from "../lib/i18n";
import { currentDay } from "../lib/currentDay";
import { scrollToId } from "../lib/nav";
import { navigateChapter, navigatePage } from "../lib/route";

/* Right under the plan strip: today's heads-up (if any), tonight's hotel
 * with navigate + "show the driver", and a row of shortcuts. */

function TodayAlert({ dayNumber }: { dayNumber: number }) {
  const { lang } = useLang();
  const he = lang === "he";
  const a = dayAlerts[dayNumber];
  if (!a) return null;
  const first = a.closed?.[0];
  const text = first ? first[lang] : a.lastTrain ? `${he ? "רכבת אחרונה: " : "Last train: "}${a.lastTrain[lang]}` : null;
  if (!text) return null;
  const more = (a.closed?.length ?? 0) + (a.lastTrain ? 1 : 0) - 1;
  const Arrow = he ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={() => navigateChapter(dayNumber)}
      className="w-full flex items-start gap-2.5 rounded-2xl bg-amber-50 ring-1 ring-amber-300/70 px-3.5 py-3 text-start"
    >
      {first ? (
        <AlertTriangle size={17} className="mt-0.5 shrink-0 text-amber-600" />
      ) : (
        <TrainFront size={17} className="mt-0.5 shrink-0 text-amber-600" />
      )}
      <span className="flex-1 text-[14px] leading-snug text-ink-900 line-clamp-2">
        {text}
        {more > 0 && <span className="text-ink-700/60"> {he ? `(+${more} נוספות)` : `(+${more} more)`}</span>}
      </span>
      <Arrow size={16} className="mt-0.5 shrink-0 text-ink-700/40" />
    </button>
  );
}

/* The home "go to" widget: every section that isn't already in the
 * bottom tab bar (Home, Plan, Maps). */
export function HomeShortcuts() {
  const { lang } = useLang();
  const he = lang === "he";
  const items: { label: string; icon: React.ReactNode; onClick: () => void }[] = [
    { label: he ? "תחבורה" : "Transport", icon: <TrainFront size={20} />, onClick: () => navigatePage("transit") },
    { label: he ? "שיחון" : "Phrases", icon: <MessageCircle size={20} />, onClick: () => navigatePage("phrases") },
    { label: he ? "אוכל" : "Food", icon: <Utensils size={20} />, onClick: () => navigatePage("food") },
    { label: he ? "מקומות" : "Places", icon: <Compass size={20} />, onClick: () => navigatePage("places") },
    { label: he ? "מלונות" : "Hotels", icon: <BedDouble size={20} />, onClick: () => navigatePage("stays") },
    { label: he ? "אונסן" : "Onsen", icon: <Bath size={20} />, onClick: () => navigatePage("onsen") },
    { label: he ? "טיפים" : "Tips", icon: <Info size={20} />, onClick: () => navigatePage("info") },
    {
      label: he ? "חירום" : "Emergency",
      icon: <Siren size={20} />,
      onClick: () => {
        navigatePage("info");
        setTimeout(() => scrollToId("emergency"), 120);
      }
    }
  ];
  return (
    <section className="pt-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-4 gap-2">
          {items.map((s) => (
            <button
              key={s.label}
              onClick={s.onClick}
              className="flex flex-col items-center gap-1 rounded-2xl bg-cream-50 border border-ink-900/10 py-2.5 text-terracotta-600 active:scale-[0.97] transition"
            >
              <span className="h-6 flex items-center">{s.icon}</span>
              <span className="text-[11.5px] font-semibold text-ink-900 whitespace-nowrap">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* From 18:00 on a trip day: a nudge to rate the day. */
function RateNudge() {
  const { lang } = useLang();
  const he = lang === "he";
  const { day, isToday } = currentDay();
  if (!isToday || new Date().getHours() < 18) return null;
  return (
    <button
      onClick={() => {
        navigateChapter(day.dayNumber);
        setTimeout(() => scrollToId("rate"), 300);
      }}
      className="w-full flex items-center gap-2.5 rounded-2xl bg-cream-50 border border-ink-900/10 shadow-sm px-3.5 py-3 text-start"
    >
      <Star size={18} className="shrink-0 fill-gold-400 text-gold-500" />
      <span className="flex-1 text-[14.5px] font-semibold text-ink-900">
        {he ? `איך היה היום? דרגו את יום ${day.dayNumber}` : `How was today? Rate day ${day.dayNumber}`}
      </span>
    </button>
  );
}

/* Today's heads-up and the evening rating nudge. */
export default function TodayStrip() {
  const { day } = currentDay();
  return (
    <section className="pt-2.5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-2.5">
        <TodayAlert dayNumber={day.dayNumber} />
        <RateNudge />
      </div>
    </section>
  );
}
