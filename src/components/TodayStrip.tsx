import { useState } from "react";
import { AlertTriangle, BedDouble, Info, Map, MessageCircle, Navigation, TrainFront, ChevronLeft, ChevronRight } from "lucide-react";
import { dayAlerts } from "../data/dayAlerts";
import { STAY_JA } from "../data/japanese";
import { useLang } from "../lib/i18n";
import { currentDay, stayForNight } from "../lib/currentDay";
import { googleMapsPlaceUrl, scrollToId } from "../lib/nav";
import { navigateChapter, navigatePage } from "../lib/route";
import { TaxiButton } from "./TaxiCard";

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

function TonightHotel({ date }: { date: string }) {
  const { lang } = useLang();
  const he = lang === "he";
  const stay = stayForNight(date);
  if (!stay) return null;
  const ja = STAY_JA[stay.id];
  return <TonightHotelCard stay={stay} ja={ja} he={he} />;
}

function TonightHotelCard({ stay, ja, he }: { stay: NonNullable<ReturnType<typeof stayForNight>>; ja?: { name: string; address: string }; he: boolean }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="rounded-2xl bg-cream-50 border border-ink-900/10 shadow-sm p-3.5 flex items-center gap-3">
      {stay.image && imgOk ? (
        <img src={stay.image} alt="" loading="lazy" onError={() => setImgOk(false)} className="w-14 h-14 rounded-xl object-cover shrink-0 bg-cream-200" />
      ) : (
        <div className="w-14 h-14 rounded-xl bg-cream-200 shrink-0 flex items-center justify-center">
          <BedDouble size={20} className="text-terracotta-600" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] font-semibold text-terracotta-600">{he ? "ישנים הלילה" : "Tonight"}</div>
        <div className="text-[15px] font-bold text-ink-900 leading-snug truncate" dir="ltr" style={{ textAlign: "start" }}>
          {stay.name}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {stay.coords && (
            <a
              href={googleMapsPlaceUrl({ name: stay.name, coords: stay.coords, address: stay.address })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-terracotta-600 text-cream-50 px-2.5 py-1 text-[12px] font-semibold"
            >
              <Navigation size={12} /> {he ? "ניווט" : "Navigate"}
            </a>
          )}
          {ja && <TaxiButton compact name={ja.name} address={ja.address} />}
        </div>
      </div>
    </div>
  );
}

const yenIcon = <span className="text-[17px] font-bold leading-none">¥</span>;

export default function TodayStrip() {
  const { lang } = useLang();
  const he = lang === "he";
  const { day } = currentDay();

  const shortcuts: { label: string; icon: React.ReactNode; onClick: () => void }[] = [
    { label: he ? "שיחון" : "Phrases", icon: <MessageCircle size={19} />, onClick: () => navigatePage("phrases") },
    { label: he ? "ין ↔ ₪" : "¥ ↔ ₪", icon: yenIcon, onClick: () => scrollToId("yen") },
    { label: he ? "תחבורה" : "Transit", icon: <TrainFront size={19} />, onClick: () => navigatePage("transit") },
    { label: he ? "מפה" : "Map", icon: <Map size={19} />, onClick: () => navigatePage("map") },
    {
      label: he ? "חירום" : "Emergency",
      icon: <Info size={19} />,
      onClick: () => {
        navigatePage("info");
        setTimeout(() => scrollToId("emergency"), 120);
      }
    }
  ];

  return (
    <section className="pt-3">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-2.5">
        <TodayAlert dayNumber={day.dayNumber} />
        <TonightHotel date={day.date} />
        <div className="grid grid-cols-5 gap-2">
          {shortcuts.map((s) => (
            <button
              key={s.label}
              onClick={s.onClick}
              className="flex flex-col items-center gap-1 rounded-2xl bg-cream-50 border border-ink-900/10 py-2.5 text-terracotta-600 active:scale-[0.97] transition"
            >
              <span className="h-5 flex items-center">{s.icon}</span>
              <span className="text-[11.5px] font-semibold text-ink-900">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
