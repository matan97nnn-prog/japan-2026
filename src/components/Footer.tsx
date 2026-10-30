import { useT } from "../lib/dict";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-cream-300/60 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="text-[12px] text-ink-700/60">{t("footer_lang_label")}</span>
          <LanguageSwitcher variant="minimal" />
        </div>
        <div className="mt-3 text-[11px] text-ink-700/50 leading-relaxed max-w-md mx-auto">{t("footer_attribution")}</div>
      </div>
    </footer>
  );
}
