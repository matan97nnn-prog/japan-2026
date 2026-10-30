import { AlertTriangle, TrainFront } from "lucide-react";
import { dayAlerts } from "../data/dayAlerts";
import { useLang } from "../lib/i18n";

/* "Heads-up today": closures for this weekday and the last train home.
 * Sits above the day's agenda so it's read before leaving the hotel. */
export default function DayAlerts({ dayNumber }: { dayNumber: number }) {
  const { lang } = useLang();
  const a = dayAlerts[dayNumber];
  if (!a) return null;
  const he = lang === "he";
  return (
    <section className="rounded-2xl bg-amber-50 ring-1 ring-amber-300/70 p-4 sm:p-5 space-y-3">
      {a.closed?.map((c, i) => (
        <div key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-900">
          <AlertTriangle size={17} className="mt-0.5 shrink-0 text-amber-600" />
          <span>{he ? c.he : c.en}</span>
        </div>
      ))}
      {a.lastTrain && (
        <div className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-900">
          <TrainFront size={17} className="mt-0.5 shrink-0 text-amber-600" />
          <span>
            <b>{he ? "רכבת אחרונה: " : "Last train: "}</b>
            {he ? a.lastTrain.he : a.lastTrain.en}
          </span>
        </div>
      )}
    </section>
  );
}
