import { useEffect, useState } from "react";
import { Headphones, Square } from "lucide-react";
import { useLang } from "../lib/i18n";

/* Reads a text aloud with the phone's own voice (Hebrew or English, by the
 * site language). Works offline on most phones; the iPhone's Hebrew voice
 * is the clearest. */
export default function ListenButton({ text }: { text: string }) {
  const { lang } = useLang();
  const [playing, setPlaying] = useState(false);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => () => {
    if (supported) speechSynthesis.cancel();
  }, [supported]);

  if (!supported) return null;

  const toggle = () => {
    if (playing) {
      speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    speechSynthesis.cancel();
    const code = lang === "he" ? "he" : "en";
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "he" ? "he-IL" : "en-US";
    const voice = speechSynthesis.getVoices().find((v) => v.lang.toLowerCase().startsWith(code));
    if (voice) u.voice = voice;
    u.rate = 0.95;
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
    speechSynthesis.speak(u);
    setPlaying(true);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full bg-olive-700 text-cream-50 px-4 py-2 text-[13.5px] font-semibold"
    >
      {playing ? <Square size={13} /> : <Headphones size={15} />}
      {playing ? (lang === "he" ? "עצור" : "Stop") : lang === "he" ? "האזנה" : "Listen"}
    </button>
  );
}
