import { useState } from "react";
import { createPortal } from "react-dom";
import { CarTaxiFront, X } from "lucide-react";
import { useLang } from "../lib/i18n";

/* "Show the driver": the destination in large Japanese, full screen, with
 * the polite request underneath. Taxi drivers in Japan rarely read English. */
export function TaxiButton({ name, address, compact, iconOnly }: { name: string; address?: string; compact?: boolean; iconOnly?: boolean }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={lang === "he" ? "להראות לנהג" : "Show the driver"}
        className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-ink-900/20 bg-cream-50 text-ink-900 font-semibold ${
          iconOnly ? "w-8 h-8" : compact ? "px-2.5 py-1 text-[12px]" : "px-4 py-2 text-[13.5px]"
        }`}
      >
        <CarTaxiFront size={iconOnly ? 15 : compact ? 13 : 15} />
        {!iconOnly && (lang === "he" ? "להראות לנהג" : "Show the driver")}
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[9500] bg-white flex flex-col" onClick={() => setOpen(false)}>
            <div className="flex justify-end p-4">
              <button aria-label="close" className="w-11 h-11 rounded-full bg-ink-900/10 flex items-center justify-center">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center" lang="ja" dir="ltr">
              <div className="text-[44px] sm:text-6xl font-bold leading-tight text-black break-words">{name}</div>
              {address && <div className="mt-6 text-2xl sm:text-3xl text-black/80">{address}</div>}
              <div className="mt-10 text-2xl text-black/70">ここまでお願いします</div>
              <div className="mt-2 text-base text-black/50" dir={lang === "he" ? "rtl" : "ltr"}>
                {lang === "he" ? "\"בבקשה, לכאן\". נגיעה סוגרת." : "\"Here, please.\" Tap to close."}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
