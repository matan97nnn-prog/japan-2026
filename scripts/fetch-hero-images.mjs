// One-shot script: fetch a curated set of beauty-shot photos for the Hero
// carousel. All sources are CC-licensed (Wikimedia Commons featured / quality
// pictures) with proper attribution provided in src/components/Hero.tsx.
//
// Run with:   node scripts/fetch-hero-images.mjs

import { writeFile, mkdir, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "images", "hero");

const UA =
  "Mozilla/5.0 (compatible; japan-2026/1.0)";

// Each entry: [filename, { commons: "File:Xyz.jpg" } or { url: "..." }]
// All Commons targets are pulled at 2400 px wide (ample for a hero background).
// Every target below was verified to exist (live Commons page fetch, CC/PD
// license confirmed) before being added here — see src/components/Hero.tsx
// for the matching attribution shown in the UI.
const TARGETS = [
  // Mt Fuji + Lake Ashi + torii — Hakone (Day 7-8)
  [
    "hakone-fuji-lake.jpg",
    { commons: "File:LakeAshi and MtFuji Hakone.JPG" }
  ],
  // Fushimi Inari torii gate tunnel — Kyoto (Day 10)
  [
    "fushimi-inari-torii.jpg",
    {
      commons:
        "File:Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan.jpg"
    }
  ],
  // Arashiyama bamboo grove — Kyoto (Day 11)
  [
    "arashiyama-bamboo-hero.jpg",
    { commons: "File:2021 Sagano Bamboo forest in Arashiyama, Kyoto, Japan.jpg" }
  ],
  // Kinkaku-ji reflected in its pond — Kyoto (Day 11)
  [
    "kinkaku-ji-reflection.jpg",
    {
      commons:
        "File:Water reflection of Kinkaku-ji Temple with a tree on a rock in the pond, Kyoto, Japan.jpg"
    }
  ],
  // Nikko Toshogu's Yomeimon gate (Day 5)
  [
    "nikko-toshogu-gate.jpg",
    { commons: "File:Nikko toshogu yomeimon gate ver1.jpg" }
  ],
  // Shibuya Crossing at night (Day 3)
  [
    "shibuya-crossing-night.jpg",
    { commons: "File:Shibuya crossing at night.jpg" }
  ],
  // Himeji Castle exterior (Day 15)
  [
    "himeji-castle-exterior.jpg",
    { commons: "File:Château de Himeji02.jpg" }
  ],
  // Nara Park deer (Day 12)
  [
    "nara-deer-park-hero.jpg",
    { commons: "File:Nara-Park Deer.jpg" }
  ],
  // Dotonbori canal at night — Osaka (Day 14)
  [
    "osaka-dotonbori-night.jpg",
    { commons: "File:Dotonbori, Osaka, at night, November 2016.jpg" }
  ],
  // Senso-ji's Kaminarimon gate — Asakusa, Tokyo (Day 2)
  [
    "senso-ji-kaminarimon.jpg",
    { commons: "File:Kaminarimon (outer gate), Sensoji Temple, Akakusa, Tokyo.jpg" }
  ],
  // Autumn leaves (momiji), Kyoto — general seasonal beauty shot
  [
    "momiji-closeup.jpg",
    { commons: "File:Kyoto Japan0431.JPG" }
  ],
  // Owakudani volcanic valley + ropeway — Hakone (Day 8)
  [
    "owakudani-ropeway.jpg",
    { commons: "File:Owakudani's cable car, Japan; October 2017.jpg" }
  ],
  // Chureito Pagoda with Mt Fuji behind it — Fujiyoshida
  [
    "fuji-chureito-pagoda-hero.jpg",
    { commons: "File:Chureito Pagoda and Mount Fuji.jpg" }
  ],
  // Matsumoto Castle ("Crow Castle") — black wooden keep with moat
  [
    "matsumoto-castle-hero.jpg",
    { commons: "File:Matsumoto Castle05s5s4592.jpg" }
  ],
  // Kappa Bridge over the Azusa River, Hotaka mountains behind — Kamikochi
  [
    "kamikochi-kappa-bridge-hero.jpg",
    { commons: "File:251023 Hotaka mountain range as seen from Kappa Bridge.jpg" }
  ],
  // Classic Ogimachi overview — Shirakawa-go gassho-zukuri village
  [
    "shirakawa-go-hero.jpg",
    {
      commons:
        "File:Overview of Ogimachi, Shirakawa, from the Ogimachi Castle observation point.jpg"
    }
  ],
  // Kenrokuen Garden, Kanazawa, with yukitsuri (rope-supported pine trees)
  [
    "kanazawa-kenrokuen-hero.jpg",
    { commons: "File:Fountain and Yukizuri of Kenroku Garden.JPG" }
  ]
];

const TARGET_WIDTH = 2400;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchWithRetry(url, opts = {}, tries = 4) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, opts);
      if (res.status === 429 || res.status >= 500) {
        const wait = 1500 * Math.pow(2, i);
        console.log(`  retry ${i + 1}/${tries} after ${wait}ms (HTTP ${res.status})`);
        await sleep(wait);
        continue;
      }
      return res;
    } catch (e) {
      lastErr = e;
      const wait = 1500 * Math.pow(2, i);
      await sleep(wait);
    }
  }
  if (lastErr) throw lastErr;
  throw new Error(`gave up after ${tries} attempts: ${url}`);
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

/**
 * Use the Commons imageinfo API to ask for a JPEG thumbnail at the requested
 * width. Returns the thumb URL (or the original if no thumb is available).
 */
async function getCommonsThumb(fileTitle, width) {
  const api =
    `https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo` +
    `&iiprop=url&iiurlwidth=${width}&format=json&origin=*&titles=` +
    encodeURIComponent(fileTitle);
  const res = await fetchWithRetry(api, {
    headers: { "User-Agent": UA, Accept: "application/json" }
  });
  if (!res.ok) throw new Error(`Commons ${fileTitle} HTTP ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl ?? info?.url ?? null;
}

async function downloadTo(url, dest) {
  const res = await fetchWithRetry(url, {
    headers: { "User-Agent": UA, Accept: "image/*" }
  });
  if (!res.ok) throw new Error(`Download ${url} HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.byteLength;
}

async function resolveUrl(spec) {
  if (spec.url) return spec.url;
  if (spec.commons) return await getCommonsThumb(spec.commons, TARGET_WIDTH);
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
      await sleep(300);
    } catch (e) {
      console.log(`! fail  ${name}  ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone.  saved=${ok}  skipped=${skip}  failed=${fail}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
