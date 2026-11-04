import { useEffect, useRef, useState } from "react";
import { PartyPopper, X } from "lucide-react";
import { navigateChapter } from "../lib/route";

/* Dad's 60th (6.11). Hidden until the day: from midnight Tokyo time on
 * 6 November the app opens on a full-screen surprise (fireworks, his
 * photo, the family's greeting), once per device; after that a red banner
 * on home and on the day page reopens it. `?bday=preview` shows it any
 * day, for checking it without spoiling anything. */

const BIRTHDAY = "2026-11-06";
const DAY_NUMBER = 8;
const SEEN_KEY = "japan:bday-seen";
/* Drop his photo at public/images/bday-ronen.jpg; until then a red "60" disc. */
const PHOTO = "./images/bday-ronen.jpg";

const GREETING = [
  "רונן, אבא, בעל, חבר.",
  "ביפן קוראים ליום הולדת 60 קאנרקי: מעגל שלם של חיים נסגר, ומתחיל מעגל חדש. לכן חוגגים אותו באדום, כמו לידה מחדש.",
  "אנחנו חוגגים אותו איתך מול הפוג'י, באמצע הטיול הכי גדול שעשינו יחד, וזה בדיוק המקום. כי אתה זה שתמיד דוחף לצאת, לראות, לטעום, ללכת עוד קצת.",
  "תודה על הסבלנות, על הצחוק, על הדרך שבה אתה דואג לכולנו בלי לעשות מזה עניין.",
  "שהמעגל החדש יהיה מלא בבריאות, בשקט, בהרבה טיולים, ובנו לידך.",
  "אוהבים אותך,",
  "אתי, מתן ועמית"
];

function tokyoDate(): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(new Date());
}

function isPreview(): boolean {
  return typeof window !== "undefined" && new URLSearchParams(window.location.search).get("bday") === "preview";
}

export function useBirthday(): boolean {
  return isPreview() || tokyoDate() === BIRTHDAY;
}

/* ---------- Fireworks ---------- */

function Fireworks() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#FFD166", "#EF476F", "#FF8C42", "#FFFFFF", "#F94144", "#F9C74F"];
    type P = { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number };
    let parts: P[] = [];
    const burst = () => {
      const w = canvas.width, h = canvas.height;
      const x = w * (0.15 + Math.random() * 0.7);
      const y = h * (0.12 + Math.random() * 0.35);
      const color = colors[(Math.random() * colors.length) | 0];
      const n = 70;
      for (let i = 0; i < n; i++) {
        const a = (Math.PI * 2 * i) / n;
        const sp = (1.5 + Math.random() * 2.8) * dpr;
        parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, color, size: (1.4 + Math.random()) * dpr });
      }
    };
    // Confetti falling from the top.
    type C = { x: number; y: number; vy: number; rot: number; vr: number; color: string };
    const confetti: C[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height,
      vy: (1 + Math.random() * 1.8) * dpr,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2,
      color: colors[(Math.random() * colors.length) | 0]
    }));

    let raf = 0;
    let t = 0;
    const tick = () => {
      t++;
      if (t % 38 === 1) burst();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      parts = parts.filter((p) => p.life > 0);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.035 * dpr;
        p.vx *= 0.985;
        p.life -= 0.012;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.9;
      for (const c of confetti) {
        c.y += c.vy;
        c.rot += c.vr;
        if (c.y > canvas.height) {
          c.y = -10;
          c.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.fillStyle = c.color;
        ctx.fillRect(-3 * dpr, -6 * dpr, 6 * dpr, 12 * dpr);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />;
}

/* ---------- The surprise ---------- */

function Photo() {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative mx-auto w-36 h-36 rounded-full ring-4 ring-amber-300 shadow-2xl overflow-hidden bg-gradient-to-br from-red-600 to-red-900">
      {ok ? (
        <img src={PHOTO} alt="" className="w-full h-full object-cover" onError={() => setOk(false)} />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-latin-serif text-6xl font-bold text-amber-200">60</div>
      )}
    </div>
  );
}

function Surprise({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"hello" | "letter">("hello");
  return (
    <div dir="rtl" className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-b from-[#3a0a0a] via-[#7a1010] to-[#2a0505] text-cream-50">
      <Fireworks />
      <button
        onClick={onClose}
        aria-label="סגירה"
        className="fixed top-4 left-4 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center"
      >
        <X size={20} />
      </button>
      <div className="relative min-h-full max-w-md mx-auto px-6 py-14 flex flex-col items-center text-center">
        <div className="text-[13px] tracking-[0.3em] text-amber-200/90">還暦 · KANREKI</div>
        <div className="mt-6">
          <Photo />
        </div>
        <h1 className="mt-6 text-[40px] leading-tight font-extrabold text-white drop-shadow">
          מזל טוב, רונן!
        </h1>
        <div className="mt-1 font-latin-serif text-[72px] leading-none font-bold text-amber-300 drop-shadow">60</div>
        <p className="mt-3 text-[16px] text-cream-50/85">6 בנובמבר 2026 · מול הר פוג'י</p>

        {step === "hello" ? (
          <button
            onClick={() => setStep("letter")}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-300 text-red-900 px-7 py-3.5 text-[17px] font-extrabold shadow-xl active:scale-95 transition"
          >
            <PartyPopper size={20} /> יש לך מכתב מאיתנו
          </button>
        ) : (
          <div className="mt-8 w-full rounded-3xl bg-cream-50 text-ink-900 p-6 text-start shadow-2xl">
            {GREETING.map((line, i) => (
              <p
                key={i}
                className={`text-[16.5px] leading-relaxed ${i > 0 ? "mt-3" : "font-bold text-[18px]"} ${
                  i >= GREETING.length - 2 ? "font-semibold text-red-800" : ""
                }`}
                style={{ color: i >= GREETING.length - 2 ? undefined : "var(--color-ink-900)" }}
              >
                {line}
              </p>
            ))}
            <button
              onClick={() => {
                onClose();
                navigateChapter(DAY_NUMBER);
              }}
              className="mt-6 w-full rounded-full bg-red-700 text-white py-3 text-[15px] font-bold"
            >
              לתוכנית של היום שלך
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* Opens by itself the first time the app is opened on the day. */
export default function Birthday() {
  const active = useBirthday();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!active) return;
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === BIRTHDAY;
    } catch {
      /* private mode: just show it */
    }
    if (!seen || isPreview()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener("bday:open", reopen);
    return () => window.removeEventListener("bday:open", reopen);
  }, [active]);
  if (!active || !open) return null;
  return (
    <Surprise
      onClose={() => {
        try {
          localStorage.setItem(SEEN_KEY, BIRTHDAY);
        } catch {
          /* ignore */
        }
        setOpen(false);
      }}
    />
  );
}

/* Red strip on home and on the birthday's day page; tap to see it again. */
export function BirthdayBanner() {
  if (!useBirthday()) return null;
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-3">
      <button
        onClick={() => window.dispatchEvent(new Event("bday:open"))}
        className="w-full flex items-center gap-3 rounded-2xl bg-gradient-to-l from-red-700 to-red-900 text-white px-4 py-3 shadow-md text-start"
      >
        <span className="text-2xl">🎉</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[16px] font-extrabold">היום אבא בן 60!</span>
          <span className="block text-[13px] text-white/80">קאנרקי, לידה מחדש באדום · לפתוח שוב את ההפתעה</span>
        </span>
        <PartyPopper size={20} className="text-amber-300" />
      </button>
    </div>
  );
}
