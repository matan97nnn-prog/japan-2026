import type { Day } from "./types";

/* The plan, day by day. Built from Dad's full booklet, his Abacus day
 * maps and the family's decisions (30 Oct 2026).
 *
 * Shape of every day: leave the hotel (rideToFirst) → a few stops with a
 * real leg between each (rideToNext, with a Google Maps link and the
 * easy alternative in the note) → back to that night's hotel (returnTo).
 * Unflagged stops are the core of the day; `optional: true` marks the
 * nice-to-haves. Pace: few places, long stays, no box-ticking.
 *
 * Open items (return flight, Kanazawa / Kyoto / end-Tokyo hotels) are
 * flagged in the text, and the legs use the station area as a stand-in. */
export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-10-30",
    weekday: "Friday",
    region: "transit",
    base: "Larnaca",
    title: "Tel Aviv → Larnaca",
    subtitle: "One easy night in Cyprus before the long haul",
    activities: [
      {
        time: "09:00",
        title: "Arkia flight Ben Gurion → Larnaca",
        place: "Larnaca International Airport (LCA)",
        description: "Short hop. Hotel in Larnaca for one night (name to be added).",
        rideToNext: {
          duration: "15 min",
          note: "Taxi",
          dir: { from: "Larnaca International Airport", to: "Finikoudes Beach, Larnaca", mode: "driving" }
        }
      },
      {
        time: "Afternoon",
        title: "Finikoudes promenade & the medieval fort",
        place: "Finikoudes · Larnaca Medieval Fort",
        description: "Palm-lined seafront, a long lunch, a walk to the little fort at the end."
      }
    ],
    dayTips: ["Emirates online check-in opens 48 h before — tonight is a good time"]
  },
  {
    dayNumber: 2,
    date: "2026-10-31",
    weekday: "Saturday",
    region: "transit",
    base: "In the air",
    title: "Larnaca → Dubai → Tokyo",
    subtitle: "EK110 at 16:25, overnight connection",
    activities: [
      {
        time: "Morning",
        title: "Slow morning, check-out",
        description: "Pack layers for the plane: Japan is 10–18°C, colder in the mountains."
      },
      {
        time: "16:25",
        title: "Emirates EK110 Larnaca → Dubai (lands 19:25)",
        place: "Larnaca → Dubai DXB",
        description: "At check-in, make sure bags are tagged through to Narita (NRT)."
      },
      {
        time: "02:55",
        title: "EK318 Dubai → Narita",
        place: "Dubai DXB → Tokyo Narita NRT",
        description: "Sleep as much as you can — we land at 17:20 Tokyo time."
      }
    ]
  },
  {
    dayNumber: 3,
    date: "2026-11-01",
    weekday: "Sunday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Landing in Tokyo",
    subtitle: "Narita 17:20 → Hotel Keihan Tsukiji Ginza Grande",
    leadImage: "./images/hero/shibuya-crossing-night.jpg",
    activities: [
      {
        time: "17:20",
        title: "Land at Narita",
        place: "Narita International Airport, Terminal 2",
        description: "Immigration with the Visit Japan Web QR, bags, then a Suica each (or in the phone wallet).",
        rideToNext: {
          duration: "≈ 1 h 15",
          note: "Keisei Access Express → Higashi-Ginza, no change, then 5 min walk. Easier with bags: Narita Express to Tokyo Station + taxi (≈ 1 h 20). Taxi all the way ≈ ¥25,000+.",
          dir: { from: "Narita International Airport Terminal 2", to: "Hotel Keihan Tsukiji Ginza Grande", mode: "transit" }
        }
      },
      {
        time: "Evening",
        title: "Check in — Hotel Keihan Tsukiji Ginza Grande",
        place: "Hotel Keihan Tsukiji Ginza Grande",
        description: "Booking 1788608896, three nights. A bowl of ramen nearby, then sleep."
      }
    ],
    dayTips: ["No plans tonight — jet lag is the only agenda"],
    culture: {
      title: "First evening: the quiet rules",
      body: "Tokyo is a city of 14 million that feels calm. People queue in lines painted on the platform, talk quietly on trains, and carry their rubbish home because public bins are rare. Nobody expects visitors to be perfect — a small bow and 'arigatō' go a long way."
    }
  },
  {
    dayNumber: 4,
    date: "2026-11-02",
    weekday: "Monday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Old Tokyo — Tsukiji, Nezu & Yanaka",
    subtitle: "Breakfast at the market, the old downtown on foot, the evening tour",
    rideToFirst: {
      duration: "5 min walk",
      note: "Straight out of the hotel",
      dir: { from: "Hotel Keihan Tsukiji Ginza Grande", to: "Tsukiji Outer Market", mode: "walking" }
    },
    activities: [
      {
        time: "07:30",
        title: "Breakfast at Tsukiji Outer Market",
        place: "Tsukiji Outer Market",
        description: "Must. Sushi counter, tamagoyaki on a stick, coffee. Monday is a sure open day; go before 9 when it fills.",
        attractionId: "tsukiji-outer-market",
        rideToNext: {
          duration: "≈ 30 min",
          note: "Hibiya line Tsukiji → Naka-Okachimachi, Chiyoda line → Nezu. Taxi ≈ 20 min, ¥2,500.",
          dir: { from: "Tsukiji Outer Market", to: "Nezu Shrine", mode: "transit" }
        }
      },
      {
        time: "09:30",
        title: "Nezu Shrine",
        place: "Nezu Shrine (Nezu Jinja)",
        description: "Must. A 1,900-year-old shrine with its own tunnel of red torii — like a small Fushimi Inari, without the crowds.",
        rideToNext: {
          duration: "15 min walk",
          dir: { from: "Nezu Shrine", to: "Yanaka Cemetery", mode: "walking" }
        }
      },
      {
        time: "10:30",
        title: "Yanaka — the old downtown on foot",
        place: "Yanaka Cemetery · SCAI the Bathhouse · Kayaba Coffee · Yanaka Ginza",
        description: "Must, take your time. Tree-lined cemetery avenues, a bathhouse turned art gallery, coffee in a 1938 house, then the Yanaka Ginza street for snacks and lunch.",
        rideToNext: {
          duration: "15 min walk",
          note: "Downhill via Kan'ei-ji temple",
          dir: { from: "Yanaka Ginza", to: "Ueno Park", mode: "walking" }
        }
      },
      {
        time: "14:00",
        title: "Ueno Park & Tokyo National Museum",
        place: "Ueno Park · Tokyo National Museum",
        description: "Optional. A stroll past the ponds and temples; the museum if you want an hour of samurai armour and screens.",
        optional: true,
        attractionId: "ueno-park",
        rideToNext: {
          duration: "20 min",
          note: "Ginza line Ueno → Ginza, 5 min walk. Rest at the hotel before the evening.",
          dir: { from: "Ueno Station", to: "Hotel Keihan Tsukiji Ginza Grande", mode: "transit" }
        }
      },
      {
        time: "19:30",
        title: "Head to Shinjuku for the tour",
        description: "Leave by 19:20.",
        rideToNext: {
          duration: "≈ 25 min",
          note: "Hibiya line → Ginza, Marunouchi line → Shinjuku-sanchome. Taxi ≈ 25 min.",
          dir: { from: "Hotel Keihan Tsukiji Ginza Grande", to: "Gap Store Shinjuku Flagship", mode: "transit" }
        }
      },
      {
        time: "20:00",
        title: "Evening tour of Tokyo (Hebrew guide)",
        place: "Gap Store Shinjuku Flagship",
        description: "Hebrew Tour Guide Japan, booking 9022, 4 people.",
        link: { label: "Meeting point on Google Maps", url: "https://maps.app.goo.gl/SbGAF4ki2xodKpPh9" }
      }
    ],
    returnTo: {
      duration: "≈ 25 min",
      note: "Marunouchi line to Ginza, or a taxi (≈ ¥3,500)",
      dir: { from: "Shinjuku Station", to: "Hotel Keihan Tsukiji Ginza Grande", mode: "transit" }
    },
    photoTips: [
      "Tsukiji: the knife shops and tuna counters are great close-ups — ask with a smile and a gesture before photographing a vendor",
      "Nezu: stand low inside the torii tunnel and shoot along it, so the gates stack into a red corridor",
      "Yanaka Cemetery: the main avenue, shot down its length — trees framing the old stone lanterns",
      "Yuyake Dandan steps above Yanaka Ginza: the classic view down the street"
    ],
    alternatives: [
      "Sumo Museum at Ryogoku Kokugikan — free, weekdays 10:00–16:30 (the November tournament itself is in Fukuoka)",
      "Kappabashi kitchenware street — knives, ceramics, the plastic food models",
      "Asakusa and Senso-ji are saved for the evening of 15.11, when they're lit and calm"
    ],
    culture: {
      title: "Shitamachi — the old downtown",
      body: "Yanaka is what Tokyo looked like before the towers: wooden houses, tiny family shops, and temples on every corner. It survived the 1923 earthquake and the 1945 bombing, so the old 'shitamachi' life of craftsmen and merchants still goes on here. At a shrine, bow once at the torii and rinse your hands at the water basin — locals will notice and appreciate it."
    }
  },
  {
    dayNumber: 5,
    date: "2026-11-03",
    weekday: "Tuesday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Culture Day — Meiji Jingu, Omotesando, Nakameguro",
    subtitle: "Forest shrine, horseback archery, the quiet side of west Tokyo",
    rideToFirst: {
      duration: "≈ 30 min",
      note: "Hibiya line → Kasumigaseki, Chiyoda line → Meiji-jingumae. Taxi ≈ 25 min.",
      dir: { from: "Hotel Keihan Tsukiji Ginza Grande", to: "Meiji Jingu", mode: "transit" }
    },
    activities: [
      {
        time: "08:30",
        title: "Meiji Jingu — the forest walk",
        place: "Meiji Jingu",
        description: "Must. Go early: the gravel path through the forest is quiet, the giant torii and sake barrels before the holiday crowds.",
        attractionId: "meiji-jingu",
        rideToNext: {
          duration: "10 min walk",
          dir: { from: "Meiji Jingu", to: "Omotesando Hills", mode: "walking" }
        }
      },
      {
        time: "10:00",
        title: "Omotesando & Cat Street",
        place: "Omotesando · Cat Street (Ura-Harajuku)",
        description: "The zelkova avenue and its architecture, then the back lanes of Cat Street for coffee and small shops. Skip Takeshita Street.",
        rideToNext: {
          duration: "10 min walk",
          dir: { from: "Omotesando Hills", to: "Meiji Jingu", mode: "walking" }
        }
      },
      {
        time: "13:00",
        title: "Yabusame — horseback archery at Meiji Jingu",
        place: "Meiji Jingu (west side)",
        description: "Optional. The autumn festival's finale on Culture Day: archers in Kamakura-era dress shoot at full gallop. Free; come 30–45 min early for a spot.",
        optional: true,
        rideToNext: {
          duration: "≈ 20 min",
          note: "JR Yamanote Harajuku → Ebisu, then 10 min walk. Or Tokyu Toyoko line from Shibuya → Nakameguro.",
          dir: { from: "Harajuku Station", to: "Nakameguro Station", mode: "transit" }
        }
      },
      {
        time: "15:00",
        title: "Daikanyama & Nakameguro",
        place: "Daikanyama T-Site · Meguro River (Nakameguro)",
        description: "Must for the feel of real Tokyo: the beautiful T-Site bookstore, then the canal of the Meguro river lined with small cafés and boutiques.",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Tokyu Toyoko line Nakameguro → Shibuya (3 min). Or 25 min walk via Ebisu.",
          dir: { from: "Nakameguro Station", to: "Shibuya Station", mode: "transit" }
        }
      },
      {
        time: "17:00",
        title: "Shibuya at dusk & dinner",
        place: "Shibuya Sky · Nonbei Yokocho · Ebisu Yokocho",
        description: "Shibuya Sky for sunset (optional, booked ahead), then dinner in the tiny bars of Nonbei Yokocho or the food alley Ebisu Yokocho."
      }
    ],
    returnTo: {
      duration: "≈ 25 min",
      note: "Ginza line Shibuya → Ginza, 5 min walk",
      dir: { from: "Shibuya Station", to: "Hotel Keihan Tsukiji Ginza Grande", mode: "transit" }
    },
    dayTips: [
      "Culture Day is a national holiday — shrines and Shibuya are busy, so the morning is the quiet window",
      "Tsukiji market is likely closed today: breakfast at the hotel or a café",
      "Yabusame start time to be confirmed on meijijingu.or.jp"
    ],
    photoTips: [
      "Meiji Jingu: the wall of sake barrels on the main path, shot at an angle so the rows repeat",
      "Yabusame: fast shutter (1/1000), pre-focus on the track just before the target, burst mode as the horse passes",
      "Omotesando: the Prada building's glass diamonds and the Dior façade — reflections work best in soft afternoon light",
      "Shibuya: the crossing from above at blue hour (≈ 17:00) — slow shutter from the Shibuya Sky rail turns the crowd into streams"
    ],
    alternatives: [
      "Yoyogi Park next to Meiji Jingu — on a holiday it's full of musicians and picnics",
      "Nezu Museum, Omotesando — Asian art and a beautiful hillside garden with maples",
      "Shimokitazawa — vintage shops and coffee, 5 min from Shibuya"
    ],
    culture: {
      title: "Culture Day & the Emperor who opened Japan",
      body: "3 November was Emperor Meiji's birthday. He ruled from 1867 as Japan opened to the world after 250 years of isolation — railways, a constitution, Western dress. Today it's Bunka no Hi, Culture Day, when the government honours artists and scientists, and Meiji Jingu closes its autumn festival with yabusame, a samurai-era ritual of archery on horseback."
    }
  },
  {
    dayNumber: 6,
    date: "2026-11-04",
    weekday: "Wednesday",
    region: "north",
    base: "Hakone",
    title: "Tokyo → Odawara → Hakone",
    subtitle: "Pick up the car, start the road trip",
    rideToFirst: {
      duration: "≈ 15 min",
      note: "Taxi to Tokyo Station (≈ ¥1,500). Big suitcases go by Takkyubin to Takayama.",
      dir: { from: "Hotel Keihan Tsukiji Ginza Grande", to: "Tokyo Station", mode: "driving" }
    },
    activities: [
      {
        time: "08:30",
        title: "Shinkansen Tokyo → Odawara",
        place: "Tokyo Station → Odawara Station",
        description: "Kodama or Hikari, ≈ 35 min. Reserve seats.",
        rideToNext: {
          duration: "≈ 35 min",
          dir: { from: "Tokyo Station", to: "Odawara Station", mode: "transit" }
        }
      },
      {
        time: "10:00",
        title: "Collect the car — Toyota Rent a Car",
        place: "Toyota Rent a Car, Odawara Sta. Shinkansen Exit",
        description: "Booking 99910376400, Noah Hybrid, ETC card included. Passport + licence + IDP. Branch: 0465-32-0100.",
        rideToNext: {
          duration: "≈ 40 min",
          dir: { from: "Odawara Station", to: "Hakone Open-Air Museum", mode: "driving" }
        }
      },
      {
        time: "11:00",
        title: "Hakone Open-Air Museum",
        place: "Hakone Open-Air Museum (Chōkoku-no-Mori)",
        description: "Must. Sculpture on mountain lawns, a stained-glass tower, a Picasso pavilion, and a hot-spring footbath. Lunch at the museum café. 2 h.",
        attractionId: "hakone-open-air-museum",
        rideToNext: {
          duration: "≈ 20 min",
          dir: { from: "Hakone Open-Air Museum", to: "Owakudani", mode: "driving" }
        }
      },
      {
        time: "14:00",
        title: "Owakudani",
        place: "Owakudani",
        description: "Volcanic steam vents and Fuji views when clear; this altitude has the best autumn colour in early November. Can close on high-gas days.",
        attractionId: "hakone-owakudani",
        rideToNext: {
          duration: "≈ 25 min",
          dir: { from: "Owakudani", to: "Hakone Shrine", mode: "driving" }
        }
      },
      {
        time: "15:30",
        title: "Lake Ashi & Hakone Shrine",
        place: "Hakone Shrine · Lake Ashi",
        description: "Optional if tired. The cedar-lined steps to the shrine and its red torii standing in the lake.",
        optional: true,
        attractionId: "hakone-lake-ashi"
      }
    ],
    returnTo: {
      duration: "≈ 30 min",
      note: "To Hakone Yutowa in Gora — onsen, dinner, early night",
      dir: { from: "Hakone Shrine", to: "Hakone Yutowa", mode: "driving" }
    },
    dayTips: [
      "Drive on the left, take it slow out of the rental lot",
      "Don't try the whole Hakone loop on car day"
    ],
    photoTips: [
      "Open-Air Museum: climb the Symphonic Sculpture tower and shoot straight up at the stained glass",
      "Hakone Shrine torii: the queue for the front shot is long — the side of the lakeshore path gives the same gate with fewer people",
      "Owakudani: on a clear day, Fuji sits behind the steam — a longer lens compresses the two together"
    ],
    alternatives: [
      "Tenzan Tohji-kyo onsen in Yumoto — a forest bathhouse, private baths available",
      "Hakone Museum of Art in Gora — a moss garden with maples, next to the hotel"
    ],
    culture: {
      title: "Onsen: how to bathe like a local",
      body: "Hot springs are part of Japanese life — a place to slow down, not to swim. Wash and rinse fully at the stools before entering, no swimsuits, keep the small towel out of the water (on your head is classic), and keep voices low. Many ryokan serve dinner in yukata robes; it's fine to wear one to dinner."
    }
  },
  {
    dayNumber: 7,
    date: "2026-11-05",
    weekday: "Thursday",
    region: "north",
    base: "Kawaguchiko",
    title: "Hakone → Fuji Five Lakes",
    subtitle: "The pagoda view, spring ponds, a family sake brewery",
    rideToFirst: {
      duration: "≈ 1 h 15",
      note: "Via Gotemba. Gotemba Premium Outlets is on the way if anyone wants it — it costs ~2 h.",
      dir: { from: "Hakone Yutowa", to: "Chureito Pagoda", mode: "driving" }
    },
    activities: [
      {
        time: "09:30",
        title: "Chureito Pagoda",
        place: "Chureito Pagoda (Arakurayama Sengen Park)",
        description: "Must if Fuji is out — morning is when it's clearest. ~400 steps up to the five-storey pagoda with Fuji behind.",
        attractionId: "chureito-pagoda",
        rideToNext: {
          duration: "≈ 20 min",
          dir: { from: "Chureito Pagoda", to: "Oshino Hakkai", mode: "driving" }
        }
      },
      {
        time: "11:30",
        title: "Oshino Hakkai & lunch",
        place: "Oshino Hakkai",
        description: "Eight spring ponds fed by Fuji snowmelt, in a thatched village. Lunch there — soba or houtou.",
        attractionId: "oshino-hakkai",
        rideToNext: {
          duration: "≈ 20 min",
          dir: { from: "Oshino Hakkai", to: "Ide Sake Brewery Kawaguchiko", mode: "driving" }
        }
      },
      {
        time: "15:00",
        title: "Ide Sake Brewery — tour & tasting",
        place: "Ide Sake Brewery (Ide Shuzo), Kawaguchiko",
        description: "A 20-generation family brewery using Fuji water. ¥500 incl. tasting; book by 16:00 the day before. Buy a bottle for tomorrow's birthday.",
        rideToNext: {
          duration: "≈ 10 min",
          dir: { from: "Ide Sake Brewery Kawaguchiko", to: "Lake Kawaguchi north shore", mode: "driving" }
        }
      },
      {
        time: "16:00",
        title: "Lake Kawaguchi north shore at sunset",
        place: "Kawaguchiko north shore · Momiji Corridor",
        description: "Optional. The maple corridor (partly red) and Fuji across the water at sunset, ≈ 16:40.",
        optional: true
      }
    ],
    returnTo: {
      duration: "≈ 10 min",
      note: "Kawaguchiko Urban Resort Villa — one night",
      dir: { from: "Lake Kawaguchi north shore", to: "Kawaguchiko Urban Resort Villa", mode: "driving" }
    },
    dayTips: [
      "Fuji hides behind clouds by midday — if it's clear when you wake up, go to the views first",
      "The Kawaguchiko Autumn Leaves Festival opens 7.11, after we leave"
    ],
    photoTips: [
      "Chureito: the classic frame is from the upper deck behind the pagoda; a 24–35 mm fits pagoda + Fuji",
      "Oshino Hakkai: early or late, the pond water is glass-clear — a polariser (or sunglasses over the phone lens) cuts reflections",
      "Lake Kawaguchi: Fuji reflected in the water at dawn or dusk, from the north shore near the Kawaguchiko Music Forest"
    ],
    alternatives: [
      "Fuji Yurari onsen — outdoor baths facing Fuji",
      "Kachi Kachi Ropeway — 3 min up for a Fuji and lake view at sunset",
      "Gotemba Premium Outlets on the way from Hakone"
    ],
    culture: {
      title: "Fuji — mountain and shrine",
      body: "Mount Fuji is sacred in Shinto; its summit belongs to a shrine, and climbing it was a pilgrimage for centuries. The pagoda at Chureito is a memorial to the war dead, and the springs of Oshino were purification stops for pilgrims. That's why Fuji appears everywhere — on the ¥1,000 note, in woodblock prints, on bathhouse walls."
    }
  },
  {
    dayNumber: 8,
    date: "2026-11-06",
    weekday: "Friday",
    region: "north",
    base: "Matsumoto",
    title: "Dad's 60th — Fuji at sunrise, Matsumoto at night",
    subtitle: "The quiet lakes, the black castle, a birthday kaiseki",
    rideToFirst: {
      duration: "≈ 10 min",
      note: "Leave at 05:45 — sunrise ≈ 06:05",
      dir: { from: "Kawaguchiko Urban Resort Villa", to: "Oishi Park", mode: "driving" }
    },
    activities: [
      {
        time: "06:00",
        title: "Sunrise over Fuji at Oishi Park",
        place: "Oishi Park, Lake Kawaguchi",
        description: "Must — the birthday morning. Coffee, a family photo with Fuji, the first toast. Back to the villa for breakfast.",
        attractionId: "oishi-park",
        rideToNext: {
          duration: "≈ 5 min",
          dir: { from: "Oishi Park", to: "Itchiku Kubota Art Museum", mode: "driving" }
        }
      },
      {
        time: "09:30",
        title: "Itchiku Kubota Art Museum",
        place: "Itchiku Kubota Art Museum",
        description: "Kimono painted as landscapes, in a building and garden made for them. Quiet and beautiful. 1 h.",
        rideToNext: {
          duration: "≈ 30 min",
          note: "Along lakes Saiko and Shoji",
          dir: { from: "Itchiku Kubota Art Museum", to: "Nakanokura Pass Observatory, Lake Motosu", mode: "driving" }
        }
      },
      {
        time: "11:00",
        title: "Lake Motosu — the ¥1,000-note view",
        place: "Lake Motosu · Nakanokura Pass",
        description: "The quietest of the five lakes. A 15-min walk up to the viewpoint printed on the ¥1,000 note.",
        attractionId: "fuji-five-lakes",
        rideToNext: {
          duration: "≈ 2 h 15",
          note: "Chuo Expressway; a stop at a service area for lunch",
          dir: { from: "Lake Motosu", to: "Matsumoto Hotel Kagetsu", mode: "driving" }
        }
      },
      {
        time: "14:30",
        title: "Check in, then Matsumoto Castle",
        place: "Matsumoto Hotel Kagetsu → Matsumoto Castle",
        description: "Must. Japan's oldest original wooden keep, black against the Alps, 10 min walk from the hotel. Steep inner stairs. Last entry 16:30.",
        attractionId: "matsumoto-castle",
        rideToNext: {
          duration: "10 min walk",
          dir: { from: "Matsumoto Castle", to: "Nakamachi Street, Matsumoto", mode: "walking" }
        }
      },
      {
        time: "19:00",
        title: "Birthday dinner — kaiseki",
        place: "Hikariya Higashi (or Hikariya Nishi), Matsumoto",
        description: "Our pick: Hikariya Higashi, private tatami rooms, local Shinshu ingredients. Book and mention the 60th."
      }
    ],
    returnTo: {
      duration: "≈ 10 min",
      note: "Walk or taxi back to Matsumoto Hotel Kagetsu. Yesterday's bottle of sake for a toast in the room.",
      dir: { from: "Hikariya Higashi Matsumoto", to: "Matsumoto Hotel Kagetsu", mode: "walking" }
    },
    photoTips: [
      "Oishi Park at sunrise: shoot from the lakeshore so Fuji and the reflection fill the frame; a family shot with the sky behind you lit pink",
      "Motosu: the ¥1,000 view — hold up a real note in front of the scene for a fun match shot",
      "Matsumoto Castle: from the red Uzumi bridge across the moat, with the keep reflected — best in late afternoon light (≈ 16:00)"
    ],
    alternatives: [
      "Nawate Street & Nakamachi — the old merchant streets near the castle, for an evening stroll",
      "A private onsen bath at the hotel, if available"
    ],
    culture: {
      title: "Kanreki — turning 60 in Japan",
      body: "In Japan, the 60th birthday is called kanreki: the traditional calendar completes its full 60-year cycle, so a person is 'reborn'. Families celebrate with a red vest or hat (red for a new beginning), a festive meal, and wishes for long life. Mazal tov, Abba — kanreki omedetō!"
    }
  },
  {
    dayNumber: 9,
    date: "2026-11-07",
    weekday: "Saturday",
    region: "north",
    base: "Takayama",
    title: "Kamikochi → Takayama",
    subtitle: "A river walk in the Japanese Alps, an onsen, then Takayama",
    rideToFirst: {
      duration: "≈ 1 h 15",
      note: "Route 158 through the mountains to Hirayu. Private cars aren't allowed into Kamikochi.",
      dir: { from: "Matsumoto Hotel Kagetsu", to: "Akandana Parking Hirayu", mode: "driving" }
    },
    activities: [
      {
        time: "08:45",
        title: "Park at Hirayu (Akandana), shuttle bus up",
        place: "Akandana Parking → Kamikochi Bus Terminal",
        description: "≈ 25 min bus. Saturday is busy — aim for the early buses.",
        rideToNext: { duration: "≈ 25 min", note: "Shuttle bus" }
      },
      {
        time: "09:30",
        title: "Kamikochi: Taisho Pond → Kappa Bridge → Myojin",
        place: "Taisho-ike · Kappa-bashi · Myojin-ike",
        description: "Must. A flat riverside trail through gold larches under snowy peaks. Get off at Taisho-ike, walk to Kappa Bridge (1 h), on to Myojin Pond (1 h) and back along the other bank. Lunch by Kappa Bridge.",
        attractionId: "kamikochi",
        rideToNext: {
          duration: "≈ 25 min",
          note: "Bus back to Hirayu (last bus ≈ 17:30)"
        }
      },
      {
        time: "15:00",
        title: "Onsen at Hirayu no Mori",
        place: "Hirayu no Mori",
        description: "16 outdoor baths in the forest, ¥700; private baths available.",
        rideToNext: {
          duration: "≈ 1 h",
          dir: { from: "Hirayu no Mori", to: "Hida Takayama Onsen Takayama Green Hotel", mode: "driving" }
        }
      },
      {
        time: "Evening",
        title: "Check in — Takayama Green Hotel (2 nights, 2 rooms)",
        place: "Hida Takayama Onsen Takayama Green Hotel",
        description: "Onsen hotel by Takayama station. The suitcases from Tokyo are waiting. Hida beef for dinner."
      }
    ],
    dayTips: [
      "Mountain mornings are near freezing — layers, hat, good shoes",
      "Check the Kamikochi bus timetable the night before (alpico.co.jp)"
    ],
    photoTips: [
      "Taisho Pond: the dead trees standing in the water, with morning mist and Mt Yake behind",
      "Kappa Bridge: walk 100 m upstream and shoot back — the bridge, the river and the Hotaka peaks in one frame",
      "Myojin Pond: still water, so reflections — lower the camera close to the surface"
    ],
    alternatives: [
      "Shinhotaka Ropeway night service — stargazing above the Alps, 6–8.11 evenings, 18:00–20:20 (between Hirayu and Takayama)",
      "Shinhotaka Ropeway by day instead of Kamikochi, if the weather is poor in the valley"
    ],
    culture: {
      title: "Mountains as gods",
      body: "In Japan, mountains are traditionally homes of the kami (spirits). The small Hotaka Shrine at Myojin Pond honours the god of the peaks above it. Kamikochi itself means 'where the gods descended'. The valley is closed to private cars to keep it that way — one of the strictest nature protections in the country."
    }
  },
  {
    dayNumber: 10,
    date: "2026-11-08",
    weekday: "Sunday",
    region: "north",
    base: "Takayama",
    title: "Takayama",
    subtitle: "Morning markets, the old town, sake — no car today",
    rideToFirst: {
      duration: "10–15 min walk",
      dir: { from: "Hida Takayama Onsen Takayama Green Hotel", to: "Miyagawa Morning Market", mode: "walking" }
    },
    activities: [
      {
        time: "07:30",
        title: "Miyagawa & Jinya-mae morning markets",
        place: "Miyagawa Morning Market · Jinya-mae Morning Market",
        description: "Must. Farmers' wives selling pickles, apples, miso; Hida beef skewers along the river.",
        rideToNext: {
          duration: "5 min walk",
          dir: { from: "Miyagawa Morning Market", to: "Sanmachi Suji", mode: "walking" }
        }
      },
      {
        time: "09:00",
        title: "Sanmachi Suji — the old town & sake breweries",
        place: "Sanmachi Suji · Harada · Funasaka · Hirase breweries",
        description: "Must. Edo-era merchant streets. A green cedar ball over the door means a brewery: Harada and Funasaka offer tastings.",
        attractionId: "sanmachi-suji",
        rideToNext: {
          duration: "5 min walk",
          dir: { from: "Sanmachi Suji", to: "Takayama Jinya", mode: "walking" }
        }
      },
      {
        time: "13:30",
        title: "Takayama Jinya",
        place: "Takayama Jinya",
        description: "The only surviving Edo-era government office in Japan — tatami halls, a rice storehouse, a garden. 1 h.",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Sarubobo bus or taxi; 30 min walk",
          dir: { from: "Takayama Jinya", to: "Hida Folk Village", mode: "transit" }
        }
      },
      {
        time: "15:00",
        title: "Hida no Sato folk village",
        place: "Hida Folk Village (Hida no Sato)",
        description: "Optional. Thatched farmhouses around a pond, with maples. A gentle preview of Shirakawa-go.",
        optional: true,
        attractionId: "hida-folk-village"
      }
    ],
    returnTo: {
      duration: "≈ 15 min",
      note: "Bus or taxi back to Takayama Green Hotel",
      dir: { from: "Hida Folk Village", to: "Hida Takayama Onsen Takayama Green Hotel", mode: "transit" }
    },
    photoTips: [
      "Sanmachi: arrive before 9 for empty streets — shoot low along the dark wooden façades and their water channels",
      "The red Nakabashi bridge from the riverbank below, with maples overhanging",
      "Hida no Sato: the farmhouses reflected in the central pond"
    ],
    alternatives: [
      "Hie Shrine maple festival — early–mid November (dates unconfirmed), 15 min walk from the old town",
      "Takayama Festival Floats Exhibition Hall — the giant festival floats up close",
      "Matsuri no Mori — an underground hall of festival floats with giant taiko drums"
    ],
    culture: {
      title: "The carpenters of Hida",
      body: "For over 1,000 years the mountain region of Hida sent its master carpenters to build the temples of Nara and Kyoto, instead of paying taxes in rice. That craftsmanship is in every beam of Takayama's old town. And the green cedar ball (sugidama) over a brewery door turns brown as the new sake matures — a sign everyone here can read."
    }
  },
  {
    dayNumber: 11,
    date: "2026-11-09",
    weekday: "Monday",
    region: "north",
    base: "Kanazawa",
    title: "Shirakawa-go → Kanazawa",
    subtitle: "The thatched village, then hand back the car",
    rideToFirst: {
      duration: "≈ 50 min",
      note: "Tokai-Hokuriku Expressway. Park at the Seseragi car park.",
      dir: { from: "Hida Takayama Onsen Takayama Green Hotel", to: "Shirakawa-go", mode: "driving" }
    },
    activities: [
      {
        time: "09:00",
        title: "Shirakawa-go & the Shiroyama viewpoint",
        place: "Shirakawa-go · Shiroyama Viewpoint · Wada House",
        description: "Must. A UNESCO village of steep thatched farmhouses. Walk up (20 min) or take the shuttle to the viewpoint, then step inside the Wada House. 2–3 h.",
        attractionId: "shirakawa-go",
        rideToNext: {
          duration: "≈ 1 h 15",
          dir: { from: "Shirakawa-go", to: "Fukumitsuya Sake Brewery Kanazawa", mode: "driving" }
        }
      },
      {
        time: "15:00",
        title: "Fukumitsuya sake brewery tour",
        place: "Fukumitsuya, Kanazawa",
        description: "Optional. Kanazawa's oldest brewery (1625). 90-min tour, ¥3,300 — runs Mon/Fri/Sat in winter, so today fits. Book ahead.",
        optional: true,
        rideToNext: {
          duration: "≈ 15 min",
          note: "Refuel near the station first",
          dir: { from: "Fukumitsuya Sake Brewery Kanazawa", to: "Toyota Rent a Car Kanazawa Station East Exit", mode: "driving" }
        }
      },
      {
        time: "By 20:00",
        title: "Return the car — Kanazawa Station East Exit",
        place: "Toyota Rent a Car, Porte Kanazawa Bldg 1F, 2-15-1 Honmachi",
        description: "Refuel, hand in the ETC card with the car.",
        link: { label: "Return shop on Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Toyota+Rent+a+Car+Kanazawa+Station+East+Exit" }
      }
    ],
    returnTo: {
      duration: "walk / short taxi",
      note: "Taxi or bus from the station to Hotel Forza Kanazawa (2 nights, 2 rooms), near Omicho Market",
      dir: { from: "Kanazawa Station", to: "Hotel Forza Kanazawa", mode: "transit" }
    },
    dayTips: ["A long day — if the road is slow, skip the brewery and protect the 20:00 car return"],
    photoTips: [
      "Shiroyama viewpoint: the whole village with the river and mountains — come before 11 when tour buses peak",
      "The Deai-bashi suspension bridge at the entrance: shoot back toward the village",
      "Inside the farmhouses: the giant smoke-darkened roof beams, lit by the windows"
    ],
    alternatives: ["Gokayama (Ainokura) — a smaller, quieter thatched village, 30 min further, if we have time"],
    culture: {
      title: "Yui — rebuilding a roof together",
      body: "A gassho-zukuri roof is replaced every 30–40 years, and it takes up to 200 villagers in a single day. The custom is called yui: neighbours help each other, and the favour is returned. The steep 'praying hands' shape lets heavy snow slide off, and the attic floors once housed silkworms."
    }
  },
  {
    dayNumber: 12,
    date: "2026-11-10",
    weekday: "Tuesday",
    region: "north",
    base: "Kanazawa",
    title: "Kanazawa, slowly",
    subtitle: "Market breakfast, a great garden, the geisha district",
    rideToFirst: {
      duration: "≈ 5 min walk",
      note: "The hotel is next to the market",
      dir: { from: "Hotel Forza Kanazawa", to: "Omicho Market", mode: "walking" }
    },
    activities: [
      {
        time: "08:30",
        title: "Omicho Market — seafood breakfast",
        place: "Omicho Market",
        description: "Must. Snow crab, sweet shrimp, a kaisendon bowl at a counter.",
        attractionId: "omicho-market",
        rideToNext: {
          duration: "15 min walk",
          dir: { from: "Omicho Market", to: "Kenrokuen", mode: "walking" }
        }
      },
      {
        time: "10:00",
        title: "Kenrokuen & Kanazawa Castle Park",
        place: "Kenrokuen · Kanazawa Castle Park",
        description: "Must. One of Japan's three great gardens, with the yukitsuri snow ropes going up on the pines and early autumn colour. 2 h.",
        attractionId: "kenrokuen",
        rideToNext: {
          duration: "20 min walk",
          dir: { from: "Kenrokuen", to: "Higashi Chaya District", mode: "walking" }
        }
      },
      {
        time: "13:30",
        title: "Higashi Chaya geisha district",
        place: "Higashi Chaya District · Shima teahouse",
        description: "Must. Wooden teahouses and gold-leaf shops. Matcha and a sweet inside a real teahouse.",
        attractionId: "higashi-chaya",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Bus or taxi",
          dir: { from: "Higashi Chaya District", to: "D.T. Suzuki Museum", mode: "transit" }
        }
      },
      {
        time: "16:00",
        title: "D.T. Suzuki Museum or Nagamachi samurai quarter",
        place: "D.T. Suzuki Museum · Nagamachi",
        description: "Optional. A calm Zen museum with a 'water mirror' garden, or the earthen walls of the samurai lanes.",
        optional: true
      }
    ],
    returnTo: {
      duration: "≈ 15 min walk",
      note: "Or a short taxi",
      dir: { from: "Nagamachi Samurai District", to: "Hotel Forza Kanazawa", mode: "walking" }
    },
    dayTips: ["The Kenrokuen night light-up isn't on tonight (only 7, 14, 15… Nov)"],
    photoTips: [
      "Kenrokuen: the two-legged Kotoji lantern at Kasumigaike pond — the garden's symbol; shoot from across the pond",
      "Yukitsuri: the rope cones on the big pines, best from below looking up against the sky",
      "Higashi Chaya: early morning or late afternoon, empty street, the wooden lattices in a long row"
    ],
    alternatives: [
      "21st Century Museum — the 'swimming pool' installation (timed tickets)",
      "Myoryu-ji, the 'ninja temple' — hidden stairs and trap doors (guided, book)",
      "Kanazawa Castle's Gyokusen-inmaru garden"
    ],
    culture: {
      title: "A city of gold and tea",
      body: "Kanazawa was ruled by the wealthy Maeda clan, who poured money into arts instead of war. 99% of Japan's gold leaf is still made here — you'll see it on ice cream. Tea ceremony is about presence: every movement is deliberate, and the guest turns the bowl before drinking so the most beautiful side faces the host."
    }
  },
  {
    dayNumber: 13,
    date: "2026-11-11",
    weekday: "Wednesday",
    region: "south",
    base: "Kyoto",
    title: "Kanazawa → Kyoto",
    subtitle: "By train, then a first evening in Gion",
    rideToFirst: {
      duration: "≈ 10 min",
      note: "Bus or taxi to Kanazawa Station",
      dir: { from: "Hotel Forza Kanazawa", to: "Kanazawa Station", mode: "transit" }
    },
    activities: [
      {
        time: "10:00",
        title: "Train Kanazawa → Kyoto",
        place: "Kanazawa → Tsuruga → Kyoto",
        description: "Hokuriku Shinkansen to Tsuruga, change to the Thunderbird to Kyoto. ≈ 2 h 15. Reserve seats.",
        rideToNext: {
          duration: "≈ 2 h 15",
          note: "One change at Tsuruga (same building, ~10 min)",
          dir: { from: "Kanazawa Station", to: "Kyoto Station", mode: "transit" }
        }
      },
      {
        time: "12:30",
        title: "Drop bags — Onyado Nono Kyoto Shichijo (4 nights)",
        place: "Onyado Nono Kyoto Shichijo",
        description: "7 min walk from Kyoto Station. Tatami floors, hot-spring baths, free late-night ramen.",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Walk to Kyoto Station, subway Karasuma line → Shijo, 5 min walk",
          dir: { from: "Onyado Nono Kyoto Shichijo", to: "Nishiki Market", mode: "transit" }
        }
      },
      {
        time: "14:30",
        title: "Nishiki Market & Teramachi",
        place: "Nishiki Market · Teramachi arcade",
        description: "Kyoto's 400-year-old food street: pickles, tofu, knives. Some stalls close on Wednesdays.",
        attractionId: "nishiki-market",
        rideToNext: {
          duration: "15 min walk",
          note: "Across the Kamo river",
          dir: { from: "Nishiki Market", to: "Shirakawa Minami-dori, Gion", mode: "walking" }
        }
      },
      {
        time: "17:00",
        title: "Gion Shirakawa at dusk & Pontocho for dinner",
        place: "Gion Shirakawa · Tatsumi Bridge · Pontocho",
        description: "Must. The canal lane of willows and teahouses as the lanterns come on, then dinner in the narrow Pontocho alley above the river.",
        attractionId: "gion-district"
      }
    ],
    returnTo: {
      duration: "≈ 15 min",
      note: "Taxi (≈ ¥1,200), or Keihan Gion-Shijo → Shichijo + 8 min walk",
      dir: { from: "Pontocho", to: "Onyado Nono Kyoto Shichijo", mode: "walking" }
    },
    photoTips: [
      "Tatsumi Bridge in Gion Shirakawa: the stone bridge, willows and lit teahouses at blue hour — no flash, steady on the railing",
      "Pontocho: the long narrow lane of hanging lanterns, shot straight down its length"
    ],
    alternatives: [
      "DRUM TAO taiko show at Kyoto Station — daily 19:00 & 21:00, ~50 min, from ¥10,000",
      "Gion Corner — a short sampler of tea ceremony, koto and maiko dance (18:00/19:00)"
    ],
    culture: {
      title: "Geiko and maiko",
      body: "Kyoto's geisha are called geiko; apprentices are maiko, with long sleeves and elaborate hair. They are artists — dance, music, conversation — not performers for photos. In Gion, walking past one is a moment to enjoy, not to chase: the district has banned photography in its private lanes."
    }
  },
  {
    dayNumber: 14,
    date: "2026-11-12",
    weekday: "Thursday",
    region: "south",
    base: "Kyoto",
    title: "Fushimi Inari, Tofuku-ji & Higashiyama",
    subtitle: "Torii at dawn, a temple of maples, the old lanes, Kodai-ji by night",
    rideToFirst: {
      duration: "≈ 15 min",
      note: "7 min walk to Kyoto Station, JR Nara line → Inari (5 min). Taxi ≈ 10 min.",
      dir: { from: "Onyado Nono Kyoto Shichijo", to: "Fushimi Inari Taisha", mode: "transit" }
    },
    activities: [
      {
        time: "07:00",
        title: "Fushimi Inari — early, and higher",
        place: "Fushimi Inari Taisha · Yotsutsuji viewpoint",
        description: "Must. The torii tunnels empty before 8. Walk up to the Yotsutsuji crossroads (~45 min) — the crowds thin after the first gates. 2 h.",
        attractionId: "fushimi-inari",
        rideToNext: {
          duration: "20 min walk",
          note: "Or Keihan 1 stop to Tofukuji",
          dir: { from: "Fushimi Inari Taisha", to: "Tofuku-ji", mode: "walking" }
        }
      },
      {
        time: "09:30",
        title: "Tofuku-ji — the Tsutenkyo bridge",
        place: "Tofuku-ji · Tsutenkyo Bridge",
        description: "Must in autumn. A wooden bridge over a valley of 2,000 maples (turning mid–late Nov), and a modern Zen rock garden. 1 h.",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Taxi (≈ ¥1,500), or Keihan to Kiyomizu-Gojo + 15 min walk",
          dir: { from: "Tofuku-ji", to: "Hokan-ji (Yasaka Pagoda)", mode: "driving" }
        }
      },
      {
        time: "11:30",
        title: "Higashiyama's old lanes & lunch",
        place: "Yasaka Pagoda · Ninenzaka · Ishibe-koji",
        description: "Must. Stone lanes below the five-storey pagoda. Take the quiet Ishibe-koji alley; lunch in a machiya. Kiyomizu-dera is optional — beautiful, but packed midday.",
        rideToNext: {
          duration: "10 min walk",
          dir: { from: "Ishibe-koji", to: "Kodai-ji", mode: "walking" }
        }
      },
      {
        time: "14:00",
        title: "Rest — café or back to the hotel",
        description: "A slow afternoon before the evening. Maruyama Park and Chion-in's giant gate are next door."
      },
      {
        time: "17:00",
        title: "Kodai-ji night illumination & bamboo grove",
        place: "Kodai-ji",
        description: "Must. Lit gardens, a mirror-pond and the bamboo path. ¥800, last entry 21:30. Dinner in Gion after.",
        attractionId: "kodai-ji"
      }
    ],
    returnTo: {
      duration: "≈ 15 min",
      note: "Taxi (≈ ¥1,500), or walk to Gion-Shijo and Keihan to Shichijo",
      dir: { from: "Kodai-ji", to: "Onyado Nono Kyoto Shichijo", mode: "walking" }
    },
    photoTips: [
      "Fushimi Inari: at the Yotsutsuji viewpoint, Kyoto below at morning; in the tunnels, shoot uphill so the gates' black inscriptions don't show",
      "Tofuku-ji: the classic view is FROM Tsutenkyo onto the maple valley; the view OF the bridge is from the Gaunkyo bridge downstream",
      "Yasaka Pagoda: from the top of Yasaka-dori looking down the lane — go by 11 before it fills",
      "Kodai-ji at night: the reflection pond — tripods aren't allowed, so lean on a post and use night mode"
    ],
    alternatives: [
      "Kiyomizu-dera — the wooden stage over the maples (crowded midday; better around 16:00)",
      "Gekkeikan Okura Sake Museum in Fushimi — 15 min south of Fushimi Inari, ¥600",
      "Chion-in and Shoren-in — huge gate, quiet garden (Shoren-in has its own autumn light-up)"
    ],
    culture: {
      title: "Shinto and Buddhism, side by side",
      body: "Fushimi Inari is a Shinto shrine — torii gates, foxes as messengers of Inari, god of rice and business; each gate is a gift from a company. Tofuku-ji and Kodai-ji are Buddhist Zen temples — gardens of rock and moss for contemplation. Most Japanese visit both: 'born Shinto, die Buddhist', as the saying goes."
    }
  },
  {
    dayNumber: 15,
    date: "2026-11-13",
    weekday: "Friday",
    region: "south",
    base: "Kyoto",
    title: "Kurama → Kibune hike",
    subtitle: "Mountain temple, cedar roots, a village on the river",
    rideToFirst: {
      duration: "≈ 25 min",
      note: "8 min walk to Keihan Shichijo, Keihan line → Demachiyanagi (end of line)",
      dir: { from: "Onyado Nono Kyoto Shichijo", to: "Demachiyanagi Station", mode: "transit" }
    },
    activities: [
      {
        time: "09:30",
        title: "Eizan train to Kurama",
        place: "Demachiyanagi → Kurama (Eizan Railway)",
        description: "≈ 30 min. Sit on the right going up for the forest views. The tengu statue greets you at Kurama.",
        rideToNext: {
          duration: "≈ 30 min",
          dir: { from: "Demachiyanagi Station", to: "Kurama Station", mode: "transit" }
        }
      },
      {
        time: "10:15",
        title: "Kurama-dera → the root path → down to Kibune",
        place: "Kurama-dera · Kinone-michi · Okuno-in Maoden",
        description: "Must. ≈ 4 km, 2–3 h with stops. Past the 800-year cedar, up to the temple's mountain terrace, over the ridge on exposed cedar roots, then stone steps down to Kibune. Entry ¥500, cash.",
        attractionId: "kurama-kibune",
        rideToNext: { duration: "—", note: "The trail ends at the Kibune river" }
      },
      {
        time: "13:00",
        title: "Lunch in Kibune & Kifune Shrine",
        place: "Kibune · Kifune Shrine",
        description: "Must. Lunch by the river, then the stone stairway lined with red lanterns. Maples at their best around now.",
        rideToNext: {
          duration: "20 min walk + 30 min train",
          note: "Walk (or bus) to Kibuneguchi station, Eizan train back to Demachiyanagi",
          dir: { from: "Kifune Shrine", to: "Demachiyanagi Station", mode: "transit" }
        }
      },
      {
        time: "16:00",
        title: "Shimogamo Shrine & the Tadasu-no-Mori forest",
        place: "Shimogamo Shrine · Tadasu no Mori",
        description: "Optional. An ancient forest path to one of Kyoto's oldest shrines, 10 min from Demachiyanagi. Quiet at dusk.",
        optional: true
      }
    ],
    returnTo: {
      duration: "≈ 25 min",
      note: "Keihan line Demachiyanagi → Shichijo, 8 min walk",
      dir: { from: "Demachiyanagi Station", to: "Onyado Nono Kyoto Shichijo", mode: "transit" }
    },
    dayTips: [
      "Kurama-dera's small cable car was out of service in September — plan to walk up (it's gentle)",
      "Shoes with grip; roots and steps are slippery after rain",
      "If it rains hard: swap for Ohara (Sanzen-in, Hosen-in) — gardens, less mud"
    ],
    photoTips: [
      "Kinone-michi: the roots look best in flat, cloudy light — shoot low, close to the ground",
      "Kifune Shrine: the red lantern stairway, from the bottom step looking up; if the lanterns are lit at dusk, even better",
      "On the Eizan train, the 'maple tunnel' between Ichihara and Ninose — the train slows down for it"
    ],
    alternatives: [
      "Stay in Kibune until dusk if the lanterns are lit (usually from early November)",
      "Kurama Onsen — an outdoor bath near the station, before the hike",
      "Rainy-day swap: Uji — Byodo-in temple (the one on the ¥10 coin), old teahouses on the river, real matcha. JR from Kyoto Station, ~20 min"
    ],
    culture: {
      title: "Tengu and the mountain monks",
      body: "Kurama is the legendary home of Sojobo, king of the tengu — long-nosed mountain spirits who taught swordsmanship to the young samurai Minamoto no Yoshitsune. Kibune's shrine is dedicated to the god of water; for centuries people came here to pray for rain — or for it to stop."
    }
  },
  {
    dayNumber: 16,
    date: "2026-11-14",
    weekday: "Saturday",
    region: "south",
    base: "Kyoto",
    title: "Arashiyama & Nijo Castle at night",
    subtitle: "Bamboo at dawn, the quiet temples of Saga, a castle in light",
    rideToFirst: {
      duration: "≈ 30 min",
      note: "7 min walk to Kyoto Station, JR Sagano line → Saga-Arashiyama (15 min), 10 min walk",
      dir: { from: "Onyado Nono Kyoto Shichijo", to: "Arashiyama Bamboo Grove", mode: "transit" }
    },
    activities: [
      {
        time: "07:30",
        title: "Arashiyama bamboo grove",
        place: "Arashiyama Bamboo Grove (Sagano)",
        description: "Must — before 8:30 it's almost empty. Walk it slowly, up to Okochi Sanso.",
        attractionId: "arashiyama-bamboo",
        rideToNext: {
          duration: "5 min walk",
          dir: { from: "Arashiyama Bamboo Grove", to: "Okochi Sanso Villa", mode: "walking" }
        }
      },
      {
        time: "09:00",
        title: "Okochi Sanso garden",
        place: "Okochi Sanso",
        description: "Must. A film star's hillside garden with views over Kyoto; matcha and a sweet included. 1 h.",
        rideToNext: {
          duration: "15 min walk",
          note: "North through the Saga lanes",
          dir: { from: "Okochi Sanso Villa", to: "Jojakko-ji", mode: "walking" }
        }
      },
      {
        time: "10:30",
        title: "Jojakko-ji & Gio-ji — the quiet temples of Saga",
        place: "Jojakko-ji · Gio-ji",
        description: "Must for autumn. Hillside temples carpeted in moss and maples, far from the crowds. Then lunch: yudofu (tofu hotpot), the Arashiyama dish.",
        rideToNext: {
          duration: "20 min walk",
          dir: { from: "Gio-ji", to: "Togetsukyo Bridge", mode: "walking" }
        }
      },
      {
        time: "13:30",
        title: "Tenryu-ji garden & Togetsukyo bridge",
        place: "Tenryu-ji · Togetsukyo",
        description: "Optional. Zen garden against the hills, then the bridge. Back to the hotel to rest.",
        optional: true,
        rideToNext: {
          duration: "≈ 30 min",
          dir: { from: "Togetsukyo Bridge", to: "Onyado Nono Kyoto Shichijo", mode: "transit" }
        }
      },
      {
        time: "18:00",
        title: "Nijo Castle — 'NAKED' night event",
        place: "Nijo Castle (Nijo-jo)",
        description: "Must. Light art projected on the Karamon gate and Ninomaru Palace, 18:00–22:00. ¥2,400 on Saturday — book online.",
        attractionId: "nijo-castle"
      }
    ],
    returnTo: {
      duration: "≈ 15 min",
      note: "Tozai subway Nijojo-mae → Karasuma-Oike, Karasuma line → Kyoto, 7 min walk. Taxi ≈ 15 min.",
      dir: { from: "Nijo Castle", to: "Onyado Nono Kyoto Shichijo", mode: "transit" }
    },
    photoTips: [
      "Bamboo grove: shoot straight up for the canopy, or along the path with someone walking far ahead for scale",
      "Okochi Sanso: the tea-house view toward Kyoto and Mt Hiei",
      "Gio-ji: kneel by the moss garden, sunlight filtering through maples — a macro of the moss works beautifully",
      "Nijo at night: the projections change constantly — video mode for a few seconds, then pick stills"
    ],
    alternatives: [
      "Saga-Toriimoto preserved street and Adashino Nenbutsu-ji — 8,000 stone Buddhas",
      "Hozugawa river boat from Kameoka down to Arashiyama (2 h, through the gorge)",
      "Kinkaku-ji (Golden Pavilion) — left out by choice"
    ],
    culture: {
      title: "Wabi-sabi in a moss garden",
      body: "Gio-ji's moss garden is a lesson in wabi-sabi — beauty in what's simple, imperfect and passing: a fallen maple leaf on moss, a worn stone step. It's why Japanese gardens look 'unfinished' on purpose, and why the autumn leaves matter so much: they're beautiful because they don't last."
    }
  },
  {
    dayNumber: 17,
    date: "2026-11-15",
    weekday: "Sunday",
    region: "transit",
    base: "Tokyo",
    title: "Kyoto → Tokyo",
    subtitle: "A craft market and the Philosopher's Path, then Asakusa at night",
    rideToFirst: {
      duration: "≈ 25 min",
      note: "Taxi (≈ ¥2,500), or bus 206 from Kyoto Station to Hyakumanben",
      dir: { from: "Onyado Nono Kyoto Shichijo", to: "Chion-ji Hyakumanben", mode: "driving" }
    },
    activities: [
      {
        time: "08:00",
        title: "Hyakumanben handicraft market",
        place: "Chion-ji (Hyakumanben)",
        description: "Held on the 15th of every month: ~450 stalls of pottery, textiles, wood. 1 h.",
        rideToNext: {
          duration: "20 min walk",
          dir: { from: "Chion-ji Hyakumanben", to: "Ginkaku-ji", mode: "walking" }
        }
      },
      {
        time: "09:15",
        title: "Ginkaku-ji & the Philosopher's Path",
        place: "Ginkaku-ji (Silver Pavilion) · Philosopher's Path",
        description: "Optional but lovely. The Silver Pavilion's sand garden, then the canal path south under the maples (2 km).",
        optional: true,
        attractionId: "ginkaku-ji",
        rideToNext: {
          duration: "≈ 30 min walk",
          dir: { from: "Ginkaku-ji", to: "Nanzen-ji", mode: "walking" }
        }
      },
      {
        time: "11:00",
        title: "Nanzen-ji & the aqueduct",
        place: "Nanzen-ji · Suirokaku",
        description: "Optional. The brick aqueduct running through a Zen temple. Then back to the hotel for bags.",
        optional: true,
        rideToNext: {
          duration: "≈ 15 min",
          note: "Taxi to the hotel for the bags (≈ 20 min), then 7 min walk to Kyoto Station",
          dir: { from: "Nanzen-ji", to: "Kyoto Station", mode: "driving" }
        }
      },
      {
        time: "13:30",
        title: "Shinkansen Kyoto → Tokyo",
        place: "Kyoto Station → Tokyo Station",
        description: "Hikari (covered by a JR Pass; Nozomi isn't). Reserve seats with luggage space. Ekiben for lunch.",
        rideToNext: {
          duration: "≈ 2 h 40",
          dir: { from: "Kyoto Station", to: "Tokyo Station", mode: "transit" }
        }
      },
      {
        time: "18:00",
        title: "Asakusa at night — Senso-ji lit up",
        place: "Senso-ji · Nakamise · Sumida River",
        description: "Must. After dark the day-trippers are gone: the lit pagoda and gate, a walk by the river, tempura for dinner.",
        attractionId: "senso-ji"
      }
    ],
    returnTo: {
      duration: "≈ 20 min",
      note: "Ginza line Asakusa → Shimbashi, 3 min walk to Dai-ichi Hotel Tokyo (2 nights). Taxi ≈ 25 min.",
      dir: { from: "Senso-ji", to: "Dai-ichi Hotel Tokyo", mode: "transit" }
    },
    photoTips: [
      "Philosopher's Path: the canal with stone bridges and maples — shoot along the water",
      "Nanzen-ji aqueduct: the brick arches in a row, shot down the tunnel",
      "Senso-ji at night: the five-storey pagoda lit gold, from the side courtyard with the incense smoke in front"
    ],
    alternatives: [
      "Tokyo Skytree for the city at night — 20 min walk from Senso-ji",
      "Morning instead: Uji (instead of Hyakumanben) — Byodo-in and a matcha tasting, JR ~20 min from Kyoto Station, close to the hotel and the Shinkansen"
    ],
    culture: {
      title: "The Shinkansen and Japanese time",
      body: "The bullet train's average delay is under a minute a year. Platform lines mark exactly where each car stops, and cleaning crews turn a train around in seven minutes — then bow to the passengers. Punctuality here is a form of respect for other people's time."
    }
  },
  {
    dayNumber: 18,
    date: "2026-11-16",
    weekday: "Monday",
    region: "north",
    base: "Tokyo",
    title: "Tokyo — gardens, Kagurazaka, Nihonbashi",
    subtitle: "Or a day trip: Kamakura or Nikko",
    rideToFirst: {
      duration: "≈ 25 min",
      note: "Mita line Uchisaiwaicho → Suidobashi, 8 min walk. Taxi ≈ 20 min.",
      dir: { from: "Dai-ichi Hotel Tokyo", to: "Koishikawa Korakuen", mode: "transit" }
    },
    activities: [
      {
        time: "09:00",
        title: "Koishikawa Korakuen garden",
        place: "Koishikawa Korakuen",
        description: "Must for this day. A 17th-century Edo garden of ponds and maples (colour from mid-November). 1.5 h. (The Imperial East Gardens are closed on Mondays.)",
        rideToNext: {
          duration: "15 min walk",
          dir: { from: "Koishikawa Korakuen", to: "Kagurazaka", mode: "walking" }
        }
      },
      {
        time: "11:30",
        title: "Kagurazaka — stone alleys & lunch",
        place: "Kagurazaka · Hyogo-yokocho",
        description: "Must. The old geisha quarter: cobbled lanes, a small shrine, and a mix of French and Japanese restaurants for lunch.",
        rideToNext: {
          duration: "≈ 20 min",
          note: "Tozai line Kagurazaka → Nihombashi",
          dir: { from: "Kagurazaka Station", to: "Nihonbashi Mitsukoshi", mode: "transit" }
        }
      },
      {
        time: "14:30",
        title: "Nihonbashi & Ginza — depachika and craft shops",
        place: "Nihonbashi Mitsukoshi · Ginza Itoya · Ginza Six rooftop",
        description: "The basement food halls (depachika), Itoya's stationery floors, the Ginza Six rooftop garden at dusk.",
        rideToNext: {
          duration: "≈ 10 min walk",
          note: "Ginza → Shimbashi, back to Dai-ichi Hotel Tokyo",
          dir: { from: "Ginza Six", to: "Dai-ichi Hotel Tokyo", mode: "walking" }
        }
      },
      {
        time: "Option",
        title: "Instead: Kamakura day trip",
        place: "Kamakura",
        description: "Great Buddha, Hasedera, the Daibutsu hiking trail (2.5 km). JR Yokosuka line from Tokyo Station, ~1 h, no change. See Notes.",
        optional: true,
        rideToNext: {
          duration: "≈ 1 h",
          dir: { from: "Tokyo Station", to: "Kamakura Station", mode: "transit" }
        }
      },
      {
        time: "Option",
        title: "Instead: Nikko day trip",
        place: "Nikko",
        description: "Shinkyo bridge, Toshogu, the Kanmangafuchi jizo path. Tobu from Asakusa, ~2 h each way. See Notes.",
        optional: true,
        attractionId: "nikko-toshogu"
      }
    ],
    photoTips: [
      "Koishikawa Korakuen: the full-moon bridge (Engetsukyo) — its reflection completes the circle on still water",
      "Kagurazaka: the narrow stone lanes at Hyogo-yokocho, low angle along the cobbles",
      "Ginza at dusk: from the Ginza Six rooftop as the lights come on"
    ],
    alternatives: [
      "Sumo show-dinner in Asakusa — former wrestlers, a demonstration and chanko hotpot (book)",
      "Kiyosumi Shirakawa — a stroll garden and Tokyo's best coffee roasters",
      "Golden Gai, Shinjuku — tiny bars of six seats each",
      "Rainy-day option: teamLab Planets (Toyosu) or Borderless (Azabudai Hills) — walk-through digital art, ~2 h. Book timed tickets ahead"
    ],
    culture: {
      title: "Depachika — the art of the gift",
      body: "Gift-giving (omiyage) is a ritual in Japan: after a trip you bring back local sweets for colleagues and family, beautifully wrapped. Department-store food halls exist largely for this — perfect fruit in boxes, seasonal wagashi shaped like maple leaves. The wrapping matters as much as what's inside."
    }
  },
  {
    dayNumber: 19,
    date: "2026-11-17",
    weekday: "Tuesday",
    region: "transit",
    base: "Tokyo",
    title: "Last day / flight home",
    subtitle: "Return flight to Dubai — date and time not set yet",
    activities: [
      {
        time: "TBD",
        title: "Flight home via Dubai",
        description: "The return date (17 or 18.11) is still open. Once set: airport, terminal and how to get there will go here."
      },
      {
        time: "If time",
        title: "A last morning in Tokyo",
        description: "Hama-rikyu garden by the bay (near Ginza) with tea in the pond house, or last omiyage shopping.",
        optional: true
      }
    ],
    culture: {
      title: "Otsukaresama deshita",
      body: "Japanese has a phrase for the end of a long effort: otsukaresama deshita — 'you've worked hard'. Colleagues say it at the end of the day, friends after a trip. To the four of us: otsukaresama."
    }
  }
];
