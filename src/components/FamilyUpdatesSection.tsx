import { useEffect, useMemo, useState } from "react";
import { BedDouble, Car, Ticket, Sparkles, UtensilsCrossed, StickyNote, ExternalLink } from "lucide-react";
import Section from "./Section";
import { useT } from "../lib/dict";
import { useLang } from "../lib/i18n";
import {
  fetchFamilyUpdates,
  type FamilyUpdate,
  type UpdateCategory
} from "../lib/familyUpdates";

const CATEGORY_META: Record<
  UpdateCategory,
  { Icon: typeof BedDouble; labelKey: Parameters<ReturnType<typeof useT>>[0]; color: string }
> = {
  hotel: { Icon: BedDouble, labelKey: "family_updates_cat_hotel", color: "text-terracotta-600" },
  car: { Icon: Car, labelKey: "family_updates_cat_car", color: "text-olive-600" },
  ticket: { Icon: Ticket, labelKey: "family_updates_cat_ticket", color: "text-sienna-600" },
  recommendation: { Icon: Sparkles, labelKey: "family_updates_cat_recommendation", color: "text-terracotta-600" },
  market: { Icon: UtensilsCrossed, labelKey: "family_updates_cat_market", color: "text-olive-600" },
  note: { Icon: StickyNote, labelKey: "family_updates_cat_note", color: "text-ink-700" }
};

const ALL_CATEGORIES: UpdateCategory[] = ["hotel", "car", "ticket", "recommendation", "market", "note"];

function formatDateRange(u: FamilyUpdate, lang: "en" | "he"): string {
  if (!u.dateStart) return "";
  const fmt = (iso: string) => {
    const [, m, d] = iso.split("-");
    return lang === "he" ? `${d}.${m}` : `${m}/${d}`;
  };
  if (!u.dateEnd || u.dateEnd === u.dateStart) return fmt(u.dateStart);
  return `${fmt(u.dateStart)}–${fmt(u.dateEnd)}`;
}

export default function FamilyUpdatesSection() {
  const t = useT();
  const { lang } = useLang();
  const [updates, setUpdates] = useState<FamilyUpdate[] | null>(null);
  const [activeCat, setActiveCat] = useState<UpdateCategory | "all">("all");

  useEffect(() => {
    let cancelled = false;
    fetchFamilyUpdates().then(u => {
      if (!cancelled) setUpdates(u);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = useMemo(() => {
    if (!updates) return [];
    if (activeCat === "all") return updates;
    return updates.filter(u => u.category === activeCat);
  }, [updates, activeCat]);

  // Nothing fetched yet, or the sheet came back empty/unreachable — a
  // section with zero content would just be dead space, so skip it
  // entirely rather than showing a loading flicker or an error box to
  // visiting family.
  if (updates !== null && updates.length === 0) return null;

  return (
    <Section
      id="family-updates"
      eyebrow={t("family_updates_eyebrow")}
      title={t("family_updates_title")}
      kicker={t("family_updates_kicker")}
      intro={t("family_updates_intro")}
      toned
    >
      {updates === null ? (
        <div className="grid gap-4 md:grid-cols-2">
          {[0, 1].map(i => (
            <div key={i} className="card-paper p-5 h-28 animate-pulse bg-cream-200/60" />
          ))}
        </div>
      ) : (
        <>
          <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide mb-5">
            <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
              <button
                onClick={() => setActiveCat("all")}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all whitespace-nowrap min-h-9 ${
                  activeCat === "all"
                    ? "bg-terracotta-500 text-cream-50 border-terracotta-500"
                    : "bg-cream-50 text-ink-700 border-cream-300 opacity-70 hover:opacity-100"
                }`}
              >
                {t("family_updates_filter_all")}
              </button>
              {ALL_CATEGORIES.map(cat => {
                const meta = CATEGORY_META[cat];
                const { Icon } = meta;
                const on = activeCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all whitespace-nowrap min-h-9 ${
                      on
                        ? "bg-terracotta-500 text-cream-50 border-terracotta-500"
                        : "bg-cream-50 text-ink-700 border-cream-300 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Icon size={13} />
                    {t(meta.labelKey)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {visible.map((u, i) => {
              const meta = CATEGORY_META[u.category];
              const { Icon } = meta;
              const dateLabel = formatDateRange(u, lang);
              return (
                <div key={`${u.title}-${i}`} className="card-paper p-5">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-cream-200/70 shrink-0 ${meta.color}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap text-[11px] uppercase tracking-[0.16em] font-medium text-ink-700/60">
                        {dateLabel && <span>{dateLabel}</span>}
                        {u.city && (
                          <>
                            <span aria-hidden>·</span>
                            <span>{u.city}</span>
                          </>
                        )}
                      </div>
                      <h3 className="mt-1 font-serif text-lg text-ink-900 leading-snug">
                        {u.title}
                      </h3>
                      {u.details && (
                        <p className="mt-1.5 text-sm text-ink-700/85 leading-relaxed">
                          {u.details}
                        </p>
                      )}
                      {u.link && (
                        <a
                          href={u.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-terracotta-700 hover:text-terracotta-800"
                        >
                          {t("family_updates_link")}
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Section>
  );
}
