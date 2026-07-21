import type { Dish } from "./types";

/** Dishes worth chasing on this trip. "japan" = found everywhere we travel;
 *  "north" = a Kanto/Tokyo-Hakone specialty; "south" = a Kansai specialty. */
export const dishes: Dish[] = [
  {
    id: "ramen",
    name: "Ramen",
    nativeName: "ラーメン",
    region: "japan",
    category: "pasta",
    description:
      "Wheat noodles in a rich broth — shoyu, miso, tonkotsu or shio depending on the shop. Tokyo has thousands of tiny ramen counters; look for a queue as the best sign.",
    tryIt: "Any counter with a line outside — that's the tell",
    image: "./images/food-ramen.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Ramen"
    }
  },
  {
    id: "sushi-sashimi",
    name: "Sushi & Sashimi",
    nativeName: "寿司・刺身",
    region: "japan",
    category: "main",
    description:
      "From a Tsukiji Outer Market breakfast counter to a Kyoto conveyor-belt chain, fresh fish over vinegared rice (or on its own as sashimi) is a constant on this trip.",
    tryIt: "Tsukiji Outer Market (Tokyo) · any conveyor-belt sushi chain",
    image: "./images/food-sushi.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Sushi"
    }
  },
  {
    id: "tempura",
    name: "Tempura",
    nativeName: "天ぷら",
    region: "japan",
    category: "main",
    description:
      "Lightly battered, deep-fried seafood and vegetables — done right, the batter is nearly translucent and never greasy. Asakusa is famous for its old-school tempura specialists.",
    tryIt: "Tempura Daikokuya (Asakusa)",
    image: "./images/food-tempura.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Tempura"
    }
  },
  {
    id: "yakitori",
    name: "Yakitori",
    nativeName: "焼き鳥",
    region: "japan",
    category: "starter",
    description:
      "Skewered, grilled chicken — different cuts each on their own skewer, seasoned with tare sauce or plain salt. The classic order at any of Omoide Yokocho's tiny alley counters.",
    tryIt: "Omoide Yokocho (Shinjuku)",
    image: "./images/food-yakitori.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Yakitori"
    }
  },
  {
    id: "kaiseki",
    name: "Kaiseki",
    nativeName: "懐石料理",
    region: "japan",
    category: "main",
    description:
      "A traditional multi-course meal built around the season's best ingredients, served course by course. The centerpiece of a ryokan stay in Hakone, and available at Kyoto's finest restaurants too.",
    tryIt: "Included with most Hakone ryokan stays · fine restaurants in Gion",
    image: "./images/food-kaiseki.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Kaiseki"
    }
  },
  {
    id: "yuba",
    name: "Yuba (tofu skin)",
    nativeName: "湯葉",
    region: "north",
    category: "starter",
    description:
      "The delicate skin that forms on simmering soy milk, skimmed off and served fresh or dried — Nikko's signature local specialty, sold near the Toshogu approach.",
    tryIt: "Restaurants near Toshogu Shrine, Nikko",
    image: "./images/food-yuba.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Yuba_(food)"
    }
  },
  {
    id: "okonomiyaki",
    name: "Okonomiyaki",
    nativeName: "お好み焼き",
    region: "south",
    category: "main",
    description:
      "A savory Osaka pancake of batter, cabbage and your choice of fillings, cooked on a griddle and finished with okonomiyaki sauce, mayo and bonito flakes that visibly 'dance' in the rising heat.",
    tryIt: "Dotonbori (Osaka)",
    image: "./images/food-okonomiyaki.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Okonomiyaki"
    }
  },
  {
    id: "takoyaki",
    name: "Takoyaki",
    nativeName: "たこ焼き",
    region: "south",
    category: "snack",
    description:
      "Ball-shaped batter snacks with a piece of octopus inside, cooked in a special molded griddle and topped with sauce, mayo and bonito flakes. Osaka's street-food icon — eat carefully, the center stays molten hot.",
    tryIt: "Dotonbori (Osaka)",
    image: "./images/food-takoyaki.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Takoyaki"
    }
  },
  {
    id: "wagyu",
    name: "Wagyu beef",
    nativeName: "和牛",
    region: "south",
    category: "main",
    description:
      "Intensely marbled Japanese beef — Kansai sits near some of the country's most famous wagyu regions (Kobe beef is graded and branded from right here in Hyogo). Try it as yakiniku (grilled tableside) or a quick teppanyaki lunch.",
    tryIt: "Yakiniku restaurants in Osaka or Kyoto",
    image: "./images/food-wagyu.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Wagyu"
    }
  },
  {
    id: "matcha-wagashi",
    name: "Matcha & wagashi sweets",
    nativeName: "抹茶と和菓子",
    region: "south",
    category: "dessert",
    description:
      "Kyoto is Japan's matcha capital — powdered green tea served whisked in a bowl, or worked into soft-serve, parfaits and traditional wagashi sweets shaped to match the season.",
    tryIt: "Nishiki Market and the Higashiyama teahouses (Kyoto)",
    image: "./images/food-matcha.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Wagashi"
    }
  },
  {
    id: "onigiri",
    name: "Onigiri",
    nativeName: "おにぎり",
    region: "japan",
    category: "snack",
    description:
      "Hand-shaped rice balls, usually wrapped in nori with a filling (salted salmon, pickled plum, tuna mayo) tucked in the center. The single best konbini snack for a train platform or a jet-lagged first night.",
    tryIt: "Any 7-Eleven, Lawson or FamilyMart",
    image: "./images/food-onigiri.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Onigiri"
    }
  },
  {
    id: "ekiben",
    name: "Ekiben (station bento)",
    nativeName: "駅弁",
    region: "japan",
    category: "snack",
    description:
      "Elaborate boxed meals sold specifically for train journeys, often region-specific — a Shinkansen ride isn't complete without picking one up on the platform before boarding.",
    tryIt: "Any Shinkansen station platform kiosk",
    image: "./images/food-ekiben.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Ekiben"
    }
  }
];
