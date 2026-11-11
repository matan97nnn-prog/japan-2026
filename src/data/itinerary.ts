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
    dayTips: ["Emirates online check-in opens 48 h before, tonight is a good time"]
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
        description: "Sleep as much as you can, we land at 17:20 Tokyo time."
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
        title: "Check in: Hotel Keihan Tsukiji Ginza Grande",
        place: "Hotel Keihan Tsukiji Ginza Grande",
        description: "Booking 1788608896, three nights. A bowl of ramen nearby, then sleep."
      }
    ],
    dayTips: ["No plans tonight, jet lag is the only agenda"],
    culture: {
      title: "First evening: the quiet rules",
      body: "Tokyo is a city of 14 million that feels calm. People queue in lines painted on the platform, talk quietly on trains, and carry their rubbish home because public bins are rare. Nobody expects visitors to be perfect, a small bow and 'arigatō' go a long way."
    }
  },
  {
    dayNumber: 4,
    date: "2026-11-02",
    weekday: "Monday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Old Tokyo: Tsukiji, Nezu & Yanaka",
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
          note: "Hibiya line Tsukiji → Hibiya, Chiyoda line → Nezu. Taxi ≈ 20 min, ¥2,500.",
          dir: { from: "Tsukiji Outer Market", to: "Nezu Shrine", mode: "transit" }
        }
      },
      {
        time: "09:30",
        title: "Nezu Shrine",
        place: "Nezu Shrine (Nezu Jinja)",
        description: "Must. A 1,900-year-old shrine with its own tunnel of red torii, like a small Fushimi Inari, without the crowds.",
        rideToNext: {
          duration: "15 min walk",
          dir: { from: "Nezu Shrine", to: "Yanaka Cemetery", mode: "walking" }
        }
      },
      {
        time: "10:30",
        title: "Yanaka: the old downtown on foot",
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
        title: "Ueno Park",
        place: "Ueno Park · Tokyo National Museum",
        description: "Optional. A stroll past the ponds and temples. The National Museum is closed on Mondays.",
        optional: true,
        attractionId: "ueno-park",
        rideToNext: {
          duration: "20 min",
          note: "Hibiya line Ueno → Tsukiji, no change, 2 min walk. Rest at the hotel before the evening.",
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
      "Tsukiji: the knife shops and tuna counters are great close-ups, ask with a smile and a gesture before photographing a vendor",
      "Nezu: stand low inside the torii tunnel and shoot along it, so the gates stack into a red corridor",
      "Yanaka Cemetery: the main avenue, shot down its length, trees framing the old stone lanterns",
      "Yuyake Dandan steps above Yanaka Ginza: the classic view down the street"
    ],
    alternatives: [
      "Sumo Museum at Ryogoku Kokugikan, free, weekdays 10:00–16:30 (the November tournament itself is in Fukuoka)",
      "Kappabashi kitchenware street, knives, ceramics, the plastic food models",
      "Asakusa and Senso-ji are saved for the evening of 15.11, when they're lit and calm",
      "Before the tour: the Tokyo Metropolitan Government Building, a free 45th-floor observatory, and after dark a projection-mapping show on its facade (around 19:00–21:00). 15 min walk to the meeting point"
    ],
    culture: {
      title: "Shitamachi: the old downtown",
      body: "Yanaka is what Tokyo looked like before the towers: wooden houses, tiny family shops, and temples on every corner. It survived the 1923 earthquake and the 1945 bombing, so the old 'shitamachi' life of craftsmen and merchants still goes on here. At a shrine, bow once at the torii and rinse your hands at the water basin, locals will notice and appreciate it."
    }
  },
  {
    dayNumber: 5,
    date: "2026-11-03",
    weekday: "Tuesday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Culture Day: Meiji Jingu, Omotesando, Nakameguro",
    subtitle: "Forest shrine, horseback archery, the quiet side of west Tokyo",
    rideToFirst: {
      duration: "≈ 30 min",
      note: "Hibiya line → Kasumigaseki, Chiyoda line → Meiji-jingumae. Taxi ≈ 25 min.",
      dir: { from: "Hotel Keihan Tsukiji Ginza Grande", to: "Meiji Jingu", mode: "transit" }
    },
    activities: [
      {
        time: "08:30",
        title: "Meiji Jingu: the forest walk",
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
        title: "Yabusame: horseback archery at Meiji Jingu",
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
      "Culture Day is a national holiday, shrines and Shibuya are busy, so the morning is the quiet window",
      "Tsukiji market is likely closed today: breakfast at the hotel or a café",
      "Yabusame start time to be confirmed on meijijingu.or.jp"
    ],
    photoTips: [
      "Meiji Jingu: the wall of sake barrels on the main path, shot at an angle so the rows repeat",
      "Yabusame: fast shutter (1/1000), pre-focus on the track just before the target, burst mode as the horse passes",
      "Omotesando: the Prada building's glass diamonds and the Dior façade, reflections work best in soft afternoon light",
      "Shibuya: the crossing from above at blue hour (≈ 17:00), slow shutter from the Shibuya Sky rail turns the crowd into streams"
    ],
    alternatives: [
      "Yoyogi Park next to Meiji Jingu, on a holiday it's full of musicians and picnics",
      "Nezu Museum, Omotesando, Asian art and a beautiful hillside garden with maples",
      "Shimokitazawa, vintage shops and coffee, 5 min from Shibuya"
    ],
    culture: {
      title: "Culture Day & the Emperor who opened Japan",
      body: "3 November was Emperor Meiji's birthday. He ruled from 1867 as Japan opened to the world after 250 years of isolation, railways, a constitution, Western dress. Today it's Bunka no Hi, Culture Day, when the government honours artists and scientists, and Meiji Jingu closes its autumn festival with yabusame, a samurai-era ritual of archery on horseback."
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
        title: "Collect the car: Toyota Rent a Car",
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
      note: "To Hakone Yutowa in Gora, onsen, dinner, early night",
      dir: { from: "Hakone Shrine", to: "Hakone Yutowa", mode: "driving" }
    },
    dayTips: [
      "Drive on the left, take it slow out of the rental lot",
      "Don't try the whole Hakone loop on car day",
      "Open-Air Museum: there's a hot-spring foot bath with a view, bring a small towel",
      "Owakudani: try the black ice cream too, not just the black eggs",
      "With the car, the Hakone Free Pass is often not worth it: compare it at the counter with single ropeway and pirate-ship tickets"
    ],
    photoTips: [
      "Open-Air Museum: climb the Symphonic Sculpture tower and shoot straight up at the stained glass",
      "Hakone Shrine torii: the queue for the front shot is long, the side of the lakeshore path gives the same gate with fewer people",
      "Owakudani: on a clear day, Fuji sits behind the steam, a longer lens compresses the two together"
    ],
    alternatives: [
      "Tenzan Tohji-kyo onsen in Yumoto, a forest bathhouse, private baths available",
      "Hakone Museum of Art in Gora, a moss garden with maples, next to the hotel",
      "Hakone Checkpoint (Sekisho), the rebuilt Edo-era border gate on the old Tokaido road, 10 min from Hakone Shrine"
    ],
    culture: {
      title: "Onsen: how to bathe like a local",
      body: "Hot springs are part of Japanese life, a place to slow down, not to swim. Wash and rinse fully at the stools before entering, no swimsuits, keep the small towel out of the water (on your head is classic), and keep voices low. Many ryokan serve dinner in yukata robes; it's fine to wear one to dinner."
    }
  },
  {
    dayNumber: 7,
    date: "2026-11-05",
    weekday: "Thursday",
    region: "north",
    base: "Kawaguchiko",
    title: "Hakone in the morning, Fuji Five Lakes after lunch",
    subtitle: "Catching up on rained-out Hakone, then spring ponds and a sake brewery",
    rideToFirst: {
      duration: "≈ 5 min",
      note: "Check out by 08:45 with the bags in the car (check-out is 10:00), the museum has its own car park",
      dir: { from: "Hakone Yutowa", to: "Hakone Open-Air Museum", mode: "driving" }
    },
    activities: [
      {
        time: "09:00",
        title: "Hakone Open-Air Museum",
        place: "Hakone Open-Air Museum (Chōkoku-no-Mori)",
        description: "Must, the one we missed in yesterday's rain. Sculpture on mountain lawns, the stained-glass tower (shoot straight up from inside), the Picasso pavilion and a hot-spring footbath (bring a small towel). If it's still drizzling, start indoors at the Picasso pavilion. 1.5 h.",
        attractionId: "hakone-open-air-museum",
        rideToNext: {
          duration: "≈ 20 min",
          dir: { from: "Hakone Open-Air Museum", to: "Owakudani", mode: "driving" }
        }
      },
      {
        time: "10:45",
        title: "Owakudani",
        place: "Owakudani",
        description: "Steam vents, black eggs (each adds seven years, they say) and black ice cream. After heavy rain or on high-gas days the road and car park can close: check in the morning, and if it's shut go straight on to the lake. No Fuji view today, that's for Friday. 45 min.",
        optional: true,
        attractionId: "hakone-owakudani",
        rideToNext: {
          duration: "≈ 25 min",
          dir: { from: "Owakudani", to: "Hakone Shrine", mode: "driving" }
        }
      },
      {
        time: "12:00",
        title: "Lake Ashi & Hakone Shrine, lunch",
        place: "Hakone Shrine · Lake Ashi",
        description: "The cedar-lined steps and the red torii standing in the lake, even better in mist. The photo queue at the torii is long: shoot it from the side, from the lakeside path. Lunch in Moto-Hakone by the shrine.",
        attractionId: "hakone-lake-ashi",
        rideToNext: {
          duration: "≈ 1 h",
          note: "Over the hills via Lake Yamanaka",
          dir: { from: "Hakone Shrine", to: "Oshino Hakkai", mode: "driving" }
        }
      },
      {
        time: "14:15",
        title: "Oshino Hakkai",
        place: "Oshino Hakkai",
        description: "On the way. Eight spring ponds fed by Fuji snowmelt, in a thatched village; the water is glass-clear even under cloud. 40 min.",
        optional: true,
        attractionId: "oshino-hakkai",
        rideToNext: {
          duration: "≈ 20 min",
          dir: { from: "Oshino Hakkai", to: "Ide Sake Brewery Kawaguchiko", mode: "driving" }
        }
      },
      {
        time: "15:00",
        title: "Ide Sake Brewery: tour & tasting",
        place: "Ide Sake Brewery (Ide Shuzo), Kawaguchiko",
        description: "A 20-generation family brewery using Fuji water. The tour needs booking by 16:00 the day before; without one, the shop still does tastings. Buy a bottle for tomorrow's birthday. If your tour is at another time, swap it with Oshino Hakkai."
      }
    ],
    returnTo: {
      duration: "≈ 10 min",
      note: "Kawaguchiko Urban Resort Villa, one night. Quiet evening, early night: tomorrow's alarm is 05:30 for the birthday sunrise",
      dir: { from: "Ide Sake Brewery Kawaguchiko", to: "Kawaguchiko Urban Resort Villa", mode: "driving" }
    },
    dayTips: [
      "Today Fuji stays in low cloud at the lakes, so Chureito Pagoda moves to tomorrow morning, which looks completely clear",
      "Too tired: drop Owakudani first, then Oshino Hakkai",
      "Kawaguchiko's autumn leaves festival opens on 7.11, after we leave"
    ],
    photoTips: [
      "Chureito: the classic frame is from the upper deck behind the pagoda; a 24–35 mm fits pagoda + Fuji",
      "Oshino Hakkai: early or late, the pond water is glass-clear, a polariser (or sunglasses over the phone lens) cuts reflections",
      "Lake Kawaguchi: Fuji reflected in the water at dawn or dusk, from the north shore near the Kawaguchiko Music Forest"
    ],
    alternatives: [
      "Fuji Yurari onsen, outdoor baths facing Fuji",
      "Kachi Kachi Ropeway, 3 min up for a Fuji and lake view at sunset",
      "Gotemba Premium Outlets on the way from Hakone",
      "Aokigahara forest caves: Narusawa Ice Cave and Fugaku Wind Cave, short lava-tube walks, 20 min from Kawaguchiko"
    ],
    culture: {
      title: "Fuji: mountain and shrine",
      body: "Mount Fuji is sacred in Shinto; its summit belongs to a shrine, and climbing it was a pilgrimage for centuries. The pagoda at Chureito is a memorial to the war dead, and the springs of Oshino were purification stops for pilgrims. That's why Fuji appears everywhere, on the ¥1,000 note, in woodblock prints, on bathhouse walls."
    }
  },
  {
    dayNumber: 8,
    date: "2026-11-06",
    weekday: "Friday",
    region: "north",
    base: "Matsumoto",
    title: "Dad's 60th: Fuji at sunrise, Matsumoto at night",
    subtitle: "The quiet lakes, the black castle, a birthday kaiseki",
    rideToFirst: {
      duration: "≈ 10 min",
      note: "Leave at 05:45, sunrise ≈ 06:05",
      dir: { from: "Kawaguchiko Urban Resort Villa", to: "Oishi Park", mode: "driving" }
    },
    activities: [
      {
        time: "06:00",
        title: "Sunrise over Fuji at Oishi Park",
        place: "Oishi Park, Lake Kawaguchi",
        description: "Must, the birthday morning. Coffee, a family photo with Fuji, the first toast. Back to the villa for breakfast.",
        attractionId: "oishi-park",
        rideToNext: {
          duration: "≈ 20 min",
          note: "Breakfast at the villa first, then over to Fujiyoshida",
          dir: { from: "Oishi Park", to: "Chureito Pagoda", mode: "driving" }
        }
      },
      {
        time: "08:00",
        title: "Chureito Pagoda",
        place: "Chureito Pagoda (Arakurayama Sengen Park)",
        description: "Must, moved from yesterday's clouds to the clearest morning of the week. ≈ 400 steps up to the five-storey pagoda with Fuji behind. 1 h.",
        attractionId: "chureito-pagoda",
        rideToNext: {
          duration: "≈ 20 min",
          dir: { from: "Chureito Pagoda", to: "Itchiku Kubota Art Museum", mode: "driving" }
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
        title: "Lake Motosu: the ¥1,000-note view",
        place: "Lake Motosu · Nakanokura Pass",
        description: "The quietest of the five lakes. A 15-min walk up to the viewpoint printed on the ¥1,000 note.",
        attractionId: "fuji-five-lakes",
        rideToNext: {
          duration: "≈ 2 h 15",
          note: "Chuo Expressway; a stop at a service area for lunch",
          dir: { from: "Nakanokura Pass Observatory, Lake Motosu", to: "Matsumoto Hotel Kagetsu", mode: "driving" }
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
        title: "Birthday dinner: kaiseki",
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
      "Motosu: the ¥1,000 view, hold up a real note in front of the scene for a fun match shot",
      "Matsumoto Castle: from the red Uzumi bridge across the moat, with the keep reflected, best in late afternoon light (≈ 16:00)"
    ],
    alternatives: [
      "Nawate Street & Nakamachi, the old merchant streets near the castle, for an evening stroll",
      "A private onsen bath at the hotel, if available"
    ],
    culture: {
      title: "Kanreki: turning 60 in Japan",
      body: "In Japan, the 60th birthday is called kanreki: the traditional calendar completes its full 60-year cycle, so a person is 'reborn'. Families celebrate with a red vest or hat (red for a new beginning), a festive meal, and wishes for long life. Mazal tov, Abba, kanreki omedetō!"
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
        description: "≈ 25 min bus. Saturday is busy, aim for the early buses.",
        rideToNext: {
          duration: "≈ 25 min",
          note: "Shuttle bus",
          dir: { from: "Akandana Parking Hirayu", to: "Taisho Pond Kamikochi", mode: "transit" }
        }
      },
      {
        time: "09:30",
        title: "Kamikochi: Taisho Pond → Kappa Bridge → Myojin",
        place: "Taisho-ike · Kappa-bashi · Myojin-ike",
        description: "Must. A flat riverside trail through gold larches under snowy peaks. Get off at Taisho-ike, walk to Kappa Bridge (1 h), on to Myojin Pond (1 h) and back along the other bank. Lunch by Kappa Bridge.",
        attractionId: "kamikochi",
        rideToNext: {
          duration: "≈ 25 min",
          note: "Bus back to Hirayu (last bus ≈ 17:30)",
          dir: { from: "Kamikochi Bus Terminal", to: "Hirayu no Mori", mode: "transit" }
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
        title: "Check in: Takayama Green Hotel (2 nights, 2 rooms)",
        place: "Hida Takayama Onsen Takayama Green Hotel",
        description: "Onsen hotel by Takayama station. The suitcases from Tokyo are waiting. Hida beef for dinner."
      }
    ],
    dayTips: [
      "Mountain mornings are near freezing, layers, hat, good shoes",
      "Check the Kamikochi bus timetable the night before (alpico.co.jp)"
    ],
    photoTips: [
      "Taisho Pond: the dead trees standing in the water, with morning mist and Mt Yake behind",
      "Kappa Bridge: walk 100 m upstream and shoot back, the bridge, the river and the Hotaka peaks in one frame",
      "Myojin Pond: still water, so reflections, lower the camera close to the surface"
    ],
    alternatives: [
      "Shinhotaka Ropeway night service, stargazing above the Alps, 6–8.11 evenings, 18:00–20:20 (between Hirayu and Takayama)",
      "Shinhotaka Ropeway by day instead of Kamikochi, if the weather is poor in the valley"
    ],
    culture: {
      title: "Mountains as gods",
      body: "In Japan, mountains are traditionally homes of the kami (spirits). The small Hotaka Shrine at Myojin Pond honours the god of the peaks above it. Kamikochi itself means 'where the gods descended'. The valley is closed to private cars to keep it that way, one of the strictest nature protections in the country."
    }
  },
  {
    dayNumber: 10,
    date: "2026-11-08",
    weekday: "Sunday",
    region: "north",
    base: "Takayama",
    title: "Takayama",
    subtitle: "Morning markets, the old town, sake: no car today",
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
        title: "Sanmachi Suji: the old town & sake breweries",
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
        description: "The only surviving Edo-era government office in Japan, tatami halls, a rice storehouse, a garden. 1 h.",
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
      "Sanmachi: arrive before 9 for empty streets, shoot low along the dark wooden façades and their water channels",
      "The red Nakabashi bridge from the riverbank below, with maples overhanging",
      "Hida no Sato: the farmhouses reflected in the central pond"
    ],
    alternatives: [
      "Hie Shrine maple festival, early–mid November (dates unconfirmed), 15 min walk from the old town",
      "Takayama Festival Floats Exhibition Hall, the giant festival floats up close",
      "Matsuri no Mori, an underground hall of festival floats with giant taiko drums"
    ],
    culture: {
      title: "The carpenters of Hida",
      body: "For over 1,000 years the mountain region of Hida sent its master carpenters to build the temples of Nara and Kyoto, instead of paying taxes in rice. That craftsmanship is in every beam of Takayama's old town. And the green cedar ball (sugidama) over a brewery door turns brown as the new sake matures, a sign everyone here can read."
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
        description: "Optional. Kanazawa's oldest brewery (1625). 90-min tour, ¥3,300, runs Mon/Fri/Sat in winter, so today fits. Book ahead.",
        optional: true,
        rideToNext: {
          duration: "≈ 15 min",
          note: "Refuel near the station first",
          dir: { from: "Fukumitsuya Sake Brewery Kanazawa", to: "Toyota Rent a Car Kanazawa Station East Exit", mode: "driving" }
        }
      },
      {
        time: "By 20:00",
        title: "Return the car: Kanazawa Station East Exit",
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
    dayTips: ["A long day, if the road is slow, skip the brewery and protect the 20:00 car return"],
    photoTips: [
      "Shiroyama viewpoint: the whole village with the river and mountains, come before 11 when tour buses peak",
      "The Deai-bashi suspension bridge at the entrance: shoot back toward the village",
      "Inside the farmhouses: the giant smoke-darkened roof beams, lit by the windows"
    ],
    alternatives: ["Gokayama (Ainokura), a smaller, quieter thatched village, 30 min further, if we have time"],
    culture: {
      title: "Yui: rebuilding a roof together",
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
        title: "Omicho Market: seafood breakfast",
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
      "Kenrokuen: the two-legged Kotoji lantern at Kasumigaike pond, the garden's symbol; shoot from across the pond",
      "Yukitsuri: the rope cones on the big pines, best from below looking up against the sky",
      "Higashi Chaya: early morning or late afternoon, empty street, the wooden lattices in a long row"
    ],
    alternatives: [
      "21st Century Museum, the 'swimming pool' installation (timed tickets)",
      "Myoryu-ji, the 'ninja temple', hidden stairs and trap doors (guided, book)",
      "Kanazawa Castle's Gyokusen-inmaru garden"
    ],
    culture: {
      title: "A city of gold and tea",
      body: "Kanazawa was ruled by the wealthy Maeda clan, who poured money into arts instead of war. 99% of Japan's gold leaf is still made here, you'll see it on ice cream. Tea ceremony is about presence: every movement is deliberate, and the guest turns the bowl before drinking so the most beautiful side faces the host."
    }
  },
  {
    dayNumber: 13,
    date: "2026-11-11",
    weekday: "Wednesday",
    region: "south",
    base: "Kyoto",
    title: "Kyoto: first evening",
    subtitle: "Settle in, then Gion's lanterns and dinner in Pontocho",
    rideToFirst: {
      duration: "≈ 15 min",
      note: "Keihan Shichijo → Gion-Shijo (2 stops), then 5 min walk",
      dir: {
        from: "Onyado Nono Kyoto Shichijo",
        to: "Shirakawa Minami-dori, Gion",
        mode: "transit"
      }
    },
    activities: [
      {
        time: "18:00",
        title: "Gion Shirakawa by lantern light & dinner in Pontocho",
        place: "Gion Shirakawa · Tatsumi Bridge · Pontocho",
        description: "The canal lane of willows and teahouses once the lanterns are on, then dinner in Pontocho's narrow alley above the river. No temples, just the old city at night.",
        attractionId: "gion-district"
      }
    ],
    returnTo: {
      duration: "≈ 15 min",
      note: "Taxi (≈ ¥1,200), or Keihan Gion-Shijo → Shichijo + 7 min walk",
      dir: {
        from: "Pontocho",
        to: "Onyado Nono Kyoto Shichijo",
        mode: "walking"
      }
    },
    dayTips: [
      "Tired after the train? Stay close: the Kyoto Station rooftop (free) and Kyoto Ramen Koji on the 10th floor, 7 min from the hotel"
    ],
    photoTips: [
      "Tatsumi Bridge in Gion Shirakawa: the stone bridge, willows and lit teahouses, no flash, steady on the railing",
      "Pontocho: the narrow lane of hanging lanterns, shot straight down its length"
    ],
    alternatives: [
      "Gion Corner, a short sampler of tea ceremony, koto and maiko dance (18:00/19:00)",
      "DRUM TAO taiko show at Kyoto Station, 19:00, ~50 min, from ¥10,000"
    ],
    culture: {
      title: "Geiko and maiko",
      body: "Kyoto's geisha are called geiko; apprentices are maiko, with long sleeves and elaborate hair. They are artists, dance, music, conversation, not performers for photos. In Gion, walking past one is a moment to enjoy, not to chase: the district has banned photography in its private lanes."
    }
  },
  {
    dayNumber: 14,
    date: "2026-11-12",
    weekday: "Thursday",
    region: "south",
    base: "Kyoto",
    title: "Arashiyama by train and river",
    subtitle: "An open-air train up the gorge, a boat ride down, monkeys and bamboo",
    departureTime: "08:30",
    rideToFirst: {
      duration: "≈ 30 min",
      note: "Walk 7 min to Kyoto Station, JR Sagano line to Saga-Arashiyama (15 min)",
      dir: {
        from: "Onyado Nono Kyoto Shichijo",
        to: "Saga-Arashiyama Station",
        mode: "transit"
      }
    },
    activities: [
      {
        time: "09:30",
        title: "Sagano Romantic Train to Kameoka",
        place: "Torokko Saga Station → Torokko Kameoka",
        description: "A slow open-sided train along the Hozu gorge, 25 min, about ¥880. Leaves roughly every hour; the 'Rich' car has no windows at all. Seats sell out in autumn, so buy them first thing at Torokko Saga station (next to JR Saga-Arashiyama).",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Bus or taxi from Torokko Kameoka to the boat dock",
          dir: {
            from: "Torokko Kameoka Station",
            to: "Hozugawa Kudari boat dock, Kameoka",
            mode: "driving"
          }
        }
      },
      {
        time: "10:30",
        title: "Hozugawa river boat back to Arashiyama",
        place: "Hozugawa Kudari (Hozu river boat ride)",
        description: "Two hours down the river in a wooden boat steered by three boatmen with poles: rapids, rocks, autumn colours on both banks, and you land right in Arashiyama. About ¥6,000 per adult, tickets at the dock. It stops in high water or heavy rain."
      },
      {
        time: "12:45",
        title: "Lunch by the Togetsukyo bridge",
        place: "Togetsukyo · Arashiyama main street",
        description: "Yudofu, soba or street snacks on the main street. Matcha soft-serve is the local dessert.",
        rideToNext: {
          duration: "5 min walk",
          note: "Across the bridge to the park entrance",
          dir: {
            from: "Togetsukyo",
            to: "Iwatayama Monkey Park",
            mode: "walking"
          }
        }
      },
      {
        time: "14:00",
        title: "Iwatayama Monkey Park",
        place: "Arashiyama Monkey Park Iwatayama",
        description: "A 20 min uphill path to a hilltop where about 100 wild macaques roam free, with all of Kyoto below. You feed them from inside a hut, they stay outside. About ¥800, closes around 16:00.",
        optional: true,
        rideToNext: {
          duration: "20 min walk",
          note: "Back over the bridge and north along the main street",
          dir: {
            from: "Iwatayama Monkey Park",
            to: "Arashiyama Bamboo Grove",
            mode: "walking"
          }
        }
      },
      {
        time: "15:30",
        title: "Bamboo grove & Okochi Sanso garden",
        place: "Arashiyama Bamboo Grove · Okochi Sanso",
        description: "The bamboo path in the late afternoon light, and at its end the garden of an old film star's villa, with matcha and a sweet included in the ticket (about ¥1,000).",
        attractionId: "arashiyama-bamboo"
      }
    ],
    returnTo: {
      duration: "≈ 30 min",
      note: "Walk 10 min to JR Saga-Arashiyama, 15 min train to Kyoto, 7 min walk",
      dir: {
        from: "Arashiyama Bamboo Grove",
        to: "Onyado Nono Kyoto Shichijo",
        mode: "transit"
      }
    },
    dayTips: [
      "The boat and the train together make a big loop: train up, boat down. If the train is sold out, go straight to the boat: JR to Kameoka, then 10 min walk to the dock",
      "Evening is free: the hotel's hot-spring bath, and dinner near Kyoto Station"
    ],
    photoTips: [
      "On the boat, sit on the side away from the sun and shoot the boatmen against the gorge",
      "Bamboo grove: shoot straight up for the canopy, or low along the path when it empties out"
    ],
    alternatives: [
      "Rainy day: Uji, matcha and old teahouses on the river, JR 20 min from Kyoto Station",
      "Instead of the monkeys: a rickshaw ride around Arashiyama, about 30 min"
    ]
  },
  {
    dayNumber: 15,
    date: "2026-11-13",
    weekday: "Friday",
    region: "south",
    base: "Kyoto",
    title: "Fushimi Inari & the deer of Nara",
    subtitle: "A forest walk through the torii gates, then bowing deer and a giant Buddha",
    departureTime: "07:00",
    rideToFirst: {
      duration: "≈ 15 min",
      note: "7 min walk to Kyoto Station, JR Nara line local → Inari (5 min)",
      dir: {
        from: "Onyado Nono Kyoto Shichijo",
        to: "Fushimi Inari Taisha",
        mode: "transit"
      }
    },
    activities: [
      {
        time: "07:30",
        title: "Fushimi Inari: the torii tunnel up the mountain",
        place: "Fushimi Inari Taisha · Yotsutsuji viewpoint",
        description: "Less a temple visit, more a forest walk: thousands of orange gates up the hillside. Early it's quiet. Go up to the Yotsutsuji viewpoint (about 45 min) and turn back there.",
        attractionId: "fushimi-inari",
        rideToNext: {
          duration: "≈ 1 h",
          note: "JR Nara line: local to Uji, then the Miyakoji Rapid to Nara",
          dir: {
            from: "Inari Station",
            to: "Nara Park",
            mode: "transit"
          }
        }
      },
      {
        time: "10:30",
        title: "Nara Park: the bowing deer",
        place: "Nara Park",
        description: "About 1,200 tame deer wander the park and bow for shika senbei crackers (about ¥200 a pack). Funny, a bit pushy, the highlight for everyone."
      },
      {
        time: "12:00",
        title: "Lunch & the mochi-pounding show",
        place: "Nakatanidou · Higashimuki shopping street",
        description: "Nakatanidou pounds rice cakes at high speed with a shout, a few times a day; then lunch in the covered Higashimuki street."
      },
      {
        time: "13:30",
        title: "Todai-ji: the giant Buddha",
        place: "Todai-ji (Daibutsuden)",
        description: "The one temple of the day, and it's worth it: a 15 m bronze Buddha inside one of the largest wooden buildings in the world. About ¥800. Deer at the gate, too.",
        optional: true
      },
      {
        time: "15:00",
        title: "Naramachi: the old merchant lanes",
        place: "Naramachi",
        description: "Low wooden houses, small cafés and craft shops, 15 min south. Coffee and a rest before the train.",
        optional: true
      }
    ],
    returnTo: {
      duration: "≈ 50 min",
      note: "Kintetsu Nara → Kintetsu Kyoto (express, no change), then 7 min walk",
      dir: {
        from: "Kintetsu Nara Station",
        to: "Onyado Nono Kyoto Shichijo",
        mode: "transit"
      }
    },
    photoTips: [
      "Fushimi Inari: shoot uphill in the tunnels so the black inscriptions don't show",
      "Nara: get low to the deer's eye level, with the park behind them"
    ],
    alternatives: [
      "Skip Nara, stay in Kyoto: Fushimi sake district (Gekkeikan Okura Museum, tastings), 15 min south of Inari",
      "Rainy day: Kyoto Railway Museum, 20 min walk from the hotel, real steam engines and a ride"
    ],
    culture: {
      title: "Shinto and Buddhism, side by side",
      body: "Fushimi Inari is a Shinto shrine, torii gates, foxes as messengers of Inari, god of rice and business; each gate is a gift from a company. Tofuku-ji and Kodai-ji are Buddhist Zen temples, gardens of rock and moss for contemplation. Most Japanese visit both: 'born Shinto, die Buddhist', as the saying goes."
    }
  },
  {
    dayNumber: 16,
    date: "2026-11-14",
    weekday: "Saturday",
    region: "south",
    base: "Kyoto",
    title: "Food, a kimono and the old lanes",
    subtitle: "Nishiki Market, a hands-on tea ceremony, Ninenzaka, a last dinner in Gion",
    departureTime: "09:30",
    rideToFirst: {
      duration: "≈ 20 min",
      note: "Subway Karasuma line Kyoto → Shijo (2 stops), then 5 min walk",
      dir: {
        from: "Onyado Nono Kyoto Shichijo",
        to: "Nishiki Market",
        mode: "transit"
      }
    },
    activities: [
      {
        time: "10:00",
        title: "Nishiki Market: eat your way down the street",
        place: "Nishiki Market · Teramachi arcade",
        description: "400 years of Kyoto's kitchen in one narrow covered street: grilled seafood on sticks, tamagoyaki, soy doughnuts, pickles. Small bites, many stalls. Busy after 11:00 on a Saturday.",
        attractionId: "nishiki-market",
        rideToNext: {
          duration: "≈ 15 min",
          note: "Walk east across the river into Gion",
          dir: {
            from: "Nishiki Market",
            to: "Maikoya Gion",
            mode: "walking"
          }
        }
      },
      {
        time: "12:30",
        title: "Tea ceremony in kimono",
        place: "Maikoya (Gion)",
        description: "Get dressed in kimono, then a tea master shows you how matcha is made and served, and you make your own. Photos in the garden after. About 1.5 h. Book a slot online in the morning.",
        link: {
          label: "Maikoya on Google Maps",
          url: "https://www.google.com/maps/search/?api=1&query=Maikoya+Gion+Kyoto"
        },
        rideToNext: {
          duration: "≈ 15 min walk",
          note: "Through Gion along Hanamikoji to Yasaka",
          dir: {
            from: "Maikoya Gion",
            to: "Ninenzaka, Kyoto",
            mode: "walking"
          }
        }
      },
      {
        time: "15:00",
        title: "Ninenzaka & Sannenzaka: the old shopping lanes",
        place: "Ninenzaka · Sannenzaka · Yasaka Pagoda",
        description: "Stone-stepped lanes of wooden shops: pottery, sweets, pickles, a Starbucks in a tatami house. The pagoda is the view, from the street, no ticket needed."
      },
      {
        time: "18:00",
        title: "Last dinner in Kyoto",
        place: "Gion · Pontocho",
        description: "Kyoto's farewell: yakitori or kushikatsu in Pontocho, or a kaiseki set in Gion. Then the lanterns one last time.",
        attractionId: "gion-district"
      }
    ],
    returnTo: {
      duration: "≈ 15 min",
      note: "Taxi (≈ ¥1,200), or Keihan Gion-Shijo → Shichijo + 7 min walk",
      dir: {
        from: "Gion",
        to: "Onyado Nono Kyoto Shichijo",
        mode: "transit"
      }
    },
    photoTips: [
      "Ninenzaka: the steps with the pagoda behind, from the top of Sannenzaka, early or at dusk",
      "Kimono photos: in the garden with soft light, not in the street sun"
    ],
    alternatives: [
      "Instead of the tea ceremony: a wagashi (Japanese sweets) making class or a cooking class",
      "Nijo Castle 'NAKED' night light event (if you already have tickets), 18:00",
      "Toei Kyoto Studio Park: samurai and ninja film sets, shows, fun for adults too"
    ]
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
        time: "16:30",
        title: "Check in: Dai-ichi Hotel Tokyo",
        place: "Dai-ichi Hotel Tokyo, Shimbashi",
        description: "One JR stop from Tokyo Station to Shimbashi (or a 10-min taxi). Drop bags, short rest.",
        rideToNext: {
          duration: "≈ 20 min",
          note: "Ginza line Shimbashi → Asakusa, no change",
          dir: { from: "Dai-ichi Hotel Tokyo", to: "Senso-ji", mode: "transit" }
        }
      },
      {
        time: "18:00",
        title: "Asakusa at night: Senso-ji lit up",
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
      "Philosopher's Path: the canal with stone bridges and maples, shoot along the water",
      "Nanzen-ji aqueduct: the brick arches in a row, shot down the tunnel",
      "Senso-ji at night: the five-storey pagoda lit gold, from the side courtyard with the incense smoke in front"
    ],
    alternatives: [
      "Tokyo Skytree for the city at night, 20 min walk from Senso-ji",
      "Morning instead: Uji (instead of Hyakumanben), Byodo-in and a matcha tasting, JR ~20 min from Kyoto Station, close to the hotel and the Shinkansen"
    ],
    culture: {
      title: "The Shinkansen and Japanese time",
      body: "The bullet train's average delay is under a minute a year. Platform lines mark exactly where each car stops, and cleaning crews turn a train around in seven minutes, then bow to the passengers. Punctuality here is a form of respect for other people's time."
    }
  },
  {
    dayNumber: 18,
    date: "2026-11-16",
    weekday: "Monday",
    region: "north",
    base: "Tokyo",
    dayTips: ["If you go to teamLab Planets, carry on to Odaiba on the driverless Yurikamome (from Shin-Toyosu): sit in the front car for the view over the bay and the bridges"],
    title: "Tokyo: gardens, Kagurazaka, Nihonbashi",
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
        title: "Kagurazaka: stone alleys & lunch",
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
        title: "Nihonbashi & Ginza: depachika and craft shops",
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
      "Koishikawa Korakuen: the full-moon bridge (Engetsukyo), its reflection completes the circle on still water",
      "Kagurazaka: the narrow stone lanes at Hyogo-yokocho, low angle along the cobbles",
      "Ginza at dusk: from the Ginza Six rooftop as the lights come on"
    ],
    alternatives: [
      "Sumo show-dinner in Asakusa, former wrestlers, a demonstration and chanko hotpot (book)",
      "Kiyosumi Shirakawa, a stroll garden and Tokyo's best coffee roasters",
      "Golden Gai, Shinjuku, tiny bars of six seats each",
      "Rainy-day option: teamLab Planets (Toyosu) or Borderless (Azabudai Hills), walk-through digital art, ~2 h. Book timed tickets ahead",
      "Fukagawa Fudodo, a fire ceremony (goma) with drums and chanting, several times a day, free",
      "Mitsukoshi Ginza at 10:00: the opening, with staff bowing to the first customers, then the food hall"
    ],
    culture: {
      title: "Depachika: the art of the gift",
      body: "Gift-giving (omiyage) is a ritual in Japan: after a trip you bring back local sweets for colleagues and family, beautifully wrapped. Department-store food halls exist largely for this, perfect fruit in boxes, seasonal wagashi shaped like maple leaves. The wrapping matters as much as what's inside."
    }
  },
  {
    dayNumber: 19,
    date: "2026-11-17",
    weekday: "Tuesday",
    region: "north",
    base: "Tokyo",
    title: "Mount Takao: autumn on Tokyo's own mountain",
    subtitle: "Cable car up, maples, a mountain temple, Shimokitazawa in the evening",
    dayTips: [
      "Tuesday is the quiet day on Takao, weekends are packed",
      "Tonight's hotel isn't booked yet: once it is, the first and last legs will start and end there",
      "Pasmo/Suica works on the Keio line and the cable car"
    ],
    rideToFirst: {
      duration: "≈ 55 min",
      note: "Keio line from Shinjuku to Takaosanguchi (the last stop), semi-special express ≈ 50 min, ≈ ¥500, then 3 min walk to the cable car",
      dir: { from: "Shinjuku Station", to: "Takaosanguchi Station", mode: "transit" }
    },
    activities: [
      {
        time: "09:30",
        title: "Cable car up Mount Takao",
        place: "Takao-san Cable Car (Kiyotaki station)",
        description: "Must. Japan's steepest cable car, 6 minutes up through the maples (peak colour mid–late November). ≈ ¥500 one way.",
        rideToNext: {
          duration: "20 min walk",
          note: "Trail 1, paved and gentle, past the monkey park and the 'octopus' cedar",
          dir: { from: "Takaosan Station", to: "Yakuo-in", mode: "walking" }
        }
      },
      {
        time: "10:30",
        title: "Yakuo-in: the mountain temple",
        place: "Yakuo-in (Takaosan Yakuoin Yukiji)",
        description: "Must. A 1,200-year-old temple of mountain ascetics, with fierce tengu statues guarding the steps. The one temple of the day.",
        rideToNext: {
          duration: "20 min walk",
          note: "Stone steps up to the summit; skip this bit if legs are tired",
          dir: { from: "Yakuo-in", to: "Mount Takao summit", mode: "walking" }
        }
      },
      {
        time: "11:30",
        title: "The summit view & tororo soba",
        place: "Mount Takao summit",
        description: "Optional. On a clear day Fuji shows to the west. Lunch: tororo soba (soba with grated mountain yam), the local dish, at the summit or back near the cable car.",
        optional: true,
        rideToNext: {
          duration: "≈ 45 min",
          note: "Walk back down to Takaosan Station and ride the cable car or the open chairlift down",
          dir: { from: "Mount Takao summit", to: "Takaosanguchi Station", mode: "walking" }
        }
      },
      {
        time: "14:00",
        title: "Gokurakuyu onsen at the foot of the mountain",
        place: "Keio Takaosan Onsen Gokurakuyu",
        description: "Optional. A day onsen right next to Takaosanguchi station: soak the legs before the train back. About ¥1,100, towels for rent.",
        optional: true,
        rideToNext: {
          duration: "≈ 55 min",
          note: "Keio line to Meidaimae (≈ 45 min), change to the Keio Inokashira line, 2 stops to Shimokitazawa",
          dir: { from: "Takaosanguchi Station", to: "Shimokitazawa Station", mode: "transit" }
        }
      },
      {
        time: "17:00",
        title: "Shimokitazawa: vintage, coffee, dinner",
        place: "Shimokitazawa",
        description: "Low-rise lanes of vintage shops, record stores, small cafés and izakaya, Tokyo's young, easy side. Dinner here, then a short ride back to the hotel."
      }
    ],
    photoTips: [
      "From the cable car: sit at the bottom end facing up, the slope of maples fills the frame",
      "Yakuo-in: the tengu statues against the red temple, shoot low and up",
      "Summit: a long lens for Fuji floating over the ridges"
    ],
    alternatives: [
      "Instead: Kamakura (see the options on day 18) or Yokohama: Chinatown, Sankeien garden and its maples, the Cup Noodles Museum",
      "Rikugien garden lit up after dark (autumn illumination usually starts mid–late November, check dates)",
      "Sumo morning practice in Ryogoku, through a guided tour (no Tokyo tournament in November)"
    ],
    culture: {
      title: "Tengu of Takao",
      body: "Mount Takao has been a sacred mountain for over a thousand years. Its guardians are tengu: the red, long-nosed daitengu and the crow-beaked karasu tengu, mountain spirits believed to protect the faithful and punish the proud. You'll find them as statues on the temple steps and on the local sweets."
    }
  },
  {
    dayNumber: 20,
    date: "2026-11-18",
    weekday: "Wednesday",
    region: "north",
    base: "Tokyo",
    title: "A slow last day, then Haneda",
    subtitle: "Palace gardens, tea on the bay, last omiyage, the night flight",
    dayTips: [
      "Ask the hotel for a late check-out, or leave the bags at the desk until the evening",
      "Emirates at Haneda flies from Terminal 3; be there by 21:30 for the 00:05 flight",
      "Spend the last yen: Haneda T3 has a full Edo-style food and shopping street"
    ],
    activities: [
      {
        time: "09:30",
        title: "Imperial Palace East Gardens",
        place: "Imperial Palace East Gardens",
        description: "Must. The old Edo Castle grounds: massive stone walls, the keep foundation, maples and a quiet lawn. Free, open on Wednesdays (closed Mon & Fri). 1.5 h.",
        rideToNext: {
          duration: "≈ 20 min",
          note: "Taxi, or walk to Otemachi and the Toei Oedo line to Shiodome, 10 min walk",
          dir: { from: "Imperial Palace East Gardens", to: "Hamarikyu Gardens", mode: "transit" }
        }
      },
      {
        time: "11:30",
        title: "Hama-rikyu: matcha in the pond house",
        place: "Hamarikyu Gardens",
        description: "Must. A shogun's duck-hunting garden on Tokyo Bay, skyscrapers behind the pines. Matcha and a sweet in the Nakajima teahouse over the water. ≈ ¥300 + ¥1,000 tea.",
        rideToNext: {
          duration: "15 min walk",
          dir: { from: "Hamarikyu Gardens", to: "Ginza", mode: "walking" }
        }
      },
      {
        time: "13:30",
        title: "Last lunch & omiyage in Ginza",
        place: "Ginza",
        description: "Lunch, then the gifts: depachika sweets in the department-store basements, Itoya for paper and pens. Then back to the hotel for the bags and a rest."
      },
      {
        time: "Option",
        title: "Instead: teamLab Planets and the Yurikamome to Odaiba",
        place: "teamLab Planets",
        description: "Walk-through digital art (barefoot, in water), ≈ 2 h, book a timed ticket. Then the driverless Yurikamome from Shin-Toyosu to Odaiba, front car for the bay view.",
        optional: true
      }
    ],
    returnTo: {
      duration: "≈ 30 min",
      note: "From the hotel: taxi ≈ 25 min (≈ ¥7,000, easiest with four and the bags), or the Tokyo Monorail from Hamamatsucho (≈ 15 min) or Keikyu from Shinagawa (≈ 15 min) to Haneda Terminal 3",
      dir: { from: "Hamamatsucho Station", to: "Haneda Airport Terminal 3", mode: "transit" }
    },
    culture: {
      title: "Otsukaresama deshita",
      body: "Japanese has a phrase for the end of a long effort: otsukaresama deshita, 'you've worked hard'. Colleagues say it at the end of the day, friends after a trip. To the four of us: otsukaresama."
    }
  },
  {
    dayNumber: 21,
    date: "2026-11-19",
    weekday: "Thursday",
    region: "transit",
    base: "Dubai · Athens",
    title: "Home: Tokyo → Dubai → Athens → Tel Aviv",
    subtitle: "EK313 at 00:05, landing in Tel Aviv at 18:10",
    dayTips: [
      "At check-in in Haneda: ask that bags are tagged all the way to Tel Aviv (TLV) and that you get all three boarding passes",
      "Athens is a 1 h 05 min connection: if Emirates lands late, go straight to the transfer desk",
      "Booking refs as on the way out: HG8ZCN and I5JSFN"
    ],
    activities: [
      {
        time: "00:05",
        title: "Emirates EK313 Haneda → Dubai",
        place: "Haneda Airport Terminal 3",
        description: "Overnight flight, lands in Dubai early morning (≈ 06:55 local). Sleep as much as you can."
      },
      {
        time: "06:55",
        title: "Layover in Dubai (4 h 35 min)",
        place: "Dubai International Airport",
        description: "Breakfast, a shower in a lounge if you like, stretch the legs. Check the gate for Athens early."
      },
      {
        time: "11:30",
        title: "Emirates Dubai → Athens (lands 15:05)",
        place: "Athens International Airport",
        description: "Short connection in Athens: follow the 'Flight connections' signs."
      },
      {
        time: "16:10",
        title: "Aegean A3 926 Athens → Tel Aviv (lands 18:10)",
        place: "Ben Gurion Airport",
        description: "Home. Otsukaresama deshita."
      }
    ]
  }
];
