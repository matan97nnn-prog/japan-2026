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
    id: "houtou",
    name: "Houtou",
    nativeName: "ほうとう",
    region: "north",
    category: "main",
    description:
      "Thick, flat, hand-cut wheat noodles simmered in a miso broth with pumpkin and root vegetables — the Fuji Five Lakes region's signature dish, warming after a day of lake-hopping.",
    tryIt: "Kawaguchiko / Fujiyoshida area",
    image: "./images/food-houtou.jpg"
  },
  {
    id: "matsumoto-soba",
    name: "Matsumoto soba",
    nativeName: "信州そば",
    region: "north",
    category: "main",
    description:
      "Buckwheat noodles grown and made in the Nagano highlands — Matsumoto is proud of its soba, and Nakamachi Street's old kura warehouse buildings hold several well-regarded restaurants for it.",
    tryIt: "Nakamachi Street, Matsumoto",
    image: "./images/food-soba.jpg"
  },
  {
    id: "hida-beef",
    name: "Hida beef",
    nativeName: "飛騨牛",
    region: "north",
    category: "main",
    description:
      "Richly marbled, locally raised beef from the Hida region around Takayama — grilled tableside on a hoba leaf, as skewers at the morning market, or as part of a ryokan's kaiseki course.",
    tryIt: "Takayama",
    image: "./images/food-hidabeef.jpg",
    imageCredit: {
      author: "Ankur P",
      license: "CC BY 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Grilling_Hida_Beef_(Takayama_Street_Food)_(35910429046).jpg"
    }
  },
  {
    id: "kanazawa-seafood",
    name: "Kanazawa seafood",
    nativeName: "金沢の海鮮",
    region: "north",
    category: "main",
    description:
      "Snow crab, sweet shrimp (amaebi) and glossy sushi-grade cuts from the Sea of Japan, sold and eaten fresh at Omicho Market's stalls, or course by course at a kappou-style dinner.",
    tryIt: "Omicho Market, Kanazawa",
    image: "./images/food-kanazawa-seafood.jpg",
    imageCredit: {
      author: "Daderot",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Fish_-_Omicho_Ichiba_-_Kanazawa,_Japan_-_DSC09644.jpg"
    }
  },
  {
    id: "kakinoha-zushi",
    name: "Kakinoha-zushi",
    nativeName: "柿の葉寿司",
    region: "south",
    category: "main",
    description:
      "Pressed sushi wrapped in persimmon leaves — a preservation technique from long before refrigeration that turned into Nara's signature local dish.",
    tryIt: "Nara",
    image: "./images/food-kakinohazushi.jpg"
  },
  {
    id: "wagyu",
    name: "Wagyu beef",
    nativeName: "和牛",
    region: "south",
    category: "main",
    description:
      "Intensely marbled Japanese beef, available at Kyoto's better yakiniku (grilled tableside) restaurants and teppanyaki counters — a treat-yourself dinner on one of the trip's four Kyoto nights.",
    tryIt: "Yakiniku restaurants in Kyoto",
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
