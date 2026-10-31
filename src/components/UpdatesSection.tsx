import { useEffect, useState } from "react";
import { Bell, AlertTriangle, CalendarX, PartyPopper, Lightbulb, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { updates, useSeen, isNew, type GroupUpdate } from "../lib/updates";
import { useLang } from "../lib/i18n";
import { navigateChapter, navigatePage } from "../lib/route";

/* "From the group": things worth knowing, picked daily from the Israeli
 * Japan travellers' Facebook group. Bell in the top bar shows the count of
 * new ones; opening this page marks them seen. */

const TYPE = {
  alert: { Icon: AlertTriangle, he: "חשוב", en: "Important", cls: "bg-terracotta-600 text-cream-50" },
  closed: { Icon: CalendarX, he: "סגור / שינוי", en: "Closed / changed", cls: "bg-amber-500 text-white" },
  event: { Icon: PartyPopper, he: "אירוע", en: "Event", cls: "bg-olive-700 text-cream-50" },
  tip: { Icon: Lightbulb, he: "טיפ", en: "Tip", cls: "bg-ink-900/[0.08] text-ink-800" }
} as const;

function fmt(date: string) {
  const [, m, d] = date.split("-");
  return `${+d}.${+m}`;
}

function Item({ u, fresh, he }: { u: GroupUpdate; fresh: boolean; he: boolean }) {
  const t = TYPE[u.type] ?? TYPE.tip;
  return (
    <li className={`rounded-2xl p-4 ring-1 ${fresh ? "bg-amber-50 ring-amber-300" : "bg-cream-50 ring-ink-900/10"}`}>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[12px] font-bold ${t.cls}`}>
          <t.Icon size={12} /> {he ? t.he : t.en}
        </span>
        <span className="text-[12.5px] text-ink-700/60">{fmt(u.date)}</span>
        {fresh && <span className="rounded-full bg-terracotta-600 text-cream-50 px-2 py-0.5 text-[11px] font-bold">{he ? "חדש" : "New"}</span>}
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-900">{he ? u.he : u.en ?? u.he}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {u.day && (
          <button onClick={() => navigateChapter(u.day!)} className="rounded-full bg-cream-100 px-3 py-1 text-[12.5px] font-semibold text-ink-900">
            {he ? `ליום ${u.day}` : `Day ${u.day}`}
          </button>
        )}
        {u.link && (
          <a href={u.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full ring-1 ring-terracotta-500/30 px-3 py-1 text-[12.5px] font-semibold text-terracotta-700">
            <ExternalLink size={12} /> {he ? "לפוסט בקבוצה" : "The post"}
          </a>
        )}
      </div>
    </li>
  );
}

export default function UpdatesSection() {
  const { lang } = useLang();
  const he = lang === "he";
  const [seen, markAll] = useSeen();
  // Keep the "new" highlight for this visit, then mark everything seen.
  const [seenAtOpen] = useState(seen);
  useEffect(() => {
    markAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="flex items-center gap-2 text-3xl text-ink-900">
          <Bell size={26} className="text-terracotta-600" /> {he ? "עדכונים מהקבוצה" : "From the group"}
        </h2>
        <p className="mt-1 text-[14px] text-ink-700/75">
          {he
            ? "פעם ביום עוברים על קבוצת \"יפן - טיפים ועזרה למטיילים\" ומוציאים רק מה שנוגע למסלול שלנו: סגירות, אירועים, שינויים וטיפים. בלי שמות ופרטים אישיים."
            : "Once a day we go through the Israeli Japan travellers' group and keep only what touches our route: closures, events, changes, tips. No names or personal details."}
        </p>
        {updates.length === 0 ? (
          <p className="mt-6 text-ink-700/70">{he ? "אין עדכונים עדיין." : "No updates yet."}</p>
        ) : (
          <ul className="mt-4 space-y-2.5">
            {updates.map((u) => (
              <Item key={u.id} u={u} fresh={isNew(u, seenAtOpen)} he={he} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* Home-page teaser: the latest three, with a "N new" pill. */
export function UpdatesTeaser() {
  const { lang } = useLang();
  const he = lang === "he";
  const [seen] = useSeen();
  if (updates.length === 0) return null;
  const fresh = updates.filter((u) => isNew(u, seen)).length;
  const Arrow = he ? ChevronLeft : ChevronRight;
  return (
    <section className="pt-2.5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => navigatePage("updates")}
          className={`w-full text-start rounded-2xl p-4 shadow-sm ring-1 ${fresh ? "bg-amber-50 ring-amber-300" : "bg-cream-50 ring-ink-900/10"}`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[16px] font-bold text-ink-900">
              <Bell size={18} className="text-terracotta-600" />
              {he ? "עדכונים מהקבוצה" : "From the group"}
              {fresh > 0 && (
                <span className="rounded-full bg-terracotta-600 text-cream-50 px-2 py-0.5 text-[12px] font-bold">
                  {he ? `${fresh} חדשים` : `${fresh} new`}
                </span>
              )}
            </span>
            <Arrow size={18} className="text-ink-700/50" />
          </div>
          <p className="mt-1.5 text-[14px] text-ink-800 leading-snug line-clamp-2">{he ? updates[0].he : updates[0].en ?? updates[0].he}</p>
        </button>
      </div>
    </section>
  );
}
