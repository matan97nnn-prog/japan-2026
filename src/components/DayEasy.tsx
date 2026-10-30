import { useState } from "react";
import { Footprints, BatteryLow, Mountain, ChevronDown } from "lucide-react";
import { dayEasy, steps } from "../data/dayEasy";
import { useLang } from "../lib/i18n";

/* How hard today is on the legs, and the light version of the day. */
export default function DayEasy({ dayNumber }: { dayNumber: number }) {
  const { lang } = useLang();
  const he = lang === "he";
  const [open, setOpen] = useState(false);
  const e = dayEasy[dayNumber];
  if (!e) return null;
  const level = e.km >= 11 ? 3 : e.km >= 7 ? 2 : 1;
  const label = he ? ["קל", "בינוני", "כבד"][level - 1] : ["Easy", "Medium", "Hard"][level - 1];

  return (
    <section className="rounded-2xl bg-cream-50 ring-1 ring-cream-300/80 p-4 sm:p-5">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 text-[15px] font-bold text-ink-900">
          <Footprints size={17} className="text-terracotta-600" />
          {he ? `כ-${e.km} ק"מ · כ-${steps(e.km).toLocaleString()} צעדים` : `≈ ${e.km} km · ≈ ${steps(e.km).toLocaleString()} steps`}
        </div>
        <div className="flex items-center gap-1" aria-label={label}>
          {[1, 2, 3].map((n) => (
            <span key={n} className={`h-2 w-5 rounded-full ${n <= level ? (level === 3 ? "bg-terracotta-600" : level === 2 ? "bg-amber-500" : "bg-olive-500") : "bg-ink-900/10"}`} />
          ))}
          <span className="ms-1 text-[13px] font-semibold text-ink-700/80">{label}</span>
        </div>
      </div>
      {e.climb && (
        <div className="mt-2 flex gap-1.5 text-[13.5px] text-ink-700/90">
          <Mountain size={15} className="mt-0.5 shrink-0 text-ink-700/60" />
          {he ? e.climb.he : e.climb.en}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 w-full flex items-center justify-between rounded-xl bg-amber-100 ring-1 ring-amber-300 px-3.5 py-2.5 text-[15px] font-bold text-amber-900"
      >
        <span className="flex items-center gap-2">
          <BatteryLow size={18} />
          {he ? "אם התעייפנו: הגרסה הקלה" : "If we're tired: the light version"}
        </span>
        <ChevronDown size={18} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open && (
        <div className="mt-3 space-y-2.5 text-[14.5px] leading-relaxed">
          <div>
            <div className="font-bold text-ink-900">{he ? "מוותרים קודם על:" : "Drop first:"}</div>
            <ol className="mt-1 space-y-1">
              {e.skip.map((s, i) => (
                <li key={i} className="flex gap-2 text-ink-800">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-[12px] font-bold flex items-center justify-center">{i + 1}</span>
                  <span>{he ? s.he : s.en}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <span className="font-bold text-ink-900">{he ? "נשאר: " : "Keep: "}</span>
            <span className="text-ink-800">{he ? e.keep.he : e.keep.en}</span>
          </div>
        </div>
      )}
    </section>
  );
}
