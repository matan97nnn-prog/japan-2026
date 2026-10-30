import type { Stay } from "./types";

// Hotel list as confirmed by the family on 30 Oct 2026. Booking.com scores and
// photos (hotlinked from Booking, not stored here) as of 30 Oct 2026. Kyoto (Nono) and
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/169450489.jpg?k=e5265f410b22d1180d9e50cc788dfa60eae758a024d51395ce70f94707c990f9&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/491928183.jpg?k=a9057581c92e66d63156651eefd6d02244ded597e44abd71becfdd2aa0bbb015&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/keihan-tsukiji-ginza-grande.html" },
    address: "3-5-4 Tsukiji, Chuo City, Tokyo",
    coords: [35.6688, 139.7716],
    checkIn: "2026-11-01",
    checkOut: "2026-11-04",
    nights: 3,
    rooms: "2 rooms · booked on Agoda · #1788608896",
    rating: 8.7,
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217329099.jpg?k=05d5537e01203d9994ac507fa303ca5d611932df6882cc6b01447354f6f3679b&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/240127283.jpg?k=2486b0e3f8abf9bb7eed51a6ebfcbbe6070fb4725e2d2caa07e870009e21a8cb&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/xiang-gen-yutowa.html" },
    address: "1300-27 Gora, Hakone, Kanagawa",
    coords: [35.2484, 139.0478],
    checkIn: "2026-11-04",
    checkOut: "2026-11-05",
    nights: 1,
    rooms: "2 rooms · Condominium A · 49 m² each",
    rating: 8.9,
    bookingLink: "https://www.booking.com/hotel/jp/xiang-gen-yutowa.html",
    website: "https://www.en.hakoneyutowa-hotel.jp/rooms/condominium-a/",
    highlights: [
      "Private hot-spring bath in each unit, plus the public bath and two free private baths in the main building",
      "Dinner plans are all-inclusive (buffet + beer, sake, wine), check whether ours includes meals",
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
      "A whole villa on the north shore, 3 min walk from Oishi Park, the birthday sunrise spot. Fuji and lake views from the terrace on a clear day.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233912123.jpg?k=7ae8f04f1cb5f87333f264b6fb72f6312bdb45d77c702986592795363c407f27&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/233913384.jpg?k=c4a3af1d1d1b28b2c77cca4f1733b953db8aa2ae997b086badf5cd71d8b6cc2f&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/kawaguchiko-urban-resort-villa.html" },
    address: "2585-122 Oishi, Fujikawaguchiko, Yamanashi",
    coords: [35.522, 138.739],
    checkIn: "2026-11-05",
    checkOut: "2026-11-06",
    nights: 1,
    rooms: "One villa for the four of us",
    rating: 9.3,
    bookingLink: "https://www.booking.com/hotel/jp/kawaguchiko-urban-resort-villa.html",
    highlights: [
      "Oishi Park a 3-minute walk, sunrise over Fuji on Dad's birthday",
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66781796.jpg?k=70354e5da2acd1e6802218c08d6bacc5828271f2207b6e740a978355029231df&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/541758150.jpg?k=7320ad68b76699939b33b2b96d1b5fcd8882d5bec574763acbeb52487351c9ad&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/matsumoto-kagetsu.html" },
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/523580518.jpg?k=0e40a9a999190620ed9d39d71c971c58f4715d69449837be9b945fb7a83caded&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/523584559.jpg?k=a807558b16352ad08d419b95bbfef328a8e24f1c2d10121c4f55b3e3a7eb4817&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/takayama-green.html" },
    address: "2-180 Nishinoisshikimachi, Takayama, Gifu",
    coords: [36.139, 137.2465],
    checkIn: "2026-11-07",
    checkOut: "2026-11-09",
    nights: 2,
    rooms: "2 rooms",
    rating: 8.8,
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225696922.jpg?k=81c0f6a745d0c32f6cbfee424d20e7e3731c24889b8dffb302381f40e52ee1bc&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/225696431.jpg?k=98b1c97b65f032a411ea2cbd82d2bac682985eaf234382c99d7b6516f84221e0&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/hotel-forza-kanazawa.html" },
    address: "2-10 Yasuemachi, Kanazawa, Ishikawa",
    coords: [36.5718, 136.6566],
    checkIn: "2026-11-09",
    checkOut: "2026-11-11",
    nights: 2,
    rooms: "2 rooms",
    rating: 9,
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281393712.jpg?k=8d5cd1da9bd4037da01749417c4e8b839d316cc3c78f2612e6cc263271ebd244&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/281396748.jpg?k=e5aa61ad67bdee6d6f41ed7ec3495e2b63c7b3c6221cefb1b88e47bcd1fca215&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/onyado-nono-kyoto-shichijo.html" },
    address: "491 Zaimokucho, Shimogyo Ward, Kyoto",
    coords: [34.9893, 135.7616],
    checkIn: "2026-11-11",
    checkOut: "2026-11-15",
    nights: 4,
    rooms: "Honyado Nono, 4 nights for now",
    rating: 9,
    bookingLink: "https://www.booking.com/hotel/jp/onyado-nono-kyoto-shichijo.html",
    highlights: [
      "Hot-spring baths with an open-air bath and sauna, perfect after walking days",
      "Free late-night ramen (yonaki soba) in the evening",
      "Kyoto Station 7 min, JR to Fushimi Inari and Arashiyama · check-in 15:00 · check-out 11:00"
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
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/579367246.jpg?k=c03a8b65ba17ebe95eccd490505b925adaa461ef9ad2ef0c8b6455b6737f21e1&o=",
    gallery: ["https://cf.bstatic.com/xdata/images/hotel/max500/579372582.jpg?k=43cbd5c8da082a20541f00415a63a8380603484f4fb41f098d901941f9fe93f9&o="],
    imageCredit: { author: "Booking.com", license: "Hotel photo", source: "https://www.booking.com/hotel/jp/daiichi-tokyo.html" },
    address: "1-2-6 Shimbashi, Minato City, Tokyo",
    coords: [35.6668, 139.757],
    checkIn: "2026-11-15",
    checkOut: "2026-11-17",
    nights: 2,
    rooms: "For now, return date still open",
    rating: 9,
    bookingLink: "https://www.booking.com/hotel/jp/daiichi-tokyo.html",
    website: "https://www.hankyu-hotel.com/hotel/dh/dhtokyo",
    highlights: [
      "Ginza line straight to Asakusa (20 min)",
      "World buffet restaurant and a French patisserie in the hotel",
      "Check-in 15:00 · check-out 12:00"
    ]
  }
];
