import { useState } from "react";
import { Home, CalendarDays, Map, Utensils, MoreHorizontal, Download, Compass, BedDouble, Info, MessageCircle } from "lucide-react";
import { useT } from "../lib/dict";
import { useLang } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { canShowInstallOption, triggerInstallPrompt } from "../lib/install";
import { navigatePage, useHashRoute, type Page } from "../lib/route";
import { NAV_LABEL } from "../lib/navLabels";

/* App-style tab bar: each tab is its own page, so nothing scrolls forever. */
const TABS: { id: Page | "home" | "more"; Icon: typeof Home }[] = [
  { id: "home", Icon: Home },
  { id: "plan", Icon: CalendarDays },
  { id: "map", Icon: Map },
  { id: "food", Icon: Utensils },
  { id: "more", Icon: MoreHorizontal }
];

const MORE_LINKS: { id: Page; Icon: typeof Home }[] = [
  { id: "places", Icon: Compass },
  { id: "stays", Icon: BedDouble },
  { id: "phrases", Icon: MessageCircle },
  { id: "info", Icon: Info }
];

export default function MobileBottomNav() {
  const t = useT();
  const { lang } = useLang();
  const route = useHashRoute();
  const [moreOpen, setMoreOpen] = useState(false);
  const [showInstall] = useState<boolean>(() => canShowInstallOption());

  const current: string =
    route.kind === "page" ? route.page : route.kind === "chapter" ? "plan" : "home";
  const active = MORE_LINKS.some(l => l.id === current) ? "more" : current;

  const go = (id: Page | "home") => {
    setMoreOpen(false);
    navigatePage(id);
  };

  return (
    <>
      {moreOpen && (
        <div
          className="fixed inset-0 z-[8000] bg-ink-900/30 backdrop-blur-sm md:hidden"
          onClick={() => setMoreOpen(false)}
        >
          <div
            className="absolute bottom-[calc(64px+env(safe-area-inset-bottom))] inset-x-0 bg-cream-50 border-t border-cream-300/70 rounded-t-3xl px-4 pt-3 pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-cream-300 rounded-full mx-auto mb-4" />
            <div className="grid grid-cols-2 gap-2">
              {MORE_LINKS.map(({ id, Icon }) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="flex flex-col items-center gap-2 bg-cream-100 active:bg-cream-300 rounded-2xl px-2 py-4 text-[15px] font-semibold text-ink-900"
                >
                  <Icon size={22} className="text-terracotta-600" />
                  {NAV_LABEL[id][lang]}
                </button>
              ))}
            </div>
            {showInstall && (
              <button
                onClick={() => {
                  setMoreOpen(false);
                  triggerInstallPrompt();
                }}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-terracotta-500 text-cream-50 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <Download size={16} />
                {t("install_menu_label")}
              </button>
            )}
            <div className="mt-3 flex justify-center">
              <LanguageSwitcher variant="minimal" />
            </div>
          </div>
        </div>
      )}

      <nav
        className="fixed bottom-0 inset-x-0 z-[8001] md:hidden bg-cream-50/95 backdrop-blur-md border-t border-cream-300/70 shadow-[0_-4px_24px_rgba(42,31,26,0.08)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-5 h-16">
          {TABS.map(({ id, Icon }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => (id === "more" ? setMoreOpen(o => !o) : go(id))}
                  className={`w-full h-full flex flex-col items-center justify-center gap-0.5 text-[11.5px] font-semibold transition-colors active:scale-[0.96] ${
                    isActive ? "text-terracotta-600" : "text-ink-700/70"
                  }`}
                >
                  <span
                    className={`w-11 h-7 flex items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-terracotta-500/12" : ""
                    }`}
                  >
                    <Icon size={19} strokeWidth={isActive ? 2.4 : 1.8} />
                  </span>
                  {NAV_LABEL[id][lang]}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
