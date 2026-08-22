import type { ChecklistItem } from "./types";

export const bookingChecklist: ChecklistItem[] = [
  {
    id: "book-flights",
    text: "Confirm flydubai flights (Tel Aviv ↔ Dubai ↔ Tokyo)",
    detail: "Check the connection time in Dubai both ways is comfortable, and that all four names match passports exactly."
  },
  {
    id: "idp-driving-license",
    text: "International Driving Permit (IDP) for whoever drives",
    detail: "Issued in Israel before departure (via the Ministry of Transport / motoring association), carried alongside the original Israeli license. Required, with the passport's Japan entry stamp, to collect the rental car in Odawara on Nov 4 — no IDP means no car.",
    urgent: true
  },
  {
    id: "rental-car-confirmed",
    text: "Rental car — Toyota Rent a Car, confirmation #99910376400",
    detail: "Toyota Noah Hybrid, booked under RONEN STEIN. Pickup: Odawara Sta. Shinkansen Exit Shop, Nov 4, 10:00 (the day's schedule has the group arriving closer to 11:30 — worth a quick call to confirm). Return: Kanazawa Station, Shinkansen East Exit, by Nov 9, 20:00. Full insurance incl. NOC + ETC card included. Total paid: ¥150,040.",
    done: true
  },
  {
    id: "hotels-booked",
    text: "All 8 hotel/ryokan stays are booked",
    detail: "da Haus Shinjuku (1–4 Nov) → Hakone Yutowa (4–5) → Kawaguchiko Urban Resort Villa (5–6) → Matsumoto Hotel Kagetsu (6–7) → Ryokan Warabino, Takayama (7–9) → SOKI Kanazawa (9–11) → Richmond Hotel Premier Kyoto Shijo (11–15) → The Gate Hotel Kaminarimon, Asakusa (15–17).",
    done: true
  },
  {
    id: "takkyubin-plan",
    text: "Plan the 3 Takkyubin luggage shipments",
    detail: "(1) da Haus Shinjuku → Ryokan Warabino, sent Nov 4 morning. (2) Matsumoto Hotel Kagetsu → Richmond Hotel Kyoto, sent Nov 6. (3) Richmond Hotel Kyoto → The Gate Hotel Kaminarimon, sent Nov 13 or 14. Ask each hotel's front desk to arrange it — most handle the paperwork directly."
  },
  {
    id: "book-nikko-train",
    text: "Reserve Tobu Limited Express seats to Nikko (3 Nov)",
    detail: "Direct from Asakusa/Shinjuku. Nov 3 is Culture Day, a national holiday — reserve ahead, this route fills up."
  },
  {
    id: "book-kamikochi-shuttle",
    text: "Reserve the Sawando ↔ Kamikochi shuttle/taxi (7 Nov)",
    detail: "Private cars are banned inside the valley — confirm the shuttle schedule and, if possible, book a seat ahead of the day."
  },
  {
    id: "book-shinkansen-seats",
    text: "Reserve seats for the Thunderbird and Shinkansen legs",
    detail: "Kanazawa → Kyoto (11 Nov, Thunderbird) and Kyoto → Tokyo (15 Nov, Hikari — not Nozomi, which the JR Pass doesn't cover)."
  },
  {
    id: "jr-pass",
    text: "Buy a 14-day JR Pass exchange order before departure",
    detail: "Must be purchased outside Japan, then exchanged for the physical pass at a JR Exchange Office (e.g. Kyoto or Tokyo Station). Covers Kanazawa↔Kyoto, Kyoto↔Tokyo and various local JR lines — plan when to activate it to make the most of the 14 consecutive days."
  },
  {
    id: "esim",
    text: "Sort out a Japan eSIM or pocket wifi — for all four phones",
    detail: "Airalo / Ubigi / a rental pocket wifi from the airport — activate before or right at arrival."
  },
  {
    id: "ic-card-setup",
    text: "Set up Suica/Pasmo/ICOCA — one per person",
    detail: "Covers all trains, subways, buses and konbini purchases for the whole trip."
  },
  {
    id: "travel-insurance",
    text: "Buy travel insurance for all four travellers",
    detail: "Confirm it covers the rental car (or that the rental's own NOC coverage is sufficient), the Hakone ropeway, and the Kamikochi/Kamikochi-adjacent walking."
  },
  {
    id: "notify-bank",
    text: "Notify the bank/credit card company of the travel dates",
    detail: "Avoid a card freeze on first use in Japan — the ¥150,040 rental-car charge already went through, so at least one card is confirmed working."
  }
];

export const packingChecklist: ChecklistItem[] = [
  {
    id: "idp-and-license",
    text: "IDP + original Israeli driving license + passport",
    detail: "All three, physically, for the driver — needed to collect the rental car in Odawara on Nov 4. Keep them together, easy to reach, not in a checked bag.",
    urgent: true
  },
  {
    id: "layers",
    text: "Layered clothing for a wide temperature range",
    detail: "Tokyo and Kyoto are mild in November (roughly 10–18°C), but Nikko, Hakone, the Fuji lakes and especially Matsumoto/Kamikochi/Takayama run noticeably colder — pack for near-freezing mountain mornings."
  },
  {
    id: "comfortable-shoes",
    text: "Very comfortable walking shoes — for everyone",
    detail: "This trip is 15,000+ steps most days, plus the Kamikochi riverside trail and Matsumoto Castle's steep original stairs. Break new shoes in before you leave."
  },
  {
    id: "slip-on-shoes",
    text: "Shoes that slip on and off easily",
    detail: "For all three ryokan stays (Hakone, Takayama) and any restaurant or temple with a genkan entryway."
  },
  {
    id: "portable-charger",
    text: "Portable phone charger + cable",
    detail: "For train and navigation apps, and long travel/driving days."
  },
  {
    id: "power-adapter",
    text: "Japan uses Type A plugs, 100V",
    detail: "Same plug shape as the US — bring a Type A adapter if traveling from Israel or elsewhere with a different plug."
  },
  {
    id: "cash-pouch",
    text: "Small cash pouch with yen",
    detail: "For temple offerings, small izakaya, morning markets, rural spots and gas stations along the drive that don't take card."
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
    detail: "Plasters, antiseptic, pain relievers, any regular medication — pharmacies are plentiful but not always English-friendly, especially outside the big cities."
  },
  {
    id: "reusable-bottle",
    text: "Reusable water bottle",
    detail: "Japan has excellent tap water and vending machines everywhere for refills."
  },
  {
    id: "modest-onsen-cover",
    text: "Waterproof tattoo covers, if needed",
    detail: "A practical workaround for some onsens with a tattoo policy — check with the Hakone and Takayama ryokan first, as policy varies."
  }
];
