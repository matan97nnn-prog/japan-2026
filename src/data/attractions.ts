import type { POI } from "./types";

export const attractions: POI[] = [
  // ---------- NORTH (Kanto: Tokyo / Hakone) ----------
  {
    id: "senso-ji",
    name: "Senso-ji",
    category: "attraction",
    region: "north",
    shortDescription: "Tokyo's oldest temple, through the Thunder Gate",
    description:
      "Founded in 645 AD, Tokyo's oldest and most visited temple. Enter through the giant red Kaminarimon 'Thunder Gate' lantern and walk Nakamise-dori's souvenir stalls to the main hall. Rebuilt after WWII bombing, it remains the spiritual heart of old Asakusa.",
    image: "./images/senso-ji.jpg",
    imageCredit: {
      author: "Daderot",
      license: "Public Domain",
      source: "https://commons.wikimedia.org/wiki/File:Kaminarimon_(outer_gate),_Sensoji_Temple,_Akakusa,_Tokyo.jpg"
    },
    website: "https://www.senso-ji.jp/",
    address: "2 Chome-3-1 Asakusa, Taito City, Tokyo",
    coords: [35.7148, 139.7967],
    tags: ["culture", "family"],
    difficulty: "easy",
    tips: [
      "Arrive before 09:00 for a quiet Nakamise-dori — by midday it's shoulder to shoulder",
      "The temple grounds themselves are free; the five-story pagoda and gate are the main photo stops"
    ],
    quizFacts: [
      {
        question: "What is the giant red lantern at Senso-ji's outer gate called?",
        correctAnswer: "Kaminarimon (Thunder Gate)",
        distractors: ["Toshogu Gate", "Sakura Gate", "Fuji Gate"]
      }
    ]
  },
  {
    id: "tokyo-skytree",
    name: "Tokyo Skytree",
    category: "attraction",
    region: "north",
    shortDescription: "634 m tower with a clear-day Mt Fuji view",
    description:
      "The tallest structure in Japan at 634 m, with two observation decks — the Tembo Deck at 350 m and the pricier Tembo Galleria at 450 m. On a clear day the view stretches to Mt Fuji.",
    image: "./images/tokyo-skytree.jpg",
    imageCredit: {
      author: "Danny15",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Tokyo_Skytree_view.JPG"
    },
    website: "https://www.tokyo-skytree.jp/en/",
    address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo",
    coords: [35.7101, 139.8107],
    tags: ["view", "family"],
    difficulty: "easy",
    tips: [
      "Book timed-entry tickets online in advance to skip the ground-floor queue",
      "The 350 m deck is enough on all but the clearest days"
    ]
  },
  {
    id: "meiji-jingu",
    name: "Meiji Jingu",
    category: "attraction",
    region: "north",
    shortDescription: "A forested shrine in the middle of the city",
    description:
      "A Shinto shrine dedicated to Emperor Meiji and Empress Shoken, set inside a forest of 100,000 trees donated from across Japan when it was built in 1920. A calm, green contrast right next to Harajuku's crowds.",
    image: "./images/meiji-jingu.jpg",
    imageCredit: {
      author: "Teddy Yoshida",
      license: "Public Domain",
      source: "https://commons.wikimedia.org/wiki/File:Meiji-jingu_torii.JPG"
    },
    website: "https://www.meijijingu.or.jp/en/",
    address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo",
    coords: [35.6764, 139.6993],
    tags: ["culture", "nature"],
    difficulty: "easy",
    tips: [
      "Look for sake barrels donated by breweries nationwide, displayed along the path to the shrine",
      "Weekends sometimes catch a traditional Shinto wedding procession — a nice surprise, keep a respectful distance"
    ]
  },
  {
    id: "shibuya-crossing",
    name: "Shibuya Crossing & Shibuya Sky",
    category: "attraction",
    region: "north",
    shortDescription: "The world's busiest pedestrian crossing",
    description:
      "Up to 3,000 people cross at once when the lights change. Watch first from the Starbucks overlooking the scramble, then walk it yourself. Shibuya Sky's open-air rooftop deck, a few minutes' walk away, gives the best bird's-eye view — especially at sunset.",
    image: "./images/shibuya-crossing.jpg",
    imageCredit: {
      author: "Jorge Láscar",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:World%27s_busiest_pedestrian_crossing_-_Large_panorama_of_the_Shibuya_Crossing_(43828061665).jpg"
    },
    website: "https://www.shibuya-scramble-square.com/sky/",
    address: "Shibuya City, Tokyo",
    coords: [35.6595, 139.7005],
    tags: ["view", "culture"],
    difficulty: "easy",
    tips: [
      "Shibuya Sky sunset slots sell out — book the specific time online ahead of the day",
      "The Hachiko statue, just outside the station, is the classic meeting point if the group splits up"
    ],
    quizFacts: [
      {
        question: "About how many people can cross Shibuya Crossing at once when the lights change?",
        correctAnswer: "Up to 3,000",
        distractors: ["About 50", "About 300", "About 10,000"]
      }
    ]
  },
  {
    id: "teamlab-planets",
    name: "teamLab Planets TOKYO",
    category: "attraction",
    region: "north",
    shortDescription: "A barefoot, wade-through-water digital art museum",
    description:
      "A digital art museum you experience barefoot — walking through ankle-deep water lit with projected koi, and other immersive rooms of light and mirrors. Genuinely enjoyable for every age, from toddlers to grandparents.",
    image: "./images/teamlab-planets.jpg",
    imageCredit: {
      author: "Hyppolyte de Saint-Rambert",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:TEAM_LAB_univers_k.jpg"
    },
    website: "https://www.teamlab.art/e/planets/",
    address: "6 Chome-1-16 Toyosu, Koto City, Tokyo",
    coords: [35.6449, 139.7930],
    tags: ["family", "culture"],
    difficulty: "easy",
    tips: [
      "Wear clothes you can roll up past the knee, and bring a small towel to dry your feet after",
      "Book a specific entry slot online — it regularly sells out days ahead"
    ]
  },
  {
    id: "tsukiji-outer-market",
    name: "Tsukiji Outer Market",
    category: "attraction",
    region: "north",
    shortDescription: "The best breakfast in Tokyo",
    description:
      "The wholesale fish auction moved to Toyosu in 2018, but Tsukiji's outer market of food stalls and small restaurants remains, and remains the best breakfast crawl in the city — fresh uni, tamagoyaki skewers, and tuna served over rice.",
    image: "./images/tsukiji-outer-market.jpg",
    imageCredit: {
      author: "Aimaimyi",
      license: "CC BY-SA",
      source: "https://commons.wikimedia.org/wiki/File:Tsukiji_Outer_Market_-01.jpg"
    },
    address: "4 Chome Tsukiji, Chuo City, Tokyo",
    coords: [35.6654, 139.7707],
    tags: ["food"],
    difficulty: "easy",
    tips: [
      "Go for breakfast — most stalls wind down by early afternoon",
      "Cash is still king at many of the smaller stalls"
    ]
  },
  {
    id: "nikko-toshogu",
    name: "Toshogu Shrine, Nikko",
    category: "attraction",
    region: "north",
    shortDescription: "A gilded mausoleum in the autumn mountains",
    description:
      "The elaborately carved, UNESCO-listed mausoleum of shogun Tokugawa Ieyasu, founder of the Tokugawa dynasty that ruled Japan for over 250 years. Home to the original carving of the 'see no evil, hear no evil, speak no evil' three wise monkeys. Nikko sits in the mountains north of Tokyo and is one of the country's best-known autumn foliage spots.",
    image: "./images/nikko-toshogu.jpg",
    imageCredit: {
      author: "MichaelMaggs",
      license: "CC BY-SA 2.5",
      source: "https://commons.wikimedia.org/wiki/File:Three_Wise_Monkeys,Tosho-gu_Shrine.JPG"
    },
    website: "https://www.toshogu.jp/en/",
    address: "2301 Sannai, Nikko, Tochigi",
    coords: [36.7581, 139.5989],
    tags: ["culture", "nature", "view"],
    difficulty: "moderate",
    tips: [
      "Reserve the Tobu Limited Express from Asakusa ahead of time during foliage season",
      "Layer up — Nikko runs several degrees cooler than Tokyo"
    ],
    quizFacts: [
      {
        question: "What are the three famous carved monkeys at Toshogu Shrine known for?",
        correctAnswer: "\"See no evil, hear no evil, speak no evil\"",
        distractors: ["Guarding a hidden treasure", "Ringing a bell at sunrise", "Predicting the weather"]
      }
    ]
  },
  {
    id: "kamakura-daibutsu",
    name: "Kotoku-in — the Great Buddha of Kamakura",
    category: "attraction",
    region: "north",
    shortDescription: "An 11.4 m bronze Buddha, in the open air since the 1400s",
    description:
      "A monumental bronze Amida Buddha cast in 1252. Its wooden hall was destroyed by a tsunami in the 15th century and never rebuilt, so the statue has sat in the open air ever since. Visitors can step inside the hollow bronze for a small fee.",
    image: "./images/kamakura-daibutsu.jpg",
    imageCredit: {
      author: "Dandy1022",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:The_Great_Buddha_of_K%C5%8Dtoku-in_(Kamakura_Daibutsu).jpg"
    },
    website: "https://www.kotoku-in.jp/en/",
    address: "4 Chome-2-28 Hase, Kamakura, Kanagawa",
    coords: [35.3167, 139.5361],
    tags: ["culture", "family"],
    difficulty: "easy",
    tips: [
      "Combine with Hase-dera temple, a short walk away, if time allows",
      "Komachi-dori shopping street near the station is a good lunch stop"
    ],
    quizFacts: [
      {
        question: "Why does the Great Buddha of Kamakura sit outdoors instead of inside a hall?",
        correctAnswer: "A tsunami destroyed the hall centuries ago and it was never rebuilt",
        distractors: ["It was always meant to be outdoors", "The hall burned down last year", "It's too big for any building"]
      }
    ]
  },
  {
    id: "hakone-open-air-museum",
    name: "Hakone Open-Air Museum",
    category: "attraction",
    region: "north",
    shortDescription: "A sculpture park kids can actually climb on",
    description:
      "Japan's first open-air museum — over 100 sculptures scattered across landscaped hillside grounds, plus a dedicated Picasso pavilion. Several installations are designed to be climbed and played on, making it one of the rare museums that's genuinely fun for kids.",
    image: "./images/hakone-open-air-museum.jpg",
    imageCredit: {
      author: "663highland",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:220622_Hakone_Open-air_Museum_Japan01s3.jpg"
    },
    website: "https://www.hakone-oam.or.jp/en/",
    address: "1121 Ninotaira, Hakone, Kanagawa",
    coords: [35.2436, 139.0483],
    tags: ["culture", "family"],
    difficulty: "easy",
    tips: [
      "Budget at least 2 hours — the grounds are larger than they look on the map",
      "There's a foot bath (ashiyu) on site — bring a small towel"
    ]
  },
  {
    id: "hakone-owakudani",
    name: "Owakudani",
    category: "attraction",
    region: "north",
    shortDescription: "A volcanic valley of sulphur vents",
    description:
      "A volcanic valley created by Mt Hakone's last eruption around 3,000 years ago — bubbling hot springs, sulphur vents and steaming ground, reached by ropeway with a clear-day Mt Fuji view from the station. Try a kuro-tamago, an egg boiled in the sulphur springs until its shell turns black — local legend says each one adds seven years to your life.",
    image: "./images/hakone-owakudani.jpg",
    imageCredit: {
      author: "TLV and more",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Owakudani%27s_cable_car,_Japan;_October_2017.jpg"
    },
    address: "Owakudani, Hakone, Kanagawa",
    coords: [35.2333, 139.0167],
    tags: ["nature", "view"],
    difficulty: "easy",
    tips: [
      "The ropeway occasionally suspends service in high wind or volcanic activity alerts — check status before heading up",
      "The sulphur smell is strong near the vents; it fades quickly once you're back on the ropeway"
    ],
    quizFacts: [
      {
        question: "What does local legend say happens if you eat a kuro-tamago (black egg) at Owakudani?",
        correctAnswer: "It adds seven years to your life",
        distractors: ["It brings good luck in love", "It cures a cold", "Nothing — it's just a snack"]
      }
    ]
  },
  {
    id: "hakone-lake-ashi",
    name: "Lake Ashi pirate ship cruise",
    category: "attraction",
    region: "north",
    shortDescription: "A theatrical ferry across a caldera lake",
    description:
      "A crater lake formed by the same eruption that shaped Owakudani, crossed by a fleet of theatrical 'pirate ship' sightseeing ferries. On a clear day Mt Fuji rises directly behind the water. The Moto-Hakone side has the lake's famous floating torii gate, part of Hakone Shrine.",
    image: "./images/hakone-lake-ashi.jpg",
    imageCredit: {
      author: "Daderot",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Hakone-jinja_torii_-_Hakone,_Japan_-_DSC05478.jpg"
    },
    address: "Lake Ashi, Hakone, Kanagawa",
    coords: [35.2038, 139.0281],
    tags: ["view", "family"],
    difficulty: "easy",
    tips: [
      "The Hakone Free Pass covers the ropeway, this cruise, and local buses on one ticket",
      "Sit on the upper deck for the best Fuji photos when visibility is good"
    ]
  },

  // ---------- SOUTH (Kansai: Kyoto / Nara / Osaka / Himeji) ----------
  {
    id: "gion-district",
    name: "Gion",
    category: "attraction",
    region: "south",
    shortDescription: "Kyoto's historic geisha district at dusk",
    description:
      "Kyoto's most famous geisha (geiko) district — lantern-lit lanes, preserved machiya wooden townhouses, and traditional teahouses. Early evening is the best time to walk it, when the lanterns are lit and, occasionally, a geiko or maiko passes on the way to an appointment.",
    image: "./images/gion.jpg",
    imageCredit: {
      author: "Basile Morin",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Wooden_and_bamboo_facades_of_dwellings_with_sudare_in_a_cobbled_street_of_Gion,_perspective_effect_with_vanishing_point,_Kyoto,_Japan.jpg"
    },
    address: "Gion, Higashiyama Ward, Kyoto",
    coords: [35.0037, 135.7788],
    tags: ["culture", "view"],
    difficulty: "easy",
    tips: [
      "If you see a geiko or maiko, keep a respectful distance and never block their path for a photo — some streets have signs and fines for harassment",
      "Hanami-koji street is the most photogenic stretch, especially around dusk"
    ]
  },
  {
    id: "fushimi-inari",
    name: "Fushimi Inari Taisha",
    category: "attraction",
    region: "south",
    shortDescription: "Thousands of vermillion torii gates up the mountain",
    description:
      "The head shrine of Inari, the Shinto god of rice, sake and prosperity — dating back to 711 AD. Thousands of vermillion torii gates, each donated by a business or individual, form tunnels climbing Mt Inari. Free and open 24 hours; the full loop is a 2–3 hour hike, but the first 30–40 minutes covers the iconic gate tunnels.",
    image: "./images/fushimi-inari.jpg",
    imageCredit: {
      author: "Basile Morin",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg"
    },
    website: "https://inari.jp/en/",
    address: "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto",
    coords: [34.9671, 135.7727],
    tags: ["culture", "nature"],
    difficulty: "moderate",
    tips: [
      "Go at opening (the gates are open 24/7, but arrive by 07:30) — it's a crowd crush by mid-morning",
      "You don't need to summit — the first stretch of gates is the photogenic part"
    ],
    quizFacts: [
      {
        question: "Who donates the thousands of torii gates at Fushimi Inari?",
        correctAnswer: "Businesses and individuals, as offerings",
        distractors: ["The Emperor of Japan", "Foreign governments", "They were all built at once by monks"]
      }
    ]
  },
  {
    id: "kiyomizu-dera",
    name: "Kiyomizu-dera",
    category: "attraction",
    region: "south",
    shortDescription: "A wooden temple stage built without a single nail",
    description:
      "A UNESCO World Heritage temple founded in 780 AD, famous for its wooden veranda jutting out over the hillside — built using an interlocking joinery technique with no nails at all. Leads directly into Higashiyama's historic sloped lanes, Sannenzaka and Ninenzaka.",
    image: "./images/kiyomizu-dera.jpg",
    imageCredit: {
      author: "柳田亮 (Ryo Yanagita)",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Kiyomizutera(Kyomizu_no_Butai)_-_panoramio.jpg"
    },
    website: "https://www.kiyomizudera.or.jp/en/",
    address: "1 Chome-294 Kiyomizu, Higashiyama Ward, Kyoto",
    coords: [34.9949, 135.7850],
    tags: ["culture", "view"],
    difficulty: "moderate",
    tips: [
      "Sannenzaka and Ninenzaka's stone steps are uneven and can be slippery when wet — avoid heeled shoes",
      "The temple's main hall stage view is best in the soft morning or late-afternoon light"
    ],
    quizFacts: [
      {
        question: "What is unusual about how Kiyomizu-dera's famous wooden stage was built?",
        correctAnswer: "It was built with no nails at all",
        distractors: ["It was built in a single day", "It floats on the pond below", "It's made entirely of stone"]
      }
    ]
  },
  {
    id: "arashiyama-bamboo",
    name: "Arashiyama Bamboo Grove",
    category: "attraction",
    region: "south",
    shortDescription: "A towering green corridor, best at sunrise",
    description:
      "A dense, soaring bamboo corridor on Kyoto's western edge — free, open 24/7, and genuinely magical in the first hour after sunrise before tour groups arrive. Tenryu-ji temple next door, a UNESCO World Heritage site with a landscaped strolling garden, is usually far quieter than the grove itself.",
    image: "./images/arashiyama-bamboo.jpg",
    imageCredit: {
      author: "Naokijp",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:2021_Sagano_Bamboo_forest_in_Arashiyama,_Kyoto,_Japan.jpg"
    },
    address: "Sagaogurayama Tabuchiyamacho, Ukyo Ward, Kyoto",
    coords: [35.0094, 135.6704],
    tags: ["nature"],
    difficulty: "easy",
    tips: [
      "Go before 08:00 — by mid-morning it's a slow-moving crowd of tour groups",
      "Rent a bicycle near the station to cover the wider Sagano area faster"
    ]
  },
  {
    id: "kinkaku-ji",
    name: "Kinkaku-ji — the Golden Pavilion",
    category: "attraction",
    region: "south",
    shortDescription: "A gold-leaf pavilion reflected in its pond",
    description:
      "A Zen Buddhist temple whose top two floors are entirely covered in gold leaf, built originally as a shogun's retirement villa in 1397 and rebuilt after a 1950 fire. Its reflection in the surrounding pond is one of Kyoto's most photographed sights — especially framed by autumn foliage in mid-November.",
    image: "./images/kinkaku-ji.jpg",
    imageCredit: {
      author: "Basile Morin",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Water_reflection_of_Kinkaku-ji_Temple_with_a_tree_on_a_rock_in_the_pond,_Kyoto,_Japan.jpg"
    },
    website: "https://www.shokoku-ji.jp/en/kinkakuji/",
    address: "1 Kinkakujicho, Kita Ward, Kyoto",
    coords: [35.0394, 135.7292],
    tags: ["culture", "view"],
    difficulty: "easy",
    tips: [
      "The walking route is one-way and doesn't allow lingering right at the best photo spot — take your shot and keep moving, you'll get another angle further along",
      "Weekday mornings are noticeably calmer than weekends"
    ]
  },
  {
    id: "nara-deer-park",
    name: "Nara Park — the bowing deer",
    category: "attraction",
    region: "south",
    shortDescription: "Over 1,000 wild deer, considered sacred messengers",
    description:
      "A large park with over 1,000 wild sika deer roaming freely, considered messengers of the gods in local Shinto belief and protected as a national treasure. Vendors sell 'shika senbei' crackers, and many deer will bow their heads for one.",
    image: "./images/nara-deer-park.jpg",
    imageCredit: {
      author: "MASA",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Nara-Park_Deer.jpg"
    },
    address: "Nara Park, Nara",
    coords: [34.6851, 135.8430],
    tags: ["family", "nature"],
    difficulty: "easy",
    tips: [
      "Hold the cracker out flat and away from pockets or bags — deer will look for more if kept waiting",
      "Most deer are gentle, but a few can nip at clothing — stay relaxed, don't tease them with a cracker"
    ],
    quizFacts: [
      {
        question: "What are Nara's deer traditionally considered to be, in local Shinto belief?",
        correctAnswer: "Sacred messengers of the gods",
        distractors: ["Escaped farm animals", "A modern tourist attraction with no history", "Guardians of the castle"]
      }
    ]
  },
  {
    id: "nara-todaiji",
    name: "Todai-ji",
    category: "attraction",
    region: "south",
    shortDescription: "The world's largest wooden building",
    description:
      "A UNESCO World Heritage temple whose Great Buddha Hall (Daibutsuden) is the largest wooden building in the world, housing a 15 m bronze seated Buddha cast in 752 AD. One supporting pillar has a hole the exact size of the Buddha statue's nostril — local legend says children who squeeze through it are guaranteed enlightenment.",
    image: "./images/nara-todaiji.jpg",
    imageCredit: {
      author: "ONO Masanobu",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Todai-ji_Daibutsuden_front_view_in_2011.jpg"
    },
    website: "https://www.todaiji.or.jp/en/",
    address: "406-1 Zoshicho, Nara",
    coords: [34.6889, 135.8398],
    tags: ["culture", "family"],
    difficulty: "easy",
    tips: [
      "The nostril-sized pillar hole is a fun, safe challenge for smaller kids — adults generally don't fit",
      "Combine with the adjacent deer park in one visit"
    ]
  },
  {
    id: "osaka-castle",
    name: "Osaka Castle",
    category: "attraction",
    region: "south",
    shortDescription: "A rebuilt 16th-century keep in a vast park",
    description:
      "Originally built in 1583 by Toyotomi Hideyoshi, the general who unified Japan, and rebuilt in concrete in 1931 after fire and war destroyed the original. The museum inside covers Hideyoshi's story, and the top-floor observation deck gives a full skyline view over the surrounding park.",
    image: "./images/osaka-castle.jpg",
    imageCredit: {
      author: "Don Ramey Logan",
      license: "CC BY 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Osaka_Castle_2_Osaka_Japan_by_Don_Ramey_Logan.jpg"
    },
    website: "https://www.osakacastle.net/",
    address: "1-1 Osakajo, Chuo Ward, Osaka",
    coords: [34.6873, 135.5262],
    tags: ["culture", "view", "family"],
    difficulty: "easy",
    tips: [
      "The park around the castle is huge and pleasant for a slow walk — allow extra time in autumn foliage season",
      "There's an elevator to the upper floors, useful with strollers or tired legs"
    ]
  },
  {
    id: "dotonbori",
    name: "Dotonbori & Kuromon Market",
    category: "attraction",
    region: "south",
    shortDescription: "Neon canal-side street food chaos",
    description:
      "Osaka's most famous entertainment strip, lined with oversized illuminated signs (the running Glico man is the icon) and street food stalls selling takoyaki and okonomiyaki along the canal. Kuromon Ichiba Market, a short walk away, is a calmer, mostly-indoor version of the same grazing experience.",
    image: "./images/dotonbori.jpg",
    imageCredit: {
      author: "Martin Falbisoner",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Dotonbori,_Osaka,_at_night,_November_2016.jpg"
    },
    address: "Dotonbori, Chuo Ward, Osaka",
    coords: [34.6687, 135.5013],
    tags: ["food", "culture"],
    difficulty: "easy",
    tips: [
      "Kuromon Market stalls are cash, stand-and-eat — bring small bills",
      "Dotonbori is loud and crowded most evenings — go earlier in the day for a calmer visit"
    ]
  },
  {
    id: "universal-studios-japan",
    name: "Universal Studios Japan",
    category: "attraction",
    region: "south",
    shortDescription: "Super Nintendo World and the Wizarding World of Harry Potter",
    description:
      "A full-day theme park whose headline draws are the immersive Super Nintendo World area (Mario Kart ride included) and the Wizarding World of Harry Potter. Both areas require timed-entry passes booked through the official app, separate from park admission.",
    image: "./images/universal-studios-japan.jpg",
    imageCredit: {
      author: "Jpatokal",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:USJ_Super_Nintendo_World_overview.jpg"
    },
    website: "https://www.usj.co.jp/e/",
    address: "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka",
    coords: [34.6658, 135.4323],
    tags: ["family", "extreme"],
    difficulty: "moderate",
    bookingNote: "Book Express Pass tickets in advance for the headline rides on weekends.",
    tips: [
      "Grab the app's timed-entry passes for Super Nintendo World and the Harry Potter area the moment the park opens",
      "A portable phone charger is essential — the app is used constantly for wait times and passes"
    ]
  },
  {
    id: "himeji-castle",
    name: "Himeji Castle",
    category: "attraction",
    region: "south",
    shortDescription: "The best-preserved original castle keep in Japan",
    description:
      "Nicknamed 'White Heron Castle' for its brilliant white plastered walls, and Japan's best-preserved original castle keep — it survived WWII bombing and centuries of earthquakes essentially untouched. A UNESCO World Heritage Site and widely considered Japan's most beautiful surviving castle.",
    image: "./images/himeji-castle.jpg",
    imageCredit: {
      author: "Bernard Gagnon",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Château_de_Himeji02.jpg"
    },
    website: "https://www.himejicastle.jp/en/",
    address: "68 Honmachi, Himeji, Hyogo",
    coords: [34.8394, 134.6939],
    tags: ["culture", "view"],
    difficulty: "moderate",
    tips: [
      "The keep's interior has steep, traditional wooden stairs across six floors — pace it for younger kids or anyone with knee trouble",
      "Combo tickets covering the castle and the adjacent Koko-en Garden cost less than buying separately"
    ],
    quizFacts: [
      {
        question: "Why is Himeji Castle nicknamed 'White Heron Castle'?",
        correctAnswer: "Its brilliant white plastered walls",
        distractors: ["A flock of herons lives in its moat", "It was designed by a man named Heron", "It's shaped like a bird from above"]
      }
    ]
  }
];

export const getAttraction = (id: string) => attractions.find(a => a.id === id);
