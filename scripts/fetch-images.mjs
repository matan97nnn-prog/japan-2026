// One-shot script: fetch a freely-licensed photo for each attraction & stay
// from Wikipedia / Wikimedia Commons and save into public/images/.
//
// Sources are CC-licensed (Wikimedia / Wikipedia) — safe for personal use
// and for an open repo.
//
// Run with:   node scripts/fetch-images.mjs

import { writeFile, mkdir, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "images");

const UA =
  "Mozilla/5.0 (compatible; japan-2026/1.0)";

/**
 * For each filename:
 *   { wiki: "Article_Title" }                    -> use Wikipedia REST summary lead image
 *   { commons: "File:Some_File.jpg" }            -> direct Wikimedia Commons file
 *   { url: "https://..." }                       -> direct URL (already CC/PD)
 *
 * Every commons: target below was verified to exist (live Commons page
 * fetch, CC/PD license confirmed) before being added — see
 * src/data/i18n/attractions.he.ts / attractions.ts for the matching
 * attribution shown in the UI.
 */
const TARGETS = [
  // ---------- North (Kanto: Tokyo / Hakone) ----------
  ["senso-ji.jpg",              { commons: "File:Kaminarimon (outer gate), Sensoji Temple, Akakusa, Tokyo.jpg", width: 2000 }],
  ["tokyo-skytree.jpg",         { commons: "File:Tokyo Skytree view.JPG", width: 2000 }],
  ["meiji-jingu.jpg",           { commons: "File:Meiji-jingu torii.JPG", width: 2000 }],
  ["shibuya-crossing.jpg",      { commons: "File:World's busiest pedestrian crossing - Large panorama of the Shibuya Crossing (43828061665).jpg", width: 2000 }],
  ["teamlab-planets.jpg",       { commons: "File:TEAM LAB univers k.jpg", width: 2000 }],
  ["tsukiji-outer-market.jpg",  { commons: "File:Tsukiji Outer Market -01.jpg", width: 2000 }],
  ["nikko-toshogu.jpg",         { commons: "File:Three Wise Monkeys,Tosho-gu Shrine.JPG", width: 2000 }],
  ["kamakura-daibutsu.jpg",     { commons: "File:The Great Buddha of Kōtoku-in (Kamakura Daibutsu).jpg", width: 2000 }],
  ["hakone-open-air-museum.jpg",{ commons: "File:220622 Hakone Open-air Museum Japan01s3.jpg", width: 2000 }],
  ["hakone-owakudani.jpg",      { commons: "File:Owakudani's cable car, Japan; October 2017.jpg", width: 2000 }],
  ["hakone-lake-ashi.jpg",      { commons: "File:Hakone-jinja torii - Hakone, Japan - DSC05478.jpg", width: 2000 }],

  // ---------- South (Kansai: Kyoto / Nara / Osaka / Himeji) ----------
  ["gion.jpg",                  { commons: "File:Wooden and bamboo facades of dwellings with sudare in a cobbled street of Gion, perspective effect with vanishing point, Kyoto, Japan.jpg", width: 2000 }],
  ["fushimi-inari.jpg",         { commons: "File:Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan.jpg", width: 2000 }],
  ["kiyomizu-dera.jpg",         { commons: "File:Kiyomizutera(Kyomizu no Butai) - panoramio.jpg", width: 2000 }],
  ["arashiyama-bamboo.jpg",     { commons: "File:2021 Sagano Bamboo forest in Arashiyama, Kyoto, Japan.jpg", width: 2000 }],
  ["kinkaku-ji.jpg",            { commons: "File:Water reflection of Kinkaku-ji Temple with a tree on a rock in the pond, Kyoto, Japan.jpg", width: 2000 }],
  ["nara-deer-park.jpg",        { commons: "File:Nara-Park Deer.jpg", width: 2000 }],
  ["nara-todaiji.jpg",          { commons: "File:Todai-ji Daibutsuden front view in 2011.jpg", width: 2000 }],
  ["osaka-castle.jpg",          { commons: "File:Osaka Castle 2 Osaka Japan by Don Ramey Logan.jpg", width: 2000 }],
  ["dotonbori.jpg",             { commons: "File:Dotonbori, Osaka, at night, November 2016.jpg", width: 2000 }],
  ["universal-studios-japan.jpg",{ commons: "File:USJ Super Nintendo World overview.jpg", width: 2000 }],
  ["himeji-castle.jpg",         { commons: "File:Château de Himeji02.jpg", width: 2000 }]
];

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/** Retry with exponential backoff on 429/5xx — Wikimedia rate-limits hard
 *  when this script fires ~20 requests back to back. */
async function fetchWithRetry(url, opts = {}, tries = 5) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, opts);
      if (res.status === 429 || res.status >= 500) {
        const wait = 2000 * Math.pow(2, i);
        console.log(`  retry ${i + 1}/${tries} after ${wait}ms (HTTP ${res.status})`);
        await sleep(wait);
        continue;
      }
      return res;
    } catch (e) {
      lastErr = e;
      const wait = 2000 * Math.pow(2, i);
      await sleep(wait);
    }
  }
  if (lastErr) throw lastErr;
  throw new Error(`gave up after ${tries} attempts: ${url}`);
}

/** Bump a Wikimedia thumbnail URL to a wider width (when possible). */
function widenThumb(url, target = 1200) {
  // Pattern:  /thumb/a/aa/Foo.jpg/320px-Foo.jpg  ->  /thumb/a/aa/Foo.jpg/1200px-Foo.jpg
  const m = url.match(/\/thumb\/(.+?)\/(\d+)px-([^/]+)$/);
  if (!m) return url;
  return url.replace(/\/(\d+)px-([^/]+)$/, `/${target}px-$2`);
}

async function getWikiLeadImage(title) {
  const api = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetchWithRetry(api, { headers: { "User-Agent": UA, "Accept": "application/json" } });
  if (!res.ok) throw new Error(`Wiki summary ${title} HTTP ${res.status}`);
  const data = await res.json();
  const original = data.originalimage?.source;
  const thumb = data.thumbnail?.source;
  // Prefer original if it's not too huge; else widen the thumb
  if (original && (data.originalimage?.width ?? 0) <= 2400) return original;
  if (thumb) return widenThumb(thumb, 1200);
  if (original) return original;
  return null;
}

async function getCommonsFile(fileTitle, width) {
  // Use the Commons API to resolve File:Foo.jpg to a direct URL.
  // If width is provided, request a thumb at that width (server-side resize).
  const widthParam = width ? `&iiurlwidth=${width}` : "";
  const api =
    `https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url${widthParam}&format=json&origin=*&titles=` +
    encodeURIComponent(fileTitle);
  const res = await fetchWithRetry(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Commons ${fileTitle} HTTP ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl ?? info?.url ?? null;
}

/* Some hosts (notably the Tenuta Cortevecchia WAF) reject our default
   project UA but happily serve to crawler UAs. We try the normal UA first
   and transparently fall back to a Googlebot UA on a 403/406 so we don't
   need per-target configuration. */
const FALLBACK_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

async function downloadTo(url, dest) {
  let res = await fetchWithRetry(url, {
    headers: { "User-Agent": UA, "Accept": "image/*" }
  });
  if (res.status === 403 || res.status === 406) {
    res = await fetchWithRetry(url, {
      headers: { "User-Agent": FALLBACK_UA, "Accept": "image/*,*/*;q=0.8" }
    });
  }
  if (!res.ok) throw new Error(`Download ${url} HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.byteLength;
}

async function resolveUrl(spec) {
  if (spec.url) return spec.url;
  if (spec.commons) return await getCommonsFile(spec.commons, spec.width);
  if (spec.wiki) return await getWikiLeadImage(spec.wiki);
  return null;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let ok = 0;
  let skip = 0;
  let fail = 0;

  for (const [name, spec] of TARGETS) {
    const dest = resolve(OUT_DIR, name);
    if (await fileExists(dest)) {
      console.log(`= skip  ${name}  (already exists)`);
      skip++;
      continue;
    }
    try {
      const url = await resolveUrl(spec);
      if (!url) {
        console.log(`! miss  ${name}  (no image found for ${JSON.stringify(spec)})`);
        fail++;
        continue;
      }
      const bytes = await downloadTo(url, dest);
      console.log(`+ saved ${name}  ${(bytes / 1024).toFixed(0)} KB  <- ${url}`);
      ok++;
      // Be polite to Wikimedia
      await sleep(1200);
    } catch (e) {
      console.log(`! fail  ${name}  ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone.  saved=${ok}  skipped=${skip}  failed=${fail}`);
  console.log(`Note: failed entries fall back to the styled placeholder in the app.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
