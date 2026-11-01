import { useEffect, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { useLang } from "../lib/i18n";

/* Yen ↔ shekel, both ways. Live rate from open.er-api.com (no key), cached
 * for 12 hours; falls back to a recent rate when offline. */
const FALLBACK = 0.024; // ₪ per ¥, Oct 2026 ballpark
const KEY = "japan-jpy-ils-v1";

function useRate(): { rate: number; live: boolean; at?: number } {
  const [state, setState] = useState<{ rate: number; live: boolean; at?: number }>(() => {
    try {
      const c = JSON.parse(localStorage.getItem(KEY) || "null");
      if (c?.rate) return { rate: c.rate, live: true, at: c.at };
    } catch {
      /* ignore */
    }
    return { rate: FALLBACK, live: false };
  });
  useEffect(() => {
    let fresh = false;
    try {
      const c = JSON.parse(localStorage.getItem(KEY) || "null");
      fresh = c && Date.now() - c.at < 12 * 3600 * 1000;
    } catch {
      /* ignore */
    }
    if (fresh) return;
    fetch("https://open.er-api.com/v6/latest/JPY")
      .then((r) => r.json())
      .then((j) => {
        const rate = j?.rates?.ILS;
        if (typeof rate === "number") {
          setState({ rate, live: true, at: Date.now() });
          try {
            localStorage.setItem(KEY, JSON.stringify({ rate, at: Date.now() }));
          } catch {
            /* ignore */
          }
        }
      })
      .catch(() => {});
  }, []);
  return state;
}

export default function YenConverter() {
  const { lang } = useLang();
  const he = lang === "he";
  const { rate, live, at } = useRate();
  const fmtAt = at
    ? new Date(at).toLocaleString(he ? "he-IL" : "en-GB", { day: "numeric", month: "numeric", hour: "2-digit", minute: "2-digit" })
    : "";
  const [yen, setYen] = useState("1000");
  const [ils, setIls] = useState(() => (1000 * rate).toFixed(0));

  useEffect(() => {
    const y = parseFloat(yen);
    if (!isNaN(y)) setIls((y * rate).toFixed(y * rate < 10 ? 1 : 0));
  }, [rate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="yen" className="pt-2.5 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-cream-50 border border-ink-900/10 shadow-sm px-3.5 py-3">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[14.5px] font-bold text-ink-900">{he ? "ין ↔ שקל" : "Yen ↔ shekel"}</span>
            <span className="text-[12px] text-ink-700/55 text-end">
              <span dir="ltr">¥1,000 ≈ ₪{(1000 * rate).toFixed(1)}</span>
              <span className="block text-[11px]">
                {live ? (he ? `שער עדכני · ${fmtAt}` : `Live rate · ${fmtAt}`) : he ? "שער משוער (אין חיבור)" : "Approximate rate (offline)"}
              </span>
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2" dir="ltr">
            <label className="flex-1 flex items-center rounded-xl border border-ink-900/15 bg-white px-3">
              <span className="text-ink-700/60 font-bold">¥</span>
              <input
                inputMode="decimal"
                value={yen}
                onChange={(e) => {
                  setYen(e.target.value);
                  const y = parseFloat(e.target.value);
                  setIls(isNaN(y) ? "" : (y * rate).toFixed(y * rate < 10 ? 1 : 0));
                }}
                className="w-full py-2 px-2 text-[17px] font-semibold outline-none bg-transparent"
              />
            </label>
            <ArrowLeftRight size={18} className="text-ink-700/40 shrink-0" />
            <label className="flex-1 flex items-center rounded-xl border border-ink-900/15 bg-white px-3">
              <span className="text-ink-700/60 font-bold">₪</span>
              <input
                inputMode="decimal"
                value={ils}
                onChange={(e) => {
                  setIls(e.target.value);
                  const s = parseFloat(e.target.value);
                  setYen(isNaN(s) ? "" : Math.round(s / rate).toString());
                }}
                className="w-full py-2 px-2 text-[17px] font-semibold outline-none bg-transparent"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
