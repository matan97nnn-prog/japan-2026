import { useEffect, useState } from "react";
import { Check, CloudOff, Star } from "lucide-react";
import { useLang } from "../lib/i18n";
import { FAMILY, TAGS, allRatings, getWho, pendingCount, ratingId, saveRating, setWho, RATINGS_ENDPOINT } from "../lib/ratings";
import type { Day } from "../data/types";

/* "How was today?" at the end of each day: 1–5 stars per stop, a few quick
 * tags, and the day as a whole. One tap per stop, under 30 seconds. */

const DAY_KEY = "__day__";

function Stars({ value, onChange, size = 26 }: { value: number; onChange: (n: number) => void; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n}`}
          className="p-0.5 active:scale-90 transition"
        >
          <Star size={size} className={n <= value ? "fill-gold-400 text-gold-500" : "text-ink-700/25"} />
        </button>
      ))}
    </div>
  );
}

export default function DayRating({ raw, local }: { raw: Day; local: Day }) {
  const { lang } = useLang();
  const he = lang === "he";
  const [who, setWhoState] = useState(getWho);
  const [, bump] = useState(0);
  const [openTags, setOpenTags] = useState<string | null>(null);
  // The note box follows who's rating and which day (reset during render, not in an effect).
  const noteKey = `${who}|${raw.dayNumber}`;
  const savedNote = () => (who ? allRatings()[ratingId(who, raw.dayNumber, DAY_KEY)]?.note ?? "" : "");
  const [noteState, setNoteState] = useState(() => ({ key: noteKey, value: savedNote() }));
  if (noteState.key !== noteKey) setNoteState({ key: noteKey, value: savedNote() });
  const note = noteState.value;
  const setNote = (value: string) => setNoteState({ key: noteKey, value });

  useEffect(() => {
    const id = window.setInterval(() => bump((x) => x + 1), 4000);
    return () => window.clearInterval(id);
  }, []);

  const all = allRatings();
  const get = (stop: string) => (who ? all[ratingId(who, raw.dayNumber, stop)] : undefined);

  const stops = raw.activities
    .map((a, i) => ({ key: a.place, title: local.activities[i]?.title ?? a.title }))
    .filter((s): s is { key: string; title: string } => !!s.key);

  const rate = (stop: string, patch: Partial<{ stars: number; tags: string[]; note: string }>) => {
    if (!who) return;
    const prev = get(stop);
    saveRating({
      who,
      day: raw.dayNumber,
      date: raw.date,
      kind: stop === DAY_KEY ? "day" : "stop",
      stop,
      stars: patch.stars ?? prev?.stars ?? 0,
      tags: patch.tags ?? prev?.tags ?? [],
      note: patch.note ?? prev?.note ?? ""
    });
    bump((x) => x + 1);
  };

  const toggleTag = (stop: string, tag: string) => {
    const cur = get(stop)?.tags ?? [];
    rate(stop, { tags: cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag] });
  };

  const pending = pendingCount();
  const dayStars = get(DAY_KEY)?.stars ?? 0;

  return (
    <section id="rate" className="rounded-2xl bg-cream-50 ring-1 ring-cream-300/70 p-4 sm:p-5 scroll-mt-24">
      <h3 className="text-xl font-bold text-ink-900">{he ? "איך היה היום?" : "How was today?"}</h3>
      <p className="mt-0.5 text-[13.5px] text-ink-700/75">
        {he ? "כוכבים לכל מקום, בלחיצה. עוזר לנו לזכור, ולבנות טיולים טובים יותר." : "Stars for each stop, one tap each."}
      </p>

      {/* Who's rating */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[13px] font-semibold text-ink-700/80 me-1">{he ? "מי מדרג?" : "Who's rating?"}</span>
        {FAMILY.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              setWho(f.id);
              setWhoState(f.id);
            }}
            className={`rounded-full px-3 py-1 text-[13px] font-semibold ${
              who === f.id ? "bg-terracotta-600 text-cream-50" : "bg-cream-100 text-ink-900"
            }`}
          >
            {f[lang]}
          </button>
        ))}
      </div>

      {who && (
        <>
          <ul className="mt-4 divide-y divide-cream-300/60">
            {stops.map((s) => {
              const r = get(s.key);
              return (
                <li key={s.key} className="py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex-1 min-w-0 text-[14.5px] font-semibold text-ink-900 leading-snug">{s.title}</span>
                    <Stars value={r?.stars ?? 0} onChange={(n) => rate(s.key, { stars: n })} size={22} />
                  </div>
                  {r?.stars ? (
                    openTags === s.key ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {TAGS.map((t) => {
                          const on = r.tags.includes(t.id);
                          return (
                            <button
                              key={t.id}
                              onClick={() => toggleTag(s.key, t.id)}
                              className={`rounded-full px-2.5 py-0.5 text-[12.5px] font-medium ring-1 ${
                                on ? "bg-olive-600 text-cream-50 ring-olive-600" : "bg-white text-ink-800 ring-ink-900/15"
                              }`}
                            >
                              {t[lang]}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <button onClick={() => setOpenTags(s.key)} className="mt-1 text-[12.5px] font-semibold text-terracotta-600">
                        {r.tags.length
                          ? TAGS.filter((t) => r.tags.includes(t.id)).map((t) => t[lang]).join(" · ")
                          : he
                          ? "+ תגיות"
                          : "+ tags"}
                      </button>
                    )
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-3 rounded-xl bg-cream-100 p-3">
            <div className="flex items-center gap-2">
              <span className="flex-1 text-[15px] font-bold text-ink-900">{he ? "היום כולו" : "The whole day"}</span>
              <Stars value={dayStars} onChange={(n) => rate(DAY_KEY, { stars: n })} />
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={() => note !== (get(DAY_KEY)?.note ?? "") && rate(DAY_KEY, { note })}
              rows={2}
              placeholder={he ? "משהו לזכור מהיום? (לא חובה)" : "Anything to remember? (optional)"}
              className="mt-2 w-full rounded-lg border border-ink-900/15 bg-white px-3 py-2 text-[14px]"
            />
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-[12.5px] text-ink-700/70">
            {pending > 0 && RATINGS_ENDPOINT ? (
              <>
                <CloudOff size={13} /> {he ? `נשמר בטלפון, יישלח כשתהיה קליטה (${pending})` : `Saved on the phone, will send when online (${pending})`}
              </>
            ) : (
              <>
                <Check size={13} /> {he ? "נשמר" : "Saved"}
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}
