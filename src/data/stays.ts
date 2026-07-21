import type { Stay } from "./types";

// None of these are booked yet — each entry is a recommended AREA to book
// in (real neighborhoods, real train-line logic), not a specific hotel.
// Swap in the real property name, address and booking link once you've
// actually booked, and update coords to the exact property.
export const stays: Stay[] = [
  {
    id: "stay-tokyo-shinjuku",
    name: "Shinjuku, Tokyo — recommended base",
    category: "stay",
    region: "north",
    shortDescription: "Not yet booked — recommended area for the Tokyo stint",
    description:
      "Shinjuku is Tokyo's best-connected base — every JR and subway line, direct trains to Nikko, Kamakura and Hakone, and Omoide Yokocho's yakitori alleys on your doorstep. Book a hotel near Shinjuku Station (south or west exit) for the shortest walk with luggage.",
    image: "./images/stay-tokyo-shinjuku.jpg",
    address: "Shinjuku, Tokyo (exact hotel TBD)",
    coords: [35.6938, 139.7034],
    checkIn: "2026-11-01",
    checkOut: "2026-11-07",
    nights: 6,
    highlights: [
      "Direct trains to Nikko, Kamakura and Hakone from Shinjuku Station",
      "Omoide Yokocho and Golden Gai a short walk away",
      "Central for Asakusa, Shibuya, Harajuku and Ginza"
    ]
  },
  {
    id: "stay-hakone-ryokan",
    name: "Gora / Hakone-Yumoto — recommended ryokan",
    category: "stay",
    region: "north",
    shortDescription: "Not yet booked — a traditional onsen ryokan",
    description:
      "A traditional ryokan with an in-room or private hot-spring bath and a kaiseki dinner plan (look for 'ichi-shoku' or 'nihaku' plans that include both dinner and breakfast). Gora and Hakone-Yumoto both sit on the Hakone Tozan line, close to the ropeway and Lake Ashi.",
    image: "./images/stay-hakone-ryokan.jpg",
    address: "Gora or Hakone-Yumoto, Hakone, Kanagawa (exact ryokan TBD)",
    coords: [35.2323, 139.0508],
    checkIn: "2026-11-07",
    checkOut: "2026-11-09",
    nights: 2,
    highlights: [
      "In-room or private onsen bath — check tattoo policy in advance if relevant",
      "Kaiseki dinner + breakfast plan turns the stay into the trip's food highlight",
      "Walking distance or a short bus ride to the Hakone Ropeway"
    ],
    warnings: [
      "Many traditional onsens restrict visible tattoos — confirm the ryokan's policy before booking if this applies to anyone in the group"
    ]
  },
  {
    id: "stay-kyoto",
    name: "Kyoto Station / Shimogyo — recommended base",
    category: "stay",
    region: "south",
    shortDescription: "Not yet booked — recommended area for the Kyoto stint",
    description:
      "Kyoto Station puts you on the JR Nara Line (for Nara), the JR Special Rapid (for Osaka), and within a short bus or taxi ride of Fushimi Inari, Gion and Higashiyama. A wider, easier choice than staying deep in a quiet residential machiya district for a first visit.",
    image: "./images/stay-kyoto.jpg",
    address: "Kyoto Station area, Shimogyo Ward, Kyoto (exact hotel TBD)",
    coords: [34.9858, 135.7588],
    checkIn: "2026-11-09",
    checkOut: "2026-11-14",
    nights: 5,
    highlights: [
      "One JR ride from Nara and Osaka",
      "Short bus/taxi to Fushimi Inari, Gion and Higashiyama",
      "Coin lockers and luggage forwarding services right at the station"
    ]
  },
  {
    id: "stay-osaka",
    name: "Namba / Umeda, Osaka — recommended base",
    category: "stay",
    region: "south",
    shortDescription: "Not yet booked — recommended area for the Osaka stint",
    description:
      "Namba sits a short walk from Dotonbori and has a direct subway line to Universal Studios Japan; Umeda is the other solid option with easier Shin-Osaka Shinkansen access for the Himeji day trip. Either works — pick based on which sights matter more.",
    image: "./images/stay-osaka.jpg",
    address: "Namba or Umeda, Osaka (exact hotel TBD)",
    coords: [34.6627, 135.5006],
    checkIn: "2026-11-14",
    checkOut: "2026-11-16",
    nights: 2,
    highlights: [
      "Direct subway to Universal Studios Japan",
      "Walking distance to Dotonbori and Kuromon Market",
      "Easy Shinkansen access to Himeji via Shin-Osaka"
    ]
  },
  {
    id: "stay-tokyo-return",
    name: "Shinjuku, Tokyo — last-night base",
    category: "stay",
    region: "north",
    shortDescription: "Not yet booked — one last night before the flight home",
    description:
      "Same logic as the first Tokyo stay — Shinjuku's transport links make the last night easiest, with a straightforward morning transfer to Haneda.",
    image: "./images/stay-tokyo-shinjuku.jpg",
    address: "Shinjuku, Tokyo (exact hotel TBD)",
    coords: [35.6938, 139.7034],
    checkIn: "2026-11-16",
    checkOut: "2026-11-17",
    nights: 1,
    highlights: [
      "Straightforward morning transfer to Haneda for the flight home",
      "One last Omoide Yokocho or conveyor-belt sushi dinner"
    ]
  }
];
