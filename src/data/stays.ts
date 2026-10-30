import type { Stay } from "./types";

// Booked stays. Kanazawa, Kyoto and the final Tokyo stay are still being decided. Coordinates are best-effort for each property's neighborhood —
// double check against the actual booking confirmation if pin-perfect
// accuracy matters (e.g. for a taxi driver).
export const stays: Stay[] = [
  {
    id: "stay-tokyo-ginza",
    name: "Hotel Keihan Tsukiji Ginza Grande",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 3 nights, booking 1788608896",
    description:
      "First base in Tokyo, between Ginza and Tsukiji. Five minutes on foot to Tsukiji Outer Market for breakfast, walking distance to Ginza, and Higashi-Ginza station has a direct train from Narita.",
    image: "./images/stay-tokyo-shinjuku.jpg",
    address: "3-5-4 Tsukiji, Chuo City, Tokyo",
    coords: [35.6676, 139.7709],
    checkIn: "2026-11-01",
    checkOut: "2026-11-04",
    nights: 3,
    highlights: [
      "Booking 1788608896",
      "Tsukiji Outer Market a 5-minute walk away",
      "Direct Keisei/Toei train from Narita to Higashi-Ginza"
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
      "Dad's 60th birthday night"
    ]
  },
  {
    id: "stay-takayama",
    name: "fav Hida Takayama",
    category: "stay",
    region: "north",
    shortDescription: "Booked — 2 nights",
    description:
      "Modern apartment-style hotel near Takayama station, a walk from the old town and the morning markets. The suitcases sent from Tokyo on 4.11 wait here.",
    image: "./images/stay-takayama.jpg",
    address: "Takayama, Gifu (near the station)",
    coords: [36.1408, 137.2514],
    checkIn: "2026-11-07",
    checkOut: "2026-11-09",
    nights: 2,
    highlights: [
      "Walking distance to Sanmachi Suji and the Miyagawa morning market",
      "The car stays with us — returned in Kanazawa on 9.11"
    ]
  },
  {
    id: "stay-kanazawa",
    name: "SOKI Kanazawa",
    category: "stay",
    region: "north",
    shortDescription: "Booked — decision pending (alt: the square hotel KANAZAWA)",
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
    shortDescription: "Booked — decision pending (alt: GLANZ KEI Kyoto Station)",
    description:
      "Four nights in the Kawaramachi/Shijo area — central Kyoto, walking distance to Gion and Nishiki Market, with easy train access to Arashiyama, Fushimi Inari and Kurama.",
    image: "./images/stay-kyoto.jpg",
    address: "Kawaramachi/Shijo, Kyoto",
    coords: [35.0037, 135.7690],
    checkIn: "2026-11-11",
    checkOut: "2026-11-15",
    nights: 4,
    highlights: [
      "4 nights — the longest single stay of the trip, don't over-schedule every one of them",
      "Walking distance to Nishiki Market and Gion",
    ]
  },
  {
    id: "stay-tokyo-asakusa",
    name: "The Gate Hotel Kaminarimon",
    category: "stay",
    region: "north",
    shortDescription: "Booked 15–17.11 — decision pending",
    description:
      "Two rooms right by Asakusa's Kaminarimon 'Thunder Gate' for the trip's final two nights — a calmer, more atmospheric base than Shinjuku for the last stretch. Whether we keep it — and for how many nights — depends on the return date.",
    image: "./images/stay-tokyo-asakusa.jpg",
    address: "Asakusa, Tokyo",
    coords: [35.7107, 139.7960],
    checkIn: "2026-11-15",
    checkOut: "2026-11-17",
    nights: 2,
    highlights: [
      "2 rooms, steps from Senso-ji and the Kaminarimon gate",
      "The last Takkyubin shipment from Kyoto should be waiting here",
      "Return date still open (17 or 18.11)"
    ]
  }
];
