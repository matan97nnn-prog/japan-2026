import type { Stay } from "./types";

// Hotel list as confirmed by the family on 30 Oct 2026. Booking.com scores
// are approximate (taken from search snapshots, Oct 2026). Kyoto (Nono) and
// the final Tokyo stay are "for now".
export const stays: Stay[] = [
  {
    id: "stay-tokyo-ginza",
    name: "Hotel Keihan Tsukiji Ginza Grande",
    category: "stay",
    region: "north",
    shortDescription: "1–4.11 · 3 nights · 2 rooms",
    description:
      "Quiet street between Tsukiji and Ginza. Tsukiji station (Hibiya line) 2 min, the outer market about 8 min on foot, Ginza a walk away.",
    image: "./images/stay-tokyo-shinjuku.jpg",
    address: "3-5-4 Tsukiji, Chuo City, Tokyo",
    coords: [35.6688, 139.7716],
    checkIn: "2026-11-01",
    checkOut: "2026-11-04",
    nights: 3,
    rooms: "2 rooms · booked on Agoda · #1788608896",
    rating: 8.9,
    bookingLink: "https://www.booking.com/hotel/jp/keihan-tsukiji-ginza-grande.html",
    highlights: [
      "Tsukiji Outer Market for breakfast, ~8 min walk",
      "Direct train from Narita to Higashi-Ginza",
      "Check-in 15:00 · check-out 11:00"
    ]
  },
  {
    id: "stay-hakone",
    name: "Hakone Yutowa",
    category: "stay",
    region: "north",
    shortDescription: "4–5.11 · 1 night · 2 × Condominium A",
    description:
      "Modern onsen hotel in Gora, 5 min from Gora station. Our rooms are 'Condominium A' units in the separate condo building: ~49 m² each, with a private view-bath of hot-spring water and a mini-kitchen.",
    image: "./images/stay-hakone-ryokan.jpg",
    address: "1300-27 Gora, Hakone, Kanagawa",
    coords: [35.2484, 139.0478],
    checkIn: "2026-11-04",
    checkOut: "2026-11-05",
    nights: 1,
    rooms: "2 rooms · Condominium A · 49 m² each",
    rating: 9.1,
    bookingLink: "https://www.booking.com/hotel/jp/xiang-gen-yutowa.html",
    website: "https://www.en.hakoneyutowa-hotel.jp/rooms/condominium-a/",
    highlights: [
      "Private hot-spring bath in each unit, plus the public bath and two free private baths in the main building",
      "Dinner plans are all-inclusive (buffet + beer, sake, wine) — check whether ours includes meals",
      "Check-in 15:00 · check-out 10:00"
    ]
  },
  {
    id: "stay-kawaguchiko",
    name: "Kawaguchiko Urban Resort Villa",
    category: "stay",
    region: "north",
    shortDescription: "5–6.11 · 1 night · one villa for 4",
    description:
      "A whole villa on the north shore, 3 min walk from Oishi Park — the birthday sunrise spot. Fuji and lake views from the terrace on a clear day.",
    image: "./images/stay-kawaguchiko.jpg",
    address: "2585-122 Oishi, Fujikawaguchiko, Yamanashi",
    coords: [35.522, 138.739],
    checkIn: "2026-11-05",
    checkOut: "2026-11-06",
    nights: 1,
    rooms: "One villa for the four of us",
    rating: 9.2,
    bookingLink: "https://www.booking.com/hotel/jp/kawaguchiko-urban-resort-villa.html",
    highlights: [
      "Oishi Park a 3-minute walk — sunrise over Fuji on Dad's birthday",
      "Kitchen, terrace, free parking",
      "Check-in 15:00 · check-out 10:00"
    ]
  },
  {
    id: "stay-matsumoto",
    name: "Matsumoto Hotel Kagetsu",
    category: "stay",
    region: "north",
    shortDescription: "6–7.11 · 1 night · 2 rooms",
    description:
      "Matsumoto's oldest hotel (1887), furnished with local Matsumoto folk-craft furniture. 5 min walk to the castle and Nawate Street.",
    image: "./images/stay-matsumoto.jpg",
    address: "4-8-9 Ote, Matsumoto, Nagano",
    coords: [36.2364, 137.9714],
    checkIn: "2026-11-06",
    checkOut: "2026-11-07",
    nights: 1,
    rooms: "2 rooms",
    rating: 8.4,
    bookingLink: "https://www.booking.com/hotel/jp/matsumoto-kagetsu.html",
    website: "https://matsumotohotel-kagetsu.com/en/",
    highlights: [
      "Dad's 60th birthday night",
      "Large bath with spring water from Japan's '100 best waters'",
      "Check-in 15:00 · check-out 10:00 or 11:00 (confirm)"
    ]
  },
  {
    id: "stay-takayama",
    name: "Hida Takayama Onsen Takayama Green Hotel",
    category: "stay",
    region: "north",
    shortDescription: "7–9.11 · 2 nights · 2 rooms",
    description:
      "Large onsen hotel 6 min walk from Takayama station, with a Japanese-garden open-air bath. 15 min walk to the old town and morning markets. The suitcases from Tokyo wait here.",
    image: "./images/stay-takayama.jpg",
    address: "2-180 Nishinoisshikimachi, Takayama, Gifu",
    coords: [36.139, 137.2465],
    checkIn: "2026-11-07",
    checkOut: "2026-11-09",
    nights: 2,
    rooms: "2 rooms",
    rating: 9.1,
    bookingLink: "https://www.booking.com/hotel/jp/takayama-green.html",
    website: "https://www.takayama-gh.com/",
    highlights: [
      "'Tenryo no Yu' natural hot spring with an open-air garden bath",
      "Buffet dinner with Hida beef; also teppanyaki and Japanese restaurants",
      "Check-in 15:00 · check-out ~10:00"
    ]
  },
  {
    id: "stay-kanazawa",
    name: "Hotel Forza Kanazawa",
    category: "stay",
    region: "north",
    shortDescription: "9–11.11 · 2 nights · 2 rooms",
    description:
      "Modern hotel across the road from Omicho Market, 10 min walk from the station; Kenrokuen and Higashi Chaya on foot.",
    image: "./images/stay-kanazawa.jpg",
    address: "2-10 Yasuemachi, Kanazawa, Ishikawa",
    coords: [36.5718, 136.6566],
    checkIn: "2026-11-09",
    checkOut: "2026-11-11",
    nights: 2,
    rooms: "2 rooms",
    rating: 9.0,
    bookingLink: "https://www.booking.com/hotel/jp/hotel-forza-kanazawa.html",
    website: "https://www.hotelforza.jp/kanazawa/",
    highlights: [
      "Omicho Market ~3 min walk",
      "Breakfast buffet with Kanazawa dishes",
      "No large bath, no parking (the car is returned before) · check-in 14:00 · check-out 11:00"
    ]
  },
  {
    id: "stay-kyoto",
    name: "Onyado Nono Kyoto Shichijo",
    category: "stay",
    region: "south",
    shortDescription: "11–15.11 · 4 nights (for now)",
    description:
      "Japanese-style hotel with tatami floors throughout (barefoot inside) and a two-floor natural hot-spring bath. 7 min walk from Kyoto Station.",
    image: "./images/stay-kyoto.jpg",
    address: "491 Zaimokucho, Shimogyo Ward, Kyoto",
    coords: [34.9893, 135.7616],
    checkIn: "2026-11-11",
    checkOut: "2026-11-15",
    nights: 4,
    rooms: "Honyado Nono — 4 nights for now",
    rating: 9.4,
    bookingLink: "https://www.booking.com/hotel/jp/onyado-nono-kyoto-shichijo.html",
    highlights: [
      "Hot-spring baths with an open-air bath and sauna — perfect after walking days",
      "Free late-night ramen (yonaki soba) in the evening",
      "Kyoto Station 7 min — JR to Fushimi Inari and Arashiyama · check-in 15:00 · check-out 11:00"
    ]
  },
  {
    id: "stay-tokyo-end",
    name: "Dai-ichi Hotel Tokyo",
    category: "stay",
    region: "north",
    shortDescription: "15–17.11 · 2 nights (for now)",
    description:
      "Classic hotel in Shimbashi, 2 min underground to Shimbashi station (JR, Ginza line), 5 min walk to Ginza.",
    image: "./images/stay-tokyo-asakusa.jpg",
    address: "1-2-6 Shimbashi, Minato City, Tokyo",
    coords: [35.6668, 139.757],
    checkIn: "2026-11-15",
    checkOut: "2026-11-17",
    nights: 2,
    rooms: "For now — return date still open",
    rating: 8.8,
    bookingLink: "https://www.booking.com/hotel/jp/daiichi-tokyo.html",
    website: "https://www.hankyu-hotel.com/hotel/dh/dhtokyo",
    highlights: [
      "Ginza line straight to Asakusa (20 min)",
      "World buffet restaurant and a French patisserie in the hotel",
      "Check-in 15:00 · check-out 12:00"
    ]
  }
];
