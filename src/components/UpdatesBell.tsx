import { Bell } from "lucide-react";
import { updates, useSeen, isNew } from "../lib/updates";
import { navigatePage } from "../lib/route";
import { useLang } from "../lib/i18n";

/* Top-bar bell, like Facebook's: a red count of updates not opened yet on
 * this device. */
export default function UpdatesBell({ onDark }: { onDark?: boolean }) {
  const { lang } = useLang();
  const [seen] = useSeen();
  const count = updates.filter((u) => isNew(u, seen)).length;
  return (
    <button
      onClick={() => navigatePage("updates")}
      aria-label={lang === "he" ? `עדכונים${count ? `, ${count} חדשים` : ""}` : `Updates${count ? `, ${count} new` : ""}`}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
        count > 0 ? "bg-terracotta-600 text-cream-50 shadow-md" : onDark ? "text-cream-50" : "text-ink-900"
      }`}
    >
      <Bell size={21} className={count > 0 ? "fill-cream-50/25" : ""} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[19px] h-[19px] px-1 rounded-full bg-white text-terracotta-700 ring-2 ring-terracotta-600 text-[11px] font-extrabold flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
