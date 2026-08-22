import type { Day } from "./types";

export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-11-01",
    weekday: "Sunday",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Landing in Tokyo",
    subtitle: "Arrive via Dubai, check in to da Haus Shinjuku",
    leadImage: "./images/hero/shibuya-crossing-night.jpg",
    activities: [
      {
        time: "Afternoon / evening",
        title: "Land in Tokyo, transfer to Shinjuku",
        description:
          "Connecting through Dubai on flydubai. From Narita: the Narita Express (N'EX) direct to Shinjuku (~1.5 h). From Haneda: Tokyo Monorail + JR Yamanote, or the Keikyu line, to Shinjuku (~45 min).",
        rideToNext: { duration: "45 min–1.5 h", note: "Depends on which airport — Haneda is the shorter transfer" }
      },
      {
        time: "Evening",
        title: "Check in to da Haus Shinjuku, then keep it quiet",
        description:
          "Two rooms booked at da Haus Shinjuku for the first stretch of the trip. Shower, a light meal nearby — ramen, konbini, or a nearby izakaya — and an early night. Don't schedule anything tonight; good sleep matters more than any attraction on day one."
      }
    ],
    driveNotes: "Haneda → Shinjuku ≈ 45 min by train; Narita → Shinjuku ≈ 1.5 h by N'EX",
    gear: [
      { item: "Comfortable layers — Tokyo in November is mild by day, cool at night (10–17°C)" },
      { item: "A portable phone charger for the long travel day" },
      { item: "IC card ready to top up (Suica/Pasmo) — or use the phone wallet version" }
    ],
    dayTips: [
      "Buy or activate a Suica/Pasmo IC card the moment you land — one per person — it covers every train, bus and konbini purchase for the whole trip",
      "eSIM or pocket wifi should be activated before or right at arrival — make sure all four phones have data",
      "This is a jet-lag recovery day, not a sightseeing day — a short evening walk around Shinjuku is plenty if anyone's still got energy"
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
    departureTime: "09:30",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Old Tokyo — Asakusa & Ueno",
    activities: [
      {
        time: "08:30",
        title: "Breakfast near the hotel",
        description: "An easy start — a konbini breakfast or a café near da Haus Shinjuku."
      },
      {
        time: "09:30",
        title: "Train to Asakusa Station",
        description: "Ginza Line or Toei Asakusa Line direct from Shinjuku.",
        rideToNext: { duration: "25 min", note: "Shinjuku → Asakusa, subway" }
      },
      {
        time: "10:00–12:00",
        title: "Senso-ji & Nakamise-dori",
        description:
          "Tokyo's oldest temple, through the Kaminarimon 'Thunder Gate'. Walk Nakamise-dori's stalls for senbei and old-fashioned souvenirs before it gets crowded.",
        attractionId: "senso-ji",
        tag: "culture",
        rideToNext: { duration: "10 min", note: "Asakusa lunch spot, on foot" }
      },
      {
        time: "12:00",
        title: "Lunch in Asakusa",
        description: "Traditional tempura or soba near the temple.",
        rideToNext: { duration: "20 min", note: "Asakusa → Ueno Park, on foot or one subway stop" }
      },
      {
        time: "14:00",
        title: "Ueno Park",
        description:
          "A walk around Shinobazu Pond, a museum stop if anyone wants one, or just a slow lap of Tokyo's biggest park.",
        attractionId: "ueno-park",
        tag: "nature",
        rideToNext: { duration: "25 min", note: "Ueno → Shinjuku, JR Yamanote" }
      },
      {
        time: "16:30",
        title: "Back to Shinjuku",
        description: "Time to rest before the evening."
      },
      {
        time: "18:30",
        title: "Dinner at Omoide Yokocho",
        description:
          "'Memory Lane' — a dense, atmospheric cluster of tiny yakitori alleys right by Shinjuku Station, elbow-to-elbow and unforgettable.",
        tag: "food"
      }
    ],
    restaurants: ["rest-n-asakusa-tempura", "rest-n-omoide-yokocho"],
    drinkOfTheDay: {
      name: "Asahi Super Dry (draft)",
      type: "beer",
      pairing: "Japan's everyday beer, ice cold, alongside tempura or yakitori — the simplest way to toast the first full day.",
      servingNote: "Draft, in a frosted glass"
    },
    gear: [
      { item: "Comfortable walking shoes — a lot of it is on foot" },
      { item: "Coins/small change for shrine offerings and vending machines" }
    ],
    dayTips: [
      "Senso-ji is busiest 10:00–14:00 — go at opening for a quieter Nakamise-dori",
      "Good day to split if anyone wants: one couple in Asakusa/Ueno, the other in nearby Akihabara — meet back in Shinjuku for dinner",
      "Omoide Yokocho is mostly cash"
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
    departureTime: "06:30",
    region: "north",
    base: "Tokyo (Shinjuku)",
    title: "Day trip — Nikko",
    subtitle: "Culture Day (Bunka no Hi), a national holiday — go early, seats reserved",
    leadImage: "./images/hero/nikko-toshogu-gate.jpg",
    activities: [
      {
        time: "06:30",
        title: "Depart Shinjuku Station",
        description:
          "November 3 is Culture Day, a national holiday — Nikko and its trains get very crowded. An early departure and reserved seats are essentially mandatory today.",
        rideToNext: { duration: "30 min", note: "Shinjuku → Asakusa / Tobu station, transfer to the Tobu Nikko Line" }
      },
      {
        time: "~07:00",
        title: "Tobu Nikko Line to Nikko Station",
        description:
          "About 2 hours total. The Tobu Railway Nikko Pass is worth buying ahead — it also covers the local buses around the World Heritage Area.",
        rideToNext: { duration: "2 h", note: "Asakusa/Tobu → Tobu-Nikko" }
      },
      {
        time: "09:30",
        title: "Arrive Nikko, bus to the World Heritage Area",
        description: "A short local bus ride from the station up to the shrine complex."
      },
      {
        time: "10:00–13:00",
        title: "Toshogu Shrine",
        description:
          "The elaborate, gilded mausoleum of shogun Tokugawa Ieyasu, UNESCO-listed and covered in carvings — including the original 'see no evil, hear no evil, speak no evil' monkeys. Early November is peak koyo (autumn foliage) around Nikko. Plenty of stairs — pace it.",
        attractionId: "nikko-toshogu",
        tag: "culture"
      },
      {
        time: "13:00",
        title: "Lunch in Nikko",
        description: "Yuba (tofu skin) is the local specialty — light and easy between temple visits.",
        tag: "food"
      },
      {
        time: "14:30",
        title: "Kegon Falls",
        description: "A short ropeway ride up for the waterfall view.",
        tag: "nature",
        optional: true
      },
      {
        time: "16:30",
        title: "Bus back to Nikko Station, train to Tokyo",
        description: "Arriving back in Shinjuku around 19:00 for a late, light dinner.",
        rideToNext: { duration: "2 h", note: "Tobu-Nikko → Asakusa/Shinjuku" }
      }
    ],
    driveNotes: "Shinjuku ↔ Nikko ≈ 2 h each way by direct Tobu limited express",
    restaurants: ["rest-n-nikko-yuba"],
    dayTips: [
      "This is a long day — leave by 06:30 and expect to be back in Tokyo around 19:00",
      "Reserve Tobu train seats in advance — Nov 3 is a national holiday and this route fills up",
      "Layer up — Nikko sits in the mountains and runs several degrees cooler than Tokyo",
      "If the day feels like too much for anyone, staying in Tokyo for a relaxed alternative day is a fine call"
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
    dayNumber: 4,
    date: "2026-11-04",
    weekday: "Wednesday",
    departureTime: "09:00",
    region: "north",
    base: "Hakone",
    title: "Tokyo → Odawara → Hakone",
    subtitle: "Rental car pickup day — the road trip starts here",
    leadImage: "./images/hero/hakone-fuji-lake.jpg",
    activities: [
      {
        time: "09:00",
        title: "Breakfast, then send luggage ahead via Takkyubin",
        description:
          "Ship the big suitcases from da Haus Shinjuku straight to Ryokan Warabino in Takayama — they'll take 3–4 days to arrive, so the group travels with just small bags through Hakone, Fuji and Matsumoto.",
        tag: "family"
      },
      {
        time: "10:30",
        title: "Shinjuku → Odawara by Shinkansen",
        description: "Kodama or Hikari, about 35 minutes.",
        rideToNext: { duration: "35 min", note: "Shinjuku → Odawara" }
      },
      {
        time: "11:30",
        title: "Pick up the rental car at Odawara Station",
        description:
          "Toyota Rent a Car, confirmation #99910376400, booked under RONEN STEIN — a Toyota Noah Hybrid (automatic, non-smoking), picked up at the Odawara Sta. Shinkansen Exit Shop (1-1-1 Shiroyama, Odawara-shi, Kanagawa, tel 0465-32-0100). Three documents are mandatory to collect the car: the original Israeli driving license, the International Driving Permit (IDP), and a passport with the Japan entry stamp. Without all three, no car. Note: the confirmation's booked pickup time is 10:00 — worth a quick call to the branch to confirm the later arrival works, since the walking plan here has the group landing around 11:30.",
        tag: "family"
      },
      {
        time: "12:30",
        title: "Drive to Hakone",
        description: "About 40 minutes. Driving is on the LEFT here — the opposite of Israel. Take it slow leaving the rental lot.",
        rideToNext: { duration: "40 min", note: "Odawara → Hakone, driving on the left" }
      },
      {
        time: "14:00",
        title: "Owakudani",
        description:
          "A volcanic valley of sulphur vents and bubbling ground. Try the local kuro-tamago (black eggs, boiled in the sulphur springs — said to add years to your life).",
        attractionId: "hakone-owakudani",
        tag: "nature"
      },
      {
        time: "16:00",
        title: "Hakone Ropeway",
        description: "A Mt Fuji view from the cable car if visibility is good.",
        attractionId: "hakone-lake-ashi",
        tag: "view"
      },
      {
        time: "18:00",
        title: "Check in to Hakone Yutowa",
        description: "Onsen and rest before dinner."
      },
      {
        time: "19:30",
        title: "Kaiseki dinner at the ryokan",
        description: "A multi-course meal at Hakone Yutowa — book the plan that includes it, if not already."
      }
    ],
    driveNotes: "Odawara → Hakone ≈ 40 min by rental car, driving on the left",
    restaurants: ["rest-n-hakone-ryokan-kaiseki"],
    gear: [
      { item: "IDP + original Israeli driving license + passport — all three, physically, for the car pickup" },
      { item: "No swimwear needed for a traditional onsen — modesty towels are provided" }
    ],
    dayTips: [
      "The three documents for the car pickup are non-negotiable: original Israeli license, IDP, and passport with the Japan entry stamp — pack them where they're easy to find, not buried in a checked bag",
      "Onsen etiquette: wash and rinse thoroughly before entering the shared bath, and don't put the small modesty towel in the water — check the tattoo policy with the ryokan in advance if relevant",
      "Relaxed shared evening after two full Tokyo days — don't add anything else tonight"
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
        word: "Hidari",
        pronounce: "hee-DAH-ree",
        meaning: "Left",
        example: "Nihon dewa hidari-gawa o unten shimasu.",
        exampleMeaning: "In Japan, you drive on the left side."
      }
    ]
  },
  {
    dayNumber: 5,
    date: "2026-11-05",
    weekday: "Thursday",
    departureTime: "08:30",
    region: "north",
    base: "Fuji Five Lakes (Kawaguchiko)",
    title: "Hakone → Lake Yamanaka → Oshino Hakkai → Kawaguchiko",
    subtitle: "A slow lap of the Fuji lakes",
    activities: [
      {
        time: "08:30",
        title: "Depart Hakone",
        description: "On the road toward the Fuji Five Lakes.",
        rideToNext: { duration: "1 h", note: "Hakone → Lake Yamanaka, rental car" }
      },
      {
        time: "10:00",
        title: "Lake Yamanaka",
        description:
          "A wide, open view of Mt Fuji — the closest of the five lakes to the mountain. On a clear day, get here as early as the schedule allows; morning light gives the best odds.",
        attractionId: "lake-yamanaka",
        tag: "view",
        rideToNext: { duration: "15 min", note: "Lake Yamanaka → Oshino Hakkai" }
      },
      {
        time: "11:00",
        title: "Oshino Hakkai",
        description:
          "Eight spring-fed ponds and a traditional thatched-roof village — about an hour to an hour and a half to walk between them.",
        attractionId: "oshino-hakkai",
        tag: "nature",
        rideToNext: { duration: "20 min", note: "Oshino Hakkai → lunch, Kawaguchiko/Fujiyoshida area" }
      },
      {
        time: "13:00",
        title: "Lunch in the Kawaguchiko / Fujiyoshida area",
        description: "Houtou — the region's thick hand-cut noodles — is the specialty worth seeking out.",
        tag: "food",
        rideToNext: { duration: "20 min", note: "Lunch spot → Oishi Park" }
      },
      {
        time: "14:30",
        title: "Oishi Park",
        description: "A postcard Fuji view across Lake Kawaguchi — the classic photo and coffee stop.",
        attractionId: "oishi-park",
        tag: "view"
      },
      {
        time: "16:00",
        title: "Lake Kawaguchi walk, then check in",
        description: "An easy walk along the lake, then check-in at Kawaguchiko Urban Resort Villa around 17:00–17:30.",
        tag: "nature"
      },
      {
        time: "19:00",
        title: "Dinner — houtou or a Fuji-view restaurant",
        description: "Houtou noodles again, or a restaurant with a view of the mountain if it's clear.",
        tag: "food"
      }
    ],
    driveNotes: "Hakone → Kawaguchiko loop ≈ 2 h total driving, with stops along the way",
    restaurants: ["rest-n-houtou-fuji"],
    dayTips: [
      "Chureito Pagoda (the red pagoda with the classic Fuji-behind-it view, about 400 steps up) isn't on today's tight schedule but is a worthwhile optional detour near Fujiyoshida if the morning is running ahead of time",
      "Mt Fuji is shy — cloud cover more mornings than not — so don't build the whole day's mood around seeing it clearly",
      "This whole day is car-based; take it at a relaxed pace, nobody needs to rush between the lake stops"
    ],
    drinkOfTheDay: {
      name: "Whisky highball",
      type: "cocktail",
      pairing: "Japanese whisky, soda, plenty of ice — a crisp way to close a day spent circling the lakes.",
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
    dayNumber: 6,
    date: "2026-11-06",
    weekday: "Friday",
    departureTime: "07:30",
    region: "north",
    base: "Matsumoto",
    title: "The quiet lakes → Matsumoto",
    subtitle: "Lake Saiko, Shoji & Motosu on the way to the Japanese Alps",
    activities: [
      {
        time: "07:30",
        title: "Early departure from the villa",
        description: "Leaving early to catch the morning light on Fuji from the quieter lakes.",
        rideToNext: { duration: "15 min", note: "Villa → Lake Saiko" }
      },
      {
        time: "08:15",
        title: "Lake Saiko",
        description: "The most forested and quiet of the three — a calm start to the day.",
        attractionId: "fuji-five-lakes",
        tag: "nature",
        rideToNext: { duration: "15 min", note: "Lake Saiko → Lake Shoji" }
      },
      {
        time: "09:15",
        title: "Lake Shoji",
        description: "The smallest of the Fuji Five Lakes — small, still, and intimate.",
        tag: "nature",
        rideToNext: { duration: "15 min", note: "Lake Shoji → Lake Motosu" }
      },
      {
        time: "10:15",
        title: "Lake Motosu",
        description: "The iconic view — the exact scene printed on the Japanese 1,000-yen note. A coffee stop afterward.",
        tag: "view",
        rideToNext: { duration: "2.5 h", note: "Lake Motosu → Matsumoto" }
      },
      {
        time: "12:00",
        title: "Drive to Matsumoto",
        description: "Arriving around 15:00 for check-in and a short rest."
      },
      {
        time: "16:30–18:00",
        title: "Matsumoto Castle & Nakamachi Street",
        description:
          "'The Crow Castle' — one of only twelve original wooden castle keeps left in Japan, with steep original stairs to a top-floor view of the Alps. Nakamachi Street's old kura warehouses, five minutes away, are lined with shops and cafés.",
        attractionId: "matsumoto-castle",
        tag: "culture"
      },
      {
        time: "19:00",
        title: "Soba dinner",
        description: "Matsumoto's proud of its soba — ask the hotel for a good local spot on or near Nakamachi Street.",
        tag: "food"
      }
    ],
    driveNotes: "Fuji lakes → Matsumoto ≈ 2.5 h by rental car",
    restaurants: ["rest-n-matsumoto-soba"],
    gear: [
      { item: "An extra warm layer — Matsumoto and the mountains ahead run noticeably colder than Tokyo or the Fuji lakes" }
    ],
    dayTips: [
      "Send the big suitcases onward again today via Takkyubin, from Matsumoto Hotel Kagetsu to Richmond Hotel Premier Kyoto Shijo — they'll be waiting in Kyoto in 3–4 days",
      "Treat the three lakes as unhurried drive-by stops, 15–20 minutes each — the real time budget is for Matsumoto Castle in the afternoon",
      "2 rooms booked at Matsumoto Hotel Kagetsu"
    ],
    drinkOfTheDay: {
      name: "Shinshu junmai sake",
      type: "other",
      pairing: "Nagano prefecture (old name Shinshu) has a strong local sake tradition, fed by Alpine snowmelt water — a fitting pour after a day circling Fuji's quieter lakes.",
      servingNote: "Chilled, in a small glass"
    },
    italianWords: [
      {
        word: "Soba",
        pronounce: "SOH-bah",
        meaning: "Buckwheat noodles",
        example: "Matsumoto no soba wa oishii desu.",
        exampleMeaning: "Matsumoto's soba is delicious."
      },
      {
        word: "Yama",
        pronounce: "YAH-mah",
        meaning: "Mountain",
        example: "Takai yama ga takusan arimasu.",
        exampleMeaning: "There are many tall mountains."
      }
    ]
  },
  {
    dayNumber: 7,
    date: "2026-11-07",
    weekday: "Saturday",
    departureTime: "07:00",
    region: "north",
    base: "Takayama",
    title: "Matsumoto → Kamikochi → Takayama",
    subtitle: "The Japanese Alps' big day — keep the car, it's not due back yet",
    leadImage: "./images/hero/kamikochi-kappa-bridge-hero.jpg",
    activities: [
      {
        time: "07:00",
        title: "Early breakfast, then drive to Sawando Parking",
        description: "About an hour. Private cars can't enter Kamikochi itself — the car stays at Sawando.",
        rideToNext: { duration: "1 h", note: "Matsumoto Hotel Kagetsu → Sawando Parking" }
      },
      {
        time: "08:15",
        title: "Park at Sawando",
        description: "Confirm the shuttle/taxi schedule to Kamikochi — book ahead of the trip if possible."
      },
      {
        time: "08:30–09:00",
        title: "Shuttle or taxi to Kamikochi Bus Terminal",
        description: "A short ride into the valley."
      },
      {
        time: "09:00–13:30",
        title: "Kamikochi — Taisho Pond, Tashiro Pond, Kappa Bridge",
        description:
          "A flat, scenic walk along the clear Azusa River, with the Hotaka mountains towering overhead. Lunch near the bridge.",
        attractionId: "kamikochi",
        tag: "nature"
      },
      {
        time: "14:00",
        title: "Shuttle back to Sawando",
        description: "Reclaim the car.",
        rideToNext: { duration: "2 h", note: "Sawando → Takayama" }
      },
      {
        time: "15:00",
        title: "Drive to Takayama",
        description: "About 2 hours."
      },
      {
        time: "17:30–18:30",
        title: "Arrive Takayama, check in to Ryokan Warabino",
        description: "An easy evening in town. Keep the rental car — it stays with you through tomorrow and returns in Kanazawa on Nov 9, not here."
      },
      {
        time: "19:00",
        title: "Ryokan dinner — Hida beef",
        description: "A traditional multi-course meal at Warabino, featuring Takayama's marbled local beef."
      }
    ],
    driveNotes: "Matsumoto → Sawando ≈ 1 h; Sawando → Takayama ≈ 2 h. Kamikochi itself is shuttle/taxi only.",
    restaurants: ["rest-n-kamikochi-lunch", "rest-n-hida-beef"],
    gear: [
      { item: "Sturdy, comfortable shoes for the Kamikochi riverside trail" },
      { item: "A warm layer — mountain mornings can be near freezing in November" }
    ],
    dayTips: [
      "Heads up: some versions of this plan have the rental car returned at Takayama Station tonight — that's wrong. The actual booking confirmation and the driving-route summary both put the return in Kanazawa on Nov 9 by 20:00, so keep the car through tomorrow's Takayama day and Wednesday's drive to Shirakawa-go",
      "Confirm the Sawando ↔ Kamikochi shuttle schedule and reserve seats before the trip — private cars are not allowed into the valley itself",
      "Ryokan = futon on the floor, yukata robe, onsen, kaiseki meals — lean into the experience, and confirm room/privacy arrangements ahead if that matters to either couple"
    ],
    drinkOfTheDay: {
      name: "Sake pairing with Hida beef",
      type: "other",
      pairing: "The ryokan's kaiseki plan will usually pair a regional sake with the Hida beef course — a fitting way to close the Alps' biggest day.",
      servingNote: "Served warm or chilled depending on the grade"
    },
    italianWords: [
      {
        word: "Kawa",
        pronounce: "KAH-wah",
        meaning: "River",
        example: "Azusa-gawa wa kirei desu.",
        exampleMeaning: "The Azusa River is beautiful."
      },
      {
        word: "Tsukaremashita",
        pronounce: "tsoo-kah-reh-MAH-shtah",
        meaning: "I'm tired (said after a long day)",
        example: "Kyou wa tsukaremashita, demo tanoshikatta desu.",
        exampleMeaning: "I'm tired today, but it was fun."
      }
    ]
  },
  {
    dayNumber: 8,
    date: "2026-11-08",
    weekday: "Sunday",
    departureTime: "09:00",
    region: "north",
    base: "Takayama",
    title: "Takayama — a day in the old town",
    subtitle: "Second Ryokan Warabino night, no hotel move today",
    activities: [
      {
        time: "09:00",
        title: "Breakfast at the ryokan",
        description: "Then out to the morning market before it closes."
      },
      {
        time: "09:30–11:30",
        title: "Morning market (Miyagawa / Jinya-mae)",
        description:
          "Takayama has two riverside/old-town morning markets that run in parallel — whichever's closer works. Closes around midday, so go early. Mitarashi dango (grilled rice cakes on a skewer) are the classic market snack.",
        tag: "food"
      },
      {
        time: "10:30",
        title: "Sanmachi Suji — the old town",
        description:
          "Narrow streets of dark-wood Edo-era merchant houses, sake breweries (look for the cedar-ball sugidama outside the door), and craft shops.",
        attractionId: "sanmachi-suji",
        tag: "village"
      },
      {
        time: "12:00",
        title: "Hida Folk Village (Hida no Sato)",
        description:
          "An open-air museum of relocated gassho-zukuri thatched farmhouses on a hillside above town — a gentler preview of tomorrow's Shirakawa-go.",
        attractionId: "hida-folk-village",
        tag: "culture",
        optional: true
      },
      {
        time: "14:30",
        title: "Free time",
        description: "A local museum or garden, or just wander — whatever the group has energy for.",
        optional: true
      },
      {
        time: "16:30",
        title: "Onsen, café or shopping",
        description: "A relaxed afternoon before dinner."
      },
      {
        time: "19:00",
        title: "Dinner — grilled Hida beef",
        description: "A dedicated Hida-beef dinner in town, or another round at the ryokan."
      }
    ],
    dayTips: [
      "A good day to split lightly: one couple at the market and Sanmachi Suji, the other at Hida Folk Village, meeting up for dinner",
      "The morning market genuinely closes by midday — don't push it to the afternoon",
      "If yesterday's Kamikochi walk went long and everyone's a little worn out, this is the day to keep it light"
    ],
    drinkOfTheDay: {
      name: "Hida-brewed sake",
      type: "other",
      pairing: "Sanmachi Suji has several working sake breweries — look for one offering tastings and bring a bottle back for tonight.",
      servingNote: "Chilled or warm, worth trying both"
    },
    italianWords: [
      {
        word: "Asa ichi",
        pronounce: "AH-sah EE-chee",
        meaning: "Morning market",
        example: "Asa ichi de dango o kaimashou.",
        exampleMeaning: "Let's buy dango at the morning market."
      },
      {
        word: "Gassho-zukuri",
        pronounce: "GAHS-shoh zoo-KOO-ree",
        meaning: "Steep-roofed farmhouse style ('praying-hands' shape)",
        example: "Gassho-zukuri no yane wa yuki ni tsuyoi desu.",
        exampleMeaning: "Gassho-zukuri roofs stand up well to snow."
      }
    ]
  },
  {
    dayNumber: 9,
    date: "2026-11-09",
    weekday: "Monday",
    departureTime: "09:00",
    region: "north",
    base: "Kanazawa",
    title: "Takayama → Shirakawa-go → Kanazawa",
    subtitle: "Rental car return day — by 20:00, in Kanazawa",
    leadImage: "./images/hero/shirakawa-go-hero.jpg",
    activities: [
      {
        time: "09:00",
        title: "Breakfast and check-out",
        description: "Last morning at Ryokan Warabino."
      },
      {
        time: "10:00–13:00",
        title: "Shirakawa-go",
        description:
          "A UNESCO World Heritage village of gassho-zukuri farmhouses. Start at the Shiroyama Observatory viewpoint above the village for the classic overview shot, then walk down among the houses — Wada House, one of the largest, is open to walk through inside. Lunch in the village.",
        attractionId: "shirakawa-go",
        tag: "village",
        rideToNext: { duration: "1.5 h", note: "Shirakawa-go → Kanazawa" }
      },
      {
        time: "14:30",
        title: "Drive to Kanazawa",
        description: "About 1.5 hours."
      },
      {
        time: "By 20:00",
        title: "Return the rental car at Kanazawa Station",
        description:
          "Toyota Rent a Car return: Kanazawa Station – Shinkansen Exit (East Exit), Porte Kanazawa Bldg. 1F, 2-15-1 Hon-machi, Kanazawa, by 20:00. Full insurance with NOC (no deductible) and an ETC card were included with the booking — no tolls to settle in cash along the way. This closes out the driving leg of the trip.",
        tag: "family"
      },
      {
        time: "Evening",
        title: "Check in to SOKI Kanazawa",
        description: "Dinner at Omicho Market if stalls are still open, or a recommended restaurant nearby."
      }
    ],
    driveNotes: "Takayama → Shirakawa-go ≈ 50 min; Shirakawa-go → Kanazawa ≈ 1.5 h. Car return: Kanazawa Station, by 20:00.",
    dayTips: [
      "The car return is confirmed for Kanazawa, not Takayama — drive yourselves the whole way today rather than switching to the Nohi Bus, so the car ends up where it's actually booked to be returned",
      "Shirakawa-go is one of the most photographed places in Japan — expect company even on a Monday",
      "Once the car's returned, Kanazawa and everything after (Kyoto, Nara, Tokyo) is entirely train and on-foot"
    ],
    drinkOfTheDay: {
      name: "Kanazawa sake",
      type: "other",
      pairing: "Ishikawa prefecture has a long sake-brewing tradition fed by clean mountain water — a good first taste tonight before Omicho Market's seafood tomorrow.",
      servingNote: "Chilled, small ceramic cup"
    },
    italianWords: [
      {
        word: "Kaeru",
        pronounce: "kah-EH-roo",
        meaning: "To return (a car, to go home)",
        example: "Kuruma o kaeshimashita.",
        exampleMeaning: "We returned the car."
      }
    ]
  },
  {
    dayNumber: 10,
    date: "2026-11-10",
    weekday: "Tuesday",
    departureTime: "09:00",
    region: "north",
    base: "Kanazawa",
    title: "Kanazawa at a relaxed pace",
    leadImage: "./images/hero/kanazawa-kenrokuen-hero.jpg",
    activities: [
      {
        time: "09:00",
        title: "Kenrokuen Garden",
        description:
          "One of Japan's three great gardens, dating to the 1620s. In November, look for yukitsuri — the rope frames strung up each winter to protect the old pine trees from heavy snow.",
        attractionId: "kenrokuen",
        tag: "nature",
        rideToNext: { duration: "10 min", note: "Kenrokuen → Kanazawa Castle Park, on foot" }
      },
      {
        time: "11:00",
        title: "Kanazawa Castle Park",
        description: "The reconstructed seat of the Maeda clan, directly across the moat from Kenrokuen.",
        attractionId: "kanazawa-castle",
        tag: "culture",
        rideToNext: { duration: "15 min", note: "Castle → Omicho Market" }
      },
      {
        time: "12:30",
        title: "Lunch at Omicho Market",
        description: "Snow crab, sweet shrimp and sushi-grade cuts straight from the stalls — go hungry.",
        attractionId: "omicho-market",
        tag: "food",
        rideToNext: { duration: "15 min", note: "Omicho Market → Higashi Chaya" }
      },
      {
        time: "14:00",
        title: "Higashi Chaya District",
        description: "Kanazawa's historic geisha teahouse quarter — and look for gold-leaf ice cream, the local novelty.",
        attractionId: "higashi-chaya",
        tag: "culture"
      },
      {
        time: "16:00",
        title: "Nagamachi — the samurai district",
        description: "Preserved earthen walls and canals in what was once the samurai quarter, a quieter contrast to Higashi Chaya.",
        tag: "culture",
        optional: true
      },
      {
        time: "19:00",
        title: "Kappou dinner",
        description: "Traditional Kanazawa cuisine, course by course — near Omicho Market or the hotel.",
        tag: "food"
      }
    ],
    restaurants: ["rest-n-omicho-kappou"],
    dayTips: [
      "A good afternoon to split: garden and castle together, then each couple picks a district (Higashi Chaya vs. Nagamachi)",
      "Omicho gets busy and delicious at lunch — arrive hungry and pick a stall with a line of locals",
      "Kanazawa produces almost all of Japan's gold leaf — a fun, small souvenir to look for"
    ],
    drinkOfTheDay: {
      name: "Junmai Daiginjo sake",
      type: "other",
      pairing: "The premium grade, a fitting pour with a kappou tasting menu built around the day's market seafood.",
      servingNote: "Chilled, in a small glass to appreciate the aroma"
    },
    italianWords: [
      {
        word: "Kani",
        pronounce: "KAH-nee",
        meaning: "Crab",
        example: "Kono kani wa oishisou desu.",
        exampleMeaning: "This crab looks delicious."
      },
      {
        word: "Kin",
        pronounce: "keen",
        meaning: "Gold",
        example: "Kanazawa wa kin no machi desu.",
        exampleMeaning: "Kanazawa is a city of gold."
      }
    ]
  },
  {
    dayNumber: 11,
    date: "2026-11-11",
    weekday: "Wednesday",
    departureTime: "09:30",
    region: "transit",
    base: "Kanazawa → Kyoto",
    title: "Onward to Kyoto",
    subtitle: "Thunderbird day — keep the morning light",
    activities: [
      {
        time: "09:30",
        title: "Check out, Kanazawa Station",
        description: "A light morning — don't add new attractions before the train."
      },
      {
        time: "10:00",
        title: "Thunderbird train to Kyoto",
        description: "About 2.5 hours, covered by the JR Pass. Reserve seats ahead.",
        rideToNext: { duration: "2.5 h", note: "Kanazawa → Kyoto, Thunderbird" }
      },
      {
        time: "12:30",
        title: "Arrive Kyoto Station",
        description: "A short taxi to the Shijo-area hotel is the easiest move for four adults with luggage.",
        rideToNext: { duration: "15 min", note: "Kyoto Station → Richmond Hotel Premier Kyoto Shijo, taxi" }
      },
      {
        time: "13:00–14:00",
        title: "Check in to Richmond Hotel Premier Kyoto Shijo",
        description: "Four nights here — the longest single stay of the trip."
      },
      {
        time: "15:00",
        title: "Nishiki Market",
        description: "'Kyoto's Kitchen' — a covered food street for an afternoon graze.",
        attractionId: "nishiki-market",
        tag: "food",
        rideToNext: { duration: "20 min", note: "Nishiki Market → Gion, on foot" }
      },
      {
        time: "17:00",
        title: "Gion at dusk",
        description: "Lantern-lit lanes and a chance — respectfully, from a distance — of spotting a geiko or maiko.",
        attractionId: "gion-district",
        tag: "culture"
      },
      {
        time: "19:00",
        title: "Dinner in Gion or Pontocho",
        description: "The trip's four Kyoto nights start here."
      }
    ],
    driveNotes: "Kanazawa → Kyoto ≈ 2.5 h by Thunderbird (JR Pass covered)",
    restaurants: ["rest-s-gion-pontocho"],
    dayTips: [
      "Reserve Thunderbird seats ahead — this is peak koyo (autumn foliage) season",
      "If the JR Pass hasn't been activated yet, today's the natural day to start the 14-day clock, since Kanazawa↔Kyoto and Kyoto↔Tokyo are the two big legs it needs to cover",
      "Kyoto Station has coin lockers if anyone wants to explore before checking in"
    ],
    drinkOfTheDay: {
      name: "Fushimi sake tasting flight",
      type: "other",
      pairing: "Kyoto's Fushimi district, visited later this week, is one of Japan's great sake-brewing regions — a good night to start sampling.",
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
    dayNumber: 12,
    date: "2026-11-12",
    weekday: "Thursday",
    departureTime: "09:00",
    region: "south",
    base: "Kyoto",
    title: "Kyoto west — Arashiyama",
    leadImage: "./images/hero/arashiyama-bamboo-hero.jpg",
    activities: [
      {
        time: "09:00",
        title: "Train or bus to Arashiyama",
        description: "About 30 minutes.",
        rideToNext: { duration: "30 min", note: "Kyoto → Arashiyama" }
      },
      {
        time: "09:30",
        title: "Sagano Bamboo Grove",
        description: "A towering bamboo corridor — come early, before the tour groups arrive.",
        attractionId: "arashiyama-bamboo",
        tag: "nature",
        rideToNext: { duration: "5 min", note: "Bamboo Grove → Tenryu-ji, on foot" }
      },
      {
        time: "10:30",
        title: "Tenryu-ji",
        description: "A UNESCO World Heritage Zen garden, usually far quieter than the grove next door — and, in season, in full maple color.",
        tag: "culture",
        rideToNext: { duration: "10 min", note: "Tenryu-ji → Togetsukyo Bridge, on foot" }
      },
      {
        time: "12:00",
        title: "Togetsukyo Bridge",
        description: "Arashiyama's classic postcard view over the Katsura River."
      },
      {
        time: "13:00",
        title: "Riverside lunch — tofu kaiseki",
        description: "A local specialty, several restaurants near the bridge serve it with a river view.",
        tag: "food",
        rideToNext: { duration: "10 min", note: "Lunch spot → Hozugawa boat dock" }
      },
      {
        time: "15:00",
        title: "Hozugawa river boat ride",
        description: "About two hours, weather-dependent — a calm, scenic ride between the mountains.",
        tag: "nature",
        optional: true
      },
      {
        time: "18:00",
        title: "Back to central Kyoto",
        description: "Rest before dinner."
      },
      {
        time: "19:30",
        title: "Pontocho Alley",
        description: "A romantic recommendation for tonight — restaurants with terraces right over the river.",
        tag: "food"
      }
    ],
    restaurants: ["rest-s-arashiyama-tofu"],
    dayTips: [
      "Go before 08:00 if possible — by mid-morning the bamboo grove is a slow-moving crowd of tour groups",
      "The Hozugawa boat ride is weather-dependent — check availability the same morning rather than booking it blind",
      "Renting a bicycle near Arashiyama Station is an option if the group wants to cover the wider Sagano area faster"
    ],
    drinkOfTheDay: {
      name: "Matcha liqueur",
      type: "digestif",
      pairing: "A Kyoto specialty — matcha blended into a liqueur, sweet and slightly bitter, a nice nightcap after a day of temples and bamboo.",
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
        word: "Kawa (river)",
        pronounce: "kah-wah",
        meaning: "River",
        example: "Katsura-gawa wa utsukushii desu.",
        exampleMeaning: "The Katsura River is beautiful."
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
    title: "Kyoto east — Ginkaku-ji, the Philosopher's Path & Fushimi Inari",
    leadImage: "./images/hero/fushimi-inari-torii.jpg",
    activities: [
      {
        time: "09:00",
        title: "Breakfast",
        description: "An easier start than yesterday."
      },
      {
        time: "10:00",
        title: "Ginkaku-ji — the Silver Pavilion",
        description: "Despite the name, never actually covered in silver. A raked-sand garden and moss walk.",
        attractionId: "ginkaku-ji",
        tag: "culture",
        rideToNext: { duration: "30 min", note: "Ginkaku-ji → Nanzen-ji, via the Philosopher's Path" }
      },
      {
        time: "10:15",
        title: "Philosopher's Path",
        description: "A quiet, canal-side walk of about 2 km, named for a philosophy professor who walked it daily.",
        attractionId: "philosophers-path",
        tag: "nature"
      },
      {
        time: "12:00",
        title: "Nanzen-ji",
        description: "A large temple complex with an unexpected red-brick Meiji-era aqueduct crossing the grounds.",
        attractionId: "nanzen-ji",
        tag: "culture",
        rideToNext: { duration: "15 min", note: "Nanzen-ji → Okazaki, on foot" }
      },
      {
        time: "13:30",
        title: "Lunch in Okazaki",
        description: "A relaxed lunch stop between the morning's temples and the afternoon's shrine.",
        tag: "food",
        rideToNext: { duration: "30 min", note: "Okazaki → Fushimi Inari, train + walk" }
      },
      {
        time: "15:00",
        title: "Fushimi Inari Taisha",
        description:
          "Thousands of vermillion torii gates climbing the mountain. 30–45 minutes covers the iconic lower gate tunnels; go further only if energy allows.",
        attractionId: "fushimi-inari",
        tag: "culture"
      },
      {
        time: "18:30",
        title: "Back to the hotel",
        description: "Rest before a free evening."
      },
      {
        time: "20:00",
        title: "Dinner — Kawaramachi area",
        description: "An open evening, pick anywhere that looks good."
      }
    ],
    dayTips: [
      "This is a long day with a lot of walking — a good one to split: everyone together in the morning (Ginkaku-ji/Philosopher's Path), then only whoever wants it climbs further at Fushimi Inari in the afternoon",
      "Fushimi Inari is open 24/7 and quieter toward late afternoon than at midday, which is exactly when today's schedule gets there",
      "A good day to send the last round of luggage ahead via Takkyubin — from Richmond Hotel Kyoto to The Gate Hotel Kaminarimon in Tokyo, today or tomorrow"
    ],
    drinkOfTheDay: {
      name: "Junmai Daiginjo sake",
      type: "other",
      pairing: "The premium grade, from a Fushimi brewery down the hill from this afternoon's shrine — a fitting toast to the day.",
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
        word: "Tetsugaku",
        pronounce: "teh-tsoo-GAH-koo",
        meaning: "Philosophy",
        example: "Kono michi wa Tetsugaku no Komichi desu.",
        exampleMeaning: "This path is the Philosopher's Path."
      }
    ]
  },
  {
    dayNumber: 14,
    date: "2026-11-14",
    weekday: "Saturday",
    departureTime: "09:00",
    region: "south",
    base: "Kyoto",
    title: "Day trip — Nara",
    subtitle: "Bowing deer, the great Buddha hall",
    leadImage: "./images/hero/nara-deer-park-hero.jpg",
    activities: [
      {
        time: "09:00",
        title: "Train to Nara",
        description: "JR Nara Line rapid service direct from Kyoto Station, ~45 min, covered by the JR Pass.",
        rideToNext: { duration: "45 min", note: "Kyoto → Nara, JR rapid" }
      },
      {
        time: "10:00",
        title: "Nara Park's bowing deer",
        description:
          "Over 1,000 wild sika deer roam freely and will bow for a 'shika senbei' cracker — buy a stack from a park vendor and expect to be mobbed politely. Only feed the deer the official crackers, nothing else.",
        attractionId: "nara-deer-park",
        tag: "family",
        rideToNext: { duration: "10 min", note: "Deer park → Todai-ji, on foot" }
      },
      {
        time: "11:00",
        title: "Todai-ji's Great Buddha Hall",
        description:
          "The world's largest wooden building, housing a 15 m bronze Buddha. One pillar has a hole the exact size of the statue's nostril — legend says squeezing through it as a kid brings enlightenment.",
        attractionId: "nara-todaiji",
        tag: "culture"
      },
      {
        time: "13:00",
        title: "Lunch — Kakinoha-zushi",
        description: "Persimmon-leaf-wrapped sushi, a Nara tradition going back to before refrigeration.",
        tag: "food",
        rideToNext: { duration: "15 min", note: "Lunch → Kasuga Taisha, on foot" }
      },
      {
        time: "14:30",
        title: "Kasuga Taisha",
        description: "A shrine approached through a forest lined with thousands of stone lanterns, and hung with thousands more in bronze.",
        attractionId: "kasuga-taisha",
        tag: "culture"
      },
      {
        time: "16:00",
        title: "Train back to Kyoto",
        description: "Same JR rapid line."
      },
      {
        time: "17:00+",
        title: "Free evening",
        description: "A couples' evening, shopping, or a café — an open block before tonight's dinner.",
        optional: true
      },
      {
        time: "20:00",
        title: "A festive last Kyoto dinner",
        description: "The last of four nights here — worth making it a proper one."
      }
    ],
    driveNotes: "Kyoto ↔ Nara ≈ 45 min each way by JR rapid",
    restaurants: ["rest-s-nara-kakinoha"],
    dayTips: [
      "Deer crackers (shika senbei) are for the deer only — they will go looking in bags and pockets if you're holding food",
      "Some deer bow for a cracker; a few nip at clothing if kept waiting — stay relaxed and hold the cracker out flat",
      "Nara gets busy on weekends, and today's a Saturday — an early start helps"
    ],
    drinkOfTheDay: {
      name: "Nara sake",
      type: "other",
      pairing: "Nara is considered the birthplace of sake brewing in Japan — a fitting choice for the last night in this city.",
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
        word: "Toro",
        pronounce: "TOH-roh",
        meaning: "Lantern",
        example: "Kasuga Taisha ni wa takusan no touro ga arimasu.",
        exampleMeaning: "Kasuga Taisha has so many lanterns."
      }
    ]
  },
  {
    dayNumber: 15,
    date: "2026-11-15",
    weekday: "Sunday",
    departureTime: "10:00",
    region: "transit",
    base: "Kyoto → Tokyo (Asakusa)",
    title: "Kyoto → Tokyo",
    subtitle: "Last Shinkansen leg — choose Hikari, not Nozomi",
    leadImage: "./images/hero/senso-ji-kaminarimon.jpg",
    activities: [
      {
        time: "10:00",
        title: "Check out, Kyoto Station",
        description: "Note: choose the Hikari Shinkansen — it's covered by the JR Pass. Nozomi is not."
      },
      {
        time: "10:30",
        title: "Hikari Shinkansen to Tokyo Station",
        description: "About 2 hours 15 minutes.",
        rideToNext: { duration: "2 h 15", note: "Kyoto → Tokyo, Hikari (JR Pass covered)" }
      },
      {
        time: "13:00",
        title: "Arrive Tokyo",
        description: "On to the last hotel of the trip."
      },
      {
        time: "14:00",
        title: "Check in to The Gate Hotel Kaminarimon",
        description: "Two rooms, right by Asakusa's landmark gate — a fitting name for the last stop."
      },
      {
        time: "15:30",
        title: "Walk Asakusa",
        description: "Last-minute souvenir shopping — now that all the luggage is finally together again, this is the day for heavier finds."
      },
      {
        time: "18:00",
        title: "A special dinner",
        description: "Sushi omakase, or whatever's been reserved ahead."
      }
    ],
    driveNotes: "Kyoto → Tokyo ≈ 2 h 15 by Hikari Shinkansen (JR Pass covered — Nozomi is not)",
    dayTips: [
      "Choose Hikari or Kodama — Nozomi is the one Shinkansen class the JR Pass doesn't cover",
      "All the Takkyubin-shipped luggage should be back together now — a good day for heavier souvenirs",
      "Asakusa's evening is calmer and prettier than Shinjuku's — a nice change of pace for the last two nights",
      "Book an Omakase dinner days ahead if that's the plan, not the same morning"
    ],
    drinkOfTheDay: {
      name: "Junmai sake",
      type: "other",
      pairing: "A clean, rice-forward sake alongside an omakase dinner — the natural pairing tonight.",
      servingNote: "Chilled, small ceramic cup (choko)"
    },
    italianWords: [
      {
        word: "Omakase",
        pronounce: "oh-mah-KAH-seh",
        meaning: "Chef's choice (\"I leave it to you\")",
        example: "Omakase de onegaishimasu.",
        exampleMeaning: "Chef's choice, please."
      },
      {
        word: "Kaminari",
        pronounce: "kah-mee-NAH-ree",
        meaning: "Thunder",
        example: "Kaminarimon wa yuumei na mon desu.",
        exampleMeaning: "The Thunder Gate is a famous gate."
      }
    ]
  },
  {
    dayNumber: 16,
    date: "2026-11-16",
    weekday: "Monday",
    departureTime: "10:00",
    region: "north",
    base: "Tokyo (Asakusa)",
    title: "Tokyo — free day",
    subtitle: "Ginza, Tsukiji, and an optional dose of Shibuya",
    activities: [
      {
        time: "10:00",
        title: "Ginza",
        description: "Tokyo's flagship shopping and design district — a walk-and-window-shop morning.",
        tag: "culture",
        optional: true,
        rideToNext: { duration: "20 min", note: "Ginza → Tsukiji, on foot" }
      },
      {
        time: "12:00",
        title: "Tsukiji Outer Market",
        description: "Food stalls, snacks and seafood — a good lunch stop.",
        attractionId: "tsukiji-outer-market",
        tag: "food",
        rideToNext: { duration: "30 min", note: "Tsukiji → Shibuya, train" }
      },
      {
        time: "14:30",
        title: "Shibuya Crossing & Harajuku",
        description: "Optional for the full group — a good split point if some want pop-culture Tokyo and others want to rest.",
        attractionId: "shibuya-crossing",
        tag: "view",
        optional: true
      },
      {
        time: "17:00",
        title: "Rest at the hotel",
        description: "A quiet block before the last dinner."
      },
      {
        time: "19:00",
        title: "Last dinner in Tokyo",
        description: "Pick the restaurant someone's been dreaming about the whole trip."
      },
      {
        time: "21:00",
        title: "Final packing",
        description: "Get ahead of tomorrow's early departure tonight, not in the morning."
      }
    ],
    dayTips: [
      "A deliberately light day — don't add a far-flung attraction on top of this",
      "A good day to split entirely: one couple in Ginza, the other in Shibuya, meeting for dinner",
      "Check tonight which airport (Haneda or Narita) and confirm the exact departure time for tomorrow"
    ],
    drinkOfTheDay: {
      name: "Japanese highball",
      type: "cocktail",
      pairing: "A classic whisky highball for the last night — simple, crisp, and easy after 15 days on the move.",
      servingNote: "Tall glass, built tableside with plenty of ice"
    },
    italianWords: [
      {
        word: "Saigo no yoru",
        pronounce: "sai-GOH noh YOH-roo",
        meaning: "The last night",
        example: "Kyou wa Nihon de no saigo no yoru desu.",
        exampleMeaning: "Tonight is the last night in Japan."
      },
      {
        word: "Omedetou",
        pronounce: "oh-meh-deh-TOH",
        meaning: "Congratulations",
        example: "Ryokou ga owarimashita, omedetou!",
        exampleMeaning: "The trip is over, congratulations!"
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
        title: "Light breakfast, check out",
        description: "Timed to the flight — check the departure time and airport (confirmed the night before)."
      },
      {
        time: "-3 h before the flight",
        title: "Transfer to the airport",
        description:
          "To Haneda (HND): Keikyu Line from Asakusa, via Shinagawa, about 25–40 minutes. To Narita (NRT): N'EX from Tokyo Station, about an hour, or the Keisei Skyliner.",
        rideToNext: { duration: "25 min–1 h", note: "Depends on airport — confirm HND vs NRT the night before" }
      },
      {
        time: "At the airport",
        title: "Return SIM if needed, duty-free, fly home",
        description: "Connecting back through Dubai on flydubai. Safe travels — mata ne, Japan."
      }
    ],
    driveNotes: "Asakusa → Haneda ≈ 25–40 min by Keikyu Line; Tokyo Station → Narita ≈ 1 h by N'EX",
    dayTips: [
      "Arrive 3 hours before an international flight",
      "Keep in the carry-on, not a checked bag: passports, medications, valuable electronics, phone chargers",
      "Save a little yen for the airport — transport, snacks, and any last souvenirs",
      "Double check any sharp souvenirs (a good knife, for instance) go in checked luggage, not carry-on"
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
