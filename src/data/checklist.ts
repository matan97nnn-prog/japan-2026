import type { ChecklistItem } from "./types";

export const bookingChecklist: ChecklistItem[] = [
  {
    id: "decide-return",
    text: "Decide the return flight date (17 or 18.11)",
    detail: "Everything at the end depends on it: the last Tokyo hotel, the free day, the airport transfer.",
    urgent: true
  },
  {
    id: "decide-hotels",
    text: "Kyoto (Honyado Nono) and the last Tokyo hotel (Dai-ichi) are 'for now'",
    detail: "Confirm or replace once the return date is set. Cancel duplicate bookings only after checking the cancellation terms."
  },
  {
    id: "book-flights",
    text: "Emirates flights — booking refs HG8ZCN and I5JSFN",
    detail: "EK110 Larnaca → Dubai 31.10 16:25; EK318 Dubai → Narita 1.11 02:55 → 17:20. Check that bags go through to Narita and that all four names match the passports.",
    done: true
  },
  {
    id: "larnaca-hotel",
    text: "Larnaca hotel for 30–31.10",
    detail: "Add the hotel name to the site once known."
  },
  {
    id: "idp-driving-license",
    text: "International Driving Permit (IDP) for whoever drives",
    detail: "Carried with the original Israeli licence and passport. Without it — no car in Odawara on 4.11.",
    urgent: true
  },
  {
    id: "rental-car-confirmed",
    text: "Rental car — Toyota Rent a Car #99910376400",
    detail: "Noah Hybrid, under RONEN STEIN. Pick-up Odawara Sta. Shinkansen Exit, 4.11 10:00 (tel 0465-32-0100). Return Kanazawa Station East Exit by 9.11 20:00. NOC insurance + ETC card included.",
    done: true
  },
  {
    id: "hotels-booked",
    text: "Hotels booked: Keihan Ginza (1–4) · Hakone Yutowa (4–5) · Kawaguchiko Villa (5–6) · Matsumoto Kagetsu (6–7) · Takayama Green Hotel (7–9) · Hotel Forza Kanazawa (9–11)",
    detail: "2 rooms everywhere except the Kawaguchiko villa (one villa for 4). Keihan booked on Agoda, #1788608896. Hakone: 2 × Condominium A, 49 m² each.",
    done: true
  },
  {
    id: "evening-tour",
    text: "Tokyo evening tour 2.11 20:00 — booking 9022",
    detail: "Hebrew Tour Guide Japan, meet at Gap Store Shinjuku Flagship. WhatsApp +81 80-4373-7268.",
    done: true
  },
  {
    id: "takkyubin-plan",
    text: "Plan the Takkyubin luggage shipments",
    detail: "(1) Keihan Ginza → Takayama Green Hotel, sent 4.11 morning. (2) Takayama Green Hotel or Hotel Forza Kanazawa → Onyado Nono Kyoto Shichijo. (3) Nono Kyoto → Dai-ichi Hotel Tokyo, sent 13–14.11. Front desks arrange it.",
  },
  {
    id: "book-shibuya-sky",
    text: "Shibuya Sky sunset tickets (3.11)",
    detail: "Holiday + sunset slot sells out — book online."
  },
  {
    id: "book-ide-sake",
    text: "Ide Sake Brewery tour, Kawaguchiko (5.11, 15:00)",
    detail: "¥500 incl. tasting. Book by 16:00 the day before."
  },
  {
    id: "book-birthday-dinner",
    text: "Dad's 60th birthday dinner in Matsumoto (6.11)",
    detail: "Hikariya Higashi or Hikariya Nishi — kaiseki. Mention the birthday when booking.",
    urgent: true
  },
  {
    id: "book-kamikochi-shuttle",
    text: "Kamikochi shuttle bus from Hirayu (7.11)",
    detail: "No private cars in the valley. Check the Alpico/Nohi timetable and whether seats need booking."
  },
  {
    id: "book-shinkansen-seats",
    text: "Reserve seats: Kanazawa → Kyoto (11.11) and Kyoto → Tokyo (15.11)",
    detail: "Kanazawa → Tsuruga by Hokuriku Shinkansen, then Thunderbird to Kyoto. Kyoto → Tokyo on Hikari (the JR Pass doesn't cover Nozomi)."
  },
  {
    id: "book-nijo-night",
    text: "Nijo Castle night event tickets (14.11)",
    detail: "'NAKED meets Nijo Castle', 18:00–22:00, ¥2,400 on Saturday. Book online."
  },
  {
    id: "book-drum-tao",
    text: "Optional: DRUM TAO taiko show, Kyoto",
    detail: "Kyoto Station, daily 19:00 and 21:00, from ¥10,000."
  },
  {
    id: "jr-pass",
    text: "JR Pass — decide if it pays off",
    detail: "Long JR legs: Tokyo → Odawara, Kanazawa → Kyoto, Kyoto → Tokyo. Compare against single tickets before buying."
  },
  {
    id: "esim",
    text: "Japan eSIM or pocket wifi — all four phones",
    detail: "Activate before landing."
  },
  {
    id: "ic-card-setup",
    text: "Suica/Pasmo — one per person",
    detail: "Trains, buses and konbini for the whole trip; the phone-wallet version works too."
  },
  {
    id: "travel-insurance",
    text: "Travel insurance for all four",
    detail: "Including driving and mountain walking."
  },
  {
    id: "notify-bank",
    text: "Tell the bank/card company about the trip",
    detail: "Avoid a frozen card on first use abroad."
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
    detail: "For onsen, temples and any restaurant with a genkan entryway."
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
    detail: "A practical workaround for some onsens with a tattoo policy — check with each onsen first, as policy varies."
  }
];
