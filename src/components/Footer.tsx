import { useT } from "../lib/dict";

export default function Footer() {
  const t = useT();
  return (
    <footer className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-center">
        <div className="text-[11px] text-ink-700/45 leading-relaxed max-w-md mx-auto">{t("footer_attribution")}</div>
      </div>
    </footer>
  );
}
