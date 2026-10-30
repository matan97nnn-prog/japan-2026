import { Camera, Shuffle, BookOpen } from "lucide-react";
import type { Day } from "../data/types";
import { useLang } from "../lib/i18n";

/* The three closing cards of a chapter: Dad's photo spots, the day's
 * optional extras, and a short "about Japan" recap. */
export default function DayExtras({ day }: { day: Day }) {
  const { lang } = useLang();
  const he = lang === "he";
  return (
    <>
      {day.alternatives && day.alternatives.length > 0 && (
        <Card Icon={Shuffle} eyebrow={he ? "אופציות" : "Options"} title={he ? "אם מתחשק עוד" : "If you feel like more"}>
          <Bullets items={day.alternatives} />
        </Card>
      )}
      {day.photoTips && day.photoTips.length > 0 && (
        <Card Icon={Camera} eyebrow={he ? "לאבא" : "For Dad"} title={he ? "טיפים לצילום" : "Photo spots"}>
          <Bullets items={day.photoTips} />
        </Card>
      )}
      {day.culture && (
        <Card Icon={BookOpen} eyebrow={he ? "סיכום היום" : "Today, in context"} title={day.culture.title}>
          <p className="text-[14.5px] sm:text-[15.5px] text-ink-700/90 leading-relaxed">{day.culture.body}</p>
        </Card>
      )}
    </>
  );
}

function Card({
  Icon,
  eyebrow,
  title,
  children
}: {
  Icon: typeof Camera;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-cream-50 ring-1 ring-cream-300/70 p-5 sm:p-6">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-terracotta-600 font-medium">
        <Icon size={13} strokeWidth={1.9} />
        {eyebrow}
      </div>
      <h3 className="mt-1 font-serif text-xl sm:text-2xl text-ink-900 leading-snug">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((line, i) => (
        <li key={i} className="flex gap-2 text-[14px] sm:text-[15px] text-ink-700/90 leading-relaxed">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-terracotta-500/70" aria-hidden />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}
