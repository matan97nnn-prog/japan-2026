import type { Day } from "./types";

/* The plan, day by day — rebuilt 30 Oct 2026 from Dad's full booklet, his
 * Abacus day maps and the family's latest decisions. Keep each day short:
 * one line per stop, a directions link for every real leg. Open items
 * (return flight, Kanazawa / Kyoto / end-Tokyo hotels) are flagged in the
 * text rather than guessed. */
export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-10-30",
    weekday: "Friday",
    region: "transit",
    base: "Larnaca",
    title: "Tel Aviv → Larnaca",
    subtitle: "One night in Cyprus before the long haul",
    activities: [
      {
        time: "09:00",
        title: "Arkia flight Ben Gurion → Larnaca",
        description: "Short hop to Cyprus. Hotel in Larnaca for one night (name still to be added)."
      },
      {
        time: "Afternoon",
        title: "Finikoudes promenade & Larnaca Fort",
        description: "Palm-lined seafront, a coffee, the little Ottoman-era fort at the end of the promenade.",
        link: { label: "Map: airport → Finikoudes → fort", url: "https://www.google.com/maps/dir/Larnaca+International+Airport/Finikoudes+Beach/Larnaca+Medieval+Fort" }
      }
    ],
    dayTips: ["Check tomorrow's Emirates check-in time tonight — online check-in opens 48 h before"]
  },
  {
    dayNumber: 2,
    date: "2026-10-31",
    weekday: "Saturday",
    region: "transit",
    base: "In the air",
    title: "Larnaca → Dubai",
    subtitle: "EK110 at 16:25, overnight connection to Tokyo",
    activities: [
      {
        time: "Morning",
        title: "Slow morning, check-out",
        description: "Pack for the flight: Japan is 10–18°C in November, colder in the mountains."
      },
      {
        time: "16:25",
        title: "Emirates EK110 Larnaca → Dubai (lands 19:25)",
        description: "Confirm at check-in that bags are tagged through to Tokyo (Narita)."
      },
      {
        time: "Night",
        title: "Connection in Dubai",
        description: "EK318 to Narita departs 02:55. Check the gate and terminal on landing."
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
    subtitle: "Narita 17:20 → Keihan Tsukiji Ginza Grande",
    leadImage: "./images/hero/shibuya-crossing-night.jpg",
    activities: [
      {
        time: "17:20",
        title: "Land at Narita (EK318)",
        description: "Immigration, bags, then buy/charge a Suica for each of us (or add it to the phone wallet).",
        rideToNext: {
          duration: "≈ 1 h 15",
          note: "Keisei Access Express straight to Higashi-Ginza (no change) — or a taxi from Tokyo Station",
          dir: { from: "Narita International Airport", to: "Hotel Keihan Tsukiji Ginza Grande", mode: "transit" }
        }
      },
      {
        time: "Evening",
        title: "Check in — Hotel Keihan Tsukiji Ginza Grande",
        description: "Booking 1788608896, three nights. A light dinner nearby and an early night."
      }
    ],
    dayTips: [
      "Visit Japan Web QR codes ready on every phone before landing",
      "No plans tonight — jet lag is the only agenda"
    ]
  },
  {
    dayNumber: 4,
    date: "2026-11-02",
    weekday: "Monday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Old Tokyo — Tsukiji, Asakusa, Ueno",
    subtitle: "Sushi breakfast, Senso-ji, Ueno — and the evening tour at 20:00",
    activities: [
      {
        time: "08:00",
        title: "Breakfast at Tsukiji Outer Market",
        description: "A five-minute walk from the hotel. Monday is the safe day — the market is often closed Sundays, holidays and some Wednesdays.",
        attractionId: "tsukiji-outer-market",
        rideToNext: {
          duration: "20 min",
          note: "Hibiya line → Ueno",
          dir: { from: "Tsukiji Outer Market", to: "Ueno Park", mode: "transit" }
        }
      },
      {
        time: "10:00",
        title: "Ueno Park & Ameyoko market street",
        description: "Ponds, temples and early autumn colour, then the busy Ameyoko street market under the tracks.",
        attractionId: "ueno-park",
        rideToNext: {
          duration: "10 min",
          note: "Ginza line → Asakusa",
          dir: { from: "Ueno Station", to: "Senso-ji", mode: "transit" }
        }
      },
      {
        time: "14:00",
        title: "Asakusa — Senso-ji & Nakamise",
        description: "Tokyo's oldest temple through the Thunder Gate, then a stroll along the Sumida river.",
        attractionId: "senso-ji",
        rideToNext: {
          duration: "35 min",
          note: "Ginza line → Shinjuku",
          dir: { from: "Asakusa Station", to: "Gap Store Shinjuku Flagship", mode: "transit" }
        }
      },
      {
        time: "20:00",
        title: "Evening tour of Tokyo (Hebrew guide)",
        description: "Hebrew Tour Guide Japan, booking 9022, 4 people. Meet at Gap Store Shinjuku Flagship.",
        link: { label: "Meeting point on Google Maps", url: "https://maps.app.goo.gl/SbGAF4ki2xodKpPh9" }
      }
    ],
    dayTips: [
      "Sumo fans: the free Sumo Museum at Ryogoku Kokugikan is open weekdays 10:00–16:30 — today works",
      "Eat dinner before the tour, around Shinjuku"
    ]
  },
  {
    dayNumber: 5,
    date: "2026-11-03",
    weekday: "Tuesday",
    region: "north",
    base: "Tokyo (Ginza / Tsukiji)",
    title: "Culture Day — Meiji Jingu, Harajuku, Shibuya",
    subtitle: "A national holiday, with horseback archery at Meiji Jingu",
    activities: [
      {
        time: "10:00",
        title: "Omotesando & Harajuku",
        description: "Tree-lined Omotesando, then Takeshita Street — busy on a holiday, so keep it short.",
        rideToNext: {
          duration: "10 min walk",
          dir: { from: "Omotesando Station", to: "Meiji Jingu", mode: "walking" }
        }
      },
      {
        time: "13:00",
        title: "Meiji Jingu — autumn festival & yabusame",
        description: "Culture Day closes the shrine's autumn grand festival; mounted archers usually ride from about 13:00 near the west side. Free. Arrive early for a spot.",
        attractionId: "meiji-jingu",
        rideToNext: {
          duration: "20 min walk",
          dir: { from: "Meiji Jingu", to: "Shibuya Scramble Crossing", mode: "walking" }
        }
      },
      {
        time: "16:00",
        title: "Shibuya Crossing & Shibuya Sky at sunset",
        description: "The scramble from street level, then the open-air rooftop for sunset (book Shibuya Sky ahead).",
        attractionId: "shibuya-crossing"
      }
    ],
    dayTips: [
      "Culture Day (Bunka no Hi) is a national holiday: museums open, shrines crowded, and many celebrate with traditional performances",
      "Tsukiji market is likely closed today — breakfast at the hotel",
      "Yabusame start time to be confirmed on meijijingu.or.jp"
    ]
  },
  {
    dayNumber: 6,
    date: "2026-11-04",
    weekday: "Wednesday",
    region: "north",
    base: "Hakone",
    title: "Tokyo → Odawara → Hakone",
    subtitle: "Pick up the car, start the road trip",
    activities: [
      {
        time: "08:00",
        title: "Check out, send big bags ahead (Takkyubin)",
        description: "The front desk sends suitcases to fav Hida Takayama (arrive 7.11). Travel light for three nights.",
        rideToNext: {
          duration: "≈ 50 min",
          note: "Shinkansen Tokyo → Odawara (Kodama/Hikari ≈ 35 min)",
          dir: { from: "Tokyo Station", to: "Odawara Station", mode: "transit" }
        }
      },
      {
        time: "10:00",
        title: "Collect the car — Toyota Rent a Car, Odawara Shinkansen Exit",
        description: "Booking 99910376400, Noah Hybrid, ETC card included. Passport + licence + IDP. Branch: 0465-32-0100.",
        rideToNext: {
          duration: "40 min",
          dir: { from: "Odawara Station", to: "Hakone Open-Air Museum", mode: "driving" }
        }
      },
      {
        time: "11:00",
        title: "Hakone Open-Air Museum",
        description: "Sculpture in a mountain garden, with a hot-spring footbath.",
        attractionId: "hakone-open-air-museum",
        rideToNext: {
          duration: "20 min",
          dir: { from: "Hakone Open-Air Museum", to: "Owakudani", mode: "driving" }
        }
      },
      {
        time: "13:30",
        title: "Owakudani",
        description: "Volcanic steam vents and black eggs; early November colour is up here, at altitude.",
        attractionId: "hakone-owakudani",
        rideToNext: {
          duration: "25 min",
          dir: { from: "Owakudani", to: "Hakone Shrine", mode: "driving" }
        }
      },
      {
        time: "15:30",
        title: "Lake Ashi & Hakone Shrine's torii in the water",
        description: "Short walk to the lakeside gate, then on to the hotel.",
        attractionId: "hakone-lake-ashi",
        rideToNext: {
          duration: "30 min",
          dir: { from: "Hakone Shrine", to: "Hakone Yutowa", mode: "driving" }
        }
      },
      {
        time: "Evening",
        title: "Hakone Yutowa — onsen & dinner",
        description: "One night. Bath, dinner, early sleep."
      }
    ],
    dayTips: ["Don't cram the whole Hakone loop — car pick-up day stays gentle"]
  },
  {
    dayNumber: 7,
    date: "2026-11-05",
    weekday: "Thursday",
    region: "north",
    base: "Kawaguchiko",
    title: "Hakone → Fuji Five Lakes",
    subtitle: "Spring-fed ponds, the pagoda view, a sake brewery",
    activities: [
      {
        time: "09:00",
        title: "Leave Hakone (Gotemba Outlets optional)",
        description: "Gotemba Premium Outlets is on the way — skip it to save time for Fuji.",
        rideToNext: {
          duration: "≈ 1 h",
          dir: { from: "Hakone Yutowa", to: "Oshino Hakkai", mode: "driving" }
        }
      },
      {
        time: "10:30",
        title: "Oshino Hakkai",
        description: "Eight clear spring ponds fed by Fuji snowmelt, in a thatched-roof village.",
        attractionId: "oshino-hakkai",
        rideToNext: {
          duration: "20 min",
          dir: { from: "Oshino Hakkai", to: "Chureito Pagoda", mode: "driving" }
        }
      },
      {
        time: "12:30",
        title: "Chureito Pagoda",
        description: "~400 steps up for the classic pagoda-and-Fuji view.",
        attractionId: "chureito-pagoda",
        rideToNext: {
          duration: "15 min",
          dir: { from: "Chureito Pagoda", to: "Ide Sake Brewery Kawaguchiko", mode: "driving" }
        }
      },
      {
        time: "15:00",
        title: "Ide Sake Brewery — tour & tasting",
        description: "Family brewery in Kawaguchiko, ¥500 with tasting. Book by 16:00 the day before.",
        rideToNext: {
          duration: "10 min",
          dir: { from: "Ide Sake Brewery Kawaguchiko", to: "Kawaguchiko Urban Resort Villa", mode: "driving" }
        }
      },
      {
        time: "Evening",
        title: "Kawaguchiko Urban Resort Villa",
        description: "One night in the villa. Houtou noodles for dinner — the local dish."
      }
    ],
    dayTips: [
      "Fuji hides behind clouds by midday — if it's clear in the morning, go to the views first",
      "The Kawaguchiko Autumn Leaves Festival opens on 7.11, after we leave; the maples will be part-coloured"
    ]
  },
  {
    dayNumber: 8,
    date: "2026-11-06",
    weekday: "Friday",
    region: "north",
    base: "Matsumoto",
    title: "Dad's 60th — Fuji at sunrise, Matsumoto at night",
    subtitle: "Five lakes in the morning, castle and a birthday dinner",
    activities: [
      {
        time: "06:00",
        title: "Sunrise over Fuji at Oishi Park",
        description: "Fuji is clearest at dawn. Coffee, a family photo, the first toast of the day.",
        attractionId: "oishi-park",
        rideToNext: {
          duration: "5 min",
          dir: { from: "Oishi Park", to: "Itchiku Kubota Art Museum", mode: "driving" }
        }
      },
      {
        time: "09:30",
        title: "Itchiku Kubota Art Museum",
        description: "Kimono painted as landscapes, in a building and garden made for them. Quiet and beautiful.",
        rideToNext: {
          duration: "40 min",
          note: "Along lakes Saiko and Shoji",
          dir: { from: "Itchiku Kubota Art Museum", to: "Lake Motosu", mode: "driving" }
        }
      },
      {
        time: "11:30",
        title: "Lakes Saiko, Shoji & Motosu",
        description: "The quieter western lakes. Motosu is the Fuji view on the ¥1,000 note.",
        attractionId: "fuji-five-lakes",
        rideToNext: {
          duration: "≈ 2 h 15",
          dir: { from: "Lake Motosu", to: "Matsumoto Castle", mode: "driving" }
        }
      },
      {
        time: "15:00",
        title: "Matsumoto Castle",
        description: "Japan's oldest original wooden keep, black against the Alps. Last entry 16:30.",
        attractionId: "matsumoto-castle"
      },
      {
        time: "19:00",
        title: "Birthday dinner — kaiseki in Matsumoto",
        description: "Our pick: Hikariya Higashi (private tatami rooms, local Shinshu ingredients). Alternative: Hikariya Nishi in an old townhouse. Book ahead and mention the 60th."
      }
    ],
    dayTips: [
      "Check in at Matsumoto Hotel Kagetsu before the castle (one night, 2 rooms)",
      "Bring a small cake or a bottle from yesterday's brewery for the hotel room after dinner"
    ]
  },
  {
    dayNumber: 9,
    date: "2026-11-07",
    weekday: "Saturday",
    region: "north",
    base: "Takayama",
    title: "Kamikochi → Takayama",
    subtitle: "A river walk in the Japanese Alps, then on to Takayama",
    activities: [
      {
        time: "07:30",
        title: "Drive to Hirayu, park, shuttle bus up",
        description: "No private cars in Kamikochi. Park at Hirayu (Akandana) — it's on our side for Takayama — and take the bus.",
        rideToNext: {
          duration: "≈ 1 h 15 + 25 min bus",
          dir: { from: "Matsumoto Hotel Kagetsu", to: "Akandana Parking Hirayu", mode: "driving" }
        }
      },
      {
        time: "09:30",
        title: "Kamikochi walk: Taisho Pond → Kappa Bridge → Myojin",
        description: "Flat riverside trail through larch gold and snow-capped peaks. Walk what you like; 2–3 h in total.",
        attractionId: "kamikochi"
      },
      {
        time: "14:00",
        title: "Bus back to Hirayu, soak at Hirayu no Mori",
        description: "16 outdoor baths, ¥500–700, private baths available.",
        rideToNext: {
          duration: "≈ 1 h",
          dir: { from: "Hirayu no Mori", to: "fav Hida Takayama", mode: "driving" }
        }
      },
      {
        time: "Evening",
        title: "Check in — fav Hida Takayama (2 nights)",
        description: "Our bags from Tokyo are waiting. Hida beef for dinner."
      }
    ],
    dayTips: [
      "Saturday = crowded buses: aim for the first departures",
      "Mountain mornings can be near freezing — warm layers and good shoes",
      "Last bus down from Kamikochi to Hirayu ≈ 17:30 — confirm on alpico.co.jp"
    ]
  },
  {
    dayNumber: 10,
    date: "2026-11-08",
    weekday: "Sunday",
    region: "north",
    base: "Takayama",
    title: "Takayama",
    subtitle: "Morning markets, old town, sake",
    activities: [
      {
        time: "07:30",
        title: "Miyagawa & Jinya-mae morning markets",
        description: "Local produce, pickles, Hida beef skewers, along the river."
      },
      {
        time: "10:00",
        title: "Sanmachi Suji old town & sake breweries",
        description: "Merchant streets with cedar balls over the brewery doors. Harada and Funasaka offer tastings.",
        attractionId: "sanmachi-suji"
      },
      {
        time: "13:30",
        title: "Takayama Jinya",
        description: "The only surviving Edo-era government house in Japan."
      },
      {
        time: "15:00",
        title: "Hida no Sato folk village (optional)",
        description: "Thatched farmhouses around a pond — a preview of Shirakawa-go.",
        attractionId: "hida-folk-village"
      }
    ],
    dayTips: [
      "Peak foliage time in Takayama — Hie Shrine's maples are close to the old town",
      "Nakabashi bridge is lit in the evenings (unconfirmed for 2026)"
    ]
  },
  {
    dayNumber: 11,
    date: "2026-11-09",
    weekday: "Monday",
    region: "north",
    base: "Kanazawa",
    title: "Shirakawa-go → Kanazawa",
    subtitle: "The thatched village, then hand back the car",
    activities: [
      {
        time: "08:00",
        title: "Check out, drive to Shirakawa-go",
        description: "",
        rideToNext: {
          duration: "≈ 50 min",
          dir: { from: "fav Hida Takayama", to: "Shirakawa-go", mode: "driving" }
        }
      },
      {
        time: "09:00",
        title: "Shirakawa-go + Shiroyama viewpoint",
        description: "UNESCO village of steep thatched farmhouses. Walk up to the viewpoint for the postcard view.",
        attractionId: "shirakawa-go",
        rideToNext: {
          duration: "≈ 1 h 15",
          dir: { from: "Shirakawa-go", to: "Kanazawa Station", mode: "driving" }
        }
      },
      {
        time: "15:00",
        title: "Fukumitsuya sake brewery tour (optional)",
        description: "Kanazawa's oldest brewery. 15:00 tour, 90 min, ¥3,300 — only Mon/Fri/Sat in winter, so today fits. Book ahead."
      },
      {
        time: "By 20:00",
        title: "Return the car — Kanazawa Station East Exit",
        description: "Toyota Rent a Car, Porte Kanazawa Bldg 1F, 2-15-1 Honmachi. Refuel first.",
        link: { label: "Return shop on Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Toyota+Rent+a+Car+Kanazawa+Station+East+Exit" }
      },
      {
        time: "Evening",
        title: "Kanazawa hotel (2 nights — to be confirmed)",
        description: "Booked: SOKI Kanazawa; alternative: the square hotel KANAZAWA. Decision pending."
      }
    ],
    dayTips: ["A packed day — if the road is slow, cut Shirakawa-go short and protect the car return"]
  },
  {
    dayNumber: 12,
    date: "2026-11-10",
    weekday: "Tuesday",
    region: "north",
    base: "Kanazawa",
    title: "Kanazawa, slowly",
    subtitle: "No car — gardens, the castle, the geisha district",
    activities: [
      {
        time: "09:00",
        title: "Omicho Market",
        description: "Seafood breakfast — crab, sweet shrimp, kaisendon.",
        attractionId: "omicho-market",
        rideToNext: { duration: "15 min walk", dir: { from: "Omicho Market", to: "Kenrokuen", mode: "walking" } }
      },
      {
        time: "10:30",
        title: "Kenrokuen & Kanazawa Castle",
        description: "One of Japan's three great gardens, with the yukitsuri snow ropes going up on the pines.",
        attractionId: "kenrokuen",
        rideToNext: { duration: "20 min walk", dir: { from: "Kenrokuen", to: "Higashi Chaya District", mode: "walking" } }
      },
      {
        time: "14:00",
        title: "Higashi Chaya geisha district",
        description: "Wooden teahouses and gold-leaf shops; matcha in a teahouse.",
        attractionId: "higashi-chaya"
      },
      {
        time: "16:00",
        title: "21st Century Museum / Nagamachi samurai quarter",
        description: "Pick one, or rest."
      }
    ],
    dayTips: ["The Kenrokuen night light-up is not on tonight (7, 14, 15… only)"]
  },
  {
    dayNumber: 13,
    date: "2026-11-11",
    weekday: "Wednesday",
    region: "south",
    base: "Kyoto",
    title: "Kanazawa → Kyoto",
    subtitle: "Shinkansen + Thunderbird, a first evening in Kyoto",
    activities: [
      {
        time: "10:00",
        title: "Train to Kyoto",
        description: "Hokuriku Shinkansen to Tsuruga, change to the Thunderbird to Kyoto — about 2 h 15 in total. Reserve seats.",
        rideToNext: {
          duration: "≈ 2 h 15",
          note: "One change at Tsuruga",
          dir: { from: "Kanazawa Station", to: "Kyoto Station", mode: "transit" }
        }
      },
      {
        time: "13:00",
        title: "Kyoto hotel — to be confirmed",
        description: "Booked: Richmond Hotel Premier Kyoto Shijo; alternative: GLANZ KEI Kyoto Station. Decision pending."
      },
      {
        time: "15:00",
        title: "Nishiki Market & Gion stroll",
        description: "Kyoto's food market, then the lanes of Gion at dusk. Some Nishiki stalls close on Wednesdays.",
        attractionId: "nishiki-market"
      },
      {
        time: "19:00",
        title: "DRUM TAO taiko show (optional)",
        description: "New theatre by Kyoto Station, daily at 19:00 and 21:00, ~50 min, from ¥10,000. Book online."
      }
    ]
  },
  {
    dayNumber: 14,
    date: "2026-11-12",
    weekday: "Thursday",
    region: "south",
    base: "Kyoto",
    title: "Fushimi Inari & Higashiyama",
    subtitle: "Torii tunnels, a sake museum, Kiyomizu, Kodai-ji by night",
    activities: [
      {
        time: "07:30",
        title: "Fushimi Inari, early",
        description: "Walk the torii tunnels up to the Yotsutsuji viewpoint — no need for the summit.",
        attractionId: "fushimi-inari",
        rideToNext: { duration: "15 min", dir: { from: "Fushimi Inari Taisha", to: "Gekkeikan Okura Sake Museum", mode: "transit" } }
      },
      {
        time: "10:30",
        title: "Gekkeikan Okura Sake Museum (Fushimi)",
        description: "Kyoto's sake district: museum and tasting, ¥600.",
        rideToNext: { duration: "30 min", dir: { from: "Gekkeikan Okura Sake Museum", to: "Kiyomizu-dera", mode: "transit" } }
      },
      {
        time: "13:00",
        title: "Kiyomizu-dera, Sannenzaka & Ninenzaka",
        description: "The wooden stage over the maples, then the old stone lanes downhill.",
        attractionId: "kiyomizu-dera",
        rideToNext: { duration: "10 min walk", dir: { from: "Kiyomizu-dera", to: "Kodai-ji", mode: "walking" } }
      },
      {
        time: "17:00",
        title: "Kodai-ji night illumination & bamboo grove",
        description: "Lit gardens and a small bamboo grove — our pick for 'the temple with the bamboo'. ¥800, last entry 21:30.",
        attractionId: "kodai-ji"
      },
      {
        time: "Evening",
        title: "Dinner in Gion or Pontocho",
        description: "Pontocho's alley of restaurants over the Kamo river."
      }
    ],
    restaurants: ["rest-s-gion-pontocho"]
  },
  {
    dayNumber: 15,
    date: "2026-11-13",
    weekday: "Friday",
    region: "south",
    base: "Kyoto",
    title: "Kurama → Kibune hike",
    subtitle: "Mountain temple, cedar roots, a village on the river",
    activities: [
      {
        time: "09:30",
        title: "Eizan train to Kurama",
        description: "From Demachiyanagi to the last stop, about 30 min. The giant tengu statue greets you.",
        rideToNext: { duration: "≈ 30 min", dir: { from: "Demachiyanagi Station", to: "Kurama Station", mode: "transit" } }
      },
      {
        time: "10:30",
        title: "Kurama-dera → Kinone-michi root path → down to Kibune",
        description: "≈ 4 km, 2–3 h with stops. Stone steps and roots; easy-to-moderate. Temple fee ¥500, cash.",
        attractionId: "kurama-kibune"
      },
      {
        time: "13:30",
        title: "Lunch in Kibune & Kifune Shrine",
        description: "The stone stairway lined with red lanterns; maples at their best around mid-November.",
        rideToNext: { duration: "20 min walk + 30 min train", dir: { from: "Kifune Shrine", to: "Kibuneguchi Station", mode: "walking" } }
      },
      {
        time: "Evening",
        title: "Free evening",
        description: "If Kibune's lanterns are lit (usually from early Nov, dusk–21:00), stay for dusk before heading back."
      }
    ],
    dayTips: [
      "Kurama-dera's little cable car was out of service in September — plan to walk up",
      "Good grip shoes; steps are slippery after rain"
    ]
  },
  {
    dayNumber: 16,
    date: "2026-11-14",
    weekday: "Saturday",
    region: "south",
    base: "Kyoto",
    title: "Arashiyama & Nijo Castle at night",
    subtitle: "Bamboo at dawn, the river, a castle in light",
    activities: [
      {
        time: "07:30",
        title: "Arashiyama bamboo grove",
        description: "Before the crowds. Then Okochi Sanso garden.",
        attractionId: "arashiyama-bamboo",
        rideToNext: { duration: "5 min walk", dir: { from: "Arashiyama Bamboo Grove", to: "Tenryu-ji", mode: "walking" } }
      },
      {
        time: "09:30",
        title: "Tenryu-ji garden & Togetsukyo bridge",
        description: "Zen garden against the hills, then the bridge and riverside."
      },
      {
        time: "Afternoon",
        title: "Back to the centre — rest, Shijo-Kawaramachi shopping",
        description: ""
      },
      {
        time: "18:00",
        title: "Nijo Castle — NAKED night event",
        description: "Projection art on the Karamon gate and Ninomaru Palace, 18:00–22:00. ¥2,400 Fri–Sun — book online.",
        attractionId: "nijo-castle"
      }
    ]
  },
  {
    dayNumber: 17,
    date: "2026-11-15",
    weekday: "Sunday",
    region: "transit",
    base: "Tokyo",
    title: "Kyoto → Tokyo",
    subtitle: "A craft market (optional), then the Shinkansen",
    activities: [
      {
        time: "08:00",
        title: "Hyakumanben handicraft market (optional)",
        description: "Held on the 15th of every month at Chion-ji: ~450 craft stalls. Ginkaku-ji (the Silver Pavilion) is 20 min away if time allows.",
        attractionId: "ginkaku-ji"
      },
      {
        time: "12:00",
        title: "Shinkansen Kyoto → Tokyo",
        description: "Hikari is covered by the JR Pass (Nozomi isn't). Reserve seats with luggage space.",
        rideToNext: { duration: "≈ 2 h 40", dir: { from: "Kyoto Station", to: "Tokyo Station", mode: "transit" } }
      },
      {
        time: "Evening",
        title: "Tokyo hotel — to be decided",
        description: "Booked: The Gate Hotel Kaminarimon (15–17.11). Decision pending."
      }
    ]
  },
  {
    dayNumber: 18,
    date: "2026-11-16",
    weekday: "Monday",
    region: "north",
    base: "Tokyo",
    title: "Tokyo — free day",
    subtitle: "Options: Kamakura, Nikko, or the city",
    activities: [
      {
        time: "Option",
        title: "Kamakura day trip",
        description: "Great Buddha, Hasedera, the Daibutsu hiking trail. JR Yokosuka line from Tokyo, ~1 h, no change. See Notes.",
        rideToNext: { duration: "≈ 1 h", dir: { from: "Tokyo Station", to: "Kamakura Station", mode: "transit" } }
      },
      {
        time: "Option",
        title: "Nikko day trip",
        description: "Shinkyo bridge, Toshogu, the Kanmangafuchi jizo path. Only if we feel fresh — see Notes.",
        attractionId: "nikko-toshogu"
      },
      {
        time: "Option",
        title: "Tokyo: Ginza, Nihonbashi, Shinjuku",
        description: "Last shopping, a sumo show-dinner in Asakusa, or just rest."
      }
    ]
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
      }
    ]
  }
];
