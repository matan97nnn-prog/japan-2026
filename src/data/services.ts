import type { Service } from "./types";

export const services: Service[] = [
  // ==================== NORTH — Tokyo / Hakone ====================

  // Restaurants
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
    id: "rest-n-hakone-ryokan-kaiseki",
    name: "Ryokan kaiseki dinner — Hakone",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Multi-course kaiseki, included with the ryokan stay",
    description:
      "Most Hakone ryokan offer a dinner-included plan — a seasonal multi-course kaiseki meal, served in-room or in a private dining room. Book the plan when reserving the stay, not separately.",
    address: "Gora / Hakone-Yumoto, Hakone, Kanagawa",
    coords: [35.2323, 139.0508],
    hours: "Dinner, by ryokan reservation"
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

  // ==================== SOUTH — Kyoto / Nara / Osaka / Himeji ====================

  {
    id: "rest-s-nishiki-market",
    name: "Nishiki Market food stalls — Kyoto",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "Kyoto's 'kitchen', a covered grazing street",
    description:
      "A five-block covered shopping street of small food stalls — pickles, skewered mochi, fresh yuba, matcha sweets. A good grazing lunch between Higashiyama and Kyoto Station.",
    address: "Nishikikoji-dori, Nakagyo Ward, Kyoto",
    coords: [35.0050, 135.7649],
    hours: "Daytime, most stalls close by early evening"
  },
  {
    id: "rest-s-gion-kaiseki",
    name: "Kaiseki dinner — Gion",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "Traditional multi-course Kyoto cuisine",
    description:
      "Gion has some of Kyoto's finest kaiseki restaurants, seasonal multi-course meals in a traditional setting. Reserve ahead — the well-regarded ones book out days in advance.",
    address: "Gion, Higashiyama Ward, Kyoto",
    coords: [35.0037, 135.7788],
    hours: "Dinner, reservation recommended"
  },
  {
    id: "rest-s-dotonbori-takoyaki",
    name: "Takoyaki & okonomiyaki stalls — Dotonbori",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "Osaka's street food headline acts",
    description:
      "Dotonbori's canal-side stalls are the place for Osaka's two signature street foods — takoyaki (octopus batter balls) and okonomiyaki (savory pancake). Casual, cash-friendly, standing-room.",
    address: "Dotonbori, Chuo Ward, Osaka",
    coords: [34.6687, 135.5013],
    hours: "Lunch & dinner, late"
  },
  {
    id: "rest-s-kuromon-market",
    name: "Kuromon Ichiba Market — Osaka",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "A calmer, mostly-indoor grazing market",
    description:
      "A covered market street with fresh seafood, wagyu skewers and fruit stalls — a quieter alternative to Dotonbori for the same style of grazing lunch.",
    address: "Nihonbashi, Chuo Ward, Osaka",
    coords: [34.6653, 135.5061],
    hours: "Daytime"
  },
  {
    id: "konbini-kyoto-station",
    name: "7-Eleven / FamilyMart — Kyoto Station",
    category: "supermarket",
    region: "south",
    base: "south",
    shortDescription: "Konbini for onigiri, snacks and IC card top-ups",
    description:
      "Multiple convenience stores inside and around Kyoto Station — good for breakfast before an early Fushimi Inari start, or an ekiben for the train to Nara or Osaka.",
    address: "Kyoto Station, Shimogyo Ward, Kyoto",
    coords: [34.9858, 135.7588],
    hours: "24 hours"
  },
  {
    id: "konbini-osaka-namba",
    name: "7-Eleven / Lawson — Namba",
    category: "supermarket",
    region: "south",
    base: "south",
    shortDescription: "Konbini near the Osaka base",
    description: "Convenience stores throughout Namba for snacks, drinks and IC card top-ups before a day at Universal Studios Japan.",
    address: "Namba, Chuo Ward, Osaka",
    coords: [34.6627, 135.5006],
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
