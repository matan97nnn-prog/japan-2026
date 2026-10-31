import { Phone, MapPin, Globe, ExternalLink } from "lucide-react";
import { emergencyGroups } from "../data/emergency";
import Section from "./Section";
import { useT } from "../lib/dict";
import { useLocalizeEmergencyGroup } from "../data/i18n";

function ItemIcon({ type }: { type: "phone" | "address" | "website" }) {
  if (type === "phone") return <Phone size={14} className="text-terracotta-500" />;
  if (type === "website") return <Globe size={14} className="text-olive-500" />;
  return <MapPin size={14} className="text-sienna-500" />;
}

export default function EmergencySection() {
  const t = useT();
  const localizeGroup = useLocalizeEmergencyGroup();
  return (
    <Section
      id="emergency"
      eyebrow={t("emergency_eyebrow")}
      title={t("emergency_title")}
      kicker={t("emergency_kicker")}
      toned
    >
      {/* Japan's two emergency numbers, one tap to call */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { num: "119", label: t("emergency_119_label") },
          { num: "110", label: t("emergency_110_label") }
        ].map((e) => (
          <a
            key={e.num}
            href={`tel:${e.num}`}
            className="rounded-2xl bg-terracotta-500 text-cream-50 px-4 py-5 flex flex-col items-center text-center shadow-[0_18px_40px_-18px_rgba(196,90,61,0.55)]"
          >
            <Phone size={22} />
            <div className="text-5xl font-extrabold leading-none mt-2" dir="ltr">
              {e.num}
            </div>
            <div className="text-[14px] font-semibold mt-2">{e.label}</div>
          </a>
        ))}
      </div>
      <p className="mb-8 sm:mb-10 text-[14px] text-ink-700/85">{t("emergency_japan_lead")}</p>

      <div className="grid gap-5 md:grid-cols-2">
        {emergencyGroups.map((rawGroup, gi) => {
          const g = localizeGroup(rawGroup, gi);
          return (
          <div key={g.title} className="card-paper p-5">
            <h3 className="font-serif text-xl text-ink-900 mb-4 underline-terracotta">
              {g.title}
            </h3>
            <ul className="space-y-3">
              {g.items.map((it, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1 shrink-0">
                    <ItemIcon type={it.type} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-[0.18em] text-ink-700/65 font-medium">
                      {it.label}
                    </div>
                    {it.type === "phone" ? (
                      <a
                        href={`tel:${it.value.replace(/\s+/g, "")}`}
                        className="text-base font-medium text-ink-900 hover:text-terracotta-600 transition-colors break-all"
                      >
                        {it.value}
                      </a>
                    ) : it.link ? (
                      <a
                        href={it.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-ink-900 hover:text-terracotta-600 transition-colors break-words inline-flex items-center gap-1"
                      >
                        {it.value} <ExternalLink size={11} className="inline" />
                      </a>
                    ) : (
                      <div className="text-base font-medium text-ink-900 break-words">
                        {it.value}
                      </div>
                    )}
                    {it.detail && (
                      <p className="text-xs text-ink-700/75 mt-0.5">{it.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
        })}
      </div>
    </Section>
  );
}
