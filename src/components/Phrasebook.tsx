import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Volume2, Maximize2, X } from "lucide-react";
import { phraseGroups, type Phrase } from "../data/phrases";
import { useLang } from "../lib/i18n";

/* Pocket phrasebook: tap the speaker and the phone says it in Japanese
 * (the device's own ja-JP voice, works offline on most phones), or open
 * it full screen to show the person in front of you. */

function useJapaneseVoice() {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  useEffect(() => {
    if (!supported) return;
    const pick = () => setVoice(speechSynthesis.getVoices().find((v) => v.lang.replace("_", "-").startsWith("ja")) ?? null);
    pick();
    speechSynthesis.addEventListener("voiceschanged", pick);
    return () => speechSynthesis.removeEventListener("voiceschanged", pick);
  }, [supported]);
  const speak = (text: string) => {
    if (!supported) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace("／", "、"));
    u.lang = "ja-JP";
    if (voice) u.voice = voice;
    u.rate = 0.85;
    speechSynthesis.speak(u);
  };
  return { supported, hasVoice: !!voice, speak };
}

export default function Phrasebook() {
  const { lang } = useLang();
  const he = lang === "he";
  const { supported, hasVoice, speak } = useJapaneseVoice();
  const [group, setGroup] = useState(phraseGroups[0].id);
  const [big, setBig] = useState<Phrase | null>(null);
  const current = phraseGroups.find((g) => g.id === group)!;

  return (
    <section className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl text-ink-900">{he ? "שיחון" : "Phrasebook"}</h2>
        <p className="mt-1 text-[14px] text-ink-700/75">
          {he ? "🔊 משמיע ביפנית · ⤢ מציג בגדול כדי להראות" : "🔊 says it in Japanese · ⤢ shows it big"}
        </p>
        {supported && !hasVoice && (
          <p className="mt-2 text-[13px] text-amber-700">
            {he
              ? "לא נמצא קול יפני בטלפון. באייפון: הגדרות ← נגישות ← תוכן מדובר ← קולות ← יפנית."
              : "No Japanese voice on this device. On iPhone: Settings → Accessibility → Spoken Content → Voices → Japanese."}
          </p>
        )}

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {phraseGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setGroup(g.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-semibold ${
                g.id === group ? "bg-terracotta-600 text-cream-50" : "bg-cream-50 border border-ink-900/15 text-ink-900"
              }`}
            >
              {he ? g.he : g.en}
            </button>
          ))}
        </div>

        <ul className="mt-4 space-y-2.5">
          {current.phrases.map((p) => (
            <li key={p.ja} className="rounded-2xl bg-cream-50 border border-ink-900/10 shadow-sm p-4 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-[16px] font-bold text-ink-900">{he ? p.he : p.en}</div>
                <div className="mt-1 text-[20px] text-ink-900" lang="ja">
                  {p.ja}
                </div>
                <div className="mt-0.5 text-[13.5px] text-ink-700/70">{he ? p.heSay : p.romaji}</div>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                {supported && (
                  <button
                    aria-label={he ? "השמע" : "Play"}
                    onClick={() => speak(p.ja)}
                    className="w-11 h-11 rounded-full bg-terracotta-600 text-cream-50 flex items-center justify-center active:scale-95"
                  >
                    <Volume2 size={20} />
                  </button>
                )}
                <button
                  aria-label={he ? "הצג בגדול" : "Show big"}
                  onClick={() => setBig(p)}
                  className="w-11 h-11 rounded-full border border-ink-900/20 text-ink-900 flex items-center justify-center active:scale-95"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {big &&
        createPortal(
          <div className="fixed inset-0 z-[9500] bg-white flex flex-col" onClick={() => setBig(null)}>
            <div className="flex justify-end p-4">
              <button aria-label="close" className="w-11 h-11 rounded-full bg-ink-900/10 flex items-center justify-center">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div lang="ja" className="text-[44px] sm:text-6xl font-bold leading-tight text-black break-words">
                {big.ja}
              </div>
              <div className="mt-6 text-xl text-black/60">{he ? big.he : big.en}</div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
