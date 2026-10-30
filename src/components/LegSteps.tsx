import { useState } from "react";
import { ChevronDown, Footprints, ArrowLeftRight, LogOut, CarTaxiFront, Bus, Ticket, Lightbulb, Star } from "lucide-react";
import { legGuides, EXTRA_LINES, type Step } from "../data/legGuides";
import { lineById } from "../data/lines";
import { useLang } from "../lib/i18n";

/* "How exactly": the recommended way for a leg, then numbered steps with
 * the line colour, the end-station to look for and how many stops. */

export function LineBadge({ id, size = "md" }: { id: string; size?: "sm" | "md" }) {
  const l = lineById(id) ?? EXTRA_LINES[id];
  if (!l) return null;
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 rounded-full font-bold text-white ${
        size === "sm" ? "min-w-[26px] h-[26px] px-1.5 text-[11px]" : "min-w-[32px] h-8 px-2 text-[13px]"
      }`}
      style={{ background: l.color }}
      dir="ltr"
    >
      {l.code}
    </span>
  );
}

const ICON = { walk: Footprints, change: ArrowLeftRight, exit: LogOut, taxi: CarTaxiFront, bus: Bus, ticket: Ticket, tip: Lightbulb };

function StepRow({ s, he }: { s: Step; he: boolean }) {
  if (s.k === "ride") {
    const l = lineById(s.line) ?? EXTRA_LINES[s.line];
    const meta = [s.stops ? (he ? `${s.stops} תחנות` : `${s.stops} stops`) : "", s.min ? (he ? `${s.min} דק'` : `${s.min} min`) : ""]
      .filter(Boolean)
      .join(" · ");
    return (
      <li className="flex gap-2.5 rounded-xl bg-white/70 ring-1 ring-ink-900/[0.06] p-2.5">
        <LineBadge id={s.line} />
        <div className="min-w-0 text-[14px] leading-snug">
          <div className="font-bold text-ink-900">{l ? (he ? l.he : l.en) : s.line}</div>
          <div className="text-ink-900" dir="ltr" style={{ textAlign: he ? "right" : "left" }}>
            {s.from} → {s.to}
          </div>
          <div className="mt-0.5 text-ink-700/85">
            {he ? "על השלט ברציף: לכיוון " : "Platform sign: toward "}
            <b dir="ltr">{s.toward}</b> <span lang="ja">{s.towardJa}</span>
          </div>
          {meta && <div className="text-[12.5px] text-ink-700/65">{meta}</div>}
          {s.note && <div className="mt-1 text-[13px] text-amber-800">{he ? s.note.he : s.note.en}</div>}
        </div>
      </li>
    );
  }
  const Icon = ICON[s.k];
  return (
    <li className="flex gap-2.5 px-1 py-1 text-[14px] leading-snug text-ink-900">
      <Icon size={16} className="mt-0.5 shrink-0 text-olive-700" />
      <span>{he ? s.t.he : s.t.en}</span>
    </li>
  );
}

export default function LegSteps({ guideKey }: { guideKey: string }) {
  const { lang } = useLang();
  const he = lang === "he";
  const g = legGuides[guideKey];
  const [open, setOpen] = useState(false);
  if (!g) return null;
  return (
    <div className="mt-2">
      <div className="flex gap-1.5 text-[13.5px] font-semibold text-ink-900 leading-snug">
        <Star size={14} className="mt-0.5 shrink-0 text-terracotta-600" />
        <span>
          {he ? "מומלץ: " : "Best: "}
          {he ? g.best.he : g.best.en}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-olive-700 text-cream-50 px-3 py-1 text-[12.5px] font-bold"
      >
        <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"} />
        {open ? (he ? "סגור" : "Close") : he ? "איך מגיעים בדיוק" : "Exact directions"}
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          <ol className="space-y-1.5">
            {g.steps.map((s, i) => (
              <StepRow key={i} s={s} he={he} />
            ))}
          </ol>
          {g.alt && (
            <p className="text-[13px] text-ink-700/85 leading-snug">
              <b>{he ? "חלופה: " : "Alternative: "}</b>
              {he ? g.alt.he : g.alt.en}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
