import type { Day } from "./types";

export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-11-01",
    weekday: "Sunday",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Landing in Tokyo",
    subtitle: "Arrive via Dubai, transfer in, first taste of the city",
    leadImage: "./images/hero/shibuya-crossing-night.jpg",
    activities: [
      {
        time: "Evening",
        title: "Land at Haneda (HND), transfer to Shinjuku",
        description:
          "Connecting through Dubai on flydubai. Haneda is the closer airport to central Tokyo — Tokyo Monorail + JR Yamanote, or the Airport Limousine Bus direct to the hotel, is the easiest first move after a long flight.",
        rideToNext: { duration: "45 min", note: "Haneda → Shinjuku, monorail + Yamanote line" }
      },
      {
        time: "Night",
        title: "Settle in, konbini run, early to bed",
        description:
          "Don't fight the jet lag on night one. A 7-Eleven or Lawson run for onigiri, a hot bath, and an early sleep sets up tomorrow properly."
      }
    ],
    driveNotes: "Haneda → Shinjuku ≈ 45 min by train",
    gear: [
      { item: "Comfortable layers — Tokyo in November is mild by day, cool at night (10–17°C)" },
      { item: "A portable phone charger for the long travel day" },
      { item: "IC card ready to top up (Suica/Pasmo) — or use the phone wallet version" }
    ],
    dayTips: [
      "Buy a Suica/Pasmo IC card (or add one to Apple/Google Wallet) the moment you land — it covers every train, bus and konbini purchase for the whole trip",
      "Pocket wifi or an eSIM should be activated before you leave the airport",
      "Don't schedule anything demanding for day one — let the group sleep off the flight"
    ],
    italianWords: [
      {
        word: "Konnichiwa",
        pronounce: "kohn-nee-chee-wah",
        meaning: "Hello / good afternoon",
        example: "Konnichiwa, hajimemashite!",
        exampleMeaning: "Hello, nice to meet you!"
      },
      {
        word: "Arigatou gozaimasu",
        pronounce: "ah-ree-GAH-toh go-zai-mahs",
        meaning: "Thank you very much",
        example: "Hontou ni arigatou gozaimasu.",
        exampleMeaning: "Thank you so much."
      }
    ]
  },
  {
    dayNumber: 2,
    date: "2026-11-02",
    weekday: "Monday",
    departureTime: "09:00",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Old Tokyo — Asakusa & the Skytree",
    activities: [
      {
        time: "09:30",
        title: "Senso-ji & Nakamise-dori",
        description:
          "Tokyo's oldest temple, through the Kaminarimon 'Thunder Gate'. Walk Nakamise-dori's stalls for senbei and old-fashioned souvenirs before the temple gets busy.",
        attractionId: "senso-ji",
        tag: "culture",
        rideToNext: { duration: "15 min", note: "Asakusa → Skytree, on foot or one train stop" }
      },
      {
        time: "Midday",
        title: "Tokyo Skytree",
        description:
          "Tallest tower in Japan — the Tembo Deck at 350 m gives a clear-day view stretching to Mt Fuji. Book timed-entry tickets online to skip the queue.",
        attractionId: "tokyo-skytree",
        tag: "view",
        optional: true
      },
      {
        time: "Evening",
        title: "Dinner in Asakusa",
        description: "Tempura or a casual izakaya near the temple — an early, easy night after a long travel day yesterday."
      }
    ],
    restaurants: ["rest-n-asakusa-tempura"],
    drinkOfTheDay: {
      name: "Asahi Super Dry (draft)",
      type: "beer",
      pairing: "Japan's everyday beer, ice cold, alongside tempura or yakitori — the simplest way to toast landing in Tokyo.",
      servingNote: "Draft, in a frosted glass"
    },
    gear: [
      { item: "Comfortable walking shoes — a lot of it is on foot" },
      { item: "Coins/small change for shrine offerings and vending machines" }
    ],
    dayTips: [
      "Senso-ji is busiest 10:00–14:00 — arrive at opening (06:00 grounds, shops open ~09:00) for a quieter Nakamise-dori",
      "The Skytree's cheaper Tembo Deck (350 m) is plenty; skip the upsell to the 450 m Tembo Galleria unless it's a perfectly clear day"
    ],
    italianWords: [
      {
        word: "Sumimasen",
        pronounce: "soo-mee-mah-sen",
        meaning: "Excuse me / sorry",
        example: "Sumimasen, toire wa doko desu ka?",
        exampleMeaning: "Excuse me, where is the bathroom?"
      },
      {
        word: "Oishii",
        pronounce: "oh-EE-shee",
        meaning: "Delicious",
        example: "Kore, oishii desu ne!",
        exampleMeaning: "This is delicious, isn't it!"
      }
    ]
  },
  {
    dayNumber: 3,
    date: "2026-11-03",
    weekday: "Tuesday",
    departureTime: "09:30",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Meiji Jingu, Harajuku & Shibuya",
    subtitle: "Culture Day (Bunka no Hi) — a national holiday, so expect it lively",
    activities: [
      {
        time: "09:30",
        title: "Meiji Jingu",
        description:
          "A forested shrine in the middle of the city — 100,000 trees donated from across Japan, planted for Emperor Meiji in the 1920s. Calm and green, a total contrast to what's next.",
        attractionId: "meiji-jingu",
        tag: "culture",
        rideToNext: { duration: "10 min", note: "Meiji Jingu → Takeshita-dori, on foot" }
      },
      {
        time: "Midday",
        title: "Takeshita-dori & Harajuku",
        description: "Crepe stands, pop fashion, teenage Tokyo at full volume. Lunch here is part of the show.",
        tag: "culture",
        rideToNext: { duration: "15 min", note: "Harajuku → Shibuya, one train stop or a walk" }
      },
      {
        time: "Afternoon",
        title: "Shibuya Crossing & Shibuya Sky",
        description:
          "The world's busiest pedestrian crossing, best watched first from the Starbucks above it, then walked. Shibuya Sky's rooftop deck (book ahead) is the money shot at sunset.",
        attractionId: "shibuya-crossing",
        tag: "view"
      }
    ],
    dayTips: [
      "November 3 is Culture Day (文化の日), a Japanese public holiday — museums often have free admission but Harajuku/Shibuya are busier than a normal Tuesday",
      "Shibuya Sky tickets sell out at sunset slots — book the specific time slot in advance"
    ],
    drinkOfTheDay: {
      name: "Yuzu highball",
      type: "cocktail",
      pairing: "Whisky, soda and yuzu citrus — bright and easy, a good match for a long day of walking neighborhoods.",
      servingNote: "Tall glass, plenty of ice"
    },
    italianWords: [
      {
        word: "Kawaii",
        pronounce: "kah-WAH-ee",
        meaning: "Cute",
        example: "Kono kaban, kawaii!",
        exampleMeaning: "This bag is so cute!"
      },
      {
        word: "Sugoi",
        pronounce: "soo-GOH-ee",
        meaning: "Amazing / wow",
        example: "Sugoi! Hito ga ippai!",
        exampleMeaning: "Wow! So many people!"
      }
    ]
  },
  {
    dayNumber: 4,
    date: "2026-11-04",
    weekday: "Wednesday",
    departureTime: "07:30",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Tsukiji breakfast, Ginza & teamLab",
    activities: [
      {
        time: "08:00",
        title: "Tsukiji Outer Market breakfast",
        description:
          "The wholesale fish auction moved to Toyosu, but the outer market's food stalls remain — the best breakfast in Tokyo. Fresh uni, tamagoyaki skewers, tuna over rice.",
        attractionId: "tsukiji-outer-market",
        tag: "food",
        rideToNext: { duration: "20 min", note: "Tsukiji → Ginza, on foot" }
      },
      {
        time: "Midday",
        title: "Ginza",
        description: "Tokyo's flagship shopping district — mostly a walk-and-window-shop stop, with a stray department-store basement food hall (depachika) worth a detour.",
        tag: "culture",
        optional: true,
        rideToNext: { duration: "30 min", note: "Ginza → Toyosu, train" }
      },
      {
        time: "Afternoon",
        title: "teamLab Planets TOKYO",
        description:
          "A barefoot, wade-through-water digital art museum — genuinely for all ages. Book a specific entry slot online well ahead; it regularly sells out.",
        attractionId: "teamlab-planets",
        tag: "family"
      }
    ],
    dayTips: [
      "teamLab Planets involves walking through ankle-deep water — wear clothes you can roll up and bring a small towel",
      "Tsukiji Outer Market stalls start closing by early afternoon — go for breakfast, not lunch"
    ],
    drinkOfTheDay: {
      name: "Junmai sake (chilled)",
      type: "other",
      pairing: "A clean, rice-forward sake after a fish-and-rice breakfast crawl — the natural pairing tonight.",
      servingNote: "Chilled, small ceramic cup (choko)"
    },
    italianWords: [
      {
        word: "Itadakimasu",
        pronounce: "ee-tah-dah-kee-mahs",
        meaning: "Said before eating (\"I gratefully receive\")",
        example: "Itadakimasu! Tabemashou.",
        exampleMeaning: "Itadakimasu! Let's eat."
      },
      {
        word: "Gochisousama deshita",
        pronounce: "go-chee-SOH-sah-mah desh-ta",
        meaning: "Said after eating, thanking for the meal",
        example: "Oishikatta desu, gochisousama deshita.",
        exampleMeaning: "It was delicious, thank you for the meal."
      }
    ]
  },
  {
    dayNumber: 5,
    date: "2026-11-05",
    weekday: "Thursday",
    departureTime: "07:00",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Day trip — Nikko",
    subtitle: "Peak autumn colors in the mountains",
    activities: [
      {
        time: "07:00",
        title: "Train to Nikko",
        description: "Tobu Limited Express direct from Asakusa (~2 h) is the easiest option — reserve seats ahead, this train fills up in leaf-peeping season.",
        rideToNext: { duration: "2 h", note: "Asakusa → Tobu-Nikko" }
      },
      {
        time: "10:30",
        title: "Toshogu Shrine",
        description:
          "The elaborate, gilded mausoleum of shogun Tokugawa Ieyasu, UNESCO-listed and dripping in carvings — including the original 'see no evil, hear no evil, speak no evil' monkeys. Early November is peak koyo (autumn foliage) around Nikko.",
        attractionId: "nikko-toshogu",
        tag: "culture"
      },
      {
        time: "Afternoon",
        title: "Kanmangafuchi Abyss walk",
        description: "A short, easy riverside trail lined with rows of moss-covered Jizo statues, especially pretty against the fall colors.",
        tag: "nature",
        optional: true
      }
    ],
    driveNotes: "Asakusa ↔ Nikko ≈ 2 h each way by direct limited express",
    dayTips: [
      "This is a long day — leave by 07:00 and expect to be back in Tokyo by 20:00",
      "Reserve the Tobu Limited Express seats in advance during autumn foliage season",
      "Layer up — Nikko sits in the mountains and runs several degrees cooler than Tokyo"
    ],
    drinkOfTheDay: {
      name: "Umeshu (plum wine)",
      type: "other",
      pairing: "Sweet and easy after a long day of walking — a good one to unwind with back in Tokyo.",
      servingNote: "On the rocks, or with soda"
    },
    italianWords: [
      {
        word: "Momiji",
        pronounce: "moh-MEE-jee",
        meaning: "Autumn leaves / maple",
        example: "Momiji ga kirei desu ne.",
        exampleMeaning: "The autumn leaves are beautiful, aren't they."
      }
    ]
  },
  {
    dayNumber: 6,
    date: "2026-11-06",
    weekday: "Friday",
    departureTime: "08:30",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Day trip — Kamakura",
    subtitle: "The coastal Great Buddha, last Tokyo-base day",
    activities: [
      {
        time: "08:30",
        title: "Train to Kamakura",
        description: "JR from Tokyo Station direct to Kamakura, about an hour.",
        rideToNext: { duration: "1 h", note: "Tokyo → Kamakura, JR" }
      },
      {
        time: "10:00",
        title: "Kotoku-in — the Great Buddha",
        description:
          "An 11.4 m bronze Amida Buddha cast in 1252, sitting in the open air since a 15th-century tsunami swept its housing away. You can step inside the hollow statue for a small extra fee.",
        attractionId: "kamakura-daibutsu",
        tag: "culture",
        rideToNext: { duration: "20 min", note: "Kotoku-in → Komachi-dori, on foot / local bus" }
      },
      {
        time: "Afternoon",
        title: "Komachi-dori & Tsurugaoka Hachimangu",
        description: "A lively shopping street for lunch and snacks, leading to Kamakura's main shrine.",
        tag: "food"
      }
    ],
    driveNotes: "Tokyo ↔ Kamakura ≈ 1 h each way by JR",
    dayTips: [
      "Last night at the Tokyo base — repack tonight, tomorrow moves to Hakone",
      "Kamakura gets busy on weekends; a Friday visit like this one is the easier day"
    ],
    drinkOfTheDay: {
      name: "Kamakura craft beer",
      type: "beer",
      pairing: "A local IPA or lager from one of Kamakura's small coastal breweries — a relaxed way to close the Tokyo stint.",
      servingNote: "Bottled or draft, whatever the izakaya has on tap"
    },
    italianWords: [
      {
        word: "Umi",
        pronounce: "oo-mee",
        meaning: "Sea / ocean",
        example: "Kamakura no umi wa kirei desu.",
        exampleMeaning: "Kamakura's sea is beautiful."
      },
      {
        word: "Ganbatte",
        pronounce: "gahn-BAH-teh",
        meaning: "Good luck / do your best",
        example: "Ashita mo ganbatte!",
        exampleMeaning: "Do your best tomorrow too!"
      }
    ]
  },
  {
    dayNumber: 7,
    date: "2026-11-07",
    weekday: "Saturday",
    departureTime: "10:00",
    region: "north",
    base: "Hakone",
    title: "On to Hakone — open-air art & onsen",
    subtitle: "Move base from Tokyo to a Hakone ryokan",
    leadImage: "./images/hero/hakone-fuji-lake.jpg",
    activities: [
      {
        time: "10:00",
        title: "Train to Hakone-Yumoto",
        description: "Odakyu Romancecar direct from Shinjuku (~85 min) — reserved seats, scenic and easy with luggage.",
        rideToNext: { duration: "1 h 25", note: "Shinjuku → Hakone-Yumoto, Romancecar" }
      },
      {
        time: "Midday",
        title: "Hakone Open-Air Museum",
        description:
          "Sculpture park with a permanent Picasso pavilion, set against the hills — a rare museum kids genuinely enjoy since half of it is outdoors to climb and explore.",
        attractionId: "hakone-open-air-museum",
        tag: "culture"
      },
      {
        time: "Evening",
        title: "Check in, ryokan kaiseki dinner, onsen",
        description:
          "A multi-course kaiseki dinner served in-room or in a private dining room, then the hot-spring baths — this is the trip's slow-down night."
      }
    ],
    driveNotes: "Shinjuku → Hakone-Yumoto ≈ 1 h 25 by Romancecar",
    restaurants: ["rest-n-hakone-ryokan-kaiseki"],
    gear: [
      { item: "A small overnight bag — full luggage can stay at the ryokan while you day-trip Hakone tomorrow" },
      { item: "No swimwear needed for a traditional onsen — modesty towels are provided" }
    ],
    dayTips: [
      "Traditional onsen etiquette: wash and rinse thoroughly at the stall before entering the shared bath, and know that most traditional onsens still restrict visible tattoos — ask the ryokan in advance if this applies to anyone in the group",
      "Book the ryokan's dinner-included plan (ichi-shoku plan) — kaiseki is half the reason to stay in Hakone"
    ],
    drinkOfTheDay: {
      name: "Sake pairing with kaiseki",
      type: "other",
      pairing: "The ryokan will usually offer a small regional sake flight matched to the courses — worth saying yes to.",
      servingNote: "Served warm or chilled depending on the grade, in small ceramic cups"
    },
    italianWords: [
      {
        word: "Onsen",
        pronounce: "OHN-sen",
        meaning: "Hot spring (bath)",
        example: "Onsen ni hairimashou.",
        exampleMeaning: "Let's get into the hot spring."
      },
      {
        word: "Yukkuri",
        pronounce: "yook-KOO-ree",
        meaning: "Slowly / take it easy",
        example: "Kyou wa yukkuri shimasu.",
        exampleMeaning: "Today we'll take it easy."
      }
    ]
  },
  {
    dayNumber: 8,
    date: "2026-11-08",
    weekday: "Sunday",
    departureTime: "09:00",
    region: "north",
    base: "Hakone",
    title: "Owakudani, Lake Ashi & Mt Fuji views",
    activities: [
      {
        time: "09:00",
        title: "Hakone Ropeway to Owakudani",
        description:
          "A volcanic valley of sulphur vents and bubbling ground — the ropeway glides right over it, with a clear-day Mt Fuji view from the station. Try the local kuro-tamago (black eggs, boiled in the sulphur springs — said to add years to your life).",
        attractionId: "hakone-owakudani",
        tag: "nature",
        rideToNext: { duration: "30 min", note: "Owakudani → Togendai, ropeway" }
      },
      {
        time: "Midday",
        title: "Lake Ashi pirate ship cruise",
        description: "A theatrical 'pirate ship' ferry across the lake, Mt Fuji behind it on a clear day, ending near the Hakone Shrine floating torii gate.",
        attractionId: "hakone-lake-ashi",
        tag: "view"
      },
      {
        time: "Evening",
        title: "Second onsen night",
        description: "Back to the ryokan for another kaiseki dinner and bath before tomorrow's move to Kyoto."
      }
    ],
    dayTips: [
      "Mt Fuji is shy — it hides behind cloud more mornings than not. Go early for the best odds",
      "The Hakone Free Pass covers the ropeway, cruise and local buses in one ticket — buy it in Odawara or Shinjuku before heading up"
    ],
    drinkOfTheDay: {
      name: "Whisky highball",
      type: "cocktail",
      pairing: "Japanese whisky, soda, plenty of ice — a crisp way to close a mountain-air day.",
      servingNote: "Tall glass, built at the table"
    },
    italianWords: [
      {
        word: "Fuji-san",
        pronounce: "foo-jee-sahn",
        meaning: "Mount Fuji",
        example: "Kyou wa Fuji-san ga miemasu!",
        exampleMeaning: "Today we can see Mt Fuji!"
      },
      {
        word: "Kirei",
        pronounce: "kee-REH-ee",
        meaning: "Beautiful / pretty",
        example: "Kono keshiki, kirei da ne.",
        exampleMeaning: "This view is beautiful, isn't it."
      }
    ]
  },
  {
    dayNumber: 9,
    date: "2026-11-09",
    weekday: "Monday",
    departureTime: "10:00",
    region: "transit",
    base: "Hakone → Kyoto",
    title: "Onward to Kyoto",
    subtitle: "Shinkansen day — Kanto to Kansai",
    activities: [
      {
        time: "10:00",
        title: "Odawara → Kyoto by Shinkansen",
        description:
          "Hakone-Yumoto to Odawara by local train, then the Tokaido Shinkansen direct to Kyoto (~2 h 20). No need to backtrack through Tokyo — Odawara has its own Shinkansen platform.",
        rideToNext: { duration: "2 h 40", note: "Hakone-Yumoto → Odawara → Kyoto, incl. connection" }
      },
      {
        time: "Evening",
        title: "Check in, evening walk through Gion",
        description:
          "Kyoto's historic geisha district — lantern-lit lanes, machiya wooden townhouses, a chance of spotting a geiko or maiko heading to an appointment (be respectful — no blocking their path for photos).",
        attractionId: "gion-district",
        tag: "culture"
      }
    ],
    driveNotes: "Hakone-Yumoto → Kyoto ≈ 2 h 40 total (local train + Tokaido Shinkansen)",
    dayTips: [
      "Reserve Shinkansen seats ahead in autumn foliage season — unreserved cars can be standing-room only",
      "Kyoto Station has coin lockers if you want to explore Gion before checking in"
    ],
    drinkOfTheDay: {
      name: "Sake tasting flight",
      type: "other",
      pairing: "Kyoto's Fushimi district is one of Japan's great sake-brewing regions — a good night to start sampling before visiting a brewery later this week.",
      servingNote: "Small tasting flight, three grades side by side"
    },
    italianWords: [
      {
        word: "Shinkansen",
        pronounce: "sheen-KAHN-sen",
        meaning: "Bullet train",
        example: "Shinkansen wa hayai desu.",
        exampleMeaning: "The bullet train is fast."
      },
      {
        word: "Machiya",
        pronounce: "mah-CHEE-yah",
        meaning: "Traditional wooden townhouse",
        example: "Kono machiya wa furui desu.",
        exampleMeaning: "This machiya is old."
      }
    ]
  },
  {
    dayNumber: 10,
    date: "2026-11-10",
    weekday: "Tuesday",
    departureTime: "07:00",
    region: "south",
    base: "Kyoto",
    title: "Fushimi Inari & eastern Kyoto",
    activities: [
      {
        time: "07:00",
        title: "Fushimi Inari Taisha — the torii tunnels",
        description:
          "Thousands of vermillion torii gates climbing the mountain, dedicated to Inari, the god of rice and prosperity. Go at opening — the lower gates are a crowd crush by mid-morning, near-empty at dawn.",
        attractionId: "fushimi-inari",
        tag: "culture",
        rideToNext: { duration: "25 min", note: "Fushimi Inari → Kiyomizu-dera, train + walk" }
      },
      {
        time: "Midday",
        title: "Kiyomizu-dera & Higashiyama",
        description:
          "A wooden temple built without a single nail, on a hillside stage overlooking the city, followed by the sloped lanes of Higashiyama — Sannenzaka and Ninenzaka — lined with old shops.",
        attractionId: "kiyomizu-dera",
        tag: "culture"
      }
    ],
    dayTips: [
      "You don't need to walk the entire Fushimi Inari trail (it's a 2–3 h round trip up the mountain) — the first 30–40 minutes past the main gates capture the iconic tunnel views",
      "Sannenzaka and Ninenzaka's stone steps are uneven — good shoes over anything with a heel"
    ],
    drinkOfTheDay: {
      name: "Junmai Daiginjo sake",
      type: "other",
      pairing: "The premium grade, from a Fushimi brewery down the hill from this morning's shrine — a fitting toast to the day.",
      servingNote: "Chilled, in a small glass to appreciate the aroma"
    },
    italianWords: [
      {
        word: "Torii",
        pronounce: "toh-REE",
        meaning: "Shrine gate",
        example: "Takusan no torii ga arimasu.",
        exampleMeaning: "There are so many torii gates."
      },
      {
        word: "Jinja",
        pronounce: "JEEN-jah",
        meaning: "Shinto shrine",
        example: "Kono jinja wa yuumei desu.",
        exampleMeaning: "This shrine is famous."
      }
    ]
  },
  {
    dayNumber: 11,
    date: "2026-11-11",
    weekday: "Wednesday",
    departureTime: "08:00",
    region: "south",
    base: "Kyoto",
    title: "Arashiyama bamboo & the Golden Pavilion",
    activities: [
      {
        time: "08:00",
        title: "Arashiyama Bamboo Grove & Tenryu-ji",
        description:
          "A towering bamboo corridor, best walked at opening before the tour groups arrive. Tenryu-ji's landscaped garden next door is a UNESCO World Heritage site and rarely crowded.",
        attractionId: "arashiyama-bamboo",
        tag: "nature",
        rideToNext: { duration: "35 min", note: "Arashiyama → Kinkaku-ji, bus/taxi" }
      },
      {
        time: "Midday",
        title: "Kinkaku-ji — the Golden Pavilion",
        description:
          "A gold-leaf-covered pavilion reflected in its own pond — one of Kyoto's unmissable postcard sights, especially framed by peak autumn foliage in mid-November.",
        attractionId: "kinkaku-ji",
        tag: "view"
      }
    ],
    dayTips: [
      "Arashiyama's bamboo grove is free and open 24/7 but genuinely magical only in the first hour after sunrise, before the crowds",
      "Rent a bike near Arashiyama station if the group wants to cover the Sagano area faster"
    ],
    drinkOfTheDay: {
      name: "Matcha liqueur",
      type: "digestif",
      pairing: "A Kyoto specialty — matcha blended into a liqueur, sweet and slightly bitter, a nice nightcap after a day of temples.",
      servingNote: "On the rocks, or with milk over ice"
    },
    italianWords: [
      {
        word: "Take",
        pronounce: "tah-keh",
        meaning: "Bamboo",
        example: "Take no mori wa suzushii desu.",
        exampleMeaning: "The bamboo forest is cool (refreshing)."
      },
      {
        word: "Kin'iro",
        pronounce: "keen-EE-roh",
        meaning: "Golden colour",
        example: "Kin'iro no o-tera desu ne.",
        exampleMeaning: "It's a golden-colored temple, isn't it."
      }
    ]
  },
  {
    dayNumber: 12,
    date: "2026-11-12",
    weekday: "Thursday",
    departureTime: "08:00",
    region: "south",
    base: "Kyoto",
    title: "Day trip — Nara",
    subtitle: "Bowing deer, the great Buddha hall",
    activities: [
      {
        time: "08:00",
        title: "Train to Nara",
        description: "JR Nara Line rapid service direct from Kyoto Station, ~45 min.",
        rideToNext: { duration: "45 min", note: "Kyoto → Nara, JR rapid" }
      },
      {
        time: "09:30",
        title: "Nara Park's bowing deer",
        description:
          "Over 1,000 wild sika deer roam freely and will bow for a 'shika senbei' cracker — buy a stack from a park vendor and expect to be mobbed politely.",
        attractionId: "nara-deer-park",
        tag: "family",
        rideToNext: { duration: "10 min", note: "Deer park → Todai-ji, on foot" }
      },
      {
        time: "Midday",
        title: "Todai-ji's Great Buddha Hall",
        description:
          "The world's largest wooden building, housing a 15 m bronze Buddha. One pillar has a hole the exact size of the statue's nostril — legend says squeezing through it as a kid brings enlightenment.",
        attractionId: "nara-todaiji",
        tag: "culture"
      }
    ],
    driveNotes: "Kyoto ↔ Nara ≈ 45 min each way by JR rapid",
    dayTips: [
      "Deer crackers (shika senbei) are for the deer only — they will go looking in bags and pockets if you're holding food",
      "Some deer bow for a cracker; a few nip at clothing if kept waiting — stay relaxed and hold the cracker out flat"
    ],
    drinkOfTheDay: {
      name: "Nara sake",
      type: "other",
      pairing: "Nara is considered the birthplace of sake brewing in Japan — a fitting place to try a local label back in Kyoto tonight.",
      servingNote: "Warmed lightly, in a small flask (tokkuri)"
    },
    italianWords: [
      {
        word: "Shika",
        pronounce: "SHEE-kah",
        meaning: "Deer",
        example: "Shika ga ojigi shimashita!",
        exampleMeaning: "The deer bowed!"
      },
      {
        word: "Daijoubu",
        pronounce: "dai-JOH-boo",
        meaning: "It's okay / are you okay?",
        example: "Daijoubu desu ka?",
        exampleMeaning: "Are you okay?"
      }
    ]
  },
  {
    dayNumber: 13,
    date: "2026-11-13",
    weekday: "Friday",
    departureTime: "09:00",
    region: "south",
    base: "Kyoto",
    title: "Day trip — Osaka on the side",
    subtitle: "Last Kyoto-base day, a first taste of Osaka",
    activities: [
      {
        time: "09:00",
        title: "Train to Osaka",
        description: "JR Special Rapid from Kyoto Station, ~30 min to Osaka Station.",
        rideToNext: { duration: "30 min", note: "Kyoto → Osaka, JR Special Rapid" }
      },
      {
        time: "10:00",
        title: "Osaka Castle",
        description:
          "A rebuilt 16th-century castle keep in a vast park — the museum inside covers Toyotomi Hideyoshi's unification of Japan, and the top floor gives a full skyline view.",
        attractionId: "osaka-castle",
        tag: "culture",
        rideToNext: { duration: "20 min", note: "Osaka Castle → Dotonbori, subway" }
      },
      {
        time: "Afternoon",
        title: "Dotonbori & Kuromon Market",
        description:
          "Neon canal-side street food chaos — takoyaki, okonomiyaki, the giant Glico running man sign — then Kuromon Ichiba Market for a quieter grazing lunch.",
        attractionId: "dotonbori",
        tag: "food"
      }
    ],
    driveNotes: "Kyoto ↔ Osaka ≈ 30 min each way by JR",
    dayTips: [
      "This is a preview — the full Osaka base starts tomorrow, so keep today lighter and don't try to see everything at once",
      "Kuromon Market stalls are cash-and-eat-standing; bring small bills"
    ],
    drinkOfTheDay: {
      name: "Umeshu highball",
      type: "cocktail",
      pairing: "Plum wine topped with soda — a popular Osaka izakaya order, light enough after a heavy street-food lunch.",
      servingNote: "Tall glass, ice, a plum garnish"
    },
    italianWords: [
      {
        word: "Takoyaki",
        pronounce: "tah-koh-YAH-kee",
        meaning: "Octopus batter balls",
        example: "Takoyaki wa atsui desu, ki o tsukete.",
        exampleMeaning: "Takoyaki is hot, be careful."
      },
      {
        word: "Ki o tsukete",
        pronounce: "kee oh tsoo-KEH-teh",
        meaning: "Take care / be careful",
        example: "Ki o tsukete ne!",
        exampleMeaning: "Take care, okay!"
      }
    ]
  },
  {
    dayNumber: 14,
    date: "2026-11-14",
    weekday: "Saturday",
    departureTime: "10:00",
    region: "south",
    base: "Osaka",
    title: "Move to Osaka — Universal Studios Japan",
    subtitle: "Full theme-park day",
    leadImage: "./images/hero/osaka-dotonbori-night.jpg",
    activities: [
      {
        time: "10:00",
        title: "Check into Osaka base",
        description: "A short hop from Kyoto — bags dropped, straight to the park.",
        rideToNext: { duration: "20 min", note: "Osaka hotel → USJ, local train" }
      },
      {
        time: "Midday",
        title: "Universal Studios Japan",
        description:
          "The Super Nintendo World and Wizarding World of Harry Potter areas are the headline draws — book the park's timed-entry app slots for both the moment the gates open.",
        attractionId: "universal-studios-japan",
        tag: "family"
      }
    ],
    driveNotes: "Kyoto → Osaka ≈ 30 min by JR; Osaka base → USJ ≈ 20 min",
    gear: [
      { item: "Comfortable shoes for a full day on your feet" },
      { item: "A portable charger — the USJ app drains battery fast" }
    ],
    dayTips: [
      "Buy Express Pass tickets in advance if the group wants to hit more than 3–4 headline rides — regular lines run 60–90+ minutes on weekends",
      "November evenings cool down fast — bring a layer for after dark"
    ],
    drinkOfTheDay: {
      name: "Japanese highball",
      type: "cocktail",
      pairing: "A classic whisky highball at a Dotonbori bar after a full theme-park day — simple, crisp, exactly what tired feet want.",
      servingNote: "Tall glass, built tableside with plenty of ice"
    },
    italianWords: [
      {
        word: "Tanoshii",
        pronounce: "tah-NOH-shee",
        meaning: "Fun / enjoyable",
        example: "Kyou wa tanoshikatta!",
        exampleMeaning: "Today was fun!"
      },
      {
        word: "Retsu",
        pronounce: "reh-tsoo",
        meaning: "Queue / line",
        example: "Retsu ga nagai desu ne.",
        exampleMeaning: "The line is long, isn't it."
      }
    ]
  },
  {
    dayNumber: 15,
    date: "2026-11-15",
    weekday: "Sunday",
    departureTime: "08:00",
    region: "south",
    base: "Osaka",
    title: "Day trip — Himeji Castle",
    subtitle: "Japan's most beautiful surviving castle",
    activities: [
      {
        time: "08:00",
        title: "Train to Himeji",
        description: "Shinkansen from Shin-Osaka, ~30 min — a short, easy day-trip hop.",
        rideToNext: { duration: "30 min", note: "Shin-Osaka → Himeji, Shinkansen" }
      },
      {
        time: "09:30",
        title: "Himeji Castle",
        description:
          "Nicknamed 'White Heron Castle' for its brilliant white plaster walls, and the best-preserved original castle keep in Japan — it survived WWII bombing and centuries of earthquakes untouched. UNESCO World Heritage.",
        attractionId: "himeji-castle",
        tag: "culture"
      },
      {
        time: "Afternoon",
        title: "Koko-en Garden",
        description: "Nine connected Edo-style garden spaces right beside the castle — a calm, pretty wind-down before the train back.",
        tag: "nature",
        optional: true
      }
    ],
    driveNotes: "Shin-Osaka ↔ Himeji ≈ 30 min each way by Shinkansen",
    dayTips: [
      "The castle keep involves steep traditional wooden stairs across six floors — manageable for most, but pace it for younger kids or anyone with knee trouble",
      "Combo tickets covering both the castle and Koko-en Garden are cheaper than buying separately"
    ],
    drinkOfTheDay: {
      name: "Nada sake (Hyogo)",
      type: "other",
      pairing: "Hyogo prefecture's Nada district, near Kobe, produces more sake than anywhere else in Japan — a fitting local pour after visiting its castle.",
      servingNote: "Chilled or warm, taste both and compare"
    },
    italianWords: [
      {
        word: "Shiro",
        pronounce: "SHEE-roh",
        meaning: "Castle",
        example: "Kono shiro wa shiroi desu.",
        exampleMeaning: "This castle is white."
      },
      {
        word: "Utsukushii",
        pronounce: "oo-tsoo-KOO-shee",
        meaning: "Beautiful",
        example: "Utsukushii niwa desu ne.",
        exampleMeaning: "It's a beautiful garden, isn't it."
      }
    ]
  },
  {
    dayNumber: 16,
    date: "2026-11-16",
    weekday: "Monday",
    departureTime: "11:00",
    region: "transit",
    base: "Osaka → Tokyo",
    title: "Back to Tokyo",
    subtitle: "Last Shinkansen leg, last evening",
    activities: [
      {
        time: "11:00",
        title: "Shin-Osaka → Tokyo by Shinkansen",
        description: "The Tokaido Shinkansen direct, ~2 h 30. Grab an ekiben (station bento) for the ride — half the fun.",
        rideToNext: { duration: "2 h 30", note: "Shin-Osaka → Tokyo" }
      },
      {
        time: "Evening",
        title: "Last Tokyo evening — Shinjuku",
        description:
          "Omoide Yokocho's tiny alleyway yakitori stalls, or a last conveyor-belt sushi run, then a last look at Shinjuku's neon before packing for the flight home."
      }
    ],
    driveNotes: "Shin-Osaka → Tokyo ≈ 2 h 30 by Shinkansen",
    dayTips: [
      "Pack tonight, not tomorrow morning — the flight home leaves early",
      "Confirm the exact departure airport/terminal and pre-book an airport-bound train or limousine bus seat"
    ],
    drinkOfTheDay: {
      name: "Sparkling sake",
      type: "other",
      pairing: "A light, bubbly sake to toast the last night of the trip — festive without being heavy before an early flight.",
      servingNote: "Chilled, in a champagne flute or small glass"
    },
    italianWords: [
      {
        word: "Ekiben",
        pronounce: "eh-kee-BEN",
        meaning: "Train station bento box",
        example: "Shinkansen de ekiben o tabemashou.",
        exampleMeaning: "Let's eat an ekiben on the bullet train."
      },
      {
        word: "Saigo no yoru",
        pronounce: "sai-GOH noh YOH-roo",
        meaning: "The last night",
        example: "Kyou wa Nihon de no saigo no yoru desu.",
        exampleMeaning: "Tonight is the last night in Japan."
      }
    ]
  },
  {
    dayNumber: 17,
    date: "2026-11-17",
    weekday: "Tuesday",
    region: "transit",
    base: "Tokyo",
    title: "Sayonara, Japan",
    subtitle: "Departure day",
    activities: [
      {
        time: "Morning",
        title: "Transfer to Haneda (HND)",
        description: "Leave a comfortable buffer for check-in and security — international counters can queue up on a morning with several long-haul departures.",
        rideToNext: { duration: "45 min", note: "Shinjuku → Haneda, monorail + Yamanote line" }
      },
      {
        time: "Flight",
        title: "Fly home via Dubai",
        description: "Connecting back through Dubai on flydubai. Safe travels — mata ne, Japan."
      }
    ],
    driveNotes: "Shinjuku → Haneda ≈ 45 min by train",
    dayTips: [
      "Double check every suitcase for anything sharp bought along the way (a good knife from Kappabashi, for instance) — it needs to go in checked luggage",
      "Use the last konbini stop for snacks for the flight"
    ],
    italianWords: [
      {
        word: "Sayonara",
        pronounce: "sah-yoh-NAH-rah",
        meaning: "Goodbye",
        example: "Nihon, sayonara. Mata kimasu.",
        exampleMeaning: "Goodbye, Japan. We'll come again."
      },
      {
        word: "Mata ne",
        pronounce: "MAH-tah neh",
        meaning: "See you again",
        example: "Mata ne, Nihon!",
        exampleMeaning: "See you again, Japan!"
      }
    ]
  }
];
