import type { Stay } from "./types";

// All booked. Coordinates are best-effort for each property's neighborhood —
// double check against the actual booking confirmation if pin-perfect
// accuracy matters (e.g. for a taxi driver).
export const stays: Stay[] = [
  {
    id: "stay-tokyo-shinjuku",
    name: "da Haus Shinjuku",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 2 rooms, first four nights in Tokyo",
    description:
      "The trip's first base — two rooms at da Haus Shinjuku. Shinjuku is Tokyo's best-connected neighborhood: every JR and subway line, direct trains to Nikko, and Omoide Yokocho's yakitori alleys on the doorstep.",
    image: "./images/stay-tokyo-shinjuku.jpg",
    address: "Shinjuku, Tokyo",
    coords: [35.6938, 139.7034],
    checkIn: "2026-11-01",
    checkOut: "2026-11-04",
    nights: 3,
    highlights: [
      "2 rooms — a central base for Asakusa, Ueno and the Nikko day trip",
      "Omoide Yokocho a short walk away",
      "Direct Tobu-line connection to Nikko"
    ]
  },
  {
    id: "stay-hakone",
    name: "Hakone Yutowa",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 1 night, onsen ryokan",
    description:
      "A traditional onsen ryokan stay with a kaiseki dinner plan — the trip's first slow-down night, close to the Hakone Ropeway and Owakudani.",
    image: "./images/stay-hakone-ryokan.jpg",
    address: "Hakone, Kanagawa",
    coords: [35.2323, 139.0508],
    checkIn: "2026-11-04",
    checkOut: "2026-11-05",
    nights: 1,
    highlights: [
      "Kaiseki dinner plan — check the tattoo policy in advance if relevant to anyone in the group",
      "Close to Owakudani and the Hakone Ropeway",
      "The rental car is picked up in Odawara the same morning, en route here"
    ],
    warnings: [
      "Many traditional onsens restrict visible tattoos — confirm the ryokan's policy in advance if this applies to anyone in the group"
    ]
  },
  {
    id: "stay-kawaguchiko",
    name: "Kawaguchiko Urban Resort Villa",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 1 night, Fuji Five Lakes",
    description:
      "A villa-style stay on Lake Kawaguchi, with space and views over the town of Fujikawaguchiko — a base for the Fuji Five Lakes day.",
    image: "./images/stay-kawaguchiko.jpg",
    address: "Fujikawaguchiko, Yamanashi",
    coords: [35.5060, 138.7715],
    checkIn: "2026-11-05",
    checkOut: "2026-11-06",
    nights: 1,
    highlights: [
      "Right on Lake Kawaguchi, a short drive from Oishi Park and Chureito Pagoda",
      "A calmer, more spacious stay than a standard hotel room"
    ]
  },
  {
    id: "stay-matsumoto",
    name: "Matsumoto Hotel Kagetsu",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 2 rooms, 1 night",
    description:
      "A central Matsumoto hotel, a short walk from the castle and Nakamachi Street's old warehouse district — the gateway to the Japanese Alps leg of the trip.",
    image: "./images/stay-matsumoto.jpg",
    address: "Matsumoto, Nagano",
    coords: [36.2400, 137.9715],
    checkIn: "2026-11-06",
    checkOut: "2026-11-07",
    nights: 1,
    highlights: [
      "2 rooms — walking distance to Matsumoto Castle and Nakamachi Street",
      "Send the big suitcases onward to Kyoto via Takkyubin from here"
    ]
  },
  {
    id: "stay-takayama",
    name: "Ryokan Warabino",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 2 nights, traditional ryokan",
    description:
      "A traditional ryokan in Takayama for two nights — futons, yukata robes, an onsen, and kaiseki dinners featuring Hida beef. The suitcases sent ahead from Tokyo on Nov 4 should be waiting here.",
    image: "./images/stay-takayama.jpg",
    address: "Takayama, Gifu",
    coords: [36.1435, 137.2540],
    checkIn: "2026-11-07",
    checkOut: "2026-11-09",
    nights: 2,
    highlights: [
      "Kaiseki dinners with Hida beef, one of the trip's food highlights",
      "Confirm room/privacy arrangements ahead — ryokan rooms can be shared-style",
      "The rental car stays with the group through both nights here — it isn't returned until Kanazawa on Nov 9"
    ]
  },
  {
    id: "stay-kanazawa",
    name: "SOKI Kanazawa",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 2 nights",
    description:
      "A well-located Kanazawa hotel near the station — the base for Kenrokuen, the castle, Omicho Market and the two historic teahouse/samurai districts. The rental car is returned at Kanazawa Station on arrival.",
    image: "./images/stay-kanazawa.jpg",
    address: "Kanazawa, Ishikawa",
    coords: [36.5775, 136.6485],
    checkIn: "2026-11-09",
    checkOut: "2026-11-11",
    nights: 2,
    highlights: [
      "Good walking distance to Omicho Market and Higashi Chaya",
      "The rental car is returned here — Kanazawa Station, Shinkansen East Exit, by 20:00 on Nov 9"
    ]
  },
  {
    id: "stay-kyoto",
    name: "Richmond Hotel Premier Kyoto Shijo",
    category: "stay",
    region: "south",
    shortDescription: "Booked — 4 nights, the trip's longest stay",
    description:
      "Four nights in the Kawaramachi/Shijo area — central Kyoto, walking distance to Gion and Nishiki Market, with easy train access to Arashiyama, Fushimi Inari and the Nara day trip.",
    image: "./images/stay-kyoto.jpg",
    address: "Kawaramachi/Shijo, Kyoto",
    coords: [35.0037, 135.7690],
    checkIn: "2026-11-11",
    checkOut: "2026-11-15",
    nights: 4,
    highlights: [
      "4 nights — the longest single stay of the trip, don't over-schedule every one of them",
      "Walking distance to Nishiki Market and Gion",
      "Suitcases shipped from Matsumoto on Nov 6 should be waiting here on arrival"
    ]
  },
  {
    id: "stay-tokyo-asakusa",
    name: "The Gate Hotel Kaminarimon",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 2 rooms, last two nights",
    description:
      "Two rooms right by Asakusa's Kaminarimon 'Thunder Gate' for the trip's final two nights — a calmer, more atmospheric base than Shinjuku for the last stretch, with an easy morning transfer to Haneda.",
    image: "./images/stay-tokyo-asakusa.jpg",
    address: "Asakusa, Tokyo",
    coords: [35.7107, 139.7960],
    checkIn: "2026-11-15",
    checkOut: "2026-11-17",
    nights: 2,
    highlights: [
      "2 rooms, steps from Senso-ji and the Kaminarimon gate",
      "The last Takkyubin shipment from Kyoto should be waiting here",
      "Straightforward morning transfer to Haneda for the flight home"
    ]
  }
];
