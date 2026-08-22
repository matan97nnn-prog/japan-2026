import type { POI } from "./types";

export const attractions: POI[] = [
  // ---------- NORTH (Tokyo / Nikko / Hakone / Fuji / Alps / Kanazawa) ----------
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
    id: "ueno-park",
    name: "Ueno Park",
    category: "attraction",
    region: "north",
    shortDescription: "Tokyo's biggest park, temples, a pond and a zoo",
    description:
      "One of Tokyo's oldest and largest public parks, opened in 1873. Ueno Park holds several museums, Ueno Zoo, the Kiyomizu Kannon-do temple, and Shinobazu Pond, where turtles and cormorants share the water with rowboats — a calm counterpoint to the crowds of nearby Asakusa.",
    image: "./images/ueno-park.jpg",
    imageCredit: {
      author: "DXR / Daniel Vorndran",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Ueno_Park,_Tokyo_20130810_1.jpg"
    },
    address: "Uenokoen, Taito City, Tokyo",
    coords: [35.7156, 139.7745],
    tags: ["nature", "family"],
    difficulty: "easy",
    tips: [
      "The pond's boathouse rents rowboats and swan boats if the group wants a slow half-hour",
      "Tokyo National Museum sits inside the park for anyone wanting an indoor detour"
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
      "Go for breakfast or lunch — most stalls wind down by mid-afternoon",
      "Cash is still king at many of the smaller stalls"
    ]
  },
  {
    id: "shibuya-crossing",
    name: "Shibuya Crossing & Harajuku",
    category: "attraction",
    region: "north",
    shortDescription: "The world's busiest pedestrian crossing",
    description:
      "Up to 3,000 people cross at once when the lights change. Watch first from the Starbucks overlooking the scramble, then walk it yourself. Harajuku's Takeshita-dori, a short walk away, adds crepe stands and youth fashion at full volume — a good optional add for anyone in the group who wants a dose of modern pop-culture Tokyo.",
    image: "./images/shibuya-crossing.jpg",
    imageCredit: {
      author: "Jorge Láscar",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:World%27s_busiest_pedestrian_crossing_-_Large_panorama_of_the_Shibuya_Crossing_(43828061665).jpg"
    },
    address: "Shibuya City, Tokyo",
    coords: [35.6595, 139.7005],
    tags: ["view", "culture"],
    difficulty: "easy",
    tips: [
      "The Hachiko statue, just outside the station, is the classic meeting point if the group splits up",
      "Optional add-on for the Tokyo free day — easy to skip if energy is running low"
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
      "November 3rd is Culture Day, a national holiday — reserve the Tobu train seats ahead, this day gets very crowded",
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
    name: "Hakone Ropeway & Lake Ashi",
    category: "attraction",
    region: "north",
    shortDescription: "A ropeway and a caldera lake, Fuji behind it",
    description:
      "A crater lake formed by the same eruption that shaped Owakudani. On a clear day Mt Fuji rises directly behind the water, best seen from the Hakone Ropeway gliding down from Owakudani. The Moto-Hakone side has the lake's famous floating torii gate, part of Hakone Shrine.",
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
      "Mt Fuji is shy — it hides behind cloud more mornings than not, so go early for the best odds",
      "The floating torii gate at Hakone Shrine, on the far shore, is a popular photo stop if time allows"
    ]
  },
  {
    id: "lake-yamanaka",
    name: "Lake Yamanaka",
    category: "attraction",
    region: "north",
    shortDescription: "The closest of the Fuji Five Lakes to the mountain",
    description:
      "The largest and highest of the Fuji Five Lakes, and the closest to Mt Fuji itself — on a clear morning the mountain fills the whole far shore. Quieter than Lake Kawaguchi, with a long, easy lakeside promenade.",
    image: "./images/lake-yamanaka.jpg",
    imageCredit: {
      author: "Alpsdake",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Mount_Fuji_and_Lake_Yamanaka.JPG"
    },
    address: "Yamanakako, Yamanashi",
    coords: [35.3325, 138.8663],
    tags: ["nature", "view"],
    difficulty: "easy",
    tips: [
      "Morning light gives the best odds of a cloud-free Fuji — a good reason to make this the day's first stop",
      "A short lakeside walk is enough; no need to circle the whole lake"
    ]
  },
  {
    id: "oshino-hakkai",
    name: "Oshino Hakkai",
    category: "attraction",
    region: "north",
    shortDescription: "Eight spring-fed ponds fed by Mt Fuji's snowmelt",
    description:
      "A small, traditional village built around eight crystal-clear ponds, fed by snowmelt that filters down through Mt Fuji's lava rock before resurfacing here. Thatched-roof buildings and water wheels line the ponds, alongside stalls selling local pickles and grilled rice cakes.",
    image: "./images/oshino-hakkai.jpg",
    imageCredit: {
      author: "663highland",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:231028_Sokonashi-ike_Oshino_Hakkai_springs_Oshino_Yamanashi_pref_Japan03s3.jpg"
    },
    address: "Oshino, Yamanashi",
    coords: [35.4525, 138.8385],
    tags: ["nature", "village", "water"],
    difficulty: "easy",
    tips: [
      "Budget about an hour to an hour and a half to walk between all eight ponds",
      "Some of the clearest water is at Wakuike, the smallest of the eight"
    ],
    quizFacts: [
      {
        question: "Where does the water in Oshino Hakkai's eight ponds come from?",
        correctAnswer: "Snowmelt that filtered down through Mt Fuji over many years",
        distractors: ["A nearby river, diverted by canal", "Rainwater collected in tanks", "It's pumped in from Lake Kawaguchi"]
      }
    ]
  },
  {
    id: "oishi-park",
    name: "Oishi Park",
    category: "attraction",
    region: "north",
    shortDescription: "A lakeside park with a postcard Fuji view",
    description:
      "A park on the quiet northern shore of Lake Kawaguchi, popular for its wide, unobstructed view of Mt Fuji across the water — one of the most photographed angles of the mountain. In warmer months its lavender fields add color to the foreground; in November the view is all about crisp mountain air and clear autumn light.",
    image: "./images/oishi-park.jpg",
    imageCredit: {
      author: "Alpsdake",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Mount_Fuji_from_Oishi_Park.jpg"
    },
    address: "Oishi, Fujikawaguchiko, Yamanashi",
    coords: [35.5219, 138.7286],
    tags: ["view", "nature"],
    difficulty: "easy",
    tips: [
      "There's a small café in the park with a Fuji view from its terrace, good for a coffee stop",
      "Arrive by mid-afternoon before the light flattens"
    ]
  },
  {
    id: "chureito-pagoda",
    name: "Chureito Pagoda",
    category: "attraction",
    region: "north",
    shortDescription: "A red pagoda framed against Mt Fuji, up ~400 steps",
    description:
      "A five-story red pagoda on a hillside above Fujiyoshida, reached by a climb of roughly 400 steps through Arakura Sengen Shrine's grounds. The reward at the top is one of the most photographed views in Japan — the pagoda in the foreground, Mt Fuji rising directly behind it.",
    image: "./images/chureito-pagoda.jpg",
    imageCredit: {
      author: "Olivier Bruchez",
      license: "CC BY-SA 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Chureito_Pagoda,_Fujiyoshida_(33872654900).jpg"
    },
    address: "Arakura, Fujiyoshida, Yamanashi",
    coords: [35.4903, 138.8006],
    tags: ["view", "culture"],
    difficulty: "moderate",
    tips: [
      "The climb is a steady staircase, not technical, but pace it for anyone with knee trouble",
      "An optional add for the Hakone→Kawaguchiko day if the morning is ahead of schedule — the timed plan doesn't strictly leave room for it, so treat it as a bonus rather than a must"
    ],
    quizFacts: [
      {
        question: "About how many steps does the climb to Chureito Pagoda's viewpoint take?",
        correctAnswer: "About 400",
        distractors: ["About 50", "About 1,000", "About 4,000"]
      }
    ]
  },
  {
    id: "fuji-five-lakes",
    name: "Lake Saiko, Shoji & Motosu",
    category: "attraction",
    region: "north",
    shortDescription: "The three quiet, less-visited Fuji lakes",
    description:
      "The three smallest and least-visited of the Fuji Five Lakes, strung along the road between Kawaguchiko and Matsumoto. Lake Saiko sits deepest in the forest; Lake Shoji is the smallest of the five and has a particularly still, intimate feel; Lake Motosu's classic view — Fuji reflected over the water — is the exact image printed on the Japanese 1,000-yen banknote.",
    image: "./images/fuji-five-lakes.jpg",
    imageCredit: {
      author: "Alpsdake",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Kengamine_of_Mount_Fuji_from_Lake_Motosu.jpg"
    },
    address: "Motosu, Yamanashi",
    coords: [35.4756, 138.6142],
    tags: ["nature", "view"],
    difficulty: "easy",
    tips: [
      "Motosu's banknote view is from the lake's northern shore, near the campground",
      "Treat these as unhurried drive-by stops rather than long visits — 15–20 minutes each is plenty"
    ],
    quizFacts: [
      {
        question: "What is special about the view from Lake Motosu?",
        correctAnswer: "It's the exact view printed on the Japanese 1,000-yen banknote",
        distractors: ["It's the only one of the five with no fish", "It never freezes in winter", "It was man-made in the 1980s"]
      }
    ]
  },
  {
    id: "matsumoto-castle",
    name: "Matsumoto Castle",
    category: "attraction",
    region: "north",
    shortDescription: "'The Crow Castle' — one of Japan's original wooden keeps",
    description:
      "Nicknamed 'Crow Castle' for its black-lacquered wooden walls, Matsumoto Castle is one of only twelve Japanese castles with an original wooden keep still standing — most others are 20th-century concrete reconstructions. Built in the 1590s, it survives with its steep original staircases intact, climbing to a top floor with views over the city to the Japanese Alps.",
    image: "./images/matsumoto-castle.jpg",
    imageCredit: {
      author: "663highland",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Matsumoto_Castle_far_0504.jpg"
    },
    address: "4-1 Marunouchi, Matsumoto, Nagano",
    coords: [36.2384, 137.9683],
    tags: ["culture", "view"],
    difficulty: "moderate",
    tips: [
      "The original wooden stairs inside are steep and narrow — take them slowly",
      "Nakamachi Street's old kura warehouse buildings are a five-minute walk away, a good spot for a soba lunch"
    ],
    quizFacts: [
      {
        question: "Why is Matsumoto Castle unusual compared to most other Japanese castles?",
        correctAnswer: "It's one of only twelve with an original (not rebuilt) wooden keep",
        distractors: ["It's the tallest castle in Japan", "It was built entirely underground", "It has no moat"]
      }
    ]
  },
  {
    id: "kamikochi",
    name: "Kamikochi",
    category: "attraction",
    region: "north",
    shortDescription: "A car-free alpine valley on the Azusa River",
    description:
      "A pristine highland valley inside the Japanese Alps National Park, closed to private cars to preserve it — everyone arrives by shuttle bus or taxi from the Sawando parking area. A flat, well-marked trail follows the clear Azusa River past Taisho Pond and Tashiro Pond to the Kappa Bridge, with the Hotaka mountain range towering directly overhead.",
    image: "./images/kamikochi.jpg",
    imageCredit: {
      author: "Gorgo",
      license: "Public Domain",
      source: "https://commons.wikimedia.org/wiki/File:Taisho_Pond_%E5%A4%A7%E6%AD%A3%E6%B1%A0_(227783081).jpeg"
    },
    address: "Kamikochi, Matsumoto, Nagano",
    coords: [36.2517, 137.6417],
    tags: ["nature", "view", "extreme"],
    difficulty: "easy",
    tips: [
      "Private cars are banned in the valley — park at Sawando and take the shuttle bus or taxi in, and reserve a spot ahead of the trip",
      "The riverside trail is flat and easy, but November mornings can be near freezing — layer up"
    ],
    quizFacts: [
      {
        question: "Why can't visitors drive their own car into Kamikochi?",
        correctAnswer: "Private cars are banned to protect the valley — everyone takes a shuttle or taxi from Sawando",
        distractors: ["The road is too narrow for any car", "It's only accessible by helicopter", "There's no road at all"]
      }
    ]
  },
  {
    id: "sanmachi-suji",
    name: "Sanmachi Suji, Takayama",
    category: "attraction",
    region: "north",
    shortDescription: "Takayama's beautifully preserved Edo-era merchant street",
    description:
      "A cluster of narrow streets in old Takayama lined with dark-wood merchant houses dating back to the Edo period, many still working as sake breweries, cafés and craft shops. A sake brewery is easy to spot by the ball of cedar fronds (sugidama) hanging outside its door.",
    image: "./images/sanmachi-suji.jpg",
    imageCredit: {
      author: "Ankur P",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Takayama_Old_Town_(Sanmachi_Suji)_(35819349621).jpg"
    },
    address: "Kamisannomachi, Takayama, Gifu",
    coords: [36.1422, 137.2531],
    tags: ["culture", "village"],
    difficulty: "easy",
    tips: [
      "Look for the round cedar-frond ball (sugidama) outside a shopfront — it marks a sake brewery open for tastings",
      "Takayama's morning market is a short walk away and closes around midday — visit it first"
    ]
  },
  {
    id: "hida-folk-village",
    name: "Hida Folk Village (Hida no Sato)",
    category: "attraction",
    region: "north",
    shortDescription: "An open-air museum of relocated thatched farmhouses",
    description:
      "An open-air museum on a hillside above Takayama, where more than 30 traditional gassho-zukuri thatched-roof farmhouses were relocated from around the Hida region to save them from being lost to dam projects and modernization. Inside several, you can see the tools and hearths of everyday mountain life.",
    image: "./images/hida-folk-village.jpg",
    imageCredit: {
      author: "Ryan Cragun",
      license: "Public Domain",
      source: "https://commons.wikimedia.org/wiki/File:Hida_Folk_Village.jpg"
    },
    address: "1-590 Kamiokamotocho, Takayama, Gifu",
    coords: [36.1364, 137.2358],
    tags: ["culture", "family", "village"],
    difficulty: "easy",
    tips: [
      "A gentler, flatter alternative to a full Shirakawa-go visit if the group wants the same gassho-zukuri architecture in a smaller dose",
      "Some houses have a lit irori (sunken hearth) inside — a nice detail for kids"
    ]
  },
  {
    id: "shirakawa-go",
    name: "Shirakawa-go",
    category: "attraction",
    region: "north",
    shortDescription: "A UNESCO village of steep thatched gassho-zukuri farmhouses",
    description:
      "A UNESCO World Heritage village of gassho-zukuri farmhouses, named for their steep thatched roofs shaped like two hands pressed together in prayer (gassho) — built steep specifically to shed the region's heavy winter snowfall. The Shiroyama Observatory viewpoint above the village gives the classic postcard overview; Wada House, one of the largest and oldest houses, is open to walk through inside.",
    image: "./images/shirakawa-go.jpg",
    imageCredit: {
      author: "DimiTalen",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Farmhouse_on_the_edge_of_town,_Ogimachi,_Shirakawa.jpg"
    },
    address: "Ogimachi, Shirakawa, Gifu",
    coords: [36.2578, 136.9066],
    tags: ["culture", "village"],
    difficulty: "easy",
    tips: [
      "Do the Shiroyama Observatory viewpoint first, a short uphill walk from the village, then descend into the village itself",
      "This is one of the most photographed spots in Japan — expect company, even on a November weekday"
    ],
    quizFacts: [
      {
        question: "Why are Shirakawa-go's farmhouse roofs built so steep?",
        correctAnswer: "To shed the region's heavy winter snowfall",
        distractors: ["To keep out evil spirits", "For better airflow in summer", "It's just a decorative style"]
      }
    ]
  },
  {
    id: "kenrokuen",
    name: "Kenrokuen Garden",
    category: "attraction",
    region: "north",
    shortDescription: "One of Japan's three great gardens",
    description:
      "A strolling garden dating back to the 1620s, considered one of Japan's three great gardens alongside Okayama's Korakuen and Mito's Kairakuen. In winter its old pine trees are protected from heavy snow by yukitsuri — rope frames strung from a central pole in a distinctive conical shape, put up each November.",
    image: "./images/kenrokuen.jpg",
    imageCredit: {
      author: "そらみみ (Soramimi)",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Hisagoike_Pond,_Midoritaki_Waterfall_and_Kaisekito_Tower_in_Kenroku_Garden.JPG"
    },
    address: "1-1 Kenrokumachi, Kanazawa, Ishikawa",
    coords: [36.5620, 136.6625],
    tags: ["nature", "culture", "view"],
    difficulty: "easy",
    tips: [
      "Yukitsuri rope frames usually go up in early November — worth asking if they're already in place",
      "Go early — Kenrokuen is calm at opening and busy with tour groups by mid-morning"
    ],
    quizFacts: [
      {
        question: "What are the rope frames called that protect Kenrokuen's pine trees from snow each winter?",
        correctAnswer: "Yukitsuri",
        distractors: ["Ikebana", "Bonsai wires", "Torii ropes"]
      }
    ]
  },
  {
    id: "kanazawa-castle",
    name: "Kanazawa Castle Park",
    category: "attraction",
    region: "north",
    shortDescription: "The reconstructed castle of the powerful Maeda clan",
    description:
      "The former seat of the Maeda, the second-wealthiest clan in Edo-period Japan after the ruling Tokugawa. Most of the original castle burned down over the centuries; several structures have been carefully reconstructed using traditional joinery techniques and are open to walk through, right across the moat from Kenrokuen.",
    image: "./images/kanazawa-castle.jpg",
    imageCredit: {
      author: "Daderot",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Kanazawa_Castle_with_moat_-_Kanazawa,_Japan.JPG"
    },
    address: "1-1 Marunouchi, Kanazawa, Ishikawa",
    coords: [36.5654, 136.6586],
    tags: ["culture", "view"],
    difficulty: "easy",
    tips: [
      "Combine with Kenrokuen in one visit — they sit directly across from each other",
      "The reconstructed turret and storehouse interiors show the traditional building techniques used to rebuild them"
    ]
  },
  {
    id: "omicho-market",
    name: "Omicho Market",
    category: "attraction",
    region: "north",
    shortDescription: "Kanazawa's 'kitchen' — close to 280 years of fish stalls",
    description:
      "Kanazawa's main market, trading fish and produce from the Sea of Japan for close to 280 years. Snow crab, sweet shrimp (amaebi) and glossy sushi-grade cuts are laid out at stall after stall — many with a small counter to eat what you just bought standing up.",
    image: "./images/omicho-market.jpg",
    imageCredit: {
      author: "DimiTalen",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Omicho_covered_market_western_entrance,_Kanazawa,_2016.jpg"
    },
    address: "50 Kamiomicho, Kanazawa, Ishikawa",
    coords: [36.5730, 136.6547],
    tags: ["food"],
    difficulty: "easy",
    tips: [
      "Go hungry — the best plan is grazing several stalls rather than one sit-down meal",
      "It's busiest and most alive around lunchtime; a few stalls start closing by mid-afternoon"
    ]
  },
  {
    id: "higashi-chaya",
    name: "Higashi Chaya District",
    category: "attraction",
    region: "north",
    shortDescription: "Kanazawa's historic geisha teahouse quarter",
    description:
      "The largest and best-preserved of Kanazawa's three historic geisha districts, dating to 1820. Lattice-fronted wooden teahouses (chaya) line the main street, several now converted into gold-leaf craft shops and cafés — Kanazawa produces almost all of Japan's gold leaf, and gold-flecked soft-serve ice cream is the local novelty souvenir food.",
    image: "./images/higashi-chaya.jpg",
    imageCredit: {
      author: "Andrea Schaffer",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Higashi_Chaya_district,_Kanazawa_(3810720612).jpg"
    },
    address: "Higashiyama, Kanazawa, Ishikawa",
    coords: [36.5701, 136.6667],
    tags: ["culture", "view"],
    difficulty: "easy",
    tips: [
      "Kanazawa produces almost all of Japan's gold leaf — look for gold-leaf ice cream and cosmetics shops along the main street",
      "Early evening light on the lattice facades is the best time for photos"
    ]
  },

  // ---------- SOUTH (Kyoto / Nara) ----------
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
    id: "nishiki-market",
    name: "Nishiki Market",
    category: "attraction",
    region: "south",
    shortDescription: "'Kyoto's Kitchen' — a five-block covered food street",
    description:
      "A narrow, roofed shopping street running five blocks through central Kyoto, trading fresh and prepared food for over 400 years — earning it the nickname 'Kyoto's Kitchen'. Pickles, skewered mochi, fresh yuba, and Kyoto-style sweets are sold stall after stall, most sized for eating on your feet.",
    image: "./images/nishiki-market.jpg",
    imageCredit: {
      author: "Kok Leng Yeo",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Flickr_-_yeowatzup_-_Nishiki_Shotengai,_Kyoto,_Japan.jpg"
    },
    address: "Nishikikoji-dori, Nakagyo Ward, Kyoto",
    coords: [35.0049, 135.7649],
    tags: ["food", "culture"],
    difficulty: "easy",
    tips: [
      "Eating while walking is generally frowned on elsewhere in Japan but is exactly the point here — most stalls expect it",
      "It gets narrow and crowded midday — an early-afternoon visit is more comfortable"
    ]
  },
  {
    id: "fushimi-inari",
    name: "Fushimi Inari Taisha",
    category: "attraction",
    region: "south",
    shortDescription: "Thousands of vermillion torii gates up the mountain",
    description:
      "The head shrine of Inari, the Shinto god of rice, sake and prosperity — dating back to 711 AD. Thousands of vermillion torii gates, each donated by a business or individual, form tunnels climbing Mt Inari. Free and open 24 hours; the full loop is a 2–3 hour hike, but the first 30–45 minutes covers the iconic gate tunnels.",
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
      "Open 24/7 and far less crowded toward late afternoon than at midday",
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
    id: "ginkaku-ji",
    name: "Ginkaku-ji — the Silver Pavilion",
    category: "attraction",
    region: "south",
    shortDescription: "Despite the name, never actually covered in silver",
    description:
      "A Zen temple built in 1482 as a shogun's retirement villa, deliberately understated in dark wood rather than the silver leaf its name promises — the silver covering was planned but never applied. Its raked white-sand garden, shaped into a cone said to represent Mt Fuji, sits beside a moss garden and pond walk.",
    image: "./images/ginkaku-ji.jpg",
    imageCredit: {
      author: "Oilstreet",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Ginkakuji_Kyoto03-r.jpg"
    },
    address: "2 Ginkakujicho, Sakyo Ward, Kyoto",
    coords: [35.0270, 135.7982],
    tags: ["culture", "nature"],
    difficulty: "easy",
    tips: [
      "The Philosopher's Path starts right outside the temple gate — a natural next stop heading south",
      "Despite the name, there's no actual silver here — don't expect a golden-pavilion-style shine"
    ],
    quizFacts: [
      {
        question: "Why is the Silver Pavilion (Ginkaku-ji) not actually silver?",
        correctAnswer: "The planned silver-leaf covering was never applied",
        distractors: ["It was stolen during a war", "It's silver but only visible at night", "It was originally silver but faded over centuries"]
      }
    ]
  },
  {
    id: "philosophers-path",
    name: "Philosopher's Path",
    category: "attraction",
    region: "south",
    shortDescription: "A canal-side walk named for a wandering professor",
    description:
      "A roughly two-kilometer stone path following a cherry-tree-lined canal between Ginkaku-ji and Nanzen-ji, named for a 20th-century Kyoto University philosophy professor who reportedly walked it daily lost in thought. Quiet, flat, and shaded — a gentle way to link the two temples on foot.",
    image: "./images/philosophers-path.jpg",
    imageCredit: {
      author: "Gzzz",
      license: "CC BY 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Tetsugaku-no-michi_-_Philosopher%27s_Walk_-_Kyoto.jpg"
    },
    address: "Philosopher's Path, Sakyo Ward, Kyoto",
    coords: [35.0180, 135.7950],
    tags: ["nature", "view"],
    difficulty: "easy",
    tips: [
      "The path is flat and shaded — an easy, unhurried 30–40 minute walk end to end",
      "Small cafés and craft shops line parts of the route if anyone wants to break up the walk"
    ]
  },
  {
    id: "nanzen-ji",
    name: "Nanzen-ji",
    category: "attraction",
    region: "south",
    shortDescription: "A vast temple complex with a red-brick aqueduct",
    description:
      "One of Kyoto's largest and most important Zen temple complexes, its grounds crossed by an unexpected red-brick Meiji-era aqueduct (the Suirokaku) still carrying water from Lake Biwa — a striking piece of 19th-century engineering dropped into a centuries-old temple setting.",
    image: "./images/nanzen-ji.jpg",
    imageCredit: {
      author: "Suicasmo",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Nanzenji_aqueduct_20211123.jpg"
    },
    address: "86 Nanzenji Fukuchicho, Sakyo Ward, Kyoto",
    coords: [35.0117, 135.7947],
    tags: ["culture"],
    difficulty: "easy",
    tips: [
      "The red-brick aqueduct arches are a favorite, slightly unexpected photo spot inside an otherwise classical temple complex",
      "The grounds are large — budget at least 30–45 minutes to see the main areas without rushing"
    ]
  },
  {
    id: "arashiyama-bamboo",
    name: "Arashiyama Bamboo Grove & Tenryu-ji",
    category: "attraction",
    region: "south",
    shortDescription: "A towering green corridor, best at sunrise",
    description:
      "A dense, soaring bamboo corridor on Kyoto's western edge — free, open 24/7, and genuinely magical in the first hour after sunrise before tour groups arrive. Tenryu-ji temple next door, a UNESCO World Heritage site with a landscaped strolling garden, is usually far quieter than the grove itself. The Togetsukyo Bridge over the Katsura River, a few minutes further, is Arashiyama's classic postcard view, and the calm Hozugawa river boat ride departs from nearby.",
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
      "The Hozugawa river boat ride runs weather-dependent — check availability the same morning"
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
    id: "kasuga-taisha",
    name: "Kasuga Taisha",
    category: "attraction",
    region: "south",
    shortDescription: "A shrine lined with thousands of stone and bronze lanterns",
    description:
      "Nara's most important Shinto shrine, founded in 768 AD, approached along a forested path lined with thousands of stone lanterns donated by worshippers over the centuries, and hung inside with thousands more in bronze. Twice a year, at the Lantern Festivals, every one of them is lit at once.",
    image: "./images/kasuga-taisha.jpg",
    imageCredit: {
      author: "Wicki",
      license: "Public Domain",
      source: "https://commons.wikimedia.org/wiki/File:Lanterns_at_Kasuga_Taisha.JPG"
    },
    address: "160 Kasugano-cho, Nara",
    coords: [34.6813, 135.8482],
    tags: ["culture", "nature"],
    difficulty: "easy",
    tips: [
      "The approach path through the forest is as much a highlight as the shrine buildings themselves",
      "Deer roam here too, just as freely as in the main park"
    ],
    quizFacts: [
      {
        question: "About how many stone lanterns line the forest path up to Kasuga Taisha?",
        correctAnswer: "About 3,000",
        distractors: ["About 30", "About 300", "About 30,000"]
      }
    ]
  }
];

export const getAttraction = (id: string) => attractions.find(a => a.id === id);
