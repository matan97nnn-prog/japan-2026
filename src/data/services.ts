import type { Service } from "./types";

export const services: Service[] = [
  // ==================== NORTH — Tokyo / Nikko / Hakone / Fuji / Alps / Kanazawa ====================

  {
    id: "rest-n-asakusa-tempura",
    name: "Tempura Daikokuya — Asakusa",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Old-school tempura, a short walk from Senso-ji",
    description:
      "A century-old tempura specialist near Senso-ji, serving crisp, classic Edo-style tempura over rice. Expect a queue at peak times — worth it.",
    address: "Asakusa, Taito City, Tokyo",
    coords: [35.7115, 139.7960],
    hours: "Lunch & dinner"
  },
  {
    id: "rest-n-omoide-yokocho",
    name: "Omoide Yokocho — Shinjuku",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Tiny yakitori alleys, elbow-to-elbow",
    description:
      "A cluster of narrow alleys packed with tiny yakitori and izakaya counters, a few seats each, right by Shinjuku Station. Loud, smoky, and one of the most atmospheric places to eat in Tokyo.",
    address: "1 Chome Nishishinjuku, Shinjuku City, Tokyo",
    coords: [35.6938, 139.6997],
    hours: "Evenings"
  },
  {
    id: "rest-n-nikko-yuba",
    name: "Yuba (tofu skin) lunch — Nikko",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Nikko's local specialty, near Toshogu",
    description:
      "Nikko's signature dish — delicate tofu-skin (yuba) prepared several ways, served at small local restaurants near the Toshogu approach. A light, easy lunch between temple visits.",
    address: "Near Toshogu Shrine, Nikko, Tochigi",
    coords: [36.7550, 139.5985],
    hours: "Lunch"
  },
  {
    id: "rest-n-hakone-ryokan-kaiseki",
    name: "Ryokan kaiseki dinner — Hakone",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Multi-course kaiseki, included with the ryokan stay",
    description:
      "Hakone Yutowa's dinner plan is a seasonal multi-course kaiseki meal, served in-room or in a private dining room. Booked as part of the stay, not separately.",
    address: "Hakone Yutowa, Hakone, Kanagawa",
    coords: [35.2323, 139.0508],
    hours: "Dinner, by ryokan reservation"
  },
  {
    id: "rest-n-houtou-fuji",
    name: "Houtou noodles — Kawaguchiko / Fujiyoshida",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Thick hand-cut noodles with vegetables, the Fuji-area specialty",
    description:
      "Houtou is the Fuji Five Lakes region's signature dish — thick, flat hand-cut noodles simmered in a miso broth with pumpkin and root vegetables. A warming, filling dinner after a day of lake-hopping.",
    address: "Fujikawaguchiko, Yamanashi",
    coords: [35.5019, 138.7645],
    hours: "Lunch & dinner"
  },
  {
    id: "rest-n-matsumoto-soba",
    name: "Soba restaurant — Nakamachi Street, Matsumoto",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Some of Japan's best soba, by local reputation",
    description:
      "Matsumoto is proud of its soba, made with buckwheat grown in the surrounding highlands. Nakamachi Street's old kura warehouse buildings hold several well-regarded soba restaurants — ask the hotel for their pick.",
    address: "Nakamachi, Matsumoto, Nagano",
    coords: [36.2364, 137.9678],
    hours: "Lunch & dinner"
  },
  {
    id: "rest-n-kamikochi-lunch",
    name: "Lunch near Kappa Bridge — Kamikochi",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "A handful of simple restaurants right by the bridge",
    description:
      "A small cluster of restaurants and huts by Kappa Bridge serve simple, warming lunches — curry rice, soba, grilled river fish — right beside the Azusa River view.",
    address: "Kappa Bridge, Kamikochi, Nagano",
    coords: [36.2506, 137.6367],
    hours: "Lunch, seasonal (closed in winter)"
  },
  {
    id: "rest-n-hida-beef",
    name: "Hida beef dinner — Takayama",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Takayama's marbled, locally raised beef",
    description:
      "Hida beef is Takayama's answer to Kobe or Matsusaka — richly marbled, locally raised, usually grilled tableside on a hoba leaf or as steak skewers at the morning market. Worth a dedicated dinner in town, or as part of the ryokan's kaiseki course.",
    address: "Takayama, Gifu",
    coords: [36.1408, 137.2528],
    hours: "Dinner"
  },
  {
    id: "rest-n-omicho-kappou",
    name: "Kappou dinner — Kanazawa",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Traditional Kanazawa cuisine, course by course",
    description:
      "Kappou-style dining serves Kanazawa's celebrated seafood and seasonal produce one dish at a time, prepared in front of you. A step up from a casual Omicho Market lunch, and worth booking for one of the two Kanazawa nights.",
    address: "Korinbo / near Omicho Market, Kanazawa, Ishikawa",
    coords: [36.5680, 136.6580],
    hours: "Dinner, reservation recommended"
  },
  {
    id: "konbini-shinjuku",
    name: "7-Eleven / Lawson — Shinjuku",
    category: "supermarket",
    region: "north",
    base: "north",
    shortDescription: "Konbini for onigiri, snacks and IC card top-ups",
    description:
      "Convenience stores are everywhere near Shinjuku Station — the easiest spot for a quick breakfast, IC card top-up, or ATM withdrawal (7-Eleven ATMs reliably accept foreign cards).",
    address: "Around Shinjuku Station, Tokyo",
    coords: [35.6905, 139.7005],
    hours: "24 hours"
  },

  // ==================== SOUTH — Kyoto / Nara ====================

  {
    id: "rest-s-nishiki-market",
    name: "Nishiki Market food stalls — Kyoto",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "Kyoto's 'kitchen', a covered grazing street",
    description:
      "A five-block covered shopping street of small food stalls — pickles, skewered mochi, fresh yuba, matcha sweets. A good grazing stop between checking in and an evening walk through Gion.",
    address: "Nishikikoji-dori, Nakagyo Ward, Kyoto",
    coords: [35.0050, 135.7649],
    hours: "Daytime, most stalls close by early evening"
  },
  {
    id: "rest-s-gion-pontocho",
    name: "Dinner in Gion or Pontocho — Kyoto",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "Traditional dining, river-view terraces on Pontocho",
    description:
      "Gion has some of Kyoto's finest kaiseki restaurants; a few streets over, Pontocho Alley's narrow lane of restaurants includes several with terraces right over the Kamo River — a favorite spot for a couples' evening. Reserve ahead for either.",
    address: "Gion / Pontocho, Kyoto",
    coords: [35.0037, 135.7788],
    hours: "Dinner, reservation recommended"
  },
  {
    id: "rest-s-arashiyama-tofu",
    name: "Riverside tofu kaiseki — Arashiyama",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "A local specialty lunch by the Katsura River",
    description:
      "Tofu kaiseki — a multi-course meal built around fresh, local tofu in its many forms — is an Arashiyama specialty, served at restaurants near the Togetsukyo Bridge with river views.",
    address: "Near Togetsukyo Bridge, Arashiyama, Kyoto",
    coords: [35.0094, 135.6774],
    hours: "Lunch"
  },
  {
    id: "konbini-kyoto-station",
    name: "7-Eleven / FamilyMart — Kyoto Station",
    category: "supermarket",
    region: "south",
    base: "south",
    shortDescription: "Konbini for onigiri, snacks and IC card top-ups",
    description:
      "Multiple convenience stores inside and around Kyoto Station — good for breakfast before an early Fushimi Inari start, or an ekiben for the train to Nara.",
    address: "Kyoto Station, Shimogyo Ward, Kyoto",
    coords: [34.9858, 135.7588],
    hours: "24 hours"
  }
];

/** Fast id → Service lookup used by the chapter detail page when it
 *  renders a curated list of restaurants for a given day. Built lazily
 *  on first call and cached at module level — repeated lookups are O(1). */
let _serviceById: Map<string, Service> | null = null;

export function getService(id: string): Service | undefined {
  if (!_serviceById) {
    _serviceById = new Map(services.map(s => [s.id, s]));
  }
  return _serviceById.get(id);
}
