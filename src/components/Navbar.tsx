import { useEffect, useState } from "react";
import { useT } from "../lib/dict";
import { useLang } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import UpdatesBell from "./UpdatesBell";
import { PAGES, navigatePage, useHashRoute, type Page } from "../lib/route";
import { NAV_LABEL } from "../lib/navLabels";

const links: (Page | "home")[] = ["home", ...PAGES.filter((p) => p !== "updates")];

export default function Navbar() {
  const t = useT();
  const { lang } = useLang();
  const route = useHashRoute();
  const onHome = route.kind === "home";
  const [scrolledRaw, setScrolled] = useState(false);
  // Off the home page there's no hero photo behind the bar, so keep it solid.
  const scrolled = scrolledRaw || !onHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = route.kind === "page" ? route.page : "home";

  return (
    <nav
      // The top bar always reads LTR — brand on the left, language switcher
      // on the right, regardless of the document direction.
      dir="ltr"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md border-b border-cream-300/60 shadow-sm"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        <button onClick={() => navigatePage("home")} className="flex items-baseline gap-2 group min-h-11">
          <span
            className={`font-serif font-bold text-xl sm:text-2xl ${
              scrolled ? "text-ink-900" : "text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            } group-hover:text-terracotta-600 transition-colors`}
          >
            {t("brand_short")}
          </span>
          <span className="font-serif text-terracotta-500 text-base sm:text-lg font-semibold">{t("brand_year")}</span>
        </button>

        <div className="hidden md:flex items-center gap-1" dir={lang === "he" ? "rtl" : "ltr"}>
          {links.map(id => (
            <button
              key={id}
              onClick={() => navigatePage(id)}
              className={`px-3 py-2 text-[15px] font-semibold transition-colors ${
                current === id
                  ? "text-terracotta-600"
                  : scrolled
                    ? "text-ink-700 hover:text-terracotta-600"
                    : "text-cream-50 hover:text-gold-400"
              }`}
            >
              {NAV_LABEL[id][lang]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <UpdatesBell onDark={!scrolled} />
          <LanguageSwitcher onDark={!scrolled} />
        </div>
      </div>
    </nav>
  );
}
