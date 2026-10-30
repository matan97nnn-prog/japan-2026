import { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { ExternalLink, Search } from "lucide-react";
import Section from "./Section";
import { savedPlaces, type SavedPlaceRow } from "../data/savedPlaces";
import { useT } from "../lib/dict";

const LISTS = [
  { name: "ירח דבש יפן · עומר", url: "https://maps.app.goo.gl/XVFfru7Sekwbui296?g_st=iw", color: "#A23E2A" },
  { name: "יפן עמר ונועה · omer", url: "https://maps.app.goo.gl/sJXXzLJ39NRSLQzQ9?g_st=iw", color: "#5C7244" },
  { name: "יפן · Yoav Barnea", url: "https://maps.app.goo.gl/hF8PJigjAbJrMB1T9?g_st=iw", color: "#587A8E" }
];

const PAGE = 40;

const placeUrl = (r: SavedPlaceRow) =>
  r[5]
    ? `https://www.google.com/maps?cid=${r[5]}`
    : `https://www.google.com/maps/search/?api=1&query=${r[3]},${r[4]}`;

export default function SavedPlacesSection() {
  const t = useT();
  const [q, setQ] = useState("");
  const [src, setSrc] = useState<number | null>(null);
  const [view, setView] = useState<"list" | "map">("list");
  const [shown, setShown] = useState(PAGE);

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return savedPlaces.filter(
      (r) =>
        (src === null || r[6].includes(src)) &&
        (!needle || `${r[0]} ${r[1]} ${r[2]}`.toLowerCase().includes(needle))
    );
  }, [q, src]);

  return (
    <Section id="saved-places" eyebrow={t("saved_eyebrow")} title={t("saved_title")} intro={t("saved_intro")} toned>
      <div className="grid gap-3 sm:grid-cols-3">
        {LISTS.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-2xl bg-cream-50 border border-ink-900/10 px-4 py-3 shadow-sm"
          >
            <span className="flex items-center gap-2 font-medium text-ink-900">
              <span className="h-3 w-3 rounded-full" style={{ background: l.color }} />
              {l.name}
            </span>
            <span className="flex items-center gap-1 text-sm text-terracotta-700">
              {t("saved_open_list")} <ExternalLink size={14} />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute top-1/2 -translate-y-1/2 start-3 text-ink-700/60" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setShown(PAGE);
            }}
            placeholder={t("saved_search")}
            className="w-full rounded-full border border-ink-900/15 bg-cream-50 ps-9 pe-4 py-2 text-sm"
          />
        </div>
        {(["list", "map"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`rounded-full px-4 py-2 text-sm border ${
              view === v ? "bg-ink-900 text-cream-50 border-ink-900" : "bg-cream-50 border-ink-900/15"
            }`}
          >
            {t(v === "list" ? "saved_list_toggle" : "saved_map_toggle")}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <button
          onClick={() => setSrc(null)}
          className={`rounded-full px-3 py-1 border ${src === null ? "bg-ink-900 text-cream-50" : "bg-cream-50"}`}
        >
          {t("saved_all")}
        </button>
        {LISTS.map((l, i) => (
          <button
            key={l.url}
            onClick={() => setSrc(src === i ? null : i)}
            className={`rounded-full px-3 py-1 border ${src === i ? "bg-ink-900 text-cream-50" : "bg-cream-50"}`}
          >
            <span className="inline-block h-2 w-2 rounded-full me-1.5" style={{ background: l.color }} />
            {l.name.split(" · ")[0]}
          </button>
        ))}
        <span className="ms-auto text-ink-700/70">{t("saved_count", { n: rows.length })}</span>
      </div>

      {view === "map" ? (
        <div className="mt-4 h-[460px] rounded-2xl overflow-hidden border border-ink-900/10" dir="ltr">
          <MapContainer center={[36.2, 137.5]} zoom={6} className="h-full w-full" preferCanvas>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors &copy; CARTO"
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
              maxZoom={20}
            />
            {rows.map((r, i) => (
              <CircleMarker
                key={i}
                center={[r[3], r[4]]}
                radius={5}
                pathOptions={{ color: "#fff", weight: 1, fillColor: LISTS[r[6][0]].color, fillOpacity: 0.9 }}
              >
                <Popup>
                  <strong>{r[0]}</strong>
                  {r[1] && <div style={{ marginTop: 4 }}>{r[1]}</div>}
                  <a href={placeUrl(r)} target="_blank" rel="noopener noreferrer">
                    {t("saved_open_place")} ↗
                  </a>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      ) : (
        <>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {rows.slice(0, shown).map((r, i) => (
              <li key={i} className="rounded-xl bg-cream-50 border border-ink-900/10 p-3">
                <a
                  href={placeUrl(r)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink-900 hover:text-terracotta-700"
                >
                  {r[0]} <ExternalLink size={12} className="inline" />
                </a>
                {r[1] && <p className="mt-1 text-sm text-ink-700/85">{r[1]}</p>}
                {r[2] && <p className="mt-1 text-xs text-ink-700/60">{r[2]}</p>}
                <div className="mt-2 flex gap-1">
                  {r[6].map((s) => (
                    <span key={s} className="h-2 w-2 rounded-full" style={{ background: LISTS[s].color }} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
          {shown < rows.length && (
            <button
              onClick={() => setShown(shown + PAGE)}
              className="mt-4 rounded-full border border-ink-900/15 bg-cream-50 px-5 py-2 text-sm"
            >
              {t("saved_more")}
            </button>
          )}
        </>
      )}
    </Section>
  );
}
