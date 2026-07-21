import type { ChecklistItem } from "./types";

export const bookingChecklist: ChecklistItem[] = [
  {
    id: "book-flights",
    text: "Confirm flydubai flights (Tel Aviv ↔ Dubai ↔ Tokyo)",
    detail: "Check the connection time in Dubai both ways is comfortable, and that all four names match passports exactly."
  },
  {
    id: "book-hakone-ryokan",
    text: "Book the Hakone ryokan (2 nights, 7–9 Nov)",
    detail: "Look for a dinner-and-breakfast (ichi-shoku / nihaku) plan with kaiseki included. Confirm the tattoo policy if relevant."
  },
  {
    id: "book-tokyo-hotel",
    text: "Book the Tokyo hotel — two stays (1–7 Nov and 16–17 Nov)",
    detail: "Shinjuku area recommended for transport links. Can be the same hotel both times, or two different ones."
  },
  {
    id: "book-kyoto-hotel",
    text: "Book the Kyoto hotel (5 nights, 9–14 Nov)",
    detail: "Near Kyoto Station for the easiest Nara/Osaka day trips."
  },
  {
    id: "book-osaka-hotel",
    text: "Book the Osaka hotel (2 nights, 14–16 Nov)",
    detail: "Namba (near Dotonbori, subway to USJ) or Umeda (easier Shin-Osaka Shinkansen access)."
  },
  {
    id: "book-teamlab",
    text: "teamLab Planets TOKYO tickets (4 Nov)",
    detail: "Book online well ahead — regularly sells out, especially afternoon slots.",
    link: "https://www.teamlab.art/e/planets/"
  },
  {
    id: "book-shibuya-sky",
    text: "Shibuya Sky tickets (3 Nov, sunset slot)",
    detail: "Book the specific time slot online in advance.",
    link: "https://www.shibuya-scramble-square.com/sky/"
  },
  {
    id: "book-nikko-train",
    text: "Reserve Tobu Limited Express seats to Nikko (5 Nov)",
    detail: "Direct from Asakusa. Reserve ahead during peak autumn foliage season."
  },
  {
    id: "book-shinkansen-seats",
    text: "Reserve Shinkansen seats for the three long-haul legs",
    detail: "Hakone (Odawara) → Kyoto (9 Nov), Osaka → Tokyo (16 Nov), plus the Himeji day trip (15 Nov)."
  },
  {
    id: "book-usj-express",
    text: "Universal Studios Japan tickets + Express Pass (14 Nov)",
    detail: "Book park admission and the timed-entry app passes for Super Nintendo World and the Harry Potter area.",
    link: "https://www.usj.co.jp/e/"
  },
  {
    id: "esim",
    text: "Sort out a Japan eSIM or pocket wifi",
    detail: "Airalo / Ubigi / a rental pocket wifi from the airport — activate before or right at arrival."
  },
  {
    id: "ic-card-setup",
    text: "Set up Suica/Pasmo (physical card or phone wallet)",
    detail: "Covers all trains, subways, buses and konbini purchases for the whole trip."
  },
  {
    id: "travel-insurance",
    text: "Buy travel insurance for all four travellers",
    detail: "Confirm it covers activities like the Hakone ropeway and any planned hiking."
  },
  {
    id: "notify-bank",
    text: "Notify the bank/credit card company of the travel dates",
    detail: "Avoid a card freeze on first use in Japan."
  }
];

export const packingChecklist: ChecklistItem[] = [
  {
    id: "layers",
    text: "Layered clothing for 8–18°C days",
    detail: "Tokyo and Kansai are mild in November; Nikko and Hakone's mountains run noticeably cooler."
  },
  {
    id: "comfortable-shoes",
    text: "Very comfortable walking shoes — for everyone",
    detail: "This trip is 15,000+ steps most days. Break new shoes in before you leave."
  },
  {
    id: "slip-on-shoes",
    text: "Shoes that slip on and off easily",
    detail: "For ryokan, temples, and any restaurant with a genkan entryway."
  },
  {
    id: "portable-charger",
    text: "Portable phone charger + cable",
    detail: "For train navigation apps, the USJ app, and long travel days."
  },
  {
    id: "power-adapter",
    text: "Japan uses Type A plugs, 100V",
    detail: "Same plug shape as the US — bring a Type A adapter if traveling from Israel or elsewhere with a different plug."
  },
  {
    id: "cash-pouch",
    text: "Small cash pouch with yen",
    detail: "For temple offerings, small izakaya, market stalls and rural spots that don't take card."
  },
  {
    id: "translation-app",
    text: "Offline translation app (Google Translate, Japanese pack downloaded)",
    detail: "The camera-translate feature is invaluable for menus and signs."
  },
  {
    id: "small-daypack",
    text: "A small daypack per person",
    detail: "For the long touring days — water, snacks, a layer, the day's tickets."
  },
  {
    id: "first-aid",
    text: "Mini first-aid kit",
    detail: "Plasters, antiseptic, pain relievers, any regular medication — pharmacies are plentiful but not always English-friendly."
  },
  {
    id: "reusable-bottle",
    text: "Reusable water bottle",
    detail: "Japan has excellent tap water and vending machines everywhere for refills."
  },
  {
    id: "modest-onsen-cover",
    text: "Waterproof tattoo covers, if needed",
    detail: "A practical workaround for some onsens with a tattoo policy — check with the ryokan first, as policy varies."
  }
];
