import type { Winery } from "./types";

/** Sake breweries, a beer brewery and a whisky distillery worth seeking
 *  out on each leg — repurposing the "winery" slot for Japan's drinking
 *  culture. Most take walk-in visitors or a same-week reservation. */
export const wineries: Winery[] = [
  // ============== NORTH — Tokyo ==============
  {
    id: "sake-ozawa-shuzo",
    name: "Ozawa Shuzo (Sawanoi)",
    region: "north",
    appellation: "Junmai / Honjozo sake",
    description:
      "A working sake brewery in Ome, on Tokyo's western edge, using water from the Tama River — brewing here since 1702. Self-guided tastings and a riverside restaurant make it an easy half-day trip if the group wants one more day out of the city (not currently on the itinerary, but easy to slot in).",
    website: "https://www.sawanoi-sake.com/",
    address: "2 Sawai, Ome, Tokyo",
    coords: [35.7909, 139.1892],
    bookingNote: "Self-guided tastings; groups should call ahead.",
    image: "./images/sake-ozawa.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Ōme,_Tokyo"
    }
  },
  {
    id: "beer-suntory-musashino",
    name: "Suntory Musashino Brewery",
    region: "north",
    appellation: "Premium Malt's lager",
    description:
      "Suntory's beer brewery in Fuchu, on Tokyo's western outskirts — a free, well-regarded factory tour ending in a tasting of their Premium Malt's lineup. Book online ahead; tours run in Japanese with an English pamphlet.",
    website: "https://www.suntory.co.jp/factory/musashino/",
    address: "3-1-1 Yaho, Fuchu, Tokyo",
    coords: [35.6699, 139.4779],
    bookingNote: "Free — reserve a tour slot online in advance.",
    image: "./images/beer-musashino.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Suntory"
    }
  },

  // ============== SOUTH — Kyoto / Kobe ==============
  {
    id: "sake-gekkeikan",
    name: "Gekkeikan Okura Sake Museum",
    region: "south",
    appellation: "Fushimi sake",
    description:
      "One of Japan's oldest and biggest sake brands, founded in Fushimi in 1637. The museum walks through traditional brewing in the historic building, ending with a tasting — Fushimi's soft mineral water is the whole reason this became a brewing district in the first place.",
    website: "https://www.gekkeikan.co.jp/english/",
    address: "247 Minamihamacho, Fushimi Ward, Kyoto",
    coords: [34.9264, 135.7605],
    bookingNote: "Walk-ins welcome; small entry fee includes tastings.",
    image: "./images/sake-gekkeikan.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Gekkeikan"
    }
  },
  {
    id: "sake-kizakura",
    name: "Kizakura Kappa Country",
    region: "south",
    appellation: "Fushimi sake",
    description:
      "A short walk from Gekkeikan — a working brewery with an on-site restaurant and a quirky kappa (water-spirit folklore) museum, plus a beer hall for anyone who wants a break from sake.",
    website: "https://www.kizakura.co.jp/",
    address: "228 Shioyacho, Fushimi Ward, Kyoto",
    coords: [34.9280, 135.7615],
    bookingNote: "Walk-ins welcome.",
    image: "./images/sake-kizakura.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Fushimi-ku,_Kyoto"
    }
  },
  {
    id: "whisky-yamazaki",
    name: "Suntory Yamazaki Distillery",
    region: "south",
    appellation: "Single malt whisky",
    description:
      "Japan's oldest whisky distillery, founded in 1923 in a valley prized for its water, roughly midway between Kyoto and Osaka. Tours and tastings book out weeks ahead in peak season — reserve online as early as possible if this is a priority.",
    website: "https://www.suntory.com/factory/yamazaki/",
    address: "5-2-1 Yamazaki, Shimamoto, Osaka",
    coords: [34.8899, 135.6742],
    bookingNote: "Reserve online well in advance — tours sell out.",
    image: "./images/whisky-yamazaki.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Yamazaki_distillery"
    }
  },
  {
    id: "sake-hakutsuru",
    name: "Hakutsuru Sake Brewery Museum",
    region: "south",
    appellation: "Nada sake",
    description:
      "In Kobe's Nada district — Japan's single biggest sake-producing area, thanks to its ideal water and rice-growing conditions. A free museum in a preserved Edo-era brewery building, with a tasting at the end. Not currently on the itinerary, but an easy half-day add-on from Kyoto by train if the group wants one more stop.",
    website: "https://www.hakutsuru.co.jp/csr/shiryokan/",
    address: "4-5-5 Sumiyoshiminamimachi, Higashinada Ward, Kobe",
    coords: [34.7025, 135.2725],
    bookingNote: "Free entry, walk-ins welcome.",
    image: "./images/sake-hakutsuru.jpg",
    imageCredit: {
      author: "Wikimedia Commons",
      license: "CC BY-SA",
      source: "https://en.wikipedia.org/wiki/Nada,_Kobe"
    }
  }
];
